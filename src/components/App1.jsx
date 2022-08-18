import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

function App() {
  const [fullName, setfullName] = useState({
    fName: '',
    lName: '',
  })

  function handleChange(params) {
    const { value, name } = params.target

    setfullName((preValue) => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: preValue.lName,
        }
      } else if (name === 'lName') {
        return {
          fName: preValue.fName,
          lName: value,
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
