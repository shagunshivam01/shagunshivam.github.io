import { ArrowRight } from 'lucide-react'

export default function ProblemSection() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-section section-wrap">
      <div className="case-section-heading">
        <div className="section-kicker">/ 01 — THE PROBLEM</div>
        <h2>
          Vehicle data needs
          <br />a path to <em>meaning.</em>
        </h2>
      </div>

      <div className="case-two-column">
        <div className="case-prose">
          <p>
            Connected vehicles generate large volumes of telemetry across
            vehicle systems, climate controls, and infotainment applications.
            For automotive OEMs and fleet operators, the challenge is turning
            these distributed events into a consistent source of operational
            intelligence.
          </p>
          <p>
            AutoIntel addresses this through a centralized B2B data pipeline
            designed for fleet analytics. It connects vehicle-side telemetry
            collection with cloud ingestion, storage, querying, and
            visualization, enabling stakeholders to explore both individual
            vehicle activity and fleet-wide trends.
          </p>
        </div>

        <div className="case-insight-card">
          <span className="micro-label">THE CENTRAL CHALLENGE</span>
          <h3>
            From connected-vehicle telemetry to fleet-wide operational
            intelligence.
          </h3>
          <div className="insight-flow">
            <span>COLLECT</span>
            <ArrowRight size={14} />
            <span>TRANSMIT</span>
            <ArrowRight size={14} />
            <span>ANALYZE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
