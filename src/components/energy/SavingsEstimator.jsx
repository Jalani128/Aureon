import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { ENERGY } from '../../data/pages'

const E = ENERGY.estimator
const TARIFF = 0.18 // SAR per kWh
const RATES = { // [low, high] fraction of annual bill
  'Offices & retail': { 'Monitoring only': [0.05, 0.1014], 'Monitoring + HVAC control': [0.1, 0.18] },
  Industrial: { 'Monitoring only': [0.04, 0.08], 'Monitoring + HVAC control': [0.07, 0.14] },
  'Utility / plant': { 'Monitoring only': [0.03, 0.07], 'Monitoring + HVAC control': [0.06, 0.12] },
}
const k = (n) => `${Math.round(n / 1000)}K`

export default function SavingsEstimator() {
  const [bill, setBill] = useState(E.billDefault)
  const [sites, setSites] = useState(E.sitesDefault)
  const [fac, setFac] = useState(E.facilities[0])
  const [meas, setMeas] = useState(E.measures[0])

  const [lo, hi] = RATES[fac][meas]
  const annual = bill * 12
  const low = annual * lo
  const high = annual * hi
  const gwh = (v) => (v / TARIFF / 1e6).toFixed(1)

  const opts = (list, val, set) => (
    <div className="finder__opts">{list.map((o) => <button key={o} className={`pchip pchip--light ${o === val ? 'is-active' : ''}`} onClick={() => set(o)}>{o}</button>)}</div>
  )

  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Savings estimator" title="What could monitoring save you?" lead="Move the sliders for a rough range. We confirm real figures in an energy assessment." />
        <div className="estimator">
          <div className="estimator__inputs">
            <label>Monthly electricity bill <b>SAR {bill.toLocaleString()}</b>
              <input type="range" min={E.billMin} max={E.billMax} step={5000} value={bill} style={{ '--p': `${((bill - E.billMin) / (E.billMax - E.billMin)) * 100}%` }} onChange={(e) => setBill(+e.target.value)} />
            </label>
            <label>Number of sites <b>{sites}</b>
              <input type="range" min={1} max={E.sitesMax} value={sites} style={{ '--p': `${((sites - 1) / (E.sitesMax - 1)) * 100}%` }} onChange={(e) => setSites(+e.target.value)} />
            </label>
            <div><span className="lbl">Facility type</span>{opts(E.facilities, fac, setFac)}</div>
            <div><span className="lbl">Measures</span>{opts(E.measures, meas, setMeas)}</div>
          </div>
          <div className="estimator__out">
            <small>ESTIMATED ANNUAL SAVING</small>
            <strong>SAR {k(low)} – {k(high)}</strong>
            <div className="estimator__sub">
              <div><b>{Math.round(lo * 100)}–{Math.round(hi * 100)}%</b><span>of energy spend</span></div>
              <div><b>~ {gwh(low)}–{gwh(high)} GWh</b><span>energy avoided per year</span></div>
            </div>
            <p>{E.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
