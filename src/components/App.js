import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
