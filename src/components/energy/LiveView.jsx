import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { ENERGY } from '../../data/pages'

const { sites, bullets } = ENERGY.live
const TITLES = { 'Riyadh HQ': 'Riyadh HQ · building load', 'Jeddah plant': 'Jeddah plant · process load', 'Solar site': 'Solar site · generation' }

function Chart({ data }) {
  const w = 400, h = 140
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - (v / 100) * h}`)
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="lchart" preserveAspectRatio="none" role="img" aria-label="Load over the last 24 hours">
      <polygon points={`0,${h} ${pts.join(' ')} ${w},${h}`} fill="rgba(108,192,74,.35)" />
      <polyline points={pts.join(' ')} fill="none" stroke="#6cc04a" strokeWidth="2" />
    </svg>
  )
}

export default function LiveView() {
  const names = Object.keys(sites)
  const [n, setN] = useState(names[0])
  const s = sites[n]
  return (
    <section className="section section--dark">
      <div className="container live">
        <div>
          <SectionHeading light eyebrow="From field to boardroom" title="One live view of every site."
            lead="Switch sites to see the kind of dashboard your engineers and executives get. Data streams from meters, sensors and inverters through a secured network into Power BI." />
          <ul className="ticks ticks--light">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
        <div className="dash">
          <div className="dash__top">
            <strong>{TITLES[n] || n}</strong>
            <div>{names.map((x) => <button key={x} className={x === n ? 'is-active' : ''} onClick={() => setN(x)}>{x}</button>)}</div>
          </div>
          <Chart data={s.data} />
          <div className="lchart__axis"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
          <div className="dash__kpis">
            <div><b>{s.now}</b><small>Current demand</small></div>
            <div><b>{s.delta}</b><small>{s.delta2}</small></div>
            <div><b>{s.cooling}</b><small>Cooling share</small></div>
          </div>
          <small className="source source--light">Simulated data</small>
        </div>
      </div>
    </section>
  )
}
