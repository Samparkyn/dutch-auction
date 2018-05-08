import React, { Component } from 'react'
import { Timer } from '../timer'

export class ItemsList extends Component {
  render() {
    const { items } = this.props
    const rows = items.map(item => {
      return (
        <li key={item.id}>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Time remaining</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>WAKANDA $$ {item.price}</td>
                <td><Timer start={item.start} duration={item.duration}/></td>
              </tr>
            </tbody>
          </table>
        </li>
      )
    })

    return (
      <ul className="items__list">
        {rows}
      </ul>
    )
  }
}

