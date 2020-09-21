import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    value, wide, color, clickHandler,
  } = props;

  const handleClick = value => { clickHandler(value); };

  let buttonStyle = '';
  if (wide) {
    buttonStyle += 'wide Button';
  } else {
    buttonStyle += 'Button';
  }
  buttonStyle += ` ${color}`;

  return (
    <button
      type="button"
      className={buttonStyle}
      onClick={() => { handleClick({ value }); }}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  value: '',
  wide: false,
  color: 'orange',
};
Button.propTypes = {
  value: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
