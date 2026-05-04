import { getProjectBySlug } from '../db/projects.js';

export default function ProjectDetail({ slug }) {
  const project = getProjectBySlug(slug);
  const images = project.media.filter(item => item.type === 'image');
  const videos = project.media.filter(item => item.type === 'video');
  const documents = project.media.filter(item => item.type === 'pdf');

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

        <div className="project-story">
          {project.body.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="project-media-grid">
          {images.map(item => (
            <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />
          ))}
        </div>

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

        <div className="project-assets">
          {videos.map(item => (
            <div className="project-asset" key={item.src}>
              <div className="detail-label">{item.title}</div>
              <video src={item.src} controls preload="metadata" />
            </div>
          ))}

          {documents.map(item => (
            <a className="project-pdf" href={item.src} target="_blank" rel="noreferrer" key={item.src}>
              <span>{item.title}</span>
              <span>PDF ↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
