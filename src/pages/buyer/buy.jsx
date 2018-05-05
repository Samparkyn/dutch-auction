import React from 'react'
import { Link } from 'react-router-dom'
import { ItemsList } from '../../components/itemsList/'

export const Buyer = (props) => {
  console.log('buy.js', props)
  return (
    <div className="buyer">
      <p className="buyer-text">What would you like to buy? These are the current active auctions </p>
      <div className="items__container">
        <ItemsList {...props} />
        <p>Or you can view finished auctions here: </p>
        <Link className="btn__link" to="/finished-auctions">
          <button className="btn">Show me</button>
        </Link>
      </div>
    </div>
  )
}