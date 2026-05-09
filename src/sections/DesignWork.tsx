import { designProjects } from '../data/content';
import { Palette, ExternalLink, Figma } from 'lucide-react';

export default function DesignWork() {
  return (
    <section id="design">
      <div className="max-w-[1200px] mx-auto border-x border-b" style={{ borderColor: 'var(--border-color)' }}>
        {/* Section Label */}
        <div className="border-b px-4 md:px-6 py-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--fg-secondary)' }}>
            Section 05 — Design Work
          </span>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-lg font-bold tracking-tight mb-2 flex items-center gap-2">
            <Palette size={18} strokeWidth={1.5} />
            UI/UX DESIGN PORTFOLIO
          </h2>
          <p className="text-[11px] md:text-[12px] mb-6 max-w-[600px]" style={{ color: 'var(--fg-secondary)' }}>
            Senior UI/UX Designer with experience leading end-to-end design for HRM platforms,
            law firm websites, and brand identity systems. View complete portfolio on Behance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l" style={{ borderColor: 'var(--border-color)' }}>
            {designProjects.map((project, index) => (
              <div
                key={index}
                className="group reveal border-b border-r flex flex-col"
                style={{
                  borderColor: 'var(--border-color)',
                  animationDelay: `${index * 0.06}s`,
                }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-[4/3] border-b" style={{ borderColor: 'var(--border-color)' }}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="min-h-[40px] mb-1">
                    <h3 className="text-[13px] font-bold tracking-tight line-clamp-2">{project.title}</h3>
                  </div>
                  <p className="text-[10px] tracking-wider uppercase mb-3" style={{ color: 'var(--fg-secondary)' }}>
                    {project.type}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 h-[52px] overflow-hidden content-start">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[9px] tracking-wider uppercase px-2 py-0.5 border flex items-center gap-1"
                        style={{ borderColor: 'var(--border-color)', color: 'var(--fg-secondary)' }}
                      >
                        <Figma size={9} strokeWidth={1.5} />
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--accent)' }}
                    >
                      <ExternalLink size={10} strokeWidth={1.5} />
                      View on Behance
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional design capabilities */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 border-l border-t" style={{ borderColor: 'var(--border-color)' }}>
            {[
              { label: "UI/UX Design" },
              { label: "Product Design" },
              { label: "Branding" },
              { label: "Design Systems" },
            ].map((cap, i) => (
              <div
                key={i}
                className="p-4 text-center border-r border-b"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <p className="text-[10px] tracking-[0.2em] uppercase font-bold">{cap.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
