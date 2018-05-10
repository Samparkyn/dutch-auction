import React, { Component } from 'react'


export class Timer extends Component {
  timer = null;

  constructor(props) {
    super()
    const { start, duration } = props
    this.state = {
      time: {},
      secondsLeft: this.calculateSecondsLeft(start, duration)
    }
  }

  componentDidMount() {
    this.startTimer()
  }


  componentWillUnmount() {
    clearInterval(this.timer)
  }


  calculateSecondsLeft(start, duration) {
    const timePassed = Date.now() - start
    const timeLeftInSeconds = (duration - timePassed) / 1000
    return timeLeftInSeconds
  }


  startTimer() {
    this.timer = setInterval(this.countDown, 1000);
  }


  secondsToTime(secs) {
    const divisor_for_minutes = secs % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);

    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);

    return {
      minutes,
      seconds
    };
  }


  countDown = () => {
    // Remove one second, set state so a re-render happens.
    const secondsLeft = this.state.secondsLeft - 1;
    this.setState({
      time: this.secondsToTime(secondsLeft),
      secondsLeft,
    });

    // Check if we're at zero.
    if (secondsLeft <= 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { time: { minutes, seconds } } = this.state

    const minutesEl = <span className="timer__detail">M</span>
    const secondsEl = <span className="timer__detail">S</span>

    return (
      <div className="timer__container">
        {minutes}{minutesEl} : {seconds}{secondsEl}
      </div>
    )
  }
}

