import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { SERVICES } from '../../data/services'

// Sticky strip of every service so visitors can hop between detail pages.
export default function ServiceTabs() {
  const ref = useRef(null)
  useEffect(() => {
    ref.current?.querySelector('.is-active')?.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [])
  return (
    <div className="stabs" ref={ref}>
      <div className="container stabs__row">
        {SERVICES.map((s) => (
          <NavLink key={s.slug} to={s.path} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {s.name}{s.badge && <em> · new</em>}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
