import React from 'react'
import { Timer } from '../timer'

export const ItemRow = ({ item }) => (
  <li key={item.id}>
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Price</td>
          <td>Time remaining</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td><Timer start={item.start} duration={item.duration}/></td>
        </tr>
      </tbody>
    </table>
  </li>
)