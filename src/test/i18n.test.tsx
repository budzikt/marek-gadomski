import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from '../i18n/LanguageProvider'
import { LangBar } from '../components/LangBar'
import { SiteNav } from '../components/SiteNav'

function renderChrome() {
  return render(
    <LanguageProvider>
      <MemoryRouter>
        <LangBar />
        <SiteNav />
      </MemoryRouter>
    </LanguageProvider>,
  )
}

describe('language switching', () => {
  beforeEach(() => localStorage.clear())

  it('defaults to Polish', () => {
    renderChrome()
    expect(screen.getByRole('link', { name: 'Historia Marka' })).toBeInTheDocument()
  })

  it('switches all content to English and persists the choice', async () => {
    const user = userEvent.setup()
    renderChrome()
    await user.click(screen.getByRole('button', { name: 'ENG' }))

    expect(screen.getByRole('link', { name: "Marek's Story" })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Historia Marka' })).not.toBeInTheDocument()
    expect(localStorage.getItem('marek-lang')).toBe('en')
  })

  it('switches to German', async () => {
    const user = userEvent.setup()
    renderChrome()
    await user.click(screen.getByRole('button', { name: 'DE' }))
    expect(screen.getByRole('link', { name: 'Mareks Geschichte' })).toBeInTheDocument()
  })

  it('restores the stored language on mount', () => {
    localStorage.setItem('marek-lang', 'de')
    renderChrome()
    expect(screen.getByRole('link', { name: 'Mareks Geschichte' })).toBeInTheDocument()
  })
})
