import { useRef } from 'react'
import SectionHeading from '../common/SectionHeading'
import { img } from '../../data/site'

const SLIDES = [
  ['Energy & Petrochemicals', 'OT networks, OTCC readiness, remote sites.', img('energy')],
  ['Logistics & Distribution', 'Warehouse Wi-Fi, ERP and inventory tracking.', img('dynamics')],
  ['Retail & Hospitality', 'Guest Wi-Fi, POS VLANs and central CCTV.', img('cctv')],
  ['Professional Services', 'Microsoft 365, secure laptops and helpdesk.', img('m365')],
  ['Healthcare & Education', 'PDPL-aware networks and managed devices.', img('networking')],
]

export default function IndustriesCarousel() {
  const track = useRef(null)
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Industries" title="Built for how Saudi sectors work.">
          <div className="arrows">
            <button aria-label="Previous" onClick={() => scroll(-1)}>←</button>
            <button aria-label="Next" onClick={() => scroll(1)}>→</button>
          </div>
        </SectionHeading>
        <div className="carousel" ref={track}>
          {SLIDES.map(([t, d, im]) => (
            <article key={t} className="icard" style={{ backgroundImage: `url(${im})` }}>
              <div><h3>{t}</h3><p>{d}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
