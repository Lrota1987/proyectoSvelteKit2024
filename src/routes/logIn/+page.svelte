<script>
    import { goto } from '$app/navigation';

    export let data;

    export var students = data.users.students;
    export var teachers = data.users.teachers;

    console.log(students);

    let username ='';
    let password ='';

    let wrongName =false;
    let wrongPass =false;

    let rightName = false;
    let rightPass = false;



    const handleSubmit = async () => {
        
        const response = await fetch('../api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await response.json;

            for (let student of students) {
            if (student.name === username) {
                wrongName = false;
                rightName = true;
                console.log("se mete en nombre");
            }
            else {
                wrongName = true;
                rightName = false;
            }
            if (student.password === password) {
                wrongPass = false;
                rightPass = true;
                console.log("se mete en password");
            }
            else {
                wrongPass = true;
                rightPass = false;
            }
        }
        if (rightName===false || rightPass===false) {
            for (let teacher of teachers) {
            if (teacher.name === username) {
                wrongName = false;
                rightName = true;
            }
            else {
                wrongName = true;
                rightName = false;
            }
            if (teacher.password === password) {
                wrongPass = false;
                rightPass = true;
            }
            else {
                wrongPass = true;
                rightPass = false;
            }
        }
        }
        


        if (rightName && rightPass) {
            if (response.ok) {
                goto('/mainPage');
            }
            else {
                alert(data.message);
            }
        }


    };
</script>


<p>Log In</p>


<form  on:submit|preventDefault={handleSubmit}>
    <label for="username">Username: </label>
    <input type="text" name="username" id="username" bind:value={username}>
    <br>
    <label for="password">Password: </label>
    <input type="text" name="password" id="password" bind:value={password}>
    <br>
    <button type="submit">Login</button>
    <br>
    {#if wrongName === true || wrongPass === true}
        <p class="alertPassName"><strong>LA CONTRASEÑA O USUARIO SON INCORRECTOS</strong></p>
    {/if}
</form>

<style>
    .alertPassName {
        color: red;
    }
</style>