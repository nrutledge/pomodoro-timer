import React from 'react';
import './TimeDisplay.scss';

export default (props) => {
  const label = props.isBreak ? 'Break' : 'Session';
  return (
    <div className="time-display">
      <div className="time-display__label" id='timer-label'>{label}</div>
      <div className="time-display__time" id='time-left'>{props.time}</div>
    </div>
  );
}