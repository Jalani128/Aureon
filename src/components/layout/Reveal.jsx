import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll-reveal for every card-like element, without touching each component:
// matching nodes get `.rv`, and `.rv-in` once they enter the viewport (staggered by sibling index).
const SELECTOR = '.sh, .scard, .outcome, .channel, .package, .itile, .faq__item, .gallery figure, .rollout li, .market__card, .market__chart, .newline, .icard, .usecases li, .scope__list label, .estimator, .finder, .tteam, .tier, .portal, .dash, .zdetail, .pn, .hero__chips li, .problems__card'

export default function Reveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.classList.add('rv-in')
        io.unobserve(e.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })

    const seen = new WeakSet()
    const scan = (root) => {
      root.querySelectorAll(SELECTOR).forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        const idx = [...el.parentElement.children].indexOf(el)
        el.style.setProperty('--rv-delay', `${Math.min(idx, 6) * 70}ms`)
        el.classList.add('rv')
        io.observe(el)
      })
    }
    const main = document.querySelector('main') || document.body
    scan(main)
    // Catch elements added later (filters, tabs, route changes inside <main>).
    const mo = new MutationObserver(() => scan(main))
    mo.observe(main, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [pathname])
  return null
}
