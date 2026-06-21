import type { ReactNode } from 'react'

export function PageHeader({ title, subtitle }: { title: ReactNode; subtitle: ReactNode }) {
  return (
    <header className="page-header" data-observe="header">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </header>
  )
}

export function PageFooter({ children }: { children: ReactNode }) {
  return <footer className="page-footer">{children}</footer>
}
