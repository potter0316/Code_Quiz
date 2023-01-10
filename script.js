//Global Variables
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quizContainer");
let i = 0;

//Quiz Questions
var quizQuestions = [
  {
    question: "In Git Bash which command creates an file?",
    answerChoice: ["1: mkdir", "2: touch", "3: clear", "4: pwd"],
    correctAnswer: 1,
  },
  {
    question: "Evaluates to true if expression 1 and expression 2 is true",
    answerChoice: [
      "1: expression1 == expression2",
      "2: expression1 && expression2",
      "4: expression1 || expression2",
      "4: expression1 && expression2",
    ],
    correctAnswer: 1,
  },
  {
    question: "Primitive Types: 65",
    answerChoice: [
      "1: number",
      "2: string",
      "3: boolean",
      "4: all the above",
    ],
    correctAnswer: 0,
  },
  {
    question: "In Git Bash how do you see what is in the directory?",
    answerChoice: ["1: ls ", "2: clear ", "3: pwd ", "4: git add "],
    correctAnswer: 3,
  },
  {
    question: "Who created Bootstrap?",
    answerChoice: ["1: Twitter", "2: Facebook", "3: Microsoft", "4: Apple"],
    correctAnswer: 0,
  },
];

// Start Button
startBtn.addEventListener("click", function () {
  quizContainer.style.display = "block";
  setQuizQuestions();
});

function setQuizQuestions() {
  questions.textContent = quizQuestions[i].question;
  choiceA.textContent = quizQuestions[i].answerChoice[0];
  choiceB.textContent = quizQuestions[i].answerChoice[1];
  choiceC.textContent = quizQuestions[i].answerChoice[2];
  choiceD.textContent = quizQuestions[i].answerChoice[3];
}
