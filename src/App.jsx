import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('tracy_theme');
    return saved !== null ? JSON.parse(saved) : true; // Default dark theme
  });

  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('tracy_theme', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenCV={() => setCvModalOpen(true)} 
      />

      {/* Main Page Sections */}
      <main>
        <Hero 
          darkMode={darkMode} 
          onOpenCV={() => setCvModalOpen(true)} 
        />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <EducationCertifications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* CV Download / Preview Modal */}
      <CVModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
        darkMode={darkMode} 
      />
    </div>
  );
}
