'use strict'
// PART 1
// 1. Arrays of Bayern Munich and Borussia Dortmund
let fcbPlayers1 = [ // Bayern Munich players
    'Neuer',
    'Pavard',
    'Süle',
    'Upomecano',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Gnabri',
    'Coman',
    'Müller',
    'Lewandowski',
];

let bvbPlayers2 = [ // Borussia Dortmund players
    'Kobel',
    'Can',
    'Akanji',
    'Hummels',
    'Gerreiro',
    'Dahoud',
    'Bellingham',
    'Hazard',
    'Reyna',
    'Reus',
    'Haaland',
];

//2. Bayern data
let gk = fcbPlayers1[0]; // The goalkeeper of Bayern = 'Neuer'
let fieldPlayers = fcbPlayers1.slice(1,11); // All field players of Bayern
/*console.log(gk);
console.log(fieldPlayers);*/

//3. Players of both teams
const allPlayers = fcbPlayers1.concat(bvbPlayers2);
// console.log(allPlayers);

//4. Bayern Munich team with substitutions
let substitutions = ['Hernandez', 'Tolisso', 'Sane'];
let players1Final = fcbPlayers1.concat(substitutions);
// console.log(players1Final);

// 5.

const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Süle',
            'Upomecano',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Gnabri',
            'Coman',
            'Müller',
            'Lewandowski',
        ],
        [
            'Kobel',
            'Can',
            'Akanji',
            'Hummels',
            'Gerreiro',
            'Dahoud',
            'Bellingham',
            'Hazard',
            'Reyna',
            'Reus',
            'Haaland',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabri', 'Lewandowski', 'Müller'],
    date: 'Nov 9th, 2019',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// initializing variables
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

/*console.log(`Bayern victory: ${team1}`);
console.log(`Draw: ${draw}`);
console.log(`Borussia victory: ${team2}`);*/

//PART 2
// 1. Add a new events array
let events = [
    '17, GOAL!',
    '36, Substitution',
    '47, GOAL!',
    '61, Substitution',
    '64, Yellow card',
    '69, Red card',
    '70, Substitution',
    '72, Substitution',
    '76, GOAL!',
    '80, GOAL!',
    '92, Yellow card',
];

// 2. Delete a wrong yellow card at the 64th minute
events.splice(4,1);
// console.log(events);

//3.
const gameEvents = new Map([
    [17, 'GOAL!'],
    [36, 'Substitution'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL!'],
    [80, 'GOAL!'],
    [92, 'Yellow card'],
]);

gameEvents.forEach((value, key, map) =>{
    if (key <= 45) {
        console.log(['ПЕРВЫЙ ТАЙМ']);
    }else {
        console.log(['ВТОРОЙ ТАЙМ']);
    }
    console.log(`${key}: ${value}`);
});




