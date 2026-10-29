import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import Button from '../common/Button'
import { NAV } from '../../data/site'
import { SERVICES, CATEGORIES } from '../../data/services'

const ICON = { 'Workplace & Cloud': '☁', 'Business Apps & Support': '◈', 'Infrastructure & Security': '⛨', Intelligence: '✺', Industry: '⚡' }

export default function Header({ onSearch }) {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [drop, setDrop] = useState(false)
  const dropRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => { setMenu(false); setDrop(false) }, [pathname])
  useEffect(() => {
    const on = () => {
      const s = window.scrollY > 24
      setScrolled(s)
      document.documentElement.style.setProperty('--hdr', s ? '64px' : '78px')
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    const close = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDrop(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const servicesActive = pathname.startsWith('/services') &&
    !['/services/microsoft-dynamics-365', '/services/supportos'].includes(pathname)

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <button className="header__toggle" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>☰</button>
        <nav className={`nav ${menu ? 'is-open' : ''}`}>
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="nav__drop" ref={dropRef}>
                <button type="button" className={`nav__link ${servicesActive ? 'is-active' : ''}`} aria-expanded={drop} onClick={() => setDrop(!drop)}>
                  {item.label} <span aria-hidden>▾</span>
                </button>
                <AnimatePresence>
                  {drop && (
                    <motion.div className="mega" initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.18 }}>
                      <div className="mega__cols">
                        {CATEGORIES.map((c) => (
                          <div key={c} className="mega__col">
                            <h5><span aria-hidden>{ICON[c]}</span>{c}</h5>
                            {SERVICES.filter((x) => x.category === c).map((x) => (
                              <NavLink key={x.slug} to={x.path} className="mega__item">
                                <strong>{x.name}{x.badge && <em>{x.badge}</em>}</strong>
                                <small>{x.blurb}</small>
                              </NavLink>
                            ))}
                          </div>
                        ))}
                      </div>
                      <NavLink to="/services" end className="mega__all"><span>Browse all 13 services, industries and packages</span><span aria-hidden>→</span></NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={item.label} to={item.to} end className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>{item.label}</NavLink>
            ),
          )}
          <button type="button" className="nav__search" onClick={onSearch} aria-label="Search (Ctrl+K)"><span aria-hidden>⌕</span><span className="nav__search-txt">Search</span> <kbd>Ctrl K</kbd></button>
          <span className="nav__ar" lang="ar">العربية</span>
          <Button href="#consultation" variant="dark" className="nav__cta">Book a consultation</Button>
        </nav>
      </div>
    </header>
  )
}
