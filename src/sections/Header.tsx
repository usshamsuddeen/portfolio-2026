import { Github, Linkedin, BookOpen, Sun, Moon } from 'lucide-react';
import { socialLinks } from '../data/content';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-6 py-3 border-x border-b shadow-sm"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-color)' }}>
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-[11px] font-bold tracking-widest px-2 py-1 border"
            style={{ borderColor: 'var(--border-color)' }}
          >
            MUS
          </span>
          <span className="hidden sm:inline text-[11px] font-medium tracking-wider uppercase" style={{ color: 'var(--fg-secondary)' }}>
            Muhammad Usman Shams
          </span>
        </div>

        {/* Social Links + Theme Toggle */}
        <div className="flex items-center gap-1">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="GitHub"
          >
            <Github size={16} strokeWidth={1.5} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} strokeWidth={1.5} />
          </a>
          <a
            href={socialLinks.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Behance"
          >
            <img 
              src="/Behance.png" 
              alt="Behance" 
              className="w-[22px] h-[22px] object-contain" 
              style={{ filter: theme === 'light' ? 'invert(1) brightness(0)' : 'none' }}
            />
          </a>
          <a
            href={socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Medium"
          >
            <BookOpen size={16} strokeWidth={1.5} />
          </a>
          <a
            href={socialLinks.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="ORCID"
            style={{ color: '#A6CE39' }}
          >
            <svg viewBox="-1 -1 34 34" className="w-4 h-4 flex-shrink-0">
              <circle cx="16" cy="16" r="16" fill="white" />
              <path 
                fill="#A6CE39" 
                fillRule="evenodd"
                d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.823 5.839c0.704 0 1.265 0.573 1.265 1.26 0 0.688-0.561 1.265-1.265 1.265-0.692-0.004-1.26-0.567-1.26-1.265 0-0.697 0.563-1.26 1.26-1.26zM8.864 9.885h1.923v13.391h-1.923zM13.615 9.885h5.197c4.948 0 7.125 3.541 7.125 6.703 0 3.439-2.687 6.699-7.099 6.699h-5.224zM15.536 11.625v9.927h3.063c4.365 0 5.365-3.312 5.365-4.964 0-2.687-1.713-4.963-5.464-4.963z"
              />
            </svg>
          </a>
          <div className="w-px h-4 mx-2" style={{ backgroundColor: 'var(--border-color)' }} />
          <button
            onClick={toggleTheme}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} strokeWidth={1.5} /> : <Sun size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </header>
  );
}
