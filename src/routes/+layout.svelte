<script>
    import { navigating } from '$app/stores';
    import Header from "$lib/header.svelte";

    export let data;
    export let student = data.student;
    console.log(student);

</script>

<Header
     />
<div class="container">
{#if $navigating}
    <div class="loading">

            <span class="loader loader-quart"></span>
            loading...
        
    </div>
{:else}

<slot />

{/if}
</div>

<style lang="scss">
    .container {
        //background-image: linear-gradient(#7cabf1, #0b6285);
        height: 100%;
        margin-top: 0px
    }

    .loading {
        height: 100vh;
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loader-quart {
	border-radius: 50%;
	border: 6px solid rgba(255,255,255,0.4);
    }

    .loader-quart::after {
        content: '';
        border-radius: 50%;
        border: 6px solid transparent;
        border-top-color: #fff;
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
    }

</style>




