import { useEffect, useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { SUPPORTOS } from '../../data/pages'

const { kpis, tickets: seed, views } = SUPPORTOS.demo
const SLA_SECONDS = { P1: 3600, P2: 14400, P3: 28800, P4: 86400 }
const fmt = (s) => (s >= 3600 ? `${Math.floor(s / 3600)}h ${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}m left` : `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')} left`)

export default function PortalDemo() {
  const [view, setView] = useState('Dashboard')
  const [tickets, setTickets] = useState(seed)
  const [issue, setIssue] = useState('')
  const [prio, setPrio] = useState('P2')
  const [live, setLive] = useState(null) // newest ticket: { id, left }

  useEffect(() => {
    if (!live) return undefined
    const t = setInterval(() => setLive((l) => (l && l.left > 0 ? { ...l, left: l.left - 1 } : l)), 1000)
    return () => clearInterval(t)
  }, [live?.id])

  const submit = (e) => {
    e.preventDefault()
    if (!issue.trim()) return
    const id = `#${4822 + tickets.length - seed.length}`
    setTickets([{ id, issue: issue.trim(), p: prio, site: 'Riyadh HQ', sla: 'live' }, ...tickets])
    setLive({ id, left: SLA_SECONDS[prio] })
    setIssue('')
    setView('Tickets')
  }

  const open = tickets.filter((t) => t.sla !== 'Resolved').length
  const rows = view === 'Dashboard' ? tickets.slice(0, 5) : tickets

  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading light eyebrow="Live demo" title="Click around the SupportOS portal." lead="Switch views in the sidebar, then raise a test ticket and watch its SLA timer start." />
        <div className="portal">
          <div className="portal__bar"><i /><i /><i /><span>portal.supportos / {view.toLowerCase()}</span><b>● LIVE</b></div>
          <div className="portal__body">
            <aside className="portal__side">
              <strong>Support<span>OS</span></strong>
              {views.map((v) => (
                <button key={v} className={v === view ? 'is-active' : ''} onClick={() => setView(v)}>
                  {v}{v === 'Tickets' && <em>{open}</em>}
                </button>
              ))}
            </aside>
            <div className="portal__main">
              {view === 'Assets' || view === 'Monitoring' ? (
                <p className="portal__empty">{view === 'Assets' ? '312 managed assets across 9 sites. Warranty, patch level and owner tracked per device.' : 'All 41 monitored services healthy. 2 warnings: NVR storage (Dammam), UPS battery (Riyadh).'}</p>
              ) : (
                <>
                  <div className="portal__kpis">
                    {kpis.map(([n, l], i) => <div key={l}><strong>{i === 0 ? open : n}</strong><small>{l}</small></div>)}
                  </div>
                  <form className="portal__new" onSubmit={submit}>
                    <label>Raise a test ticket<input value={issue} onChange={(e) => setIssue(e.target.value)} placeholder="Teams calls dropping in meeting room 3" /></label>
                    <label>Priority
                      <select value={prio} onChange={(e) => setPrio(e.target.value)}>
                        <option value="P1">P1 Critical</option><option value="P2">P2 High</option><option value="P3">P3 Normal</option><option value="P4">P4 Low</option>
                      </select>
                    </label>
                    <button className="btn btn--dark">Submit</button>
                  </form>
                  <table className="portal__table">
                    <thead><tr><th>ID</th><th>Issue</th><th>Priority</th><th>Site</th><th>SLA</th></tr></thead>
                    <tbody>
                      {rows.map((t) => (
                        <tr key={t.id}>
                          <td>{t.id}</td><td>{t.issue}</td>
                          <td><span className={`prio prio--${t.p}`}>{t.p}</span></td>
                          <td>{t.site}</td>
                          <td className={t.p === 'P1' && t.sla !== 'Resolved' ? 'late' : 'ok'}>{live && live.id === t.id ? fmt(live.left) : t.sla === 'live' ? '' : t.sla}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
        </div>
        <small className="source source--light">Illustrative interface with sample data</small>
      </div>
    </section>
  )
}
