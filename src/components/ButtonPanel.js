import React from 'react';
import Button from './Button';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderButton"] }] */
class ButtonPanel extends React.Component {
  renderButton(value) {
    const operators = ['/', 'X', '-', '+', '='];
    return (
      <Button
        value={value}
        wide={value === '0'}
        color={!operators.includes(value) ? 'gray' : undefined}
      />
    );
  }

  render() {
    return (
      <div className="ButtonPanel">
        <div className="calc-row">
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷')}
        </div>
        <div className="calc-row">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('x')}
        </div>
        <div className="calc-row">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>
        <div className="calc-row">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </div>
        <div className="calc-row">
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
