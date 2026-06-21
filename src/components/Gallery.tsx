import { useCallback, useEffect, useState } from 'react'
import styles from './Gallery.module.css'

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const show = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') show(1)
      else if (e.key === 'ArrowLeft') show(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [openIndex, close, show])

  const current = openIndex === null ? null : images[openIndex]

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <figure key={img.src} className={styles.cell}>
            <button type="button" className={styles.thumbBtn} onClick={() => setOpenIndex(i)}>
              <img src={img.src} alt={img.alt} className={styles.thumb} />
            </button>
            {img.caption && <figcaption className={styles.caption}>{img.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {current && (
        <div className={styles.overlay} onClick={close} role="dialog" aria-modal="true">
          <button type="button" className={styles.close} aria-label="Close" onClick={close}>
            ×
          </button>
          {images.length > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.prev}`}
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation()
                show(-1)
              }}
            >
              ‹
            </button>
          )}
          <figure className={styles.stage} onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} className={styles.full} />
            {current.caption && <figcaption className={styles.fullCaption}>{current.caption}</figcaption>}
          </figure>
          {images.length > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.next}`}
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation()
                show(1)
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  )
}
