import { Github, Linkedin, ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="about section-wrap section-block">
      <div className="about-portrait">
        <div className="portrait-frame">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/profile.jpg`}
            alt="Portrait of Shagun Shivam"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className="portrait-fallback">SS</span>
          <span className="portrait-caption">
            THE BUILDER BEHIND THE SYSTEMS
          </span>
        </div>
      </div>
      <div className="about-copy">
        <div className="section-kicker">/ THE PERSON BEHIND THE WORK</div>
        <h2>
          Engineer by training.
          <br />
          <em>Builder by instinct.</em>
        </h2>
        <p>
          I’m Shagun Shivam, a computer science graduate interested in the space
          where software engineering, AI and real-world systems meet.
        </p>
        <p>
          My experience spans connected-vehicle platforms, cloud data pipelines,
          Android Automotive, machine learning and agentic AI. I enjoy
          understanding a system end to end — from the problem it needs to solve
          to the details that make it work.
        </p>
        <div className="about-links">
          <a
            href="https://github.com/shagunshivam01"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a
            href="https://linkedin.com/in/shagun-shivam-907076370"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
