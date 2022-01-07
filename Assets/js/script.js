// coding quiz challenge
// var container
var questionH = document.querySelector(".question");
var answersH = document.querySelector(".answers");
var startBTN = document.querySelector("#start");
var multipleAnswer1 = document.querySelector("#multianswer1");
var multipleAnswer2 = document.querySelector("#multianswer2");
var multipleAnswer3 = document.querySelector("#multianswer3");
var multipleAnswer4 = document.querySelector("#multianswer4");
var questionTitle = document.querySelector(".container");
var gameOverScreen = document.querySelection(".gameover");

var questionNumCount = 0;
var answerIndex = 0;
var userAnswerCnt = 0;
var correctCount = 0;
var wrongCount = 0;
var timerCount = 120;

// Array  of string questions
var questionString = [
    "Commonly used data types Do Not include:",
    "The condition in an if/else statement is enclosed within ______.",
    "Arrays in JavaScript can be used to store  _____.",
    "String values must be enclosed within _____ when being assigned to varibles",
    "A very useful tool used during development and debugging for printing content to the debugger is",
];

// Array of multiple choice answers
var answerString = [
    "strings","booleans","alerts","numbers",
    "quotes","curly brackets","parenthesis","square brackets",
    "numbers and strings","other arrays","booleans","all of the above",
    "commas","curly brackets","quotes","parenthesis",
    "JavaScript","terminal/bash","for loops","console.log",
];

// array of correct answers
var correctAns = [
    "alerts",
    "parenthesis",
    "all of the above",
    "quotes",
    "console.log",
];

//function to display questions and answers to console
function questionDisplay(){
    questionH.textContent = questionString[questionNumCount];
    
    //for loops to display answers answerIndex max is 19
    for(var x=0; x <= 3; x++){
        answersH.children[x].textContent = answerString[answerIndex];
        answerIndex++;
    }

}

//check if answer selected is correct
// answer will count number of answer selected
function checkifCorrect(answer){
// updating the index of multiple choice answer
    var userAnswer = answer + userAnswerCnt;    

// check if the answer chosen is correct
    if(answerString[userAnswer] === correctAns[questionNumCount]){
        console.log("correct answer");
        correctCount++;        
    } else {
        console.log("wrong answer");
        wrongCount++;
    }

//increase index of question and answer to be displayed
    userAnswerCnt = userAnswerCnt + 4;
    questionNumCount++;
}

//start of game, timer starts, first question is displied, header and text are hidden
function startGame(){
    $("#start").hide();
    $("#quizTitle").hide();
    $("#quizIns").hide();
    questionTitle.children[0].textContent = "Question"

    startTimer();
    // $("h1").hide();
    // $("p").hide();
}

// $(document).ready(function(){
//     $("#start").click(function(){
//         $("h1").hide();
//         $("p").hide();
//     });
// });

//Game over check correct and wrong answers, display save initial and score
function gameOver(){
    // displays All done! your total score is ..  enter initials and submit button
   $(".container").hide();


//    document.body.appendChild()

}

 // after submit display highscores with  with go back and clear highscore button 
function showResults(){

}

// timer function will  decrement 
function startTimer(){

    timer = setInterval(function(){
        timerCount--;

    // while timer is on quiz is on, 
    // once timer is done, check the wrong and correct answers
    // game is done 
        if(timerCount === 0){
            gameOver();

        }
    }, 1000);

}

// start button -> on click display question
startBTN.addEventListener("click", function(event){
    event.preventDefault();
    startGame();
    questionDisplay();
});

//when question answer -> next one displays
// on click -> display next question
multipleAnswer1.addEventListener("click", function(event){
    event.preventDefault();
    checkifCorrect(0);

    if (questionNumCount < 5){
        questionDisplay();
    }  else {
        gameOver();
    }

});
multipleAnswer2.addEventListener("click", function(event){
    event.preventDefault();
    checkifCorrect(1);

    if (questionNumCount < 5){
        questionDisplay();
    } else {
        gameOver();
    }
});
multipleAnswer3.addEventListener("click", function(event){
    event.preventDefault();
    checkifCorrect(2);

    if (questionNumCount < 5){
        questionDisplay();
    } else {
        gameOver();
    } 
});
multipleAnswer4.addEventListener("click", function(event){
    event.preventDefault();
    checkifCorrect(3);

    if (questionNumCount < 5){
        questionDisplay();
    }  else {
        gameOver();
    } 
});

// questionDisplay();
