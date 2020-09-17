import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;

  switch (buttonName) {
    case '+/-':
      total = (total).times(-1).toString();
      break;
    case '%':
      total = (total).div(100).toString();
      break;
    case 'AC':
      total = 0;
      next = 0;
      operation = null;
      break;
    case '=':
      break;
    default:
      total = operate(total, next, operation);
      break;
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
