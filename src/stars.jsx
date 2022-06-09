import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';

function Stars({ amount }) {
  if (amount < 1 || amount > 5 || !Number.isInteger(amount)) {
    return null;
  }

  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    arr.push(<Star/>);
  }

  return (
    <ul className='card-body-stars'>
      { arr }
    </ul>    
  )
}

Stars.defaultProps = {
  amount: 0
}

Stars.propTypes = {
  amount: PropTypes.number
}

export default Stars