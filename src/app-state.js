import React, { Component } from 'react';
import { getItems, sam, john } from './utils/mock-data';

class AppState extends Component {
  state = {
    items: [],
    username: '',
  };


  componentDidMount() {
    this.hydrateState()
  }


  hydrateState = () => {
    const items = getItems()
    items.map(i => this.createNewItem(i))
    this.setState(sam)
  }

  setItemPriceDecreaseTimeout = (item, timeLeft) => {
    const oneMinute = 60 * 1000
    const totalMinutes = Math.floor(timeLeft / 1000 / 60)
    for (let minute = totalMinutes; minute > 0; minute--) {
      setTimeout(() => {
        this.decreaseItemPrice(item)
      }, oneMinute);
    }
  }


  getWinningBid = (item, price) => {
    const validBids = item.bids.filter((bid) => bid.price >= price) // get winning bids
    validBids.sort((bidA, bidB) => bidA.price - bidB.price) // sort by bid price
    const winningBids = validBids.filter((bid, _, allBids) => bid.price === allBids[0].price) // keep duplicate highest bids
    winningBids.sort((bidA, bidB) => bidA.start - bidB.start) // get the first highest bid

    if (winningBids.length) {
      return winningBids[0]
    }

    return null
  }


  decreaseItemPrice = (item) => {
    const itemIdx = this.getItemIdx(item)
    const newItems = this.getNewItems()

    const newItem = newItems[itemIdx]
    const newPrice = newItem.price - (newItem.price * 0.2)
    const winningBid = this.getWinningBid(newItem, newPrice)

    if (winningBid) {
      this.setItemWinner(itemIdx, winningBid)
      return
    }

    newItem.price = newPrice
    this.setState({ items: newItems })
  }


  createNewItem = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }), () => {
      const timeLeft = item.duration - (Date.now() - item.start)
      if (timeLeft <= 0) {
        return
      }

      this.setItemEndTimeout(item, timeLeft)
      this.setItemPriceDecreaseTimeout(item, timeLeft)
    })
  }


  setItemEndTimeout = (item, timeLeft) => {
    setTimeout(() => {
      this.endItemAuction(item)
    }, timeLeft);
  }


  setItemWinner = (itemIdx, winningBid) => {
    const { items } = this.state
    const currItem = items[itemIdx]

    const auctionAlreadyEnded = !currItem.active
    if (auctionAlreadyEnded) {
      return
    }

    const newItems = items.slice()
    const newItem = newItems[itemIdx]

    newItem.active = false
    newItem.winner = winningBid
    this.setState({ items: newItems })
  }


  setBidOnItem = (item, price) => {
    const { username } = this.state

    const bid = {
      price,
      start: Date.now(),
      user: username
    }

    const itemIdx = this.getItemIdx(item)
    const newItems = this.getNewItems()

    const newItem = newItems[itemIdx]
    newItem.bids.push(bid)

    this.setState({ items: newItems })
  }


  getItemIdx = (item) => {
    return this.state.items.findIndex(i => i.id === item.id)
  }


  getNewItems = () => {
    return this.state.items.slice()
  }


  toggleUser = () => {
    const { userId } = this.state

    if (userId === sam.userId) {
      this.setState(john)
      return
    }
    this.setState(sam)
  }


  endItemAuction = (item) => {
    const itemIdx = this.getItemIdx(item)
    const newItems = this.getNewItems()
    const newItem = newItems[itemIdx]
    const auctionAlreadyEnded = !newItem.active

    if (auctionAlreadyEnded) {
      return
    }

    const winningBid = this.getWinningBid(newItem, item.price)
    if (winningBid) {
      this.setItemWinner(itemIdx, winningBid)
      return
    }

    newItem.active = false
    newItem.price = 1
    this.setState({ items: newItems })
  }


  render() {
    const { items, username, userId } = this.state

    return (
      <div className="app-state">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            items,
            username,
            userId,
            toggleUser: this.toggleUser,
            createNewItem: this.createNewItem,
            setBidOnItem: this.setBidOnItem
          });
        })}
      </div>
    );
  }
}

export default AppState;