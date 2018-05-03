import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Buyer } from './pages/buyer'

import './App.css';

export const App = () => (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Dutch Auction!</h1>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/buy" component={Buyer} />
      </div>
  )
