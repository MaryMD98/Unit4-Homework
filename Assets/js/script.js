// coding quiz challenge
// var container
var questionH = document.querySelector(".question");
var answersH = document.querySelector(".answers");

var questionNumCount = 5;
var answerIndex = 0;

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
    for(var i =0; i < questionNumCount; i++){
        questionH.textContent = questionString[i];
        console.log(questionString[i]);
        
        //for loops to display answers answerIndex max is 19
        for(var x=0; x <= 3; x++){
            answersH.children[x].textContent = answerString[answerIndex];
            console.log(answerString[answerIndex]);
            answerIndex++;
        }
        console.log(answerIndex);
    }
}

questionDisplay();
