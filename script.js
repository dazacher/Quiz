
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

var answerMessageParagraph = "";
var questions
var correctAnswer = "";
var chosenAnswer = "";
var timerCount
var currentQuestion = 0;
var mode = "choices";
function setTime() {
    console.log("In setTime function")
    var timerPar = document.getElementById("timer");
    timerCount = 75;

    timerPar.textContent = timerCount;

    var timerInterval = setInterval(function () {
        timerCount--;
        timerPar.textContent = timerCount;
        //   Executes when timer is done
        if (timerCount === 0) {
            clearInterval(timerInterval);
            // sendMessage();
            // Plan to execute alert message that game is over here
        }
    }, 1000);
}

function questionTimer() {
    console.log("In questionTimer funstion")
    var count = 5;
    var timerInt = setTimeout(function () {
        count--;
        //   Executes when timer is done
        if (count === 0) {
            console.log("Game is over!");
            alert("Game is over!");
            clearTimeout(timerInt);
        }
        clearQuestions();
        displayQuestions();
    }, 5000);
    // clearQuestions();

}

function clearQuestions() {
    console.log("In clearQuestions function");
    //questionRow.innerHTML = ""
    //h5ElementQuestion.style.visibility = "hidden";
    // button1.style.visibility = "hidden";
    // button2.style.visibility = "hidden";
    // button3.style.visibility = "hidden";
    // button4.style.visibility = "hidden";
     h5ElementQuestion.textContent = "";
     button1.textContent = "";
     button2.textContent = "";
     button3.textContent = "";
     button4.textContent = "";
     message.textContent = "";


}

function highScoresForm(){};

function displayQuestions() {
    console.log("In displayQuestion function");
    var quizTimer = document.getElementById("timer");
    quizTimer.style.visibility = "visible"
        if(currentQuestion > 4){
            clearQuestions();
            highScoresForm();
        };
    questions = questionArr[currentQuestion];
    var h5Element = document.createElement("h5");
    var b1 = document.createElement("button");
    var b2 = document.createElement("button");
    var b3 = document.createElement("button");
    var b4 = document.createElement("button");

    // button1.style.textAlign = "center"
    // button2.style.textAlign = "center"
    // button3.style.textAlign = "center"
    // button4.style.textAlign = "center"

    // button1.setAttribute.textAlign = "center"
    // button1.setAttribute("text-align", "center");
    button1.setAttribute("style", "text-align: center")
    button2.setAttribute("style", "text-align: center")
    button3.setAttribute("style", "text-align: center")
    button4.setAttribute("style", "text-align: center")
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
    button3.addEventListener("click", checkAnswer3);
    
  
    button4.setAttribute("class", "choices");   button4.appendChild(b4);
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

        currentQuestion++;

        // if statement checking iterator and end game function
        questionTimer();
    }
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
    }

    currentQuestion++;
     // if statement checking iterator and end game function
     questionTimer();
}


// button1.addEventListener("click", function () {
//     mode = questions.answer1.charAt(0);
//     if (mode === questions.correctAnswer) {
//         mode = questions.answer1.charAt(0);
//         button1.setAttribute("class", questions.answer1.charAt(0));
//         message = document.createElement("p");
//         message.textContent = questions.correctAnswerResponse;
//         answerMessage.append(message);
//     } else if (mode !== correctAnswer) {
//         mode = questions.answer1.charAt(0);
//         button1.setAttribute("class", questions.answer1.charAt(0));
//         message = document.createElement("p");
//         message.textContent = questions.incorrectAnswerResponse;
//         answerMessage.append(message);
//     };
// });
// button2.addEventListener("click", function () {
//     mode = questions.answer2.charAt(0);
//     if (mode === questions.correctAnswer) {
//         button2.setAttribute("class", questions.answer2.charAt(0));
//         message = document.createElement("p");
//         message.textContent = questions.correctAnswerResponse;
//         answerMessage.append(message);
//     } else if (mode !== correctAnswer) {
//         mode = questions.answer2.charAt(0);
//         button2.setAttribute("class", questions.answer2.charAt(0));
//         message = document.createElement("p");
//         message.textContent = questions.incorrectAnswerResponse;
//         answerMessage.append(message);
//     };
// });



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