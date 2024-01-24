<script>
    export let data;
    let tests = data.arrayTest;
</script>

<p>Update a test, please choose your test:</p>

{#each tests as test}
    <a data-sveltekit-preload-data="tap" href="/teacherPage/updateTest/{test}">test número: {test}</a><br/>
{/each}

<a href="/teacherPage">Volver</a>