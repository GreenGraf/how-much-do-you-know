const question = document.getElementById("question");
let choices;
let correctAnswers = [];
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const numToAlpha = {1:'A', 2:'B', 3:'C', 4:'D', 5:'E', 6:'F'};
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

// FETCH QUESTIONS FROM JSON FILE

let questions = [];

fetch("https://quizapi.io/api/v1/questions?apiKey=9Si0Eb5bu9YIwFFSwLG3E4Fmo5pkvxSfmATADrph&limit=10&category=Linux&difficulty=hard").then( res => { 
    return res.json();
    })
    .then(loadedQuestions => {
    console.log(loadedQuestions);
    questions = loadedQuestions;
    startGame();
    
})

.catch(err => {
    console.error(err);
});

//CONSTANTS

startGame = () => {

    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// populate choices and assign a number to them

getNewQuestion = function () {

    // Remove Old Questions
    document.getElementById('choices-wrapper').innerHTML = '';
    // Reset Correct Answers
    correctAnswers = [];

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign("/end.html");
      }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    // Update Progress Bar

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%` ;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    if (currentQuestion.correct_answer) {
        correctAnswers.push(currentQuestion.correct_answer);
    }
   
    let questionNumber = 1;

    // Generate New Questions

    console.log(currentQuestion);

    for (let answer_key in currentQuestion.answers) {

        if (currentQuestion.answers[answer_key]) {

            let newAnswer = currentQuestion.answers[answer_key];

            let newChoice = `

                <div class="choice-container">
                    <p class="choice-prefix">${numToAlpha[questionNumber]}</p>
                    <p class="choice-text" data-value="answer_${numToAlpha[questionNumber].toLowerCase()}">${newAnswer}</p>
                </div>

                `;
            document.getElementById('choices-wrapper').innerHTML += newChoice;
            questionNumber++;
        }
    }

    // Obtain Correct Answers

    question.innerText = currentQuestion.question;

    choices = Array.from(document.getElementsByClassName("choice-text"));

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

    for (let answer_key in currentQuestion.correct_answers) {
        if (currentQuestion.correct_answers[answer_key] === "true") {
            correctAnswers.push(answer_key.slice(0, 8));
        }
    }

    choices.forEach(choice => {
        
        choice.addEventListener('click', e => {
            if(!acceptingAnswers) return;
            
            // Check the button value to see if it's in correct answer

            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset.value;

            console.log(selectedChoice);

            let classToApply;

            if (correctAnswers.includes(selectedAnswer)) {
                classToApply = "correct";
            } else {
                classToApply = "incorrect";
            }

            if(classToApply === 'correct'){
                incrementScore(CORRECT_BONUS);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout( () => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);    

            acceptingAnswers = false;
        
        });
    });
};    

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};
