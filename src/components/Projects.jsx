import React, { useState } from 'react';
import { Folder, ExternalLink, Sparkles, Layers, CheckCircle2, X, Code2 } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ darkMode }) {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'agritech', label: 'AgriTech' },
    { id: 'fintech', label: 'FinTech / SaaS' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'fullstack') return project.category.includes('Full-Stack');
    if (filter === 'agritech') return project.category.includes('AgriTech');
    if (filter === 'fintech') return project.category.includes('SaaS') || project.category.includes('FinTech');
    if (filter === 'ecommerce') return project.category.includes('E-Commerce');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
            <Folder className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A selection of software applications I have built, ranging from university platforms and billing systems to local agricultural marketplaces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20'
                  : darkMode 
                    ? 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60' 
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border overflow-hidden backdrop-blur-xl flex flex-col transition-all duration-300 hover:-translate-y-1.5 group ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700/60 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10' 
                  : 'bg-white border-slate-200 hover:border-emerald-500/50 hover:shadow-xl'
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-slate-700">
                  {project.badge}
                </div>

                {/* Quick External Links Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900/90 text-white hover:text-emerald-400 border border-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs font-medium italic ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {project.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed line-clamp-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-md border ${
                        darkMode 
                          ? 'bg-slate-800 text-slate-300 border-slate-700' 
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Details Button */}
                <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View System Details</span>
                    <Layers className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-xs font-semibold hover:underline flex items-center gap-1 ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-emerald-500 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl ${
              darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 p-2 rounded-full border cursor-pointer ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="rounded-2xl overflow-hidden mb-6 aspect-video">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              {/* Modal Header */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold">{selectedProject.title}</h3>
                <p className="text-sm font-medium text-emerald-500">{selectedProject.subtitle}</p>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {selectedProject.description}
              </p>

              {/* Key Technical Features */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-emerald-500" />
                  <span>Architecture & Technical Highlights:</span>
                </h4>
                <div className="space-y-2">
                  {selectedProject.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Tech Stack Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700/60">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold border transition-colors ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
