import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/pages/Home.vue';
import PlayerEntry from './components/pages/PlayerEntry.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/home', name: 'home', component: Home},
        {path: '/', name: 'player-entry', component: PlayerEntry}
    ]
})