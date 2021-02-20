
var saveScore = document.getElementById('saveScoreBtn')
var display = document.getElementById('display-card')





// backButton.onclick = backToQuiz;
// function inputInitials() {
//     localStorage.setItem("Initials", initials);
// }

// // get from local storage and display
function getScore() {
    var scores = JSON.parse(localStorage.getItem("Scores")) || [];
    for (var i = 0; i < scores.length; i++) {
        var scoreEntry = scores[i];
        var initials = scoreEntry.initials;
        var score = scoreEntry.score;
        var displayLine = initials + ' - ' + score + '\n';
        display.textContent += displayLine;
    }
    
}
getScore();

// SaveScore.onclick = startQuiz;
