<script>

    export let data;
</script>
<video autoplay muted loop id="myVideo">
    <source src="/src/assets/Alumno_main_video.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>
<p class="welcome"></p>


<div class="container">
    <div class="container__imagen">
        <div class="container__imagen__1">
            <img src="/src/assets/guerrero.png" alt="guerrero" class="container__imagen__1--guerrero">
        </div>
        <fieldset class="fielmedio">
            <div class="marco">
                <b >{data.username}</b>
            </div>
            <div class="marco">
                <a href={"/studentPage/chooseTest"} class="btn">Choose a test</a>
            </div>
            <div class="marco">
                <a href={"/studentPage/userSettings"} class="btn">User Settings</a>
            </div>
        </fieldset>
       
    </div>

    <br>

</div>

<style lang="scss">
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
        font-weight: 600;
        font-family: 'MedievalSharp' ;
        background-color: #002896 ;
        cursor: default;
        font-size:36px;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        width: 200px;
        height: 50px;  
        border-radius: 5px;
        border: 3px solid #001653 ; 
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
        background: linear-gradient(-45deg, var(--rojo-oscuro-1),rgb(0, 0, 255), rgb(0, 255, 255),rgb(0, 100, 255));
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
        font-weight: 600;
        font-size: 36px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 0.2em;
        text-align: center;
    }
    .container {
        &__imagen {
            display: grid;
            height: 500px;
            grid-template-columns: repeat(6, 200px);
            grid-template-rows: repeat(2, 250px);
            &__1 {
                grid-column-start: 1;
                grid-column-end: 3;
                grid-row-start: 1;
                grid-row-end: 3;
                &--guerrero {
                    height: 100%;
                    width: 100%;

  
                }
            }
            &__2 {
                grid-column-start: 3;
                grid-column-end: 5;
                grid-row-start: 1;
                grid-row-end: 2;
                &__texto--1 {
                        position: relative;
                        left: -50px;
                        top:25%;
                        width: 100%;
                        font-size: 50px;
                        color:rgb(131, 112, 5);
                    }
            }
            &__3 {
                grid-column-start: 5;
                grid-column-end: 7;
                grid-row-start: 1;
                grid-row-end: 2;
                width: 50%;
                height: 25%;
                background-color: brown;
                border: 5px solid gold;
                text-align: center;
                &--a:link, &--a:visited, &--a:active  {
                    text-decoration: none;
                    position: relative;
                    top:30%;
                    font-size: x-large;
                    color: gold;
                }
                
            }
            &__4 {
                grid-column-start: 5;
                grid-column-end: 7;
                grid-row-start: 2;
                grid-row-end: 3;
                width: 50%;
                height: 25%;
                background-color: brown;
                border: 5px solid gold;
                text-align: center;
                &--a:link, &--a:visited, &--a:active {
                    text-decoration: none;
                    position: relative;
                    top:30%;
                    font-size: x-large;
                    color: gold;
                }
            }
        }


    }


</style>