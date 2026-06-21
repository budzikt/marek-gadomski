import { useT } from '../i18n/useT'
import { story } from '../i18n/strings/story'
import { common } from '../i18n/strings/common'
import { PageHeader, PageFooter } from '../components/PageChrome'
import { Gallery, type GalleryImage } from '../components/Gallery'
import { CtaBox } from '../components/CtaBox'
import styles from './StoryPage.module.css'

import goodImg from '../assets/good.jpeg'
import runImg from '../assets/run.jpg'
import hurtImg from '../assets/hurt.jpeg'
import hurt1Img from '../assets/hurt1.jpeg'
import hurt2Img from '../assets/hurt2.jpeg'
import hurt3Img from '../assets/hurt3.jpeg'
import hurt4Img from '../assets/hurt4.jpeg'

export function StoryPage() {
  const t = useT()

  const goodPhotos: GalleryImage[] = [
    { src: goodImg, alt: 'Marek — dobry okres' },
    { src: runImg, alt: 'Marek — aktywny' },
  ]
  const caption = t(story.hurtCaption)
  const hurtPhotos: GalleryImage[] = [hurtImg, hurt1Img, hurt2Img, hurt3Img, hurt4Img].map((src) => ({
    src,
    alt: 'Po napadzie / post-seizure',
    caption,
  }))

  return (
    <>
      <PageHeader title={t(story.title)} subtitle={t(story.subtitle)} />

      <main>
        <div className={styles.narrator}>{t(story.narrator)}</div>

        <section>
          <h2>{t(story.storyHeading)}</h2>
          {t(story.storyBody)}
        </section>

        <section>
          <h2>{t(story.goodHeading)}</h2>
          <div className={styles.sectionGood}>
            <span className={`${styles.badge} ${styles.badgeGood}`}>{t(story.goodBadge)}</span>
            <Gallery images={goodPhotos} />
          </div>
        </section>

        <section>
          <h2>{t(story.hurtHeading)}</h2>
          <div className={styles.sectionHurt}>
            <span className={`${styles.badge} ${styles.badgeHurt}`}>{t(story.hurtBadge)}</span>
            <p>{t(story.hurtIntro)}</p>
            <Gallery images={hurtPhotos} />
          </div>
        </section>

        <section>
          <h2>{t(story.techHeading)}</h2>
          {t(story.techBody)}
        </section>

        <section>
          <h2>{t(story.costHeading)}</h2>
          <p>{t(story.costIntro)}</p>

          <div className={styles.costBox}>
            <table>
              <thead>
                <tr>
                  <th>{t(story.costColItem)}</th>
                  <th style={{ textAlign: 'right' }}>EUR</th>
                  <th style={{ textAlign: 'right' }}>CZK</th>
                  <th style={{ textAlign: 'right' }}>PLN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t(story.costRows.total)}</td>
                  <td className={styles.amount}>50 000</td>
                  <td className={styles.amount}>1 245 000</td>
                  <td className={styles.amount}>217 000</td>
                </tr>
                <tr>
                  <td>{t(story.costRows.prepay)}</td>
                  <td className={styles.amount}>10 800</td>
                  <td className={styles.amount}>270 000</td>
                  <td className={styles.amount}>47 000</td>
                </tr>
                <tr>
                  <td>{t(story.costRows.stay)}</td>
                  <td className={styles.amount}>—</td>
                  <td className={styles.amount}>—</td>
                  <td className={styles.amount}>{t(story.tbd)}</td>
                </tr>
                <tr className={styles.total}>
                  <td>{t(story.costRows.goal)}</td>
                  <td className={styles.amount}>50 000</td>
                  <td className={styles.amount}>1 245 000</td>
                  <td className={styles.amount}>217 000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.transparency}>
            <strong>{t(story.transparencyTitle)}</strong>
            <br />
            {t(story.transparencyBody)}
          </div>
        </section>

        <section>
          <h2>{t(story.supportHeading)}</h2>
          <div className={styles.widget}>
            <div className={styles.widgetInner}>
              <iframe
                className={styles.widgetFrame}
                src="https://zrzutka.pl/4y66vs/widget/23"
                title={t(common.donate)}
                scrolling="no"
              />
            </div>
          </div>
        </section>

        <CtaBox heading={t(story.ctaHeading)}>
          <p>{t(story.ctaBody)}</p>
          <p className="cta-kicker">{t(story.ctaKicker)}</p>
        </CtaBox>
      </main>

      <PageFooter>{t(common.footer.story)}</PageFooter>
    </>
  )
}
