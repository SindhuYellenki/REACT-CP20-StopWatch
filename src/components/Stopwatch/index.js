import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: '00', seconds: '00'}

  onClickStart = () => {
    const {minutes, seconds} = this.state
    let totalSeconds = parseInt(minutes) * 60 + parseInt(seconds)
    this.timerId = setInterval(() => {
      totalSeconds = totalSeconds + 1
      const newMinutes = Math.floor(totalSeconds / 60)
      const newSeconds = totalSeconds - newMinutes * 60
      this.setState({minutes: newMinutes, seconds: newSeconds})
    }, 1000)
  }

  onClickStop = () => {
    clearInterval(this.timerId)
  }

  onClickReset = () => {
    this.setState({minutes: '00', seconds: '00'})
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watch-Container">
          <div className="timer-img-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="counter-heading">
            {minutes}:{seconds}
          </h1>
          <div className="button-container">
            <button className="Start" type="button" onClick={this.onClickStart}>
              Start
            </button>
            <button className="Stop" type="button" onClick={this.onClickStop}>
              Stop
            </button>
            <button className="Reset" type="button" onClick={this.onClickReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
