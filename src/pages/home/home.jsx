import React from 'react'
import { Link } from 'react-router-dom'
import { ItemsList } from '../../components/items-list'

export const Home = (props) => {
  console.log({ props })
  return (
    <div className="home">
      <div className="btn__container">
        <Link to="/new-item">
          <button className="btn">Seller</button>
        </Link>
        <h2>All items</h2>
        <ItemsList items={props.items} />
      </div>
    </div>
  )
}