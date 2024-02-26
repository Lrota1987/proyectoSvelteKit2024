<script>
    export let form;
</script>

<video autoplay muted loop id="myVideo">
    <source src="/src/assets/LogIn_video.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>

<fieldset class="fielmedio">
    <div class="contenedor">
         
        <form  action={'?/login'} method="POST">
            <div class="marco">
                <label for="username">Username: </label>
                <input type="text" name="username" id="username" class="zona">
            </div>
            <div class="marco">
                <label for="password">Password: </label>
                <input type="text" name="password" id="password" class="zona">
            </div>
            <br>
            <div class="marco">
                <button type="submit" class="btn">Login</button>
            </div>
           
            {#if form?.nameDoesntExists === true || form?.passDoesntExists === true }
                <p class="alertPassName"><strong>LA CONTRASEÑA O USUARIO SON INCORRECTOS</strong></p>
            {/if}
        </form>
    </div>   
</fieldset>



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
    .contenedor{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }    
    .marco{       
        display: flex;
        font-weight: 600;
        font-size: 36px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 0.2em;
        text-align: center;
    }
    .zona{
        color: #ffffff;
        font-weight: 600;
        font-family: 'MedievalSharp' ;
        background-color:  #03212cb7;
        cursor: default;
        font-size:26px;
        position: relative;
        text-decoration: none;
        width: 200px;
        height: 50px;  
        border-radius: 5px;
        border: 3px solid black; 
        padding: 0.2px;
        margin: 0.1px;   
    }
    .fielmedio{
        position: absolute;
        left: 50%;
        top: 50%;
        height: auto;
        width: auto;
        transform: translate(-50%,-50%);
        text-align: center;
        background-color: #03212c33;
        border-radius: 10px;  
    }
    .btn{
        color: #fff;
        font-weight: 600;
        font-family: 'MedievalSharp' ;
        background-color: var(--rojo-oscuro-1) ;
        cursor: default;
        font-size:36px;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        width: 200px;
        height: 50px;  
        border-radius: 5px;
        border: 3px solid var(--rojo-oscuro-2); 
        padding: 5px;
        margin: 10px;   
    }
    .btn:hover{
        color: #fff;
        background-color: rgb(200, 0, 0);
        font-size:40px;
        padding: 3px;
        height: 50px;
        text-decoration:double;
        background: linear-gradient(-45deg, var(--rojo-oscuro-1),rgb(175, 0, 0), rgb(255, 0, 0),var(--rojo-oscuro-1));
        background-size: 400% 400%;
        animation: gradient 3s infinite;
    
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
</style>