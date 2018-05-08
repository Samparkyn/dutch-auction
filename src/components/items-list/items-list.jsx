import React, { Component } from 'react'
import { ItemRow } from '../item-row'
import { Link } from 'react-router-dom'

export class ItemsList extends Component {
  render() {
    const { items } = this.props
    const rows = items.map(item => (
      <Link key={item.id} to={`/item/${item.id}`}>
        <ItemRow item={item} />
      </Link>
    ))

    return (
      <ul className="items__list">
        {rows}
      </ul>
    )
  }
}

