import { stack } from '../data.js';

export default function Stack() {
  return (
    <section id="stack">
      <div className="section-label">Tech Stack</div>
      <div className="stack-content">
        {Object.entries(stack).map(([group, items], gi) => (
          <div key={gi}>
            <div className="stack-section-title">{group}</div>
            <div className="stack-grid">
              {items.map((item, i) => (
                <div className="stack-card" key={i} style={{ '--delay': `${i * 55}ms` }}>
                  <img src={item.icon} alt={item.name} />
                  <span className="stack-card-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
