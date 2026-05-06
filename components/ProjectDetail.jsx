export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <main className="project-detail-page">
        <section className="project-detail">
          <a href="#projects" className="back-link">← Back to projects</a>
          <h1>Project not found</h1>
          <p className="project-detail-desc">Add or restore projects from the admin panel.</p>
        </section>
      </main>
    );
  }

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

        {project.contentBlocks.map((block, index) => {
          if (block.type === 'text') {
            return (
              <div className="project-story" key={`${block.type}-${index}`}>
                {block.paragraphs.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            );
          }

          if (block.type === 'gallery') {
            return (
              <div className="project-media-grid" key={`${block.type}-${index}`}>
                {block.items.map(item => (
                  <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />
                ))}
              </div>
            );
          }

          if (block.type === 'video') {
            return (
              <div className="project-asset" key={`${block.type}-${index}`}>
                <div className="detail-label">{block.title}</div>
                <video src={block.src} controls preload="metadata" />
              </div>
            );
          }

          if (block.type === 'pdf') {
            return (
              <a className="project-pdf" href={block.src} target="_blank" rel="noreferrer" key={`${block.type}-${index}`}>
                <span>{block.title}</span>
                <span>PDF ↗</span>
              </a>
            );
          }

          return null;
        })}

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
