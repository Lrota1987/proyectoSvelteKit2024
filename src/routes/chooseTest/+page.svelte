<script>
    export let data;
    let tests = data.choosetest;
</script>
<p>Choose a test</p>
{#each tests as test}
    <a href="./{test.id}">test número: {test.id}</a><br/>
{/each}

