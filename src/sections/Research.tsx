import { publications, researchAreas } from '../data/content';
import { Microscope, BookOpen, Award, Users } from 'lucide-react';

export default function Research() {
  return (
    <section id="research">
      <div className="max-w-[1200px] mx-auto border-x border-b" style={{ borderColor: 'var(--border-color)' }}>
        {/* Section Label */}
        <div className="border-b px-4 md:px-6 py-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--fg-secondary)' }}>
            Section 03 — Research Profile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column - Overview */}
          <div
            className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <h2 className="text-lg font-bold tracking-tight mb-2 uppercase">Research Overview</h2>
            <p className="text-[11px] leading-relaxed mb-6" style={{ color: 'var(--fg-secondary)' }}>
              Focusing on the synergy between Agentic Intelligence, Knowledge based Systems, Conversational AI, Digital Twins, and Healthcare AI.
              My research goals center on creating stable, explainable AI architectures for complex Systems.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 border" style={{ borderColor: 'var(--border-color)' }}>
                <p className="text-[24px] font-bold tracking-tighter">4</p>
                <p className="text-[8px] tracking-widest uppercase mt-1" style={{ color: 'var(--fg-secondary)' }}>Publications</p>
              </div>
              <div className="text-center p-3 border" style={{ borderColor: 'var(--border-color)' }}>
                <p className="text-[24px] font-bold tracking-tighter">1</p>
                <p className="text-[8px] tracking-widest uppercase mt-1" style={{ color: 'var(--fg-secondary)' }}>Conference</p>
              </div>
              <div className="text-center p-3 border" style={{ borderColor: 'var(--border-color)' }}>
                <p className="text-[24px] font-bold tracking-tighter">3</p>
                <p className="text-[8px] tracking-widest uppercase mt-1" style={{ color: 'var(--fg-secondary)' }}>Institutions</p>
              </div>
            </div>

            <h3 className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--fg-secondary)' }}>
              Research Areas
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {researchAreas.map((area) => (
                <span
                  key={area}
                  className="text-[9px] tracking-wider uppercase px-2 py-1 border"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="border p-4" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-2">
                <Award size={14} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />
                <span className="text-[10px] font-bold tracking-widest uppercase">IEEE EIC 2025</span>
              </div>
              <p className="text-[11px] leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                Invited Presenter at IEEE EIC International Conference 2025 for research on AI-Driven Digital Twin systems.
              </p>
            </div>

            <div className="mt-4 border p-4" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-2">
                <Users size={14} strokeWidth={1.5} style={{ color: 'var(--fg-secondary)' }} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Collaboration</span>
              </div>
              <p className="text-[11px] leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                Research collaboration across Pakistan and China, managing data pipelines, model training, and academic writing.
              </p>
            </div>
          </div>

          {/* Right Column - Publications */}
          <div className="md:col-span-8">
            <div className="p-6 md:p-8 border-b" style={{ borderColor: 'var(--border-color)' }}>
              <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
                <BookOpen size={18} strokeWidth={1.5} />
                PEER-REVIEWED PUBLICATIONS
              </h2>
            </div>

            {publications.map((pub, index) => (
              <div
                key={pub.id}
                className="p-5 md:p-6 border-b reveal"
                style={{
                  borderColor: 'var(--border-color)',
                  backgroundColor: index % 2 === 0 ? 'transparent' : 'var(--badge-bg)',
                  animationDelay: `${index * 0.06}s`,
                }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 text-[10px] font-bold tracking-wider px-2 py-1 text-white"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    {pub.code}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-semibold leading-snug mb-1.5">
                      {pub.title}
                    </h3>
                    <p className="text-[10px] md:text-[11px] leading-relaxed mb-1.5" style={{ color: 'var(--fg-secondary)' }}>
                      {pub.authors}
                    </p>
                    <p className="text-[10px] italic mb-2" style={{ color: 'var(--fg-secondary)' }}>
                      {pub.journal}
                    </p>
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--accent)' }}
                    >
                      <Microscope size={10} strokeWidth={1.5} />
                      DOI: {pub.doi}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
