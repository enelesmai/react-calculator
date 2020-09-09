import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

class ButtonPanel extends React.Component {
    renderButton(i) {
      return (
        <Button 
            value={i}
        />);
    }

    render() {
      return (
        <div>
          <div className="calc-row">
            {this.renderButton('AC')}
            {this.renderButton('+/-')}
            {this.renderButton('%')}
            {this.renderButton('/')}
          </div>
          <div className="calc-row">
            {this.renderButton('7')}
            {this.renderButton('8')}
            {this.renderButton('9')}
            {this.renderButton('X')}
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