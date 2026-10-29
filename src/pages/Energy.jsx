import PageHero from '../components/common/PageHero'
import StatsBar from '../components/common/StatsBar'
import Faq from '../components/common/Faq'
import SolarHotspots from '../components/energy/SolarHotspots'
import SectorTabs from '../components/energy/SectorTabs'
import SavingsEstimator from '../components/energy/SavingsEstimator'
import LiveView from '../components/energy/LiveView'
import EnergyMarket from '../components/energy/EnergyMarket'
import { ENERGY as E } from '../data/pages'

export default function Energy() {
  return (
    <>
      <PageHero image={E.image} photo titleWidth="8.4em" crumbs={[['Home', '/'], ['Industries'], ['Energy & Resources']]}
        title={E.hero.title} hi={E.hero.hi} lead={E.hero.lead} chips={E.hero.chips}
        actions={[['Estimate your savings', '#savings'], ['Explore a solar site', '#solar']]} />
      <StatsBar items={E.stats} />
      <div id="solar"><SolarHotspots /></div>
      <SectorTabs />
      <div id="savings"><SavingsEstimator /></div>
      <LiveView />
      <EnergyMarket />
      <Faq title="Energy & Resources questions" items={E.faqs} tint={false} />
    </>
  )
}
