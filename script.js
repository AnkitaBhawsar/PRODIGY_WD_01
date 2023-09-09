let isRunning = false;
let startTime;
let interval;

function startStop() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        // Start the stopwatch
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    const currentTime = Date.now() - startTime;
    const formattedTime = formatTime(currentTime);
    document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds, 3)}`;
}

function padZero(value, length = 2) {
    return value.toString().padStart(length, '0');
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00.000";
    startTime = 0;
}

// Initialize the display
reset();
