// Get the required elements from the DOM
const timerButtons = document.querySelectorAll('.timer__button');
const customForm = document.getElementById('custom');
const minutesInput = document.querySelector('input[name="minutes"]');
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');

let countdown;

function timer(seconds) {
    // Clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    // Display the initial time
    displayTimeLeft.textContent = formatTimeLeft(seconds);
    displayEndTime.textContent = formatEndTime(then);

    // Update the timer every second
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // Check if the countdown should stop
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        // Update the display
        displayTimeLeft.textContent = formatTimeLeft(secondsLeft);
    }, 1000);
}

function formatTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function formatEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const period = hour >= 12 ? 'PM' : 'AM';
    return `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
}

// Add event listeners to the timer buttons
timerButtons.forEach(button => {
    button.addEventListener('click', function () {
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
    });
});

// Add event listener to the custom form
customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const minutes = parseInt(minutesInput.value);
    if (minutes) {
        timer(minutes * 60);
        this.reset();
    }
});
