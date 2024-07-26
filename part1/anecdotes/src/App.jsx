import { useState } from "react";
import './App.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const hasMostVotesIndex = points.indexOf(Math.max(...points))
  const hasMostVotesAnecdotes =
  hasMostVotesIndex > -1 ? anecdotes[hasMostVotesIndex] : "";

  const onClickNext = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const onClickVote = () => {
    const newPoints = points.map((point, index) => {
      if (index === selected) {
        point++;
      }
      return point;
    });
    setPoints(newPoints);
  };

  return (
    <div>
      <h1 className="title">Anecodte of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={onClickVote}>vote</button>
      <button onClick={onClickNext}>next anecodte</button>
      {hasMostVotesAnecdotes && (
        <>
          <h2 className="title">Anecodte with most votes</h2>
          {hasMostVotesAnecdotes}
          <p>has {Math.max(...points)} votes</p>
        </>
      )}
    </div>
  );
};

export default App;
