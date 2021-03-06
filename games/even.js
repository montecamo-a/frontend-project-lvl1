import getRandomInt from '../src/functions.js';
import runGame from '../src/brain-games.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const maxNumber = 99;

const getData = () => {
  const question = getRandomInt(1, maxNumber);
  return {
    question,
    answer: isEven(question) ? 'yes' : 'no',
  };
};

export default () => runGame(message, getData);
