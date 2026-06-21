import type { ReactNode } from 'react'

export type Lang = 'pl' | 'en' | 'de'

export const SUPPORTED: Lang[] = ['pl', 'en', 'de']

/** A localized value keyed by language. T is usually `string`, but can be a ReactNode
 *  for rich paragraphs that contain links or emphasis. */
export type L10n<T = string> = Record<Lang, T>

export type LocalizedNode = L10n<ReactNode>
