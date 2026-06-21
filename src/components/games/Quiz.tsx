import { useRef, useState } from 'react'
import { useT } from '../../i18n/useT'
import { QUESTIONS, quizUI, verdict, blurb } from '../../i18n/strings/quiz'
import styles from './Quiz.module.css'

export function Quiz() {
  const t = useT()
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [chosen, setChosen] = useState<number | null>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  const finished = index >= QUESTIONS.length

  function choose(optIdx: number) {
    if (chosen !== null) return
    setChosen(optIdx)
    if (QUESTIONS[index].options[optIdx].correct) setScore((s) => s + 1)
  }

  function next() {
    setChosen(null)
    setIndex((i) => i + 1)
    // Scroll the freshly rendered question into view, matching the original.
    requestAnimationFrame(() => {
      if (typeof stageRef.current?.scrollIntoView === 'function') {
        stageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  function restart() {
    setIndex(0)
    setScore(0)
    setChosen(null)
  }

  if (finished) {
    const total = QUESTIONS.length
    return (
      <div className={`${styles.stage} ${styles.result}`} ref={stageRef}>
        <div className={styles.progress}>{t(quizUI.yourScore)}</div>
        <span className={styles.score}>
          {score} / {total}
        </span>
        <p className={styles.verdict}>{t(verdict(score, total))}</p>
        <p className={styles.blurb}>{t(blurb)}</p>
        <button type="button" className={styles.restart} onClick={restart}>
          {t(quizUI.again)}
        </button>
      </div>
    )
  }

  const q = QUESTIONS[index]
  const total = QUESTIONS.length
  const pct = Math.round((index / total) * 100)
  const isLast = index === total - 1

  return (
    <div className={styles.stage} ref={stageRef}>
      <div className={styles.progress}>
        {t(quizUI.question)} {index + 1} {t(quizUI.of)} {total}
      </div>
      <div className={styles.bar}>
        <span style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.scenario}>{t(q.q)}</div>

      <div className={styles.options}>
        {q.options.map((opt, i) => {
          let cls = styles.option
          if (chosen !== null) {
            if (opt.correct) cls += ` ${styles.correct}`
            else if (i === chosen) cls += ` ${styles.wrong}`
          }
          return (
            <button key={i} type="button" className={cls} disabled={chosen !== null} onClick={() => choose(i)}>
              {t(opt.text)}
            </button>
          )
        })}
      </div>

      {chosen !== null && (
        <>
          <div className={`${styles.feedback} ${q.options[chosen].correct ? styles.good : styles.bad}`}>
            {t(q.options[chosen].why)}
          </div>
          <button type="button" className={styles.next} onClick={next}>
            {isLast ? t(quizUI.seeScore) : t(quizUI.next)}
          </button>
        </>
      )}
    </div>
  )
}
