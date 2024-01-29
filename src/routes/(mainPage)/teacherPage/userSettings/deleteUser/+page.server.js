import { redirect } from '@sveltejs/kit';

export const actions = {
	async deleteUser ({url, cookies}) {
		const username = url.searchParams.get('username');

		const response = await fetch(`http://localhost:4001/students`);
        const students = await response.json();



		const response3 = await fetch(`http://localhost:4001/teachers`);
        const teachers = await response3.json();

		for (var teacher of teachers) {
			if (teacher.name === username) {
				for (var student of students) {
					if (teacher.id === student.teacher) {
						var id=student.id;
						const respuesta = await fetch(`http://localhost:4001/students/${id}`, {
							method: 'DELETE',
							headers: {
								'Content-Type': 'application/json',
							  }
						});
						if (respuesta.ok) {
							console.log(`The student ${student.name} has been deleted.`);
						}
						else {
							console.error(`Error: ${respuesta.statusText}`);
						}
					}
				}
				const response2 = await fetch(`http://localhost:4001/test`);
				const tests = await response2.json();

				for (var test of tests) {
					id = test.id;
					if (teacher.test.includes(id)) {
						const respuesta2 = await fetch(`http://localhost:4001/test/${id}`, {
							method: 'DELETE',
							headers: {
								'Content-Type': 'application/json',
							  }
						});
						if (respuesta2.ok) {
							console.log(`The test ${test.id} has been deleted.`);
						}
						else {
							console.error(`Error: ${respuesta2.statusText}`);
						}
					}
				}

				const respuesta3 = await fetch(`http://localhost:4001/teachers/${teacher.id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					  }
				});
				if (respuesta3.ok) {
					console.log(`The teacher ${teacher.name} has been deleted.`);
					cookies.delete('login', {path: '/'});
					throw redirect(303, '/');
				}
				else {
					console.error(`Error: ${respuesta3.statusText}`);
				}
			}
		}
	}
}


export const load = async ({ parent}) => {
	const { username, role } = await parent();

	const user = username;
	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}
	if ( role !== 'teacher' ) {
		throw redirect(303 /*temporal redirect */, `/studentPage`);
	}
	return { user };
};
