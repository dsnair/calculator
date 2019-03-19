import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [numSym, setNumSym] = useState('')
  const handleNumSymClick = (val) => setNumSym(console.log(val))

  const numSymBtn = [
    [7, 'number'],
    [8, 'number'],
    [9, 'number'],
    [<i className="fas fa-divide" />, 'symbol'],
    [4, 'number'],
    [5, 'number'],
    [6, 'number'],
    [<i className="fas fa-times" />, 'symbol'],
    [1, 'number'],
    [2, 'number'],
    [3, 'number'],
    [<i className="fas fa-minus" />, 'symbol'],
    [0, 'number'],
    ['.', 'symbol'],
    [<i className="fas fa-equals" />, 'symbol'],
    [<i className="fas fa-plus" />, 'symbol']
  ]

  return (
    <div className="App">
      {numSymBtn.map((btn, index) => (
        <button
          onClick={() => handleNumSymClick(btn[3])}
          className={btn[1]}
          key={index}
        >
          {btn[0]}
        </button>
      ))}
      <button className="clear">clear</button>
    </div>
  )
}
