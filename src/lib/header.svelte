<script>
    import { page } from '$app/stores';
    import storeIsTeacherStudent from '../stores/storeIsTeacherStudent.js'

    let puntuacion = 0;

    // Comprueba si la página y sus datos están disponibles
    if ($page) {

        // Verifica si 'records' está presente en los datos de la página
        if ($page.data && $page.data.student) {
            const students = $page.data.student;
            console.log(students);
            console.log($page.data.username);
            
            // Asigna los registros a la variable puntuacion
            for (let student of students) {
                if (student.name === $page.data.username ) {
                    puntuacion = student.puntos;
}
            }
        }
    }

</script>

<svelte:head>
    <title>proyecto</title>
</svelte:head>



    {#if !$page.data.username}
    <header class="layout-header">
        <a href="/logIn">LogIn</a>
        <a href="/signUp">SignUp</a>
        <a href="/">Home</a>
    </header>
    {:else}
        <header class="layout-header2">
            {#if !$page.data.test}
                {#if $page.data.role === "teacher"}
                    <a href="/teacherPage">Personal</a>
                {/if}
                {#if $page.data.role === "student"}
                    <a href="/studentPage">Personal</a>
                    <p class="student__score">
                        Tu puntuación es: {puntuacion}
                    </p>
                {/if}
                <form action="/logIn?/logout&redirectTo=/" method="POST" >
                    <button type="submit"  class="botonSinFondo"><img src="/src/assets/logout.png" alt="" class="logout"></button>
                </form>
            {/if}
        </header>
    {/if}


<style>
    form {
        display: inline-block;
    }
    a {
		color: #e9c46a;
		text-decoration: none;
        margin-right: 15px;
	}
    .botonSinFondo{
        background-color: #00000000;
        border: none;        
    }
    .logout{
    
    cursor:pointer;
    border:none;
    width:20px;
    height:20px;
    padding: 0px;
    }
    .layout-header {
        display: flex;
		background-color: #0b6285;
		color: #f4a261;
		font-size: 30px;
		padding: 10px;
    
	}

	.layout-header2 {
        display: flex;
		background-color: #0b6285;
		color: #f4a261;
		font-size: 30px;
		padding: 10px;
        justify-content: space-between;
    
	}
</style>