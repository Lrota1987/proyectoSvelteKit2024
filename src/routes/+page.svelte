

<video autoplay muted loop id="myVideo">
    <source src="/src/assets/EscenariosWeb.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>
<h3>HALL</h3>
<fieldset class="fielmedio">
    <div class="contenedor">
        <div class="marco">
            <a href="./logIn" class="btn">Log In</a>
        </div> 
        <div class="marco">  
            <a href="./signUp" class="btn">Sign Up</a>
        </div>
    </div>   
</fieldset>




<style>
.contenedor{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
}
.marco{       
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    text-align: center;
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