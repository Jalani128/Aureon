import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Toaster } from 'sonner'
import Header from './Header'
import Footer from './Footer'
import Reveal from './Reveal'
import ScrollUi from './ScrollUi'
import CommandPalette from './CommandPalette'
import CtaSection from '../common/CtaSection'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const [cmd, setCmd] = useState(false)

  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setCmd((v) => !v) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <ScrollUi />
      <Header onSearch={() => setCmd(true)} />
      <main>
        <motion.div key={pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
          <Outlet />
        </motion.div>
        <CtaSection />
      </main>
      <Footer />
      <Reveal />
      <CommandPalette open={cmd} onClose={() => setCmd(false)} />
      <Toaster position="bottom-right" richColors closeButton />
    </>
  )
}
