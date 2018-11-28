import React from 'react';
import './LengthControls.scss';

export default (props) => {
  return (
    <div className="length-controls">
      <h2 className="length-controls__h2" id={props.labelId}>{props.label}</h2>
      <div className="length-controls__container">
        <button className="length-controls__btn" id={props.decrementId} onClick={props.decrementAction}>-</button>
        <div className="length-controls__length" id={props.lengthId}>{props.length}</div>
        <button className="length-controls__btn" id={props.incrementId} onClick={props.incrementAction}>+</button>
      </div>
    </div>
  )
}