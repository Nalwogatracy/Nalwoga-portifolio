import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl' : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md'
        : 'bg-transparent py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className={`w-full h-full rounded-[10px] ${darkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center`}>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-lg">
                  NT
                </span>
              </div>
            </div>
            <div className="text-left hidden sm:block">
              <span className={`font-bold text-base tracking-tight block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Nalwoga Tracy
              </span>
              <span className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                <Code2 className="w-3 h-3" /> Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-800/40 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20 font-semibold'
                      : darkMode 
                        ? 'text-slate-300 hover:text-white hover:bg-slate-700/50' 
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer border ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700 hover:border-amber-400/40'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:border-slate-400'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenCV}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Resume / CV</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border cursor-pointer ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-200' 
                  : 'bg-slate-100 border-slate-300 text-slate-800'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-2 pb-6 space-y-2 animate-fadeIn ${
          darkMode ? 'bg-slate-900/95 border-slate-800 backdrop-blur-xl' : 'bg-white/95 border-slate-200 backdrop-blur-xl'
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between cursor-pointer ${
                activeSection === link.id
                  ? 'bg-emerald-500/10 text-emerald-500 font-bold border-l-4 border-emerald-500'
                  : darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{link.label}</span>
              {activeSection === link.id && <Sparkles className="w-4 h-4 text-emerald-500" />}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-md shadow-emerald-500/20"
            >
              <Download className="w-5 h-5" />
              <span>Download CV / Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
