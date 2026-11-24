import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Bot, BriefcaseBusiness, ChevronDown, Code2, Cpu, Github, Linkedin, Mail, Menu, Network, Play, RadioTower, ShieldCheck, X } from 'lucide-react'

const paths = [
  { id: '01', name: 'The Strategist', role: 'Product Management', desc: 'Turning technical capability into useful products, clear priorities and measurable outcomes.', icon: BriefcaseBusiness, skills: 'Discovery · Roadmaps · Product thinking', resume: 'product-management.pdf' },
  { id: '02', name: 'The Pathfinder', role: 'Forward Deployed & Solutions', desc: 'Working at the boundary of customer problems, systems architecture and implementation.', icon: Network, skills: 'Solution design · Integrations · Cloud', resume: 'fde-solutions.pdf' },
  { id: '03', name: 'The Arcanist', role: 'AI / ML Engineering', desc: 'Building practical intelligence with machine learning, LLM applications and agentic systems.', icon: Bot, skills: 'ML · LLMs · AI agents', resume: 'ai-ml-engineer.pdf' },
  { id: '04', name: 'The Craftsman', role: 'Software Engineering', desc: 'Engineering reliable software across backend services, mobile systems and connected devices.', icon: Code2, skills: 'Python · Kotlin · APIs · Systems', resume: 'software-engineer.pdf' },
]

const projects = [
  { number: '01', title: 'AutoIntel', type: 'Connected-vehicle data platform', status: 'Implemented core pipeline', description: 'A B2B telemetry and analytics platform designed to help automotive stakeholders collect, process and understand connected-vehicle data.', tags: ['Android Automotive', 'MQTT', 'AWS IoT Core', 'Kinesis', 'S3', 'Athena', 'QuickSight'], href: '#autointel', featured: true },
  { number: '02', title: 'AgentForge', type: 'LLM agent framework', status: 'Project build', description: 'An exploration of agentic application design, orchestration and the building blocks behind tool-using AI systems.', tags: ['Python', 'LLMs', 'Agents', 'FastAPI'], href: 'https://github.com/shagunshivam01/agentforge', featured: true },
  { number: '03', title: 'ML Starter Pack', type: 'Machine learning repository', status: 'Open source', description: 'A practical starting point for exploring core machine-learning workflows and foundational techniques.', tags: ['Python', 'Machine Learning', 'Scikit-learn'], href: 'https://github.com/shagunshivam01/ml-starter-pack', featured: false },
]

const layers = [
  { id: 'edge', label: '01 / Vehicle edge', title: 'Collect at the source', text: 'An Android Automotive application runs on the infotainment head unit and gathers vehicle-side and application interaction data. Local configuration and connectivity support the collection workflow.', components: ['Infotainment head unit', 'AutoIntel Android app', 'Vehicle / app telemetry', 'Wi-Fi network connection'] },
  { id: 'secure', label: '02 / Secure ingestion', title: 'Transmit securely', text: 'The vehicle-side service publishes telemetry over MQTT to AWS IoT Core, using X.509 certificate authentication for device identity and secure communication.', components: ['MQTT', 'AWS IoT Core', 'X.509 certificates', 'IoT Rules'] },
  { id: 'cloud', label: '03 / Cloud data', title: 'Store and process', text: 'The implemented cloud pipeline uses Kinesis Data Firehose for delivery to Amazon S3. AWS Lambda supports processing functions in the system.', components: ['Kinesis Data Firehose', 'Amazon S3', 'AWS Lambda'] },
  { id: 'insight', label: '04 / Analytics', title: 'Query and explore', text: 'Amazon Athena makes stored data queryable, while Amazon QuickSight provides dashboards and visual reporting for analysis.', components: ['Amazon Athena', 'Amazon QuickSight'] },
  { id: 'future', label: '05 / Future extensions', title: 'Expand the platform', text: 'These capabilities were identified as planned extensions, not part of the currently implemented inventory.', components: ['Amazon SageMaker — ML integration', 'Amazon DynamoDB — application data', 'Amazon SNS — notifications'] },
]

