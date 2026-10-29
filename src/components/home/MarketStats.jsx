import SectionHeading from '../common/SectionHeading'
import { MARKET, img } from '../../data/site'

const CARD_BG = [img('team-finance'), img('energy')]

export default function MarketStats() {
  const { chart, cards } = MARKET
  const max = Math.max(chart.a[1], chart.b[1])
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="The Saudi market" title="Why demand for IT services keeps rising."
          lead="Vision 2030 programmes, mandatory e-invoicing and national cybersecurity controls are pushing organisations of every size to modernise." />
        <div className="market">
          <div className="market__chart">
            <p className="mono-label">{chart.title}</p>
            <div className="bars">
              {[20, 10, 0].map((t) => <span key={t} className="bars__grid" style={{ bottom: `${(t / 22.5) * 100 * 0.78 + 14}%` }}>{t}</span>)}
              {[chart.a, chart.b].map(([label, v], i) => (
                <div key={label} className="bars__col">
                  <span className="bars__val">{v}</span>
                  <div className={`bars__bar ${i ? 'is-hi' : ''}`} style={{ height: `${(v / max) * 100}%` }} />
                  <span className="bars__label">{label}</span>
                </div>
              ))}
              <span className="bars__cagr">{chart.cagr}</span>
            </div>
            <small className="source">{chart.source}</small>
          </div>
          {cards.map((c, i) => (
            <div key={c.big} className="market__card market__card--dark" style={{ backgroundImage: `url(${CARD_BG[i]})` }}>
              <strong>{c.big}<sup>{c.unit}</sup></strong>
              <p>{c.text}</p>
              <small className="source">{c.source}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
