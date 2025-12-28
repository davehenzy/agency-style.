import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
     return <div className="min-h-screen flex items-center justify-center bg-black text-white">Article not found</div>;
  }

  return (
    <div className="w-full bg-[#080808] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/thoughts" className="inline-flex items-center gap-2 text-gray-500 hover:text-white uppercase text-xs font-bold tracking-widest mb-12">
            <ArrowLeft size={16} /> Back
        </Link>
        
        <span className={`text-sm font-bold uppercase tracking-widest mb-6 block ${article.color}`}>
            {article.type}
        </span>

        <h1 className="font-display font-black text-4xl md:text-6xl uppercase text-white mb-8 leading-tight">
            {article.title}
        </h1>
        
        <div className="flex items-center gap-4 text-gray-500 font-mono text-sm mb-12 border-b border-white/10 pb-8">
            <span>{article.date}</span>
            <span>•</span>
            <span>By Nika</span>
        </div>

        <div 
            className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content || '<p>Content coming soon...</p>' }}
        />
      </div>
    </div>
  );
};