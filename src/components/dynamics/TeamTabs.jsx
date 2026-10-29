import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { DYNAMICS } from '../../data/pages'

const { tabs, image } = DYNAMICS.teams

export default function TeamTabs() {
  const names = Object.keys(tabs)
  const [tab, setTab] = useState(names[0])
  const t = tabs[tab]
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Capabilities" title="What changes for each team." width="14em" />
        <div className="ttabs">
          {names.map((n) => <button key={n} className={`pchip pchip--light ${n === tab ? 'is-active' : ''}`} onClick={() => setTab(n)}>{n}</button>)}
        </div>
        <div className="tteam">
          <div className="tteam__img" style={{ backgroundImage: `url(${image})` }} />
          <div className="tteam__body">
            <h3>{t.title}</h3>
            <p>{t.text}</p>
            <ul className="ticks">{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}
