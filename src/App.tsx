import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Bot, BriefcaseBusiness, ChevronDown, Code2, Cpu, Github, Linkedin, Mail, Menu, Network, Play, RadioTower, ShieldCheck, X } from 'lucide-react'
import ProjectArchive from './components/projects/ProjectArchive'

const paths = [
  { 
    id: '01', 
    name: 'The Strategist', 
    role: 'Product Management', 
    desc: 'Turning technical capability into useful products, clear priorities and measurable outcomes.', 
    icon: BriefcaseBusiness, 
    skills: 'Discovery · Roadmaps · Product thinking', 
    resume: 'product-management.pdf' 
  },
  { 
    id: '02', 
    name: 'The Pathfinder', 
    role: 'Forward Deployed & Solutions', 
    desc: 'Working at the boundary of customer problems, systems architecture and implementation.', 
    icon: Network, 
    skills: 'Solution design · Integrations · Cloud', 
    resume: 'fde-solutions.pdf' 
  },
  { 
    id: '03', 
    name: 'The Arcanist', 
    role: 'AI / ML Engineering', 
    desc: 'Building practical intelligence with machine learning, LLM applications and agentic systems.', 
    icon: Bot, 
    skills: 'ML · LLMs · AI agents', 
    resume: 'ai-ml-engineer.pdf' 
  },
  { 
    id: '04', 
    name: 'The Craftsman', 
    role: 'Software Engineering', 
    desc: 'Engineering reliable software across backend services, mobile systems and connected devices.', 
    icon: Code2, 
    skills: 'Python · Kotlin · APIs · Systems', 
    resume: 'software-engineer.pdf' 
  },
]

const layers = [
  { 
    id: 'edge', 
    label: '01 / Vehicle edge', 
    title: 'Collect at the source', 
    text: 'An Android Automotive application runs on the infotainment head unit and gathers vehicle-side and application interaction data. Local configuration and connectivity support the collection workflow.', 
    components: [
      'Infotainment head unit', 
      'AutoIntel Android app', 
      'Vehicle / app telemetry', 
      'Wi-Fi network connection'
    ] 
  },
  { 
    id: 'secure', 
    label: '02 / Secure ingestion', 
    title: 'Transmit securely', 
    text: 'The vehicle-side service publishes telemetry over MQTT to AWS IoT Core, using X.509 certificate authentication for device identity and secure communication.', 
    components: [
      'MQTT', 
      'AWS IoT Core', 
      'X.509 certificates', 
      'IoT Rules'
    ] 
  },
  {
    id: 'cloud',
    label: '03 / Cloud data',
    title: 'Store and process',
    text: 'The cloud pipeline connects Amazon Kinesis with Amazon S3 for data ingestion and storage. AWS Lambda supports processing functions in the system.',
    components: ['Amazon Kinesis', 'Amazon S3', 'AWS Lambda'],
  },
  {
    id: 'insight',
    label: '04 / Analytics',
    title: 'Make telemetry queryable',
    text: 'Amazon Athena is connected for querying stored data. Dashboarding and visual reporting are planned next steps; dashboards are not yet live.',
    components: [
      'Amazon Athena',
      'Amazon QuickSight',
      'Analytics dashboards',
    ],
  },
  { 
    id: 'future', 
    label: '05 / Future extensions', 
    title: 'Expand the platform', 
    text: 'These capabilities were identified as planned extensions, not part of the currently implemented inventory.', 
    components: [
      'Amazon SageMaker — ML integration', 
      'Amazon DynamoDB — application data', 
      'Amazon SNS — notifications'
    ] 
  },
]


