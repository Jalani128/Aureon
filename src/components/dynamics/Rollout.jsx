import SectionHeading from '../common/SectionHeading'
import { DYNAMICS } from '../../data/pages'

export default function Rollout() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Rollout" title="A typical Business Central project." width="9.5em" lead="Timelines depend on modules, data volume and integrations." />
        <ol className="rollout">
          {DYNAMICS.rollout.map(([when, t, d], i) => (
            <li key={t}>
              <span className="rollout__dot">{i + 1}</span>
              <small>{when}</small>
              <strong>{t}</strong>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
