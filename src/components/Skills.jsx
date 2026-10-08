import React, { useState } from 'react';
import { Cpu, Search, Code, Server, Database, Globe, Lock, Atom, Zap, FileCode, Layout, Palette, HardDrive, GitBranch, Send, Cloud, CheckCircle2, CheckSquare, Layers, Smartphone } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const iconMap = {
    Code: Code,
    Server: Server,
    Globe: Globe,
    Lock: Lock,
    Atom: Atom,
    Zap: Zap,
    FileCode: FileCode,
    Layout: Layout,
    Palette: Palette,
    Database: Database,
    HardDrive: HardDrive,
    GitBranch: GitBranch,
    Send: Send,
    Cloud: Cloud,
    CheckCircle2: CheckCircle2,
    CheckSquare: CheckSquare,
    Layers: Layers,
    Smartphone: Smartphone,
  };

  const filteredSkills = skillsData.items.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Technologies</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Core technologies and tools I utilize to engineer scalable full-stack applications.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20'
                    : darkMode 
                      ? 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60' 
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 text-sm rounded-xl border focus:outline-none transition-all ${
                darkMode
                  ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
              }`}
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-800/40 border-slate-700/60 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10'
                    : 'bg-white border-slate-200 hover:border-emerald-500/50 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 shadow-md`}>
                      <div className={`w-full h-full rounded-[10px] ${darkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-emerald-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {skill.name}
                      </h4>
                      <span className="text-xs text-slate-400 capitalize">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-500">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-700/60' : 'bg-slate-200'}`}>
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No skills match "{searchQuery}"
          </div>
        )}

      </div>
    </section>
  );
}
