import CountUp from '../motion/CountUp'

export default function StatsBar({ items }) {
  return (
    <div className="statsbar">
      <div className="container statsbar__grid">
        {items.map(([a, b]) => (
          <div key={a} className="statsbar__item">
            <strong><CountUp text={a} /></strong>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
