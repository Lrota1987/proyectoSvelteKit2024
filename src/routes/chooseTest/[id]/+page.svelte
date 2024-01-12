<script>
  export let data;
  export const test = data.test;
  console.log(data);
  import Pregunta from "../../../lib/cuestionario/Pregunta.svelte";
  import store from "../../../stores/store";
</script>

<div id="fondo">
  <div id="fondo2"/>
    {#if $store.salir === false}
    <div class="container-preg" >
      <Pregunta
        preguntas={test.preguntas}
        />
    </div>
    {/if}
<!--

  <div>
  <p>{test.preguntas[0].Pregunta}</p>
</div>
    {:else}
      <AdminResp/>
    
    <div class="container-menu">
      <Menu/>
    </div>
    <div class="footer">
      -->
    
    
</div>




  <style>

.container-preg {
  box-sizing: border-box;
  position: absolute;
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

.footer {
  position: absolute;
  top: 100%;
  height: 150px;
  width: 100%;
  background-image: linear-gradient(LemonChiffon, khaki, LemonChiffon);
}

#fondo {
  background-image: url("../../../assets/fondobueno.png");
  box-sizing: border-box;
  position: relative;
  background-size:cover;
  background-repeat: no-repeat;
  background-position:bottom;
  width: 100%;
  height: 100%;
  
}
#fondo2 {
  background-image: url("../../../assets/picmix.com_863058.gif");

  position: absolute;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
}

  </style>
