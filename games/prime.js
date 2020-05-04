import getRandomInt from '../lib/functions';
import runGame from '../brain-games';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const maxNumber = 99;

const getData = () => {
  const question = getRandomInt(1, maxNumber);
  return {
    question,
    answer: isPrime(question) ? 'yes' : 'no',
  };
};

export default () => runGame(message, getData);
