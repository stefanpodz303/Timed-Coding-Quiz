// create a multiple choice timed quiz 
// quiz and timer starts at click of start button
// render one question at a time
// move to next question when answer is chosen
// penalize a player 10 secs for wrong answers
// once quiz is complete or timer reaches 0 user is presented with a results page to input initials
// scores and intitals are stored until reset

var quizQuestions = document.getElementById('questions');
var scoreContainer = document.getElementById('score');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('reset-btn');
var choices = document.getElementById('choices');
var timerEl = document.getElementById("timer");
var timerText = document.getElementById("timer-text");
var timeLeft = 50;
var correctAnswer = ['d', 'b', 'a', 'c', 'd'];
var questionIndex = 0;
var totalScore = 0;
var timeInterval;

var myQuestions = [
    {
        question: "When you create an .html file which of these elements comes first?",
        answers: ["A: body", "B: header", "C: title", "D: head"],
        correctAnswer: "D: head"
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        answers: ["A: all.h1 {background-color:#FFFFFF}", "B: h1.all {background-color:#FFFFFF}", "C: h1 {bgcolor = #FFFFFF}", "D: h1 {background-color:#FFFFFF}"],
        correctAnswer: "D: h1 {background-color:#FFFFFF}"
    },
    {
        question: "What is the value of a boolean variable?",
        answers: ["A: number", "B: string", "C: true/false", "D: null"],
        correctAnswer: "C: true/false"
    },
    {
        question: "How do you declare a function?",
        answers: ["A: []", "B: ()", "C: {}", "D: ||"],
        correctAnswer: "B: ()"
    },
    {
        question: "Inside which HTML element do we put the JavaScript file?",
        answers: ["A: <java>", "B: <JS>", "C: <script>", "D: <javascript>"],
        correctAnswer: "C: <script>"
    },
];

function startQuiz() {
    setTimer();
    getQuestions();

}

function getQuestions() {

    if (questionIndex === myQuestions.length) {
       return endGame();
    } 

    startButton.disabled = true;
    var currentQuestion = myQuestions[questionIndex];
    quizQuestions.textContent = currentQuestion.question;
    choices.innerHTML = '';
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var currentAnswerEl = document.createElement('button');
        currentAnswerEl.textContent = currentQuestion.answers[i];
        currentAnswerEl.setAttribute('value', currentQuestion.answers[i]);
        currentAnswerEl.onclick = answerClick;
        choices.appendChild(currentAnswerEl);
    }
}

function answerClick() {
    if (this.value === myQuestions[questionIndex].correctAnswer) {
        console.log('Good Job');
        questionIndex++;
        totalScore = totalScore + 5;
        scoreContainer.textContent = "Score: " + totalScore;
        getQuestions()
    } else {
        timeLeft = timeLeft - 10;
        console.log('Wrong: -10 secs');
        questionIndex++;
        getQuestions()
    }
    
}

function setTimer() {
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeLeft--;
            timerEl.textContent = timeLeft;
        } else {
            timerEl.textContent = "";
            timerText.textContent = "GAME OVER";
            clearInterval(timeInterval);
        }
    }, 1000);
}   

function endGame() {
    clearInterval(timeInterval);
    keepScore();
    
    window.location.href = "highscores.html";
}

function keepScore() {
    
    var scores = JSON.parse(localStorage.getItem("Scores")) || [];
    var currentScore = {initials: "initials", score: totalScore};
    scores.push(currentScore);
    localStorage.setItem("Scores", JSON.stringify(scores));
   

}


function resetQuiz () {
    location.reload();
}

startButton.onclick = startQuiz;
resetButton.onclick = resetQuiz; 
