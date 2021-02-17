// create a multiple choice timed quiz 
// quiz and timer starts at click of start button
// render one question at a time
// move to next question when answer is chosen
// penalize a player 10 secs for wrong answers
// once quiz is complete or timer reaches 0 user is presented with a results page to input initials
// scores and intitals are stored until reset

var quizQuestions = document.getElementById('questions');
var resultsContainer = document.getElementById('results');
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

var myQuestions = [
    {
        question: "What is 2 + 2?",
        answers: ["A: 1", "B: 2", "C: 3", "D: 4"],
        correctAnswer: "D: 4"
    },
    {
        question: "What is 2 * 2?",
        answers: ["A: 1", "B: 2", "C: 30", "D: 4"],
        correctAnswer: "D: 4"
    },
    {
        question: "What is 2 - 2?",
        answers: ["A: 1", "B: 2", "C: 0", "D: 4"],
        correctAnswer: "C: 0"
    },
    {
        question: "What is 2 + 22?",
        answers: ["A: 1", "B: 24", "C: 8", "D: 4"],
        correctAnswer: "B: 24"
    },
    {
        question: "What is 20 - 2?",
        answers: ["A: 1", "B: 2", "C: 18", "D: 4"],
        correctAnswer: "C: 18"
    },
];

function startQuiz() {
    setTimer();
    getQuestions();

}

function getQuestions() {
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
    // if (questionIndex < myQuestions.length) {
    //    getQuestions(myQuestions[questionIndex]) 
    // } else {
    //     clearInterval(timeInterval);

    // }
}

function answerClick() {
    if (this.value === myQuestions[questionIndex].correctAnswer) {
        console.log('Good Job');
        questionIndex++;
        totalScore++;
        scoreContainer.textContent = "Score: " + totalScore;
        getQuestions()
    } else {
        timeLeft = timeLeft - 10;
        console.log('Wrong: -10 secs');
        questionIndex++;
        getQuestions()
    }
    
    // startQuiz()
}

function setTimer() {
    var timeInterval = setInterval(function () {
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

function keepScore() {

}

function resetQuiz () {
    location.reload();
}

// function showResults(){}


startButton.onclick = startQuiz;
resetButton.onclick = resetQuiz; 
