<template>
    <div id="Home" class="container">
        <div class="row">
            <!-- iterates over the rounds -->
            <div class="col" v-for="(round, roundIndex) in rounds" :key="roundIndex">
                <h4 class="alert alert-dark">Round: {{roundIndex+1}}</h4>
                <!-- <pre>{{round}}</pre>  -->
                <!-- (iterates through the round array to get the chunks) -->
                <div style="color:#3e8bf3" v-for="(match, matchIndex) in round" :key="matchIndex">
                    <!--  <pre>{{match}}</pre>  -->
                    <ul class="list-group mb-4">
                        <!--(iteraates through the final array to output players)-->
                        <li
                            class="list-group-item list-group-item-secondary"
                            v-for="(player, slotIndex) in match"
                            :key="slotIndex"
                        >
                            <span v-if="player">
                                <i class="fas fa-user" style="color:#3e8bf3"></i>
                                {{player.name}}
                            </span>
                            <button
                                class="btn btn-sm btn-success float-right"
                                @click="win(player, roundIndex)"
                            >Win</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Store from "../../store.js";
import _ from "lodash";

export default {
    name: "home",

    data() {
        return {
            players: Store.players,
            rounds: []
        };
    },

    mounted() {
        this.setup();
    },

    methods: {
        win(player, roundIndex) {
            //When the win button is clicked get the player and round and call function addPlayerToMatch with new values.
            let round = roundIndex + 1;
            //console.log(player);
            //console.log(round);
            this.addPlayerToMatch(round, player);
        },

        //get player and add to first empty slot in the round
        addPlayerToMatch(round, player) {
            //gets the array of matches from the current round
            let matches = this.rounds[round];
            //first for loop gets the match
            //second for loop gets the slot from the match, either the first or second
            for (let i = 0; i < matches.length; i++) {
                for (let j = 0; j < 2; j += 1) {
                    let slot = matches[i][j];
                    //if the slot is empty add the player
                    if (!slot) {
                        //this.$set explicitily tells vue that the data has changed so it gets re rendered(vue does not look for changes deep in objects)
                        //console.log("found empty slot", round, i, j);
                        this.$set(this.rounds[round][i], j, player);
                        return;
                    }
                }
            }
        },

        setup() {
            //get the players array from store which is then used in data above to create a local variable called players and shuffle.
            this.players = _.shuffle(this.players);
            //number of players is the array length from store
            const noPlayers = this.players.length;
            //no of rounds is the number of players^0.5 plus 1 which is the winner. Formula from googling.
            //Math.pow(base, exponent). ceil used to always round up to take into account odd number of players.
            //console.log(noPlayers);

            let noRounds = Math.ceil(Math.pow(noPlayers, 0.5) + 1);

            if (noPlayers > 2) {
                noRounds;
            } else {
                noRounds = Math.ceil(Math.pow(noPlayers, 0.5));
            }
            //console.log for testing
            //console.log(`${noPlayers} players, ${noRounds} rounds`);

            //create an empty array with noRounds long of empty slots.
            //stack overflow solution https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size/48016225
            //https://www.w3schools.com/js/js_arrays.asp
            let localRounds = new Array(noRounds);
            //let localRounds = [null,null,null,null.......]

            // First round
            //localRounds = [ [null,null,null ...], null, null ...]
            localRounds[0] = new Array(noPlayers);

            //localRounds[1] = [ [null,null,null ...], [half the nulls from previos], null ...]
            //localRounds[2] = [ [null,null,null ...], [half the nulls from previos], [half of the previous array again]]
            for (let i = 1; i < localRounds.length; i += 1) {
                let noOfPlayersInPreviousRound = localRounds[i - 1].length;
                localRounds[i] = new Array(
                    Math.ceil(noOfPlayersInPreviousRound / 2)
                );
            }

            // Break into chunks
            //localRounds = [ [ [null,null] ,[null, null], [null,null], [null, null]], null, null, null]
            for (let i = 0; i < localRounds.length; i += 1) {
                localRounds[i] = _.chunk(localRounds[i], 2);
            }

            //all figured out now render
            this.rounds = localRounds;

            // Add players to first round. Loop through the players array
            for (let i = 0; i < this.players.length; i += 1) {
                this.addPlayerToMatch(0, this.players[i]);
            }
        }
    }
};
</script>

<style scoped lang="scss">
</style>
