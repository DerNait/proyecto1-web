import React from 'react'
import CalculatorScreen from '@components/CalculatorScreen'

export default {
  title: 'Calculator/Screen',
  component: CalculatorScreen,
  tags: ['autodocs'],
}

/* export const Empty = () => (
  <CalculatorContext.Provider value={{ input: '', onButtonClick: () => {} }}>
    <CalculatorScreen />
  </CalculatorContext.Provider>
) */

/* export const WithValue = () => (
  <CalculatorContext.Provider value={{ input: '123.45', onButtonClick: () => {} }}>
    <CalculatorScreen />
  </CalculatorContext.Provider>
) */

const Template = (args) => <CalculatorScreen {...args} />

export const Empty = Template.bind({})
Empty.args = {
  input: ''
}

export const WithValue = Template.bind({})
WithValue.args = {
  input: '123.45'
}
