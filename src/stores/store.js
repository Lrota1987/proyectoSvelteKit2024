import { writable } from "svelte/store";


const store = writable ({
    fin : false,
    newArray: [],
    salir: false,
    
});




function noRepetir(preguntas) {
    store.update((data) => { 
            
            if (data.newArray.length < preguntas.length) {
                var pregunta = preguntas[Math.round(Math.random()*(preguntas.length-1))];
                var diferente = false;
                while (diferente === false) {
    
                    if (data.newArray.includes(pregunta)) {
                        pregunta = preguntas[Math.round(Math.random()*(preguntas.length-1))];
                    }
                    else {
                        data.newArray.push(pregunta);
                        diferente = true;
                        
                    }
                }
                return {fin: false, newArray: data.newArray, salir: false};
    
            }
            else {
                return {fin: true, newArray: data.newArray, salir: false}
            };
            
                
                
            }
        
    )
        

        }
    

export default {... store, noRepetir}