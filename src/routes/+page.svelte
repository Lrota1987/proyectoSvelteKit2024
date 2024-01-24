
    <h3>HALL</h3>
    <fieldset class="fielmedio">
        <div class="contenedor">
            <div class="marco">
                <a href="./logIn" class="btn btn-4">Log In</a>
            </div> 
            <div class="marco">  
                <a href="./signUp" class="btn btn-4">Sign Up</a>
            </div>
        </div>   
    </fieldset>
    
    


<style lang="scss">
    .contenedor{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
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
        background-color: #03212c1c;
        border-radius: 10px;  
    }
    .btn{
        color: #fff;
        cursor: pointer;
        font-size:46px;
        font-weight: 400;
        line-height: 45px;        
        max-width: 160px; 
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        width: 100%;      
   
    }
    .btn-4 {
        border: 1px solid;
        overflow: hidden;
        
        &::after {
            background: #fff;
            content: "";
            height: 155px;
            left: -75px;
            opacity: .2;
            position: absolute;
            top: -50px;
            transform: rotate(35deg);
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
            width: 50px;
            z-index: -10;
        }
    }

    .btn-4:hover {
        
        &:after {
            left: 120%;
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        }
    }

</style>