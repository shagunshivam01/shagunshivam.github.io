import { AudioLines } from 'lucide-react'

export default function SystemSnapshot() {
  return (
    <section id="signal" className="signal section-wrap">
      <div className="section-kicker">/ SYSTEM SNAPSHOT</div>

      <div className="signal-grid">
        <div className="signal-intro">
          <span className="micro-label">A MULTI-DISCIPLINARY BUILDER</span>

          <h2>
            Curiosity, converted
            <br />
            into <em>capability.</em>
          </h2>
        </div>

        <div className="metric">
          <strong>04</strong>
          <span>CAREER DIRECTIONS</span>
        </div>

        <div className="metric">
          <strong>03</strong>
          <span>FEATURED BUILDS</span>
        </div>

        <div className="metric">
          <strong>
            300<span>+</span>
          </strong>
          <span>LEETCODE PROBLEMS</span>
        </div>
      </div>

      <div className="signal-foot">
        <span>
          <AudioLines size={14} />
          CURRENT FREQUENCY
        </span>

        <span>AI · CLOUD · CONNECTED SYSTEMS · PRODUCT</span>
      </div>
    </section>
  )
}
