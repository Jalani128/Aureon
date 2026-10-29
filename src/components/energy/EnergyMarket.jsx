import SectionHeading from '../common/SectionHeading'
import { ENERGY } from '../../data/pages'

const BG = [`${import.meta.env.BASE_URL}img/market-70.jpg`, `${import.meta.env.BASE_URL}img/market-otcc.jpg`]

export default function EnergyMarket() {
  const [title, text, source] = ENERGY.market.chart
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Why it matters" title="Energy use is rising and the mix is changing fast." />
        <div className="market market--energy">
          <div className="market__chart">
            <p className="mono-label">{title.toUpperCase()}</p>
            <div className="meter"><i /><span style={{ width: '9.6%' }} /></div>
            <div className="meter__legend"><span>0</span><span>130 GW target</span></div>
            <ul className="legend">
              <li><i className="a" />End 2024: 4.7 GW</li>
              <li><i className="b" />End 2025: ~12.5 GW</li>
            </ul>
            <p>{text}</p>
            <small className="source">{source}</small>
          </div>
          {ENERGY.market.stats.map((c, i) => (
            <div key={c.big} className="market__card market__card--dark market__card--photo" style={{ backgroundImage: `url(${BG[i]})` }}>
              <strong>{c.big}</strong>
              <p>{c.text}</p>
              <small className="source">{c.source}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
