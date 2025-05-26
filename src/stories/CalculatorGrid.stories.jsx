import React from 'react'
import CalculatorGrid from '@components/CalculatorGrid'
import { CalculatorProvider } from '@hooks/useCalculator'

export default {
  title: 'Calculator/Grid',
  component: CalculatorGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <CalculatorProvider>
        <Story />
      </CalculatorProvider>
    )
  ]
}

export const Default = () => <CalculatorGrid />
