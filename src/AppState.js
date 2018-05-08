import React, { Component } from 'react';

class AppState extends Component {
  state = {
    items: [],
    username: ''
  };
  

  setItemEndTimeout = (item) => {
    setTimeout(() => {
      this.endItemAuction(item)
    }, item.duration);
  }


  setItemPriceDecreaseTimeout = (item) => {
    // convert Miliseconds to Minutes
    const totalMinutes = Math.floor(item.duration / 1000 / 60)
    for (let minute = totalMinutes; minute > 0; minute--) {
      setTimeout(() => {
        this.decreaseItemPrice(item)
      }, 60 * 1000);
    }
  }


  getWinningBid = (item, newPrice) => {
    const winningBid = item.bids
      .filter((bid) => bid.price >= newPrice) // get winning bids
      .sort((bidA, bidB) => bidA.price - bidB.price) // sort by bid price
      .filter((bid, idx, allBids) => bid.price !== allBids[0].price) // remove lowest bids - keep duplicate ones
      .sort((bidA, bidB) => bidA.start - bidB.start) // get the first highest bid
    
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
      this.setItemEndTimeout(item)
      this.setItemPriceDecreaseTimeout(item)
    })
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

    newItem.active = false
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