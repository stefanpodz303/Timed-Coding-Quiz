var initialsInput = document.getElementById('initials');
var saveScore = document.getElementById('saveScoreBtn');
var display = document.getElementById('display-card');

var totalScore = localStorage.getItem('tempScore');


function keepScore(initials) {
    
    var scores = JSON.parse(localStorage.getItem("Scores")) || [];
    var currentScore = {initials: initials, score: totalScore};
    scores.push(currentScore);
    localStorage.setItem("Scores", JSON.stringify(scores));
    getScore();
    localStorage.removeItem('tempScore');

}



function getScore() {
    var scores = JSON.parse(localStorage.getItem("Scores")) || [];
    display.innerHTML = '';
    for (var i = 0; i < scores.length; i++) {
        var scoreEntry = scores[i];
        var initials = scoreEntry.initials;
        var score = scoreEntry.score;
        var scoreEl = document.createElement('p');
        var displayLine = initials + ' - ' + score;
        scoreEl.textContent += displayLine;
        display.appendChild(scoreEl);
    }
    
}
getScore();

saveScore.addEventListener('click', function(){
    var initials = initialsInput.value.trim();
    keepScore(initials);
})

