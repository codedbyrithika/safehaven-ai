import React, { useState } from 'react';
import { PageId } from '../types';
import { Shield, Menu, X, LogOut } from 'lucide-react';
import { executeQuickExit } from './QuickExitBar';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'safepath', label: 'SafePath' },
    { id: 'evidence', label: 'Evidence Guardian' },
    { id: 'resources', label: 'Verified Resources' },
    { id: 'privacy', label: 'Privacy & Safety' },
    { id: 'about', label: 'About' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080C16]/90 backdrop-blur-md border-b border-slate-800/80 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand wordmark (single text element) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 text-left focus:outline-none group cursor-pointer whitespace-nowrap shrink-0"
            aria-label="SafeHaven AI Home"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:border-teal-400 transition-colors">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-teal-300 transition-colors">
              SAFEHAVEN<span className="text-teal-400">.AI</span>
            </span>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer relative ${
                    isActive
                      ? 'text-teal-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action (Quick Exit) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => executeQuickExit()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-rose-200 bg-rose-950/60 border border-rose-500/40 rounded-lg hover:bg-rose-900/80 hover:text-white transition-all cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-rose-400"
              title="Immediately exits this website and clears local state"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-400" />
              <span>Quick Exit</span>
              <kbd className="hidden sm:inline-block px-1 py-0.2 bg-black/40 rounded text-[9px] font-mono text-rose-300 ml-1">
                ESC
              </kbd>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#080C16] px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-teal-500/10 text-teal-300 font-semibold border border-teal-500/20'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => executeQuickExit()}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-600 text-white rounded-lg text-sm font-bold shadow-md"
            >
              <LogOut className="w-4 h-4" />
              <span>Emergency Quick Exit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
