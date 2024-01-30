<script>
    import { navigating } from '$app/stores';
    import Header from "$lib/header.svelte";
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
        background-image: linear-gradient(#7cabf1, #0b6285);
        height: 100%;
        margin-top: -20px
    }
</style>




