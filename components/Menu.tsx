import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Thoughts', path: '/thoughts' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed inset-0 bg-[#080808] z-40 flex flex-col md:flex-row pt-32 px-6 md:px-20 pb-10">
      {/* Left Column: Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center space-y-4">
        <div className="border-b border-white/10 mb-4 pb-4">
            <span className="text-gray-500 uppercase text-xs tracking-widest">Navigation</span>
        </div>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={onClose}
            className="group flex items-center justify-between text-4xl md:text-6xl font-black text-white hover:text-gray-400 transition-colors uppercase tracking-tighter"
          >
            {item.label}
            {/* Show arrow on hover (visual enhancement logic) */}
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity ml-4" size={40} />
          </Link>
        ))}
      </nav>

      {/* Right Column: Extra Info / Showreel */}
      <div className="flex-1 hidden md:flex flex-col justify-center pl-20 border-l border-white/10 ml-20">
         <div className="mb-12">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                Clutch <span className="text-xs font-normal opacity-70">5.0</span>
                <div className="flex text-white">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="white" />)}
                </div>
            </h3>
            <div className="relative group cursor-pointer overflow-hidden rounded-sm border border-white/10">
                <img 
                    src="https://picsum.photos/seed/showreel/600/400" 
                    alt="Showreel Thumbnail" 
                    className="w-full h-auto object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                        ▶
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 font-bold uppercase tracking-widest">
                    Show Reel 2024
                </div>
            </div>
         </div>

         <div className="grid grid-cols-2 gap-8 text-sm text-gray-400">
            <div>
                <h4 className="text-white font-bold uppercase mb-2">Location</h4>
                <p>Silicon Valley</p>
                <p>NYC</p>
            </div>
            <div>
                <h4 className="text-white font-bold uppercase mb-2">Social</h4>
                <p><a href="#" className="hover:text-white underline">Instagram</a></p>
                <p><a href="#" className="hover:text-white underline">LinkedIn</a></p>
            </div>
         </div>
      </div>
    </div>
  );
};