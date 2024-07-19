import { useState } from "react";
import "./App.css";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

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
          <Button onClick={() => setGood((prev) => prev + 1)}>good</Button>
          <Button onClick={() => setNeutral((prev) => prev + 1)}>
            neutral
          </Button>
          <Button onClick={() => setBad((prev) => prev + 1)}>bad</Button>
        </div>
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </>
  );
};

export default App;
