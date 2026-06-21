import type { ReactNode } from 'react'
import { DonateButton } from './DonateButton'
import styles from './CtaBox.module.css'

interface Props {
  heading: ReactNode
  children: ReactNode
}

export function CtaBox({ heading, children }: Props) {
  return (
    <div className={styles.box} data-observe="cta">
      <h2>{heading}</h2>
      {children}
      <DonateButton />
    </div>
  )
}
