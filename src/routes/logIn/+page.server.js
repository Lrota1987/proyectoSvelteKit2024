import { redirect } from '@sveltejs/kit';

export const actions = {
    logout: ({ cookies, url }) => {
        cookies.delete('login', {path: '/'});
        throw redirect(303, url.searchParams.get('redirectTo') || '/');
    }
}; 