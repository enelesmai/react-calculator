import Big from 'big.js';
import operate from './operate';

const isNumber = value => {
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  console.log(value);
  console.log("is number: "+numbers.includes(value));
  return numbers.includes(value);
}

const isOperation = value => {
  const operations = ['÷','x','-','+'];
  console.log("is operation: " + operations.includes(value));
  return operations.includes(value);
}

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  console.log(total);
  console.log(next);
  console.log(operation);
  console.log(buttonName.value);

  if(operation =='='){
    total = '0';
    next = null;
    operation = null;
  }

  if(isNumber(buttonName.value) && operation == null){
    total = total=='0' ? '':total;
    total += buttonName.value;
  } else if(isNumber(buttonName.value) && operation != null){
    next = next==null ? '':next;
    next += buttonName.value;
  }else if(isOperation(buttonName.value)){
    operation = buttonName.value;
  }else{
    switch (buttonName.value) {
      case '+/-':
        total = Big(total).times(-1).toString();
        break;
      case '%':
        total = Big(total).div(100).toString();
        break;
      case 'AC':
        total = 0;
        next = 0;
        operation = null;
        break;
      case '=':
        total = operate(total, next, operation);
        operation = '=';
        break;
      default:
        break;
    }
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
