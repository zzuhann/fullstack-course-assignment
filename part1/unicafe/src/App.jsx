import { useState } from "react";
import "./App.css";

const SCORE = {
  good: 1,
  neutral: 0,
  bad: -1,
};

/**
 * @component
 * @param {Object} props
 * @param {number} props.good - good 的數量
 * @param {number} props.neutral - neutral 的數量
 * @param {number} props.bad - bad 的數量
 * @param {number} props.total - good+neutral+bad
 * @param {number} props.average - 分數總計/total
 * @param {number} props.positive - good/total
 * @returns {JSX.Element}
 */
const Statistics = (props) => {
  const isNoFeedback = props.total === 0;
  return (
    <div>
      <h2 className="title">statistics</h2>
      {isNoFeedback && <p>No feedback given</p>}
      {!isNoFeedback && (
        <>
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {props.total}</p>
          <p>average {props.average}</p>
          <p>positive {props.positive}%</p>
        </>
      )}
    </div>
  );
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
