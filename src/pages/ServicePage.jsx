import { Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import Faq from '../components/common/Faq'
import ServiceTabs from '../components/servicepage/ServiceTabs'
import OutcomeCards from '../components/servicepage/OutcomeCards'
import ScopeBuilder from '../components/servicepage/ScopeBuilder'
import UseCases from '../components/servicepage/UseCases'
import PrevNext from '../components/servicepage/PrevNext'
import { DETAIL_SERVICES, getService } from '../data/services'

// Generic template for the ten "service sub-pages" (Microsoft 365 … AI & Business Automation).
export default function ServicePage() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s || !s.detail) return <Navigate to="/services" replace />

  const i = DETAIL_SERVICES.findIndex((x) => x.slug === slug)
  const prev = DETAIL_SERVICES[(i - 1 + DETAIL_SERVICES.length) % DETAIL_SERVICES.length]
  const next = DETAIL_SERVICES[(i + 1) % DETAIL_SERVICES.length]
  const hi = s.hero.includes(', ') ? s.hero.split(', ').pop() : s.hero.split(' ').slice(-3).join(' ')

  return (
    <>
      <PageHero
        image={s.heroImage || s.image}
        photo
        crumbs={[['Home', '/'], ['Services', '/services'], [s.name]]}
        title={s.hero}
        hi={hi}
        lead={s.lead}
        actions={[['Build your scope', '#scope'], ['Book a consultation', '#consultation']]}
        chips={s.chips}
      />
      <ServiceTabs />
      <OutcomeCards items={s.outcomes} />
      <ScopeBuilder key={slug} items={s.deliverables} image={s.scopeImage || s.image} />
      <UseCases items={s.useCases} image={s.useImage || s.image} />
      <Faq title={`${s.name} questions`} items={s.faqs} />
      <PrevNext prev={prev} next={next} />
    </>
  )
}
