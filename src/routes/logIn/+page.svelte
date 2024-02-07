<script>
    export let form;
</script>

<video autoplay muted loop id="myVideo">
    <source src="/src/assets/LogIn_video.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>

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
    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        min-height: 100%;
        z-index: -1;

    }
</style>