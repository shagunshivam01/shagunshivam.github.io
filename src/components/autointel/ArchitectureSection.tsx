import { Workflow } from 'lucide-react'
import { architecture } from '../../data/autointelData'

export default function ArchitectureSection() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-section case-dark-section">
      <div className="section-wrap">
        <div className="case-section-heading">
          <div className="section-kicker">/ 02 — SYSTEM ARCHITECTURE</div>
          <h2>
            A connected path
            <br />
            from <em>edge to cloud.</em>
          </h2>
          <p>
            A portfolio-level view of the system. Select components below to
            understand their role in the data flow.
          </p>
        </div>

        <div className="case-architecture">
          {architecture.map((layer, index) => {
            const Icon = layer.icon

            return (
              <article className="case-architecture-card" key={layer.number}>
                <div className="case-architecture-top">
                  <span>{layer.number} / 04</span>
                  <span className="layer-state">{layer.status}</span>
                </div>

                <div className="case-layer-icon">
                  <Icon size={22} />
                </div>

                <h3>{layer.name}</h3>
                <p>{layer.description}</p>

                <div className="case-tech-list">
                  {layer.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="case-pipeline-note">
          <Workflow size={17} />
          <p>
            <strong>Data flow:</strong> Android Automotive → MQTT → AWS IoT Core
            → Amazon Kinesis → Amazon S3 → AWS Lambda → Amazon Athena.
          </p>
        </div>
      </div>
    </section>
  )
}
