import { projects } from '../data/content';
import { ExternalLink, FileText, Code2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import CodeExplorer from '../components/CodeExplorer';

export default function Projects() {
  const [activeRepoId, setActiveRepoId] = useState<string | null>(null);

  useEffect(() => {
    // Pre-fetch READMEs for all projects to ensure instantaneous "Reveal Code" experience
    projects.forEach(project => {
      if (project.repoName) {
        // Pre-fetch live README via our secure proxy
        fetch(`/api/github/file/${project.repoName}/README.md`).catch(() => {});
      }
    });
  }, []);

  return (
    <section id="projects">
      <div className="max-w-[1200px] mx-auto border-x border-b" style={{ borderColor: 'var(--border-color)' }}>
        {/* Section Label */}
        <div className="border-b px-4 md:px-6 py-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--fg-secondary)' }}>
            Section 02 — AI/ML Projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="border-b border-r group reveal"
              style={{
                borderColor: 'var(--border-color)',
                animationDelay: `${index * 0.06}s`,
              }}
            >
              {/* Card Header */}
              <div
                className="flex items-center justify-between px-4 py-2.5 border-b"
                style={{ backgroundColor: 'var(--badge-bg)', borderColor: 'var(--border-color)' }}
              >
                <span className="text-[11px] font-bold tracking-wider uppercase truncate">
                  {project.title}
                </span>
                <span
                  className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 text-white flex-shrink-0 ml-2"
                  style={{ backgroundColor: project.statusColor }}
                >
                  {project.status}
                </span>
              </div>

              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-[10px] tracking-wider uppercase font-medium mb-1.5" style={{ color: 'var(--fg-secondary)' }}>
                  {project.subtitle}
                </p>
                <div className="h-[110px] mb-3 overflow-hidden">
                   <p className="text-[11px] md:text-[12px] leading-relaxed line-clamp-5" style={{ color: 'var(--fg-secondary)' }}>
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 h-[52px] overflow-hidden content-start mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-wider uppercase px-2 py-0.5 border"
                      style={{ borderColor: 'var(--border-color)', color: 'var(--fg-secondary)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  {/* GitHub Reveal Button */}
                  {project.repoName && (
                    <button
                      onClick={() => setActiveRepoId(project.repoName!)}
                      className="text-[10px] tracking-wider uppercase font-extrabold flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--accent)' }}
                    >
                      <Code2 size={13} strokeWidth={2} />
                      Reveal Code
                    </button>
                  )}

                  {project.links.map((link) => (
                    link.label !== 'GitHub' && (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] tracking-wider uppercase font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--accent)' }}
                    >
                      {link.label === 'Research Paper' && <FileText size={11} strokeWidth={1.5} />}
                      {link.label === 'Publication' && <FileText size={11} strokeWidth={1.5} />}
                      {link.label === 'Live Demo' && <ExternalLink size={11} strokeWidth={1.5} />}
                      {link.label === 'Behance' && <ExternalLink size={11} strokeWidth={1.5} />}
                      {link.label}
                    </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Code Explorer Modal */}
        {activeRepoId && (
          <CodeExplorer 
            repoId={activeRepoId} 
            onClose={() => setActiveRepoId(null)} 
          />
        )}
      </div>
    </section>
  );
}
