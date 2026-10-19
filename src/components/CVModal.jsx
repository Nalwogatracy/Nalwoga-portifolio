import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, projectsData, skillsData, educationData, experienceData } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose, darkMode }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Nalwoga_Tracy_CV.pdf';
    link.download = 'Nalwoga_Tracy_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl flex flex-col ${
        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Modal Header Actions */}
        <div className={`sticky top-0 z-20 px-6 py-4 border-b flex items-center justify-between backdrop-blur-md ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-500" />
            <h3 className="font-bold text-lg">Curriculum Vitae — Nalwoga Tracy</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </button>
            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border cursor-pointer ${
                darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-full border cursor-pointer ${
                darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0 print:text-black">
          
          {/* Resume Header */}
          <div className="border-b pb-6 border-slate-700/40">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Nalwoga Tracy
                </h1>
                <p className="text-lg font-bold text-emerald-500 mt-1">
                  Software Engineer & Full-Stack Developer
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Specializing in Spring Boot, React, and PostgreSQL Enterprise Solutions
                </p>
              </div>

              <div className="text-xs space-y-1.5 text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Professional Summary</span>
            </h2>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {personalInfo.bioShort}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <span className="font-bold text-emerald-500 block mb-1">Backend Development:</span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Java, Spring Boot, REST APIs, Spring Security, JWT</span>
              </div>
              <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <span className="font-bold text-cyan-500 block mb-1">Frontend Engineering:</span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>React.js, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3</span>
              </div>
              <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <span className="font-bold text-blue-500 block mb-1">Database & Infrastructure:</span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>PostgreSQL, MySQL, Vercel, Git, GitHub</span>
              </div>
              <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <span className="font-bold text-purple-500 block mb-1">Engineering Practices:</span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Agile, Clean Code, REST API Integration, Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Education
            </h2>
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-base">{educationData.degree}</h3>
                <span className="text-xs font-semibold text-emerald-400">{educationData.period}</span>
              </div>
              <p className="text-xs text-slate-400 font-semibold">{educationData.institution} • {educationData.location}</p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Featured Software Projects
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 4).map((proj, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm">{proj.title} <span className="text-xs font-normal text-emerald-400">({proj.category})</span></h3>
                    <span className="text-xs text-slate-400 font-medium">{proj.badge}</span>
                  </div>
                  <p className={`text-xs mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{proj.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
