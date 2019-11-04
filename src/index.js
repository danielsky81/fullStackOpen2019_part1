import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => (
    <h1>{header}</h1>
)

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Stats = ({text, value}) => (
    <p>{text} {value}</p>
)

const App = () => {
    // save clicks of each button to own state
    const header1 = 'give feedback'
    const header2 = 'statistics'
    const text1 = 'good'
    const text2 = 'neutral'
    const text3 = 'bad'
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = (value) => setGood(value)
    const handleNeutralClick = (value) => setNeutral(value)
    const handleBadClick = (value) => setBad(value)

  return (
    <div>
        <Header header={header1}/>
        <Button onClick={() => handleGoodClick(good + 1)} text={text1}/>
        <Button onClick={() => handleNeutralClick(neutral + 1)} text={text2}/>
        <Button onClick={() => handleBadClick(bad + 1)} text={text3}/>
        <Header header={header2}/>
        <Stats text={text1} value={good}/>
        <Stats text={text2} value={neutral}/>
        <Stats text={text3} value={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)