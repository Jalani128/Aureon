import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Counts the leading integer of a label ("312 managed" -> 0…312) once it scrolls into view.
export default function CountUp({ text }) {
  const m = /^(\d+)(.*)$/.exec(text)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(m && !reduce ? 0 : m ? +m[1] : 0)

  useEffect(() => {
    if (!m || reduce || !inView) return undefined
    const c = animate(0, +m[1], { duration: 1.2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{m ? `${n}${m[2]}` : text}</span>
}
