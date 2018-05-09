import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Timer } from '../timer'

export class ItemsList extends Component {
  render() {
    const { items } = this.props
    const rows = items.map((item, idx) => (
      <tr key={idx}>
        <td><Link key={item.id} to={`/item/${item.id}`}>{item.title}</Link></td>
        <td>{item.price}</td>
        <td>{item.bids.length}</td>
        <td>{item.active ? <Timer start={item.start} duration={item.duration} /> : 'Ended'}</td>
      </tr>
    ))

    return (
      <table className="items__list">
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Number of bids</td>
            <td>Time remaining</td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

