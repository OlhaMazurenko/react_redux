import React from 'react';
import PropTypes from 'prop-types';

export default function NumberForm(props) {
  return (
    <React.Fragment>
      <p>{props.currentNumber}</p>
      <button onClick={props.plusClicked}>+</button>
      <button onClick={props.minusClicked}>-</button>
    </React.Fragment>
  );
}

NumberForm.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  plusClicked: PropTypes.func.isRequired,
  minusClicked: PropTypes.func.isRequired
}
