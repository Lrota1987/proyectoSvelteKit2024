import { redirect } from '@sveltejs/kit';


export const load = async ({ parent}) => {
	const {  role, username } = await parent();
	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}
	if ( role !== 'teacher' ) {
		throw redirect(303 /*temporal redirect */, `/studentPage`);
	}

};
