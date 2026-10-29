import { useEffect, useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { DYNAMICS } from '../../data/pages'

const { steps, facts, sample } = DYNAMICS.zatca

export default function ZatcaFlow() {
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return undefined
    const t = setInterval(() => {
      setI((n) => {
        if (n >= steps.length - 1) { setPlaying(false); return n }
        return n + 1
      })
    }, 1600)
    return () => clearInterval(t)
  }, [playing])

  const play = () => { setI(0); setPlaying(true) }
  const s = steps[i]

  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading light eyebrow="ZATCA Phase 2 integration" title="Follow one invoice from posting to clearance." width="10.5em" lead="Click each step, or press play." />
        <ol className="zsteps">
          {steps.map((x, n) => (
            <li key={x.n}>
              <button className={`${n === i ? 'is-active' : ''} ${n < i ? 'is-done' : ''}`} onClick={() => { setPlaying(false); setI(n) }}>
                <small>{x.n.toUpperCase()}</small><strong>{x.t}</strong>
              </button>
            </li>
          ))}
        </ol>
        <div className="zprogress" aria-hidden><span style={{ width: `${((i + 1) / steps.length) * 100}%` }} /></div>
        <div className="zdetail">
          <div>
            <h3>{s.title}</h3>
            <p>{s.d}</p>
            <button className="btn btn--primary" onClick={play} disabled={playing}>{playing ? 'Playing…' : '▶ Play the flow'}</button>
          </div>
          <pre className="zcode" aria-label="Sample output">{s.lines.join('\n')}</pre>
        </div>
        <div className="zfacts">
          {facts.map(([k, t]) => <p key={k}><b>{k}</b>{t}</p>)}
        </div>
        <small className="source source--light">{sample}</small>
      </div>
    </section>
  )
}
