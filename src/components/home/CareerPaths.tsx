import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { paths } from '../../data/homeData'

export default function CareerPaths() {
  return (
    <section id="paths" className="paths section-wrap section-block">
      <div className="section-heading">
        <div>
          <div className="section-kicker">/ CHOOSE YOUR PATH</div>
          <h2>
            Different paths.
            <br />
            <em>One foundation.</em>
          </h2>
        </div>
        <p>
          Explore the work through the lens of the role you are hiring for. Each
          path has a tailored resume.
        </p>
      </div>
      <div className="path-list">
        {paths.map((path, i) => {
          const Icon = path.icon
          return (
            <motion.article
              className="path-card"
              key={path.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
            >
              <span className="path-id">{path.id}</span>
              <div className="path-icon">
                <Icon size={20} />
              </div>
              <div className="path-main">
                <h3>{path.name}</h3>
                <span>{path.role}</span>
                <p>{path.desc}</p>
              </div>
              <div className="path-skills">{path.skills}</div>
              <a
                className="path-download"
                href={`${import.meta.env.BASE_URL}assets/resumes/${path.resume}`}
                download
                aria-label={`Download ${path.role} resume`}
              >
                <span>RESUME</span>
                <ArrowUpRight size={17} />
              </a>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
