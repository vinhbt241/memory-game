import { ScoreBoard } from "./components/ScoreBoard";
import { CardContainer } from "./components/CardContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <ScoreBoard score={0}/>
      <CardContainer />
    </div>
  );
}

export default App;
