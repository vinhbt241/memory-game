import { ScoreBoard } from "./components/ScoreBoard";
import { CardContainer } from "./components/CardContainer";
import "./styles/App.css";
import React, { useEffect, useState } from "react";

function App() {
  const[clicked, setClicked] = useState([]);
  const[score, setScore] = useState(0);
  const[bestScore, setBestScore] = useState(0);

  const markClicked = (name) => {
    if(!clicked.includes(name)) {
      const clickedArr = clicked.concat(name);
      console.log(clickedArr);

      setClicked(clickedArr);

      setScore(score + 1);

      if(bestScore <= score + 1) {
        setBestScore(score + 1)
      }
    } else {
      setClicked([]);

      setScore(0);
    }
  }

  return (
    <div className="App">
      <ScoreBoard score={score} bestScore={bestScore}/>
      <CardContainer processClick={markClicked}/>
    </div>
  );
}

export default App;
