<script>
    export let data;
    let tests = data.arrayTest;
</script>
<video autoplay muted loop id="myVideo">
    <source src="/src/assets/Alumno_main_video.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>

<fieldset class="fielmedio">
    <p class="title">Choose a test</p>
    <div class="orden">
        
        {#each tests as test}
        <div class="marco">
            <a data-sveltekit-preload-data="tap" href="/studentPage/chooseTest/{test}" class="btn">test: {test}</a><br/>
        </div>  
        {/each}
    </div>
</fieldset>
    
 


<style lang="scss">
    .title {
        font-size: 50px;
        text-align: center;
        padding: 20px;
        color: var(--rojo-oscuro-1);
    }
    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        min-height: 100%;
        z-index: -1;

    }
    .fielmedio{
        box-sizing: content-box;
        position: absolute;
        left: 50%;
        top: 50%;
        height: auto;
        width: 80%;
        transform: translate(-50%,-50%);
        text-align: center;
        background-color: #03212cb7;
        border-radius: 10px; 
        margin-top: 25px;
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
        font-weight: 900;
        font-size: 40px;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        padding: 0.2em;
        text-align: center;
        color: #fff;
    }
    .orden {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1px;
        border-radius: 5px;
        border: none; 
        color: rgb(108, 108, 202);
    }
</style>
