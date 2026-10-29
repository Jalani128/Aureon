import { Link } from 'react-router-dom'
import Logo from '../layout/Logo'
import { img } from '../../data/site'

const CONTENTS = [
  ['01', 'Home', 'p.2', '/'],
  ['02', 'All Services, Industries & Packages', 'p.3', '/services'],
  ['03', 'Microsoft Dynamics 365', 'p.4', '/services/microsoft-dynamics-365'],
  ['04', 'SupportOS', 'p.5', '/services/supportos'],
  ['05', 'Energy & Resources', 'p.6', '/industries/energy-resources'],
  ['06–15', 'Service sub-pages (10 services)', 'p.7', '/services/microsoft-365', true],
]

export default function Cover() {
  return (
    <section className="cover" style={{ '--cover-img': `url(${img('cover-city')})` }}>
      <div className="cover__inner">
        <Logo />
        <div className="cover__main">
          <p className="cover__eyebrow">WEBSITE DEMO · CLIENT PRESENTATION</p>
          <h1>Aureon website, <span className="hl">from cloud to cable.</span></h1>
          <p className="cover__lead">
            Proposed pages for the new aureonvt.com, including the new Microsoft Dynamics 365, SupportOS and Energy &amp; Resources services, prepared for client review.
          </p>
        </div>
        <ol className="cover__toc">
          {CONTENTS.map(([n, label, page, to, hot]) => (
            <li key={n}>
              <Link to={to}>
                <span className={`cover__num ${hot ? 'is-hot' : ''}`}>{n}</span>
                <span className={`cover__label ${hot ? 'is-strong' : ''}`}>{label}</span>
                <span className="cover__page">{page}</span>
              </Link>
            </li>
          ))}
        </ol>
        <footer className="cover__foot">
          <span>Aureon Ventures &amp; Technologies · Kingdom of Saudi Arabia</span>
          <span>October 2026 · Images are illustrative · Interactive version available online</span>
        </footer>
      </div>
    </section>
  )
}
