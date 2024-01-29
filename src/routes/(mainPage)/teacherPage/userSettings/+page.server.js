import { redirect } from '@sveltejs/kit';


export const load = async ({ parent}) => {
	const { username, role } = await parent();
	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}
	if ( role !== 'teacher' ) {
		throw redirect(303 /*temporal redirect */, `/studentPage`);
	}

};
