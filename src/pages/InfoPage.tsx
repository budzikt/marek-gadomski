import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import { info } from '../i18n/strings/info'
import { common } from '../i18n/strings/common'
import { PageHeader, PageFooter } from '../components/PageChrome'
import { CtaBox } from '../components/CtaBox'
import styles from './InfoPage.module.css'

export function InfoPage() {
  const t = useT()

  return (
    <>
      <PageHeader title={t(info.title)} subtitle={t(info.subtitle)} />

      <main>
        <div className="lead">{t(info.lead)}</div>

        <section>
          <h2>{t(info.drugResistantHeading)}</h2>
          {t(info.drugResistantBody)}
        </section>

        <section>
          <h2>{t(info.vnsHeading)}</h2>
          <div className={styles.infoCard}>
            <p>{t(info.vnsBody)}</p>
          </div>
        </section>

        <section>
          <h2>{t(info.seizureHeading)}</h2>
          {t(info.seizureBody)}
        </section>

        <section>
          <h2>{t(info.firstAidHeading)}</h2>

          <div className={styles.aidGrid}>
            <div className={`${styles.aidCol} ${styles.aidDo}`}>
              <h3>{t(info.doTitle)}</h3>
              <ul>
                {t(info.doList).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.aidCol} ${styles.aidDont}`}>
              <h3>{t(info.dontTitle)}</h3>
              <ul>
                {t(info.dontList).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.callEmergency}>
            <h3>{t(info.emergencyTitle)}</h3>
            <span className={styles.enum}>112</span>
            <ul>
              {t(info.emergencyList).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2>{t(info.testHeading)}</h2>
          <p>{t(info.testBody)}</p>
          <p>
            <Link to="/quiz" className={styles.quizLink}>
              {t(info.testCta)}
            </Link>
          </p>
        </section>

        <CtaBox heading={t(info.ctaHeading)}>
          <p>{t(info.ctaBody)}</p>
        </CtaBox>
      </main>

      <PageFooter>{t(common.footer.info)}</PageFooter>
    </>
  )
}
