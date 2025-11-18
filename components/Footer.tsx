import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-primary to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal className="w-6 h-6 text-cyber-primary" />
          <span className="font-display font-bold text-xl text-white">HACK_<span className="text-cyber-primary">CODE</span></span>
        </div>
        <p className="text-gray-500 font-mono text-sm mb-8">
          Organisé par YIRI TECH AFRICA & ASEGUIM FÈS
        </p>
        <div className="flex justify-center gap-8 text-sm font-mono text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
        <p className="mt-12 text-xs text-gray-700 font-mono">
          © 2024 Hack Code Organization. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;