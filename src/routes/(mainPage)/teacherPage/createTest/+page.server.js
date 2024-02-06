import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export const actions = {
	async createTest({ request, cookies }) {
        const form = await request.formData();
		const numPreg = form.get('numPreguntas');
		const token = cookies.get('login');
		var username = (jwt.verify(token, '123')).username;

		console.log(username);




		const response = await fetch(`http://localhost:4001/test`);
        const test = await response.json();

		const lastId = test[test.length -1].id +1;
		var array = [];		


		for (var i=0 ; i<numPreg ; i++) {
			var pregunta = form.get(`pregunta${i}`);
			var respuesta1 = form.get(`respuesta1${i}`);
			var respuesta2 = form.get(`respuesta2${i}`);
			var respuesta3 = form.get(`respuesta3${i}`);
			var respuesta4 = form.get(`respuesta4${i}`);
			var correcto = form.get(`correcto${i}`);
			correcto = parseInt(correcto);
			var array2 = [
				{
					Pregunta:pregunta,
					respuestas: [
						{
							resp:respuesta1,
							correcto:false
						},
						{
							resp:respuesta2,
							correcto:false
						},
						{
							resp:respuesta3,
							correcto:false
						},
						{
							resp:respuesta4,
							correcto:false
						},
					]
				}
			]
			array = array.concat(array2);
			array[i].respuestas[correcto].correcto=true;
		}

		const newObject = {
			id: lastId,
			preguntas: array
		}

		const response3 = await fetch(`http://localhost:4001/teachers`);
        const teachers = await response3.json();

		for (var teacher of teachers) {
			if (username === teacher.name) {
				const respuesta = await fetch(`http://localhost:4001/teachers/${teacher.id}`, {
					method: 'PUT',
					headers: {
						'Content-Type':'application/json'
					},
					body: JSON.stringify({	...teacher,
						test: [...teacher.test, lastId]})
					});
		
					if (respuesta.ok) {
						console.log('bien!!!!!!!!!');
					}
					else {
						console.log(`${respuesta.statusText}`);
					}

			}
		}


		const response2 = await fetch('http://localhost:4001/test', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(newObject)
		});

		if (response2.ok) {
			const result = await response2.json();
			console.log(`New test added: ${result}`);
			throw redirect(303, '/teacherPage');
		}
		else {
			console.error(`Failed to add new test ${response2.statusText}`);
		}
	}


}


export const load = async ({ parent}) => {
	const { username, role } = await parent();
	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}
	if ( role !== 'teacher' ) {
		throw redirect(303 /*temporal redirect */, `/studentPage`);
	}

	

};
