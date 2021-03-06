import React from 'react'
import { ItemsList } from '../../components/items-list'

export const Home = (props) => {
  return (
    <div className="home">
      <h2>All items</h2>
      <ItemsList items={props.items} />
    </div>
  )
}