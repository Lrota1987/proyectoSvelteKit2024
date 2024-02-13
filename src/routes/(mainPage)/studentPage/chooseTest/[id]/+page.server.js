import { error } from '@sveltejs/kit';
import storeResp from "../../../../../stores/storeRespuestas"
import store from "../../../../../stores/store"
import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';

export const actions = {
	async addHistory ({cookies, url, fetch}) {

        storeResp.respuestasEval = [];
        store.salir = false;

		const idTest = url.searchParams.get('idTest');
        const porc = url.searchParams.get('porcentaje');
        const token = cookies.get('login');
        var decoded = jwt.verify(token, '123');
        const username = decoded.username;
        console.log(">>>>>>>>",idTest," ",username," ",porc);

        const response = await fetch(`http://localhost:4001/students`);
        if (response.ok) {
            const students = await response.json();
            for (var student of students) {
                if (student.name === username) {
                    const respuesta = await fetch(`http://localhost:4001/students/${student.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({	...student,
                            puntos: (parseFloat(student.puntos)+parseFloat(porc))})
                        });
                        if (respuesta.ok) {
                            console.log('bien!!!!!!!!!');
                            const response = await fetch(`http://localhost:4001/record`);
                            const record = await response.json();
                            let pickedId = 0;
                            if (record.length !== 0) {
                                pickedId = record[record.length -1].id +1;
                            }
                            else {
                                pickedId = 1;
                            }
                                const response2 = await fetch('/api/currentTime');
                                const currentTime = await response2.text();


                            console.log(currentTime);



                            const newRecord = {
                                id: pickedId,
                                student: username,
                                test: parseInt(idTest),
                                date: currentTime,
                                puntosGan:parseFloat(porc)
                            };

                            const respuesta2 = await fetch('http://localhost:4001/record', {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json'
                                },
                                body: JSON.stringify(newRecord)
                            });
                            if (respuesta2.ok) {
                                console.log("Se ha grabado bien el historial");
                            }
                            else {
                                console.log(respuesta2.statusText);
                            }
                            
                        }
                        else {
                            console.log(`${respuesta.statusText}`);
                        }
                }
            }
        }

        return redirect(302,'/studentPage');
	}
}


export const load = async (serverLoadEvent) => {
    //console.log('Funcion load llamada en cuestionario-page.server.js');
    const { fetch, params } = serverLoadEvent;
    const { id } = params;
    const response = await fetch(`http://localhost:4001/test/${id}`);
    if (response.status === 404) {
        throw error(404, {message: 'Items not found,', hint:'Try a different test'});
    }
    console.log('respuesta: ', response.status);
    const test = await response.json();
    return { test };
}
