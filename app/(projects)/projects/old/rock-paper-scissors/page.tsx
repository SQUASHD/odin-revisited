"use client";
import "./rps.css";
import { useRef, useState } from "react";
export default function OldRPS() {
  const [scoreMessage, setScoreMessage] = useState("First to 5 points wins");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundWinner, setRoundWinner] = useState("");

  const defaultScoreMessage = "First to 5 points wins";
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "ROCK";
      case 1:
        return "PAPER";
      case 2:
        return "SCISSORS";
    }
  }

  const rockBtnRef = useRef(null);
  const paperBtnRef = useRef(null);
  const scissorsBtnRef = useRef(null);

  function handleClick(playerSelection) {
    if (checkGameOver()) {
      return;
    }
    const computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
    if (playerScore === 5) {
      setScoreMessage("You win!");
      return;
    } else if (computerScore === 5) {
      setScoreMessage("You lose!");
      return;
    }
  }

  function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
      setRoundWinner("tie");
    } else if (
      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
      setPlayerScore((prev) => prev + 1);
      setRoundWinner("player");
    } else {
      setComputerScore((prev) => prev + 1);
      setRoundWinner("computer");
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
  }

  function updateScoreMessage(winner, playerSelection, computerSelection) {
    let scoreMessageString: string;
    if (winner === "player") {
      scoreMessageString = `${playerSelection} beats ${computerSelection.toLowerCase()}`;
    } else if (winner === "computer") {
      scoreMessageString = `${playerSelection} is beaten by ${computerSelection.toLowerCase()}`;
    } else {
      scoreMessageString = `${playerSelection} ties with ${computerSelection.toLowerCase()}`;
    }
    setScoreMessage(scoreMessageString);
  }

  function checkGameOver() {
    return playerScore === 5 || computerScore === 5;
  }

  function resetGame() {
    setPlayerScore(0);
    setComputerScore(0);
    setScoreMessage(defaultScoreMessage);
  }

  return (
    <>
      <div className="scoreBoard">
        <h2 className="score-info" id="scoreInfo">
          Choose: Rock, Paper or Scissors?
        </h2>
        <h3 className="score-message" id="scoreMessage">
          {scoreMessage}
        </h3>
      </div>
      <div className="player-choices">
        <button
          id="rockBtn"
          ref={rockBtnRef}
          onClick={() => handleClick("ROCK")}
        >
          Rock
        </button>
        <button
          id="paperBtn"
          ref={paperBtnRef}
          onClick={() => handleClick("PAPER")}
        >
          Paper
        </button>
        <button
          id="scissorsBtn"
          ref={scissorsBtnRef}
          onClick={() => handleClick("SCISSORS")}
        >
          Scissors
        </button>
      </div>
      <div className="results">
        <div id="playerScore">Player: {playerScore}</div>
        <div id="computerScore">Computer: {computerScore}</div>
      </div>
    </>
  );
}
