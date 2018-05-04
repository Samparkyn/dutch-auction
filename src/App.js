import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Home } from './pages/home'
import { Buyer } from './pages/buyer'
import { Seller } from './pages/seller'

import './App.css';

export const App = () => (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Dutch Auction!</h1>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/buy" component={Buyer} />
            <Route exact path="/sell" component={Seller} />
          </div>
        </Router>
      </div>
  )
