import { writable } from "svelte/store";

const storeRespuestas  = writable ({
    respuestasEval: [],
    respuestaCorrecta: false
});

function cogerRespuesta(respuesta) {
    storeRespuestas.update((data) => {
        return {respuestasEval: data.respuestasEval, respuestaCorrecta: respuesta};
    })
}

function evaluar() {
    storeRespuestas.update((data) => {
        data.respuestasEval.push(data.respuestaCorrecta);
        return {respuestasEval: data.respuestasEval, respuestaCorrecta: data.respuestaCorrecta};
    })
}

export default {... storeRespuestas, evaluar, cogerRespuesta}; 