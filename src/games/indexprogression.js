import generaterandomNumber from './randomNumber.js';
import gamesEngine from '../index.js';

const task = 'What number is missing in the progression?';  

const getQuestionAndAnswer = () => {
  const numberFirst = generaterandomNumber(10);
  const numberSecond = (generaterandomNumber(10) - 1);

  let result = '';
  let n = 1;
  for (let i1 = 0; i1 < 10; i1 = i1 + 1) {
  n = n + numberFirst;
  result= result + n + ' ';
  }

  const separator = ' ';
  const words = result.split(separator);
  const x = words[numberSecond];
  const capitalizedWords = [];
  for (let index = 0; index < words.length; index += 1) {
  if (index !== numberSecond) {
  capitalizedWords[index] = words[index];
  } else {
    capitalizedWords[index] = '..';
  }
 }
 
  const question = capitalizedWords.join(separator);
  const correctAnswer = x;

  const questionAndAnswer = {
    question,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;

};

export default () => gamesEngine(task, getQuestionAndAnswer);

