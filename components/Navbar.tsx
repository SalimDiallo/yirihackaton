import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ACCUEIL', href: '#home' },
    { name: 'TRACKS', href: '#tracks' },
    { name: 'MENTORS', href: '#mentors' },
    { name: 'AGENDA', href: '#schedule' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Terminal className="w-8 h-8 text-cyber-primary" />
            <span className="font-display font-bold text-2xl tracking-wider text-white">
              HACK_<span className="text-cyber-primary">CODE</span>
            </span>
          </a>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-sm text-gray-300 hover:text-cyber-primary hover:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all duration-300 px-3 py-2 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a href="#register">
                  <button className="bg-cyber-primary text-cyber-black font-bold font-mono px-6 py-2 rounded hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300 clip-path-slant">
                    S'INSCRIRE //_
                  </button>
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyber-primary block px-3 py-2 rounded-md text-base font-medium font-mono"
              >
                {link.name}
              </a>
            ))}
             <a href="#register" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-4 bg-cyber-primary text-cyber-black font-bold font-mono px-6 py-3 rounded">
                    S'INSCRIRE
                </button>
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;