import SectionHeading from '../common/SectionHeading'
import { SUPPORTOS } from '../../data/pages'
import { img } from '../../data/site'

export default function Engineers() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="On site and remote" title="Real engineers behind every ticket." />
        <div className="gallery">
          {SUPPORTOS.engineers.map(([n, cap]) => (
            <figure key={n} style={{ backgroundImage: `url(${img(n)})` }}><figcaption>{cap}</figcaption></figure>
          ))}
        </div>
      </div>
    </section>
  )
}
