// JS Query Selectors
const cardHeader = document.querySelector('.card-header');
const cardBody = document.querySelector('.card-body');

// value of Current Questions.
let currentQuestion = 0;
// value of Timer
let count = 100;
let countdown;

// Array of Questoins.

const testQuestions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      '<js>',
      '<scripting>',
      '<script>',
      '<javascript>',
    ],
    correctAnswer: '2',
  },

  {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: [
      'The <head> section',
      'The <body> section',
      'The <url> section',
      'Both the <head> section and the <body> section are correct',
    ],
    correctAnswer: '3',
  },

  {
    question: 'What is the correct syntax for reffering to an external script called "xxx.js"?',
    answers: [
      '<script href = "xxx.js">',
      '<script name = "xxx.js">',
      '<script src = "xxx.js">',
      '<script link = "xxx.js">',
    ],
    correctAnswer: '2',
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      'alert("Hello World)"',
      'alertBox("Hello World)"',
      'msgBox("Hello World)"',
      'msg("Hello World)"',
    ],
    correctAnswer: '0',
  },
  {
    question: 'How do create a function in JavaScript?',
    answers: [
      'function = myFunction()',
      'function myFunction()',
      'function.myFunction()',
      'function:myFunction()',
    ],
    correctAnswer: '1',
  },

];

// Start Button
function start() {
  const startButton = document.createElement('button');
  startButton.setAttribute('class', ' col-12 btn btn-primary mt-1');
  startButton.id = 'start-button';

  cardBody.appendChild(startButton);
  cardHeader.innerHTML = "Let's take a test.";
  startButton.innerHTML = 'START';
  timer.innerHTML = `Score: ${count}`
}

// function for button press
function answerButtonPress(event) {
  const { target } = event;

  if (target.matches('#start-button')) {
    cardBody.innerHTML = '';
    displayQuestions();
    displayAnswers();
    timerStart();
    return;
  }

  if (target.matches('#submitButton')) {
    storeHighScore();
    count = 100;
    currentQuestion = 0;
    cardBody.innerHTML = '';
    timer.innerHTML = `Score: ${count}`;
    start();
    return;
  }

  if (target.matches('button')) {
    const correctAns = testQuestions[currentQuestion].correctAnswer;

    if (event.target.id !== correctAns) {
      count -= 10;
    }
    if (currentQuestion < testQuestions.length - 1) {
      currentQuestion++;
      cardBody.innerHTML = '';
      displayQuestions();
      displayAnswers();
    } else {
      cardBody.innerHTML = '';
      endQuiz();
    }
  }
}

// functions for displaying Questions.
function displayQuestions() {
  cardHeader.innerHTML = testQuestions[currentQuestion].question;
}

// functions for displaying answers.
function displayAnswers() {
  const questionsAnswers = testQuestions[currentQuestion].answers;

  for (let i = 0; i < questionsAnswers.length; i++) {
    const questionButtons = document.createElement('button');
    cardBody.appendChild(questionButtons);
    questionButtons.setAttribute('class', ' col-12 btn btn-primary mt-1');
    questionButtons.setAttribute('id', i);
    questionButtons.innerText = questionsAnswers[i];
  }
}

// function for timer
function timerStart() {
  count = 100;
  const timer = document.getElementById('timer');
  countdown = setInterval(() => {
    count--;
    timer.innerHTML = `Score: ${count}`;

    if (count <= 0) {
      cardBody.innerHTML = '';
      endQuiz();
    }
  }, 1000);
}

// function to end quiz

function endQuiz() {
  const name = document.createElement('p');
  const input = document.createElement('input');
  const submit = document.createElement('button');
  input.setAttribute('class', 'form-control');
  input.setAttribute('type', 'text');
  input.id = 'userInput';
  submit.setAttribute('type', 'submit');
  submit.setAttribute('class', 'btn btn-primary mt-1');
  submit.id = 'submitButton';
  showHighscores();
  cardBody.appendChild(name);
  cardBody.appendChild(input);
  cardBody.appendChild(submit);
  cardHeader.innerHTML = `<h1>High Scores</h1><h3>Your Score: ${count}</h3>`;
  name.innerHTML = 'Enter your Name.';
  input.innerHTML = 'show high score';
  submit.innerHTML = 'Submit';
  clearInterval(countdown);
  timer.innerHTML = `Score: ${count}`;
}
const highScores = JSON.parse(localStorage.getItem('score') || '[]');

function storeHighScore() {
  const userInput = document.getElementById('userInput');
  const highScore = {
    name: userInput.value,
    score: count,
  };
  highScores.push(highScore);
  highScores.sort((x, y) => ((x.score > y.score) ? -1 : 1));
  localStorage.setItem('score', JSON.stringify(highScores));
}

function showHighscores() {
  const ul = document.createElement('ul');

  ul.setAttribute('class', 'list-group mb-3');

  cardBody.appendChild(ul);

  for (let i = 0; i < highScores.length; i++) {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerHTML = `${highScores[i].name}: ${highScores[i].score}`;
    ul.appendChild(li);
  }
}

// Event Listner
cardBody.addEventListener('click', answerButtonPress);

// Start of program.

start();
