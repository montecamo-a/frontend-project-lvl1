import getRandomInt from '../lib/functions';
import runGame from '../brain-games';

const message = 'What is the result of the expression?';

const operations = [
  {
    char: '+',
    action: (num1, num2) => num1 + num2,
  },
  {
    char: '-',
    action: (num1, num2) => num1 - num2,
  },
  {
    char: '*',
    action: (num1, num2) => num1 * num2,
  },
];

const maxNumber = 99;

const getData = () => {
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const number1 = getRandomInt(1, maxNumber);
  const number2 = getRandomInt(1, maxNumber);
  return {
    question: `${number1} ${operation.char} ${number2}`,
    answer: operation.action(number1, number2).toString(),
  };
};

export default () => runGame(message, getData);
