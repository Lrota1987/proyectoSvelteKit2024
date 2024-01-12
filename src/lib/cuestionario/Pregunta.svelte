<script>
    
    import store from "../../stores/store";  
    import storeResp from "../../stores/storeRespuestas";
    import Respuestas from "./Respuestas.svelte";

    
    
    export var preguntas;

    let pregunta;
    let resp;
    let activo = false;
    
    if ($store.newArray.length === 0) {
        store.noRepetir(preguntas);
        resp=$store.newArray[0].respuestas;
        pregunta=$store.newArray[0].Pregunta;
        console.log($store.newArray);
    }
            
            

    function clickHandle() {
                activo = false;
                store.noRepetir(preguntas);
                storeResp.evaluar();
                resp=$store.newArray[$store.newArray.length-1].respuestas;
                pregunta=$store.newArray[$store.newArray.length-1].Pregunta;

   
    }
    function clickHandle2() {
        $store.salir =true;
    }

    

</script>

    <div class="preg">
        <h1>{pregunta}</h1>
    </div>
    <div class="resp">
            <Respuestas 
            bind:activo ={activo}
            respuestas ={resp}
            
            />      
</div>


      {#if activo === true && $store.fin===false}
        <button id="siguiente" on:click={clickHandle}>Siguiente</button>    
      {/if}
      {#if $store.fin=== true}
      <h2>Has completado el formulario</h2>
      <button id="siguiente" on:click={clickHandle2}>Finalizar</button>  
      {/if}
      

<style>
    h1 {
        background-color: rgb(248, 183, 86);
        text-align: center;
        font-size: 50px;
    }


    .preg {
    width:100%;
    z-index: 10;
    position: relative;
    border-style: double;
    background-color:rgb(248, 183, 86);
    height: 20%;
    

   }

   .resp {
    width: 100%;
    background-image: linear-gradient(rgb(248, 183, 86), rgb(163, 255, 163));
    border-style: double;
    position: relative;
    height: 80%;

 
   }

   #siguiente {
    position: absolute;
    left: calc(50% - 50px);
    bottom: 20px;
    margin: auto;
    width: 100px;
    height: 50px;
    font-size: larger;
   }

   h2 {
    color: blanchedalmond;
    position: relative;
    background-color: transparent;
    background-size:cover;
    text-align: center;
    font-size: 2vw;
    margin: 0%;
   }
   @media (width<= 850px) {


    h1 {
        margin: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        width: 70%;
        background-color: transparent;
    }

}
</style>