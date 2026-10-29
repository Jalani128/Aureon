import SectionHeading from '../common/SectionHeading'

export default function UseCases({ items, image }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Typical use cases" title="Where clients usually start." />
        <div className="usecases">
          <div className="usecases__img" style={{ backgroundImage: `url(${image})` }} />
          <ol>
            {items.map((t, i) => (
              <li key={t}><span>{String(i + 1).padStart(2, '0')}</span>{t}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
