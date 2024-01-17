<script>
    import { redirect } from '@sveltejs/kit';

    export let data;
    console.log(data.username);
</script>

<p>Main Page</p>
<a href={"/mainPage/chooseTest"}>Choose a test</a>