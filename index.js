var rs = require('readline-sync');
var chalk = require('chalk');
var log = console.log;

log(chalk.black.bgYellowBright.underline.bold('Welcome to the Quiz Game!'));

// storing player name in a global variable
var username = rs.question("Enter your name: ");

//greeting user
log(chalk.red.bold(`Welcome ${username}!\n`));

//Description about the game 
log(chalk.black.bgBlue('About the game:'));
log(chalk.bgBlackBright('1. Question will be regarding my life.\n'+'2. You have to write the correct option.\n'+'3. Points:  Correct Answer:',chalk.green('+2')  +  '  Incorrect Answer:' ,chalk.redBright('-1 ')+'\n\n'));

rs.question(chalk.dim("Let's see how much you know me?\n"+"Press Enter to start the game..."));
log('\n');

//variable to store the player score
var score = 0;

//varibale to store the question in the form of array of objects 
var questions = [
   {question: `What is my age`,
    A: '22', 
    B:'23', 
    C:'24',
    answer: 'B'},
    {question: `What is my favourite cuisine?`,
    A: 'Italian', 
    B:'Chinese', 
    C:'Indian',
    answer: 'C'},
    {question: `What is my favourite colour?`,
    A: 'Black', 
    B:'White', 
    C:'Red',
    answer: 'A'},
    {question: `What's the one word that describes me?`,
    A: 'Extroverted', 
    B:'Determined', 
    C:'Clever',
    answer: 'B'},
    {question: `What is my favourite sport`,
    A: 'Badminton', 
    B:'Cricket', 
    C:'Basketbal',
    answer: 'B'},
 ];

//function to ask questions and calculate score
function gameplay(questions){
  let n = questions.length;
  let t = 0;
  let playAgain = 'N';
  for(let i=0;i<n;i++){
    t=i+1;
    log(chalk.inverse(t+'. '+questions[i].question));
    log(chalk.cyan('A: '+questions[i].A));
    log(chalk.cyan('B: '+questions[i].B));
    log(chalk.cyan('C: '+questions[i].C));

    var answer = rs.question('Answer: ');

    if(answer.toUpperCase() === questions[i].answer){
      console.log(chalk.green('Correct'));
      score = score + 2;
    }else{
      console.log(chalk.red('Incorrect'));
      score = score -1;
    }
  }
  //displaying final score 
  log(chalk.black.bgMagenta('\n'+ username +' Your final score is: '+ score +'\n'));

  
  //asking user to play game again
  playAgain = rs.question("Do you want to play again? Y/N: ")
  if(playAgain.toUpperCase() == 'Y' ){
    log('\nSetting score to zero....\n')
    score=0;
    gameplay(questions)
  }
  else{
    log(chalk.black.bgYellowBright('Thank you for participating'));
  }
}

//calling function
gameplay(questions);


