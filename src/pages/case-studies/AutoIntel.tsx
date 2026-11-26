import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CarFront,
  CheckCircle2,
  Clock3,
  Database,
  Github,
  Layers3,
  RadioTower,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const architecture = [
  {
    number: '01',
    name: 'Vehicle edge',
    icon: CarFront,
    status: 'Operational foundation',
    description:
      'An Android Automotive application provides the vehicle-side telemetry source, collecting application activity and supported vehicle-related events for downstream fleet analytics.',
    technologies: [
      'Android Automotive OS', 
      'Kotlin', 
      'Vehicle APIs', 
      'Application events'
    ],
  },
  {
    number: '02',
    name: 'Secure ingestion',
    icon: ShieldCheck,
    status: 'Connected',
    description:
      'The service publishes telemetry using MQTT to AWS IoT Core. Device authentication uses X.509 certificates to establish a trusted connection.',
    technologies: [
      'MQTT', 
      'AWS IoT Core', 
      'X.509 certificates', 
      'IoT policies and rules'
    ],
  },
  {
    number: '03',
    name: 'Cloud data pipeline',
    icon: RadioTower,
    status: 'Connected',
    description:
      'The cloud pipeline connects Amazon Kinesis, Amazon S3, and AWS Lambda to ingest, store, and process telemetry for centralized fleet analytics.',
    technologies: [
      'Amazon Kinesis', 
      'Amazon S3', 
      'AWS Lambda'
    ],
  },
  {
    number: '04',
    name: 'Analytics & Visualization',
    icon: Database,
    status: 'Connected',
    description:
      'Amazon Athena provides query access to telemetry stored in S3, while Amazon QuickSight turns that data into dashboards for exploring AutoIntel vehicle telemetry and fleet analytics.',
    technologies: [
      'Amazon Athena', 
      'Amazon QuickSight', 
      'Analytics dashboards'
    ],
  },
]

const fleetAnalytics = [
  {
    number: '01',
    title: 'Vehicle activity',
    text: 'Explore vehicle activity and usage patterns through telemetry collected from connected vehicles.',
  },
  {
    number: '02',
    title: 'HVAC usage',
    text: 'Analyze climate-control activity and HVAC usage patterns across individual vehicles and the fleet.',
  },
  {
    number: '03',
    title: 'Application activity',
    text: 'Understand infotainment application usage and interaction patterns through application event telemetry.',
  },
  {
    number: '04',
    title: 'Fleet-wide event trends',
    text: 'Visualize aggregated telemetry events across the fleet to identify broader activity patterns and operational trends.',
  },
]

const contributions = [
  {
    title: 'Android Automotive application',
    text: 'Explored the existing application and its vehicle-facing functionality, including its use of Android Car APIs and vehicle property managers.',
  },
  {
    title: 'Platform and dependency modernization',
    text: 'Worked through dependency updates, including upgrading ExoPlayer and moving Room and Glide compiler processing to KAPT.',
  },
  {
    title: 'Automotive emulator validation',
    text: 'Set up and validated the application in an Android Automotive OS emulator, including privileged-app installation and car-service availability checks.',
  },
  {
    title: 'Cloud telemetry integration',
    text: 'Worked with the MQTT-to-AWS IoT Core flow and the connected Kinesis, S3, Lambda and Athena components.',
  },
]

const roadmap = [
  {
    title: 'Expand fleet analytics coverage',
    text: 'Add more telemetry dimensions, event categories, and dashboard views for automotive and fleet stakeholders.',
  },
  {
    title: 'Advanced fleet intelligence',
    text: 'Explore machine-learning workflows for predictive analytics, anomaly detection, and deeper fleet insights.',
  },
  {
    title: 'Extend the platform',
    text: 'Evaluate additional services for application-level data management, machine-learning workloads, and event notifications.',
  },
]

