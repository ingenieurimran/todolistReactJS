import React from 'react'

function ToDoItem(params) {
  return (
    <div>
      <div className="form">
        <i
          className="fa fa-trash-alt add-btn"
          title="Add Item"
          onClick={() => {
            params.onClickedDelete(params.id)
          }}
        ></i>
        <i
          className="fa fa-edit add-btn"
          title="Add Item"
          onClick={() => {
            params.onClickedEdit(params.id)
          }}
          style={{ marginLeft: '2rem' }}
        ></i>
      </div>
      <li>{params.text}</li>
    </div>
  )
}

export default ToDoItem
