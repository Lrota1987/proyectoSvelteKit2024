<script>
    import { redirect } from '@sveltejs/kit';

    export let data;
</script>
<p class="welcome">Welcome {data.username}</p>
<p>You are a Teacher</p>
<p>Teacher Personal Page</p>
<div class="container">
    <div class="container__imagen">
        <img src="/src/assets/magus.png" alt="magus" class="container__imagen--img">
    </div>
    <a href="teacherPage/createTest">Create a test</a>
    <br>
    <a href="teacherPage/updateTest">Update a test</a>
    <br>
    <a href="teacherPage/userSettings">User Settings</a>
</div>

<style lang="scss">
    .container {
        &__imagen {
            &--img {
                height: 500px;
            }
        }

    }

</style>
