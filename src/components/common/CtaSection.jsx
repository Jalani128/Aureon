import { useLocation } from 'react-router-dom'
import ConsultationForm from './ConsultationForm'
import { getService } from '../../data/services'
import { img } from '../../data/site'

const LABELS = {
  'microsoft-dynamics-365': 'Microsoft Dynamics 365', supportos: 'SupportOS', 'energy-resources': 'Energy & Resources',
  'microsoft-365': 'Microsoft 365', 'microsoft-azure': 'Microsoft Azure', 'aws-cloud': 'AWS Cloud',
  'managed-it-infrastructure': 'Managed IT & Infrastructure', 'it-consulting-projects': 'IT Consulting & Projects',
  'cybersecurity-resilience': 'Cybersecurity & Resilience', 'networking-wifi': 'Networking & Wi-Fi',
  'cctv-physical-security': 'CCTV & Physical Security', 'structured-cabling-fibre': 'Structured Cabling & Fibre',
  'ai-business-automation': 'AI & Business Automation',
}

// Shared "Tell us what you want to improve" band. Preselects the service for the current page, if any.
export default function CtaSection({ eyebrow = 'Start with the Aureon Blueprint' }) {
  const { pathname } = useLocation()
  const slug = pathname.split('/').filter(Boolean).pop()
  const service = getService(slug) && LABELS[slug]
  return (
    <section className="cta" id="consultation" style={{ '--cta-img': `url(${img('hero-sky')})` }}>
      <div className="container cta__inner">
        <div className="cta__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2>Tell us what you want to improve.</h2>
          <p>Planning a Dynamics rollout, a support contract, an energy project or a new site? You’ll get an engineer’s recommendation within one business day.</p>
        </div>
        <ConsultationForm key={pathname} defaultService={service || undefined} />
      </div>
    </section>
  )
}
