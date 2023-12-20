import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
    console.log('Funcion load llamada en cuestionario-page.server.js');
    const { fetch, params } = serverLoadEvent;
    const { id } = params;
    const response = await fetch(`http://localhost:4000/test/${id}`);
    if (response.status === 404) {
        throw error(404, {message: 'Items not found,', hint:'Try a different test'});
    }
    console.log('respuesta: ', response.status);
    const test = await response.json();
    return { test };
}