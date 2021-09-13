import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Average = (props) => {
  const total = props.good + props.neutral + props.bad
  const score = props.good - props.bad
  const average = score / total
  return average
    
  
}
const Positive = (props) => {
  const total = props.good + props.neutral + props.bad
  const positive = (props.good / total) * 100
  return positive
}

const StatisticLine = ({text, value, end}) => {
  return <div>{text} {value} {end}</div>
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = props.good + props.neutral + props.bad
  const average = <Average good={good} neutral={neutral} bad={bad} />
  const positive = <Positive good={good} neutral={neutral} bad={bad} />
  if (all >0) {
    return (
      <div>
        
        
        <tr>
          <td>good</td>
          <td>{good}</td>          
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>          
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>          
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>          
        </tr>
        <tr>
          <td>average </td>
          <td> {average}</td>
        </tr>
        <tr>
          <td>positive </td>
          <td> {positive}%</td>
        </tr>
      </div>
    )
  }else {
    return <p>No feedback given</p>
  }
  
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button handleClick={() => {setGood(good + 1)}} text='good' />
      <Button handleClick={() => {setNeutral(neutral + 1)}} text='neutral' />
      <Button handleClick={() => {setBad(bad + 1)}} text='bad' />
      
      <h1>statistics</h1>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
