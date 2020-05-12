const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectWord = words[Math.floor(Math.random() * words.length)];

//console.log(selectWord);

const correctLetters = [];
const wrongLetters = [];

// Show Hidden Word
function displayWord() {
  wordEl.innerHTML = `
    ${selectWord
      .split("")
      .map(
        (letter) => `
      <span class = 'letter'>
        ${correctLetters.includes(letter) ? letter : ""}
        </span>
      `
      )
      .join("")}
    `;
  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectWord) {
    finalMessage.innerText = "Congratulation!! You have won the game";
    popup.style.display = "flex";
  }
}
displayWord();
