import React, { useState } from 'react'

function App() {
  const [inputText, setinputText] = useState('')
  const [items, setitems] = useState([])

  function handleInputChange(params) {
    const newValue = params.target.value
    setinputText(newValue)
  }

  function handleClick(params) {
    setitems((preValue) => {
      return [...preValue, inputText]
    })
    setinputText('')
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Javascript</h1>
      </div>
      <div className="form">
        <input onChange={handleInputChange} value={inputText} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
