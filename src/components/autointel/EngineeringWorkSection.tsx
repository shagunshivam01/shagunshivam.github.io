import { contributions } from '../../data/autointelData'

export default function EngineeringWorkSection() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="case-section section-wrap">
      <div className="case-section-heading">
        <div className="section-kicker">/ 04 — ENGINEERING WORK</div>
        <h2>
          Working across
          <br />
          the <em>stack.</em>
        </h2>
      </div>

      <div className="case-contribution-grid">
        {contributions.map((item, index) => (
          <article className="case-contribution" key={item.title}>
            <span className="case-contribution-number">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
