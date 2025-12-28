import React from 'react';
import { Reveal } from '../components/Reveal';

export const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-[#D90429] via-[#8d0000] to-black flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Col: Headline & Form */}
        <div>
            <Reveal>
                <h1 className="font-display font-black text-6xl md:text-8xl italic uppercase text-white mb-12 leading-[0.9]">
                    Let's do<br/>
                    good together!
                </h1>
            </Reveal>

            <Reveal delay={0.2}>
                <form className="space-y-12 max-w-lg mt-16">
                    <div className="relative">
                        <input 
                            type="text" 
                            id="interest"
                            className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors text-lg"
                            placeholder="I'm interested in ..."
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name"
                            className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors text-lg"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="email" 
                            id="email"
                            className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors text-lg"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="relative">
                        <textarea 
                            id="project"
                            rows={3}
                            className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                            placeholder="Tell us about your project"
                        ></textarea>
                    </div>

                    <button type="button" className="border border-white/30 px-10 py-4 rounded-full text-white uppercase font-bold tracking-widest hover:bg-white hover:text-[#D90429] transition-all">
                        Submit
                    </button>
                </form>
            </Reveal>
        </div>

        {/* Right Col: Contact Info */}
        <div className="lg:pt-20 text-white space-y-16 lg:pl-20">
            <Reveal delay={0.4}>
                <div>
                    <h3 className="font-bold uppercase tracking-widest mb-4">Other Contact</h3>
                    <p className="text-xl underline decoration-1 underline-offset-4 hover:no-underline cursor-pointer">contact@nika.agency</p>
                    <p className="text-xl mt-2 underline decoration-1 underline-offset-4 hover:no-underline cursor-pointer">+1 669 306 5012</p>
                </div>
            </Reveal>

            <Reveal delay={0.5}>
                <div>
                    <h3 className="font-bold uppercase tracking-widest mb-4">Location</h3>
                    <p className="text-xl">Silicon Valley</p>
                    <p className="text-xl">NYC</p>
                </div>
            </Reveal>

            <Reveal delay={0.6}>
                <div>
                    <h3 className="font-bold uppercase tracking-widest mb-4">Social</h3>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="text-xl underline decoration-1 underline-offset-4 hover:no-underline">Instagram</a>
                        <a href="#" className="text-xl underline decoration-1 underline-offset-4 hover:no-underline">LinkedIn</a>
                    </div>
                </div>
            </Reveal>
        </div>

      </div>
    </div>
  );
};