import React from 'react'

interface PageProps {
  children: React.ReactNode
}

export default function Page({children}: PageProps): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <span className="header-text">
          Psy(chic) Chess
        </span>
      </header>
      <main className="main">
        {children}
      </main>
    </div>
  )
}
