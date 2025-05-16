import Calculator from '@components/Calculator'
import { CalculatorProvider } from '@hooks/useCalculator'
import './App.css'

function App() {
  return (
    <>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <CalculatorProvider>
          <Calculator />
        </CalculatorProvider>
      </div>
    </>
  )
}

export default App
