import React from 'react';
import { PageId } from '../../types';
import { 
  Shield, 
  HeartHandshake, 
  Scale, 
  CheckCircle2, 
  Compass, 
  Mail, 
  FileCheck2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
          <Shield className="w-4 h-4 text-teal-400" />
          <span>Mission & Core Principles</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          About SafeHaven AI
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
          An open, privacy-first digital refuge designed to empower survivors of image-based abuse, non-consensual sharing, and digital extortion.
        </p>
      </div>

      {/* Origin & Problem Statement */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
        <h2 className="font-display font-bold text-xl text-white">The Digital Crisis</h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Non-consensual intimate image (NCII) abuse—including youth sextortion, adult revenge pornography, and AI-generated deepfake exploitation—is one of the fastest-growing violations in our connected world. Victims frequently experience acute panic, social isolation, shame, and overwhelming uncertainty about what steps to take first.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          In moments of crisis, searching the internet often leads to predatory commercial "reputation cleaner" companies charging thousands of dollars, generic advice blogs, or dangerous instructions that cause victims to lose crucial evidence before reporting.
        </p>
        <p className="text-xs sm:text-sm text-teal-300 font-medium leading-relaxed">
          SafeHaven AI was created to replace panic with deterministic clarity: clear, immediate safety pathways grounded in verified law and trauma-informed care, requiring zero registration and zero media uploads.
        </p>
      </div>

      {/* Four Trauma-Informed Pillars */}
      <div className="space-y-4">
        <h2 className="font-display font-bold text-xl text-white">Our Trauma-Informed Framework</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl glass-panel-subtle border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>01. Survivor Agency</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We never dictate what you "must" do or automatically trigger reports on your behalf. You are in complete control of which steps you take, when you take them, and what support you seek.
            </p>
          </div>

          <div className="p-5 rounded-xl glass-panel-subtle border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-lavender-400 font-bold text-xs uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>02. Psychological Safety</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Zero victim-blaming language. Intimate image sharing and extortion are crimes committed by the perpetrator, never the fault of the person targeted. We prioritize immediate emotional de-escalation.
            </p>
          </div>

          <div className="p-5 rounded-xl glass-panel-subtle border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>03. Zero-Knowledge Privacy</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              No surveillance or data monetization. We will never collect email addresses, monitor session recordings, or transmit sensitive disclosures to external language models.
            </p>
          </div>

          <div className="p-5 rounded-xl glass-panel-subtle border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>04. Deterministic Accuracy</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We do not invent legal advice or guess reporting mechanisms. SafePath uses audited, deterministic decision trees that link exclusively to official statutory bodies and verified platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Scope and Statutory Boundaries */}
      <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3 text-xs text-slate-400">
        <h3 className="font-display font-bold text-sm text-white">Statutory Scope & Boundaries</h3>
        <p className="leading-relaxed">
          SafeHaven AI is a self-advocacy educational navigation system. It does not provide formal legal representation, attorney-client privileged counsel, or psychological therapy.
        </p>
        <p className="leading-relaxed">
          SafeHaven AI does not remove content directly or guarantee removal. Platform takedowns depend on platform terms of service and statutory compliance under local jurisdictions. If you require formal legal representation, subpoenas, or restraining orders, please consult an attorney or victim legal advocate in your state or country.
        </p>
      </div>

      {/* Advocacy & Resource Submissions */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-teal-500/20 space-y-4">
        <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
          <Mail className="w-4 h-4" />
          <span>Advocate & Organization Coordination</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Are you a member of a non-profit organization, statutory safety body, legal aid clinic, or trust and safety department? We continuously audit our verified resource directory.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={() => { onNavigate('resources'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Browse Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => { onNavigate('safepath'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-xs rounded-lg transition-colors cursor-pointer"
          >
            Open SafePath Navigator
          </button>
        </div>
      </div>
    </div>
  );
};
