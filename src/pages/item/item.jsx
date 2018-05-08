import React, { Component } from 'react'
import { ItemRow } from '../../components/item-row'
import { Link } from 'react-router-dom'


export class Item extends Component {
  state = {
    bidPrice: '',
    error: ''
  }
  
  bidPriceHandler = (e) => {
    this.setState({ bidPrice: e.target.value, error: '' })
  }

  placeBidHandler = () => {
    const { bidPrice } = this.state
    const { setBidOnItem } = this.props

    if (!bidPrice) {
      this.setState({ error: 'Please set a bid amount' })
      return
    }

    const item = this.getItemFromParams()
    setBidOnItem(item, parseFloat(bidPrice))
  }

  getItemFromParams = () => {
    const { items, match } = this.props
    const itemId = parseInt(match.params.id)
    const item = items.find(i => i.id === itemId)
    return item
  }
  
  render() {
    const { error, bidPrice } = this.state
    const item = this.getItemFromParams()

    const errorMessage = error
      ? <div>{error}</div>
      : null

    return (
      <div>
        <ItemRow item={item} />
        <input
          value={bidPrice}
          onChange={this.bidPriceHandler}
          type="number"
          placeholder="Place your bid..."
        />
        <button disabled={error} onClick={this.placeBidHandler}>
          <Link to="/">Place bid</Link>
        </button>
        {errorMessage}
      </div>
    )
  }
}