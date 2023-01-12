//Global letiables
let score = 0;
let output = -1;
let timeRemaining = 0;
let timer;

//Quiz Questions
let quizQuestions = [
  {
    question: "In Git Bash which command creates an file?",
    answerChoice: ["1: mkdir", "2: touch", "3: clear", "4: pwd"],
    correctAnswer: "1: mkdir",
  },
  {
    question: "Evaluates to true if expression 1 and expression 2 is true",
    answerChoice: [
      "1: expression1 == expression2",
      "2: expression1 && expression2",
      "3: expression1 || expression2",
      "4: expression1 != expression2",
    ],
    correctAnswer: "2: expression1 && expression2",
  },
  {
    question: "Primitive Types: 65",
    answerChoice: [
      "1: number",
      "2: string",
      "3: boolean",
      "4: all the above",
    ],
    correctAnswer: "1: number",
  },
  {
    question: "In Git Bash how do you see what is in the directory?",
    answerChoice: ["1: ls ", "2: clear ", "3: pwd ", "4: git add "],
    correctAnswer: "1: ls ",
  },
  {
    question: "Who created Bootstrap?",
    answerChoice: ["1: Twitter", "2: Facebook", "3: Microsoft", "4: Apple"],
    correctAnswer: "1: Twitter",
  },
];

//starts the gmae and the timer begins
function start() {

  timeRemaining = 75;
  document.getElementById("timeRemaining").innerHTML = timeRemaining;
  
  timer = setInterval(function() {
    timeRemaining--;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;
    if (timeRemaining <= 0) {
        clearInterval(timer);
        endGame(); 
    }
  }, 1000);
  
  next();
  }
  
  function endGame() {
  clearInterval(timer);
  
  let quizContainer = `
  <h1>The game is over!</h1>
  <h2>You got a ` + score +  ` /5!</h2>
  <input type="text" id="name" placeholder="First name"> 
  <button onclick="setScore()">Set score!</button>`;
  
  document.getElementById("welcomeContainer").innerHTML = quizContainer;
  }
  
  function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName",  document.getElementById('name').value);
  getScore();
  }
    
  function getScore() {
  let quizContainer = `
  <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
  <h1>` + localStorage.getItem("highscore") + `</h1><br> 
  <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    `;
  
  document.getElementById("welcomeContainer").innerHTML = quizContainer;
  }
  