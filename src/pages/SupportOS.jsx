import PageHero from '../components/common/PageHero'
import StatsBar from '../components/common/StatsBar'
import Faq from '../components/common/Faq'
import PortalDemo from '../components/supportos/PortalDemo'
import TierCompare from '../components/supportos/TierCompare'
import Engineers from '../components/supportos/Engineers'
import Channels from '../components/supportos/Channels'
import { SUPPORTOS as S } from '../data/pages'
import { img } from '../data/site'

export default function SupportOS() {
  return (
    <>
      <PageHero image={img('eng2')} fit="right" crumbs={[['Home', '/'], ['Services', '/services'], ['SupportOS']]}
        title={S.hero.title} hi={S.hero.hi} lead={S.hero.lead} chips={S.hero.chips}
        actions={[['Try the live demo', '#demo'], ['Compare tiers', '#tiers']]} />
      <StatsBar items={S.stats} />
      <div id="demo"><PortalDemo /></div>
      <div id="tiers"><TierCompare /></div>
      <Engineers />
      <Channels />
      <Faq title="SupportOS questions" items={S.faqs} tint={false} />
    </>
  )
}
