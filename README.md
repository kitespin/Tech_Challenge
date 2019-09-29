# PingPong Brackets Tech Challenge

## Initial Brief
```
The exercise is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.

Optional advanced features might include:

ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs

continued rounds created until the final (last 2 players who have won all matches to date play each other, one marked as the winner)
```

### Thoughts
```
I was not restricted as to how to implement the brief so I decided that I would use Vue.js, I had been learning this outside of the course time and was keen to use it on a project.
```

### Implementation
```
The first thing I decided was that this would be 2 pages. One page for entering
the players names and one page to show the pairings and brackets.

From this I knew I would need a nav bar of some description, so I created this as a seperate component.

The players names would need to be inputted into an empty array and then on the stages page, this array would need to be accessed, and the data used to randomize the player pairings. An unlimited number of players could be added to the players list so I had to take this into account when calculating the number of rounds.

I used console.log and outputted the arrays in the html using e.g. <pre>{{round}}</pre> as much as possible while writing the code for testing.

```
### Live website
```
 <http://paul.developme.space/>
 ```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
