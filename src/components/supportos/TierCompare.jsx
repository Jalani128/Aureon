import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { SUPPORTOS } from '../../data/pages'

const { list, image } = SUPPORTOS.tiers

export default function TierCompare() {
  const names = Object.keys(list)
  const [tier, setTier] = useState('Business')
  const t = list[tier]
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Support tiers" title="Switch tiers to compare cover." width="14em" lead="Targets shown are examples; final targets are agreed in your SLA." />
        <div className="tiertabs">
          {names.map((n) => <button key={n} className={n === tier ? 'is-active' : ''} onClick={() => setTier(n)}>{n}</button>)}
        </div>
        <div className="tier">
          <div className="tier__img" style={{ backgroundImage: `url(${image})` }}>
            <div className="ring"><strong>{t.target}</strong><small>P1 response target</small></div>
          </div>
          <div className="tier__body">
            <h3>{tier}</h3>
            <p>{t.sub}</p>
            <dl className="tier__grid">
              {t.items.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <Button href="#consultation" variant="dark">Request a proposal</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
