
// JS Query Selectors
var cardHeader = document.querySelector(".card-header");
cardHeader.innerText = "Hello There?";
var cardBody = document.querySelector(".card-body");

// Value of Current Questions.
var currentQuestion = 0



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


//function for button press

function buttonPress(event) {

    var target = event.target;
    var correctAns = testQuestions[currentQuestion].correctAnswer

    if (target.matches("button")) {
        if (event.target.id !== correctAns) {
            console.log("incorrect answer")
        }

        // debugger
        currentQuestion++
        if (currentQuestion < testQuestions.length) {

            cardBody.innerHTML = ""
            displayQuestions();
            displayAnswers();
        }
        else {
            cardHeader,innerHTML = "This is the high score";
            cardBody.innerHTML = "show high score";
        }


    }

}



cardBody.addEventListener("click", buttonPress);

function start (){

}

displayQuestions();
displayAnswers();
