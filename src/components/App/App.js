import React, { Component } from 'react';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="app">
        <PomodoroTimer />
      </div>
    );
  }
}

export default App;
