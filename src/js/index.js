import { wordField } from "./module.js"; 

const points = document.querySelector("#typing-points");
const highScore = document.querySelector("#typing-highscore");
const time = document.querySelector("#typing-time");
const screenTxt = document.querySelector("#typing-text");
const screen = document.querySelector("#typing-screen");

let newHighScore = 0;
screenTxt.textContent = wordField[4];

highScore.textContent = newHighScore;