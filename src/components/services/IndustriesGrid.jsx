import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { INDUSTRIES, INDUSTRY_SOLUTIONS } from '../../data/site'

// Each tile flips between the sector's challenge and Aureon's solution when tapped.
export default function IndustriesGrid() {
  const [open, setOpen] = useState(null)
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Industries" title="Tap a sector to see how we solve its challenge." />
        <div className="igrid">
          {INDUSTRIES.map((i) => {
            const solved = open === i.id
            return (
              <button key={i.id} className={`itile ${solved ? 'is-open' : ''}`} style={{ backgroundImage: `url(${i.image})` }}
                onClick={() => setOpen(solved ? null : i.id)} aria-pressed={solved}>
                <span className="itile__body">
                  <small>{solved ? 'Our solution' : 'The challenge'}</small>
                  <strong>{i.name}</strong>
                  <span className="itile__text">{solved ? INDUSTRY_SOLUTIONS[i.id] : i.challenge}</span>
                  <em>{solved ? 'Back to challenge ↺' : 'Tap for our solution ↻'}</em>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
