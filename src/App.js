import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Item } from './pages/item'
import { NewItem } from './pages/new-item'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Dutch Auction!</h1>
        </header>
        <Router>
          <div>
            <Route exact path="/" render={props => <Home {...this.props} />} />
            <Route exact path="/new-item" render={props => <NewItem {...this.props} />} />
            <Route path="/item/:id" render={props => <Item {...props} {...this.props} />} />
          </div>
        </Router>
      </div>
    )
  }   
}
