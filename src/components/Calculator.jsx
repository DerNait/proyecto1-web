import CalculatorScreen from './CalculatorScreen'
import CalculatorGrid from './CalculatorGrid'
import useCalculator from '@hooks/useCalculator'
import '@styles/Calculator.css'

function Calculator () {
  const { input } = useCalculator()

  return (
    <>
      <div className='calculator d-flex flex-column align-items-center'>
        <CalculatorScreen input={input} />
        <CalculatorGrid />
      </div>
    </>
  )
}

export default Calculator
