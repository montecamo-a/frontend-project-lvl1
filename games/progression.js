import getRandomInt from '../lib/functions';
import runGame from '../brain-games';

const message = 'What number is missing in the progression?';

const maxNumber = 10;

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + step * i;
  }
  return progression;
};

const getData = () => {
  const start = getRandomInt(1, maxNumber);
  const step = getRandomInt(1, maxNumber);
  const progressionLength = 10;
  const progression = getProgression(start, step, progressionLength);
  const missingMemberIndex = getRandomInt(0, maxNumber - 1);
  const answer = progression[missingMemberIndex];

  progression[missingMemberIndex] = '..';

  return {
    question: progression.join(' '),
    answer: answer.toString(),
  };
};

export default () => runGame(message, getData);
