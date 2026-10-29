import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { getService } from '../../data/services'

const LIST = [
  ['microsoft-dynamics-365', 'ERP, CRM and ZATCA e-invoicing', ['Business Central', 'ZATCA Phase 2', 'Power BI', 'Arabic UI']],
  ['supportos', 'Managed support with live SLAs', ['Tickets', 'SLAs', 'Monitoring', 'WhatsApp']],
  ['energy-resources', 'Monitoring, OT security, remote sites', ['Smart meters', 'OT security', 'ESG data']],
  ['microsoft-365', 'M365, Azure and AWS', ['Exchange Online', 'Entra ID', 'Landing zones']],
  ['networking-wifi', 'Wi-Fi, switching, fibre, Cat6A', ['Wi-Fi', 'VLANs', 'Failover']],
  ['cctv-physical-security', 'Surveillance, firewalls, NCA ECC', ['IP cameras', 'NVR', 'Remote view']],
  ['managed-it-infrastructure', 'Helpdesk, servers, Aureon Blueprint', ['Servers', 'Helpdesk', 'Blueprint']],
]

const EXPLORER_PHOTO = `${import.meta.env.BASE_URL}img/explorer-dynamics.jpg`
const i0 = 0
const DYN_TEXT = 'Business Central, Finance & Supply Chain, Sales and Customer Service, implemented with Saudi VAT and ZATCA Phase 2 integration.'
const TITLES = {
  'microsoft-365': 'Microsoft 365 & Cloud', 'networking-wifi': 'Networking & Cabling',
  'cctv-physical-security': 'CCTV & Cybersecurity', 'managed-it-infrastructure': 'Managed IT & Consulting',
}

export default function ServiceExplorer() {
  const [active, setActive] = useState(0)
  const [slug, , tags] = LIST[active]
  const s = getService(slug)
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Explore our services" title="Hover a service to see what we deliver.">
          <Button to="/services" variant="ghost-dark">View all 13 services →</Button>
        </SectionHeading>
        <div className="explorer">
          <ul className="explorer__list">
            {LIST.map(([sl, desc], i) => {
              const sv = getService(sl)
              return (
                <li key={sl}>
                  <button className={i === active ? 'is-active' : ''} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}>
                    <span className="explorer__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="explorer__txt"><strong>{TITLES[sl] || sv.name} {sv.badge && <em className="badge">{sv.badge}</em>}</strong><small>{desc}</small></span>
                    <span className="explorer__arrow" aria-hidden>→</span>
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="explorer__preview" style={{ backgroundImage: `url(${active === i0 ? EXPLORER_PHOTO : s.image})`, backgroundSize: active === i0 ? '100% auto' : 'cover', backgroundPosition: active === i0 ? 'top' : 'center' }}>
            <div className="explorer__overlay">
              <h3>{TITLES[slug] || s.name}</h3>
              <p>{active === i0 ? DYN_TEXT : s.blurb}</p>
              <ul className="pills">{tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <Button to={s.path}>Open service page</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
