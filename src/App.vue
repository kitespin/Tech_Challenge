<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view />
    </div>
</template>

<script>

import NavBar from './components/layout/NavigationBar';

export default {
    name: 'app',
    components: {
        NavBar
    }
};

</script>

<style lang="scss">

</style>
