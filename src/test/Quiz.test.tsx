import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider } from '../i18n/LanguageProvider'
import { Quiz } from '../components/games/Quiz'
import { QUESTIONS, quizUI } from '../i18n/strings/quiz'

function renderQuiz() {
  return render(
    <LanguageProvider>
      <Quiz />
    </LanguageProvider>,
  )
}

// Answer every question correctly by clicking the option flagged `correct`.
async function answerAllCorrect(user: ReturnType<typeof userEvent.setup>) {
  for (let i = 0; i < QUESTIONS.length; i++) {
    const correct = QUESTIONS[i].options.find((o) => o.correct)!
    await user.click(screen.getByRole('button', { name: correct.text.pl }))
    const isLast = i === QUESTIONS.length - 1
    await user.click(screen.getByRole('button', { name: isLast ? quizUI.seeScore.pl : quizUI.next.pl }))
  }
}

describe('Quiz', () => {
  beforeEach(() => localStorage.clear())

  it('shows the first question and a progress counter', () => {
    renderQuiz()
    expect(screen.getByText(QUESTIONS[0].q.pl)).toBeInTheDocument()
    expect(screen.getByText(`Pytanie 1 z ${QUESTIONS.length}`)).toBeInTheDocument()
  })

  it('reveals feedback after answering and locks further choices', async () => {
    const user = userEvent.setup()
    renderQuiz()
    const wrong = QUESTIONS[0].options.find((o) => !o.correct)!
    await user.click(screen.getByRole('button', { name: wrong.text.pl }))
    expect(screen.getByText(wrong.why.pl)).toBeInTheDocument()
    // All option buttons are disabled once a choice is made.
    QUESTIONS[0].options.forEach((o) => {
      expect(screen.getByRole('button', { name: o.text.pl })).toBeDisabled()
    })
  })

  it('scores a perfect run', async () => {
    const user = userEvent.setup()
    renderQuiz()
    await answerAllCorrect(user)
    expect(screen.getByText(`${QUESTIONS.length} / ${QUESTIONS.length}`)).toBeInTheDocument()
  })

  it('restarts back to the first question', async () => {
    const user = userEvent.setup()
    renderQuiz()
    await answerAllCorrect(user)
    await user.click(screen.getByRole('button', { name: quizUI.again.pl }))
    expect(screen.getByText(`Pytanie 1 z ${QUESTIONS.length}`)).toBeInTheDocument()
  })
})