function App() {
  const [activeLayer, setActiveLayer] = useState('edge')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const currentLayer = layers.find(layer => layer.id === activeLayer)!
  const nav = [{ label: 'Projects', href: '#projects' }, { label: 'Career paths', href: '#paths' }, { label: 'About', href: '#about' }]

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

      <section id="projects" className="projects section-wrap section-block">
        <div className="section-heading"><div><div className="section-kicker">/ SELECTED WORK</div><h2>Built in the <em>field.</em></h2></div><p>A selection of systems, experiments and tools shaped by practical engineering.</p></div>
        <div className="project-grid">{projects.map((project, i) => <motion.article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.number} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.5,delay:i*.08}}>
          <div className="project-top"><span>CASE FILE / {project.number}</span><span className="project-status"><i/> {project.status}</span></div>
          <div className="project-visual"><div className={`project-glyph glyph-${project.number}`}><span>{project.number}</span><div className="glyph-ring"/><div className="glyph-ring ring-inner"/></div><span className="visual-caption">{project.type.toUpperCase()}</span></div>
          <div className="project-body"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{project.href.startsWith('http') ? 'View repository' : 'Explore case study'} <ArrowUpRight size={15}/></a></div>
        </motion.article>)}</div>
      </section>

      <section id="autointel" className="architecture section-wrap section-block">
        <div className="section-heading"><div><div className="section-kicker">/ FLAGSHIP SYSTEM · AUTOINTEL</div><h2>From vehicle signal<br/>to <em>useful insight.</em></h2></div><p>A B2B connected-vehicle telemetry and analytics platform for automotive stakeholders — not a consumer-facing app.</p></div>
        <div className="arch-panel">
          <div className="arch-map"><div className="arch-map-head"><span>PLATFORM MAP / INTERACTIVE</span><span><i className="status-dot"/> SYSTEM OVERVIEW</span></div>
            <div className="flow-line"/>
            <div className="arch-nodes">{layers.map((layer, index)=><button key={layer.id} className={`arch-node ${activeLayer===layer.id?'active':''} ${layer.id==='future'?'future-node':''}`} onClick={()=>setActiveLayer(layer.id)}><span className="node-index">0{index+1}</span><span className="node-icon">{index===0?<Cpu size={18}/>:index===1?<ShieldCheck size={18}/>:index===2?<RadioTower size={18}/>:index===3?<AudioLines size={18}/>:<ChevronDown size={18}/>}</span><b>{layer.label.split(' / ')[1]}</b><small>{index===4?'PLANNED':'IMPLEMENTED'}</small></button>)}</div>
            <div className="arch-map-foot"><span>SELECT A NODE TO INSPECT THE LAYER</span><span>EDGE → CLOUD → INSIGHT</span></div>
          </div>
          <div className="arch-detail" key={currentLayer.id}><div className="section-kicker">{currentLayer.label}</div><h3>{currentLayer.title}</h3><p>{currentLayer.text}</p><div className="component-list">{currentLayer.components.map((component,i)=><div key={component}><span>0{i+1}</span>{component}</div>)}</div><div className="arch-note">{activeLayer==='future'?'ROADMAP / PLANNED EXTENSIONS':'IMPLEMENTATION / COMPLETED COMPONENTS'}</div></div>
        </div>
        <div className="arch-disclaimer">Architecture shown at a portfolio level. Company implementation details and proprietary code are intentionally not disclosed.</div>
      </section>

      <section id="paths" className="paths section-wrap section-block">
        <div className="section-heading"><div><div className="section-kicker">/ CHOOSE YOUR PATH</div><h2>Different paths.<br/><em>One foundation.</em></h2></div><p>Explore the work through the lens of the role you are hiring for. Each path has a tailored resume.</p></div>
        <div className="path-list">{paths.map((path,i)=>{const Icon=path.icon;return <motion.article className="path-card" key={path.id} initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.06}}><span className="path-id">{path.id}</span><div className="path-icon"><Icon size={20}/></div><div className="path-main"><h3>{path.name}</h3><span>{path.role}</span><p>{path.desc}</p></div><div className="path-skills">{path.skills}</div><a className="path-download" href={`/assets/resumes/${path.resume}`} download aria-label={`Download ${path.role} resume`}><span>RESUME</span><ArrowUpRight size={17}/></a></motion.article>})}</div>
      </section>

      <section id="about" className="about section-wrap section-block">
        <div className="about-portrait"><div className="portrait-frame"><img src="/assets/images/profile.jpg" alt="Portrait of Shagun Shivam" onError={e=>{e.currentTarget.style.display='none'}}/><span className="portrait-fallback">SS</span><span className="portrait-caption">THE BUILDER BEHIND THE SYSTEMS</span></div></div>
        <div className="about-copy"><div className="section-kicker">/ THE PERSON BEHIND THE WORK</div><h2>Engineer by training.<br/><em>Builder by instinct.</em></h2><p>I’m Shagun Shivam, a computer science graduate interested in the space where software engineering, AI and real-world systems meet.</p><p>My experience spans connected-vehicle platforms, cloud data pipelines, Android Automotive, machine learning and agentic AI. I enjoy understanding a system end to end — from the problem it needs to solve to the details that make it work.</p><div className="about-links"><a href="https://github.com/shagunshivam01" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><a href="https://linkedin.com/in/shagun-shivam-907076370" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a></div></div>
      </section>

      <section id="contact" className="contact section-wrap section-block"><div className="section-kicker">/ OPEN CHANNEL</div><h2>Have a problem<br/>worth <em>solving?</em></h2><p>I'm exploring opportunities across product, forward-deployed engineering, AI/ML and software engineering.</p><a className="button button-primary" href="mailto:shagunshivam007@gmail.com">Start a conversation <Mail size={16}/></a><div className="contact-coordinates">SHAGUN SHIVAM <span>·</span> INDIA <span>·</span> AVAILABLE FOR REMOTE OPPORTUNITIES</div></section>
    </main>

    <footer className="footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">SS</span><span>SHAGUN <b>SHIVAM</b></span></a><span>FORGED WITH CURIOSITY <span className="gold-period">✦</span> 2026</span><a href="#top">BACK TO TOP ↑</a></footer>

    {videoOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Introduction video" onClick={()=>setVideoOpen(false)}><div className="video-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setVideoOpen(false)} aria-label="Close video"><X/></button><div className="section-kicker">/ A SHORT INTRODUCTION</div><h3>Meet Shagun.</h3><video controls playsInline poster="/assets/images/intro-poster.jpg"><source src="/assets/video/intro.mp4" type="video/mp4"/>Your browser does not support the video element.</video><p className="video-hint">Thanks for stopping by. I put together this quick intro to share what I’m building, what drives my work, and how we can collaborate. Take a look around—or reach out directly if something catches your eye.</p></div></div>}
  </div>
}

export default App
