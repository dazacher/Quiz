
// question
// deduct time
// Set the timer up to subtract one second until time is up
// Question Object definitions
var questionNumber = 0;
var questionArr = [{
    question: "Is there such a thing as a tea cup yorkshire terrier?",
    answer1: "a. True",
    answer2: "b. False",
    answer3: "c. Both a and b",
    answer4: "d. Neither a or b",
    correctAnswer: "b",
    correctAnswerResponse: "Correct! Good job!",
    incorrectAnswerResponse: "Wrong! Better luck next time!"
},
{
    question: "Yorkies were bred to be ___________.",
    answer1: "a. Lap dogs",
    answer2: "b. Scare elephants into submission",
    answer3: "c. Rat humters",
    answer4: "d. Ankle biters",
    correctAnswer: "c",
    correctAnswerResponse: "Correct! Awesome job!",
    incorrectAnswerResponse: "Wrong! Get a life!"
},
{
    question: "The breed Yorkshire Terrier was first called ___________.",
    answer1: "a. Angus Terrier",
    answer2: "b. Sutherland Terrier",
    answer3: "c. Field Terrier",
    answer4: "d. Scottish Terrier",
    correctAnswer: "d",
    correctAnswerResponse: "Correct! Well done!",
    incorrectAnswerResponse: "Wrong! Try again!"
},
{
    question: "The average weight of a yorkshire terrier is _______ pounds.",
    answer1: "a. 7",
    answer2: "b. 5",
    answer3: "c. 8",
    answer4: "d. 6",
    correctAnswer: "a",
    correctAnswerResponse: "Correct! Keep up the good work!",
    incorrectAnswerResponse: "Wrong! Sorry, keep trying!"
},
{
    question: "The yorkshire terrier became registered in what year?",
    answer1: "a. 1912",
    answer2: "b. 1862",
    answer3: "c. 1885",
    answer4: "d. 1943",
    correctAnswer: "c",
    correctAnswerResponse: "Correct! You're on a roll!",
    incorrectAnswerResponse: "Wrong! Tough luck!"
}
]

var questionsRow = document.querySelector("#questionsRow");
var h5ElementQuestion = document.querySelector("#questionH5");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var message = document.querySelector("#answerMessage");
var brElement1 = document.querySelector("btn1");
var brElement2 = document.querySelector("btn2");
var brElement3 = document.querySelector("btn3");
var brElement4 = document.querySelector("btn4");
var h5Element = document.createElement("h5");
var answerMessageParagraph = "";
var questions
var correctAnswer = "";
var chosenAnswer = "";
var timerCount
var currentQuestion = 0;
var mode = "choices";
var endOfGame = false;
// clearInterval(timerInterval);
function setTime() {
    console.log("In setTime function")
    var timerPar = document.getElementById("timer");
    timerCount = 60;

    timerPar.textContent = timerCount;

    var timerInterval = setInterval(function () {
        timerCount--;
        timerPar.textContent = timerCount;
        //   Executes when timer is done
        if (timerCount === 0 || endOfGame === true) {
            clearInterval(timerInterval);
            alert("Game is over!");
            highScoresForm()
            // Plan to execute alert message that game is over here
        }
    }, 1000);
}

