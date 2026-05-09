import { certifications } from '../data/content';
import { Award, BookOpen, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="max-w-[1200px] mx-auto border-x border-b" style={{ borderColor: 'var(--border-color)' }}>
        {/* Section Label */}
        <div className="border-b px-4 md:px-6 py-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--fg-secondary)' }}>
            Section 06 — Certifications & Volunteering
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Certifications */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
              <Award size={18} strokeWidth={1.5} />
              CERTIFICATIONS
            </h2>

            <div className="space-y-0 border" style={{ borderColor: 'var(--border-color)' }}>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3 border-b last:border-b-0 reveal"
                  style={{
                    borderColor: 'var(--border-color)',
                    backgroundColor: index % 2 === 0 ? 'transparent' : 'var(--badge-bg)',
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  <div>
                    <p className="text-[11px] font-semibold">{cert.title}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: 'var(--fg-secondary)' }}>
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div className="p-6 md:p-8">
            <h2 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
              <BookOpen size={18} strokeWidth={1.5} />
              VOLUNTEERING
            </h2>

            <div className="border p-5" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--badge-bg)', border: '1px solid var(--border-color)' }}
                >
                  <BookOpen size={18} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold tracking-tight">Volunteer Design Writer</h3>
                  <p className="text-[10px] tracking-wider uppercase mt-0.5" style={{ color: 'var(--accent)' }}>
                    Muzli — Design Inspiration (Medium)
                  </p>
                  <p className="text-[10px] mt-0.5" style={{ color: 'var(--fg-secondary)' }}>
                    2023 – Present
                  </p>
                  <p className="text-[11px] leading-relaxed mt-2" style={{ color: 'var(--fg-secondary)' }}>
                    Sharing design knowledge freely with the global community — articles on UI/UX principles,
                    tools, and creative processes.
                  </p>
                  <a
                    href="https://mushams.medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase font-semibold mt-3 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--accent)' }}
                  >
                    <ExternalLink size={10} strokeWidth={1.5} />
                    mushams.medium.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
