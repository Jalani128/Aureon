import { useState } from 'react'
import SectionHeading from './SectionHeading'

export default function Faq({ title, items, tint = true }) {
  const [open, setOpen] = useState(0)
  return (
    <section className={`section ${tint ? "section--tint" : ""}`}>
      <div className="container">
        <SectionHeading eyebrow="FAQ" title={title} width="18em" />
        <div className="faq">
          {items.map(([q, a], i) => (
            <div key={q} className={`faq__item ${open === i ? 'is-open' : ''}`}>
              <button type="button" className="faq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q}</span>
                <span className="faq__icon" aria-hidden>{open === i ? '×' : '+'}</span>
              </button>
              {open === i && <p className="faq__a">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
