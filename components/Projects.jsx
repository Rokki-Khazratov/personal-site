export default function Projects({ projects }) {
  if (!projects.length) {
    return (
      <section id="projects">
        <div className="section-label">Projects</div>
        <div className="project-card">
          <div>
            <div className="project-title">No projects yet</div>
            <div className="project-desc">Open #admin to add project records.</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects">
      <div className="section-label">Projects</div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <a
            href={`#project/${p.slug}`}
            className="project-card"
            key={p.slug}
            style={{ '--delay': `${i * 90}ms` }}
          >
            <div>
              <div className="project-meta">
                <span className="project-tag">{p.tag}</span>
                <span className="project-year">{p.year}</span>
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
            <div className="project-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}
