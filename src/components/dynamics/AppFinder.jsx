import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { DYNAMICS } from '../../data/pages'

const { finder } = DYNAMICS

function recommend(size, need) {
  if (need === 'Sales pipeline') return 'sales'
  if (need === 'Customer service') return 'cs'
  if (need === 'Manufacturing & supply chain' || size === '250+ / multi-entity') return 'fo'
  return 'bc'
}

export default function AppFinder() {
  const [size, setSize] = useState(finder.q1.options[0])
  const [need, setNeed] = useState(finder.q2.options[0])
  const r = finder.results[recommend(size, need)]

  const group = (q, value, set) => (
    <div className="finder__q">
      <p><span>{q.n}</span> {q.label}</p>
      <div className="finder__opts">
        {q.options.map((o) => <button key={o} className={`pchip pchip--light ${o === value ? 'is-active' : ''}`} onClick={() => set(o)}>{o}</button>)}
      </div>
    </div>
  )

  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Interactive" title="Which Dynamics 365 app fits you?" width="8.6em" lead="Answer two questions for a starting recommendation. We confirm it in a short fit assessment." />
        <div className="finder">
          <div className="finder__form">
            {group({ ...finder.q1, n: "Q1" }, size, setSize)}
            {group({ ...finder.q2, n: "Q2" }, need, setNeed)}
            <p className="muted">{finder.note}</p>
          </div>
          <div className="finder__result" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/finder-photo.jpg)` }}>
            <div>
              <small>RECOMMENDED</small>
              <h3>{r.name}</h3>
              <p>{r.text}</p>
              <ul>{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
