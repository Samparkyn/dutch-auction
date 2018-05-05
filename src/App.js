import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Home } from './pages/home'
import { Buyer } from './pages/buyer'
import { Seller } from './pages/seller'
import { ItemsList } from './components/itemsList'

import './App.css';

export default class App extends Component {
  render(){
    const { appState, setAppState } = this.props;
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
          <Route exact path="/sell" component={Seller} />
        </div>
      </Router>
    </div>
    )
  }   
}
