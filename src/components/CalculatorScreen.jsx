import useCalculator from "@hooks/useCalculator";

function CalculatorScreen() {
    const { input } = useCalculator();

    return (
        <>
            <div className="calculator-screen mb-3">
                <p>
                    {input}
                </p>
            </div>
        </>
    )
}

export default CalculatorScreen;