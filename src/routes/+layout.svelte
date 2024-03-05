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
        <p class="loading--text">loading...</p>
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

</style>




