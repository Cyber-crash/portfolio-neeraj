"use client";
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 grid-bg">
      {/* Site Status Badge */}
      <div className="mb-6 px-4 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full text-xs text-blue-400">
        ● Site under construction — sections coming soon
      </div>

      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Neeraj Thakur</span>
      </h1>

      <p className="mt-4 text-gray-400 text-lg md:text-xl font-medium">
        Bug Bounty Hunter • Python & JS Developer • Gamer
      </p>

      {/* Tech Stack Tags */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl">
        {['Python', 'JavaScript', 'Next.js', 'Burp Suite', 'Kali Linux', 'CS2', 'VALORANT'].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
            • {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex gap-4">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
          View Projects →
        </button>
        <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">
          Let's Connect
        </button>
      </div>
    </section>
  );
}