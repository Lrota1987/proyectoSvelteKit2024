<script>
    import { redirect } from '@sveltejs/kit';

    export let data;
    console.log(data.username);
</script>
<p>You are a Student</p>
<p>Student Personal Page</p>
<a href={"/studentPage/chooseTest"}>Choose a test</a>