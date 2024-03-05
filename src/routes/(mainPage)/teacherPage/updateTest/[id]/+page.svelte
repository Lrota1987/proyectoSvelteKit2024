<script>
    export let data;

    const test = data.test2;
    const preguntas = data.test2.preguntas;
</script>

<video autoplay muted loop id="myVideo">
    <source src="/src/assets/Profesor_test_videos.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
</video>
<p class="title">Test Number {test.id}</p>
<form action="?/updateTest" method="POST">

        <div class="container">
        {#each preguntas as pregunta, index}
            <table>
                <tr>
                    <td>
                        <label for="pregunta">Question:</label>
                    </td>
                    <td>
                        <input type="text" size="40" name="pregunta{index}" id="pregunta" value="{pregunta.Pregunta}" />
                    </td>
                </tr>
                <tr colspan="4" class="resp-row">
                    <td colspan="4">Answers</td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta1">Answer1:</label>
                    </td>
                    <td>
                        <input type="text" name="respuesta1{index}" id="respuesta1" value="{pregunta.respuestas[0].resp}">
                    </td>
                    <td>
                        {#if (pregunta.respuestas[0].correcto === true)}
                            <input type="radio" name="correcto{index}" id="correcto" value=0 checked>
                        {:else}
                            <input type="radio" name="correcto{index}" id="correcto" value=0>
                        {/if}
                    </td>
                    <td>    
                        <label for="correcto">Right?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta2">Answer2:</label>
                    </td>
                    <td>
                        <input type="text" name="respuesta2{index}" id="respuesta2" value="{pregunta.respuestas[1].resp}">
                    </td>
                    <td>
                        {#if (pregunta.respuestas[1].correcto === true)}
                            <input type="radio" name="correcto{index}" id="correcto" value=1 checked>
                        {:else}
                            <input type="radio" name="correcto{index}" id="correcto" value=1>
                        {/if}
                    </td>
                    <td>
                        <label for="correcto">Right?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta3">Answer3:</label>
                    </td>
                    <td>
                        <input type="text" name="respuesta3{index}" id="respuesta3" value="{pregunta.respuestas[2].resp}">
                    </td>
                    <td>
                        {#if (pregunta.respuestas[2].correcto === true)}
                            <input type="radio" name="correcto{index}" id="correcto" value=2 checked>
                        {:else}
                            <input type="radio" name="correcto{index}" id="correcto" value=2>
                        {/if}
                    </td>
                    <td>
                        <label for="correcto">Right?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta4">Answer4:</label>
                    </td>
                    <td>
                        <input type="text" name="respuesta4{index}" id="respuesta4" value="{pregunta.respuestas[3].resp}">
                    </td>
                    <td>
                        {#if (pregunta.respuestas[3].correcto === true)}
                            <input type="radio" name="correcto{index}" id="correcto" value=3 checked>
                        {:else}
                            <input type="radio" name="correcto{index}" id="correcto" value=3>
                        {/if}
                    </td>
                    <td>
                        <label for="correcto">Right?</label>
                    </td>
                </tr>
            </table>
        {/each}
    </div>
        <input type="submit" value="Update Test" class="button">
</form>

<style>

    .resp-row {
        text-align: center;
    }
    .title {
        margin-top: 1%;
        font-size: 50px;
        text-align: center;
        color: var(--rojo-oscuro-1);
    }
    .container {
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
        margin-top: 1%;
        
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
</style>