import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { ENERGY } from '../../data/pages'
import { img } from '../../data/site'

export default function SolarHotspots() {
  const [n, setN] = useState(1)
  const h = ENERGY.hotspots.find((x) => x.n === n)
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Interactive" title="Tap the points to see what we connect on a solar site." />
        <div className="solar" style={{ backgroundImage: `url(${img('solar-site')})` }}>
          {ENERGY.hotspots.map((p) => (
            <button key={p.n} className={`dot ${p.n === n ? 'is-active' : ''}`} style={{ left: `${p.x}%`, top: `${p.y}%` }} onClick={() => setN(p.n)} aria-label={`Point ${p.n}: ${p.title}`}>{p.n}</button>
          ))}
          <div className="solar__card">
            <small>POINT {h.n}</small>
            <strong>{h.title}</strong>
            <p>{h.text}</p>
          </div>
          <span className="solar__hint">Tap a number</span>
        </div>
      </div>
    </section>
  )
}
