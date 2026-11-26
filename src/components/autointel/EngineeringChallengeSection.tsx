import { Clock3 } from 'lucide-react'

export default function EngineeringChallengeSection() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-section case-challenge-section">
      <div className="section-wrap case-two-column">
        <div>
          <div className="section-kicker">/ 05 — ENGINEERING CHALLENGE</div>
          <h2>
            Automotive software
            <br />
            meets <em>vehicle state.</em>
          </h2>
        </div>

        <div className="case-prose">
          <p>
            To address the limitations encountered during emulator validation,
            we used an in-house developed vehicle simulation tool designed to
            emulate vehicle behavior more realistically. This provided a more
            representative environment for testing vehicle properties and
            application interactions beyond what the standard emulator could
            offer.
          </p>
          <p>
            The approach helped us investigate state-dependent vehicle
            properties and validate application behavior under simulated vehicle
            conditions. It also highlighted the importance of having a
            controlled testing environment when developing applications for
            Android Automotive, where access to vehicle data depends on the
            availability and state of individual properties.
          </p>
          <div className="case-challenge-callout">
            <Clock3 size={17} />
            <span>
              Validation approach — in-house vehicle simulation for more
              realistic testing.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
