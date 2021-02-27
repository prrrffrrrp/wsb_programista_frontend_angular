// main.js
function runProgram() {
    console.info("Cały dokument został załadowany.");
    resetTimer()
}

window.addEventListener("load", runProgram);

// Timer
const timerSection = document.getElementById('timer');
const timerForm = timerSection.querySelector('form');
const minutes = timerForm.querySelector('[name="minutes"]');
const seconds = timerForm.querySelector('[name="seconds"]');

function resetTimer() {
    minutes.value = 0;
    seconds.value = 0;
}

function startTimer() {

    let userTime = new Date()
    userTime.setMinutes(userTime.getMinutes() + Number(minutes.value));
    userTime.setSeconds(userTime.getSeconds() + Number(seconds.value));
    userTime = userTime.getTime();

    let count = setInterval(function() {
        let now = new Date().getTime();
        let difference = userTime - now;

        let mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((difference % (1000 * 60)) / 1000);

        minutes.value = mins; 
        seconds.value = secs;

        if (difference < 0) {
            clearInterval(count);
            resetTimer();
            timerForm.querySelector(".beep").innerHTML = "Beep Beep!";
        }

    }, 1000);

}
