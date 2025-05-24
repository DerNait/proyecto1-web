import CalculatorInput from "./CalculatorInput";

function CalculatorGrid() {
    return (
        <div className="calculator-button-container mt-5">
            <div className="row g-2">
                {['%','CE','C','/',7,8,9,'X',4,5,6,'-',1,2,3,'+','+/-',0,'.','='].map(n => (
                    <div className="col-3" key={n}>
                        <CalculatorInput value={n} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CalculatorGrid;