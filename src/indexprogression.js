import readlineSync from 'readline-sync';

const progression = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');  
  
  let i = 0;
  while (i < 3)  {
  const numberFirst = Math.floor(Math.random() * 10) + 1;
  const numberSecond = Math.floor(Math.random() * 10);

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
  const result1 = capitalizedWords.join(separator);

  const answerFirst = readlineSync.question(`${result1}\n` + `Your answer:`);
  
  if (answerFirst === x) {
  console.log('Correct!');
  } else { 
  console.log(`"${answerFirst}" is wrong answer ;\(. Correct answer was "${x}".\n` + `Let's try again, ${userName}!`);
  break;
  } 
  i = i + 1;
 };

  if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
  }
}

export default progression;


