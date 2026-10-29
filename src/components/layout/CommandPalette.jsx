import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVICES } from '../../data/services'

const PAGES = [['Home', '/', 'Page'], ['All services', '/services', 'Page'], ['Cover page', '/cover', 'Page']]

// Ctrl/Cmd+K quick search across pages and services.
export default function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState('')
  const [i, setI] = useState(0)
  const nav = useNavigate()
  const input = useRef(null)

  const items = useMemo(() => {
    const all = [
      ...PAGES.map(([label, to, kind]) => ({ label, to, kind, hint: '' })),
      ...SERVICES.map((s) => ({ label: s.name, to: s.path, kind: s.category, hint: s.blurb })),
      { label: 'Book a consultation', to: '#consultation', kind: 'Action', hint: 'Jump to the contact form' },
    ]
    const t = q.trim().toLowerCase()
    return t ? all.filter((x) => `${x.label} ${x.kind} ${x.hint}`.toLowerCase().includes(t)) : all
  }, [q])

  useEffect(() => { if (open) { setQ(''); setI(0); setTimeout(() => input.current?.focus(), 30) } }, [open])
  useEffect(() => setI(0), [q])

  const go = (it) => {
    onClose()
    if (it.to.startsWith('#')) document.querySelector(it.to)?.scrollIntoView({ behavior: 'smooth' })
    else nav(it.to)
  }
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setI((n) => Math.min(n + 1, items.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setI((n) => Math.max(n - 1, 0)) }
    else if (e.key === 'Enter' && items[i]) go(items[i])
    else if (e.key === 'Escape') onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="cmdk" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div className="cmdk__box" role="dialog" aria-label="Search" initial={{ y: -16, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: -10, opacity: 0 }} onMouseDown={(e) => e.stopPropagation()}>
            <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKey} placeholder="Search services and pages (try wifi, backup, ZATCA)" aria-label="Search" />
            <ul>
              {items.length === 0 && <li className="cmdk__empty">No results</li>}
              {items.map((it, n) => (
                <li key={it.label + it.to}>
                  <button className={n === i ? 'is-on' : ''} onMouseEnter={() => setI(n)} onClick={() => go(it)}>
                    <span><strong>{it.label}</strong>{it.hint && <small>{it.hint}</small>}</span>
                    <em>{it.kind}</em>
                  </button>
                </li>
              ))}
            </ul>
            <footer><kbd>↑</kbd><kbd>↓</kbd> navigate <kbd>↵</kbd> open <kbd>esc</kbd> close</footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
