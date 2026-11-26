import { ArrowDown, ArrowRight, Play } from 'lucide-react'

export type HeroProps = {
  onWatchVideo: () => void
}

export default function Hero({ onWatchVideo }: HeroProps) {
  return (
    <section className="hero section-wrap">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          PORTFOLIO
          <span className="eyebrow-dot">/</span>
          ENGINEERING & INTELLIGENCE
        </div>

        <h1>
          Forging
          <br />
          <em>intelligent</em>
          <br />
          systems
          <span className="gold-period">.</span>
        </h1>

        <p className="hero-lede">
          I build across the boundaries of software, AI and connected systems —
          turning complex technical ideas into working experiences.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore projects <ArrowRight size={16} />
          </a>

          <button className="button button-ghost" onClick={onWatchVideo}>
            <Play size={14} />
            Watch introduction
          </button>
        </div>

        <div className="hero-meta">
          <span>
            <i className="status-dot" />
            OPEN TO OPPORTUNITIES
          </span>

          <span>INDIA · OPEN TO REMOTE / RELOCATION</span>
        </div>
      </div>

      <div
        className="hero-art"
        aria-label="Abstract mechanical sigil illustration"
      >
        <div className="sigil-orbit orbit-a" />
        <div className="sigil-orbit orbit-b" />
        <div className="sigil-orbit orbit-c" />

        <div className="sigil-core">
          <span>SS</span>
          <small>EST. IN CURIOSITY</small>
        </div>

        <div className="art-label art-label-top">
          FIELD NOTES
          <span>001—026</span>
        </div>

        <div className="art-label art-label-bottom">
          SYSTEMS / INTELLIGENCE / CRAFT
        </div>

        <div className="crosshair crosshair-a" />
        <div className="crosshair crosshair-b" />
      </div>

      <a href="#signal" className="scroll-cue">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} />
      </a>
    </section>
  )
}
