import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

const useCalculator = () => {
    return useContext(CalculatorContext);
}

function CalculatorProvider({children}) {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [operator, setOperator] = useState(null);
    const [reset, setReset] = useState(false);

    const maxInputs = 9;

    const onButtonClick = (value) => {
        if (!isNaN(value) || value === '.') {
            setInput((previous) => {
                    const next = reset ? `${value}` : `${previous}${value}`;
                    const fitted = displayInput(parseFloat(next), maxInputs);

                    return fitted === 'LENGTH ERROR' ? prev : next;
                }
            );

            setReset(false);
        }
        else {
            manageOperation(value);
        }
    }

    const value = {
        input,
        onButtonClick
    };

    const manageOperation = (value) => {
        switch (value) {
            case 'C':
                setInput('');
                setResult(null);
                setOperator(null);
                break;
            case 'CE':
                setInput('');
                break;
            case '+/-':
                setInput(previous => previous.startsWith('-') ? previous.slice(1) : `-${previous}`);
                break;
            case '=':
                if (operator && result != null) {
                    const currentInput = parseFloat(input);
                    const operationResult = operate(result, currentInput, operator);

                    const resultFormatted = displayInput(operationResult, maxInputs);
                    setInput(resultFormatted);
                    setResult(null);
                    setOperator(null); 
                    setReset(true);
                }
                break;
            default:
                if (input !== '') {
                    setResult(parseFloat(input));
                    setOperator(value); 
                    setReset(true);
                }
        }
    };

    const displayInput = (value, max) => {
        if (typeof value !== 'number' || !isFinite(value)) {
            return String(value);
        }

        const sign = value < 0 ? '-' : '';
        const absolute = Math.abs(value);

        const noDecimal = Math.trunc(absolute).toString();

        if (sign.length + noDecimal.length > max) {

            for (let i = max - sign.length - 5; i >= 1; i--) {
                const exponent = absolute.toExponential(i);
                
                if (sign.length + exponent.length <= max) {
                    return sign + exponent;
                }
            }

            return 'LENGTH ERROR';
        }

        const remain = max - sign.length - noDecimal.length;

        if (remain === 0) {
            return sign + noDecimal;
        }

        const decimals = remain - 1;
        let rounded = absolute.toFixed(decimals).replace(/\.?0+$/, '');

        return sign + rounded;
    }

    const operate = (num1, num2, operator) => {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                let res = num1 - num2
                return res < 0 ? 'SIGN ERROR' : res;
            case 'X':
                return num1 * num2;
            case '/':
                return num2 !== 0 ? num1 / num2 : 'DIVISION ERROR';
            case '%':
                return num1 % num2;
            default:
                return num2;
        }
    }

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    )
}


export default useCalculator
export {CalculatorProvider}