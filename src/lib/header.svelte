<script>
    import { page } from '$app/stores';
    import storeResp from "../stores/storeRespuestas"
    import store from "../stores/store"


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
            <a href="/mainPage">Personal</a>
            <form action="/logIn?/logout&redirectTo=/" method="POST">
                <button type="submit">Logout</button>
            </form>
        {/if}
        </header>
    {/if}

{#if $page.data.username}
    <p class="welcome">Welcome {$page.data.username}</p>
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