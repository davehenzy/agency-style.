import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data';
import { Reveal } from '../components/Reveal';

export const Thoughts: React.FC = () => {
  return (
    <div className="w-full bg-[#080808] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase text-white mb-20">
                Good<br/>Thoughts
            </h1>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
                <Reveal key={article.id} delay={index * 0.1} className="h-full">
                    <Link 
                        to={article.link} 
                        className="bg-[#111] border border-white/5 hover:border-white/20 p-8 flex flex-col justify-between min-h-[300px] group transition-all duration-300 h-full"
                    >
                        <div>
                            <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${article.color}`}>
                                {article.type}
                            </span>
                            <h3 className="text-2xl text-white font-medium group-hover:underline decoration-1 underline-offset-4 leading-tight">
                                {article.title}
                            </h3>
                        </div>
                        
                        <div className="flex justify-between items-end mt-8">
                            <span className="text-gray-500 text-sm font-mono">{article.date}</span>
                            <ArrowRight className="text-white transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                    </Link>
                </Reveal>
            ))}
        </div>
      </div>
    </div>
  );
};