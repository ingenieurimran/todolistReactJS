import React from 'react'
import { createRoot } from 'react-dom/client'
import Contacts from './components/Contacts'

const container = document.getElementById('root')
const root = createRoot(container)

const [name1, name2] = Contacts

root.render(
  <table>
    <tr>
      <th>Name</th>
      <th>Images</th>
      <th>Phone #</th>
      <th>Email</th>
    </tr>
    <tr>
      <td>{name1.name}</td>
      <td>{name1.imgUrl}</td>
      <td>{name1.phone}</td>
      <td>{name1.email}</td>
      {/* <td>{teslaTopSpeed}</td> */}
      {/* <td>{teslaTopColour}</td> */}
    </tr>
    <tr>
      <td>{name2.name}</td>
      <td>{name2.imgUrl}</td>
      <td>{name2.phone}</td>
      <td>{name2.email}</td>
      {/* <td>{hondaTopSpeed}</td> */}
      {/* <td>{hondaTopColour}</td> */}
    </tr>
  </table>,
)
