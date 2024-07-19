import { useState } from "react";
import "./App.css";

const SCORE = {
  good: 1,
  neutral: 0,
  bad: -1,
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average =
    (good * SCORE.good + neutral * SCORE.neutral + bad * SCORE.bad) / total;
  const positive = (good / total) * 100;

  return (
    <>
      <div>
        <h1 className="title">give feedback</h1>
        <div className="button-container">
          <button onClick={() => setGood((prev) => prev + 1)}>good</button>
          <button onClick={() => setNeutral((prev) => prev + 1)}>
            neutral
          </button>
          <button onClick={() => setBad((prev) => prev + 1)}>bad</button>
        </div>
      </div>
      <div>
        <h2 className="title">statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive}%</p>
      </div>
    </>
  );
};

export default App;
