
// JS Query Selectors
var cardHeader = document.querySelector(".card-header");
var cardBody = document.querySelector(".card-body");

// Value of Current Questions.
var currentQuestion = -1



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



    cardBody.appendChild(startButton)
    cardHeader.innerHTML = "Let's take a test."
    startButton.innerHTML = "START";




}

//function for button press
function buttonPress(event) {

    var target = event.target;


    if (target.matches("button")) {
        currentQuestion++


        if (currentQuestion < testQuestions.length) {

            var correctAns = testQuestions[currentQuestion].correctAnswer

            if (event.target.id !== correctAns) {
                console.log("incorrect answer")
            }
            cardBody.innerHTML = ""
            displayQuestions();
            displayAnswers();


        }
        else {

            cardHeader.innerHTML = "This is the high score";
            cardBody.innerHTML = "show high score";
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
    var count = 60;
    var timer = document.getElementById("timer");
    var countdown = setInterval(function () {
        count--
        timer.innerHTML = count;
    }, 1000)
}




// Event Listner
cardBody.addEventListener("click", buttonPress);


start();
