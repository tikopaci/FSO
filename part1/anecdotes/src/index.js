import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button 
    onClick={props.handleClick}>
    {props.text}
  </button>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const changeAnecdote = () => {
    const randomA = getRandomInt(6);
    console.log(randomA)

    setSelected(randomA)
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  };

  const voteAnecdote = () => {
    const copyPoints = [...points];
    copyPoints[selected] += 1;
    setPoints(copyPoints);
    console.log(copyPoints);
  };

  const bestAnecdotes = points.indexOf(Math.max(...points));
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      <Button handleClick={voteAnecdote} text="Vote" />
      <Button handleClick={changeAnecdote} text="Next anecdote" />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[bestAnecdotes]}</div>
      <div>has {points[bestAnecdotes]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)