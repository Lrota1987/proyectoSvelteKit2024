<script>

    export let data;
</script>

<p class="welcome">Welcome {data.username}</p>

<p>You are a Student</p>
<p>Student Personal Page</p>
<div class="container">
    <div class="container__imagen">
        <img src="/src/assets/guerrero.png" alt="guerrero" class="container__imagen--img">
    </div>
    <a href={"/studentPage/chooseTest"}>Choose a test</a>
    <br>
    <a href={"/studentPage/userSettings"}>User Settings</a>
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