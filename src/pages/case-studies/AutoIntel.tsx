import CaseHeader from '../../components/autointel/CaseHeader'
import CaseHero from '../../components/autointel/CaseHero'
import ProblemSection from '../../components/autointel/ProblemSection'
import ArchitectureSection from '../../components/autointel/ArchitectureSection'
import FleetIntelligenceSection from '../../components/autointel/FleetIntelligenceSection'
import EngineeringWorkSection from '../../components/autointel/EngineeringWorkSection'
import EngineeringChallengeSection from '../../components/autointel/EngineeringChallengeSection'
import DeliveryStatusSection from '../../components/autointel/DeliveryStatusSection'
import RoadmapSection from '../../components/autointel/RoadmapSection'
import TakeawaySection from '../../components/autointel/TakeawaySection'
import CaseFooter from '../../components/autointel/CaseFooter'

export default function AutoIntelPage() {
  const base = import.meta.env.BASE_URL

  return (
    <div className="site-shell case-study-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />

      <CaseHeader />

      <main>
        <CaseHero />

        <ProblemSection />

        <ArchitectureSection />

        <FleetIntelligenceSection />

        <EngineeringWorkSection />

        <EngineeringChallengeSection />

        <DeliveryStatusSection />

        <RoadmapSection />

        <TakeawaySection />
      </main>

      <CaseFooter />
    </div>
  )
}
