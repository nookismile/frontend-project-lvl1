import readlineSync from 'readline-sync';

const sets = 3;

const startGame = (getAnswer, description) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('Whats your name?: ');
    console.log(`Hello, ${userName}`);
    console.log(description);

    for(let i = 1; i <= sets; i++) {
        const [question, answer] = getAnswer();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if(userAnswer === answer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${answer}`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations ${userName}!`);
};

export default startGame;
