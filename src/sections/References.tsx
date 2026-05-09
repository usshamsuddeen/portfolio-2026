import { references } from '../data/content';
import { UserCheck, Mail, Phone, ExternalLink } from 'lucide-react';

export default function References() {
  return (
    <section id="references">
      <div className="max-w-[1200px] mx-auto border-x border-b" style={{ borderColor: 'var(--border-color)' }}>
        {/* Section Label */}
        <div className="border-b px-4 md:px-6 py-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--fg-secondary)' }}>
            Section 07 — Professional References
          </span>
        </div>

        <div className="p-6 md:p-10">
          <h2 className="text-[24px] font-bold tracking-tighter mb-8 uppercase">Key Endorsements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((ref, idx) => (
              <div 
                key={idx} 
                className="border p-6 md:p-8 relative overflow-hidden group transition-all duration-300 hover:scale-[1.01]"
                style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-alt)' }}
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                  <UserCheck size={80} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight">{ref.name}</h3>
                      <p className="text-[11px] font-bold tracking-widest uppercase mt-1" style={{ color: 'var(--accent)' }}>
                        {ref.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-[12px] font-medium mb-6" style={{ color: 'var(--fg-secondary)' }}>
                    {ref.org}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--border-color)' }}>
                        <Mail size={12} strokeWidth={1.5} />
                      </div>
                      <span className="text-[12px] font-medium">{ref.contact.split(' | ')[0]}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--border-color)' }}>
                        <Phone size={12} strokeWidth={1.5} />
                      </div>
                      <span className="text-[12px] font-medium">{ref.contact.split(' | ')[1]}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <p className="text-[10px] italic flex items-center gap-2" style={{ color: 'var(--fg-secondary)' }}>
                      <ExternalLink size={10} /> Verified Professional Contact
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-10 p-6 border text-center" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
             <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--fg-secondary)' }}>
               Additional references from international research colleagues available upon direct request.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
