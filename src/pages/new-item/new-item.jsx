import React, { Component } from 'react'
import { constants } from '../../utils/constants'
import { Link } from 'react-router-dom'

export class NewItem extends Component {
  state = {
    title: '',
    startPrice: '',
    error: ''
  }

  titleHandler = (e) => {
    this.setState({ title: e.target.value, error: '' })
  }

  priceHandler = (e) => {
    this.setState({ startPrice: e.target.value, error: '' })
  }

  addItem = () => {
    const title = this.state.title
    const startPrice = parseFloat(this.state.startPrice)
    const { history, createNewItem } = this.props

    if (!title || !startPrice) {
      this.setState({ error: 'Please complete both fields' })
      return
    }

    const newItem = {
      id: Date.now(),
      bids: [],
      title,
      price: startPrice,
      startPrice,
      start: Date.now(),
      active: true,
      duration: constants.DEFAULT_AUCTION_TIME
    };

    createNewItem(newItem)
    history.push('/')
  }
  
  
  render() {
    console.log(this.props)
    const { error, title, startPrice } = this.state

    const errorMessage = error 
      ? <div>{error}</div> 
      : null

    return (
      <div className="sell__page">
        <p className="seller__text">What would you like to sell?</p>
        <p>Create your item here: </p>
        <div className="newItem__form">
        <div className="input-fields">
            <input 
              value={title}
              type="text" 
              name="title" 
              onChange={this.titleHandler}
              placeholder="Title...">
            </input>
            <input 
              value={startPrice}
              type="number"
              name="price"
              onChange={this.priceHandler}
              placeholder="Start price...">
            </input>
          </div>
          <button
            className="btn"
            disabled={error} 
            onClick={this.addItem}
          >
            Submit
          </button>
          {errorMessage}
        </div>
      </div>
    )
  }
}
