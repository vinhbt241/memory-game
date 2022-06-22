import React from "react";

const ScoreBoard = (props) => {

  return (
    <div className="ScoreBoard">
      <div>
        <h1>Memory Game - Disco Elysium Edition</h1>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>

      <div>
        <p>Score: {props.score}</p>
        <p>Best Score: {props.bestScore}</p>
        </div>
    </div>
  )
}

export { ScoreBoard };
