import { redirect } from '@sveltejs/kit';


export const load = async ({ parent}) => {
	const { role, username } = await parent();
	const user = username;
	console.log("-----", username, role);
	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}
	if ( role !== 'student' ) {
		throw redirect(303 /*temporal redirect */, `/teacherPage`);
	}

	return { user };


};
