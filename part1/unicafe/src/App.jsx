import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ text, count }) => (
  <p>
    {text} {count}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedback, text) => () => {
    const newFeedback = feedback + 1;

    if (text === "good") {
      return setGood(newFeedback);
    } else if (text === "neutral") {
      return setNeutral(newFeedback);
    }
    return setBad(newFeedback);
  };

  const getTotal = (good, bad, neutral) => good + bad + neutral;

  const getAverage = (good, bad, neutral) => {
    const total = getTotal(good, bad, neutral);
    return total > 0 ? (good - bad / total): 0;
  }

  const getPositive = (good, bad, neutral)=>{
    const total = getTotal(good, bad, neutral);
    
    return total > 0 ? `${(good / total) * 100}%` : 0;
  }
  return (
    <div>
      <h1>give feedback</h1>

      {/** Create Button Components */}

      <Button onClick={handleFeedback(good, "good")} text="good" />
      <Button onClick={handleFeedback(neutral, "neutral")} text="neutral" />
      <Button onClick={handleFeedback(bad, "bad")} text="bad" />

      {/** report feedback */}
      <Display text="good" count={good} />
      <Display text="neutral" count={neutral} />
      <Display text="bad" count={bad} />
      <Display text="all" count={getTotal(good, bad, neutral)} />
      <Display text="average" count={getAverage(good, bad, neutral)} />
      <Display text="positive" count= {getPositive(good, bad, neutral)} />
    </div>
  );
};

export default App;
