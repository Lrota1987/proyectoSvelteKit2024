<script>
    export let form;
</script>


<p>Log In</p>


<form  action={'?/login'} method="POST">
    <label for="username">Username: </label>
    <input type="text" name="username" id="username" >
    <br>
    <label for="password">Password: </label>
    <input type="text" name="password" id="password" >
    <br>
    <button type="submit">Login</button>
    <br>
    {#if form?.nameDoesntExists === true || form?.passDoesntExists === true }
        <p class="alertPassName"><strong>LA CONTRASEÑA O USUARIO SON INCORRECTOS</strong></p>
    {/if}
</form>

<style>
    .alertPassName {
        color: red;
    }
</style>