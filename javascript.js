let userScore = 0;
let compScore = 0;
var img=new Image();
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
    img.src="./images/hide.png";
    document.body.appendChild(img);
    userScorePara.style.backgroundColor='red';
    compScorePara.style.backgroundColor="red";
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "blue";
};
const showWinner = (userWin, userChoice, compChoice) => {
    userScorePara.style.backgroundColor='red';
    compScorePara.style.backgroundColor="red";

  if (userWin) {
    img.src="./images/happy.png";
    document.body.appendChild(img);
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.style.backgroundColor='green';
  } 
  else {
    img.src="./images/sad.png";
    document.body.appendChild(img);
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScorePara.style.backgroundColor="#DA0037";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("clicked is", userChoice);
    playGame(userChoice);
    
  });
});
