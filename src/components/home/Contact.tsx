import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="contact section-wrap section-block">
      <div className="section-kicker">/ OPEN CHANNEL</div>
      <h2>
        Have a problem
        <br />
        worth <em>solving?</em>
      </h2>
      <p>
        I'm exploring opportunities across product, forward-deployed
        engineering, AI/ML and software engineering.
      </p>
      <a
        className="button button-primary"
        href="mailto:shagunshivam007@gmail.com"
      >
        Start a conversation <Mail size={16} />
      </a>
      <div className="contact-coordinates">
        SHAGUN SHIVAM <span>·</span> INDIA <span>·</span> AVAILABLE FOR REMOTE
        OPPORTUNITIES
      </div>
    </section>
  )
}
