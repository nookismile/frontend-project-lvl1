import getRandom from '../getRandomNum.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = () => {
    const question = getRandom();
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
};

const start = () => startGame(getAnswer, description);
export default start;
