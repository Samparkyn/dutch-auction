import React from 'react'
import { Link } from 'react-router-dom'
import { Timer } from '../timer'

export const ItemCard = ({ item }) => (
  <li className="item__card" key={item.id}>
    <div className="item__content">
      <p className="item__title">{item.title}</p>
      <p className="item__price">Price: {item.price}</p>
      <p className="item__bids">Bids: {item.bids.length}</p>
      <span className="item_time-remaining">Time remaining:
      {item.active ? <Timer start={item.start} duration={item.duration}/> : 'Ended'}
      </span>
    </div>
  </li>
)