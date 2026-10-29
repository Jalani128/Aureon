import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { PACKAGES } from '../../data/site'

// Writes the chosen package into the consultation form's notes (a controlled textarea, hence the native setter).
function addToConsultation(names) {
  const ta = document.querySelector('#consultation textarea')
  if (!ta) return
  const value = names.length ? `Package: ${names.join(', ')}` : ''
  Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(ta, value)
  ta.dispatchEvent(new Event('input', { bubbles: true }))
}

export default function PackagesSection() {
  const [picked, setPicked] = useState([])
  const toggle = (name) => {
    const next = picked.includes(name) ? picked.filter((n) => n !== name) : [...picked, name]
    setPicked(next)
    addToConsultation(next)
  }
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading light eyebrow="Packages" title="Start small, or cover every site." lead="Pick a package to add it to your consultation request." />
        <div className="packages">
          {PACKAGES.map((p) => {
            const on = picked.includes(p.name)
            return (
              <article key={p.name} className={`package ${on ? 'is-picked' : ''}`}>
                <span className="package__tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <small>{p.note}</small>
                <button className="package__btn" onClick={() => toggle(p.name)}>{on ? '✓ Added to request' : 'Select package'}</button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
