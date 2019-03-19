import React from 'react'
import './App.css'

export default function App() {
  const numSymBtn = [
    [7, 'number'],
    [8, 'number'],
    [9, 'number'],
    [<i class="fas fa-divide" />, 'symbol'],
    [4, 'number'],
    [5, 'number'],
    [6, 'number'],
    [<i class="fas fa-times" />, 'symbol'],
    [1, 'number'],
    [2, 'number'],
    [3, 'number'],
    [<i class="fas fa-minus" />, 'symbol'],
    [0, 'number'],
    ['.', 'symbol'],
    [<i class="fas fa-equals" />, 'symbol'],
    [<i class="fas fa-plus" />, 'symbol']
  ]

  return (
    <div className="App">
      {numSymBtn.map(btn => (
        <button className={btn[1]}>{btn[0]}</button>
      ))}
      <button className="clear">clear</button>
    </div>
  )
}
