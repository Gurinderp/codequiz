// Start Page
var startPage = document.getElementById("startPage")
// Question Selection
var questEl = document.getElementById("questionList")
var questSelect = document.getElementById("question");
var questNum = 0;
// Choice Selection
var answerOne = document.getElementById("choiceOne")
var answerTwo = document.getElementById("choiceTwo")
var answerThree = document.getElementById("choiceThree")
var answerFour = document.getElementById("choiceFour")
var choices = document.getElementsByClassName("choices")
// Start Button
var startBtn = document.getElementById("startButton")
// Time Remaining
var timer = document.getElementById("timeRem")
var time = 25;
// Score
var scoreNum = document.getElementById("scoreResult")
var endPage = document.getElementById("endPage")

var interval;

// Results
var correct = 0;
var score = 0;




// List of Questions
var questions = [
    {
        title: "Which of the following is not a data type?",
        choices: ["String", "Boolean", "Number", "Text"],
        answer: 3
    },
    {
        title: "Which company developed JavaScript?",
        choices: ["NetScape", "Microsoft", "Apple", "Java"],
        answer: 0
    },
    {
        title: "Which of the following is not a type of error in JavaScript?",
        choices: ["Load Time Errors", "Run Time Errors", "Evaluation Errors", "Logical Errors"],
        answer: 2
    },
    {
        title: "What does DOM stand for?",
        choices: ["Diametric Onion Model", "Document Object Model", "Dominion", "Domain"],
        answer: 1
    },
    {
        title: "Which of the following is another name for JavaScript?",
        choices: ["JScript", "Java", "Pain", "None of the Above"],
        answer: 3
    },
];


// Start Quiz function
function startQuiz(){
    startPage.classList.add("hidden");
    getQuestion();

    interval = setInterval(function(){
        if(time === 0){
            showScore();
            return;
        }

        time--;
        timer.textContent = time
    }, 1000)
}

// Score Function
function showScore(){
    clearInterval(interval);
    questEl.classList.add("hidden")
    endPage.classList.remove("hidden");
    scoreNum.textContent = `Score: ${score}`
}

// Displaying Question and Choices
function getQuestion(questNum){
    if(questNum === questions.length){
        showScore();
        return;
    }
    else{    
        questNum = 0
            questSelect.textContent = questions[questNum].title;
            answerOne.textContent = questions[questNum].choices[0];
            answerTwo.textContent = questions[questNum].choices[1];
            answerThree.textContent = questions[questNum].choices[2];
            answerFour.textContent = questions[questNum].choices[3];

    }
};

// Answer Check
function checkAnswer(answer){
    if(questions[questNum].answer === answer){
        correctAnswer();
        questNum++;
        getQuestion();
    }
    else {
        wrongAnswer();
        questNum++
        getQuestion();
    }
}
function correctAnswer(){
    document.getElementById("body").style.backgroundColor = "green"
}
function wrongAnswer(){
    document.getElementById("body").style.backgroundColor = "red"
}
