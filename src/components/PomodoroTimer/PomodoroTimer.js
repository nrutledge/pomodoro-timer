import React, { Component } from 'react';
import LengthControls from '../LengthControls/LengthControls';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import './PomodoroTimer.scss';

export default class PomodoroTimer extends Component {
  constructor(props) {
    super();
    this.state = {
      defaultBreakLength: props.breakLength || 5,
      breakLength: props.breakLength || 5,
      defaultsessionLength: props.sessionLength || 25,
      sessionLength: props.sessionLength || 25,
      secondsRemaining: props.sessionLength * 60 || 25 * 60,
      isRunning: false,
      isBreak: false,
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.isRunning) {
      // Start the ticking if timer has been started
      if (this.state.isRunning !== prevState.isRunning) {
        this.tick();
      }
      
      if (this.state.secondsRemaining === 0) {
        this.refs.beep.play();
      }

      // Switch modes after timer reaches 0
      if (this.state.secondsRemaining < 0) {
        const newSessionLength = this.state.isBreak ? 
          this.state.sessionLength : this.state.breakLength;
        
        this.setTimeRemaining(newSessionLength);
        this.toggleBreak();
      }
    } else {
      // Change timer display if session length is updated (unless running)
      if (this.state.sessionLength !== prevState.sessionLength) {
        this.setTimeRemaining(this.state.sessionLength);
      }
    }
  }

  tick = () => {
    setTimeout(() => {
      if (!this.state.isRunning) { return; }
      this.setState(state => {
        return { secondsRemaining: state.secondsRemaining - 1 };
      });
      this.tick();
    }, 1000)
  }

  toggleTimer = () => {
    this.setState({ isRunning: !this.state.isRunning });
  }

  toggleBreak = () => {
    this.setState({ isBreak: !this.state.isBreak });
  }

  setTimeRemaining = (minutesRemaining) => {
    this.setState(state => {
      return { secondsRemaining: minutesRemaining * 60 };
    });
  }

  resetTimer = () => {
    this.setState({
      breakLength: this.state.defaultBreakLength,
      sessionLength: this.state.defaultsessionLength,
      secondsRemaining: this.state.defaultsessionLength * 60,
      isRunning: false,
      isBreak: false
    });

    this.stopBeep();
  }

  getFormattedTime = () => {
    const minutes = (Math.floor(this.state.secondsRemaining / 60));
    const seconds = (this.state.secondsRemaining % 60)
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');

    return paddedMinutes + ':' + paddedSeconds;
  }

  playBeep = () => {
    this.refs.beep.play();
  }

  stopBeep = () => {
    this.refs.beep.pause();
    this.refs.beep.currentTime = 0;
  }

  _setLength = (stateToUpdate, length, isRelative = true) => () => {
    this.setState(state => {
      const newLength = isRelative? state[stateToUpdate] + length : length;
      if (newLength <= 0 || newLength > 60) { return; }
  
      const newState = {};
      newState[stateToUpdate] = newLength;
      return newState;
    });
  }

  increaseBreakLength = this._setLength('breakLength', 1);
  decreaseBreakLength = this._setLength('breakLength', -1);
  increaseSessionLength = this._setLength('sessionLength', 1);
  decreaseSessionLength = this._setLength('sessionLength', -1);

  render() {
    return (
      <div className="pomodoro-timer">
        <h1 className="pomodoro-timer__h1">Pomodoro Timer</h1>  
        <div className="pomodoro-timer__container">
          <div className="pomodoro-timer__controls">
            <LengthControls 
              label="Break Length" 
              labelId="break-label"
              length={this.state.breakLength}
              lengthId="break-length"
              incrementAction={this.increaseBreakLength}
              incrementId={"break-increment"}
              decrementAction={this.decreaseBreakLength}
              decrementId={"break-decrement"}
            />
            <LengthControls 
              label="Session Length" 
              labelId="session-label"
              length={this.state.sessionLength}
              lengthId="session-length"
              incrementAction={this.increaseSessionLength}
              incrementId={"session-increment"}
              decrementAction={this.decreaseSessionLength}
              decrementId={"session-decrement"}
            />
          </div>

          <TimeDisplay time={this.getFormattedTime()} isBreak={this.state.isBreak} />
          <button 
            className="pomodoro-timer__btn" 
            id="start_stop" 
            onClick={this.toggleTimer}>Start/Stop
          </button>
          <button 
            className="pomodoro-timer__btn pomodoro-timer__btn--reset" 
            id="reset" 
            onClick={this.resetTimer}>Reset
          </button>
          <audio id="beep" ref="beep" src="./sounds/bell.wav" preload="auto"></audio>
        </div>
      </div>
    )
  }
}