import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = [
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Career Paths',
      href: '#paths',
    },
    {
      label: 'About',
      href: '#about',
    },
  ]

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Shagun Shivam home">
        <span className="brand-mark">SS</span>
        <span>
          SHAGUN <b>SHIVAM</b>
        </span>
      </a>

      <nav className={mobileOpen ? 'nav nav-open' : 'nav'}>
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <a href="#contact" onClick={() => setMobileOpen(false)}>
          Contact
        </a>
      </nav>

      <a className="nav-cta" href="#projects">
        Explore work <ArrowUpRight size={14} />
      </a>

      <button
        className="mobile-menu"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}
