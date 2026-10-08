import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationCertifications({ darkMode }) {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Certifications</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Formal software engineering training at Bugema University alongside specialized tech credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Main Card */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl relative overflow-hidden space-y-6 ${
              darkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {educationData.status}
                </span>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  <span>{educationData.period}</span>
                </div>
              </div>

              {/* Title */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shrink-0 shadow-lg">
                  <div className={`w-full h-full rounded-[14px] ${darkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center`}>
                    <GraduationCap className="w-7 h-7 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {educationData.degree}
                  </h3>
                  <p className="text-base font-semibold text-emerald-500 flex items-center gap-1.5 mt-0.5">
                    {educationData.institution} • {educationData.location}
                  </p>
                </div>
              </div>

              {/* Coursework */}
              <div className="space-y-3 pt-4 border-t border-slate-700/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-500" />
                  <span>Core Academic Coursework:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.keyCoursework.map((course, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border ${
                        darkMode 
                          ? 'bg-slate-800 text-slate-300 border-slate-700' 
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Certifications Side Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className={`text-xl font-bold flex items-center gap-2 mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Award className="w-5 h-5 text-emerald-500" />
              <span>Certifications & Badges</span>
            </h3>

            {educationData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border backdrop-blur-xl transition-all hover:-translate-y-1 ${
                  darkMode ? 'bg-slate-800/40 border-slate-700/60 hover:border-emerald-500/40' : 'bg-white border-slate-200 hover:border-emerald-500/40 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Issued by {cert.issuer} • {cert.date}
                    </p>
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
