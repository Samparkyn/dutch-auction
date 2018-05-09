import React from 'react'
import { Timer } from '../timer'

export const ItemCard = ({ item }) => (
  <li className="item__card__link" key={item.id}>
      <div className="item__card">
        <p className="item__title">{item.title}</p>
        <p className="item__price">Price: {item.price}</p>
        <p className="item_time-remaining">Time remaining:
          <Timer start={item.start} duration={item.duration}/>
        </p>
      </div>
  </li>
)