<template>
    <div id="NavBar">

    <!-- Taken from https://getbootstrap.com/docs/4.3/components/navbar/ -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        
        <div class="container">

            <a class="navbar-brand" href="#">PingPong Brackets</a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mr-auto">

                    <li class="nav-item active">
                        <!-- router link is used to point to the router for links-->
                        <router-link class="nav-link" :to="{name:'player-entry'}">Players Input</router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name:'home'}">Stages</router-link>
                    </li>

                </ul>

            </div>
        </div>

    </nav>


    </div>
</template>

<script>
export default {
    name: "nav-bar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
