import operate from "./operate";

const calculate = (calculatorData, buttonName) => {
    const { total, next, operation } = calculatorData;
    
    switch (buttonName) {
        case '+/-':
            total = (Big(total).times(-1)).toString();
            break;
        case '%':
            total = (Big(total).div(100)).toString();
            break;
        case 'AC':
            total = 0;
            next = 0;
            operation = null;
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