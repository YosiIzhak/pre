
var readlineSync = require('readline-sync');
let game, j, flag, x, pos_bet;
var suits = ["♤", "◊", "♧", "♡"];
console.log('welcome to war!!');
var amount = ["1", "2"];
const numPlayers = readlineSync.keyInSelect(amount, "how many players in this game?") + 1;

const players = [
    {
        name: "computer",
        userMoney: 50,
        userCard: " ",
        suit: " "
    },
    {
        name: " ",
        userMoney: 50,
        userCard: " ",
        suit: " "
    },
    {
        name: " ",
        userMoney: 50,
        userCard: " ",
        suit: " "
    }
];
for (let i = 1; i <= numPlayers; i++) {
    players[i].name = readlineSync.question(`player ${i} please enter your name.. `);

    console.log(`hello ${players[i].name} you currently have ${players[i].userMoney} NIS`);
}

function round() {
    if (numPlayers == 2) {
        pos_bet = Math.min(players[numPlayers - 1].userMoney, players[numPlayers].userMoney);
    }
    if (numPlayers == 1) {
        pos_bet = players[numPlayers].userMoney;
    }
    var bet = readlineSync.question(`please place your bet before the next round, 1 to  ${pos_bet}  NIS: `);

    //check if bet is valid
    if (Number(bet) > pos_bet) {
        console.log(`it's not a valid bet. game over!`);
        exit;
    }
    // make the lottery
    for (let pos = numPlayers - 1; pos <= numPlayers; pos++) {
        players[pos].userCard = Math.floor(Math.random() * 12) + 1;
        players[pos].suit = suits[Math.floor(Math.random() * 4)];
        console.log(`${players[pos].name} card's is: ${players[pos].userCard} ${players[pos].suit}`);
    }
    //check the result of this round
    if (players[numPlayers - 1].userCard > players[numPlayers].userCard) {
        players[numPlayers - 1].userMoney += Number(bet);
        players[numPlayers].userMoney -= Number(bet);
        console.log(`${players[numPlayers - 1].name} won this round!`);
    }
    if (players[numPlayers - 1].userCard < players[numPlayers].userCard) {
        if (numPlayers === 2) {
            players[numPlayers - 1].userMoney -= Number(bet);
        }
        players[numPlayers].userMoney += Number(bet);
        console.log(`${players[numPlayers].name} won this round!`);
    }
    if (players[numPlayers - 1].userCard === players[numPlayers].userCard) {
        console.log(`this was a draw`);
    }
    //summery of this round
    for (j = 1; j <= numPlayers; j++) {
        console.log(`${players[j].name} now you have ${players[j].userMoney} NIS`);
        if (players[j].userMoney === 0) {
            flag = true; x = j;
        }
    }
    if (flag) {
        console.log(`${players[x].name} you lose this game! bye bye`);
        exit;
    }
    game = (readlineSync.keyInYN(`Do yoy want to play again? `));
    if (!game) {
        console.log(`I hope you enjoyed this game! bye bye`);
    }
    return;
}

do {
    round();
}
while (game);