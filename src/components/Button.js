import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value } = props;
  return (
    <button
      type="button"
      className="button"
    >
      {value}
    </button>
  );
}

Button.defaultProps = {
  value: '',
};
Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
