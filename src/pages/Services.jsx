import PageHero from '../components/common/PageHero'
import ServiceCatalog from '../components/services/ServiceCatalog'
import IndustriesGrid from '../components/services/IndustriesGrid'
import PackagesSection from '../components/services/PackagesSection'
import { img } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero
        image={img('hero-services')}
        crumbs={[['Home', '/'], ['Services']]}
        title="Every service, one accountable team."
        hi="one accountable team."
        lead="Thirteen services across cloud, business applications, infrastructure, security and industry solutions, delivered and supported across the Kingdom."
        actions={[['Browse services', '#catalogue'], ['See packages', '#packages']]}
        chips={[['Workplace & Cloud', 'Microsoft 365 · Azure · AWS', '☁'], ['Infrastructure & Security', 'Networks · CCTV · Cabling · Cyber', '⛨'], ['Intelligence', 'AI · Automation · Power BI', '✺']]}
      />
      <ServiceCatalog />
      <IndustriesGrid />
      <div id="packages"><PackagesSection /></div>
    </>
  )
}
