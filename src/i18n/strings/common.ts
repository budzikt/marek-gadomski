import type { L10n } from '../types'

export const common = {
  langLabel: { pl: 'Język', en: 'Language', de: 'Sprache' },

  nav: {
    story: { pl: 'Historia Marka', en: "Marek's Story", de: 'Mareks Geschichte' },
    info: { pl: 'O padaczce i pierwsza pomoc', en: 'Epilepsy & First Aid', de: 'Epilepsie & Erste Hilfe' },
    quiz: { pl: 'Quiz pierwszej pomocy', en: 'First-Aid Quiz', de: 'Erste-Hilfe-Quiz' },
  },

  donate: {
    pl: 'Wpłać na zrzutka.pl',
    en: 'Donate via zrzutka.pl',
    de: 'Spenden via zrzutka.pl',
  } as L10n,

  footer: {
    story: {
      pl: 'Zbiórka na leczenie Marka Gadomskiego · Brno Epilepsy Center · 2026',
      en: "Fundraiser for Marek Gadomski's treatment · Brno Epilepsy Center · 2026",
      de: 'Spendensammlung für die Behandlung von Marek Gadomski · Brünn Epilepsiezentrum · 2026',
    },
    info: {
      pl: 'Materiał informacyjny — nie zastępuje porady lekarskiej · Zbiórka dla Marka Gadomskiego · 2026',
      en: 'Informational material — not a substitute for medical advice · Fundraiser for Marek Gadomski · 2026',
      de: 'Informationsmaterial — kein Ersatz für ärztlichen Rat · Spendensammlung für Marek Gadomski · 2026',
    },
    quiz: {
      pl: 'Quiz edukacyjny — nie zastępuje szkolenia z pierwszej pomocy · Zbiórka dla Marka Gadomskiego · 2026',
      en: 'Educational quiz — not a substitute for first-aid training · Fundraiser for Marek Gadomski · 2026',
      de: 'Lernquiz — kein Ersatz für eine Erste-Hilfe-Ausbildung · Spendensammlung für Marek Gadomski · 2026',
    },
  },
} as const

export const DONATE_URL = 'https://zrzutka.pl/4y66vs'
export const DONATE_LABEL = 'zrzutka.pl/4y66vs'
