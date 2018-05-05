import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Seller extends Component {
  state = {
    itemTitle: '',
    startPrice: ''
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = [
      this.state.itemTitle,
      this.state.startPrice

    ];
      

    // this.props.setAppState({
    //   auctionItems: [...this.props.appState.auctionItems, newItem[0]]
    // });
    this.props.setAppState(prevState => ({
      auctionItems: [...prevState.auctionItems, newItem]
  }))
    console.log('seller page new item', newItem)
  }

  render() {
    const { itemTitle, startPrice } = this.state

    return (
      <div className="seller">
        <p className="seller__text">What would you like to sell? Create your item here: </p>
        <div className="newItem__form__container">
          <form onSubmit={this.addItem}>
            <label>
              Item title:
              <input 
                type="text" 
                name="title" 
                onChange={(e) => this.setState({ itemTitle: e.target.value })}
                placeholder="Title..">
              </input>
            </label>
            <label>
              Start price:
              <input type="text"
              name="price"
              onChange={(e) => this.setState({ startPrice: e.target.value })}
              placeholder="Start price..">
              </input>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Link className="btn__link" to="/">
          <button className="btn">Go back</button>
        </Link>
      </div>
    )
  }
}
