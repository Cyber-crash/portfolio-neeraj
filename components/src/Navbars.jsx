import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-tighter">NEERAJ.</span>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="mailto:7091331316neeraj@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </nav>
  );
}