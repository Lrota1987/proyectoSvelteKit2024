<script>

    export let pregunta;
    export let iden = "", idenDiv="";
    export let value = "";
    export let clase = "botonInactivo";
    export let onClick = () => {};


</script>
<div id={idenDiv} class="division">
<button id = {iden} value = {value} class = {clase} on:click={onClick}>{pregunta}</button>
</div>

<style>
    .division {
        position:absolute;
        width: 200px;
        height: 100px;
   
    }
    .botonInactivo {
        font-size: 35px;
        background-color: transparent;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    

    

    .botonInactivo:hover, .botonActivo {
        position: absolute;
        background-color:rgb(154, 250, 154);
        font-size: 35px;
        width: 110%;
        height: 110%;
        box-shadow: 2px 2px 5px black;
        transition: 1s;
        border-radius: 10px;
    }

    #div1 {

        left: 10%;
        bottom: 70%;

    }

    #div2 {
        right: 10%;
        bottom: 70%;

    }

    #div3 {
        bottom: 25%;
        left: 10%;

    }

    #div4 {

        bottom: 25%;
        right: 10%;

    }

    @media (width<= 850px) {

    .botonInactivo:hover, .botonActivo {
        font-size: 35px;
        width: 200px;
        height: 100px;
      
    }


    .division {
        position: relative;
        margin: auto;
        display: block;
        margin-top: 5%;
        top: 0;
        left: 0;
        
    }
    .botonInactivo {
        
        font-size: 35px;
        width: 200px;
        height: 100px;

        
    }

    #div1 {

        left: 0

        }

    #div2 {
        left: 0;

        }

    #div3 {
        left: 0%;

        }

    #div4 {
        left: 0%;

        }

    }
    
</style>