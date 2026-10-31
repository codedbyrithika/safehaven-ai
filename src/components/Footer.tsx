import React from 'react';
import { PageId } from '../types';
import { Shield, Lock, ExternalLink, Heart } from 'lucide-react';
import { executeQuickExit } from './QuickExitBar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-800 bg-[#060911] text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8 no-print">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white font-display font-bold text-base">
              <Shield className="w-4 h-4 text-teal-400" />
              <span>SAFEHAVEN<span className="text-teal-400">.AI</span></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              A trauma-informed digital support navigator for people affected by non-consensual intimate-image sharing.
            </p>
            <div className="pt-2 text-[11px] text-teal-300 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-teal-400 shrink-0" />
              <span>Zero logs · Zero uploads · Client-side only</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <div className="text-slate-200 font-semibold text-xs tracking-wider uppercase">Navigation</div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => { onNavigate('safepath'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  SafePath Navigator
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('evidence'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Evidence Guardian
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('resources'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Verified Resource Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Privacy Shield & Quick Exit
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  About SafeHaven AI
                </button>
              </li>
            </ul>
          </div>

          {/* Urgent Helplines */}
          <div className="space-y-2">
            <div className="text-slate-200 font-semibold text-xs tracking-wider uppercase">24/7 Crisis Helplines</div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <span className="text-slate-400">US & Canada Lifeline:</span> <a href="tel:988" className="text-teal-400 hover:underline font-mono">988</a>
              </li>
              <li>
                <span className="text-slate-400">Crisis Text Line:</span> <span className="font-mono text-teal-400">Text HOME to 741741</span>
              </li>
              <li>
                <span className="text-slate-400">UK Childline (Under 19):</span> <a href="tel:08001111" className="text-teal-400 hover:underline font-mono">0800 1111</a>
              </li>
              <li>
                <span className="text-slate-400">UK Revenge Porn Helpline:</span> <a href="tel:03456000459" className="text-teal-400 hover:underline font-mono">0345 6000 459</a>
              </li>
              <li>
                <span className="text-slate-400">Australia Lifeline:</span> <a href="tel:131114" className="text-teal-400 hover:underline font-mono">13 11 14</a>
              </li>
            </ul>
          </div>

          {/* Official Hash Networks */}
          <div className="space-y-2">
            <div className="text-slate-200 font-semibold text-xs tracking-wider uppercase">Official Removal Portals</div>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://takeitdown.ncmec.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                >
                  Take It Down by NCMEC (Youth) <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://stopncii.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                >
                  StopNCII.org (Adults 18+) <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/websearch/troubleshooter/3111061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                >
                  Google Intimate Removal Tool <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.esafety.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                >
                  eSafety Commissioner AU <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 space-y-4">
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
            <strong>Important Safety Notice:</strong> SafeHaven AI is an educational, trauma-informed digital decision-support navigator. It does not provide legal representation, nor does it host, store, or transmit intimate images. We never guarantee content removal, as final decisions rest with third-party platforms and statutory regulators. If you are in immediate physical danger, please contact local emergency authorities immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span>SafeHaven AI · Built with care for survivor agency and digital safety</span>
              <Heart className="w-3 h-3 text-lavender-400 fill-lavender-400/20" />
            </div>
            <button
              onClick={() => executeQuickExit()}
              className="text-rose-400 hover:text-rose-300 underline font-medium cursor-pointer"
            >
              Trigger Quick Exit Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
