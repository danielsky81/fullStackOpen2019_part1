import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => (
    <h1>{header}</h1>
)

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Stats = (props) => {
    if (props.value1 > 0 || props.value2 > 0 || props.value3 > 0 ) {
        return (
            <div>
                <p>{props.text1} {props.value1}</p>
                <p>{props.text2} {props.value2}</p>
                <p>{props.text3} {props.value3}</p>
                <p>{props.text4} {props.value4}</p>
                <p>{props.text5} {props.value5}</p>
                <p>{props.text6} {props.value6}%</p>
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
    const text4 = 'all'
    const text5 = 'average'
    const text6 = 'positive'
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
        <Stats 
            text1={text1} value1={good}
            text2={text2} value2={neutral}
            text3={text3} value3={bad}
            text4={text4} value4={all}
            text5={text5} value5={average}
            text6={text6} value6={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)