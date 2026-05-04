import { projects } from '../data.js';

export default function ProjectDetail({ slug }) {
  const project = projects.find(item => item.slug === slug) || projects[0];

  return (
    <main className="project-detail-page">
      <section className="project-detail">
        <a href="#projects" className="back-link">← Back to projects</a>

        <div className="project-detail-head">
          <div>
            <div className="project-meta">
              <span className="project-tag">{project.tag}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <h1>{project.title}</h1>
          </div>
          <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Open GitHub
          </a>
        </div>

        <p className="project-detail-desc">{project.desc}</p>

        <div className="project-detail-grid">
          <div>
            <div className="detail-label">Highlights</div>
            <ul className="detail-list">
              {project.highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="detail-label">Stack</div>
            <div className="detail-stack">
              {project.stack.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
