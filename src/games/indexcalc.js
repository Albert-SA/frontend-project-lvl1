import generaterandomNumber from './randomNumber.js';
import gamesEngine from '../index.js';

const task = 'What is the result of the expression?';

const symbol = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const numberFirst = generaterandomNumber(100);
  const numberSecond = generaterandomNumber(100);
  const randomIndex = Math.floor(Math.random() * 3);

  let result = 0;
  switch(symbol[randomIndex]) {
    case '+':
      result = numberFirst + numberSecond;
      break;
    case '-':
      result = numberFirst - numberSecond;
      break;
    case '*':
      result = numberFirst - numberSecond;
      break;
  }

  const question = `${numberFirst} ${symbol[randomIndex]} ${numberSecond}`;
  const correctAnswer = result;

  const questionAndAnswer = {
    question,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;
};

export default () => gamesEngine(task, getQuestionAndAnswer);
