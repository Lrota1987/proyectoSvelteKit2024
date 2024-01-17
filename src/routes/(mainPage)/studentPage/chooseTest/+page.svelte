<script>
    export let data;
    let tests = data.choosetest;


</script>

<p>Choose a test</p>
{#each tests as test}
    <a data-sveltekit-preload-data="tap" href="/studentPage/chooseTest/{test.id}">test número: {test.id}</a><br/>
{/each}

