import React from 'react';
import ReactDOM from 'react-dom';

function Display(props) {
    const { result } = props;
    return (
      <div className="Display">
        <input type="text" value={result}></input>
      </div>
    );
  }
  
  export default Display;