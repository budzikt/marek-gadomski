import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { SUPPORTED, type Lang } from './types'

const LANG_KEY = 'marek-lang'

function readStoredLang(): Lang {
  let stored: string | null = null
  try {
    stored = localStorage.getItem(LANG_KEY)
  } catch {
    stored = null
  }
  return SUPPORTED.includes(stored as Lang) ? (stored as Lang) : 'pl'
}

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  const setLang = useCallback((next: Lang) => {
    const safe = SUPPORTED.includes(next) ? next : 'pl'
    setLangState(safe)
    try {
      localStorage.setItem(LANG_KEY, safe)
    } catch {
      /* storage unavailable — language still works for the session */
    }
  }, [])

  // Keep the document language in sync for assistive tech and CSS.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
