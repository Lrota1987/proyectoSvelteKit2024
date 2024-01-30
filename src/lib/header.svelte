<script>
    import { page } from '$app/stores';
    import storeIsTeacherStudent from '../stores/storeIsTeacherStudent.js'



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
                {#if $storeIsTeacherStudent.isTeacher}
                    <a href="/teacherPage">Personal</a>
                {:else}
                    <a href="/studentPage">Personal</a>
                {/if}
                <form action="/logIn?/logout&redirectTo=/" method="POST">
                    <button type="submit">Logout</button>
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