import React from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  // On the contact page (red bg), we might want slight style adjustments, 
  // but the reference shows the header is consistent.
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start pointer-events-none">
      <div className="flex gap-4 pointer-events-auto">
        {/* Logo */}
        <Link to="/" className="bg-[#1a1a1a] border border-white/10 px-6 py-3 text-white font-black tracking-tighter text-2xl hover:bg-[#252525] transition-colors">
          nika
        </Link>
        
        {/* Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-[#1a1a1a] border border-white/10 px-6 py-3 text-white flex items-center gap-2 hover:bg-[#252525] transition-colors uppercase font-bold text-sm tracking-widest"
        >
          {isMenuOpen ? (
            <>
              <span>Close</span>
              <X size={18} />
            </>
          ) : (
            <>
              <span>Menu</span>
              <span className="ml-1 transform rotate-90 inline-block text-[10px]">▼</span>
            </>
          )}
        </button>
      </div>

      <div className="pointer-events-auto">
        <Link to="/contact">
          <button className="bg-[#1a1a1a] border border-white/10 px-8 py-4 text-white font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all">
            Let's Talk
          </button>
        </Link>
      </div>
    </header>
  );
};