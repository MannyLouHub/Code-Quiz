
var cardHeader = document.querySelector(".card-header");

cardHeader.innerText = "Hello There?";

var cardBody = document.querySelector(".card-body");

cardBody.innerHTML = "Yes? How are you?"

var currentQuestion = 0


const testQuestions = [
    {
        question: "Who am I?",
        answers: {
            a: "David",
            b: "Manny",
            c: "Adventure Pirate",
        },
        correctAnswer: "b",
    },

    {
        question: "Where are you?",
        answers: {
            a: "Mars",
            b: "Venus",
            c: "Earth",
        },
        correctAnswer: "c",
    },

    {
        question: "Is Dan a furry?",
        answers: {
            a: "Yes",
            b: "No",
            c: "It really depends on what time of day you ask him, because some would think he is a furry, but he never ever identified himself as a furry. unless you count the times during epsiodes where he said he was a furry but those times really dont count since he could of just been saying that as a joke for the episode.",
        },
        correctAnswer: "a"
    },
]

function displayQuestions(){
    
}