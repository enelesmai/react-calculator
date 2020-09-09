import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
    return (
        <button 
            className="button">
          {props.value}
        </button>
      );
  }
  
  export default Button;