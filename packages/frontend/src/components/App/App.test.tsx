import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from './App'

describe('<App />', () => {
    test('it should mount', () => {
        render(<App />)

        const AppInstance = screen.getByTestId('App')

        expect(AppInstance).toBeInTheDocument()
    })
})
