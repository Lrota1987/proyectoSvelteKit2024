export const load = async ({ cookies}) => {


	const token = cookies.get('login');
	const token2 = cookies.get('role');
    
	// se obtiene el usuario del token. aquí lo simulamos.
	return {
		username: token ? token: null,
		role: token2 ? token2: null
	};
};