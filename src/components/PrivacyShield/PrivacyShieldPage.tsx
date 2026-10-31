import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  EyeOff, 
  DatabaseZap, 
  LogOut, 
  Cpu, 
  History, 
  CheckCircle2, 
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { executeQuickExit } from '../QuickExitBar';

export const PrivacyShieldPage: React.FC = () => {
  const [openBrowserFaq, setOpenBrowserFaq] = useState<string | null>('chrome');

  const toggleBrowserFaq = (id: string) => {
    setOpenBrowserFaq(openBrowserFaq === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
          <Shield className="w-4 h-4 text-teal-400" />
          <span>Zero-Knowledge Architecture</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Privacy Shield & Safety Protocol
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
          Learn how SafeHaven AI safeguards your digital safety through architectural restraint, zero data storage, and deterministic client-side execution.
        </p>
      </div>

      {/* Honest Quick Exit Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-rose-500/40 bg-rose-950/20 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300">
              <LogOut className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-base text-white">Honest Quick Exit Functionality</h2>
              <p className="text-xs text-slate-300">How our emergency exit button actually works to protect you</p>
            </div>
          </div>

          <button
            onClick={() => executeQuickExit()}
            className="px-3.5 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Test Quick Exit Now
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          If someone unexpectedly walks into the room or you fear your screen might be monitored:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-white block">1. Immediate Memory Wipe</span>
            <p className="text-slate-400 text-[11px]">
              Instantly clears all in-memory forms, checklists, and active session buffers.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-white block">2. Screen Replacement</span>
            <p className="text-slate-400 text-[11px]">
              Instantly replaces the current viewport with a neutral Google Search query page.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-white block">3. Back-Button Defense</span>
            <p className="text-slate-400 text-[11px]">
              Uses <code className="text-teal-400">location.replace</code> so clicking the browser's "Back" arrow will not return to SafeHaven.
            </p>
          </div>
        </div>
      </div>

      {/* The Five Absolute Privacy Guarantees */}
      <div className="space-y-6">
        <h2 className="font-display font-bold text-2xl text-white">
          The Five Zero-Compromise Guarantees
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Guarantee 1 */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
              <EyeOff className="w-5 h-5" />
              <span>1. Zero Image or Video Ingestion</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We never ask for, upload, receive, store, or process intimate photos or videos. Any website that asks you to upload intimate photos directly to their own servers is a severe security risk. SafeHaven AI has no file upload mechanism.
            </p>
          </div>

          {/* Guarantee 2 */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-lavender-400 font-bold text-sm">
              <Lock className="w-5 h-5" />
              <span>2. Zero Registration or Accounts</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              You will never encounter a sign-up form, username prompt, phone verification, or password requirement. You can use every tool in SafeHaven completely unauthenticated without leaving an email trail.
            </p>
          </div>

          {/* Guarantee 3 */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
              <DatabaseZap className="w-5 h-5" />
              <span>3. Zero Server-Side Checklist Storage</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Any URLs, usernames, or notes you enter in Evidence Guardian reside purely in your local device's memory. No backend database collects or inspects your inputs. When you close the tab, that data ceases to exist.
            </p>
          </div>

          {/* Guarantee 4 */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-lavender-400 font-bold text-sm">
              <Cpu className="w-5 h-5" />
              <span>4. Deterministic Logic (No LLM Intimacy Ingestion)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your sensitive safety disclosures are never piped into third-party AI models or commercial LLM prompts for training. All SafePath navigation logic is mathematically deterministic, audited, and safety-verified.
            </p>
          </div>
        </div>
      </div>

      {/* How Cryptographic Perceptual Hashing Works */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-teal-500/20 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider">
            <span>Cryptographic Education</span>
          </div>
          <h2 className="font-display font-bold text-xl text-white">
            How Hash-Based Takedowns Work (Take It Down & StopNCII)
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Many survivors hesitate to report because they fear sharing their photos with an agency. Official tools solve this problem using irreversible client-side mathematical hashes:
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Step 1: The Image Stays On Your Device</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              When you open <strong className="text-white">TakeItDown.ncmec.org</strong> (for youth under 18) or <strong className="text-white">StopNCII.org</strong> (for adults), specialized cryptographic JavaScript runs locally inside your device browser.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Step 2: Generation of a Numerical Fingerprint (PDQ Hash)</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your browser converts the photo into an irreversible string of numbers (a perceptual hash). A hash is a one-way mathematical function. It is impossible to recreate, view, or reconstruct your original photo from the hash.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Step 3: Tech Platforms Match and Block Hashes</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Only the mathematical string of numbers is shared with participating partner platforms (Meta, Snapchat, TikTok, Reddit, OnlyFans). Their servers check if any uploaded content matches that numerical fingerprint and automatically block or remove it.
            </p>
          </div>
        </div>
      </div>

      {/* Guide: How to Clear Your Browser History */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display font-bold text-lg text-white">How to Clear Your Browser History</h2>
            <p className="text-xs text-slate-400">Step-by-step instructions for popular devices to remove traces of your visit</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Chrome */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
            <button
              onClick={() => toggleBrowserFaq('chrome')}
              className="w-full p-4 text-left font-bold text-xs sm:text-sm text-white flex items-center justify-between cursor-pointer hover:bg-slate-800/50"
            >
              <span>Google Chrome (Desktop & Android)</span>
              {openBrowserFaq === 'chrome' ? <ChevronUp className="w-4 h-4 text-teal-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>
            {openBrowserFaq === 'chrome' && (
              <div className="px-4 pb-4 text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-3">
                <p>1. On computer, press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">Ctrl + H</kbd> (Windows) or <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">Cmd + Y</kbd> (Mac).</p>
                <p>2. Click <strong>"Delete browsing data"</strong> on the left panel.</p>
                <p>3. Set time range to <strong>"Last hour"</strong> or <strong>"All time"</strong>.</p>
                <p>4. Check "Browsing history", "Cookies and other site data", and "Cached images and files", then click <strong>"Delete data"</strong>.</p>
              </div>
            )}
          </div>

          {/* Safari */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
            <button
              onClick={() => toggleBrowserFaq('safari')}
              className="w-full p-4 text-left font-bold text-xs sm:text-sm text-white flex items-center justify-between cursor-pointer hover:bg-slate-800/50"
            >
              <span>Apple Safari (iPhone / iPad / Mac)</span>
              {openBrowserFaq === 'safari' ? <ChevronUp className="w-4 h-4 text-teal-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>
            {openBrowserFaq === 'safari' && (
              <div className="px-4 pb-4 text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-3">
                <p><strong>On iPhone/iPad:</strong> Open iOS Settings → Safari → Tap "Clear History and Website Data" → Confirm "Clear History".</p>
                <p><strong>On Mac:</strong> In the top menu bar, click Safari → "Clear History..." → Select "The last hour" or "All history" → Click "Clear History".</p>
              </div>
            )}
          </div>

          {/* Private / Incognito Tip */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
            <button
              onClick={() => toggleBrowserFaq('incognito')}
              className="w-full p-4 text-left font-bold text-xs sm:text-sm text-white flex items-center justify-between cursor-pointer hover:bg-slate-800/50"
            >
              <span>Using Incognito or Private Browsing Mode</span>
              {openBrowserFaq === 'incognito' ? <ChevronUp className="w-4 h-4 text-teal-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>
            {openBrowserFaq === 'incognito' && (
              <div className="px-4 pb-4 text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-3">
                <p>For future research, opening a <strong>Private Window</strong> (Safari/Firefox) or <strong>Incognito Window</strong> (Chrome/Edge) ensures that no history, cookies, or cache are saved to your device after closing the window.</p>
                <p>Shortcut: <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">Ctrl + Shift + N</kbd> (Windows) or <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">Cmd + Shift + N</kbd> (Mac).</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
