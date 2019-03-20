import React, { useState } from 'react'
import math from 'mathjs'
import './App.css'

export default function App() {
  const [expr, setExpr] = useState('')

  const handleExpr = str => {
    expr === 'Infinity' || expr === 'Err' || expr === 'NaN'
      ? setExpr(str)
      : setExpr(expr.concat(str))
  }

  const handleClear = () => setExpr('')

  const handleEqual = () => {
    try {
      setExpr(math.round(math.eval(expr), 8).toString())
    } catch (err) {
      if (err instanceof SyntaxError) {
        setExpr('Err')
      }
    }
  }

  const exprBtn = [
    [7, 'number', '7'],
    [8, 'number', '8'],
    [9, 'number', '9'],
    [<i className="fas fa-divide" />, 'operator', '/'],
    [4, 'number', '4'],
    [5, 'number', '5'],
    [6, 'number', '6'],
    [<i className="fas fa-times" />, 'operator', '*'],
    [1, 'number', '1'],
    [2, 'number', '2'],
    [3, 'number', '3'],
    [<i className="fas fa-minus" />, 'operator', '-'],
    [0, 'number', '0'],
    ['·', 'number', '.'],
    [<i className="fas fa-plus" />, 'operator', '+']
  ]

  return (
    <div className="App">
      {expr ? (
        <input readOnly value={expr} className="answer" />
      ) : (
        <input readOnly value={0} className="answer" />
      )}

      {exprBtn.map((btn, index) => (
        <button
          onClick={() => handleExpr(btn[2])}
          className={btn[1]}
          key={index}
        >
          {btn[0]}
        </button>
      ))}

      <button onClick={() => handleEqual()} className="equal">
        {<i className="fas fa-equals" />}
      </button>

      <button onClick={() => handleClear()} className="clear">
        clear
      </button>
    </div>
  )
}
