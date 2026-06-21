import { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'
import type { Lang, L10n } from './types'

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

/**
 * Returns a translator bound to the current language.
 * `t(entry)` picks the active language, falling back to Polish (mirrors the original site).
 */
export function useT() {
  const { lang } = useLanguage()
  return function t<T>(entry: L10n<T>): T {
    return entry[lang] != null ? entry[lang] : entry.pl
  }
}

export type { Lang, L10n }
