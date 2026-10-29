import { useMemo, useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import ServiceCard from '../common/ServiceCard'
import { SERVICES, CATEGORIES } from '../../data/services'

const FEATURED = ['microsoft-dynamics-365', 'energy-resources']

export default function ServiceCatalog() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase()
    return SERVICES.filter((s) =>
      (cat === 'All' || s.category === cat) &&
      (!term || `${s.name} ${s.blurb} ${s.category}`.toLowerCase().includes(term)))
  }, [cat, q])

  const count = (c) => (c === 'All' ? SERVICES.length : SERVICES.filter((s) => s.category === c).length)

  return (
    <section className="section" id="catalogue">
      <div className="container">
        <SectionHeading eyebrow="Service catalogue" title="Filter by area, or search for what you need." />
        <div className="filters">
          <div className="filters__tabs">
            {['All', ...CATEGORIES].map((c) => (
              <button key={c} className={`ftab ${c === cat ? 'is-active' : ''}`} onClick={() => setCat(c)}>
                {c} <sup>{count(c)}</sup>
              </button>
            ))}
          </div>
          <label className="filters__search"><span aria-hidden>⌕</span><input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search e.g. Wi-Fi, backup, ZATCA" aria-label="Search services" /></label>
        </div>
        {shown.length === 0 ? (
          <p className="muted">No services match your search.</p>
        ) : (
          <div className="cards">
            {shown.map((s) => <ServiceCard key={s.slug} service={s} featured={FEATURED.includes(s.slug)} />)}
          </div>
        )}
      </div>
    </section>
  )
}
