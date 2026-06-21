import { NavLink } from 'react-router-dom'
import { useT } from '../i18n/useT'
import { common } from '../i18n/strings/common'
import styles from './SiteNav.module.css'

export function SiteNav() {
  const t = useT()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.current}` : styles.link

  return (
    <nav className={styles.nav}>
      <NavLink to="/" end className={linkClass}>
        {t(common.nav.story)}
      </NavLink>
      <NavLink to="/info" className={linkClass}>
        {t(common.nav.info)}
      </NavLink>
      <NavLink to="/quiz" className={linkClass}>
        {t(common.nav.quiz)}
      </NavLink>
    </nav>
  )
}
