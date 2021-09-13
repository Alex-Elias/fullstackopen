import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>
    {text}
  </button>

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const array = new Array(7).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(array)
  

  const Click = () => {
    const random = Math.floor((Math.random() * 7) )
    console.log(random)
    setSelected(random)
  }
  const Vote = () => {
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)

  }
  const Most = () => {
    
    let index = 0
    for (let i = 0; i < array.length; i++) {
      if (votes[i] > votes[index]) {
        index = i
      }
    }
    return index
  }
  return (
    <div>
      <h1>Anecdote of the day </h1>
      {anecdotes[selected]} <br></br> 
      has {votes[selected]} votes <br></br>
      <Button handleClick={Vote} text="vote" />
      <Button handleClick={Click} text="next anecdote" />   
      <h1>Anecdote with the most votes</h1>  
      {anecdotes[Most()]}
    </div>
    
  )
}

export default App
