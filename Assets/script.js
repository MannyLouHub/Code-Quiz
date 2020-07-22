
// JS Query Selectors
var cardHeader = document.querySelector(".card-header");
var cardBody = document.querySelector(".card-body");

// value of Current Questions.
var currentQuestion = 0;
//value of Timer
var count = 60
var countdown



// Array of Questoins. 

const testQuestions = [
    {
        question: "Who am I?",
        answers: [
            "David",
            "Manny",
            "Adventure Pirate",
            "Spaceman",
        ],
        correctAnswer: "1",
    },

    {
        question: "Where are you?",
        answers: [
            "Mars",
            "Venus",
            "Earth",
            "Pluto",
        ],
        correctAnswer: "2",
    },

    {
        question: "Is Dan a furry?",
        answers: [
            "Yes",
            "No",
            "Maybe",
            "It really depends on what time of day you ask him, because some would think he is a furry, but he never ever identified himself as a furry. unless you count the times during epsiodes where he said he was a furry but those times really dont count since he could of just been saying that as a joke for the episode.",
        ],
        correctAnswer: "0"
    },
]

// Start Button
function start() {
    var startButton = document.createElement("button")
    startButton.setAttribute("class", " col-12 btn btn-primary mt-1");
    startButton.id = 'start-button'

    cardBody.appendChild(startButton)
    cardHeader.innerHTML = "Let's take a test."
    startButton.innerHTML = "START";
}

//function for button press
function answerButtonPress(event) {
    var target = event.target;

    if (target.matches('#start-button')) {
        cardBody.innerHTML = ""
        displayQuestions();
        displayAnswers();
        timerStart();
        return;
    };
    if (target.matches('#submitButton')) {
        storeHighScore();
        return;
    };

    if (target.matches("button")) {
        var correctAns = testQuestions[currentQuestion].correctAnswer

        if (event.target.id !== correctAns) {
            count -= 10;
        }
        if (currentQuestion < testQuestions.length - 1) {
            currentQuestion++
            cardBody.innerHTML = ""
            displayQuestions();
            displayAnswers();
        }
        else {
            cardBody.innerHTML = ""
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
    var questionsAnswers = testQuestions[currentQuestion].answers;

    for (let i = 0; i < questionsAnswers.length; i++) {
        var questionButtons = document.createElement("button")
        cardBody.appendChild(questionButtons)
        questionButtons.setAttribute("class", " col-12 btn btn-primary mt-1");
        questionButtons.setAttribute("id", i);
        questionButtons.innerHTML = questionsAnswers[i];
    }
}

//function for timer
function timerStart() {
    count = 60;
    var timer = document.getElementById("timer");
    countdown = setInterval(function () {
        count--
        timer.innerHTML = count;

        if (count <= 0) {
            cardBody.innerHTML = ""
            endQuiz();
        }
    }, 1000)


}

//function to end quiz

function endQuiz() {

    var name = document.createElement("p")
    var input = document.createElement("input");
    var submit = document.createElement("button");
    input.setAttribute("class", "form-control");
    input.setAttribute("type", "text");
    input.id = "userInput"
    submit.setAttribute("type", "submit")
    submit.setAttribute("class", "btn btn-primary mt-1")
    submit.id = 'submitButton'
    cardBody.appendChild(name);
    cardBody.appendChild(input);
    cardBody.appendChild(submit);
    cardHeader.innerHTML = `<h1>High Scores</h1><h3>Your Score: ${count}</h3>`;
    name.innerHTML = "Enter your Name."
    input.innerHTML = "show high score";
    submit.innerHTML = "Submit"
    clearInterval(countdown);
    timer.innerHTML = count;


}
var highScores = [];

function storeHighScore() {

    var userInput = document.getElementById("userInput");
    var highScore = {           
        name: userInput.value,
        score: count
    }
    highScores.push(highScore);
    localStorage.setItem("score", JSON.stringify(highScores));
}

function showHighscores() {

}





// Event Listner
cardBody.addEventListener("click", answerButtonPress);

// Start of program.

start();


