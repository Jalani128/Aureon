import SectionHeading from '../common/SectionHeading'
import { SUPPORTOS } from '../../data/pages'

export default function Channels() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Channels" title="Reach us the way your team already works." />
        <div className="channels">
          {SUPPORTOS.channels.map(([t, d, icon]) => (
            <div key={t} className="channel">
              <span className="outcome__icon" aria-hidden>{icon}</span>
              <strong>{t}</strong>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
