function CalculatorScreen ({ input }) {
  return (
    <>
      <div className='calculator-screen mb-3'>
        <p data-testid='display'>
          {input}
        </p>
      </div>
    </>
  )
}

export default CalculatorScreen