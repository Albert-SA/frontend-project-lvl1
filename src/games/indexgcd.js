import generaterandomNumber from './randomNumber.js';
import gamesEngine from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';  

const getQuestionAndAnswer = () => {
  const numberFirst = generaterandomNumber(100);
  const numberSecond = generaterandomNumber(100);
  
  const symbol = [numberFirst, numberSecond];
  let x = Math.abs(symbol[0]);
  for (let i = 1; i < 2; i++) { 
    let y = Math.abs(symbol[ i ]);
    while (x && y){ x > y ? x %= y : y %= x; }
    x += y;
  }

  const question = `${numberFirst} ${numberSecond}`;
  const correctAnswer = x;

  const questionAndAnswer = {
    question,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;

};

export default () => gamesEngine(task, getQuestionAndAnswer);

