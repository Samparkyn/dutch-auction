import React, { Component } from 'react'
import { ItemCard } from '../item-card'
import { Link } from 'react-router-dom'

export class ItemsList extends Component {
  render() {
    const { items } = this.props
    const rows = items.map(item => (
      <Link key={item.id} to={`/item/${item.id}`}>
        <ItemCard item={item} />
      </Link>
    ))

    return (
      <ul className="items__list">
        {rows}
      </ul>
    )
  }
}

