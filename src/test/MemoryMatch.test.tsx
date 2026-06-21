import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider } from '../i18n/LanguageProvider'
import { MemoryMatch } from '../components/games/MemoryMatch'

function renderGame() {
  return render(
    <LanguageProvider>
      <MemoryMatch />
    </LanguageProvider>,
  )
}

describe('MemoryMatch', () => {
  it('renders 16 cards (8 pairs), all face down', () => {
    renderGame()
    // Every card shows "?" while face down; restart button is the only non-card button.
    const cards = screen.getAllByRole('button').filter((b) => b.textContent === '?')
    expect(cards).toHaveLength(16)
    expect(screen.getByText('0/8')).toBeInTheDocument()
  })

  it('flips a card face up on click and counts no move yet', async () => {
    const user = userEvent.setup()
    renderGame()
    const cards = screen.getAllByRole('button').filter((b) => b.textContent === '?')
    await user.click(cards[0])
    // One fewer face-down card after a single flip.
    const stillDown = screen.getAllByRole('button').filter((b) => b.textContent === '?')
    expect(stillDown).toHaveLength(15)
    expect(screen.getByText('0', { selector: 'strong' })).toBeInTheDocument()
  })
})
