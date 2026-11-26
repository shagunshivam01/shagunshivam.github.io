import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'

export default function ProjectArchive() {
  return (
    <section id="projects" className="projects section-wrap section-block">
      <div className="section-heading">
        <div>
          <div className="section-kicker">/ SELECTED WORK</div>
          <h2>
            Built in the <em>field.</em>
          </h2>
        </div>

        <p>
          A selection of systems, experiments and tools shaped by practical
          engineering.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const isExternal = project.href.startsWith('http')

          return (
            <motion.article
              className={`project-card ${
                project.featured ? 'project-featured' : ''
              }`}
              key={project.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="project-top">
                <span>CASE FILE / {project.number}</span>
                <span className="project-status">
                  <i /> {project.status}
                </span>
              </div>

              <div className="project-visual">
                <div className={`project-glyph glyph-${project.number}`}>
                  <span>{project.number}</span>
                  <div className="glyph-ring" />
                  <div className="glyph-ring ring-inner" />
                </div>

                <span className="visual-caption">
                  {project.type.toUpperCase()}
                </span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="text-link"
                  href={project.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  {
                    project.title === 'AutoIntel'
                    ? 'Read case study'
                    : isExternal
                      ? 'View repository'
                      : 'Explore project'
                  }
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
