import { wordField } from "./module.js";

const points = document.querySelector("#typing-points");
const highScore = document.querySelector("#typing-highscore");
const time = document.querySelector("#typing-time");
const screenTxt = document.querySelector("#typing-text");
const screen = document.querySelector("#typing-screen");
const startGame = document.querySelector("#start-game");

let newHighScore = 0;
let startTime;
let intervalId; 

screenTxt.textContent = wordField[Math.floor(Math.random() * wordField.length)]; 

highScore.textContent = newHighScore;

startGame.addEventListener("click", function () {
  startStop();
  startGame.style.display = "none";
  screenTxt.style.display = "flex";
});

function startStop() {
  if (startTime) {
    clearInterval(intervalId); 
    let endTime = Date.now();
    let difference = endTime - startTime;
    time.innerText = 'Time: ' + (difference / 1000).toFixed(2) + 's';
    startTime = null;
  } else {
    startTime = Date.now();
    intervalId = setInterval(updateTime, 100); 
    updateTime(); 
  }
}

function updateTime() {
    let currentTime = Date.now();
    let elapsed = (currentTime - startTime) / 1000; 
    time.innerText = 'Time: ' + Math.floor(elapsed) + 's'; 
  }