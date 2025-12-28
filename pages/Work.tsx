import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { Reveal } from '../components/Reveal';

export const Work: React.FC = () => {
  return (
    <div className="w-full bg-[#080808] min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-20">
            <Reveal>
                <h1 className="font-display font-black text-6xl md:text-9xl uppercase text-white mb-6">Work</h1>
                <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <button className="text-white border-b border-white pb-1">All</button>
                    <button className="hover:text-white transition-colors">Branding</button>
                    <button className="hover:text-white transition-colors">Websites</button>
                    <button className="hover:text-white transition-colors">Products</button>
                </div>
            </Reveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((p, index) => (
                <Reveal key={p.id} className={`${index % 3 === 0 ? 'md:col-span-2' : ''}`} delay={index * 0.1}>
                    <Link to={`/work/${p.id}`} className="group cursor-pointer block">
                        <div className="relative overflow-hidden mb-4">
                            <img 
                                src={p.imageUrl} 
                                alt={p.title} 
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ height: index % 3 === 0 ? '600px' : '500px'}}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/20 pb-4 group-hover:border-white transition-colors">
                            <div>
                                <h2 className="text-3xl font-black text-white uppercase mb-1">{p.title}</h2>
                                <span className="text-gray-500 uppercase text-xs font-bold tracking-widest">{p.category}</span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                 <span className="text-white text-xl">↗</span>
                            </div>
                        </div>
                    </Link>
                </Reveal>
            ))}
        </div>
      </div>
    </div>
  );
};