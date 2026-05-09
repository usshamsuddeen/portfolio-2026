import { skillMatrix, experiences, volunteering, researchAreas } from '../data/content';
import { Briefcase, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="max-w-[1200px] mx-auto border-x border-b" style={{ borderColor: 'var(--border-color)' }}>
        {/* Section Label */}
        <div className="border-b px-4 md:px-6 py-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--fg-secondary)' }}>
            Section 01 — About
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Bio + Skills + Volunteering */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="text-lg font-bold tracking-tight mb-4 uppercase">Professional Summary</h2>
            <p className="text-[12px] md:text-[13px] leading-relaxed mb-6" style={{ color: 'var(--fg-secondary)' }}>
              AI Researcher and Interdisciplinary Lead specializing in Deep Learning and Enterprise UI/UX systems.
              My expertise lies at the intersection of high-fidelity design thinking and advanced machine learning,
              with a proven track record of delivering internationally published research and production-grade AI
              architectures. Currently serving as Research Lead at Beijing Institute of Technology (Project Base)
              and Senior UI/UX Designer at GTech Solutions, navigating complex global collaborations while
              completing my BS in Software Engineering (Top 1% rank, CGPA 3.70). Author of 4 peer-reviewed
              journals with a specialized focus on Digital Twin systems and Healthcare AI.
            </p>

            <h3 className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--fg-secondary)' }}>
              Research Areas
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {researchAreas.map((area) => (
                <span
                  key={area}
                  className="text-[9px] tracking-wider uppercase px-2 py-1 border"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--badge-bg)' }}
                >
                  {area}
                </span>
              ))}
            </div>

            <h3 className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--fg-secondary)' }}>
              Technical Competencies
            </h3>
            <div className="space-y-2 mb-8">
              {skillMatrix.map((skill) => (
                <div key={skill.category} className="grid grid-cols-3 gap-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase col-span-1" style={{ color: 'var(--accent)' }}>
                    {skill.category}
                  </span>
                  <span className="text-[11px] col-span-2" style={{ color: 'var(--fg-secondary)' }}>
                    {skill.items}
                  </span>
                </div>
              ))}
            </div>

            {/* Volunteering Section */}
            <h2 className="text-sm font-bold tracking-tight mb-4 flex items-center gap-2 uppercase">
              <Heart size={14} strokeWidth={2} />
              Volunteering
            </h2>
            <div className="space-y-4">
              {volunteering.map((item, idx) => (
                <div key={idx} className="border p-4 bg-[var(--surface-alt)]" style={{ borderColor: 'var(--border-color)' }}>
                  <p className="text-[11px] font-bold tracking-tight">{item.role}</p>
                  <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>{item.company}</p>
                  <ul className="space-y-1">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-[10px] leading-relaxed flex items-start gap-2" style={{ color: 'var(--fg-secondary)' }}>
                        <span>•</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div className="p-6 md:p-8">
            <h2 className="text-lg font-bold tracking-tight mb-4 uppercase">Professional Experience</h2>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 pb-6 last:pb-0"
                  style={{
                    borderLeft: '1px solid var(--border-color)',
                  }}
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[4.5px]" style={{ backgroundColor: 'var(--accent)' }} />
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={12} strokeWidth={1.5} style={{ color: 'var(--fg-secondary)' }} />
                    <span className="text-[10px] tracking-wider uppercase font-semibold" style={{ color: 'var(--fg-secondary)' }}>
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-[13px] font-bold tracking-tight flex items-center gap-2">
                    {exp.role}
                    {exp.status && (
                      <span className="text-[8px] px-1.5 py-0.5 border font-semibold tracking-widest uppercase" style={{ borderColor: 'var(--border-color)', color: 'var(--fg-secondary)' }}>
                        {exp.status}
                      </span>
                    )}
                  </h3>
                  <p className="text-[11px] font-medium mt-0.5" style={{ color: 'var(--accent)' }}> {exp.company} </p>
                  {exp.highlights && (
                    <ul className="mt-2 space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-[11px] leading-relaxed flex items-start gap-2" style={{ color: 'var(--fg-secondary)' }}>
                          <span style={{ color: 'var(--accent)' }}>—</span> {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
