import useCalculator from "@hooks/useCalculator";

function CalculatorInput( {value} ) {
    const { onButtonClick } = useCalculator();

    const getInputClass = (value) => {
        if (isNaN(value) && value !== "+/-" && value !== ".") return "calculator-special"
        return "";
    }
    return (
        <>
            <button className={'calculator-button ' + getInputClass(value)} onClick={() => onButtonClick(value)}>
                {value}
            </button>
        </>
    )
}
export default CalculatorInput