import CalculatorScreen from './CalculatorScreen'
import CalculatorGrid from './CalculatorGrid'
import '@styles/Calculator.css'

function Calculator () {
  return (
    <>
      <div className='calculator d-flex flex-column align-items-center'>
        <CalculatorScreen />
        <CalculatorGrid />
      </div>
    </>
  )
}

export default Calculator
