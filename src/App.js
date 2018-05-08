import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Home } from './pages/home'
import { Buyer } from './pages/buyer'
import { Seller } from './pages/seller'

import './App.css';

export default class App extends Component {
  render(){
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the Dutch Auction!</h1>
      </header>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route
           exact path="/buy"
           render={(props) => ( <Buyer {...this.props} />)}
          />
          <Route 
            exact path="/sell"
            render={(props) => ( <Seller {...this.props} />)} />
        </div>
      </Router>
    </div>
    )
  }   
}
