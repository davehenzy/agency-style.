import React, { useState } from 'react';
import { ArrowDown, Filter as FilterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { Filter } from '../components/Filter';
import { Reveal } from '../components/Reveal';

export const Home: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full bg-[#080808] min-h-screen pb-20 relative">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
            <Reveal>
                <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[10rem] uppercase leading-[0.85] tracking-tighter text-white mb-8">
                    Good Sh*t<br/>
                    Happens<br/>
                    <span className="text-gray-600">Here.</span>
                </h1>
            </Reveal>
        </div>

        {/* Stats Footer in Hero */}
        <div className="absolute bottom-10 left-0 w-full px-6 border-t border-white/10 pt-6">
            <Reveal delay={0.2}>
                <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-xs md:text-sm text-gray-400 uppercase tracking-widest font-bold">
                    <div>
                        <span className="text-white text-lg mr-2">06</span> W. Awwwards
                    </div>
                    <div>
                        <span className="text-white text-lg mr-2">05</span> Clutch Awards
                    </div>
                    <div>
                        <span className="text-white text-lg mr-2">21</span> American Adv. Awards
                    </div>
                    <div>
                        <span className="text-white text-lg mr-2">04</span> CSS Design Awards
                    </div>
                    <div>
                        <span className="text-white text-lg mr-2">03</span> The FWA
                    </div>
                </div>
            </Reveal>
        </div>
      </section>

      {/* Work Grid */}
      <section className="px-4 md:px-8 max-w-[1600px] mx-auto pt-20 relative z-10">
        {/* Masonry Layout Simulation */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {projects.map((project, index) => (
                <Reveal key={project.id} className="break-inside-avoid mb-8" delay={index * 0.1}>
                    <Link to={`/work/${project.id}`} className="block group">
                        <div className={`relative overflow-hidden rounded-sm bg-gray-900 w-full aspect-[3/4] ${project.size === 'small' ? 'aspect-square' : ''} ${project.size === 'tall' ? 'aspect-[1/2]' : ''}`}>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                                <span className="border border-white px-6 py-2 rounded-full text-white uppercase font-bold tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View Case
                                </span>
                            </div>
                            
                            <img 
                                src={project.imageUrl} 
                                alt={project.client} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                             {/* Text overlay for style */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                             
                             <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-1 drop-shadow-lg">
                                    {project.client}
                                </h3>
                                <p className="text-gray-300 text-xs uppercase tracking-wider font-bold">
                                    {project.category} / {project.industry}
                                </p>
                             </div>
                        </div>
                    </Link>
                </Reveal>
            ))}
        </div>
        
        {/* Filter Button (Floating) */}
        <div className="sticky bottom-8 flex justify-center z-30 pointer-events-none">
            <button 
                onClick={() => setIsFilterOpen(true)}
                className="pointer-events-auto bg-[#1a1a1a] text-white border border-white/20 px-8 py-3 rounded-full uppercase font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-2xl"
            >
                Filter <FilterIcon size={14} />
            </button>
        </div>
      </section>

      <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      {/* Philosophy Teaser */}
      <section className="mt-32 px-6 md:px-20 py-20 bg-[#111] relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
            <Reveal>
                <h2 className="font-display font-black text-3xl md:text-5xl uppercase leading-tight mb-8">
                    Today 'Good' isn't just a nice to have creative pursuit. Not just a cherry on top of a vegan cake. It's a business necessity.
                </h2>
                <Link to="/about">
                    <button className="text-white border-b border-white pb-1 uppercase tracking-widest hover:opacity-70 transition-opacity">
                        Read our philosophy
                    </button>
                </Link>
            </Reveal>
        </div>
      </section>

    </div>
  );
};