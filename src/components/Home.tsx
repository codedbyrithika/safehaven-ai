import React from 'react';
import { PageId } from '../types';
import { 
  Shield, 
  Compass, 
  FileCheck2, 
  BookOpen, 
  Lock, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall,
  UserCheck
} from 'lucide-react';
import heroShieldImg from '../assets/images/safehaven_hero_shield_1793428524682.jpg';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Proposition and Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet unboxed kicker */}
              <div className="flex items-center gap-2 text-xs text-teal-400 font-medium tracking-wider uppercase">
                <Shield className="w-4 h-4 text-teal-400" />
                <span>CONFIDENTIAL & TRAUMA-INFORMED SUPPORT</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] text-balance">
                Your privacy. <br />
                Your choices. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-lavender-300">
                  Your next safe step.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                A trauma-informed digital support navigator for anyone affected by non-consensual intimate-image sharing, extortion, or synthetic deepfake abuse.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => { onNavigate('safepath'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Compass className="w-4 h-4" />
                  <span>Start SafePath Navigator</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => { onNavigate('evidence'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer whitespace-nowrap"
                >
                  <FileCheck2 className="w-4 h-4 text-teal-400" />
                  <span>Evidence Guardian Checklist</span>
                </button>
              </div>

              {/* Four Quiet Trust Markers */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>No image uploads</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>No account needed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Client-side only</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Instant quick exit</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Focal Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-teal-500/20 shadow-2xl bg-slate-950/80 glow-teal">
                <img
                  src={heroShieldImg}
                  alt="SafeHaven AI cryptographic protection shield visualization"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C16] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel text-xs text-slate-300">
                  <div className="text-white font-semibold flex items-center gap-2 mb-1">
                    <Lock className="w-3.5 h-3.5 text-teal-400" />
                    <span>Cryptographic Shield Protection</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Your images are never transmitted. Tools like StopNCII and Take It Down compute privacy-preserving hashes directly on your personal device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Crisis Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-rose-500/20 border border-rose-500/40 rounded-lg text-rose-300 shrink-0 mt-0.5">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm">Are you in immediate crisis or physical danger?</h2>
              <p className="text-slate-300 text-xs mt-0.5">
                Compassionate, confidential crisis counselors are available 24/7. You do not have to carry this alone.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="tel:988"
              className="px-3 py-1.5 bg-rose-600/90 hover:bg-rose-500 text-white font-bold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>Call / Text 988</span>
              <span className="text-[10px] opacity-80">(US & CA)</span>
            </a>
            <a
              href="sms:741741&body=HOME"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg border border-slate-700 transition-colors"
            >
              Text HOME to 741741
            </a>
            <a
              href="tel:08001111"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg border border-slate-700 transition-colors"
            >
              UK: 0800 1111
            </a>
            <a
              href="tel:131114"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg border border-slate-700 transition-colors"
            >
              AU: 13 11 14
            </a>
          </div>
        </div>
      </section>

      {/* Core Functional Modules Bento Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Functional Modules</span>
          <h2 className="font-display text-3xl font-bold text-white">Choose Your Support Pathway</h2>
          <p className="text-slate-400 text-sm">
            Whether you are actively being extorted, suspect an image was posted, or need official takedown links, each tool is deterministic, safe, and confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module 1: SafePath */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-teal-500/20 glass-card-hover flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">SafePath Navigator</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Interactive decision flow tailored to your exact situation: threatened blackmail, shared media, or AI deepfakes. Routes minors to child-protection safeguards and adults to official hashing networks.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">·</span>
                  <span>Deterministic safety decision logic</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">·</span>
                  <span>Under-18 & adult separate pathways</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">·</span>
                  <span>Personalized printable action plan</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => { onNavigate('safepath'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-4 w-full py-2.5 px-4 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Launch SafePath</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 2: Evidence Guardian */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-lavender-500/20 glass-card-hover flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-lavender-500/10 border border-lavender-500/30 flex items-center justify-center text-lavender-300">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Evidence Guardian</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Step-by-step documentation checklist. Securely note usernames, URLs, message timestamps, and platform reference numbers before blocking offenders, without storing anything on a server.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-1.5">
                  <span className="text-lavender-400">·</span>
                  <span>Interactive completion meter</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-lavender-400">·</span>
                  <span>Print & PDF export for legal records</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-lavender-400">·</span>
                  <span>Zero server-side persistence</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => { onNavigate('evidence'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-4 w-full py-2.5 px-4 bg-lavender-500/20 hover:bg-lavender-500/30 text-lavender-300 border border-lavender-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Open Evidence Guardian</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 3: Verified Resource Hub */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-teal-500/20 glass-card-hover flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Verified Resource Hub</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Searchable directory of verified government regulators, official social media reporting portals, Google/Bing de-indexing requests, and 24/7 helplines, with dates and strict age eligibility labels.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">·</span>
                  <span>Filter by country, category, & age</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">·</span>
                  <span>Direct official URLs (No intermediaries)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">·</span>
                  <span>Includes NCMEC, eSafety, FTC, and IWF</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => { onNavigate('resources'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-4 w-full py-2.5 px-4 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore Verified Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Critical Immediate Guidance: What To Do In The First Hour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">If Someone Is Threatening You Right Now (Sextortion Triage)</h3>
              <p className="text-slate-400 text-xs">Follow these three evidence-backed principles immediately before taking any other action:</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-rose-400">01. Do Not Pay Any Money</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extortionists rarely delete photos upon payment. Giving money signals compliance, which almost always triggers larger financial demands or demands for more videos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-teal-400">02. Capture Evidence First</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Do not delete the chat or block them yet. Take uncropped screenshots showing their @handle, profile URL, message text, and payment account details.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-lavender-400">03. Stop Communication & Hash</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Once evidence is saved, stop responding. Use Take It Down (for youth under 18) or StopNCII.org (for adults) so partner platforms block the photos automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Shield Architectural Proof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Privacy Architecture</span>
          <h2 className="font-display text-3xl font-bold text-white">Zero-Compromise Security by Design</h2>
          <p className="text-slate-400 text-sm">
            We built SafeHaven AI so that you can navigate support with total confidence that your privacy remains protected.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl glass-panel-subtle border border-slate-800 space-y-3">
            <EyeOff className="w-6 h-6 text-teal-400" />
            <h4 className="font-display font-semibold text-white text-sm">No Media Uploads</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never ask for, process, or host your intimate media. There is no file upload capability anywhere in this application.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-subtle border border-slate-800 space-y-3">
            <UserCheck className="w-6 h-6 text-lavender-400" />
            <h4 className="font-display font-semibold text-white text-sm">Zero Accounts</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No registration, login, phone number, or email. You access all tools immediately without leaving an identity footprint.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-subtle border border-slate-800 space-y-3">
            <Lock className="w-6 h-6 text-teal-400" />
            <h4 className="font-display font-semibold text-white text-sm">Client-Side Memory</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              All checklist entries and navigator state live in your browser's local memory. No database or server ever records your entries.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-subtle border border-slate-800 space-y-3">
            <Shield className="w-6 h-6 text-rose-400" />
            <h4 className="font-display font-semibold text-white text-sm">Honest Quick Exit</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Press Escape or tap Quick Exit anytime. The application immediately wipes active memory and redirects to Google Search.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
