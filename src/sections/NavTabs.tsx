import { navTabs } from '../data/content';

interface NavTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function NavTabs({ activeTab, onTabChange }: NavTabsProps) {
  const handleClick = (tabId: string) => {
    onTabChange(tabId);
  };

  return (
    <nav
      className="sticky top-[49px] z-50 bg-transparent"
    >
      <div className="overflow-x-auto pb-[1px] -mb-[1px]">
        <div className="max-w-[1200px] mx-auto flex border-x border-y shadow-sm" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)' }}>
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className="flex-shrink-0 px-4 md:px-6 py-3 text-[10px] md:text-[11px] font-semibold tracking-widest uppercase border-r transition-all duration-150"
              style={{
                backgroundColor: activeTab === tab.id ? 'var(--fg)' : 'transparent',
                color: activeTab === tab.id ? 'var(--bg)' : 'var(--fg-secondary)',
                borderColor: 'var(--border-color)',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = 'var(--fg)';
                  e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = 'var(--fg-secondary)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
