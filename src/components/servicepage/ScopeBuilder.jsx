import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'

// "Tick what you need": selecting deliverables fills the consultation form's scope notes.
export default function ScopeBuilder({ items, image }) {
  const [sel, setSel] = useState(() => new Set([0, 1, 2]))
  const toggle = (i) => setSel((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n })

  const request = () => {
    const notes = [...sel].sort((a, b) => a - b).map((i) => `• ${items[i]}`).join('\n')
    const ta = document.querySelector('#consultation textarea')
    if (ta) {
      // Set through the native setter so React's controlled textarea picks up the change.
      Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(ta, `Scope:\n${notes}`)
      ta.dispatchEvent(new Event('input', { bubbles: true }))
    }
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section section--dark" id="scope">
      <div className="container">
        <SectionHeading light eyebrow="What Aureon delivers" title="Tick what you need. We’ll scope it."
          lead="Select the deliverables that matter to you, then send the list with your consultation request." />
        <div className="scope">
          <ul className="scope__list">
            {items.map((t, i) => (
              <li key={t}>
                <label className={sel.has(i) ? 'is-on' : ''}>
                  <input type="checkbox" checked={sel.has(i)} onChange={() => toggle(i)} />
                  <span className="scope__box" aria-hidden>{sel.has(i) ? '✓' : ''}</span>
                  <span>{t}</span>
                </label>
              </li>
            ))}
          </ul>
          <aside className="scope__panel">
            <div className="scope__img" style={{ backgroundImage: `url(${image})` }} />
            <div className="scope__sum">
              <small>YOUR SCOPE</small>
              <strong>{sel.size} of {items.length} selected</strong>
              <div className="progress"><span style={{ width: `${(sel.size / items.length) * 100}%` }} /></div>
              <p>Your selection goes into the consultation form below so our engineers can reply with a matching proposal.</p>
              <button className="btn btn--dark btn--block" onClick={request}>Request this scope</button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
