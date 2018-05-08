import React, { Component } from 'react'
import { constants } from '../../utils/constants'

export class Seller extends Component {
  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      bids: [],
      start: Date.now(),
      active: true,
      title: this.titleRef.value,
      startPrice: this.priceRef.value,
      duration: constants.DEFAULT_AUCTION_TIME
    };

    setTimeout(() => {
      
    }, newItem.duration);

    this.props.setAppState({
      auctionItems: [...this.props.appState.auctionItems, newItem]
    })
  }
  
  setTitleRef = (el) => this.titleRef = el;
  setPriceRef = (el) => this.priceRef = el;

  render() {

    return (
      <div className="seller">
        <p className="seller__text">What would you like to sell? Create your item here: </p>
        <div className="newItem__form__container">
          <label>
            Item title:
            <input 
              type="text" 
              name="title" 
              ref={this.setTitleRef}
              placeholder="Title...">
            </input>
          </label>
          <label>
            Start price:
            <input
              type="number"
              name="price"
              ref={this.setPriceRef}
              placeholder="Start price...">
            </input>
          </label>
          <button onClick={this.addItem}>Save</button>
        </div>
      </div>
    )
  }
}