var count = 5;
function questionTimer() {
    console.log("In questionTimer funstion")
    
    var timerInt = setTimeout(function () {
        count--;
        //   Executes when timer is done
        if (count = 0) {
            console.log("Count is " + count)
            console.log("In if statement of questionTimer")
            timerCount = 0; 
            // clearInterval(timerInterval);
            console.log("Game is over!");
            console.log(timerCount);
            alert("Game is over!");
            endOfGame = true;
            highScoresForm(timerCount)
            clearTimeout(timerInt);
        }else{
            console.log("in else of questionTimer")
            console.log(timerCount)
            clearQuestions();
            displayQuestions();
        }
        if (timerCount === 0 || endOfGame === true){
            clearInterval(timerInterval);
            alert("Game is over!");
            highScoresForm();
        // if (timerCount ){};  
    }, 2000);
}

function clearQuestions() {
    console.log("In clearQuestions function");

     h5ElementQuestion.textContent = "";
     button1.textContent = "";
     button2.textContent = "";
     button3.textContent = "";
     button4.textContent = "";
     message.textContent = "";
}

function highScoresForm(countTimer){
    var countEndTime = countTimer;
    console.log("In High Scores Function")
    console.log(countEndTime);
    clearQuestions();
    h5ElementQuestion.textContent = "All Done!";
    h5ElementQuestion.appendChild(h5Element);
};

function displayQuestions() {
    console.log("In displayQuestion function");
    
    var quizTimer = document.getElementById("timer");
    console.log(quizTimer);
    quizTimer.style.visibility = "visible"
        if(currentQuestion > 4){
            clearQuestions();
            highScoresForm();
        };

    questions = questionArr[currentQuestion];
    var h5Element = document.createElement("h5");
    var b1 = document.createElement("button");
    var br1 = document.createElement("br");
    var b2 = document.createElement("button");
    var br2 = document.createElement("br");
    var b3 = document.createElement("button");
    var br3 = document.createElement("br");
    var b4 = document.createElement("button");
    var br4 = document.createElement("br");
    var brElement = document.createElement("br");

    h5Element.textContent = questions.question;
    b1.textContent = questions.answer1;
    b2.textContent = questions.answer2;
    b3.textContent = questions.answer3;
    b4.textContent = questions.answer4;

    h5ElementQuestion.appendChild(h5Element);

    button1.setAttribute("class", "choices");
    button1.appendChild(b1);
    button1.appendChild(br1);
    button1.addEventListener("click", checkAnswer1);

    button2.setAttribute("class", "choices");
    button2.appendChild(b2);
    button2.appendChild(br2);
    button2.addEventListener("click", checkAnswer2);

    button3.setAttribute("class", "choices"); button3.appendChild(b3);
    button3.appendChild(b3);
    button3.appendChild(br3);
    button3.addEventListener("click", checkAnswer3);
     
    button4.setAttribute("class", "choices");   button4.appendChild(b4);
    button4.appendChild(b4);
    button4.appendChild(br4);
    button4.addEventListener("click", checkAnswer4);  
};

function checkAnswer1(event) {
    console.log("In checkAnswer function.")

    mode = questions.answer1.charAt(0);
    if (mode === questions.correctAnswer) {
        mode = questions.answer1.charAt(0);
        button1.setAttribute("class", questions.answer1.charAt(0));
        message = document.createElement("p");
        message.textContent = questions.correctAnswerResponse;
        answerMessage.append(message);
    } else if (mode !== correctAnswer) {
        mode = questions.answer1.charAt(0);
        button1.setAttribute("class", questions.answer1.charAt(0));
        message = document.createElement("p");
        message.textContent = questions.incorrectAnswerResponse;
        answerMessage.append(message);
        timerCount = timerCount - 10;
    }
        currentQuestion++;

        // if statement checking iterator and end game function
        questionTimer();
    
}
function checkAnswer2(event) {
    mode = questions.answer2.charAt(0);
    if (mode === questions.correctAnswer) {
        button2.setAttribute("class", questions.answer2.charAt(0));
        message = document.createElement("p");
        message.textContent = questions.correctAnswerResponse;
        answerMessage.append(message);
    } else if (mode !== correctAnswer) {
        mode = questions.answer2.charAt(0);
        button2.setAttribute("class", questions.answer2.charAt(0));
        message = document.createElement("p");
        message.textContent = questions.incorrectAnswerResponse;
        answerMessage.append(message);
        timerCount = timerCount - 10;
    }

    currentQuestion++;
     // if statement checking iterator and end game function
     questionTimer();
}
function checkAnswer3(event) {
    mode = questions.answer3.charAt(0);
    if (mode === questions.correctAnswer) {
        button3.setAttribute("class", questions.answer3.charAt(0));
        message = document.createElement("p");
        message.textContent = questions.correctAnswerResponse;
        answerMessage.append(message);
    } else if (mode !== correctAnswer) {
        mode = questions.answer3.charAt(0);
        button3.setAttribute("class", questions.answer3.charAt(0));
        message = document.createElement("p");
        message.textContent = questions.incorrectAnswerResponse;
        answerMessage.append(message);
        timerCount = timerCount - 10;
    }

    currentQuestion++;
     // if statement checking iterator and end game function
     questionTimer();
}
function checkAnswer4(event) {
    mode = questions.answer4.charAt(0);
    if (mode === questions.correctAnswer) {
        button4.setAttribute("class", questions.answer4.charAt(0));
        message = document.createElement("p");
        message.textContent = questions.correctAnswerResponse;
        answerMessage.append(message);
    } else if (mode !== correctAnswer) {
        mode = questions.answer4.charAt(0);
        button4.setAttribute("class", questions.answer4.charAt(0));
        message = document.createElement("p");
        message.textContent = questions.incorrectAnswerResponse;
        answerMessage.append(message);
        timerCount = timerCount - 10;
    }

    currentQuestion++;
     // if statement checking iterator and end game function
     questionTimer();
}


var startButton = document.getElementById("startButton");

startButton.addEventListener("click", function (event) {

    console.log("Hello");
    // After the start button is pushed, no longer show quiz button and what quiz is about
    containerQuizHeader = document.querySelector("#quizStartContainer");
    containerQuizHeader.style.display = "none"
    // Set time for game to 75 seconds
    setTime();
    //call the function to display the questions
    displayQuestions();


})