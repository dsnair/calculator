import React, { useState } from 'react'
import math from 'mathjs'
import './App.css'

export default function App() {
  const [exp, setExp] = useState('')
  const handleExp = str => setExp(exp.concat(str))
  const handleClear = () => setExp('')
  const handleEqual = () => setExp(math.eval(exp))

  const expBtn = [
    [7, 'number', '7'],
    [8, 'number', '8'],
    [9, 'number', '9'],
    [<i className="fas fa-divide" />, 'symbol', '/'],
    [4, 'number', '4'],
    [5, 'number', '5'],
    [6, 'number', '6'],
    [<i className="fas fa-times" />, 'symbol', '*'],
    [1, 'number', '1'],
    [2, 'number', '2'],
    [3, 'number', '3'],
    [<i className="fas fa-minus" />, 'symbol', '-'],
    [0, 'number', '0'],
    ['.', 'symbol', '.'],
    [<i className="fas fa-plus" />, 'symbol', '+']
  ]

  return (
    <div className="App">
      {expBtn.map((btn, index) => (
        <button
          onClick={() => handleExp(btn[2])}
          className={btn[1]}
          key={index}
        >
          {btn[0]}
        </button>
      ))}
      <button onClick={() => handleEqual()} className="symbol">
        {<i className="fas fa-equals" />}
      </button>
      <button onClick={() => handleClear()} className="clear">
        clear
      </button>
    </div>
  )
}
