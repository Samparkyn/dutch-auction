import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Item } from './pages/item'
import { NewItem } from './pages/new-item'
import { Link } from 'react-router-dom'
import './app.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="app__nav">
              <Link className="nav__link" to="/">Home</Link>
              <Link className="nav__link" to="/new-item">Sell</Link>
            </div>
            <Route exact path="/" render={routerProps => <Home {...this.props} />} />
            <Route exact path="/new-item" render={routerProps => <NewItem {...routerProps} {...this.props} />} />
            <Route path="/item/:id" render={routerProps => <Item {...routerProps} {...this.props} />} />
          </div>
        </Router>
      </div>
    )
  }
}
