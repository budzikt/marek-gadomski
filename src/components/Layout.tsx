import type { ReactNode } from 'react'
import { LangBar } from './LangBar'
import { SiteNav } from './SiteNav'
import { FloatingCta } from './FloatingCta'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <LangBar />
      <SiteNav />
      <FloatingCta />
      {children}
    </>
  )
}
