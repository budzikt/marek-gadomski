import { useT } from '../i18n/useT'
import { common, DONATE_URL } from '../i18n/strings/common'
import zrzutkaLogo from '../assets/img_zrzutka.svg'
import styles from './DonateButton.module.css'

interface Props {
  /** Show the small "zrzutka.pl/4y66vs" url line under the button. */
  showUrl?: boolean
  className?: string
}

export function DonateButton({ showUrl = true, className }: Props) {
  const t = useT()
  return (
    <>
      <a
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className ? `${styles.btn} ${className}` : styles.btn}
      >
        <img src={zrzutkaLogo} alt="" className={styles.logo} />
        {t(common.donate)}
      </a>
      {showUrl && <p className={styles.url}>zrzutka.pl/4y66vs</p>}
    </>
  )
}
