
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
    answer3: "c. Rat hunters",
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
var timerCount = 60;
var currentQuestion = 0;
var mode = "choices";
var endOfGame = false;
var timeInterval;
var userObj;
var inputBoxInitials;

function setTime() {
    console.log("In setTime function");
    var timerPar = document.getElementById("timer");

    timerPar.textContent = timerCount;

    timerInterval = setInterval(function () {
        timerCount--;
        timerPar.textContent = timerCount;
        //   Executes when timer is done
        if (timerCount < 1 || endOfGame === true) {
            clearInterval(timerInterval);
            if (timerCount < 0) {
                timerCount = 0;
                timerPar.textContent = timerCount;
            };
            alert("Game is over!");
        }
    }, 1000);
}

var count = 5;
function questionTimer() {
    console.log("In questionTimer function");

    var timerInt = setTimeout(function () {

        //   Executes when timer is done
        if (count === 0) {
            console.log("Count is " + count);
            console.log("In if statement of questionTimer");
            timerCount = 0;
            console.log(" If Statement Game is over!");
            console.log("TimerCount is " + timerCount);
            endOfGame = true;
            clearTimeout(timerInt);
        } else {
            console.log("in else of questionTimer");
            console.log(timerCount);
            clearQuestions();
            displayQuestions();
        }
        if (endOfGame === true) {
            console.log("End of Game If statement")
            clearInterval(timerInterval);
            alert("Game is over!");
            endGameForm();
        }
        count--;
    }, 1500);
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

function endGameForm() {
    console.log("In High Scores Function")
    console.log("countEndTime " + timerCount);
    clearQuestions();
    var h5ElementEG = document.querySelector("#questionH5");
    var h5ElementEndGame = document.createElement("h4");
    h5ElementEndGame.textContent = "All Done!";
    h5ElementEG.appendChild(h5ElementEndGame);

    var highScoreMsg = document.querySelector("#highScoreMessage");
    var highScoreMsgParagraph = document.createElement("h5");
    highScoreMsgParagraph.textContent = "High score: " + timerCount;
    highScoreMsg.appendChild(highScoreMsgParagraph);

    var initialsParMsg = document.querySelector("#inputInitials");
    var initialsPar = document.createElement("h5");
    initialsPar.textContent = "Enter Initials Here: ";
    initialsParMsg.appendChild(initialsPar);

    var initials = document.querySelector("#inputInitials");
    var inputBoxInitials = document.createElement("input");
    inputBoxInitials.setAttribute("id", "userInputInitials")
    initials.appendChild(inputBoxInitials);

    var submitInputBtn = document.querySelector("#inputInitials");
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitInputBtn.appendChild(submitButton);

    submitButton.addEventListener("click", function (event) {

        console.log("SubmitButton pushed");
        userObj = {
            initials: inputBoxInitials.value,
            highScore: timerCount
        };
        // Store the user oject with initials and high score into local storeage 
        localStorage.setItem("userObj", JSON.stringify(userObj));

        // Clear the page for the next page to be built
        inputBoxInitials.value = "";
        submitInputBtn.remove();
        initialsParMsg.textContent = "";
        highScoreMsg.textContent = "";
        h5ElementEndGame.textContent = "";
        // Call high scores page to be loaded
        highScores();
    })
};

viewHighScores.addEventListener("click", function (event) {
    highScores();
});

function clearDisplay() {
    clearQuestions();
    containerQuizHeader = document.querySelector("#quizStartContainer");
    containerQuizHeader.style.display = "none"
    inputBoxInitials.value = "";
    submitInputBtn.remove();
    initialsParMsg.textContent = "";
    highScoreMsg.textContent = "";
    h5ElementQuestion.textContent = "";
    button1.textContent = "";
    button2.textContent = "";
    button3.textContent = "";
    button4.textContent = "";
    message.textContent = "";
    h5ElementEndGame.textContent = "";
    h5HighScores.textContent = "";
};
function highScores() {
    // Build high scores page
    // clearDisplay();
    var h5ElementEG = document.querySelector("#questionH5");
    var h5ElementEndGame = document.createElement("h4");
    h5ElementEndGame.textContent = "High Scores";
    h5ElementEG.appendChild(h5ElementEndGame);
    // get high score out of local storage
    userObj = localStorage.getItem("userObj");
    // parse the data back into an object
    var userObj = JSON.parse(userObj);
    console.log("UserObject " + userObj);

    var divHighScores = document.querySelector("#displayHighScores");
    var h5HighScores = document.createElement("h5");
    console.log(userObj.initials);
    h5HighScores.textContent = "1. " + userObj.initials + " " + userObj.highScore;
    divHighScores.appendChild(h5HighScores);
    // Clear high scores button
    var clearBtn = document.querySelector("#displayHighScores");
    var clearButton = document.createElement("button");
    clearButton.textContent = "Clear High Scores";
    clearBtn.appendChild(clearButton);

    clearButton.addEventListener("click", function (event) {
        localStorage.clear();
        // get high score out of local storage
        userObj = localStorage.getItem("userObj");
        // parse the data back into an object
        var userObj = JSON.parse(userObj);
        h5HighScores.textContent = "";
        h5ElementEndGame.textContent = "";

        inputBoxInitials.value = "";
        submitInputBtn.remove();
        initialsParMsg.textContent = "";
        highScoreMsg.textContent = "";

    });
    // return to Quiz button
    var returnBtn = document.querySelector("#displayHighScores");
    var returnButton = document.createElement("button");
    returnButton.textContent = "Return Home";
    returnBtn.appendChild(returnButton);

    returnButton.addEventListener("click", function (event) {
        location.reload(true);
    });
};
function displayQuestions() {
    console.log("In displayQuestion function");

    var quizTimer = document.getElementById("timer");
    console.log(quizTimer);
    quizTimer.style.visibility = "visible"
    if (currentQuestion > 4) {
        clearQuestions();
        endGameForm();
        clearInterval(timerInterval);
        console.log("display high score " + quizTimer)
    };

    questions = questionArr[currentQuestion];
    var h5Element = document.createElement("h5");
    var b1 = document.createElement("button");
    var b2 = document.createElement("button");
    var b3 = document.createElement("button");
    var b4 = document.createElement("button");

    h5Element.textContent = questions.question;
    b1.textContent = questions.answer1;
    b2.textContent = questions.answer2;
    b3.textContent = questions.answer3;
    b4.textContent = questions.answer4;

    h5ElementQuestion.appendChild(h5Element);

    button1.setAttribute("class", "choices");
    button1.appendChild(b1);
    button1.addEventListener("click", checkAnswer1);

    button2.setAttribute("class", "choices");
    button2.appendChild(b2);
    button2.addEventListener("click", checkAnswer2);

    button3.setAttribute("class", "choices"); button3.appendChild(b3);
    button3.appendChild(b3);
    button3.addEventListener("click", checkAnswer3);

    button4.setAttribute("class", "choices"); button4.appendChild(b4);
    button4.appendChild(b4);
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
        if (timerCount <= 10) {
            timerCount = 0;
        } else {
            timerCount = timerCount - 10;
        };

    }
    currentQuestion++;

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