import {
  ArrowLeft,
  Activity,
  RadioTower,
  Database,
  Layers3,
  CarFront,
} from 'lucide-react'

export default function CaseHero() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-hero section-wrap">
      <a className="case-back" href={`${base}#projects`}>
        <ArrowLeft size={14} /> BACK TO PROJECT ARCHIVE
      </a>

      <div className="eyebrow">
        <span className="eyebrow-line" />
        CASE STUDY / 001
        <span className="eyebrow-dot">/</span>
        CONNECTED SYSTEMS
      </div>

      <div className="case-hero-grid">
        <div>
          <div className="case-status">
            <span className="status-dot" />
            B2B FLEET ANALYTICS PLATFORM
          </div>

          <h1>
            Auto<span className="case-title-accent">Intel</span>
            <span className="gold-period">.</span>
          </h1>

          <p className="case-lede">
            Turning connected-vehicle telemetry into fleet intelligence —
            building an AWS-powered data pipeline for vehicle and fleet-wide
            analytics.
          </p>

          <div className="case-meta">
            <div>
              <span>DOMAIN</span>
              <strong>Automotive · Cloud · Data</strong>
            </div>
            <div>
              <span>PLATFORM</span>
              <strong>Android Automotive + AWS</strong>
            </div>
            <div>
              <span>PROJECT TYPE</span>
              <strong>B2B connected-vehicle analytics</strong>
            </div>
          </div>
        </div>

        <div className="case-emblem" aria-label="AutoIntel system emblem">
          <div className="case-emblem-ring ring-one" />
          <div className="case-emblem-ring ring-two" />
          <div className="case-emblem-core">
            <CarFront size={42} strokeWidth={1} />
            <span>AUTO / INTEL</span>
          </div>
          <span className="emblem-caption emblem-top">EDGE SIGNAL</span>
          <span className="emblem-caption emblem-bottom">CLOUD INSIGHT</span>
        </div>
      </div>

      <div className="case-quick-facts">
        <div>
          <Activity size={17} />
          <span>Telemetry collection</span>
        </div>
        <div>
          <RadioTower size={17} />
          <span>MQTT ingestion</span>
        </div>
        <div>
          <Database size={17} />
          <span>Cloud data pipeline</span>
        </div>
        <div>
          <Layers3 size={17} />
          <span>Fleet analytics</span>
        </div>
      </div>
    </section>
  )
}
