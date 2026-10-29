import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { METHOD } from '../../data/site'

export default function MethodSteps() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="How we deliver" title="Assess, Architect, Activate, Assure." />
        <div className="method">
          <ol className="method__list">
            {METHOD.steps.map(([t, d, r], i) => (
              <li key={t} className={open === i ? 'is-open' : ''}>
                <button onClick={() => setOpen(i)}>
                  <span className="method__num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{t}</strong>
                </button>
                <div className="method__more">
                  {open === i && <p>{d}</p>}
                  <code>{r}</code>
                </div>
              </li>
            ))}
          </ol>
          <div className="method__img" style={{ backgroundImage: `url(${METHOD.image})` }} />
        </div>
      </div>
    </section>
  )
}
