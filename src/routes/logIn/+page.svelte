<script>
    import { goto } from '$app/navigation';
    import storeIsTeacherStudent from '../../stores/storeIsTeacherStudent.js'
	import AdminResp from '../../lib/cuestionario/adminResp.svelte';

    export let data;

    export var students = data.users.students;
    export var teachers = data.users.teachers;

    console.log(students);

    let username ='';
    let password ='';

    let wrongName = false;
    let wrongPass = false;

    let rightName = false;
    let rightPass = false;

    $storeIsTeacherStudent.isStudent = false;
    $storeIsTeacherStudent.isTeacher = false;



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
            if (rightName===true || rightPass===true) {
                $storeIsTeacherStudent.isStudent  = true;
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
            if (rightName===true || rightPass===true) {
                $storeIsTeacherStudent.isTeacher = true;
            }
        }
        }
        


        if (rightName && rightPass) {
            if (response.ok) {
                if ($storeIsTeacherStudent.isStudent) {
                    goto('/studentPage');
                }
                if ($storeIsTeacherStudent.isTeacher) {
                    goto('/teacherPage');
                }
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