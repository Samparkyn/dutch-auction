import React, { Component } from 'react'
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
    const { setBidOnItem, history } = this.props
    const item = this.getItemFromParams()

    if (!bidPrice) {
      this.setState({ error: 'Please set a bid amount' })
      return
    }

    if (bidPrice > item.price) {
      this.setState({ error: 'The bid amount has to be equal or lower than the current price' })
      return
    }

    history.push('/')
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

    const bidInput = (
      <React.Fragment>
        <input
          value={bidPrice}
          onChange={this.bidPriceHandler}
          type="number"
          placeholder="Place your bid..."
        />
        <button disabled={error} onClick={this.placeBidHandler}>Place bid</button>
      </React.Fragment>
    )

    const winnerDetails = (
      <React.Fragment>
        <div>{item.winner ? item.winner.username : ''}</div>
        <div> bought this item for </div>
        <div>{item.winner ? item.winner.price : ''}</div>
      </React.Fragment>
    )

    const auctionOverDetails = (
      <React.Fragment>
        <div>Auction over</div>
        <div>{item.winner ? winnerDetails : 'No buyers'}</div>
      </React.Fragment>
    )

    return (
      <div>
        <div>{item.title}</div>
        <div>{item.price}</div>
        {item.active ? bidInput : auctionOverDetails}
        {errorMessage}
      </div>
    )
  }
}