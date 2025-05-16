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

    const onButtonClick = (value) => {
        if (!isNaN(value) || value === '.') {
            setInput((previous) => {
                    if (previous.length >= 9) {
                        return reset ? `${value}` : `${previous}`;
                    }

                    return reset ? `${value}` : `${previous}${value}`
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
                    let resultPrecision;

                    if (typeof operationResult === "number") {
                        console.log("To Precision");
                        resultPrecision = operationResult.toPrecision(8);
                    }
                    else {
                        resultPrecision = operationResult;
                    }
                    
                    setInput(resultPrecision <= 999999999 ? resultPrecision : 'LENGTH ERROR');
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