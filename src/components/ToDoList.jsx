import React from 'react'

function ToDoList(params) {
  return (
    <div
      onClick={() => {
        return params.onChecked(params.id)
      }}
    >
      <li>{params.item}</li>
    </div>
  )
}

export default ToDoList
