import React from 'react'
import { Work } from './Work'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Work', () => {
  it('should show the first three work items before the user clicks the show all button', () => {
    render(<Work />)

    expect(screen.queryAllByTestId('work-item').length).toEqual(3)
  })

  it('should show all work items after the user clicks the show all button', async () => {
    render(<Work />)

    fireEvent.click(screen.getByTestId('show-all-button'))

    expect(screen.queryAllByTestId('work-item').length).toBeGreaterThan(3)
  })
})
