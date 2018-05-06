import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export class ItemsList extends Component {

  render() {
    const auctionItems = this.props.appState.auctionItems;
    const items = auctionItems.map((item, index) => <li key={index}>{item.itemTitle}-{item.startPrice}</li>)
    console.log('itemsList items', items);
    
    return (
      <div className="item__container">
        <ul>
          { items }
        </ul>
      </div>
    )

  }
}

