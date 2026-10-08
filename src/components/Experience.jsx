import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Code2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Projects</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Responsibilities</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Practical engineering roles, university project leadership, and technical achievements.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-800"></div>

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row gap-6 group">
                
                {/* Timeline Node */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shrink-0 z-10 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <div className={`w-full h-full rounded-[14px] ${darkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center`}>
                    <Briefcase className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 p-6 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  darkMode ? 'bg-slate-800/40 border-slate-700/60 hover:border-emerald-500/40' : 'bg-white border-slate-200 hover:border-emerald-500/40 shadow-sm'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-500 flex items-center gap-1.5 mb-4">
                    <Building2 className="w-4 h-4" />
                    {exp.organization}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-700/40">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
