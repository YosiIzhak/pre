var figlet = require('figlet');
const input = require(`readline-sync`);

console.log(figlet.textSync("Hang man!!"));

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

const words = [
    "javascript",
    "picture",
    "congratulation",
    "ambulance",
    "encyclopedia",
    "conversation",
    "elephent",
    "water",
    "israel",
    "apple"
];
// Pick a random word
const word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
const answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "*";
}
var remainingLetters = word.length;
var remainGuessing = 10;
// The game loop
while (remainingLetters > 0 && remainGuessing > 0) {
    // Show the player their progress
    console.log(answerArray.join(" "));
    // Get a guess from the player
    console.log(`You have ${remainGuessing} more guessing`);
    const guess = input.question(`Guess a letter or the word, or click 9 to stop playing.`);
    const lowGuess = guess.toLowerCase();
    if (lowGuess === '9') {
        break;
    }

    else if (lowGuess.length === 1) {
        if (isLetter(lowGuess)) {
            remainGuessing--;
            for (var j = 0; j < word.length; j++) {
                if (word[j] === lowGuess) {
                    answerArray[j] = lowGuess;
                    remainingLetters--;
                }
            }

        }
    }
    else if (lowGuess.length === word.length) {
        let validGuess = true;
        for (var i = 0; i < lowGuess.length; i++) {
            if (!isLetter(lowGuess[i])) {
                console.log(`Please enter a single letter or guess the word.`);
                validGuess = false;
                break;
            }

        }
        if (validGuess) {
            remainGuessing--;
        }
        if (lowGuess === word) {
            console.log("Good job! exellent!!");
            remainingLetters = 0;
            break;
        }
    }
    else {
        console.log(`Please enter a single letter or guess the word.`);
    }

}
if (remainGuessing === 0 && remainingLetters !== 0) {
    console.log(`Good job! The answer was ${word}`);
}
if (remainingLetters === 0) {
    console.log(answerArray.join(" "));
    console.log(`wonderful!!`);
}