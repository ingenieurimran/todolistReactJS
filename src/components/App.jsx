import React, { useState } from 'react'
import ToDoList from './ToDoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [items, setItems] = useState([])
  function handleChange(params) {
    const newItem = params.target.value
    setInputText(newItem)
  }
  function handleClick(params) {
    setItems((preValue) => {
      return [...preValue, inputText]
    })
    setInputText('')
  }

  function handleDeleteItem(id) {
    setItems((preItem) => {
      return preItem.filter((item, index) => {
        return index !== id
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>ReactJS</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((listToDo, index) => (
            <ToDoList
              key={index}
              id={index}
              item={listToDo}
              onChecked={handleDeleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
