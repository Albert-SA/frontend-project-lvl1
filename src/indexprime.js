import readlineSync from 'readline-sync';

const prime = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');  
  
  let i = 0;
  while (i < 3)  {
  const numberFirst = Math.floor(Math.random() * 100) + 1;
  const answerFirst = readlineSync.question(`Question: ${numberFirst}\n` + `Your answer:`);
  
  let result = '';
  if (numberFirst === 1) {
    result = 'no';
  } else {
  result = 'yes';
  }
  for (let i1 = 2; i1 < numberFirst; i1 = i1 + 1) {
  if (numberFirst % i1 === 0) {
  result = 'no';
  break;
  }
  }
  
  
  if (answerFirst === result) {
  console.log('Correct!');
  } else { 
  console.log(`"${answerFirst}" is wrong answer ;\(. Correct answer was "${result}". Let's try again, ${userName}!`);
  break;
  } 
  i = i + 1;
 };
  if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
  }

};

export default prime;
