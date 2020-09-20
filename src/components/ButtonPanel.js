import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ButtonPanel = props => {

  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };

  return (
    <div className="ButtonPanel">
      <div className="calc-row">
        {renderButton('AC',handleClick)}
        {renderButton('+/-',handleClick)}
        {renderButton('%',handleClick)}
        {renderButton('÷',handleClick)}
      </div>
      <div className="calc-row">
        {renderButton('7',handleClick)}
        {renderButton('8',handleClick)}
        {renderButton('9',handleClick)}
        {renderButton('x',handleClick)}
      </div>
      <div className="calc-row">
        {renderButton('4',handleClick)}
        {renderButton('5',handleClick)}
        {renderButton('6',handleClick)}
        {renderButton('-',handleClick)}
      </div>
      <div className="calc-row">
        {renderButton('1',handleClick)}
        {renderButton('2',handleClick)}
        {renderButton('3',handleClick)}
        {renderButton('+',handleClick)}
      </div>
      <div className="calc-row">
        {renderButton('0',handleClick)}
        {renderButton('.',handleClick)}
        {renderButton('=',handleClick)}
      </div>
    </div>
  );
  
};

function renderButton(value,handleClick) {
  const operators = ['÷', 'x', '-', '+', '='];
  return (
    <Button
      value={value}
      wide={value === '0'}
      color={!operators.includes(value) ? 'gray' : undefined}
      clickHandler={handleClick}
    />
  );
}

ButtonPanel.defaultProps = {
  clickHandler: null,
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
