import React from 'react'
import CalculatorInput from '@components/CalculatorInput'
import { CalculatorProvider } from '@hooks/useCalculator'

export default {
  title: 'Calculator/Input',
  component: CalculatorInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <CalculatorProvider>
        <Story />
      </CalculatorProvider>
    )
  ]
}

const Template = (args) => <CalculatorInput {...args} />

export const Digit = Template.bind({})
Digit.args = {
  value: '5'
}

export const Operator = Template.bind({})
Operator.args = {
  value: '+'
}

export const Special = Template.bind({})
Special.args = {
  value: 'CE'
}
