import React, { Component } from 'react'

export class AuctionTimer extends Component {

  constructor() {
    super();
    this.state = { time: {}, seconds: 300 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  // componentDidMount() {
  //   console.log("AuctionTimer Mounted...")
  //   console.log('timer', this.props.appState.auctionTime)

  //   const start = new Date()
  //   let mins = start.getMinutes()
  //   let hour = start.getHours()
  //   console.log('hours, mins', hour, mins)

  //   let timer = setInterval( () => {
  //     this.props.setAppState( ({
  //       auctionTime: [...this.props.appState.auctionTime, new Date().toLocaleString()]
  //   }))
  //   },10000)
  //   console.log('timer', this.props.appState.auctionTime)
  // }

  secondsToTime(secs){
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    console.log("AuctionTimer Mounted...")
    let timeLeft = this.secondsToTime(this.state.seconds);
    this.startTimer()
    this.props.setAppState( ({
       auctionTime: [...this.props.appState.auctionTime, timeLeft]
    }))
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    const timer = this.props.appState.auctionTime
    
    return (
      <div className="timer__container">
       <div>
        
        m: {this.state.time.m} s: {this.state.time.s}
      </div>
      </div>
    )

  }
}

