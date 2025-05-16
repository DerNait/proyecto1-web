import useCalculator from "@hooks/useCalculator";

function CalculatorInput( {value} ) {
    const { onButtonClick } = useCalculator();

    return (
        <>
            <button className="calculator-button" onClick={() => onButtonClick(value)}>
                {value}
            </button>
        </>
    )
}

export default CalculatorInput