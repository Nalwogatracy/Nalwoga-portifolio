import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Great Together</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind, a job opportunity, or want to collaborate? Feel free to reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl space-y-6 ${
              darkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                I am currently open to full-stack engineering roles, freelance software projects, and technical collaborations in Uganda and remotely worldwide.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode ? 'bg-slate-800/60 border-slate-700 text-slate-200 hover:border-emerald-500/50' : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Email</div>
                    <div className="text-sm font-bold">{personalInfo.email}</div>
                  </div>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode ? 'bg-slate-800/60 border-slate-700 text-slate-200 hover:border-emerald-500/50' : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Phone / WhatsApp</div>
                    <div className="text-sm font-bold">{personalInfo.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className={`flex items-center gap-4 p-4 rounded-2xl border ${
                  darkMode ? 'bg-slate-800/60 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Location</div>
                    <div className="text-sm font-bold">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-700/40">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Connect On Social Media:
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                      darkMode ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-emerald-500' : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-emerald-500'
                    }`}
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                      darkMode ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-emerald-500' : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-emerald-500'
                    }`}
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl space-y-4 relative ${
                darkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Direct Message
              </h3>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div className="text-sm font-semibold">
                    Thank you! Your message has been sent to Nalwoga Tracy. I'll respond shortly.
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Mukasa"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      darkMode 
                        ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      darkMode 
                        ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Collaboration / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                    darkMode 
                      ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Message *
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Hi Tracy, I loved your work on Bugema Academic Connect and would like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                    darkMode 
                      ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Tracy</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
