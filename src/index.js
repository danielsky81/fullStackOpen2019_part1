import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => (
    <h1>{header}</h1>
)

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Statistic = ({text, value}) => {
    if (text == 'positive') {
        return (
            <p>{text} {value} %</p>        
        )
    }   else {
        return (
            <p>{text} {value}</p>
        )
    }
}


const Statistics = (props) => {
    if (props.value1 > 0 || props.value2 > 0 || props.value3 > 0) {
        return (
            <div>
                <Statistic text='good' value={props.value1}/>
                <Statistic text='neutral' value={props.value2}/>
                <Statistic text='bad' value={props.value3}/>
                <Statistic text='all' value={props.value4}/>
                <Statistic text='average' value={props.value5}/>
                <Statistic text='positive' value={props.value6}/>
            </div>
        )
    } else {
        return (
            <p>No feedback given</p>
        )
    }
}

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
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all) * 100

  return (
    <div>
        <Header header={header1}/>
        <Button onClick={() => handleGoodClick(good + 1)} text={text1}/>
        <Button onClick={() => handleNeutralClick(neutral + 1)} text={text2}/>
        <Button onClick={() => handleBadClick(bad + 1)} text={text3}/>
        <Header header={header2}/>
        <Statistics 
            value1={good}
            value2={neutral}
            value3={bad} 
            value4={all}
            value5={average}
            value6={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)