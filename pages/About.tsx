import React from 'react';
import { Reveal } from '../components/Reveal';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-[#080808] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-white mb-12 leading-none">
                We are the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">unconventional</span> path.
            </h1>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-300 font-light leading-relaxed">
            <Reveal delay={0.1}>
                <p>
                    We thrive on challenging projects, select clients who inspire us, and embrace the unconventional path. That's Nika, where 'good' is at the center of everything we do—for our partners, believers, and creatives.
                </p>
            </Reveal>
            <Reveal delay={0.2}>
                <p>
                    As members of the Silicon Valley wilderness, we've always stood behind brave brands. Those that tap into creativity and collaboration to shape our world. Because everything else is just more noise.
                </p>
            </Reveal>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
            <Reveal>
                <h2 className="text-white font-bold uppercase tracking-widest mb-8">Our Capabilities</h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Strategy', 'Branding', 'Digital Product', 'Websites', 'Content', 'Development', 'Motion', 'Art Direction'].map((item, index) => (
                    <Reveal key={item} delay={index * 0.05}>
                        <div className="text-gray-400 hover:text-white transition-colors cursor-default">
                            {item}
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};