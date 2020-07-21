// Start Page
var startPage = document.getElementById("startPage");
// Question Selection
var questEl = document.getElementById("questionList");
var questSelect = document.getElementById("question");
var questNum = 0;
// Choice Selection
var answerOne = document.getElementById("choiceOne");
var answerTwo = document.getElementById("choiceTwo");
var answerThree = document.getElementById("choiceThree");
var answerFour = document.getElementById("choiceFour");
var choices = document.getElementsByClassName("choices");
// Start Button
var startBtn = document.getElementById("startButton");
// Time Remaining
var timer = document.getElementById("timeRem");
var time = 25;
// Score
var scoreNum = document.getElementById("scoreResult");
var endPage = document.getElementById("endPage");

var interval;

// Results
var correct = 0;
var score = 0;

// List of Questions
var questions = [
	{
		title: "Which of the following is not a data type?",
		choices: ["String", "Boolean", "Number", "Text"],
		answer: "Text",
	},
	{
		title: "Which company developed JavaScript?",
		choices: ["NetScape", "Microsoft", "Apple", "Java"],
		answer: "NetScape",
	},
	{
		title: "Which of the following is not a type of error in JavaScript?",
		choices: [
			"Load Time Errors",
			"Run Time Errors",
			"Evaluation Errors",
			"Logical Errors",
		],
		answer: "Evaluation Errors",
	},
	{
		title: "What does DOM stand for?",
		choices: [
			"Diametric Onion Model",
			"Document Object Model",
			"Dominion",
			"Domain",
		],
		answer: "Document Object Model",
	},
	{
		title: "Which of the following is another name for JavaScript?",
		choices: ["JScript", "Java", "Pain", "None of the Above"],
		answer: "None of the Above",
	},
];
console.log(questions[questNum].title);

// Start Quiz function
function startQuiz() {
	startPage.classList.add("hidden");
	getQuestion(questNum);

	interval = setInterval(function () {
		time--;
		timer.textContent = time;
	}, 1000);
}

// Displaying Question and Choices
function getQuestion(questNum) {
	questNum = currentQuest[index];
	if (questNum === questions.length) {
		showScore();
		return;
	} else {
		questSelect.textContent = questions[questNum].title;
		console.log(questSelect.textContent);
		answerOne.textContent = questions[questNum].choices[0];
		answerTwo.textContent = questions[questNum].choices[1];
		answerThree.textContent = questions[questNum].choices[2];
		answerFour.textContent = questions[questNum].choices[3];
	}
}

// Answer Check
function checkAnswer() {
	let playerAnswer = choices.clicked;
	console.log(questions[questNum].answer);
	console.log(playerAnswer);
	if (questions[questNum].answer === playerAnswer) {
		correctAnswer();
		questNum++;
		getQuestion();
	} else {
		wrongAnswer();
		questNum++;
		getQuestion();
	}
}
function correctAnswer() {
	document.getElementById("body").style.backgroundColor = "green";
}
function wrongAnswer() {
	document.getElementById("body").style.backgroundColor = "red";
}

// Score Function
function showScore() {
	clearInterval(interval);
	questEl.classList.add("hidden");
	endPage.classList.remove("hidden");
	scoreNum.textContent = `Score: ${score}`;
}
