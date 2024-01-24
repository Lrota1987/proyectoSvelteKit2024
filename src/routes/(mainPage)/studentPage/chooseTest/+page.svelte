<script>
    export let data;
    let tests = data.arrayTest;


</script>

<p>Choose a test</p>
{#each tests as test}
    <a data-sveltekit-preload-data="tap" href="/studentPage/chooseTest/{test}">test número: {test}</a><br/>
{/each}

