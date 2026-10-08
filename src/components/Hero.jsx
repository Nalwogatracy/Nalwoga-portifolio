import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Code, Database, Server, Terminal, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ darkMode, onOpenCV }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border bg-emerald-500/10 text-emerald-500 border-emerald-500/30 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Engineering Student @ Bugema University 🇺🇬</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Nalwoga Tracy</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Software Engineer & Full-Stack Developer
              </p>
            </div>

            {/* Paragraph Bio */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              I build scalable backend systems with <strong className="text-emerald-500">Spring Boot & Java</strong>, dynamic web interfaces with <strong className="text-cyan-500">React</strong>, and optimized <strong className="text-blue-500">PostgreSQL</strong> database solutions. Dedicated to crafting software that solves real-world challenges.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['Spring Boot', 'Java', 'React.js', 'PostgreSQL', 'JavaScript', 'Tailwind CSS', 'REST APIs'].map((tech) => (
                <span 
                  key={tech}
                  className={`px-3 py-1 text-xs font-medium rounded-lg border ${
                    darkMode 
                      ? 'bg-slate-800/80 text-slate-300 border-slate-700/80' 
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all cursor-pointer ${
                  darkMode 
                    ? 'border-slate-700 bg-slate-800/60 text-slate-200 hover:bg-slate-700 hover:border-slate-600' 
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400'
                }`}
              >
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenCV}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold border transition-all cursor-pointer ${
                  darkMode
                    ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20'
                    : 'border-emerald-600/30 text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Icons & Location */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-emerald-600'
                  }`}
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-emerald-600'
                  }`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className={`h-6 w-px ${darkMode ? 'bg-slate-800' : 'bg-slate-300'}`}></div>
              <div className={`flex items-center gap-1.5 text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual / Developer Card & Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-40 animate-pulse-slow"></div>

              {/* Developer Avatar Card */}
              <div className={`relative rounded-3xl p-6 border shadow-2xl backdrop-blur-xl ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/95 border-slate-200'
              }`}>

                {/* Profile Header Image / Avatar Placeholder */}
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square max-h-80 mx-auto bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center border border-slate-700/50 shadow-inner group">
                  {/* Decorative Code Graphic */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent"></div>
                  
                  {/* Avatar Initials / SVG Illustration */}
                  <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-3">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 p-1 shadow-xl shadow-emerald-500/20">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                          NT
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Nalwoga Tracy</h3>
                      <p className="text-xs text-emerald-400 font-medium">Software Engineer • 23 Y/O</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 border border-slate-700">
                      <span>Bugema University 🇺🇬</span>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 text-xs font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg">
                    <Server className="w-3.5 h-3.5" />
                    <span>Spring Boot</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 text-xs font-semibold text-cyan-400 flex items-center gap-1.5 shadow-lg">
                    <Code className="w-3.5 h-3.5" />
                    <span>React.js</span>
                  </div>
                </div>

                {/* Developer Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.stats.map((stat, idx) => (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-xl border text-center ${
                        darkMode ? 'bg-slate-800/50 border-slate-700/60' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                        {stat.value}
                      </div>
                      <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
