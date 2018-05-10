import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ItemCard } from '../item-card'

export class ItemsList extends Component {
  static getDerivedStateFromProps(newProps, oldState) {
    const currentFilter = oldState.filter

    let filteredItems
    switch (currentFilter) {
      case 'all':
        filteredItems = newProps.items
        break;

      case 'completed':
        filteredItems = newProps.items.filter(i => !i.active)
        break;

      default: // 'active'
        filteredItems = newProps.items.filter(i => i.active)
        break;
    }

    return { filteredItems } // object to update state
  }

  state = {
    filteredItems: [],
    filter: 'active'
  }

  showCompletedItems = () => {
    const filteredItems = this.props.items.filter(item => !item.active)
    this.setState({ filteredItems, filter: 'completed' })
  }

  showActiveItems = () => {
    const filteredItems = this.props.items.filter(item => item.active)
    this.setState({ filteredItems, filter: 'active' })
  }

  showAllItems = () => {
    const filteredItems = this.props.items
    this.setState({ filteredItems, filter: 'all' })
  }

  render() {
    console.log(this.props, this.state)
    const { filteredItems } = this.state
    const itemCards = filteredItems.map(item => (
      <Link className="item__link" key={item.id} to={`/item/${item.id}`}>
        <ItemCard item={item} />
      </Link>
    ))

    const activeButtonClassname = this.state.filter === 'active' ? 'active' : ''
    const completedButtonClassname = this.state.filter === 'completed' ? 'active' : ''
    const allButtonClassname = this.state.filter === 'all' ? 'active' : ''

    return (
      <div>
        <p>Filter Auctions:</p>
        <button className={activeButtonClassname} onClick={this.showActiveItems}>Active</button>
        <button className={completedButtonClassname} onClick={this.showCompletedItems}>Completed</button>
        <button className={allButtonClassname} onClick={this.showAllItems}>All</button>
        <div className="items__list">
          {itemCards}
        </div>
      </div>
    )
  }
}