export default function AutoIntelPage() {
  const base = import.meta.env.BASE_URL

  return (
    <div className="site-shell case-study-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />

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

      <main>
        <section className="case-hero section-wrap">
          <a className="case-back" href={`${base}#projects`}>
            <ArrowLeft size={14} /> BACK TO PROJECT ARCHIVE
          </a>

          <div className="eyebrow">
            <span className="eyebrow-line" />
            CASE STUDY / 001
            <span className="eyebrow-dot">/</span>
            CONNECTED SYSTEMS
          </div>

          <div className="case-hero-grid">
            <div>
              <div className="case-status">
                <span className="status-dot" />
                  B2B FLEET ANALYTICS PLATFORM
              </div>

              <h1>
                Auto<span className="case-title-accent">Intel</span>
                <span className="gold-period">.</span>
              </h1>

              <p className="case-lede">
                Turning connected-vehicle telemetry into fleet intelligence — 
                building an AWS-powered data pipeline for vehicle and fleet-wide
                analytics.
              </p>

              <div className="case-meta">
                <div>
                  <span>DOMAIN</span>
                  <strong>Automotive · Cloud · Data</strong>
                </div>
                <div>
                  <span>PLATFORM</span>
                  <strong>Android Automotive + AWS</strong>
                </div>
                <div>
                  <span>PROJECT TYPE</span>
                  <strong>B2B connected-vehicle analytics</strong>
                </div>
              </div>
            </div>

            <div className="case-emblem" aria-label="AutoIntel system emblem">
              <div className="case-emblem-ring ring-one" />
              <div className="case-emblem-ring ring-two" />
              <div className="case-emblem-core">
                <CarFront size={42} strokeWidth={1} />
                <span>AUTO / INTEL</span>
              </div>
              <span className="emblem-caption emblem-top">EDGE SIGNAL</span>
              <span className="emblem-caption emblem-bottom">CLOUD INSIGHT</span>
            </div>
          </div>

          <div className="case-quick-facts">
            <div>
              <Activity size={17} />
              <span>Telemetry collection</span>
            </div>
            <div>
              <RadioTower size={17} />
              <span>MQTT ingestion</span>
            </div>
            <div>
              <Database size={17} />
              <span>Cloud data pipeline</span>
            </div>
            <div>
              <Layers3 size={17} />
              <span>Fleet analytics</span>
            </div>
          </div>
        </section>

        <section className="case-section section-wrap">
          <div className="case-section-heading">
            <div className="section-kicker">/ 01 — THE PROBLEM</div>
            <h2>
              Vehicle data needs<br />
              a path to <em>meaning.</em>
            </h2>
          </div>

          <div className="case-two-column">
            <div className="case-prose">
              <p>
                Connected vehicles generate large volumes of telemetry across 
                vehicle systems, climate controls, and infotainment applications. 
                For automotive OEMs and fleet operators, the challenge is turning 
                these distributed events into a consistent source of operational 
                intelligence.
              </p>
              <p>
                AutoIntel addresses this through a centralized B2B data pipeline
                designed for fleet analytics. It connects vehicle-side telemetry
                collection with cloud ingestion, storage, querying, and
                visualization, enabling stakeholders to explore both individual
                vehicle activity and fleet-wide trends.
              </p>
            </div>

            <div className="case-insight-card">
              <span className="micro-label">THE CENTRAL CHALLENGE</span>
              <h3>
                From connected-vehicle telemetry to fleet-wide operational
                intelligence.
              </h3>
              <div className="insight-flow">
                <span>COLLECT</span>
                <ArrowRight size={14} />
                <span>TRANSMIT</span>
                <ArrowRight size={14} />
                <span>ANALYZE</span>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-dark-section">
          <div className="section-wrap">
            <div className="case-section-heading">
              <div className="section-kicker">/ 02 — SYSTEM ARCHITECTURE</div>
              <h2>
                A connected path<br />
                from <em>edge to cloud.</em>
              </h2>
              <p>
                A portfolio-level view of the system. Select components below
                to understand their role in the data flow.
              </p>
            </div>

            <div className="case-architecture">
              {architecture.map((layer, index) => {
                const Icon = layer.icon

                return (
                  <article className="case-architecture-card" key={layer.number}>
                    <div className="case-architecture-top">
                      <span>{layer.number} / 04</span>
                      <span className='layer-state'>
                        {layer.status}
                      </span>
                    </div>

                    <div className="case-layer-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{layer.name}</h3>
                    <p>{layer.description}</p>

                    <div className="case-tech-list">
                      {layer.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="case-pipeline-note">
              <Workflow size={17} />
              <p>
                <strong>Data flow:</strong> Android Automotive → MQTT → AWS IoT
                Core → Amazon Kinesis → Amazon S3 → AWS Lambda → Amazon Athena.
              </p>
            </div>
          </div>
        </section>

        <section className="case-section section-wrap">
          <div className="case-section-heading">
            <div className="section-kicker">/ 03 — FLEET INTELLIGENCE</div>
            <h2>
              From vehicle signals<br />
              to <em>fleet insights.</em>
            </h2>
            <p>
              AutoIntel transforms collected telemetry into analytics
              that help automotive organizations explore vehicle
              behavior and fleet-wide activity.
            </p>
          </div>

          <div className="case-contribution-grid">
            {fleetAnalytics.map((item) => (
              <article className="case-contribution" key={item.number}>
                <span className="case-contribution-number">
                  {item.number}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="case-pipeline-note">
            <Database size={17} />
            <p>
              <strong>Analytics delivery:</strong> Amazon Athena queries
              telemetry data, and Amazon QuickSight dashboards provide
              vehicle-level and fleet-wide visibility.
            </p>
          </div>
        </section>

        <section className="case-section section-wrap">
          <div className="case-section-heading">
            <div className="section-kicker">/ 04 — ENGINEERING WORK</div>
            <h2>
              Working across<br />
              the <em>stack.</em>
            </h2>
          </div>

          <div className="case-contribution-grid">
            {contributions.map((item, index) => (
              <article className="case-contribution" key={item.title}>
                <span className="case-contribution-number">
                  0{index + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-challenge-section">
          <div className="section-wrap case-two-column">
            <div>
              <div className="section-kicker">/ 05 — ENGINEERING CHALLENGE</div>
              <h2>
                Automotive software<br />
                meets <em>vehicle state.</em>
              </h2>
            </div>

            <div className="case-prose">
              <p>
                To address the limitations encountered during emulator validation, 
                we used an in-house developed vehicle simulation tool designed to 
                emulate vehicle behavior more realistically. This provided a more 
                representative environment for testing vehicle properties and 
                application interactions beyond what the standard emulator could offer.
              </p>
              <p>
                The approach helped us investigate state-dependent vehicle 
                properties and validate application behavior under simulated vehicle 
                conditions. It also highlighted the importance of having a controlled 
                testing environment when developing applications for Android Automotive, 
                where access to vehicle data depends on the availability and state of 
                individual properties.
              </p>
              <div className="case-challenge-callout">
                <Clock3 size={17} />
                <span>
                  Validation approach — in-house vehicle simulation for more realistic 
                  testing.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section section-wrap">
          <div className="case-section-heading">
            <div className="section-kicker">/ 06 — DELIVERY STATUS</div>
            <h2>
              What works.<br />
              What comes <em>next.</em>
            </h2>
          </div>

          <div className="case-status-grid">
            <div className="case-status-column">
              <div className="case-status-heading">
                <CheckCircle2 size={18} />
                <h3>Connected / implemented</h3>
              </div>
              <ul>
                <li>Android Automotive telemetry workflow</li>
                <li>MQTT publishing to AWS IoT Core</li>
                <li>Amazon Kinesis and S3 data pipeline connections</li>
                <li>AWS Lambda integration</li>
                <li>Amazon Athena connectivity for telemetry queries</li>
                <li>Amazon QuickSight dashboards displaying Athena telemetry</li>
                <li>Vehicle activity analytics</li>
                <li>HVAC usage analytics</li>
                <li>Application activity analytics</li>
                <li>Fleet-wide event trend analytics</li>
              </ul>
            </div>

            <div className="case-status-column roadmap-column">
              <div className="case-status-heading">
                <Clock3 size={18} />
                <h3>Planned / in progress</h3>
              </div>
              <ul>
                <li>Further Android Automotive runtime compatibility validation</li>
                <li>Expanded telemetry coverage and dashboard capabilities</li>
                <li>Machine-learning workflows for predictive fleet analytics</li>
                <li>Additional application-level data management capabilities</li>
                <li>Advanced fleet intelligence and anomaly detection</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="case-section case-dark-section">
          <div className="section-wrap">
            <div className="case-section-heading">
              <div className="section-kicker">/ 07 — ROADMAP</div>
              <h2>
                From data pipeline<br />
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

        <section className="case-outcome section-wrap">
          <div className="section-kicker">/ THE TAKEAWAY</div>
          <h2>
            Infrastructure first.<br />
            <em>Intelligence next.</em>
          </h2>
          <p>
            AutoIntel demonstrates an end-to-end B2B connected-vehicle
            analytics platform, taking telemetry from Android Automotive
            through an AWS-powered cloud pipeline and into Amazon
            QuickSight dashboards. By bringing together vehicle activity,
            HVAC usage, application activity, and fleet-wide event trends,
            the platform provides automotive organizations with a
            centralized foundation for understanding vehicle behavior
            and exploring fleet-level operational insights.
          </p>

          <div className="case-outcome-actions">
            <a className="button button-primary" href={`${base}#projects`}>
              Explore more projects <ArrowRight size={15} />
            </a>
            <a
              className="button button-ghost"
              href="https://github.com/shagunshivam01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <Github size={15} />
            </a>
          </div>
        </section>
      </main>

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
    </div>
  )
}
