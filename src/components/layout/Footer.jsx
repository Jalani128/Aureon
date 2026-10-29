import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FOOTER, CONTACT } from '../../data/site'
import { SERVICES } from '../../data/services'

const SHORT = { 'managed-it-infrastructure': 'Managed IT', 'cctv-physical-security': 'CCTV', 'structured-cabling-fibre': 'Structured Cabling', 'ai-business-automation': 'AI & Automation', 'it-consulting-projects': 'IT Consulting' }
// Footer order follows the PDF: IT Consulting comes last.
const ORDER = ['microsoft-365', 'microsoft-azure', 'aws-cloud', 'managed-it-infrastructure', 'cybersecurity-resilience', 'networking-wifi', 'cctv-physical-security', 'structured-cabling-fibre', 'ai-business-automation', 'it-consulting-projects']
const ALL = ORDER.map((slug) => SERVICES.find((s) => s.slug === slug))

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo />
          <p className="footer__blurb">{FOOTER.blurb}</p>
        </div>
        <div>
          <h4>New services</h4>
          <ul>{FOOTER.newServices.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul>
        </div>
        <div>
          <h4>All services</h4>
          <ul>{ALL.map((s) => <li key={s.slug}><Link to={s.path}>{SHORT[s.slug] || s.name}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>{CONTACT.address}</li>
            <li>{CONTACT.languages}</li>
            <li>{CONTACT.web}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bar">
        <span>© 2026 Aureon Ventures &amp; Technologies</span>
        <span>Demo build for client review · Images are illustrative</span>
      </div>
    </footer>
  )
}
