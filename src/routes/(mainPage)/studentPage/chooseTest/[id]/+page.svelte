<script>  
  import Pregunta from "../../../../../lib/cuestionario/Pregunta.svelte";
  import store from "../../../../../stores/store";
  import AdminResp from "../../../../../lib/cuestionario/adminResp.svelte";
  export let data;
  export const test = data.test;

</script>

<div id="fondo">
  <div id="fondo2"/>
    {#if $store.salir === false}
    <div class="container-preg" >
      <Pregunta
        bind:preguntas={test.preguntas}
        />
    </div>
    
    {:else}
      <AdminResp
        preguntas={test.preguntas}
        />

      {/if}
    <!--
    <div class="container-menu">
      <Menu/>
    </div>
      <div>
      <p>{test.preguntas[0].Pregunta}</p>
      </div>
      -->
    
    
</div>




  <style>


.container-preg {
  box-sizing: border-box;
  position: relative;
  width: 70%;
  height: 80%;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

@media only screen and (width <= 850px) {

.container-preg {

  width: 100%;
  height: 100%;

}

}


#fondo {
  background-image: url("../../../../../assets/fondobueno.png");
  box-sizing: border-box;
  position: relative;
  background-size:cover;
  background-repeat: no-repeat;
  background-position:bottom;
  width: 100%;
  height: 100vh;
  
}
#fondo2 {
  background-image: url("../../../../../assets/picmix.com_863058.gif");

  position: absolute;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
}

  </style>
