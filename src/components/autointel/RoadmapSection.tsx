import { roadmap } from '../../data/autointelData'

export default function RoadmapSection() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-section case-dark-section">
      <div className="section-wrap">
        <div className="case-section-heading">
          <div className="section-kicker">/ 07 — ROADMAP</div>
          <h2>
            From data pipeline
            <br />
            to <em>decision support.</em>
          </h2>
        </div>

        <div className="case-roadmap">
          {roadmap.map((item, index) => (
            <article className="case-roadmap-item" key={item.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
