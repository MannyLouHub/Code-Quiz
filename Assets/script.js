
var cardHeader = document.querySelector(".card-header");

cardHeader.innerText = "Hello There?";

var cardBody = document.querySelector(".card-body");

// cardBody.innerHTML = "Yes? How are you?"

var currentQuestion = 0

// var questionButtons = document.querySelector(".btn");

// var questionsAnswers = testQuestions[0].answers[0];


const testQuestions = [
    {
        question: "Who am I?",
        answers: [
            "David",
            "Manny",
            "Adventure Pirate",
            "Spaceman",
        ],
        correctAnswer: 1,
    },

    {
        question: "Where are you?",
        answers: [
            "Mars",
            "Venus",
            "Earth",
            "Pluto",
        ],
        correctAnswer: 2,
    },

    {
        question: "Is Dan a furry?",
        answers: [
            "Yes",
            "No",
            "Maybe",
            "It really depends on what time of day you ask him, because some would think he is a furry, but he never ever identified himself as a furry. unless you count the times during epsiodes where he said he was a furry but those times really dont count since he could of just been saying that as a joke for the episode.",
        ],
        correctAnswer: 0
    },
]

var questionsAnswers = testQuestions[currentQuestion].answers;

function displayQuestions() {

    cardHeader.innerHTML = testQuestions[currentQuestion].question;

}

var buttonStore = ""

displayQuestions();

function displayAnswers() {

    for (let i = 0; i < questionsAnswers.length; i++) {

        var questionButtons = document.createElement("button")
        cardBody.appendChild(questionButtons)

        questionButtons.setAttribute("class", " col-12 btn btn-primary mt-1");


        questionButtons.innerHTML = questionsAnswers[i];





    }
}


displayAnswers();

currentQuestion++

displayQuestions();
displayAnswers();

debugger