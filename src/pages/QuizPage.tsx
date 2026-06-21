import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import { gamePage } from '../i18n/strings/quiz'
import { common } from '../i18n/strings/common'
import { PageHeader, PageFooter } from '../components/PageChrome'
import { CtaBox } from '../components/CtaBox'
import { Quiz } from '../components/games/Quiz'
import { MemoryMatch } from '../components/games/MemoryMatch'
import styles from './QuizPage.module.css'

type Game = 'quiz' | 'memory'

export function QuizPage() {
  const t = useT()
  const [game, setGame] = useState<Game>('quiz')

  return (
    <>
      <PageHeader title={t(gamePage.title)} subtitle={t(gamePage.subtitle)} />

      <main>
        <div className={styles.safeNotice}>
          <span className={styles.dot} aria-hidden="true" />
          <span>
            <strong>{t(gamePage.safeNoticeStrong)}</strong>
            {t(gamePage.safeNoticeRest)}
          </span>
        </div>

        <div className={styles.tabs}>
          <button
            type="button"
            className={game === 'quiz' ? styles.active : undefined}
            aria-pressed={game === 'quiz'}
            onClick={() => setGame('quiz')}
          >
            {t(gamePage.tabQuiz)}
          </button>
          <button
            type="button"
            className={game === 'memory' ? styles.active : undefined}
            aria-pressed={game === 'memory'}
            onClick={() => setGame('memory')}
          >
            {t(gamePage.tabMemory)}
          </button>
        </div>

        {game === 'quiz' ? <Quiz /> : <MemoryMatch />}

        <p className={styles.backWrap}>
          <Link to="/info" className={styles.backLink}>
            {t(gamePage.backLink)}
          </Link>
        </p>

        <CtaBox heading={t(gamePage.ctaHeading)}>
          <p>{t(gamePage.ctaBody)}</p>
        </CtaBox>
      </main>

      <PageFooter>{t(common.footer.quiz)}</PageFooter>
    </>
  )
}
