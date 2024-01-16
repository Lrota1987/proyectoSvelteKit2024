<script>
    import { navigating } from '$app/stores';
    import Header from "$lib/header.svelte";
</script>

<Header />

{#if $navigating}
    <div class="loading">
        <p class="loading--text">loading...</p>
    </div>
{:else}

<slot />

{/if}





