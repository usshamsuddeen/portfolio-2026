import { useState, useMemo, useEffect } from 'react';
import { 
  File, 
  Folder, 
  ChevronRight, 
  ChevronDown, 
  X, 
  Github, 
  FileCode, 
  FileText, 
  Search,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface FileContent {
  type: 'text' | 'image';
  content: string;
}

interface TreeItem {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size?: number;
  url: string;
}

interface RepoManifest {
  name: string;
  description: string;
  url: string;
}

interface CodeExplorerProps {
  repoId: string;
  onClose: () => void;
}

export default function CodeExplorer({ repoId, onClose }: CodeExplorerProps) {
  const [manifest, setManifest] = useState<RepoManifest | null>(null);
  const [tree, setTree] = useState<TreeItem[] | null>(null);
  const [loadedFiles, setLoadedFiles] = useState<Record<string, FileContent>>({});
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingFile, setLoadingFile] = useState(false);

  // Initial load: Manifest and Tree
  useEffect(() => {
    async function loadRepoData() {
      try {
        setLoading(true);
        const treeRes = await fetch(`/api/github/tree/${repoId}`).then(r => r.json());
        
        setManifest({
          name: repoId,
          description: 'Fetching live repository data...',
          url: `https://github.com/usshamsuddeen/${repoId}`
        });
        setTree(treeRes);
        
        // Advanced README Selection Strategy
        // 1. Look for root README.md
        // 2. Look for any README.md
        // 3. Look for any .md file
        let readme = treeRes.find((item: any) => item.path.toLowerCase() === 'readme.md');
        if (!readme) {
          readme = treeRes.find((item: any) => item.path.toLowerCase().endsWith('readme.md'));
        }
        if (!readme) {
          readme = treeRes.find((item: any) => item.path.toLowerCase().endsWith('.md'));
        }

        if (readme) {
          // Immediately trigger file load during initial state update
          await loadFileContent(readme.path);
        }
      } catch (err) {
        console.error('Failed to load repo data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadRepoData();
  }, [repoId]);

  const loadFileContent = async (path: string) => {
    if (loadedFiles[path]) {
      setSelectedPath(path);
      return;
    }

    try {
      setLoadingFile(true);
      const res = await fetch(`/api/github/file/${repoId}/${path}`);
      if (res.ok) {
        const fileData = await res.json();
        setLoadedFiles(prev => ({ ...prev, [path]: fileData }));
        setSelectedPath(path);
      }
    } catch (err) {
      console.error('Failed to load file content:', err);
    } finally {
      setLoadingFile(false);
    }
  };

  // Transform tree into a nested structure for the sidebar
  const fileTree = useMemo(() => {
    if (!tree || !manifest) return null;
    const root: any = { name: manifest.name, type: 'tree', children: {} };
    
    tree.forEach(item => {
      const parts = item.path.split('/');
      let current = root;
      
      parts.forEach((part, index) => {
        if (!current.children[part]) {
          current.children[part] = {
            name: part,
            path: parts.slice(0, index + 1).join('/'),
            type: index === parts.length - 1 ? item.type : 'tree',
            children: {}
          };
        }
        current = current.children[part];
      });
    });

    return root;
  }, [tree, manifest]);

  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const renderTree = (node: any, depth = 0) => {
    const nodes = Object.values(node.children).sort((a: any, b: any) => {
      if (a.type !== b.type) return a.type === 'tree' ? -1 : 1;
      return a.name.localeCompare(b.name);
    });

    return nodes.map((child: any) => {
      const isFolder = child.type === 'tree';
      const isExpanded = expandedFolders[child.path];
      const isSelected = selectedPath === child.path;

      if (searchTerm && !child.path.toLowerCase().includes(searchTerm.toLowerCase())) {
        return null;
      }

      return (
        <div key={child.path}>
          <button
            onClick={() => isFolder ? toggleFolder(child.path) : loadFileContent(child.path)}
            className={`w-full flex items-center gap-2 px-3 py-1.5 text-[11px] hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${isSelected ? 'bg-black/10 dark:bg-white/10 font-bold text-[var(--accent)]' : ''}`}
            style={{ paddingLeft: `${(depth + 1) * 12}px` }}
          >
            {isFolder ? (
              <>
                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                <Folder size={14} className="text-amber-500 fill-amber-500/20" />
              </>
            ) : (
              <>
                <div className="w-3.5" />
                {child.path.endsWith('.md') ? <FileText size={14} /> : <FileCode size={14} />}
              </>
            )}
            <span className="truncate">{child.name}</span>
          </button>
          {isFolder && isExpanded && renderTree(child, depth + 1)}
        </div>
      );
    });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-[var(--surface)] border border-[var(--border-color)] p-8 flex flex-col items-center gap-4 shadow-2xl">
          <Loader2 className="animate-spin text-[var(--accent)]" size={32} />
          <p className="text-[10px] tracking-widest uppercase font-bold">Initializing Code Explorer...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm overflow-hidden">
      <div 
        className="w-full h-full max-w-[1400px] flex flex-col bg-[var(--surface)] border border-[var(--border-color)] shadow-2xl animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="p-2 bg-[var(--badge-bg)] border border-[var(--border-color)]">
              <Github size={20} />
            </div>
            <div className="overflow-hidden">
              <h2 className="text-[14px] font-bold tracking-tight truncate">{manifest?.name}</h2>
              <p className="text-[10px] text-[var(--fg-secondary)] truncate">{manifest?.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* "View on GitHub" button removed per user request */}
            <button 
              onClick={onClose}
              className="p-2 border hover:bg-red-500 hover:text-white transition-all"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-[280px] hidden md:flex flex-col border-r border-[var(--border-color)] bg-[var(--bg)]/50">
            <div className="p-4 border-b border-[var(--border-color)]">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--fg-secondary)]" />
                <input 
                  type="text"
                  placeholder="Search files..."
                  className="w-full pl-9 pr-3 py-2 text-[11px] bg-[var(--surface)] border border-[var(--border-color)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
              {fileTree && renderTree(fileTree)}
            </div>
          </div>

          {/* Code Viewer */}
          <div className="flex-1 overflow-hidden flex flex-col bg-[var(--surface)]">
            {selectedPath ? (
              <>
                <div className="px-6 py-3 border-b border-[var(--border-color)] bg-[var(--bg)]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <File size={14} className="text-[var(--fg-secondary)] flex-shrink-0" />
                    <span className="text-[11px] font-mono truncate">{selectedPath}</span>
                  </div>
                  {loadingFile && (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[var(--accent)] animate-pulse">
                      <Loader2 size={12} className="animate-spin" /> Synchronizing...
                    </div>
                  )}
                </div>
                <div className="flex-1 overflow-auto p-0 custom-scrollbar relative bg-[#0d1117]">
                  {selectedPath.endsWith('.md') && loadedFiles[selectedPath] ? (
                    <div className="p-8 md:p-12 prose dark:prose-invert max-w-4xl mx-auto 
                      text-[#e6edf3]
                      prose-headings:text-[#e6edf3] 
                      prose-strong:text-[#e6edf3]
                      prose-p:text-[#adbac7]
                      prose-li:text-[#adbac7]
                      prose-pre:bg-[#161b22] 
                      prose-pre:border prose-pre:border-[#30363d] 
                      prose-headings:border-b prose-headings:pb-2 prose-headings:border-[#30363d] 
                      prose-a:text-[#58a6ff] 
                      prose-code:text-[#e6edf3] 
                      prose-code:bg-[#6e7681]/20 prose-code:px-1 prose-code:py-0.5 prose-code:rounded 
                      prose-code:before:content-none prose-code:after:content-none"
                    >
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {loadedFiles[selectedPath].content}
                      </ReactMarkdown>
                    </div>
                  ) : loadedFiles[selectedPath] ? (
                    <SyntaxHighlighter
                      language={selectedPath.split('.').pop()}
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        padding: '32px',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        backgroundColor: '#0d1117',
                        fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace"
                      }}
                      showLineNumbers={true}
                      lineNumberStyle={{ color: '#6e7681', minWidth: '3em', paddingRight: '1em', textAlign: 'right' }}
                    >
                      {loadedFiles[selectedPath].content}
                    </SyntaxHighlighter>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Loader2 className="animate-spin text-[var(--accent)]" size={32} />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-10 opacity-40">
                <FileCode size={64} className="mb-4" />
                <p className="text-[11px] tracking-widest uppercase font-bold">Select a file to view code</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
