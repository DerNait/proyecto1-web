import React from 'react'
import CalculatorScreen from '@components/CalculatorScreen'

export default {
  title: 'Calculator/Screen',
  component: CalculatorScreen,
  tags: ['autodocs']
}

const Template = (args) => <CalculatorScreen {...args} />

export const Empty = Template.bind({})
Empty.args = {
  input: ''
}

export const WithValue = Template.bind({})
WithValue.args = {
  input: '123.45'
}
