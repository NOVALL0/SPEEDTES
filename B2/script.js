let centiseconds = 0;
let timerInterval;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTimerDisplay() {
    const seconds = Math.floor(centiseconds / 100);
    const displaySeconds = String(seconds).padStart(3, '0');
    const displayCentiSeconds = String(centiseconds % 100).padStart(2, '0');
    timerDisplay.textContent = `${displaySeconds}:${displayCentiSeconds}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (centiseconds < 999 * 100 + 59) {
            centiseconds++;
            updateTimerDisplay();
        } else {
            stopTimer(); // Stop automatically when max is reached
        }
    }, 10); // 10ms for centisecond precision

    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    stopTimer();
    centiseconds = 0;
    updateTimerDisplay();
    resetBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();