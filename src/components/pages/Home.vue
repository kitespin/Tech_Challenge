<template>
    <div id="Home" class="container">
        <div class="row">
            <!-- Check out data structure in red and black notebook -->
            <div class="col" v-for="(round, roundIndex) in rounds" :key="roundIndex">   
                Round: {{roundIndex+1}}
                <!-- <pre>{{round}}</pre>  -->
                <!-- (iterates through the round array) -->
                <div v-for="(chunk, chunkIndex) in round" :key="chunkIndex">
                  <!--  <pre>{{chunk}}</pre>  -->

                    <ul class="list-group mb-4">
                        <!--(iteraates through the chunk array to be able to put players into slots)-->
                        <li class="list-group-item" v-for="(player, slotIndex) in chunk" :key="slotIndex">
                           <!-- <pre>{{player}}</pre> -->
                            <div v-if="!player">-empty-</div>
                            <div v-else>
                               
                               </div>
                        </li>
                    </ul>
                </div>
            </div>        
        </div>
    </div>
</template>

<script>

import Store from '../../store.js';
import _ from 'lodash';

export default {
    
    name: "home",
    
    data() {
        return {
            players: Store.players,
            rounds: []
        }
    },

    mounted() {
        this.setup()
    },

    methods: {


        setup(){
            
            //get the players array from store which is then used in data above to create a local variable called players and shuffle.
            this.players = _.shuffle(this.players);
            //number of players is the array length from store
            const noPlayers = this.players.length;    
            //no of rounds is the number of players^0.5 plus 1 which is the winner. Formula from googling.
            //Math.pow(base, exponent). ceil used to always round up to take into account odd number of players. 
            const noRounds = Math.ceil(Math.pow(noPlayers, 0.5) + 1)
            //console.log for testing
            console.log(`${noPlayers} players, ${noRounds} rounds`)

            //create an empty array with noRounds long of empty slots.
            //stack overflow solution https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size/48016225
            //https://www.w3schools.com/js/js_arrays.asp
            let localRounds = new Array(noRounds)
            //let localRounds = [null,null,null,null.......] 

            // First round
            //localRounds = [ [null,null,null ...], null, null ...]
            localRounds[0] = new Array(noPlayers)
            

            //localRounds[1] = [ [null,null,null ...], [half the nulls from previos], null ...]
            //localRounds[2] = [ [null,null,null ...], [half the nulls from previos], [half of the previous array again]]
            for (let i=1; i<localRounds.length; i+=1){
                let noOfPlayersInPreviousRound = localRounds[i-1].length
                localRounds[i] = new Array(Math.ceil(noOfPlayersInPreviousRound / 2))
            }

            // Break into chunks
            //localRounds = [ [ [null,null] ,[null, null], [null,null], [null, null]], null, null, null]
            for (let i=0; i<localRounds.length; i+=1){
                localRounds[i] = _.chunk(localRounds[i], 2)
            }
            

            //all figured out now render
            this.rounds = localRounds;

            


        },

  
    }

};

</script>

<style scoped lang="scss">

</style>
