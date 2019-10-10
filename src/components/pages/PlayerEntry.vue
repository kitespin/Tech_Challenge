<template>
    <div id="PlayerEntry" class="container">
        <div class="jumbotron">
            <div class="form-group">
                <label>Name</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Player name"
                    v-model="newPlayerName"
                />
            </div>

            <button type="submit" class="btn btn-primary" @click="onAdd()">Submit</button>
            <br />
            <br />
            <p>Click on Stages page after submitting players</p>
        </div>

        <div v-for="(player, index) in players" :key="index">
            <ul class="list-group mb-4 ">
                <li class="list-group-item list-group-item-secondary"><i class="fas fa-user" style="color:#3e8bf3"></i>  {{index + 1}}  {{player.name}}</li>
            </ul>
        </div>
        <!-- Just for testing to diplay the players array of player objects-->
        <!-- <pre>{{players}}</pre> -->
    </div>
</template>

<script>
import Store from "../../store.js";

export default {
    name: "player-entry",

    data() {
        return {
            newPlayerName: "",
            //players is an empty array in store
            players: Store.players
        };
    },

    mounted() {},

    methods: {
        onAdd() {
            //push newPlayerName to players array in store
            this.players.push({ name: this.newPlayerName });
            this.newPlayerName = "";
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
