<script>
    //import { enhance } from '$app/forms';

    let isTeacher = false;
    let isStudent = false;

    export let form;

    const handleClickIsTeacher =() => {
        isTeacher = true;
        isStudent = false;
    }

    const handleClickIsStudent =() => {
        isTeacher = false;
        isStudent = true;
    }


</script>

<video autoplay muted loop id="myVideo">
    <source src="/src/assets/EscenariosWeb.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>
<p class="title">Sign Up</p>

<div class="container-registrer">
    <form action="?/registrer" method="POST">
        {#if !isTeacher && !isStudent}
            <h2 style="color:red">PLEASE, CHOOSE IF YOU'RE STUDENT OR TEACHER.</h2>
        {/if}
        <div class="container-registrer__radio">
            <label for="teacher">Teacher: </label>
            <input type="radio" name="role" value="teachers" id="teacher" on:click={handleClickIsTeacher}>
            <label for="student">Student: </label>
            <input type="radio" name="role" value="students" id="student" on:click={handleClickIsStudent}>
        </div>
        <br>
        {#if form?.usernameAlreadyInUse}
		    <p style="color: red;">Username already in use!</p>
	    {/if}
        {#if form?.teacherNameNotExists}
            <p style="color: red;">Your teacher isnt in the db!</p>
        {/if}
        {#if isTeacher}
            <table>
                <tr>
                    <td>
                        <label for="username">Username: </label>
                    </td>
                    <td>
                        <input type="text" id="username" name="username" required>
                    </td>
                    <td>
                        <label for="email">Email: </label>
                    </td>
                    <td>
                        <input type="email" id="email" name="email">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="name">Name: </label>
                    </td>
                    <td>
                        <input type="text" id="name" name="name">
                    </td>
                    <td>
                        <label for="subname">Subname: </label>

                    </td>
                    <td>
                        <input type="text" id="subname" name="subname">
                    </td>
                    <td>
                        <label for="teacherId">Teachers ID: </label>

                    </td>
                    <td>
                        <input type="text" id="teacherId" name="teacherId">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="password">Password: </label>
                    </td>
                    <td>
                        <input type="text" id="password" name="password" required>
                    </td>
                </tr>
            </table>  
            <div class="container-registrer__submit">
                <input type="submit" id="submit" value="Registrer" class="btn">
            </div>
        {/if}
        {#if isStudent}
            <table>
                <tr>
                    <td>
                        <label for="username">Username: </label>
                    </td>
                    <td>
                        <input type="text" id="username" name="username" required>
                    </td>
                    <td>
                        <label for="email">Email: </label>
                    </td>
                    <td>
                        <input type="email" id="email" name="email">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="name">Name: </label>
                    </td>
                    <td>
                        <input type="text" id="name" name="name">
                    </td>
                    <td>
                        <label for="subname">Subname: </label>

                    </td>
                    <td>
                        <input type="text" id="subname" name="subname">
                    </td>
                    <td>
                        <label for="subname">Teacher name: </label>

                    </td>
                    <td>
                        <input type="text" id="teachername" name="teachername" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="password">Password: </label>
                    </td>
                    <td>
                        <input type="text" id="password" name="password" required>
                    </td>
                </tr>
            </table>
            <div class="container-registrer__submit">
                <input type="submit" id="submit" value="Registrer" class="btn">
            </div>
        {/if}

        
    </form>
</div>

<style>
     #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        min-height: 100%;
        z-index: -1;
    }
    .title {
        font-size: 50px;
        text-align: center;
        padding: 20px;
        color: black;
    }
    .btn{
        color: #fff;
        font-family: 'MedievalSharp' ;
		font-weight: 600;
        background-color: var(--rojo-oscuro-1) ;
        cursor: default;
        font-size:36px;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        width: 300px;
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
    td {
        padding: 5px;
    }
    .container-registrer {
        display:inline-block;
        position: absolute;

    }
    .container-registrer__submit {
        text-align: center;
        margin-top: 20px;
    }
    #submit {
        height: 50px;
        width: 150px;
        font-size: 25px;
    }
</style>