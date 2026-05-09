import { educations, awards } from '../data/content';
import { GraduationCap, Award, Calendar, Building2, TrendingUp } from 'lucide-react';

export default function Academics() {
  return (
    <section id="academics">
      <div className="max-w-[1200px] mx-auto border-x border-b" style={{ borderColor: 'var(--border-color)' }}>
        {/* Section Label */}
        <div className="border-b px-4 md:px-6 py-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--fg-secondary)' }}>
            Section 04 — Academic Profile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Education Column */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="text-lg font-bold tracking-tight mb-5 flex items-center gap-2">
              <GraduationCap size={18} strokeWidth={1.5} />
              EDUCATION
            </h2>

            <div className="space-y-4">
              {educations.map((edu, index) => (
                <div
                  key={index}
                  className="border p-4 reveal"
                  style={{
                    borderColor: 'var(--border-color)',
                    animationDelay: `${index * 0.06}s`,
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[13px] font-bold tracking-tight">{edu.degree}</h3>
                    <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 border flex-shrink-0 ml-2" style={{ borderColor: 'var(--border-color)' }}>
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Building2 size={11} strokeWidth={1.5} style={{ color: 'var(--fg-secondary)' }} />
                    <p className="text-[11px] font-medium">{edu.school}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={11} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />
                    <p className="text-[11px]" style={{ color: 'var(--fg-secondary)' }}>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Column */}
          <div className="p-6 md:p-8">
            <h2 className="text-lg font-bold tracking-tight mb-5 flex items-center gap-2">
              <Award size={18} strokeWidth={1.5} />
              AWARDS & HONORS
            </h2>

            <div className="space-y-3">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="border p-4 reveal"
                  style={{
                    borderColor: 'var(--border-color)',
                    backgroundColor: index === 0 ? 'var(--badge-bg)' : 'transparent',
                    animationDelay: `${index * 0.06}s`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Award
                      size={16}
                      strokeWidth={1.5}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: index === 0 ? 'var(--accent)' : 'var(--fg-secondary)' }}
                    />
                    <div>
                      <h3 className="text-[12px] font-bold tracking-tight">{award.title}</h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Calendar size={10} strokeWidth={1.5} style={{ color: 'var(--fg-secondary)' }} />
                        <span className="text-[10px]" style={{ color: 'var(--fg-secondary)' }}>{award.date}</span>
                      </div>
                      <p className="text-[10px] mt-1 font-medium" style={{ color: 'var(--fg-secondary)' }}>
                        {award.issuer}
                      </p>
                      {award.description && (
                        <p className="text-[10px] mt-1 italic" style={{ color: 'var(--fg-secondary)' }}>
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
