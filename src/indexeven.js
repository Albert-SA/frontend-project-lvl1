import readlineSync from 'readline-sync';

const answer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');  
  
  let i = 0;
  while (i < 3)  {
  const numberFirst = Math.floor(Math.random() * 100) + 1;
  const answerFirst = readlineSync.question(`Question: ${numberFirst}\n` + `Your answer:`);
  
  let correct = '';
  if (numberFirst % 2 === 0) {
  correct = 'yes';
  } else { 
  correct = 'no'; 
  };
  
  if ((numberFirst % 2 === 0 && answerFirst === 'yes') || (numberFirst % 2 !== 0 && answerFirst === 'no')) {
  console.log('Correct!');
  } else { 
  console.log(`"${answerFirst}" is wrong answer ;\(. Correct answer was "${correct}". Let's try again, ${userName}!`);
  break;
  } 
  i = i + 1;
 };
  if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
  }

};

export default answer;

