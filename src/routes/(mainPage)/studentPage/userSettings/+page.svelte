<script>
    export var data;

    var username = data.user;

</script>
<video autoplay muted loop id="myVideo">
    <source src="/src/assets/Alumno_main_video.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>
<fieldset class="fielmedio">
    <div class="marco">
        <p>{username}</p>
        <p>Settings</p>    
    </div>
    <div class="marco">
        <a href="./">Change your profile information</a>
    </div>
    <div class="marco">
        <a href="/studentPage/userSettings/deleteUser" class="btn">DELETE</a>
    </div>
</fieldset>

<br>

<style>
    
    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        min-height: 100%;
        z-index: -1;

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
    .marco{       
        display: flex;
        font-weight: 900;
        font-size: 40px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 0.2em;
        text-align: center;
        color: #fff;
    }
</style>