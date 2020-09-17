import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div>
      <input className="Display" type="text" value={result} />
    </div>
  );
}

// Defaults and proptypes
Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
