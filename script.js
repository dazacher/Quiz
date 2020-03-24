
// question
// deduct time
// Set the timer up to subtract one second until time is up
// Question Object definitions
var question1 = {
    question: "Is there such a thing as a tea cup yorkshire terrier?",
    answer1: "a. True",
    answer2: "b. False",
    answer3: "c. Both a and b",
    answer4: "d. Neither a or b",
    correctAnswer: "b",
    correctAnswerResponse: "Correct! Good job!",
    incorrectAnswerResponse: "Wrong! Better luck next time!"
};

var question2 = {
    question: "Yorkies were bred to be ___________.",
    answer1: "a. Lap dogs",
    answer2: "b. Scare elephants into submission",
    answer3: "c. Rat humters",
    answer4: "d. Ankle biters",
    correctAnswer: "c",
    correctAnswerResponse: "Correct! Awesome job!",
    incorrectAnswerResponse: "Wrong! Get a life!"
};

var question3 = {
    question: "The breed Yorkshire Terrier was first called ___________.",
    answer1: "a. Angus Terrier",
    answer2: "b. Sutherland Terrier",
    answer3: "c. Field Terrier",
    answer4: "d. Scottish Terrier",
    correctAnswer: "d",
    correctAnswerResponse: "Correct! Well done!",
    incorrectAnswerResponse: "Wrong! Try again!"
};

var question4 = {
    question: "The average weight of a yorkshire terrier is _______ pounds.",
    answer1: "a. 7",
    answer2: "b. 5",
    answer3: "c. 8",
    answer4: "d. 6",
    correctAnswer: "a",
    correctAnswerResponse: "Correct! Keep up the good work!",
    incorrectAnswerResponse: "Wrong! Sorry, keep trying!"
};

var question5 = {
    question: "The yorkshire terrier became registered in what year?",
    answer1: "a. 1912",
    answer2: "b. 1862",
    answer3: "c. 1885",
    answer4: "d. 1943",
    correctAnswer: "c",
    correctAnswerResponse: "Correct! You're on a roll!",
    incorrectAnswerResponse: "Wrong! Tough luck!"
};

var questionArr = [question1, question2, question3, question4, question5]

function setTime() {
    var timerPar = document.getElementById("timer");
    var timerCount = 75;
    
    timerPar.textContent = timerCount;

    var timerInterval = setInterval(function() {
      timerCount--;
      timerPar.textContent = timerCount;
//   Executes when timer is done
      if(timerCount === 0) {
        clearInterval(timerInterval);
        // sendMessage();
        // Plan to execute alert message that game is over here
      }
    }, 1000);
  }

  function questionTimer() {
    // var timerPar = document.getElementById("timer");
    var count = 75;
    
    // timerPar.textContent = timerCount;

    var timerInt = setInterval(function() {
      count--;
      //timerPar.textContent = timerCount;
//   Executes when timer is done
      if(timerCount === 0) {
        clearInterval(timerInt);
        // sendMessage();
        // Plan to execute alert message that game is over here
      }
    }, 5000);

  function displayQuestions(){
    var questionsCont = document.getElementById("questions");
    questionsCont.style.visibility = "visible"

    for (var i = 0; i < questionArr.length; i++) {
        var question = questionArr[i];
    
        var li = document.createElement("li");
        li.textContent = question;
        
        // todoList.appendChild(li);
        // increment score or decrement time

        
        clearQuestions();
      }

    
    //   
    //   var questionEl = document.getElementById("question");
      
    //   questionEl.textContent = "Is there such a thing as a tea cup yorkshire terrier?";

    //   var answer1Btn = document.getElementById("answer1");
    //   answer1Btn.textContent = "1. True";
      /// we need to add a data-choice
      // as well as a data-answer

      // add an event listener to each button
    //   answer1Btn.addEventListener('click', function(event){
// grab info off of button 
// that info should be on a data-choice attr


// another data-answer with the correct answer

// logic after we check if we are right or wrong goes below

    //   })
    //   var answer2Btn = document.getElementById("answer2");
    //   answer2Btn.textContent = "2. False";


 }

 var questionsRow = document.querySelector("#questionsRow");
 function clearQuestions(){
    questionsRow.innerHTML = ""
}



var startButton = document.getElementById("b1");

startButton.addEventListener("click", function (event) {
    console.log("Hello");
    setTime();
    displayQuestions();
    questionTimer();
    clearQuestions();
    }
)