export const load = async ({ cookies}) => {


	const token = cookies.get('login');
    
	// se obtiene el usuario del token. aquí lo simulamos.
	return {
		username: token ? token: null
	};
};