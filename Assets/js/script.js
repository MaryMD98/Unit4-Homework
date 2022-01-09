// coding quiz challenge
var questionH = document.querySelector(".question");
var answersH = document.querySelector(".answers");
var startBTN = document.querySelector("#start");
var multipleAnswer1 = document.querySelector("#multianswer1");
var multipleAnswer2 = document.querySelector("#multianswer2");
var multipleAnswer3 = document.querySelector("#multianswer3");
var multipleAnswer4 = document.querySelector("#multianswer4");
var questionTitle = document.querySelector(".container");
var gameOverScreen = document.querySelector(".gameOver");
var clearHighScore = document.querySelector(".scores");
var submitBtn = document.createElement("BUTTON");
var goBack = document.createElement("BUTTON");
var clearScore = document.createElement("BUTTON");
var textArea = document.createElement("TEXTAREA");

var questionNumCount = 0;
var answerIndex = 0;
var userAnswerCnt = 0;
var correctCount = 0;
var wrongCount = 0;
var timerCount = 10;
var finalScore = 0;
var userInitials = " ";
var highscoreMsg = "*. ";

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

// start button -> on click display question
startBTN.addEventListener("click", function(event){
    event.preventDefault();
    startGame();
    questionDisplay();
});

//start of game, timer starts, first question is displayed, header and text are hidden
function startGame(){
    $("#start").hide();
    $("#quizTitle").hide();
    $("#quizIns").hide();
    $(".container").show();

    questionTitle.children[0].textContent = "Question";

    startTimer();
    // $("h1").hide();
    // $("p").hide();
}

//function to display questions and answers to console
function questionDisplay(){
    questionH.textContent = questionString[questionNumCount];
    
    //for loops to display answers answerIndex max is 19
    for(var x=0; x <= 3; x++){
        answersH.children[x].textContent = answerString[answerIndex];
        answerIndex++;
    }
}

//when question answer -> next one displays
// on click -> display next question
multipleAnswer1.addEventListener("click", function(event){
    event.preventDefault();
    checkifCorrect(0);

    if (questionNumCount < 5){
        questionDisplay();
    }  else {
        //timer stops - game stops
        timerCount = 0;
    }
});

multipleAnswer2.addEventListener("click", function(event){
    event.preventDefault();
    checkifCorrect(1);

    if (questionNumCount < 5){
        questionDisplay();
    } else {
        //timer stops - game stops
        timerCount = 0;
    }
});

multipleAnswer3.addEventListener("click", function(event){
    event.preventDefault();
    checkifCorrect(2);

    if (questionNumCount < 5){
        questionDisplay();
    } else {
        //timer stops - game stops
        timerCount = 0;
    } 
});

multipleAnswer4.addEventListener("click", function(event){
    event.preventDefault();
    checkifCorrect(3);

    if (questionNumCount < 5){
        questionDisplay();
    }  else {
        //timer stops - game stops
        timerCount = 0;
    } 
});

//check if answer selected is correct
// answer will count number of answer selected
function checkifCorrect(answer){
// updating the index of multiple choice answer
    var userAnswer = answer + userAnswerCnt;    

// check if the answer chosen is correct
    if(answerString[userAnswer] === correctAns[questionNumCount]){
        correctCount++;        
    } else {
        // timer is decresed to penalize wrong answer
        timerCount = timerCount - 2;
        wrongCount++;
    }

//increase index of question and answer to be displayed
    userAnswerCnt = userAnswerCnt + 4;
    questionNumCount++;
}

//Game over check correct and wrong answers, display save initial and score
function gameOver(){
    // displays All done! your total score is ..  enter initials and submit button
    $(".container").hide();
    $(".gameOver").show();
    successMath();
    gameOverScreen.children[0].textContent = "All Done!";
    gameOverScreen.children[1].textContent = "Your Final Score is " + finalScore + ".";
    gameOverScreen.children[2].textContent = "Enter Initials: ";
    
    textArea.innerHTML = "Enter Initials.. ";
    document.body.appendChild(textArea);

    submitBtn.innerHTML = "SUBMIT";
    document.body.appendChild(submitBtn);

    textArea.style.visibility = "visible";
    submitBtn.style.visibility = "visible";
}

// do the math of total score 20 points each correct question
function successMath(){
    finalScore = correctCount * 20;
    
    console.log("final score is " + finalScore); 
}

//event listener for submit, to submit initials and score
// submit button
submitBtn.addEventListener("click", function(event){
    event.preventDefault();  
    submitBtn.style.visibility = "hidden";
    textArea.style.visibility = "hidden";
    textArea.value = " ";
    showResults(); 
});

//event listener for the text area to add initials
textArea.addEventListener('keydown', function(event){
    // get old letter to add to new letter
    var oldInitial = userInitials;

    // add both letters and add it to counter and local storage
    userInitials = oldInitial.concat(event.key); 
});

 // after submit display highscores with  with go back and clear highscore button 
 function showResults(){
    $(".gameOver").hide();
    $(".scores").show();

    checkLocal();

    var highInitial = localStorage.getItem("userInitials");
    var highScore = localStorage.getItem("finalScore");
    
    clearHighScore.children[0].textContent = "HIGHSCORES";
    clearHighScore.children[1].textContent = highscoreMsg.concat(highInitial, " - ", highScore);;

    goBack.innerHTML = "GO BACK";
    document.body.appendChild(goBack);

    clearScore.innerHTML = "Clear HighScore";
    document.body.appendChild(clearScore);

    goBack.style.visibility = "visible";
    clearScore.style.visibility = "visible";
}

// go back starts the game one again 
// store the score in local storage
goBack.addEventListener("click", function(event){
    event.preventDefault();  

    goBack.style.visibility = "hidden";
    clearScore.style.visibility = "hidden";

    $(".scores").hide();
    gameInit(); 
});

// clear score will reset the game completly 
// clear the local storage to 0 
clearScore.addEventListener("click", function(event){
    event.preventDefault();  

    goBack.style.visibility = "hidden";
    clearScore.style.visibility = "hidden";

    $(".scores").hide();
    clearLocal(); 
    gameInit();
});

// will check results from local and saves highest score to local storage to display
function checkLocal(){
    var oldscore = localStorage.getItem("finalScore");

    if(finalScore >= oldscore){
        localStorage.setItem("finalScore" , finalScore);
        localStorage.setItem("userInitials" , userInitials);
    } 
}

// start the parameters of the game to initial and start the game
function gameInit(){
    questionNumCount = 0;
    answerIndex = 0;
    userAnswerCnt = 0;
    correctCount = 0;
    wrongCount = 0;
    timerCount = 10;
    finalScore = 0;
    userInitials = " ";

    $("#start").show();
    $("#quizTitle").show();
    $("#quizIns").show();
}

// will clear the scores on local storage and resets the game
function clearLocal(){
// Initializes local storage when start of game and when reset
    localStorage.setItem("finalScore" , 0);
    localStorage.setItem("userInitials" , " ");
}

// timer function will  decrement 
function startTimer(){
    timer = setInterval(function(){
        timerCount--;

    // while timer is on quiz is on, 
    // once timer is done, check the wrong and correct answers
    // game is done 
        if(timerCount <= 0){
            gameOver();
            clearInterval(timer);
        }
    }, 1000);
}

clearLocal();