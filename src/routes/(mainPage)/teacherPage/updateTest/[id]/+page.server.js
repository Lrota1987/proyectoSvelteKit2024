import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const actions = {
    async updateTest({ request, params }) {
        const { id } = params;
        const form = await request.formData();
        var pregCorrecta = false;
        
        const response = await fetch(`http://localhost:4001/test/${id}`);
        const test = await response.json();

        console.log(">>>>", test);
        for (var i=0 ; i<test.preguntas.length ; i++) {
            const pregunta = form.get(`pregunta${i}`);
            const respuesta1 = form.get(`respuesta1${i}`);
            const respuesta2 = form.get(`respuesta2${i}`);
            const respuesta3 = form.get(`respuesta3${i}`);
            const respuesta4 = form.get(`respuesta4${i}`);
            const correcto = form.get(`correcto${i}`);
            console.log(typeof(correcto));
            test.preguntas[i].Pregunta=pregunta;

            for (var j = 0 ; j < test.preguntas[i].respuestas.length ; j++) {
                pregCorrecta = false;
                if (j === parseInt(correcto)) {
                    pregCorrecta = true;
                }
                test.preguntas[i].respuestas[j].correcto=pregCorrecta;
                if (j===0) {
                    test.preguntas[i].respuestas[j].resp=respuesta1;
                }
                if (j===1) {
                    test.preguntas[i].respuestas[j].resp=respuesta2;
                }
                if (j===2) {
                    test.preguntas[i].respuestas[j].resp=respuesta3;
                }
                if (j===3) {
                    test.preguntas[i].respuestas[j].resp=respuesta4;
                }
            }
        }

        const respuesta = await fetch(`http://localhost:4001/test/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(test)
            });

            if (respuesta.ok) {
               throw redirect(303, '/teacherPage');
            }
            else {
                console.log('mal!!!!!!!!!');
            }
    }
}

export const load = async ({parent, params}) => {
    const { id } = params;
	const { username, role } = await parent();
	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}
	if ( role !== 'teacher' ) {
		throw redirect(303 /*temporal redirect */, `/studentPage`);
	}

    const response = await fetch(`http://localhost:4001/test/${id}`);
    if (response.status === 404) {
        throw error(404, {message: 'Items not found,', hint:'Try a different test'});
    }
    const test2 = await response.json();

	return { test2 };




};