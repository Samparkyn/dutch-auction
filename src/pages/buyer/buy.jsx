import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../../components/item/'

export const Buyer = (props) => {
  console.log('buy.js', props)
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
      <Item {...props} />
    </div>
  )
}