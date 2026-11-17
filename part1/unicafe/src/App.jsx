import { useState } from "react";

// Button Component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// Display Component
const StaticLine = ({ text, value }) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

// Stat Component
const Statistics = ({ good, bad, neutral, feedback }) => {
  if (!feedback) {
    return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>);
  }

  //helper functions
  const getTotal = (good, bad, neutral) => good + bad + neutral;

  const getAverage = (good, bad, neutral) => {
    const total = getTotal(good, bad, neutral);
    return total > 0 ? good - bad / total : 0;
  };

  const getPositive = (good, bad, neutral) => {
    const total = getTotal(good, bad, neutral);

    return total > 0 ? `${(good / total) * 100}%` : 0;
  };

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StaticLine text="good" value={good} />
          <StaticLine text="bad" value={bad} />
          <StaticLine text="neutral" value={neutral} />
          <StaticLine text="all" value={getTotal(good, bad, neutral)} />
          <StaticLine text="average" value={getAverage(good, bad, neutral)} />
          <StaticLine text="positive" value={getPositive(good, bad, neutral)} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedback, setFeedback] = useState(false);

  const handleFeedback = (res, text) => () => {
    const newFeedback = res + 1;
    setFeedback(true);
    if (text === "good") {
      return setGood(newFeedback);
    } else if (text === "neutral") {
      return setNeutral(newFeedback);
    }
    return setBad(newFeedback);
  };

  return (
    <div>
      <h1>give feedback</h1>

      {/** Create Button Components */}

      <Button onClick={handleFeedback(good, "good")} text="good" />
      <Button onClick={handleFeedback(neutral, "neutral")} text="neutral" />
      <Button onClick={handleFeedback(bad, "bad")} text="bad" />

      {/** report feedback */}
      <Statistics good={good} bad={bad} neutral={neutral} feedback={feedback} />
    </div>
  );
};

export default App;
