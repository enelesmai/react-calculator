import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    console.log('click event');
    console.log(buttonName);
    console.log(this.state);
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    let currentResult = '';
    currentResult = total;
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Display result = {currentResult} />
        <ButtonPanel clickHandler = {this.handleClick} />
      </div>
    );
  }

}

export default App;
