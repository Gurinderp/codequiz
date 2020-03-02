var score = 0;
var questSelect = document.getElementById("question");
var answers = document.getElementById("choices")
var startBtn = document.getElementById("start")
var questions = [
    {
        title: "What color is the sky?",
        choices: ["Green", "Orange", "Yellow", "Blue"],
        answer: "Blue"
    },
    {
        title: "What color is grass?",
        choices: ["Green", "Orange", "Yellow", "Blue"],
        answer: "Green"
    },
    {
        title: "What color is a banana?",
        choices: ["Green", "Orange", "Yellow", "Blue"],
        answer: "Yellow"
    },
    {
        title: "What color is an Orange?",
        choices: ["Green", "Orange", "Yellow", "Blue"],
        answer: "Orange"
    },
    {
        title: "Click Green",
        choices: ["Green", "Orange", "Yellow", "Blue"],
        answer: "Green"
    },
];

const questionOne = () =>{
    const questOne = document.getElementById("questionOne");
    questOne = questions[0].title;
    let choiceOne = document.getElementById("choiceOne");
    choiceOne = questions[0].choices[0]
    choiceTwo = questions[0].choices[1]
    choiceThree = questions[0].choices[2]
    choiceFour = questions[0].choices[3]
}

const questionOne = () =>{
    const questOne = document.getElementById("questionOne");
    questOne = questions[0].title;
    let choiceOne = document.getElementById("choiceOne");
    choiceOne = questions[0].choices[0]
    choiceTwo = questions[0].choices[1]
    choiceThree = questions[0].choices[2]
    choiceFour = questions[0].choices[3]
}


for(var i = 0; i < questions.length; i++){
console.log(questions[i].title)
console.log(questions[i].choices)
}

questions[1].choices.forEach(element => console.log(element))
// prompts the questions but doesn't display them
function getQuestion(){
    var questSelect = document.getElementById("question");
    var answers = document.getElementById("choices")
    var startBtn = document.getElementById("start")
    
    for(var i = 0; i < questions.length; i++){
        var questionShown = window.prompt(questions[i].title)
        document.getElementById("question").append(questions[i].title)
        if (questionShown === questions[i].answer){
            score++;
          console.log("Correct!")
        }
        else(
            //timer - 15,
            message = "Incorrect!"
            )
        }
        return score;
    }

getQuestion();
//reaching different info
// questions[i].title;
// questions[i].choices;
// questions[i].answer;