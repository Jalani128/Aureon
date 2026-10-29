import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { ENERGY } from '../../data/pages'

const t = (n) => `${import.meta.env.BASE_URL}img/thumb-${n}.jpg`
const THUMBS = { Renewables: t('renewables'), 'Oil, gas & petrochemicals': t('oilgas'), 'Power & utilities': t('power'), 'Water & desalination': t('water'), 'Smart buildings': t('buildings'), 'Control rooms': t('control') }

export default function SectorTabs() {
  const names = Object.keys(ENERGY.sectors)
  const [sel, setSel] = useState(names[0])
  const s = ENERGY.sectors[sel]
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading light eyebrow="Sectors" title="Built for the Kingdom’s energy and resource operators." />
        <div className="sectors">
          <ul className="sectors__list">
            {names.map((n) => (
              <li key={n}>
                <button className={n === sel ? 'is-active' : ''} onClick={() => setSel(n)}>
                  <span className="sectors__thumb" style={{ backgroundImage: `url(${THUMBS[n]})` }} />{n}
                </button>
              </li>
            ))}
          </ul>
          <div className="sectors__panel" style={{ backgroundImage: `url(${s.image})` }}>
            <div>
              <h3>{sel}</h3>
              <p>{s.text}</p>
              <ul className="pills pills--dark">{s.chips.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
