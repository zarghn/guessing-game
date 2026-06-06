// "use strict";

// // console.log(document.querySelector(".message").textContent);
// // document.querySelector(".message").textContent = "💥! IT'S CORRECT";

// // document.querySelector(".number").textContent = 13;
// // document.querySelector(".label").textContent = 20;

// // console.log(document.querySelector(".guess").value);
// // document.querySelector(".guess").value = 23;

// let OwnNum = Math.trunc(Math.random() * 20) + 1; 
// let highscore = 0;
// let score = 20;

// let ShowMess = function (message) {
//   document.querySelector(".message").textContent = message;
// };

// document.querySelector(".check").addEventListener("click", function () {
//   let guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     ShowMess("give me a number dude!⛔️");
//   } else if (guess === OwnNum) {
//     ShowMess("💥! IT'S CORRECT");
//     document.querySelector(".number").textContent = OwnNum;
//     document.querySelector(".body").style.backgroundColor = "#aac56b";
//     document.querySelector(".number").style.width = "30rem";
//   }
//   if (score > highscore) {
//     highscore = score;
//     document.querySelector(".highscore").textContent = highscore;
//   } else if (guess !== OwnNum) {
//     if (score > 1) {
//       ShowMess(guess > OwnNum ? "too high bro!📈" : "too low bro!📉");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       ShowMess("you lost :( ");
//       document.querySelector(".score").textContent = 0;
//       document.querySelector('.body').style.backgroundColor = '#e68275';
//     }
//   }
// });
// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   OwnNum = Math.trunc(Math.random() * 20) + 1;
//   ShowMess("START GUESSING ...");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";

  
//   document.querySelector(".number").style.width = "15rem";
// });


//* new version ! (AI helped me to make it better)

let OwnNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let ShowMess = function (message) {
  document.querySelector(".message").textContent = message;
};

function displayScore(currentScore) {
  document.querySelector(".score span").textContent = currentScore;
}

function displayHighscore(bestScore) {
  document.querySelector(".high").textContent = bestScore; 
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    ShowMess("give me a number dude!⛔️");
  } else if (guess === OwnNum) {
    ShowMess("💥! IT'S CORRECT");
    document.querySelector(".number").textContent = OwnNum;
    document.body.style.backgroundColor = "#b69064";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);  
    }
    displayScore(score);

  } else if (guess !== OwnNum) {
    if (score > 1) {
      ShowMess(guess > OwnNum ? "too high bro!📈" : "too low bro!📉");
      score--;
      displayScore(score); 
    } else {
      ShowMess("you lost :( ");
      score = 0;
      displayScore(score); 
      document.body.style.backgroundColor = '#e68275';
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  OwnNum = Math.trunc(Math.random() * 20) + 1;
  ShowMess("START GUESSING ...");
  displayScore(score); 
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#3a3a3a";
  document.querySelector(".number").style.width = "15rem";

 
});

displayScore(score);
displayHighscore(highscore);
