import { TECH_MARQUEE } from '../../data/site'

export default function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE]
  return (
    <div className="marquee" aria-label="Technologies we work with">
      <div className="marquee__track">
        {items.map((t, i) => <span key={i}>{t}<i aria-hidden /></span>)}
      </div>
    </div>
  )
}
