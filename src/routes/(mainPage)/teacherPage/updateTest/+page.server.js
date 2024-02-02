import { redirect } from '@sveltejs/kit';

let arrayTest = [];

export const load = async ({ parent }) => {
	const { username, role} = await parent();
	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}
	if ( role !== 'teacher' ) {
		throw redirect(303 /*temporal redirect */, `/studentPage`);
	}

    const response2 = await fetch(`http://localhost:4001/teachers`);
    const teachers = await response2.json();

	for (let teacher of teachers) {
		if (teacher.name === username) {
			arrayTest = teacher.test;
		}
	}

	return { arrayTest };




};
