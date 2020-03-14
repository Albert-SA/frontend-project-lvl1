import generaterandomNumber from './randomNumber.js';
import gamesEngine from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = generaterandomNumber(100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const questionAndAnswer = {
    question,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;
};

export default () => gamesEngine(task, getQuestionAndAnswer);
