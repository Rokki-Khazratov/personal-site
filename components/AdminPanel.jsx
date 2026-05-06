import { useState } from 'react';
import { createDefaultAdminData, resetAdminData, saveAdminData } from '../db/adminStore.js';

const blockTypes = ['text', 'gallery', 'video', 'pdf'];

function clone(value) {
  return structuredClone(value);
}

function linesToArray(value) {
  return value
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean);
}

function arrayToLines(items) {
  return items.join('\n');
}

function galleryToLines(items) {
  return items.map(item => `${item.src} | ${item.alt}`).join('\n');
}

function linesToGallery(value) {
  return linesToArray(value).map(line => {
    const [src, ...altParts] = line.split('|').map(part => part.trim());
    return { src, alt: altParts.join(' | ') || 'Project image' };
  });
}

function createProject() {
  return {
    slug: `project-${Date.now()}`,
    title: 'New Project',
    tag: 'Project · Draft',
    year: new Date().getFullYear().toString(),
    desc: 'Short project description.',
    stack: ['React'],
    highlights: ['Main result'],
    contentBlocks: [
      {
        type: 'text',
        paragraphs: ['Project story paragraph.'],
      },
    ],
    url: 'https://github.com/Rokki-Khazratov/',
  };
}

function createBlock(type) {
  if (type === 'gallery') {
    return { type, items: [{ src: 'https://example.com/image.jpg', alt: 'Project image' }] };
  }

  if (type === 'video') {
    return { type, title: 'Project video', src: 'https://example.com/video.mp4' };
  }

  if (type === 'pdf') {
    return { type, title: 'Project PDF', src: 'https://example.com/file.pdf' };
  }

  return { type: 'text', paragraphs: ['New paragraph'] };
}

