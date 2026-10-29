import { Link } from 'react-router-dom'

export default function Logo({ small = false }) {
  return (
    <Link to="/" className={`logo ${small ? 'logo--sm' : ''}`} aria-label="Aureon Ventures & Technologies">
      <span className="logo__word">aureon</span>
      <svg className="logo__swoosh" viewBox="0 0 60 14" aria-hidden><path d="M2 12C20 2 42 0 58 3C42 3 22 6 2 12Z" fill="currentColor" /></svg>
      <span className="logo__sub">Ventures &amp; Technologies</span>
    </Link>
  )
}
