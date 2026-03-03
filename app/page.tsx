import React from 'react';
import { Mail, Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function SimpleSite() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans">
      
      {/* メインヒーロー */}
      <main className="max-w-3xl mx-auto px-6 pt-24 pb-12">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Simple & Practical.
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            ここに「このサイトで何ができるか」を一行で書きます。
            無駄を削ぎ落とした、実用性のためのスペースです。
          </p>
        </header>

        {/* コンテンツセクション */}
        <section className="grid gap-8 mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Features / Projects</h2>
          
          {/* カードアイテム 1 */}
          <a href="#" className="group block p-6 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">実用的なツール 01</h3>
              <ExternalLink size={18} className="text-slate-400" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              クリックしてすぐに使える機能をここに配置。説明は短く、価値を明確に。
            </p>
          </a>

          {/* カードアイテム 2 */}
          <a href="#" className="group block p-6 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">情報ストック 02</h3>
              <ExternalLink size={18} className="text-slate-400" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              ユーザーが「後で見返したい」と思うような、整理されたデータを。
            </p>
          </a>
        </section>

        {/* コンタクト / フッター */}
        <footer className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-wrap gap-6">
          <a href="mailto:your@email.com" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Mail size={16} /> Contact
          </a>
          <a href="https://github.com" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github size={16} /> GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}
