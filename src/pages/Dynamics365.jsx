import PageHero from '../components/common/PageHero'
import StatsBar from '../components/common/StatsBar'
import Faq from '../components/common/Faq'
import AppFinder from '../components/dynamics/AppFinder'
import ZatcaFlow from '../components/dynamics/ZatcaFlow'
import TeamTabs from '../components/dynamics/TeamTabs'
import Rollout from '../components/dynamics/Rollout'
import Gallery from '../components/dynamics/Gallery'
import { DYNAMICS as D } from '../data/pages'

export default function Dynamics365() {
  return (
    <>
      <PageHero image={D.image} photo crumbs={[['Home', '/'], ['Services', '/services'], ['Microsoft Dynamics 365']]}
        title={D.hero.title} hi={D.hero.hi} lead={D.hero.lead} chips={D.hero.chips}
        actions={[['Find your Dynamics app', '#finder'], ['See the ZATCA flow', '#zatca']]} />
      <StatsBar items={D.stats} />
      <div id="finder"><AppFinder /></div>
      <div id="zatca"><ZatcaFlow /></div>
      <TeamTabs />
      <Rollout />
      <Gallery />
      <Faq title="Microsoft Dynamics questions" items={D.faqs} tint={false} />
    </>
  )
}
