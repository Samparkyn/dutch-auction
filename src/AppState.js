import React, { Component } from 'react';

class AppState extends Component {
    state = {
     auctionItems: [
       {
          itemTitle: 'name',
          startPrice:'400',
          startTimer: ''
        }
      ],
     auctionTime: 10
    };
  

  setAppState = (updater, callback) => {
    this.setState(updater, () => {
      if (this.props.debug) {
        console.log('setAppState', JSON.stringify(this.state));
      }
      if (callback) {
        callback();
      }
    });
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