export default function AdminPanel({ data, onSave }) {
  const [draft, setDraft] = useState(() => clone(data));
  const [activeProject, setActiveProject] = useState(draft.projects[0]?.slug || '');
  const [importValue, setImportValue] = useState('');
  const [status, setStatus] = useState('Draft changes are local until you save.');

  const project = draft.projects.find(item => item.slug === activeProject) || draft.projects[0];

  const updateConstant = (key, value) => {
    setDraft(current => ({
      ...current,
      constants: current.constants.map(item => (item.key === key ? { ...item, value } : item)),
    }));
  };

  const updateProject = patch => {
    setDraft(current => ({
      ...current,
      projects: current.projects.map(item => (item.slug === project.slug ? { ...item, ...patch } : item)),
    }));
    if (patch.slug) setActiveProject(patch.slug);
  };

  const updateBlock = (index, patch) => {
    const nextBlocks = project.contentBlocks.map((block, i) => (i === index ? { ...block, ...patch } : block));
    updateProject({ contentBlocks: nextBlocks });
  };

  const moveBlock = (index, direction) => {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= project.contentBlocks.length) return;

    const nextBlocks = [...project.contentBlocks];
    const [item] = nextBlocks.splice(index, 1);
    nextBlocks.splice(nextIndex, 0, item);
    updateProject({ contentBlocks: nextBlocks });
  };

  const save = () => {
    saveAdminData(draft);
    onSave(clone(draft));
    setStatus('Saved. The public pages now use these values in this browser.');
  };

  const exportJson = () => {
    setImportValue(JSON.stringify(draft, null, 2));
    setStatus('Export JSON is ready below.');
  };

  const importJson = () => {
    try {
      const parsed = JSON.parse(importValue);
      if (!Array.isArray(parsed.constants) || !Array.isArray(parsed.projects)) {
        setStatus('Import failed: JSON must include constants and projects arrays.');
        return;
      }

      setDraft(parsed);
      setActiveProject(parsed.projects[0]?.slug || '');
      setStatus('Import loaded into draft. Press Save changes to apply.');
    } catch (e) {
      setStatus('Import failed: invalid JSON.');
    }
  };

  const reset = () => {
    const defaults = resetAdminData();
    setDraft(defaults);
    setActiveProject(defaults.projects[0]?.slug || '');
    onSave(defaults);
    setStatus('Reset to defaults.');
  };

  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div className="admin-head">
          <div>
            <div className="section-label">Admin</div>
            <h1>Content Database</h1>
            <p>Manage profile constants and project detail blocks from one local panel.</p>
          </div>
          <a href="#projects" className="btn btn-ghost">Back to site</a>
        </div>

        <div className="admin-actions">
          <button className="btn btn-primary" type="button" onClick={save}>Save changes</button>
          <button className="btn btn-ghost" type="button" onClick={exportJson}>Export JSON</button>
          <button className="btn btn-ghost" type="button" onClick={importJson}>Import JSON</button>
          <button className="btn btn-ghost" type="button" onClick={reset}>Reset defaults</button>
        </div>
        <div className="admin-status">{status}</div>

        <div className="admin-grid">
          <div className="admin-panel">
            <div className="admin-panel-title">Site constants</div>
            <div className="admin-fields">
              {draft.constants.map(item => (
                <label className="admin-field" key={item.key}>
                  <span>{item.label}</span>
                  <small>{item.key}</small>
                  {item.type === 'textarea' ? (
                    <textarea value={item.value} onChange={event => updateConstant(item.key, event.target.value)} />
                  ) : (
                    <input type={item.type} value={item.value} onChange={event => updateConstant(item.key, event.target.value)} />
                  )}
                </label>
              ))}
            </div>
          </div>

          <div className="admin-panel">
            <div className="admin-panel-title">Projects</div>
            <div className="admin-project-row">
              <select value={project?.slug || ''} onChange={event => setActiveProject(event.target.value)}>
                {draft.projects.map(item => (
                  <option value={item.slug} key={item.slug}>{item.title}</option>
                ))}
              </select>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => {
                  const nextProject = createProject();
                  setDraft(current => ({ ...current, projects: [...current.projects, nextProject] }));
                  setActiveProject(nextProject.slug);
                }}
              >
                Add project
              </button>
              <button
                className="btn btn-ghost"
                type="button"
                disabled={!project}
                onClick={() => {
                  const nextProjects = draft.projects.filter(item => item.slug !== project.slug);
                  setDraft(current => ({ ...current, projects: nextProjects }));
                  setActiveProject(nextProjects[0]?.slug || '');
                }}
              >
                Delete project
              </button>
            </div>

            {project && (
              <div className="admin-fields">
                <label className="admin-field">
                  <span>Slug</span>
                  <input value={project.slug} onChange={event => updateProject({ slug: event.target.value })} />
                </label>
                <label className="admin-field">
                  <span>Title</span>
                  <input value={project.title} onChange={event => updateProject({ title: event.target.value })} />
                </label>
                <label className="admin-field">
                  <span>Tag</span>
                  <input value={project.tag} onChange={event => updateProject({ tag: event.target.value })} />
                </label>
                <label className="admin-field">
                  <span>Year</span>
                  <input value={project.year} onChange={event => updateProject({ year: event.target.value })} />
                </label>
                <label className="admin-field">
                  <span>Description</span>
                  <textarea value={project.desc} onChange={event => updateProject({ desc: event.target.value })} />
                </label>
                <label className="admin-field">
                  <span>GitHub / external URL</span>
                  <input value={project.url} onChange={event => updateProject({ url: event.target.value })} />
                </label>
                <label className="admin-field">
                  <span>Stack</span>
                  <small>One item per line</small>
                  <textarea value={arrayToLines(project.stack)} onChange={event => updateProject({ stack: linesToArray(event.target.value) })} />
                </label>
                <label className="admin-field">
                  <span>Highlights</span>
                  <small>One item per line</small>
                  <textarea value={arrayToLines(project.highlights)} onChange={event => updateProject({ highlights: linesToArray(event.target.value) })} />
                </label>

                <div className="admin-panel-title">Content blocks</div>
                <div className="admin-block-buttons">
                  {blockTypes.map(type => (
                    <button
                      type="button"
                      className="btn btn-ghost"
                      key={type}
                      onClick={() => updateProject({ contentBlocks: [...project.contentBlocks, createBlock(type)] })}
                    >
                      Add {type}
                    </button>
                  ))}
                </div>

                {project.contentBlocks.map((block, index) => (
                  <div className="admin-block" key={`${block.type}-${index}`}>
                    <div className="admin-block-head">
                      <strong>{index + 1}. {block.type}</strong>
                      <div>
                        <button type="button" onClick={() => moveBlock(index, -1)}>↑</button>
                        <button type="button" onClick={() => moveBlock(index, 1)}>↓</button>
                        <button
                          type="button"
                          onClick={() => updateProject({ contentBlocks: project.contentBlocks.filter((_, i) => i !== index) })}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {block.type === 'text' && (
                      <label className="admin-field">
                        <span>Paragraphs</span>
                        <small>One paragraph per line</small>
                        <textarea
                          value={arrayToLines(block.paragraphs)}
                          onChange={event => updateBlock(index, { paragraphs: linesToArray(event.target.value) })}
                        />
                      </label>
                    )}

                    {block.type === 'gallery' && (
                      <label className="admin-field">
                        <span>Images</span>
                        <small>Format: image-url | alt text</small>
                        <textarea
                          value={galleryToLines(block.items)}
                          onChange={event => updateBlock(index, { items: linesToGallery(event.target.value) })}
                        />
                      </label>
                    )}

                    {(block.type === 'video' || block.type === 'pdf') && (
                      <>
                        <label className="admin-field">
                          <span>Title</span>
                          <input value={block.title} onChange={event => updateBlock(index, { title: event.target.value })} />
                        </label>
                        <label className="admin-field">
                          <span>URL</span>
                          <input value={block.src} onChange={event => updateBlock(index, { src: event.target.value })} />
                        </label>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="admin-panel admin-import">
          <div className="admin-panel-title">Import / export JSON</div>
          <textarea value={importValue} onChange={event => setImportValue(event.target.value)} />
        </div>
      </section>
    </main>
  );
}
