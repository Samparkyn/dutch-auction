import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { AuctionTimer } from '../auctionTimer/'
import styles from './itemsList.css'

export class ItemsList extends Component {

  render() {
    const auctionItems = this.props.appState.auctionItems;
    const items = auctionItems.map((item, index) => {
      return <li 
                className="list__item" 
                key={index}>
                {item.itemTitle}
                -
                {item.startPrice}
                -
                <AuctionTimer {...this.props} />
              </li>
    })
     
    return (
      <div className="item__container">
        <ul>
          { items }
        </ul>
      </div>
    )

  }
}

