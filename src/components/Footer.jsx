import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-md">
              <div className={`w-full h-full rounded-[10px] ${darkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center`}>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-sm">
                  NT
                </span>
              </div>
            </div>
            <div>
              <div className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Nalwoga Tracy
              </div>
              <div className="text-xs text-emerald-500 font-medium">
                Software Engineer • Bugema University 🇺🇬
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-800/80 border-slate-700 hover:text-emerald-400' : 'bg-white border-slate-200 hover:text-emerald-600'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-800/80 border-slate-700 hover:text-emerald-400' : 'bg-white border-slate-200 hover:text-emerald-600'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-800/80 border-slate-700 hover:text-emerald-400' : 'bg-white border-slate-200 hover:text-emerald-600'
              }`}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/40 text-center text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Nalwoga Tracy. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with React, Spring Boot mindset & Tailwind CSS in Uganda <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </span>
        </div>
      </div>
    </footer>
  );
}
