import React from 'react'
import { Link } from 'react-router-dom'

export const Buyer = () => {
  return (
    <div className="buyer">
      <p className="buyer-text">What would you like to buy? These are the current active auctions </p>
      <div className="items__container">
        <div>
          <p>Title:</p>
          <p>Highest bid:</p>
          <p>Start Price:</p>
          <p>Time remaining:</p>
        </div>
      </div>
      <div>
        <p>Or you can view finished auctions here: </p>
        <Link className="btn__link" to="/finished-auctions">
          <button className="btn">Show me</button>
        </Link>
      </div>
    </div>
  )
}