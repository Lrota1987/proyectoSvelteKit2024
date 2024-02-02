import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export const load = async ({ cookies}) => {


	const token = cookies.get('login');
	console.log(token);
    try {
		var decoded = jwt.verify(token, '123');
	  } catch(err) {
		throw redirect(303 /*temporal redirect */, `/`);
	  }
	// se obtiene el usuario del token. aquí lo simulamos.
	return {
		username: decoded.username,
		role: decoded.role 
	};
};