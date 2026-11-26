export default function CaseFooter() {
  const base = import.meta.env.BASE_URL

  return (
    <footer className="footer section-wrap">
      <a className="brand" href={base}>
        <span className="brand-mark">SS</span>
        <span>
          SHAGUN <b>SHIVAM</b>
        </span>
      </a>
      <span>
        AUTOINTEL / CASE STUDY <span className="gold-period">✦</span> 2026
      </span>
      <a href={`${base}#top`}>BACK TO HOME ↑</a>
    </footer>
  )
}
