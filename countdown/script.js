const INITIAL_DAYS = 2;
const INITIAL_HOURS = 10;
const INITIAL_MINUTES = 40;
const INITIAL_SECONDS = 45;

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

let secondsAmount = 0;

function convertInSeconds() {
  secondsAmount = INITIAL_DAYS * 24 * 60 * 60;
  secondsAmount += INITIAL_HOURS * 60 * 60;
  secondsAmount += INITIAL_MINUTES * 60;
  secondsAmount += INITIAL_SECONDS;
}

function print() {
  console.log("entrou");
  document.getElementById("countdown").innerHTML =
    days.toString().padStart(2, "0") +
    " " +
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
}

function convertToCountdown() {
  days = Math.floor(secondsAmount / 60 / 60 / 24);
  hours = Math.floor((secondsAmount / 60 / 60) % 24);
  minutes = Math.floor((secondsAmount / 60) % 60);
  seconds = Math.floor(secondsAmount % 60);

  print();
}

function start() {
  const interval = setInterval(() => {
    if (secondsAmount > 0) {
      secondsAmount--;
      convertToCountdown();
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

convertInSeconds();
start();
