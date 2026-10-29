import { DYNAMICS } from '../../data/pages'

export default function Gallery() {
  return (
    <section className="section section--tint">
      <div className="container gallery">
        {DYNAMICS.gallery.map(([src, cap]) => (
          <figure key={cap} style={{ backgroundImage: `url(${src})` }}><figcaption>{cap}</figcaption></figure>
        ))}
      </div>
    </section>
  )
}
