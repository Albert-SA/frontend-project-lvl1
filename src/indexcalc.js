import readlineSync from 'readline-sync';

const calc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');  
  
  let i = 0;
  while (i < 3)  {
  const numberFirst = Math.floor(Math.random() * 100) + 1;
  const numberSecond = Math.floor(Math.random() * 100) + 1;
  const symbol = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  
  let result = 0;
  if (symbol[randomIndex] === '+') {
  result = numberFirst + numberSecond;
  } else if (symbol[randomIndex] === '-') {
  result = numberFirst - numberSecond;
  } else {
  result = numberFirst * numberSecond;
  }

  const answer = readlineSync.question(`Question: ${numberFirst} ${symbol[randomIndex]} ${numberSecond}\n` + `Your answer:`);  

  let correct = '';
  if (answer === String(result)) {
  correct = 'yes';
  } else { 
  correct = 'no'; 
  };
  
  if (answer === String(result)) {
  console.log('Correct!');
  } else { 
  console.log(`"${answer}" is wrong answer ;\(. Correct answer was "${result}".\n` + `Let's try again, ${userName}!`);
  break;
  } 
  i = i + 1;
 };
  if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
  }

};

export default calc;
