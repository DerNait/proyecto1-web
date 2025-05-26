/* eslint-env jest */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calculator from '../components/Calculator'
import { CalculatorProvider } from '../hooks/useCalculator'

test('La calculadora muestra error al pasar de 999999999', () => {
  render(
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  )
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '+' }))
  fireEvent.click(screen.getByRole('button', { name: '1' }))
  fireEvent.click(screen.getByRole('button', { name: '=' }))

  expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
})

test('La calculadora muestra error al dividir entre 0', () => {
  render(
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  )
  fireEvent.click(screen.getByRole('button', { name: '1' }))
  fireEvent.click(screen.getByRole('button', { name: '÷' }))
  fireEvent.click(screen.getByRole('button', { name: '0' }))
  fireEvent.click(screen.getByRole('button', { name: '=' }))

  expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
})

test('La calculadora muestra solo 9 digitos con divisiones de muchos decimales', () => {
  render(
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  )
  fireEvent.click(screen.getByRole('button', { name: '1' }))
  fireEvent.click(screen.getByRole('button', { name: '2' }))
  fireEvent.click(screen.getByRole('button', { name: '3' }))
  fireEvent.click(screen.getByRole('button', { name: '4' }))
  fireEvent.click(screen.getByRole('button', { name: '÷' }))
  fireEvent.click(screen.getByRole('button', { name: '7' }))
  fireEvent.click(screen.getByRole('button', { name: '=' }))

  expect(screen.getByTestId('display')).toHaveTextContent('176.28571')
})

test('La calculadora muestra error si el resultado da negativo', () => {
  render(
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  )
  fireEvent.click(screen.getByRole('button', { name: '5' }))
  fireEvent.click(screen.getByRole('button', { name: '-' }))
  fireEvent.click(screen.getByRole('button', { name: '6' }))
  fireEvent.click(screen.getByRole('button', { name: '=' }))

  expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
})

test('La calculadora muestra error si un numero de 9 caracteres se intenta volver negativo', () => {
  render(
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  )
  fireEvent.click(screen.getByRole('button', { name: '1' }))
  fireEvent.click(screen.getByRole('button', { name: '2' }))
  fireEvent.click(screen.getByRole('button', { name: '3' }))
  fireEvent.click(screen.getByRole('button', { name: '4' }))
  fireEvent.click(screen.getByRole('button', { name: '5' }))
  fireEvent.click(screen.getByRole('button', { name: '6' }))
  fireEvent.click(screen.getByRole('button', { name: '7' }))
  fireEvent.click(screen.getByRole('button', { name: '8' }))
  fireEvent.click(screen.getByRole('button', { name: '9' }))
  fireEvent.click(screen.getByRole('button', { name: '+/-' }))

  expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
})
