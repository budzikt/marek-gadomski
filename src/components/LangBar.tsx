import { useLanguage, useT } from '../i18n/useT'
import { SUPPORTED, type Lang } from '../i18n/types'
import { common } from '../i18n/strings/common'
import styles from './LangBar.module.css'

const LABELS: Record<Lang, string> = { pl: 'PL', en: 'ENG', de: 'DE' }

export function LangBar() {
  const { lang, setLang } = useLanguage()
  const t = useT()

  return (
    <div className={styles.bar}>
      <span className={styles.label}>{t(common.langLabel)}</span>
      {SUPPORTED.map((code) => (
        <button
          key={code}
          type="button"
          className={code === lang ? styles.active : undefined}
          aria-pressed={code === lang}
          onClick={() => setLang(code)}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  )
}
