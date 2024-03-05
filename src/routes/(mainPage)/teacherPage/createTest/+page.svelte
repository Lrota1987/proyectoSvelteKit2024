<script>
    var array = [
        {
        Pregunta: "",
        respuestas: [
            {
            resp: "",
            correcto: false
            },
            {
            resp: "",
            correcto: false
            },
            {
            resp: "",
            correcto: false
            },
            {
            resp: "",
            correcto: false
            }
        ]
        }
    ];

    
   function handleClick() {
        array = array.concat({
        Pregunta: "",
        respuestas: [
            {
            resp: "",
            correcto: false
            },
            {
            resp: "",
            correcto: false
            },
            {
            resp: "",
            correcto: false
            },
            {
            resp: "",
            correcto: false
            }
        ]
        });
    };

    function handleClick2() {
        if(array.length !== 1) {
            array.pop();
            array = array.concat();
        }
    }

    

</script>

<video autoplay muted loop id="myVideo">
    <source src="/src/assets/Profesor_test_videos.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>
<p class="title">Create a test</p>
<div class="container" >
<form action={"?/createTest&array ="+array } method="POST">
        <input type="hidden" name="numPreguntas" value={array.length}>
        <input type="hidden" name="objeto" value={array}>
        <div class="form-container">
        {#each array as obj, numero}
            <div class="div-int">
            <table>
                <tr>
                    <td>
                        <label for="pregunta">Pregunta {numero + 1}:</label>
                    </td>
                    <td>
                        <input type="text" size="40" name="pregunta{numero}" id="pregunta" bind:value={obj.Pregunta} />
                    </td>
                </tr>
                <br>
                <tr colspan="4" class="resp-row">
                    <td colspan="4">Respuestas</td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta1">Respuesta1:</label>
                    </td>
                    <td>
                        <input type="text" name="respuesta1{numero}" id="respuesta1"  bind:value={obj.respuestas[0].resp}>
                    </td>
                    <td>
                        <input type="radio" name="correcto{numero}" id="correcto" value=0 checked>
                    </td>
                    <td>    
                        <label for="correcto">Correcto?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta2">Respuesta2:</label>
                    </td>
                    <td>
                        <input type="text" name="respuesta2{numero}" id="respuesta2" bind:value={obj.respuestas[1].resp}>
                    </td>
                    <td>
                        <input type="radio" name="correcto{numero}" id="correcto"  value=1>
            
                    </td>
                    <td>
                        <label for="correcto">Correcto?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta3">Respuesta3:</label>
                    </td>
                    <td>
                        <input type="text" name="respuesta3{numero}" id="respuesta3" bind:value={obj.respuestas[2].resp}/>
                    </td>
                    <td>
                        <input type="radio" name="correcto{numero}" id="correcto" value=2>
                    </td>
                    <td>
                        <label for="correcto">Correcto?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta4">Respuesta4:</label>
                    </td>
                    <td>
                        <input type="text" name="respuesta4{numero}" id="respuesta4" bind:value={obj.respuestas[3].resp}/>
                    </td>
                    <td>
                        <input type="radio" name="correcto{numero}" id="correcto"  value=3/>
            
                    </td>
                    <td>
                        <label for="correcto">Correcto?</label>
                    </td>
                </tr>
            </table>
            <div class="divisor"></div>
        </div>


        {/each}
    </div>
    <button type="submit" class=" enviar button">Crear cuestionario</button>


</form>
<br>
<button on:click={handleClick} class="btn">Añadir pregunta</button>
<button on:click={handleClick2} class="btn btnEliminar">Eliminar pregunta</button>
</div>
<style>
    .div-int {
        padding: 10px;
    }
    .title {
        font-size: 50px;
        text-align: center;
        color: var(--rojo-oscuro-1);
    }
    .divisor {
        height: 3px;
        background-color: black;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;

    }
    .form-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 25px;
        background-color:  #03212cb7;
        border-radius: 5px;
        border: 3px solid black;
        width: 80%;
        margin: 0 auto; 
        color: rgb(108, 108, 202);
    }
    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        min-height: 100%;
        z-index: -1;

    }
    .button {
        color: #fff;
        font-weight: 600;
        font-family: 'MedievalSharp' ;
        background-color: var(--rojo-oscuro-1) ;
        cursor: default;
        font-size:20px;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        width: 275px;
        height: 50px;  
        border-radius: 5px;
        border: 3px solid var(--rojo-oscuro-2); 
        padding: 5px;
        margin-left: 10%;
        transform: translateY(15vh);   
        
    }

    .button:hover{
        color: #fff;
        background-color: rgb(200, 0, 0);
        font-size:23px;
        padding: 3px;
        height: 50px;
        text-decoration:double;
        background: linear-gradient(-45deg, var(--rojo-oscuro-1),rgb(175, 0, 0), rgb(255, 0, 0),var(--rojo-oscuro-1));
        background-size: 400% 400%;
        animation: gradient 3s infinite;
    }
    .btn{
        color: #fff;
        font-weight: 600;
        font-family: 'MedievalSharp' ;
        background-color: #002896 ;
        cursor: default;
        font-size:20px;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        width: 275px;
        height: 50px;  
        border-radius: 5px;
        border: 3px solid #001653 ; 
        padding: 5px;
        margin-left: 10%;   
    }
    .btn:hover{
        color: #fff;
        background-color: rgb(200, 0, 0);
        font-size:25px;
        padding: 3px;
        height: 50px;
        text-decoration:double;
        background: linear-gradient(-45deg, var(--rojo-oscuro-1),rgb(0, 0, 255), rgb(0, 255, 255),rgb(0, 100, 255));
        background-size: 400% 400%;
        animation: gradient 3s infinite;
    }

    .btnEliminar {
        margin-left: 25px;
    }
    
    @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    
    50% {
      background-position: 100% 50%;
    }
    
    100% {
      background-position: 0% 50%;
    }
    }

    .enviar {
        margin-bottom: -25px;
        order: 2;
        grid-row: -1;
    }

</style>