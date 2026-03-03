import React from 'react';
import { LayoutGrid, Link, MessageSquare, Github, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen p-6 md:p-24">
      <div className="max-w-2xl mx-auto">
        
        {/* ヘッダー */}
        <header className="mb-12">
          <h1 className="text-2xl font-bold mb-2">Workspace</h1>
          <p className="text-slate-500 dark:text-slate-400">
            毎日使うリンクと、アイデアをストックする場所。
          </p>
        </header>

        <div className="space-y-10">
          
          {/* ツール・リンク集セクション */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-slate-400">
              <LayoutGrid size={18} />
              <h2 className="text-sm font-semibold uppercase tracking-wider">Quick Access</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'GitHub', url: 'https://github.com', icon: <Github size={18} /> },
                { name: 'ChatGPT', url: 'https://chat.openai.com', icon: <MessageSquare size={18} /> },
                { name: 'Vercel', url: 'https://vercel.com', icon: <ExternalLink size={18} /> },
                { name: 'Notion', url: 'https://notion.so', icon: <Link size={18} /> },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-slate-600 dark:text-slate-300">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity" />
                </a>
              ))}
            </div>
          </section>

          {/* シンプルなメモセクション */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-slate-400">
              <MessageSquare size={18} />
              <h2 className="text-sm font-semibold uppercase tracking-wider">Quick Memo</h2>
            </div>
            <textarea 
              className="w-full h-32 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="ここに考えを書き出す..."
            />
          </section>

        </div>

        <footer className="mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-xs text-slate-400 tracking-widest">© 2024 MY MINIMAL SITE</p>
        </footer>
      </div>
    </div>
  );
}
