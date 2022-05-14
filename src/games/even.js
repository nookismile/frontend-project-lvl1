import getRandom from '../getRandomNum.js';
import readlineSync from "readline-sync";

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = () => {
    const question = getRandom();
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
};

const sets = 3;

const game = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('Whats your name?: ');
    console.log(`Hello, ${userName}`);
    console.log(description);

    for (let i = 1; i <= sets; i++) {
        const [question, answer] = getAnswer();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === answer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${answer}`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};

export default game;
