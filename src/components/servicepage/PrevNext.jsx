import { Link } from 'react-router-dom'

export default function PrevNext({ prev, next }) {
  const tile = (s, label) => (
    <Link to={s.path} className={`pn ${label.startsWith('Next') ? 'pn--next' : ''}`} style={{ backgroundImage: `url(${s.image})` }}>
      <span><small>{label}</small><strong>{s.name}</strong></span>
    </Link>
  )
  return (
    <section className="section section--tight">
      <div className="container pn__grid">
        {tile(prev, '← Previous service')}
        {tile(next, 'Next service →')}
      </div>
    </section>
  )
}
