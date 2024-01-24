<script>
    import { goto  } from '$app/navigation';

    export var data;

    var username = data.user;

    const handleClick = () => {
        return goto("/studentPage/userSettings");
    }
</script>

<h1>YOU ARE GOING TO DELETE YOUR ACCOUNT, ARE YOU SURE?</h1>
<div class="buttonCont">
    <form action={'?/deleteUser&username=' + username} method="POST" style="display:inline-block">
        <input type="submit" name ="yes" value="YES" class="yes">
    </form>
    <button on:click={handleClick} class="no">NO</button>
</div>


<style>
    h1 {
        color: red;
    }
    form {
        margin-right: 30px;
    }
    .yes {
        background-color: rgb(218, 159, 159);
    }
    .no {
        background-color: lightgreen;
    }
</style>