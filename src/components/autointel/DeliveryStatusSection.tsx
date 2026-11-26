import { CheckCircle2, Clock3 } from 'lucide-react'

export default function DeliveryStatusSection() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-section section-wrap">
      <div className="case-section-heading">
        <div className="section-kicker">/ 06 — DELIVERY STATUS</div>
        <h2>
          What works.
          <br />
          What comes <em>next.</em>
        </h2>
      </div>

      <div className="case-status-grid">
        <div className="case-status-column">
          <div className="case-status-heading">
            <CheckCircle2 size={18} />
            <h3>Connected / implemented</h3>
          </div>
          <ul>
            <li>Android Automotive telemetry workflow</li>
            <li>MQTT publishing to AWS IoT Core</li>
            <li>Amazon Kinesis and S3 data pipeline connections</li>
            <li>AWS Lambda integration</li>
            <li>Amazon Athena connectivity for telemetry queries</li>
            <li>Amazon QuickSight dashboards displaying Athena telemetry</li>
            <li>Vehicle activity analytics</li>
            <li>HVAC usage analytics</li>
            <li>Application activity analytics</li>
            <li>Fleet-wide event trend analytics</li>
          </ul>
        </div>

        <div className="case-status-column roadmap-column">
          <div className="case-status-heading">
            <Clock3 size={18} />
            <h3>Planned / in progress</h3>
          </div>
          <ul>
            <li>Further Android Automotive runtime compatibility validation</li>
            <li>Expanded telemetry coverage and dashboard capabilities</li>
            <li>Machine-learning workflows for predictive fleet analytics</li>
            <li>Additional application-level data management capabilities</li>
            <li>Advanced fleet intelligence and anomaly detection</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
