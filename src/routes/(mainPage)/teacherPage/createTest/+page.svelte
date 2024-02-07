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
<p>Create a test</p>
<div class="container">
<form action={"?/createTest&array ="+array } method="POST">
    <input type="hidden" name="numPreguntas" value={array.length}>
    <input type="hidden" name="objeto" value={array}>
{#each array as obj, numero}
<div class="form-container">
    <table>
        <tr>
            <td>
                <label for="pregunta">Pregunta {numero + 1}:</label>
            </td>
            <td>
                <input type="text" size="40" name="pregunta{numero}" id="pregunta" bind:value={obj.Pregunta} />
            </td>
        </tr>
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
</div>
<div class="divisor"></div>
{/each}
<input type="submit" value="Crear cuestionario" class="enviar">
</form>
<button on:click={handleClick}>Añadir pregunta</button>
<button on:click={handleClick2}>Eliminar pregunta</button>
</div>
<style>
    .divisor {
        height: 3px;
        background-color: black;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;

    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items:end;
        width: 40%;
    }
    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        min-height: 100%;
        z-index: -1;

    }
    button {
        height: 25px;
    }
    .enviar {
        margin-bottom: -25px;
        height: 25px;
        order: 2;
    }
    .form-container {
        align-self: flex-start;
    }
</style>