import { redirect } from '@sveltejs/kit';


export const load = async ({ parent}) => {
	const { username } = await parent();

	if (!username) {
        throw redirect(303 /*temporal redirect */, `/`);
	}

};


