function startQuiz() {
    let landing = document.querySelector(".landing-page");
    let questions = document.querySelector(".questionList");
    landing.classList.add("hide");
    questions.classList.remove("hide");
    showQuiz();
    startTimer();
};

function startTimer() {
    let timerEl = document.querySelector("#timer")
    timerEl.textContent = time;

    const time = 60;
    time--;

    if (time <= 0) {
        quizEnd();
    }
};

quizEnd() {

}