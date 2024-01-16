import { error, json } from '@sveltejs/kit';

export const POST = async ({ request}) => {
    const data = await request.json();

    if (!data.username) {
        throw error(400, "Username is required");
    }
    if (!data.password) {
        throw error(400, "Password is required");
    }

    return json (
        {name: data.username},
        {
            status:200
        }
    
    );   
};