import React, { Component } from 'react';

class AppState extends Component {
    state = {
      items: [],
      username: ''
    };
  
  setAppState = (newState) => {
    this.setState(newState)
  }

  createNewItem = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }), () => {
      setTimeout(() => {
        this.endItemAuction(item)
      }, item.duration);
    })
  }


  setBidOnItem = (itemId, price) => {
    const { username, items } = this.state

    const bid = {
      price,
      user: username
    }

    const item = this.state.items.find(i => i.id === itemId)
  }


  endItemAuction = (item) => {
    const { items } = this.state
    const itemIdx = items.find(i => i.id === item.id)
    const newItem = this.state.items[itemIdx]
    newItem.active = false
    const newItems = items.splice(itemIdx, 1, newItem)
    this.setState({ items: newItems })
  }


  render() {
    return (
      <div className="app-state">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
    );
  }
}

export default AppState;