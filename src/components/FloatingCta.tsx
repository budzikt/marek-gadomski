import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useT } from '../i18n/useT'
import { common, DONATE_URL } from '../i18n/strings/common'
import zrzutkaLogo from '../assets/img_zrzutka.svg'
import styles from './FloatingCta.module.css'

/**
 * Floating donate button shown only while neither the page header nor the bottom
 * CTA box is on screen — mirrors the original IntersectionObserver behaviour.
 * The observed elements are tagged via data attributes by the Layout / pages.
 */
export function FloatingCta() {
  const t = useT()
  const [visible, setVisible] = useState(false)
  const headerVisible = useRef(true)
  const bottomVisible = useRef(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const header = document.querySelector('[data-observe="header"]')
    const bottom = document.querySelector('[data-observe="cta"]')

    const update = () => setVisible(!headerVisible.current && !bottomVisible.current)

    const observers: IntersectionObserver[] = []

    if (header) {
      const o = new IntersectionObserver((entries) => {
        headerVisible.current = entries[0].isIntersecting
        update()
      }, { threshold: 0 })
      o.observe(header)
      observers.push(o)
    } else {
      headerVisible.current = false
    }

    if (bottom) {
      const o = new IntersectionObserver((entries) => {
        bottomVisible.current = entries[0].isIntersecting
        update()
      }, { threshold: 0.1 })
      o.observe(bottom)
      observers.push(o)
    } else {
      bottomVisible.current = false
    }

    update()
    return () => observers.forEach((o) => o.disconnect())
  }, [pathname])

  return (
    <div className={`${styles.float} ${visible ? '' : styles.hidden}`} aria-hidden={!visible}>
      <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" tabIndex={visible ? 0 : -1}>
        <img src={zrzutkaLogo} alt="" className={styles.logo} />
        {t(common.donate)}
      </a>
      <span className={styles.url}>zrzutka.pl/4y66vs</span>
    </div>
  )
}
