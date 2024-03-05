import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {
    if (cookies.get('login')) {
        if (cookies.get('login').role === 'student') {
            redirect(303, '/studentPage');
        }
        else {
            redirect(303, '/studentPage');
        }

    }
   
});