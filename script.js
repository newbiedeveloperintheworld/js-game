// Generate a random problem
function generateProblem() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];

    let problem;
    let answer;

    switch (operator) {
        case '+':
            problem = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            num1 = num2 > num1 ? num1 + 5 : num1;
            problem = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            problem = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        default:
            break;
    }

    return { problem, answer };
}

// Get the current problem
let currentProblem = generateProblem();

// Timer
let timeleft = 5;
let timer;
let timeLeftElement = document.querySelector('#timer');
startTimer(); 

// Function to start the timer
function startTimer() {
    clearInterval(timer);
    timeleft = 5; 
    updateTimeDisplay();

    timer = setInterval(updateTime, 1000);
}

// Function for updating time
function updateTime() {
    if (timeleft == 0) {
        clearInterval(timer);
        alert("Time's Up! Try Another Problem.");
        getAnswer();
        document.querySelector('#result').innerText = 'Time is Up!';
    } else {
        timeleft--;
        updateTimeDisplay();
    }
}

// Function to update the time display
function updateTimeDisplay() {
    timeLeftElement.innerText = `Time left: ${timeleft} sec`;
}

// Button onclick function 
function getAnswer() {
    const problemElement = document.querySelector('.problem');
    const answerElement = document.querySelector('#answer');
    const resultElement = document.querySelector('#result');

    const inputAnswer = parseInt(answerElement.value);
    const correctAnswer = currentProblem.answer;

    if (inputAnswer == correctAnswer) {
        resultElement.innerText = 'Correct! :>';
    } else {
        resultElement.innerText = 'Incorrect! :<';
    }

    // Generate a new problem after processing the current one
    currentProblem = generateProblem();
    console.log(`Problem: ${currentProblem.problem}`);
    console.log(`Answer: ${currentProblem.answer}`);

    problemElement.innerText = currentProblem.problem;
    answerElement.value = '';

    startTimer();
}

// Initialize with the first problem and start the timer
document.querySelector('.problem').innerText = currentProblem.problem;

// Initialize with the first problem and start the timer
document.querySelector('.problem').innerText = currentProblem.problem;
// Function 