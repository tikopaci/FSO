import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button 
    onClick={props.handleClick}>
    {props.text}
  </button>
);

const Statistics = ({good, neutral, bad, total, positive, average}) => {
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
      <div>
      <h3>Estadísticas:</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average reviews: {average}</p>
      <p>Positive reviews: {positive}%</p>
    </div>
  ) 
};

const App = () => {
  const [total, setTotal] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodReview = () => {
    setGood(good + 1)
    setTotal(total + 1)
  };

  const setNeutralReview = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  };

  const setBadReview = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  };
 
  // Round to two decimals
  const roundToTwo = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const average = total > 0 ? roundToTwo((good - bad) / total) : 0;
  const positive = total > 0 ? roundToTwo((good / total) * 100) : 0;
 
  return (
    <div>
      <h1>Feedback App</h1>
      <h3>Give Feedback</h3>
      <Button handleClick={setGoodReview} text="Good Review" />
      <Button handleClick={setNeutralReview} text="Neutral Review" />
      <Button handleClick={setBadReview} text="Bad Review" />
      <Statistics total={total} good={good} neutral={neutral} bad={bad} average={average} positive={positive} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)