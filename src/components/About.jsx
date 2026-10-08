import React, { useState } from 'react';
import { User, GraduationCap, HeartHandshake, Sparkles, CheckCircle2, ShieldCheck, Cpu, Code2, Globe2, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ darkMode }) {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Nalwoga Tracy</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A 23-year-old Ugandan Software Engineer passionate about enterprise systems, web application design, and real-world technology solutions.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Personal Highlight Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Identity Card */}
            <div className={`p-6 rounded-2xl border backdrop-blur-xl relative overflow-hidden ${
              darkMode ? 'bg-slate-800/60 border-slate-700/80' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-lg">
                  <div className={`w-full h-full rounded-[14px] ${darkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center`}>
                    <User className="w-7 h-7 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Nalwoga Tracy</h3>
                  <p className="text-sm text-emerald-500 font-semibold">23 Years Old • Uganda 🇺🇬</p>
                </div>
              </div>

              <ul className="space-y-3 text-sm">
                <li className={`flex items-center justify-between py-2 border-b ${darkMode ? 'border-slate-700/60 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-500" /> University
                  </span>
                  <span className="font-semibold">{personalInfo.university}</span>
                </li>
                <li className={`flex items-center justify-between py-2 border-b ${darkMode ? 'border-slate-700/60 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                  <span className="text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-500" /> Major
                  </span>
                  <span className="font-semibold">{personalInfo.degree}</span>
                </li>
                <li className={`flex items-center justify-between py-2 border-b ${darkMode ? 'border-slate-700/60 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                  <span className="text-slate-400 flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-emerald-500" /> Location
                  </span>
                  <span className="font-semibold">{personalInfo.location}</span>
                </li>
                <li className={`flex items-center justify-between py-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className="text-slate-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-amber-500" /> Core Stack
                  </span>
                  <span className="font-semibold text-emerald-400">Spring Boot & React</span>
                </li>
              </ul>
            </div>

            {/* Quick Quote Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-slate-900/60 border border-emerald-500/30 text-white relative">
              <Sparkles className="w-6 h-6 text-emerald-400 mb-2" />
              <p className="text-sm italic leading-relaxed text-slate-200">
                "Building software isn't just about writing code—it's about engineering intuitive, reliable solutions that empower people, institutions, and businesses."
              </p>
              <div className="mt-3 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                — Nalwoga Tracy
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Bio Tabs & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Navigation */}
            <div className="flex p-1.5 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('bio')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'bio'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                My Journey & Bio
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'values'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Core Principles
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'bio' ? (
              <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-xl space-y-4 ${
                darkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200'
              }`}>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Engineering Digital Solutions in Uganda 🇺🇬
                </h3>
                <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {personalInfo.bioLong}
                </p>
                
                <div className="pt-4 border-t border-slate-700/40 space-y-3">
                  <h4 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    What I Specialise In:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Enterprise Java & Spring Boot RESTful API Development</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Interactive React & Tailwind CSS Web Applications</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>PostgreSQL Database Normalization & Indexing</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Agile Collaboration & Version Control with Git</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.coreValues.map((val, idx) => (
                  <div 
                    key={idx}
                    className={`p-6 rounded-2xl border backdrop-blur-xl space-y-2 transition-all hover:scale-[1.02] ${
                      darkMode ? 'bg-slate-800/40 border-slate-700/60 hover:border-emerald-500/50' : 'bg-white border-slate-200 hover:border-emerald-500/50'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2 font-bold">
                      0{idx + 1}
                    </div>
                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{val.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{val.desc}</p>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
