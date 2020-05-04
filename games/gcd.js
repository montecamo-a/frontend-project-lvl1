import getRandomInt from '../lib/functions';
import runGame from '../brain-games';

const message = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => (num1 === num2
  ? num1
  : gcd(Math.min(num1, num2), Math.abs(num1 - num2))
);

const maxNumber = 99;

const getData = () => {
  const number1 = getRandomInt(1, maxNumber);
  const number2 = getRandomInt(1, maxNumber);
  return {
    question: `${number1} ${number2}`,
    answer: gcd(number1, number2).toString(),
  };
};

export default () => runGame(message, getData);
