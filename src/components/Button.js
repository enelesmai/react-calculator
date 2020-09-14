import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value, wide, color } = props;
  let buttonStyle = '';
  if (wide){
    buttonStyle += 'wide Button';
  }else{
    buttonStyle += 'Button';
  }
  buttonStyle += ` ${color}`;
  return (
    <button
      type="button"
      className={buttonStyle}
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
