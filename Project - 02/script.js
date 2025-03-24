const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const inputBox = document.getElementById("timeInput");
const countdownDisplay = document.getElementById("countdown-display");

let valueInSeconds = 0;
let timer = null;
let isPaused = false;

function startTimer() {
  if (timer) clearInterval(timer); 
  valueInSeconds = parseInt(inputBox.value);

  if (isNaN(valueInSeconds) || valueInSeconds <= 0) {
    countdownDisplay.innerText = "Please enter a valid number > 0";
    return;
  }

  isPaused = false;
  runTimer();
}

function runTimer() {
  timer = setInterval(() => {
    if (!isPaused && valueInSeconds > 0) {
      valueInSeconds--;
      countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;

      if (valueInSeconds <= 0) {
        clearInterval(timer);
        countdownDisplay.innerText = "Time Up";
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
}

function resumeTimer() {
  if (isPaused) {
    isPaused = false;
    runTimer();
  }
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resumeButton.addEventListener("click", resumeTimer);
