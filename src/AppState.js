import React, { Component } from 'react';
import { getItems, getUsername } from './utils/mock-data';

class AppState extends Component {
  state = {
    items: [],
    username: ''
  };


  componentDidMount() {
    this.hydrateState()
  }


  hydrateState = () => {
    const items = getItems()
    items.map(i => this.createNewItem(i))
    this.setState({
      username: 'Sam',
      userId: 3
    })
  }

  setItemPriceDecreaseTimeout = (item, timeLeft) => {
    // convert Miliseconds to Minutes
    const oneMinute = 60 * 1000
    const totalMinutes = Math.floor(timeLeft / 1000 / 60)
    for (let minute = totalMinutes; minute > 0; minute--) {
      setTimeout(() => {
        this.decreaseItemPrice(item)
      }, oneMinute);
    }
  }


  getWinningBid = (item, price) => {
    console.log('getWinningBid', { item, price })
    const winningBid = item.bids
      .map((i, idx, all) => {
        console.log('before filter', {i, idx, all})
        return i 
      })
      .filter((bid) => bid.price >= price) // get winning bids
      .map((i, idx, all) => {
        console.log('after first filter', {i, idx, all})
        return i 
      })
      .sort((bidA, bidB) => bidA.price - bidB.price) // sort by bid price
      .map((i, idx, all) => {
        console.log('after first sort', {i, idx, all})
        return i 
      })
      .filter((bid, _, allBids) => {
        console.log('inside filter', { bid, allBids })
        return bid.price !== allBids[0].price // remove lowest bids - keep duplicate ones
      })
      .sort((bidA, bidB) => bidA.start - bidB.start) // get the first highest bid
    console.log('after filters', { winningBid, item, price })
    if (winningBid.length) {
      return winningBid[0]
    }

    return null
  }


  decreaseItemPrice = (item) => {
    const itemIdx = this.getItemIdx(item)
    const newItems = this.getNewItems()

    const newItem = newItems[itemIdx]
    const newPrice = newItem.price - (newItem.price * 0.2)
    const winningBid = this.getWinningBid(newItem, newPrice)
    console.log('decrease item price', { item, newPrice })
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
    console.log('appState render: items =>', this.state.items)
    return (
      <div className="app-state">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            items: this.state.items,
            createNewItem: this.createNewItem,
            setBidOnItem: this.setBidOnItem
          });
        })}
      </div>
    );
  }
}

export default AppState;