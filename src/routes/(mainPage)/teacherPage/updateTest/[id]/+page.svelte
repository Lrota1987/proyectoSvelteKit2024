<script>
    export let data;

    const test = data.test2;
    const preguntas = data.test2.preguntas;
</script>

<form action="?/updateTest" method="POST">

        <tr>
            <th>Test Número {test.id}</th>
        </tr>
        {#each preguntas as pregunta, index}
            <table>
                <tr>
                    <td>
                        <label for="pregunta">Pregunta:</label>
                    </td>
                    <td>
                        <input type="text" size="40" name="pregunta{index}" id="pregunta" value="{pregunta.Pregunta}" />
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
                        <label for="correcto">Correcto?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta2">Respuesta2:</label>
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
                        <label for="correcto">Correcto?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta3">Respuesta3:</label>
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
                        <label for="correcto">Correcto?</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="respuesta4">Respuesta4:</label>
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
                        <label for="correcto">Correcto?</label>
                    </td>
                </tr>
            </table>
        {/each}
        <input type="submit" value="Actualizar Test">
</form>

<style>
    table {
        border: 2px solid;
        margin: 5px;
    }
    .resp-row {
        text-align: center;
    }
</style>