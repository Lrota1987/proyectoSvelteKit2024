<script>
    import { redirect } from '@sveltejs/kit';

    export let data;
</script>

<video autoplay muted loop id="myVideo">
    <source src="/src/assets/Profesor_main_video.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>

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
    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        min-height: 100%;
        z-index: -1;

    }

</style>
