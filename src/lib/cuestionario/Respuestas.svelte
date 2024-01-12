<script>
    
    import storeResp from "../../stores/storeRespuestas";
    import store from "../../stores/store";
    import Boton from "./Respuesta.svelte"; 




    export let activo, respuestas;

    let activoTrue="", indexAc;

    
    $: indexAc = -1;
    $: activo = false;

    function handleClick(resp, index) {
        return function() {
            storeResp.cogerRespuesta(resp);
            activo = true;
            activoTrue="botonActivo";
            indexAc=index;
        }        
    }
    

 
    
</script>

{#each respuestas as respuesta, index}
        {#if activo === false && $store.fin===false}
        <Boton
            iden = "boton{index+1}"
            idenDiv= "div{index+1}"
            value = {respuesta.resp}
            pregunta = {respuesta.resp}
            onClick = {handleClick( respuesta.correcto, index)}
            clase = "botonInactivo"
            />
            

    {:else}

        {#if indexAc === index}
        <Boton
        iden = "boton{index+1}"
        idenDiv= "div{index+1}"
        value = {respuesta.resp}
        pregunta = {respuesta.resp}
        onClick = {handleClick( respuesta.correcto, index)}
        clase = {activoTrue}
        />
        {:else}
        <Boton
        iden = "boton{index+1}"
        idenDiv= "div{index+1}"
        value = {respuesta.resp}
        pregunta = {respuesta.resp}
        onClick = {handleClick( respuesta.correcto, index)}
        />
        {/if}
        
        
    {/if}

{/each}





<style>
    


</style>
