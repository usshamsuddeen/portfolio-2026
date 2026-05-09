import { Mail, Phone, MapPin } from 'lucide-react';
import { socialLinks } from '../data/content';

export default function Hero() {
  const marqueeText = "RESEARCH · DESIGN · ENGINEERING · AI/ML · PUBLICATION · INNOVATION · DIGITAL TWIN · ";

  return (
    <section>
      <div className="max-w-[1200px] mx-auto border-x border-b" style={{ borderColor: 'var(--border-color)' }}>
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px] md:min-h-[380px]">
          {/* Left Column - Watermark + Period */}
          <div
            className="md:col-span-4 relative overflow-hidden border-b md:border-b-0 md:border-r flex flex-col justify-between p-6 md:p-8"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-outline opacity-[0.06] text-[140px] md:text-[180px] font-bold tracking-tighter leading-none">
                MUS
              </span>
            </div>
            <div className="relative z-10">
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--fg-secondary)' }}>
                2022 — 2026
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: 'var(--fg-secondary)' }}>
                Active Portfolio
              </p>
            </div>
          </div>

          {/* Right Column - Main Info */}
          <div className="md:col-span-8 flex flex-col justify-center p-6 md:p-10">
            <h1 className="text-[28px] md:text-[44px] font-bold tracking-tighter leading-[1.1]">
              MUHAMMAD USMAN
              <br />
              SHAMS
            </h1>
            <p className="mt-3 text-[12px] md:text-[13px] font-medium tracking-wide uppercase" style={{ color: 'var(--fg-secondary)' }}>
              Software Engineer · AI Researcher · Senior UI/UX Designer
            </p>

            {/* Stats Row */}
            <div className="mt-6 grid grid-cols-4 gap-4 max-w-[500px]">
              <div>
                <p className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-none">4</p>
                <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: 'var(--fg-secondary)' }}>Publications</p>
              </div>
              <div>
                <p className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-none">9+</p>
                <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: 'var(--fg-secondary)' }}>ML Projects</p>
              </div>
              <div>
                <p className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-none">3.70</p>
                <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: 'var(--fg-secondary)' }}>CGPA</p>
              </div>
              <div>
                <p className="text-[28px] md:text-[36px] font-bold tracking-tighter leading-none">4<sup className="text-[14px]">th</sup></p>
                <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: 'var(--fg-secondary)' }}>Class Rank</p>
              </div>
            </div>

            {/* Featured Accolade */}
            <div className="mt-8 p-3 border-l-2 flex items-start gap-4" style={{ borderColor: 'var(--accent)', backgroundColor: 'rgba(185, 28, 28, 0.05)' }}>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white">
                <span className="text-[9px] font-bold italic">IEEE</span>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-tight">Invited Presenter</p>
                <p className="text-[10px] leading-tight" style={{ color: 'var(--fg-secondary)' }}>
                  IEEE EIC International Conference 2025 · Emerging Trends in Engineering
                </p>
              </div>
            </div>

            {/* Contact & Actions Row */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex flex-wrap gap-4 text-[11px]" style={{ color: 'var(--fg-secondary)' }}>
                <span className="flex items-center gap-1.5">
                  <Phone size={11} strokeWidth={1.5} /> +92 304 719 5090
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={11} strokeWidth={1.5} /> us.shamsuddeen@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} strokeWidth={1.5} /> R.Y.K, Pakistan
                </span>
                <a
                  href={socialLinks.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-bold transition-colors"
                  style={{ color: '#A6CE39' }}
                >
                  <svg viewBox="-1 -1 34 34" className="w-[14px] h-[14px] flex-shrink-0">
                    <circle cx="16" cy="16" r="16" fill="white" />
                    <path 
                      fill="#A6CE39" 
                      fillRule="evenodd"
                      d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.823 5.839c0.704 0 1.265 0.573 1.265 1.26 0 0.688-0.561 1.265-1.265 1.265-0.692-0.004-1.26-0.567-1.26-1.265 0-0.697 0.563-1.26 1.26-1.26zM8.864 9.885h1.923v13.391h-1.923zM13.615 9.885h5.197c4.948 0 7.125 3.541 7.125 6.703 0 3.439-2.687 6.699-7.099 6.699h-5.224zM15.536 11.625v9.927h3.063c4.365 0 5.365-3.312 5.365-4.964 0-2.687-1.713-4.963-5.464-4.963z"
                    />
                  </svg>
                  ORCID
                </a>
              </div>

              <div className="flex gap-3">
                <a
                  href="/Muhammad_Usman_Shams_CV.pdf"
                  download
                  className="px-5 py-2 text-[10px] tracking-widest font-bold uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                    borderRadius: '2px'
                  }}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Strip */}
        <div className="border-t overflow-hidden py-2.5" style={{ borderColor: 'var(--border-color)' }}>
          <div className="marquee-track whitespace-nowrap flex">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="text-[10px] tracking-[0.4em] uppercase font-medium mr-8"
                style={{ color: 'var(--fg-secondary)' }}
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
