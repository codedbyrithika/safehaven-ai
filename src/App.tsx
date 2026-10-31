import React, { useState } from 'react';
import { PageId } from './types';
import { QuickExitBar } from './components/QuickExitBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SafePathNavigator } from './components/SafePath/SafePathNavigator';
import { EvidenceGuardian } from './components/EvidenceGuardian/EvidenceGuardian';
import { VerifiedResourceHub } from './components/VerifiedResources/VerifiedResourceHub';
import { PrivacyShieldPage } from './components/PrivacyShield/PrivacyShieldPage';
import { AboutPage } from './components/About/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080C16] text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Quick Exit Top Notice & Global Hotkey Controller */}
      <QuickExitBar onTriggerExit={() => {}} />

      {/* Top Bar Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <Home onNavigate={handleNavigate} />
        )}

        {currentPage === 'safepath' && (
          <SafePathNavigator
            onGoToEvidenceGuardian={() => handleNavigate('evidence')}
            onGoToResources={() => handleNavigate('resources')}
          />
        )}

        {currentPage === 'evidence' && (
          <EvidenceGuardian />
        )}

        {currentPage === 'resources' && (
          <VerifiedResourceHub />
        )}

        {currentPage === 'privacy' && (
          <PrivacyShieldPage />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
