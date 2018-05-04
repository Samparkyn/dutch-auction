import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Item extends Component {

  render() {
    console.log('props appstate', this.props)
    return (
      <div className="item__container">
        <h1>auctions here:</h1>
        <p>{this.props.appState.auctions}</p>
      </div>
    )

  }
}

