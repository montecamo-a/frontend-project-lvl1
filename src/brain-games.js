import readlineSync from 'readline-sync';

import * as even from './games/even';

const gameMap = {
  even: {
    message: even.message,
    roundsCount: even.roundsCount,
    getRounds: even.getRounds,
  },
};

export default (gameName) => {
  const game = gameMap[gameName];

  console.log('Welcome to the Brain Games!');
  console.log(game.message);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}\n`);

  const rounds = game.getRounds();

  for (let i = 0; i < game.roundsCount; i += 1) {
    console.log(`Question: ${rounds[i].question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rounds[i].answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rounds[i].answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
