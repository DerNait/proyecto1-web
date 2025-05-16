import useCalculator from "@hooks/useCalculator";

function CalculatorScreen() {
    const { input } = useCalculator();

    return (
        <>
            <div className="calculator-screen">
                <p>
                    {input}
                </p>
            </div>
        </>
    )
}

export default CalculatorScreen;