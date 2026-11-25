import { useState } from 'react'
import { ArrowUpRight, Code2, ExternalLink, ShieldCheck } from 'lucide-react'

type Phase = 'overview' | 'migration'

export default function App() {
  const [phase, setPhase] = useState<Phase>('overview')

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand-mark"><span>SAI SARAVANA</span><b>TURF</b></div>
        <div className="topbar-right"><span className="status-dot" /> Admin UI · Phase 1</div>
      </header>

      <section className="intro">
        <div>
          <p className="eyebrow">ADMIN PANEL DEVELOPMENT</p>
          <h1>One ground.<br /><em>One control room.</em></h1>
          <p className="intro-copy">The admin React workspace is being prepared separately from the customer website. The existing root website remains unchanged.</p>
          <div className="actions">
            <button className={phase === 'overview' ? 'active' : ''} onClick={() => setPhase('overview')}>Project overview</button>
            <button className={phase === 'migration' ? 'active' : ''} onClick={() => setPhase('migration')}>React migration status</button>
          </div>
        </div>
        <aside className="status-card">
          <div className="status-icon"><ShieldCheck size={21} /></div>
          <strong>Design direction retained</strong>
          <span>Charcoal · Bone · Red</span>
          <small>Production data is not connected yet.</small>
        </aside>
      </section>

      {phase === 'overview' ? (
        <section className="preview-wrap">
          <div className="preview-heading"><div><b>Admin workspace · Phase 1</b><small>React scaffold checkpoint</small></div><a href="https://github.com/Moganrajsj/sai-saravana-turf/tree/admin-phase1/admin" target="_blank" rel="noreferrer">View source <ExternalLink size={14} /></a></div>
          <div className="overview-content">
            <div className="overview-icon"><Code2 size={28} /></div>
            <h2>React foundation created</h2>
            <p>The original admin design reference is retained in the downloadable Phase 1 package. This Git branch contains the isolated React app scaffold so it does not overwrite the customer-facing website.</p>
            <p className="notice">Not production-ready: screens, API integration, database, and admin authentication are still pending.</p>
          </div>
        </section>
      ) : (
        <section className="migration-grid">
          <article><Code2 /><b>React + Vite + TypeScript</b><span>Project scaffold created with a typed React entry point and build configuration.</span></article>
          <article><ShieldCheck /><b>Customer site protected</b><span>The admin app lives in its own directory; the existing root index.html is unchanged.</span></article>
          <article><ArrowUpRight /><b>Next migration step</b><span>Convert the sidebar, topbar and dashboard widgets into native React components, then migrate each module.</span></article>
        </section>
      )}
      <footer>SAI SARAVANA TURF <span>·</span> ADMIN EXPERIENCE</footer>
    </main>
  )
}