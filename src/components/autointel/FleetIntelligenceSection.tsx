import { Database } from 'lucide-react'
import { fleetAnalytics } from '../../data/autointelData'

export default function FleetIntelligenceSection() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-section section-wrap">
      <div className="case-section-heading">
        <div className="section-kicker">/ 03 — FLEET INTELLIGENCE</div>
        <h2>
          From vehicle signals
          <br />
          to <em>fleet insights.</em>
        </h2>
        <p>
          AutoIntel transforms collected telemetry into analytics that help
          automotive organizations explore vehicle behavior and fleet-wide
          activity.
        </p>
      </div>

      <div className="case-contribution-grid">
        {fleetAnalytics.map((item) => (
          <article className="case-contribution" key={item.number}>
            <span className="case-contribution-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="case-pipeline-note">
        <Database size={17} />
        <p>
          <strong>Analytics delivery:</strong> Amazon Athena queries telemetry
          data, and Amazon QuickSight dashboards provide vehicle-level and
          fleet-wide visibility.
        </p>
      </div>
    </section>
  )
}
