<script>
    import { navigating } from '$app/stores';
    import Header from "$lib/header.svelte";

    export let data;
    export let student = data.student;

</script>

<Header
     />
<div class="container">
{#if $navigating}
    <div class="loading">
        <section class="section"> 
            <span class="loader loader-quart"></span>
            loading...
        </section>
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
    .loader {
	position: relative;
	display: inline-block;
	width: 50px;
	height: 50px;
	vertical-align: middle;
}
    .loader-quart {
	border-radius: 50px;
	border: 6px solid rgba(255,255,255,0.4);
    }

    .loader-quart::after {
        content: '';
        position: absolute;
        top: -6px; 
        left: -6px;
        bottom: -6px;
        right: -6px;
        border-radius: 50px;
        border: 6px solid transparent;
        border-top-color: #fff;
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
    }

    .section {
	background-color: transparent;
	height: 300px;
	line-height: 300px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>




