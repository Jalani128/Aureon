import PageHero from '../components/common/PageHero'
import TechMarquee from '../components/home/TechMarquee'
import ServiceExplorer from '../components/home/ServiceExplorer'
import ProblemPicker from '../components/home/ProblemPicker'
import NewServiceLines from '../components/home/NewServiceLines'
import MethodSteps from '../components/home/MethodSteps'
import MarketStats from '../components/home/MarketStats'
import IndustriesCarousel from '../components/home/IndustriesCarousel'
import { HERO_STATS, img } from '../data/site'

export default function Home() {
  return (
    <>
      <PageHero
        image={img('hero-full')}
        side
        eyebrow="IT · CLOUD · BUSINESS APPS · INFRASTRUCTURE"
        title="Your technology foundation, from cloud to cable."
        hi="from cloud to cable."
        arabic="من السحابة إلى الكابل"
        lead="One accountable team to plan, deploy, secure and support the technology behind your business, anywhere in the Kingdom."
        actions={[['Book a consultation', '#consultation'], ['Explore services', '/services']]}
        strip={HERO_STATS}
      />
      <TechMarquee />
      <ServiceExplorer />
      <ProblemPicker />
      <NewServiceLines />
      <MethodSteps />
      <MarketStats />
      <IndustriesCarousel />
    </>
  )
}
