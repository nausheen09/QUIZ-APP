var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['script', 'javascrip', 'js', 'js1'],
        correctOption: 'script',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        options: ['The head section', 'The body section', 'Both the head and "body" section are correct'],
        correctOption: 'Both the head and "body" section are correct',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        options: ['script href=xxx.js', 'script name=xxx.js', 'script src=xxx.js', 'script src=xxx.js ok', 'script src=xxx.js not'],
        correctOption: 'script src=xxx.js',
    }
];

var index = 0;
var score = 0;
var nextBtn = document.getElementById("Next");
var prevBtn = document.getElementById("Previous");
var questionBox = document.getElementById("questionBox");

showQuestions();

function showQuestions() {
    nextBtn.disabled = true;
    prevBtn.disabled = index === 0


    // Check if all questions are done
    if (!questions[index]) {
        var resultMessage = `Quiz completed. Your score: ${score}/${questions.length}<br>`;
        if (score === questions.length) {
            resultMessage += "<strong>Congratulations! You scored excellent marks!</strong>";
        } else {
            resultMessage += "<strong>Some of you need to work harder.</strong>";
        }
        questionBox.innerHTML = resultMessage;
        nextBtn.style.display = "none";
        prevBtn.style.display = "none";
        return;
    }

    // Display question number and total questions 
    questionBox.innerHTML = `
<div class="question-header">
  <div class="right">Question ${index + 1}/${questions.length}</div>
    <div class="left"><p>Q${index + 1} ${questions[index].question}</p></div>
</div>`;

    var optionsHTML = "";
    for (var i = 0; i < questions[index].options.length; i++) {
        var option = questions[index].options[i];
        optionsHTML += `
    <label>
        <input type="radio" name="option" value="${option}">
        ${option}
    </label><br>
`;
    }

    // Append the options to the question box
    questionBox.innerHTML += optionsHTML;
    selectingOptions();
}

function next() {
    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (options[i].value === questions[index].correctOption) {
                score++;
            }
        }
    }
    index++;
    showQuestions();
}

function previous() {
    if (index > 0) {
        index--;
        showQuestions();
    }
}

function selectingOptions() {
    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            nextBtn.disabled = false;
        });
    }
}
