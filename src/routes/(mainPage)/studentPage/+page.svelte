<script>

    export let data;
</script>

<p class="welcome"></p>


<div class="container">
    <div class="container__imagen">
        <div class="container__imagen__1">
            <img src="/src/assets/guerrero.png" alt="guerrero" class="container__imagen__1--guerrero">
        </div>
        <div class="container__imagen__2">
            <b class="container__imagen__2__texto--1">Welcome {data.username}</b>
        </div>
        <div class="container__imagen__3">
            <a class="container__imagen__3--a" href={"/studentPage/chooseTest"}>Choose a test</a>
        </div>
        <div class="container__imagen__4">
            <a class="container__imagen__4--a" href={"/studentPage/userSettings"}>User Settings</a>
        </div>
    </div>

    <br>

</div>

<style lang="scss">
    .container {
        &__imagen {
            display: grid;
            height: 500px;
            grid-template-columns: repeat(6, 200px);
            grid-template-rows: repeat(2, 250px);
            &__1 {
                grid-column-start: 1;
                grid-column-end: 3;
                grid-row-start: 1;
                grid-row-end: 3;
                &--guerrero {
                    height: 100%;
                    width: 100%;
  
                }
            }
            &__2 {
                grid-column-start: 3;
                grid-column-end: 5;
                grid-row-start: 1;
                grid-row-end: 2;
                &__texto--1 {
                        position: relative;
                        left: -50px;
                        top:25%;
                        width: 100%;
                        font-size: 50px;
                        color:rgb(131, 112, 5);
                    }
            }
            &__3 {
                grid-column-start: 5;
                grid-column-end: 7;
                grid-row-start: 1;
                grid-row-end: 2;
                width: 50%;
                height: 25%;
                background-color: brown;
                border: 5px solid gold;
                text-align: center;
                &--a:link, &--a:visited, &--a:active  {
                    text-decoration: none;
                    position: relative;
                    top:30%;
                    font-size: x-large;
                    color: gold;
                }
                
            }
            &__4 {
                grid-column-start: 5;
                grid-column-end: 7;
                grid-row-start: 2;
                grid-row-end: 3;
                width: 50%;
                height: 25%;
                background-color: brown;
                border: 5px solid gold;
                text-align: center;
                &--a:link, &--a:visited, &--a:active {
                    text-decoration: none;
                    position: relative;
                    top:30%;
                    font-size: x-large;
                    color: gold;
                }
            }
        }


    }

</style>