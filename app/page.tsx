"use client";
import Hero from '../components/src/Hero';
import Navbars from '../components/src/Navbars'

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-blue-500/30 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 max-w-4xl mx-auto text-center">
        // ...existing code...
        <div className="flex justify-center mb-8">
          <img 
            src="/aizen.jpg" 
            alt="Neeraj Thakur" 
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover shadow-lg shadow-blue-500/20"/>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Neeraj Thakur
        </h1>
        <p className="text-blue-400 font-medium text-lg mb-6">
          B.Tech CSE (Cybersecurity) @ Parul University
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          First-year student passionate about <span className="text-white">Bug Bounty</span>, 
          Web Development, and securing the digital landscape.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Email Card */}
          <a href="mailto:7091331316neeraj@gmail.com" 
             className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-blue-600/10 hover:border-blue-500 transition-all group">
            <div className="text-3xl mb-4">📧</div>
            <h4 className="font-bold text-xl mb-1 text-white">Email Me</h4>
            <p className="text-sm text-gray-500 group-hover:text-blue-400">7091331316neeraj@gmail.com</p>
          </a>

          {/* Socials Card */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-center gap-4">
            <h4 className="font-bold text-xl text-white">Connect</h4>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-white/5 text-gray-600 text-sm">
          <p>© 2026 Neeraj Thakur • Building from D: Drive • CS2/VALORANT</p>
        </footer>
      </section>
    </main>
  );
}