import { redirect } from '@sveltejs/kit';

export const actions = {
	async deleteUser ({url, cookies}) {

		const username = url.searchParams.get('username');

		const response = await fetch(`http://localhost:4001/students`);
        const students = await response.json();

		for (var student of students)
		if (username === student.name) {
			let id = student.id;
			const respuesta = await fetch(`http://localhost:4001/students/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				  }
			});

			if (respuesta.ok) {
				console.log(`The user with ID ${id} has been deleted.`);
				cookies.delete('login', {path: '/'});
				throw redirect(303, '/');
			}
			else {
				console.error(`Error: ${respuesta.statusText}`);
			}
		}
	}
}

export const load = async ({ parent}) => {
	const { role, username } = await parent();
	const user = username;
	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}
	if ( role !== 'student' ) {
		throw redirect(303 /*temporal redirect */, `/teacherPage`);
	}

	return { user };
};


