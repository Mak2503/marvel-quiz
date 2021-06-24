var readlineSync = require ("readline-sync");

var userName = readlineSync.question("May I know your name? ");

console.log("Hi! " + userName + " Welcome to the MARVEL QUIZ");

var questions = [{
  question: "Who is the father of Tony Stark? ",
  answer: "Howard Stark"
},
{
  question: "What is Thor's hammer being called? ",
  answer: "Mjollnir"
},
{
  question: "Who is responsible for Endgame to be happen? ",
  answer: "StarLord"
},
{
  question: "Who is true pioneer of Endgame? ",
  answer: "Rat"
},
{
  question: "What is the name of root that Nebula ate in GOTG 2? ",
  answer: "Yaro"
},
{
  question: "What material does Captain America's shield made of? ",
  answer: "Vibranium"
},
{
  question: "Who/What is the main antogonist in the Captain America sequel? ",
  answer: "Hydra"
},
{
  question: "Which infinity stone appeared in Thor: The Dark World? ",
  answer: "Aether"
},
{
  question: "Who is the guardian of the soul stone? ",
  answer: "Red Skull"
},
{
  question: "What is Iron Man's first suit named? ",
  answer: "Grey Armor"
}
];
var score = 0;
function quiz (question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score = score + 1;
    console.log("Your score:", score);
  } else {
    console.log("You are wrong!");
    console.log("The correct answer is:", answer);
    console.log("Your score:", score);
  }
}

var highScores = [{
  name: "Kader",
  score: 10
},
{
  name: "Sadiq",
  score: 2
}]
for (var i=0; i<questions.length; i++) {
  var quizQues = questions[i];
  quiz(quizQues.question, quizQues.answer);
}
console.log("\n\nHurray! You have completed the quiz\n\nYour final score:", score);
console.log("--------------");
for (var i=0; i<highScores.length; i++) {
  var currentHigh = highScores[i];
  console.log("Highscore is ", "\n\n" + currentHigh.name + " : " + currentHigh.score + "\n" + userName + " : " + score);
}
console.log("--------------");