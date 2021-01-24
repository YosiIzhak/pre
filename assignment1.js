var readlineSync = require('readline-sync');

let correct = 0;
console.log('welcome to our quiz!', '\n',
    'the subject of this quiz is basic math', '\n',
    '***********************************************');

const myQuestions = [
    {
        answers: ["64", "78", "88", "92"],
        rightAnswer: 2,
        questionText: "What is 36 + 42?"
    },
    {
        answers: ["28", "74", "47", "46"],
        rightAnswer: 1,
        questionText: "What is 7 x 4?"
    },
    {
        answers: ["12", "20", "8", "4"],
        rightAnswer: 4,
        questionText: "What is 16 / 4?"
    },
    {
        answers: ["88", "96", "82", "92"],
        rightAnswer: 4,
        questionText: "What is 8 x 12?"
    },
    {
        answers: ["66", "70", "76", "62"],
        rightAnswer: 1,
        questionText: "What is 14 + 52?"
    }
];
function question(question) {
    const answer = readlineSync.keyInSelect(question.answers, question.questionText);
    return question.rightAnswer === answer + 1;
}

// // check the answers

for (let pos = 0; pos < myQuestions.length; pos++) {
    console.log(`Question ${pos + 1}`);

    const isCorrect = question(myQuestions[pos]);

    if (isCorrect) {
        correct++;
    }
}
console.log('your grade is: ', correct,'/5');

switch (correct) {
    case 0:
    case 1:
    case 2:
        console.log('try a calculator');
        break;
    case 3:
    case 4:
        console.log('nice!');
        break;
    case 5:
        console.log('perfect!');
        break;

}
