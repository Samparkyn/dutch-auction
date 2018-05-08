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

    if (!title || !startPrice) {
      this.setState({ error: 'Please complete both fields' })
      return
    }

    const newItem = {
      id: Date.now(),
      bids: [],
      title,
      startPrice,
      start: Date.now(),
      active: true,
      duration: constants.DEFAULT_AUCTION_TIME
    };

    this.props.createNewItem(newItem)
  }
  

  render() {
    const { error, title, startPrice } = this.state

    const errorMessage = error 
      ? <div>{error}</div> 
      : null

    return (
      <div className="seller">
        <p className="seller__text">What would you like to sell? Create your item here: </p>
        <div className="newItem__form__container">
          <input 
            value={title}
            type="text" 
            name="title" 
            onChange={this.titleHandler}
            placeholder="Title...">
          </input>
          <input
            type="number"
            name="price"
            onChange={this.priceHandler}
            placeholder="Start price...">
          </input>
          <button disabled={error} onClick={this.addItem}>
            <Link to="/">Save</Link>
          </button>
          {errorMessage}
        </div>
      </div>
    )
  }
}
