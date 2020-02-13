import readlineSync from 'readline-sync';

const gcd = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');  
  let i = 0;
  while (i < 3)  {
  const numberFirst = Math.floor(Math.random() * 100) + 1;
  const numberSecond = Math.floor(Math.random() * 100) + 1;
  const symbol = [numberFirst, numberSecond];
   
  const answer = readlineSync.question(`Question: ${numberFirst} ${numberSecond}\n` + `Your answer:`);  

   let x = Math.abs(symbol[0]);
    for (let i = 1; i < 2; i++) { 
       let y = Math.abs(symbol[ i ]);
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
     }
   
  let correct = '';
  if (answer === String(x)) {
  correct = 'yes';
  } else { 
  correct = 'no'; 
  };
  
  if (answer === String(x)) {
  console.log('Correct!');
  } else { 
  console.log(`"${answer}" is wrong answer ;\(. Correct answer was "${x}".\n` + `Let's try again, ${userName}!`);
  break;
  } 
  i = i + 1;
 };
  if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
  }

};

export default gcd;
