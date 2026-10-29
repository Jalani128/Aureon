import { Link } from 'react-router-dom'

export default function ServiceCard({ service, featured = false }) {
  const dark = service.slug === 'ai-business-automation'
  return (
    <Link to={service.path} className={`scard ${featured ? 'scard--featured' : ''} ${dark ? 'scard--dark' : ''}`}>
      <div className="scard__img" style={dark ? undefined : { backgroundImage: `url(${service.image})` }}>
        <span className="scard__tag">{service.tag === 'energy' ? 'Industry' : service.category}</span>
        {service.badge && <span className="badge">{service.badge}</span>}
      </div>
      <div className="scard__body">
        <h3>{service.name}</h3>
        <p>{service.blurb}</p>
        <span className="scard__link">View service →</span>
      </div>
    </Link>
  )
}
