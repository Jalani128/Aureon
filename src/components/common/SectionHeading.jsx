// Renders a heading with an optional highlighted (green) phrase: hi must be a substring of title.
export function Highlight({ title, hi }) {
  const i = hi ? title.indexOf(hi) : -1
  if (i < 0) return title
  return (
    <>
      {title.slice(0, i)}
      <span className="hl">{hi}</span>
      {title.slice(i + hi.length)}
    </>
  )
}

export default function SectionHeading({ eyebrow, title, hi, lead, light = false, align = 'left', width, children }) {
  return (
    <header className={`sh ${light ? 'sh--light' : ''} sh--${align}`}>
      <div className="sh__main">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 style={width ? { maxWidth: width } : undefined}><Highlight title={title} hi={hi} /></h2>
        {lead && <p className="sh__lead">{lead}</p>}
      </div>
      {children && <div className="sh__side">{children}</div>}
    </header>
  )
}
