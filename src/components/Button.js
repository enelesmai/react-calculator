import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { value, wide, color } = props;
  
  const handleClick = e => {
    props.clickHandler(e.target.id);
  };

  let buttonStyle = '';
  if (wide) {
    buttonStyle += 'wide Button';
  } else {
    buttonStyle += 'Button';
  }
  buttonStyle += ` ${color}`;
  return (
    <button
      id={value}
      type="button"
      className={buttonStyle}
      onClick = {handleClick}
    >
      {value}
    </button>
  );
}

Button.defaultProps = {
  value: '',
  wide: false,
  color: 'orange',
};
Button.propTypes = {
  value: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
