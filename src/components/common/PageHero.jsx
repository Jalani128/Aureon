import { Link } from 'react-router-dom'
import Button from './Button'
import { Highlight } from './SectionHeading'

// Full-width photographic hero used by every page. `chips` are the floating status cards on the right.
export default function PageHero({ image, titleWidth, fit, photo = false, side = false, strip = [], crumbs = [], eyebrow, title, hi, arabic, lead, actions = [], chips = [] }) {
  return (
    <section className={`hero ${side ? 'hero--side' : ''} ${photo ? 'hero--photo' : ''} ${fit === 'right' ? 'hero--right' : ''}`} style={{ '--hero-img': `url(${image})` }}>
      <div className="container hero__inner">
        <div className="hero__copy">
          {crumbs.length > 0 && (
            <nav className="crumbs" aria-label="Breadcrumb">
              {crumbs.map(([label, to], i) => (
                <span key={label}>
                  {i > 0 && ' / '}
                  {to ? <Link to={to}>{label}</Link> : label}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 style={titleWidth ? { maxWidth: titleWidth } : undefined}><Highlight title={title} hi={hi} /></h1>
          {arabic && <p className="hero__ar" lang="ar" dir="rtl">{arabic}</p>}
          <p className="hero__lead">{lead}</p>
          <div className="hero__actions">
            {actions.map(([label, to, variant], i) => (
              <Button key={label} to={to.startsWith('#') ? undefined : to} href={to.startsWith('#') ? to : undefined} variant={variant || (i ? 'ghost' : 'primary')}>{label}</Button>
            ))}
          </div>
        </div>
        {chips.length > 0 && (
          <ul className="hero__chips">
            {chips.map(([t, s, icon]) => (
              <li key={t}>
                <span className="chip__dot" aria-hidden>{icon || '✓'}</span>
                <span><strong>{t}</strong><small>{s}</small></span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {strip.length > 0 && (
        <div className="container hero__strip">
          {strip.map(([a, b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}
        </div>
      )}
    </section>
  )
}
