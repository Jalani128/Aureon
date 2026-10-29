import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import { NEW_LINES } from '../../data/site'

export default function NewServiceLines() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="New in 2026" title="Three new service lines.">
          <p className="muted">Built for what Saudi organisations are asking for right now.</p>
        </SectionHeading>
        <div className="newlines">
          {NEW_LINES.map((l) => (
            <Link key={l.name} to={l.to} className={`newline newline--${l.size || 'sm'}`} style={{ backgroundImage: `url(${l.image})` }} data-fit={l.fit}>
              <span className="newline__body">
                <span className="newline__tag">{l.tag}</span>
                <strong>{l.name}</strong>
                <span className="newline__cta">{l.cta} →</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
