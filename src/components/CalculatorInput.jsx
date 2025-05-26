import useCalculator from '@hooks/useCalculator'

function CalculatorInput ({ value }) {
  const { onButtonClick } = useCalculator()

  const getInputClass = (value) => {
    if (isNaN(value) && value !== '+/-' && value !== '.' && value !== 'CE' && value !== 'C' && value !== '%') return 'calculator-operator'
    else if (value == 'CE' || value == 'C' || value == '%') return 'calculator-special'
    return ''
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