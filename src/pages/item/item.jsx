import React, { Component } from 'react'


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
    const { setBidOnItem, history, userId } = this.props
    const item = this.getItemFromParams()

    if (item.userId === userId) {
      this.setState({ error: 'You cannot bid on an auction you started' })
      return
    }

    if (!bidPrice) {
      this.setState({ error: 'Please set a bid amount' })
      return
    }

    if (bidPrice > item.price) {
      this.setState({ error: 'The bid amount has to be equal or lower than the current price' })
      return
    }

    if (item.userId === userId) {
      this.setState({ error: 'You cannot bid on an auction you started' })
      return
    }

    history.push('/')
    setBidOnItem(item, parseFloat(bidPrice))
  }

  getItemFromParams = () => {
    const { items, match } = this.props
    const itemId = parseInt(match.params.id, 10)
    const item = items.find(i => i.id === itemId)
    return item
  }

  render() {
    const { error, bidPrice } = this.state
    const item = this.getItemFromParams()

    const errorMessage = error
      ? <div className="error-message">{error}</div>
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
      <div className="item__page">
        <div className="item__card">
          <div>{item.title}</div>
          <div>{item.price}</div>
          {item.active ? bidInput : auctionOverDetails}
          {errorMessage}
        </div>
      </div>
    )
  }
}