function App() {
  const [activeLayer, setActiveLayer] = useState('edge')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  const currentLayer = layers.find(layer => layer.id === activeLayer)!
  const nav = [
    { 
      label: 'Projects', 
      href: '#projects' 
    }, 
    { 
      label: 'Career paths', 
      href: '#paths' 
    }, 
    { 
      label: 'About', 
      href: '#about' 
    }
  ]

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="grain"/>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Shagun Shivam home"><span className="brand-mark">SS</span><span>SHAGUN <b>SHIVAM</b></span></a>
      <nav className={mobileOpen ? 'nav nav-open' : 'nav'}>{nav.map(item => <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>)}<a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></nav>
      <a className="nav-cta" href="#projects">Explore work <ArrowUpRight size={14}/></a>
      <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> PORTFOLIO <span className="eyebrow-dot">/</span> ENGINEERING & INTELLIGENCE</div>
          <h1>Forging<br/><em>intelligent</em><br/>systems<span className="gold-period">.</span></h1>
          <p className="hero-lede">I build across the boundaries of software, AI and connected systems — turning complex technical ideas into working experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowRight size={16}/></a><button className="button button-ghost" onClick={() => setVideoOpen(true)}><Play size={14}/> Watch introduction</button></div>
          <div className="hero-meta"><span><i className="status-dot"/> OPEN TO OPPORTUNITIES</span><span>INDIA · OPEN TO REMOTE / RELOCATION</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract mechanical sigil illustration">
          <div className="sigil-orbit orbit-a"/><div className="sigil-orbit orbit-b"/><div className="sigil-orbit orbit-c"/>
          <div className="sigil-core"><span>SS</span><small>EST. IN CURIOSITY</small></div>
          <div className="art-label art-label-top">FIELD NOTES <span>001—026</span></div><div className="art-label art-label-bottom">SYSTEMS / INTELLIGENCE / CRAFT</div>
          <div className="crosshair crosshair-a"/><div className="crosshair crosshair-b"/>
        </div>
        <a href="#signal" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
      </section>

      <section id="signal" className="signal section-wrap">
        <div className="section-kicker">/ SYSTEM SNAPSHOT</div>
        <div className="signal-grid">
          <div className="signal-intro"><span className="micro-label">A MULTI-DISCIPLINARY BUILDER</span><h2>Curiosity, converted<br/>into <em>capability.</em></h2></div>
          <div className="metric"><strong>04</strong><span>CAREER DIRECTIONS</span></div>
          <div className="metric"><strong>03</strong><span>FEATURED BUILDS</span></div>
          <div className="metric"><strong>300<span>+</span></strong><span>LEETCODE PROBLEMS</span></div>
        </div>
        <div className="signal-foot"><span><AudioLines size={14}/> CURRENT FREQUENCY</span><span>AI · CLOUD · CONNECTED SYSTEMS · PRODUCT</span></div>
      </section>

      <ProjectArchive />

      <section id="autointel" className="architecture section-wrap section-block">
        <div className="section-heading"><div><div className="section-kicker">/ FLAGSHIP SYSTEM · AUTOINTEL</div><h2>From vehicle signal<br/>to <em>useful insight.</em></h2></div><p>A B2B connected-vehicle telemetry and analytics platform for automotive stakeholders — not a consumer-facing app.</p></div>
        <div className="arch-panel">
          <div className="arch-map"><div className="arch-map-head"><span>PLATFORM MAP / INTERACTIVE</span><span><i className="status-dot"/> SYSTEM OVERVIEW</span></div>
            <div className="flow-line"/>
            <div className="arch-nodes">{layers.map((layer, index)=><button key={layer.id} className={`arch-node ${activeLayer===layer.id?'active':''} ${layer.id==='future'?'future-node':''}`} onClick={()=>setActiveLayer(layer.id)}><span className="node-index">0{index+1}</span><span className="node-icon">{index===0?<Cpu size={18}/>:index===1?<ShieldCheck size={18}/>:index===2?<RadioTower size={18}/>:index===3?<AudioLines size={18}/>:<ChevronDown size={18}/>}</span><b>{layer.label.split(' / ')[1]}</b><small>{index === 4 ? 'PLANNED' : index === 3 ? 'PARTIAL' : 'IMPLEMENTED'}</small></button>)}</div>
            <div className="arch-map-foot"><span>SELECT A NODE TO INSPECT THE LAYER</span><span>EDGE → CLOUD → INSIGHT</span></div>
          </div>
          <div className="arch-detail" key={currentLayer.id}><div className="section-kicker">{currentLayer.label}</div><h3>{currentLayer.title}</h3><p>{currentLayer.text}</p><div className="component-list">{currentLayer.components.map((component,i)=><div key={component}><span>0{i+1}</span>{component}</div>)}</div><div className="arch-note">{activeLayer==='future'?'ROADMAP / PLANNED EXTENSIONS':'IMPLEMENTATION / COMPLETED COMPONENTS'}</div></div>
        </div>
        <div className="arch-disclaimer">
          Architecture shown at a portfolio level. Company implementation details and proprietary code are intentionally not disclosed.
        </div>
        <a className="text-link" href="autointel.html">
          Explore the full AutoIntel case study
          <ArrowUpRight size={15} />
        </a>
      </section>

      <section id="paths" className="paths section-wrap section-block">
        <div className="section-heading"><div><div className="section-kicker">/ CHOOSE YOUR PATH</div><h2>Different paths.<br/><em>One foundation.</em></h2></div><p>Explore the work through the lens of the role you are hiring for. Each path has a tailored resume.</p></div>
        <div className="path-list">{paths.map((path,i)=>{const Icon=path.icon;return <motion.article className="path-card" key={path.id} initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.06}}><span className="path-id">{path.id}</span><div className="path-icon"><Icon size={20}/></div><div className="path-main"><h3>{path.name}</h3><span>{path.role}</span><p>{path.desc}</p></div><div className="path-skills">{path.skills}</div><a className="path-download" href={`${import.meta.env.BASE_URL}assets/resumes/${path.resume}`} download aria-label={`Download ${path.role} resume`}><span>RESUME</span><ArrowUpRight size={17}/></a></motion.article>})}</div>
      </section>

      <section id="about" className="about section-wrap section-block">
        <div className="about-portrait"><div className="portrait-frame"><img src={`${import.meta.env.BASE_URL}assets/images/profile.jpg`} alt="Portrait of Shagun Shivam" onError={e=>{e.currentTarget.style.display='none'}}/><span className="portrait-fallback">SS</span><span className="portrait-caption">THE BUILDER BEHIND THE SYSTEMS</span></div></div>
        <div className="about-copy"><div className="section-kicker">/ THE PERSON BEHIND THE WORK</div><h2>Engineer by training.<br/><em>Builder by instinct.</em></h2><p>I’m Shagun Shivam, a computer science graduate interested in the space where software engineering, AI and real-world systems meet.</p><p>My experience spans connected-vehicle platforms, cloud data pipelines, Android Automotive, machine learning and agentic AI. I enjoy understanding a system end to end — from the problem it needs to solve to the details that make it work.</p><div className="about-links"><a href="https://github.com/shagunshivam01" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><a href="https://linkedin.com/in/shagun-shivam-907076370" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a></div></div>
      </section>

      <section id="contact" className="contact section-wrap section-block"><div className="section-kicker">/ OPEN CHANNEL</div><h2>Have a problem<br/>worth <em>solving?</em></h2><p>I'm exploring opportunities across product, forward-deployed engineering, AI/ML and software engineering.</p><a className="button button-primary" href="mailto:shagunshivam007@gmail.com">Start a conversation <Mail size={16}/></a><div className="contact-coordinates">SHAGUN SHIVAM <span>·</span> INDIA <span>·</span> AVAILABLE FOR REMOTE OPPORTUNITIES</div></section>
    </main>

    <footer className="footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">SS</span><span>SHAGUN <b>SHIVAM</b></span></a><span>FORGED WITH CURIOSITY <span className="gold-period">✦</span> 2026</span><a href="#top">BACK TO TOP ↑</a></footer>

    {videoOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Introduction video" onClick={()=>setVideoOpen(false)}><div className="video-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setVideoOpen(false)} aria-label="Close video"><X/></button><div className="section-kicker">/ A SHORT INTRODUCTION</div><h3>Meet Shagun.</h3><video controls playsInline poster={`${import.meta.env.BASE_URL}assets/images/intro-poster.jpg`}><source src={`${import.meta.env.BASE_URL}assets/video/intro.mp4`} type="video/mp4"/>Your browser does not support the video element.</video><p className="video-hint">Thanks for stopping by. I put together this quick intro to share what I’m building, what drives my work, and how we can collaborate. Take a look around—or reach out directly if something catches your eye.</p></div></div>}
  </div>
}

export default App
