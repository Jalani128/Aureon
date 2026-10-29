import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

// Top progress bar + floating "back to top" and "Book a consultation" buttons.
export default function ScrollUi() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 })
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} aria-hidden />
      <AnimatePresence>
        {show && (
          <motion.div className="fab" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}>
            <a className="fab__cta" href="#consultation" onClick={(e) => { e.preventDefault(); document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' }) }}>Book a consultation</a>
            <button className="fab__top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
