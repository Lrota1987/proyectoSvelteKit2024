<script>
    import storeResp from "../../stores/storeRespuestas"
    import store from "../../stores/store"
    import { goto } from "$app/navigation";

    export let preguntas;
    export let idTest;
    export let porc = 0;
    let cont = 0;
    let numPreguntas;
    console.log(idTest);

        
        numPreguntas = preguntas.length;
        for (let i=0 ; i<$storeResp.respuestasEval.length ; i++) {
        if ($storeResp.respuestasEval[i] === true) {
            cont++;
        }
        }
        porc=(cont/numPreguntas)*100;

  /*  const handleClick = () => {
    $storeResp.respuestasEval = [];
    $store.salir = false;
    window.location.assign("/studentPage");
}*/

    
</script>

<div class="solution">
<h2 id="finalSol">Has respondido correctamente {cont} de {numPreguntas} preguntas.</h2>
<p>{idTest}</p>
</div>
<div class="boton-salir">
    <form action={`/studentPage/chooseTest/${idTest}?/addHistory&idTest=+${idTest}&porcentaje=+${porc}`} method="POST">
        <button type="submit">
            Salir
        </button>
    </form>

</div>

<style>

    button {
        font-size:x-large;
        height: 50px;
        width: 100px;
        text-decoration: none;
    }
    .boton-salir {
        position: absolute;
        top:60%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
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