import { useCallback, useEffect, useState } from 'react'
import { useT } from '../../i18n/useT'
import { gamePage } from '../../i18n/strings/quiz'
import { DonateButton } from '../DonateButton'
import styles from './MemoryMatch.module.css'

// Purple (💜) nods to epilepsy awareness (Purple Day).
const SYMBOLS = ['🧠', '💜', '⏱️', '🛡️', '🤝', '➕', '🏥', '✋']

interface Card {
  id: number
  sym: string
  matched: boolean
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function freshDeck(): Card[] {
  return shuffle(SYMBOLS.concat(SYMBOLS).map((sym, i) => ({ id: i, sym, matched: false })))
}

export function MemoryMatch() {
  const t = useT()
  const [deck, setDeck] = useState<Card[]>(freshDeck)
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState(0)
  const [moves, setMoves] = useState(0)
  const [lock, setLock] = useState(false)

  const restart = useCallback(() => {
    setDeck(freshDeck())
    setFlipped([])
    setMatched(0)
    setMoves(0)
    setLock(false)
  }, [])

  // Resolve a pair once two cards are face up.
  useEffect(() => {
    if (flipped.length !== 2) return
    setMoves((m) => m + 1)
    const [a, b] = flipped
    if (deck[a].sym === deck[b].sym) {
      setDeck((d) => d.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c)))
      setMatched((m) => m + 1)
      setFlipped([])
    } else {
      setLock(true)
      const timer = setTimeout(() => {
        setFlipped([])
        setLock(false)
      }, 850)
      return () => clearTimeout(timer)
    }
  }, [flipped, deck])

  function flip(idx: number) {
    if (lock) return
    if (deck[idx].matched || flipped.includes(idx)) return
    if (flipped.length >= 2) return
    setFlipped((f) => [...f, idx])
  }

  const won = matched === SYMBOLS.length

  return (
    <>
      <div className={styles.meta}>
        <span>
          {t(gamePage.memPairs)} <strong>{matched}/{SYMBOLS.length}</strong>
          &nbsp;·&nbsp;
          {t(gamePage.memMoves)} <strong>{moves}</strong>
        </span>
        <button type="button" className={styles.restart} onClick={restart}>
          {t(gamePage.restart)}
        </button>
      </div>

      <div className={styles.grid}>
        {deck.map((card, idx) => {
          const isFlipped = flipped.includes(idx)
          let cls = styles.card
          if (card.matched) cls += ` ${styles.matched}`
          else if (isFlipped) cls += ` ${styles.flipped}`
          return (
            <button key={card.id} type="button" className={cls} onClick={() => flip(idx)}>
              {card.matched || isFlipped ? card.sym : <span className={styles.back} aria-hidden="true">?</span>}
            </button>
          )
        })}
      </div>

      {won && (
        <div className={`${styles.win} ${styles.winShow}`}>
          <p>
            <strong>{t(gamePage.memWinStrong)}</strong>
            {t(gamePage.memWinRest)}
          </p>
          <DonateButton showUrl={false} />
        </div>
      )}
    </>
  )
}
