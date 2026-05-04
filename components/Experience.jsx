import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Experience</div>
      <div className="exp-list">
        {experience.map((item, i) => (
          <div className="exp-item" key={i} style={{ '--delay': `${i * 70}ms` }}>
            <div>
              <div className="exp-company">{item.company}</div>
              <div className="exp-role">{item.role} · {item.type}</div>
              <ul className="exp-bullets">
                {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
            <div className="exp-period">{item.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
