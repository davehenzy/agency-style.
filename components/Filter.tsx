import React from 'react';
import { X } from 'lucide-react';

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Filter: React.FC<FilterProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-[#111] border-t border-white/10 p-8 transition-transform duration-300 transform translate-y-0 h-[60vh] overflow-y-auto rounded-t-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto relative">
        <button onClick={onClose} className="absolute top-0 right-0 text-white hover:text-red-500 transition-colors">
            <X size={24} />
        </button>
        
        <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
                <h3 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-2">Category</h3>
                <div className="space-y-3">
                    {['Websites', 'Branding', 'E-Commerce', 'Products', 'Strategy', 'Content', 'Development'].map(cat => (
                        <div key={cat} className="text-gray-400 hover:text-white cursor-pointer text-lg font-medium transition-colors">
                            {cat} <span className="text-xs align-top opacity-50 ml-1">({Math.floor(Math.random() * 20)})</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-2">Industry</h3>
                <div className="space-y-3">
                    {['Technology', 'Food & Consumer', 'Lifestyle', 'Science', 'Construction', 'Aerospace', 'Nonprofit', 'Sports'].map(ind => (
                        <div key={ind} className="text-gray-400 hover:text-white cursor-pointer text-lg font-medium transition-colors">
                            {ind} <span className="text-xs align-top opacity-50 ml-1">({Math.floor(Math.random() * 10)})</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};