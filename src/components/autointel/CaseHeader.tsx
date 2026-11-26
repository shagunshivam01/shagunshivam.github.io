import { ArrowUpRight } from 'lucide-react'

export default function CaseHeader() {
  const base = import.meta.env.BASE_URL

  return (
    <header className="topbar">
      <a className="brand" href={base} aria-label="Back to homepage">
        <span className="brand-mark">SS</span>
        <span>
          SHAGUN <b>SHIVAM</b>
        </span>
      </a>

      <nav className="case-nav">
        <a href={`${base}#projects`}>Projects</a>
        <a href={`${base}#about`}>About</a>
        <a href={`${base}#contact`}>Contact</a>
      </nav>

      <a className="nav-cta" href={`${base}#projects`}>
        All projects <ArrowUpRight size={14} />
      </a>
    </header>
  )
}
