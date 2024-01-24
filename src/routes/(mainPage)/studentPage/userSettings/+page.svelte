<script>
    export var data;

    var username = data.user;

</script>

<p>{username}, you can manage your profile here.</p>
<a href="./">Change your profile information</a>
<br>
<a href="/studentPage/userSettings/deleteUser" class="deleteUser">DELETE USER</a>

<style>
    .deleteUser:link, .deleteUser:visited {
        color: red;
    }
</style>