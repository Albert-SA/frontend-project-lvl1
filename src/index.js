import readlineSync from 'readline-sync';

const cyclesToWin = 3;

const runEngine = (task, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  
  for (let round = 1; round <= cyclesToWin; round += 1) {
  const questionAndAnswer = getQuestionAndAnswer();
    const quizQuestion = questionAndAnswer.question;
    console.log(`Question: ${quizQuestion}`);
    const correctAnswer = questionAndAnswer.answer;
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;


