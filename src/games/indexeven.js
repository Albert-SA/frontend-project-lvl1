import generaterandomNumber from './randomNumber.js';
import gamesEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = generaterandomNumber(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const questionAndAnswer = {
    question,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;
};

export default () => gamesEngine(task, getQuestionAndAnswer);

