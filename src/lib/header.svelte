<script>
    import { page } from '$app/stores';
    import storeResp from "../stores/storeRespuestas"
    import store from "../stores/store"


</script>

<svelte:head>
    <title>proyecto</title>
</svelte:head>

<header class="layout-header">

    {#if !$page.data.username}
    <a href="/logIn">LogIn</a>
    <a href="/signUp">SignUp</a>
    <a href="/">Home</a>
    {/if}
    {#if !$page.data.test}
    <a href="/mainPage">Personal</a>
    {/if}
    
</header>

<style>

    a {
		color: #e9c46a;
		text-decoration: none;
	}
	.layout-header {
		background-color: #0b6285;
		color: #f4a261;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}
</style>