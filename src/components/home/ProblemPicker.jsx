import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { PROBLEMS } from '../../data/site'

export default function ProblemPicker() {
  const [i, setI] = useState(0)
  const p = PROBLEMS[i]
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading light eyebrow="Where does it hurt?" title="Pick a problem. See how Aureon fixes it." />
        <div className="problems">
          <div className="problems__chips">
            {PROBLEMS.map((x, n) => (
              <button key={x.chip} className={`pchip ${n === i ? 'is-active' : ''}`} onClick={() => setI(n)}>{x.chip}</button>
            ))}
          </div>
          <article className="problems__card">
            <div className="problems__img" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="problems__body">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ol>{p.steps.map((s) => <li key={s}>{s}</li>)}</ol>
              <ul className="pills pills--dark">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
