import useCalculator from "@hooks/useCalculator";

function CalculatorInput( {value} ) {
    const { onButtonClick } = useCalculator();

    const getInputClass = (value) => {
        if (isNaN(value) && value !== "+/-" && value !== ".") return "calculator-special"
        return "calculator-button";
    }
    return (
        <>
            <button className={getInputClass(value)} onClick={() => onButtonClick(value)}>
                {value}
            </button>
        </>
    )
}
export default CalculatorInput