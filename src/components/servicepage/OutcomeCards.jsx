import SectionHeading from '../common/SectionHeading'

const ICONS = ['✓', '⛨', '▤', '◔']

export default function OutcomeCards({ items }) {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Business outcomes" title="What changes for your business." />
        <div className="outcomes">
          {items.map((t, i) => (
            <div key={t} className="outcome">
              <span className="outcome__icon" aria-hidden>{ICONS[i % ICONS.length]}</span>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
