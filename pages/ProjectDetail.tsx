import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { Reveal } from '../components/Reveal';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white">Project not found</div>;
  }

  const { theme } = project;

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }} className="min-h-screen w-full transition-colors duration-500">
      
      {/* Top Navigation Spacer for Fixed Header */}
      <div className="h-24"></div>

      <div className="px-6 md:px-12 max-w-[1800px] mx-auto pb-20">
        
        {/* Project Header */}
        <div className="mb-20 pt-10">
            <Reveal>
                <Link to="/work" className="inline-flex items-center gap-2 opacity-60 hover:opacity-100 uppercase text-xs font-bold tracking-widest mb-8">
                    <ArrowLeft size={16} /> Back to work
                </Link>
                <h1 className="font-display font-black text-7xl md:text-[10rem] uppercase leading-none tracking-tighter mb-4">
                    {project.title}
                </h1>
            </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar (Sticky) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
                <Reveal delay={0.2}>
                    <div className="space-y-8 border-t border-current pt-8 opacity-90">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="uppercase text-xs font-bold tracking-widest opacity-60 mb-2">Client</h3>
                                <p className="text-xl font-medium">{project.client}</p>
                            </div>
                            <div>
                                <h3 className="uppercase text-xs font-bold tracking-widest opacity-60 mb-2">Year</h3>
                                <p className="text-xl font-medium">{project.details?.year || '2024'}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase text-xs font-bold tracking-widest opacity-60 mb-2">Involvement</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.details?.involvement.map(item => (
                                    <span key={item} className="text-lg font-medium block w-full">{item}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase text-xs font-bold tracking-widest opacity-60 mb-2">Deliverables</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.details?.deliverables.map(item => (
                                    <span key={item} className="text-lg font-medium block w-full">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {project.details?.websiteUrl && (
                        <div className="mt-8">
                            <a 
                                href={project.details.websiteUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-current px-8 py-4 rounded-full uppercase font-bold tracking-widest text-sm hover:invert transition-all"
                            >
                                Visit Website <ArrowUpRight size={16} />
                            </a>
                        </div>
                    )}
                </Reveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 space-y-20">
                
                {/* Intro Text */}
                <Reveal delay={0.4}>
                    <div className="text-2xl md:text-4xl font-light leading-tight">
                        <p>{project.details?.challenge || project.description}</p>
                    </div>
                </Reveal>

                {/* Images */}
                <div className="space-y-8">
                    {/* Main Image */}
                    <Reveal>
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-auto rounded-sm"
                        />
                    </Reveal>
                    
                    {/* Additional Images */}
                    {project.details?.images.map((img, idx) => (
                        <Reveal key={idx}>
                            <div className="bg-gray-900 rounded-sm overflow-hidden">
                                 <img 
                                    src={img} 
                                    alt={`${project.title} detail ${idx}`} 
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>
                
                {/* Specific Section for Ethical Life style color block if needed */}
                {project.id === 'ethical-life' && (
                     <Reveal>
                         <div className="bg-[#D1F072] text-black p-20 -mx-6 md:-mx-12 lg:rounded-3xl mt-20">
                            <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.85] tracking-tighter mb-8">
                                Let's do<br/>good together
                            </h2>
                         </div>
                     </Reveal>
                )}
            </div>
        </div>
        
        {/* Next Project Footer */}
        <div className="mt-32 pt-20 border-t border-current">
            <Reveal>
                <p className="uppercase text-xs font-bold tracking-widest opacity-60 mb-4">Next Project</p>
                <div className="group cursor-pointer">
                    <h2 className="font-display font-black text-5xl md:text-8xl uppercase group-hover:opacity-50 transition-opacity">
                        {(() => {
                            const idx = projects.findIndex(p => p.id === project.id);
                            const next = projects[(idx + 1) % projects.length];
                            return <Link to={`/work/${next.id}`}>{next.title} ↗</Link>;
                        })()}
                    </h2>
                </div>
            </Reveal>
        </div>

      </div>
    </div>
  );
};