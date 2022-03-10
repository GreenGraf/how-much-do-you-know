const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
let saveHighScore;

// LOCAL STORAGE FOR SCORES
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// ENTER NAME AND SAVE
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// LOCAL STORAGE FOR SCORES
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
    
};