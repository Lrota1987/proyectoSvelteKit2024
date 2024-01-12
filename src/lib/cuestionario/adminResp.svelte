<script>
    import storeResp from "../../stores/storeRespuestas"

    export let preguntas;
    let cont = 0;
    let numPreguntas;

        
        numPreguntas = preguntas.length;
        for (let i=0 ; i<$storeResp.respuestasEval.length ; i++) {
        if ($storeResp.respuestasEval[i] === true) {
            cont++;
        }
        }
    
</script>
<div class="solution">
<h2 id="finalSol">Has respondido correctamente {cont} de {numPreguntas} preguntas.</h2>
</div>

<style>


    .solution {
        background-color: blueviolet;
        position:absolute;
        width: 800px;
        height: 100px;
        left:calc(50% - 400px);
        top: calc(50% - 50px);
        border-style: ridge;
    }

    #finalSol {
        position: sticky;
        text-align: center;
        color:black;
        font-size: 35px;
    }

    @media (width <= 850px) {
        .solution {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }

        #finalSol {
            position: absolute;
            top: calc(50% - 17.5px);
        }
    }
</style>