import { ArrowRight, Github } from 'lucide-react'

export default function TakeawaySection() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-outcome section-wrap">
      <div className="section-kicker">/ THE TAKEAWAY</div>
      <h2>
        Infrastructure first.
        <br />
        <em>Intelligence next.</em>
      </h2>
      <p>
        AutoIntel demonstrates an end-to-end B2B connected-vehicle analytics
        platform, taking telemetry from Android Automotive through an
        AWS-powered cloud pipeline and into Amazon QuickSight dashboards. By
        bringing together vehicle activity, HVAC usage, application activity,
        and fleet-wide event trends, the platform provides automotive
        organizations with a centralized foundation for understanding vehicle
        behavior and exploring fleet-level operational insights.
      </p>

      <div className="case-outcome-actions">
        <a className="button button-primary" href={`${base}#projects`}>
          Explore more projects <ArrowRight size={15} />
        </a>
        <a
          className="button button-ghost"
          href="https://github.com/shagunshivam01"
          target="_blank"
          rel="noreferrer"
        >
          GitHub profile <Github size={15} />
        </a>
      </div>
    </section>
  )
}
