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
for(var i = 0; i < questions.length; i++){
console.log(questions[i].title)
console.log(questions[i].choices)
}

function displayQuestion(){

}


questions[1].choices.forEach(element => console.log(element))
// prompts the questions but doesn't display them
function getQuestion(){
    
    for(var i = 0; i < questions.length; i++){
        var questionShown = window.prompt(questions[i].title)
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