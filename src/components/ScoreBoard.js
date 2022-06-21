import React from "react";

const ScoreBoard = (props) => {

  return (
    <div>
      <h1>Memory Game</h1>
      <p>Get points by clicking on an image but don't click on any more than once!</p>

      {props.score}
    </div>
  )
}

export { ScoreBoard };
