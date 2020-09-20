import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  console.log(numberOne);
  console.log(numberTwo);
  console.log(operation);
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);

  switch (operation) {
    case '÷':
      if (numTwo === 0) {
        return 'undefined';
      }
      return numOne.div(numTwo).toString();
    case 'x':
      return numOne.times(numTwo).toString();
    case '-':
      return numOne.minus(numTwo).toString();
    case '+':
      return numOne.plus(numTwo).toString();
    default:
      return 'error';
  }
};

export default operate;
