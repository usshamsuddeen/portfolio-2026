import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onNext: () => void;
  hasNext: boolean;
}

export default function Footer({ onNext, hasNext }: FooterProps) {
  return (
    <footer style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 border-x" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-color)' }}>
        <p className="text-[10px] tracking-wider uppercase" style={{ color: 'var(--fg-secondary)' }}>
          &copy; 2025 Muhammad Usman Shams
        </p>
        <p className="text-[10px] tracking-wider uppercase" style={{ color: 'var(--fg-secondary)' }}>
          Software Engineer · AI Researcher · Designer
        </p>
        
        {hasNext ? (
          <button
            onClick={onNext}
            className="text-[10px] tracking-wider uppercase font-semibold flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--fg)' }}
          >
            View Next Section
            <ArrowRight size={12} strokeWidth={2} />
          </button>
        ) : (
          <div className="w-[100px]" /> // Spacer to keep layout consistent
        )}
      </div>
    </footer>
  );
}
