import React, { useEffect, useState } from 'react';
import { LogOut, ShieldAlert, X } from 'lucide-react';

interface QuickExitBarProps {
  onTriggerExit?: () => void;
}

export const executeQuickExit = () => {
  // Clear any active session or local storage immediately
  try {
    sessionStorage.clear();
    localStorage.clear();
  } catch {
    // Ignore storage errors in sandboxed contexts
  }

  // Replace history so clicking "Back" in browser does not reload SafeHaven
  window.location.replace('https://www.google.com');
};

export const QuickExitBar: React.FC<QuickExitBarProps> = ({ onTriggerExit }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger Quick Exit on pressing Escape key twice in rapid succession or single Escape
      if (e.key === 'Escape') {
        if (onTriggerExit) onTriggerExit();
        executeQuickExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onTriggerExit]);

  const handleExit = () => {
    if (onTriggerExit) onTriggerExit();
    executeQuickExit();
  };

  return (
    <>
      {/* Pinned Mobile & Floating Desktop Quick Exit Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 no-print">
        {showTooltip && (
          <div className="glass-panel text-xs text-slate-200 px-3 py-2 rounded-lg max-w-xs shadow-xl border border-rose-500/30 flex items-center justify-between gap-2">
            <span>
              <strong>Quick Exit:</strong> Clears memory and redirects immediately to Google Search. You can also press the <strong>Esc</strong> key.
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5"
              aria-label="Dismiss quick exit tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <button
          onClick={handleExit}
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-rose-600/90 hover:bg-rose-500 text-white font-medium text-xs rounded-lg shadow-lg hover:shadow-rose-600/30 transition-all cursor-pointer border border-rose-400/40 tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-rose-400"
          title="Quick Exit (Esc) - Leaves site immediately"
          aria-label="Quick Exit - Leaves site immediately and clears session"
        >
          <LogOut className="w-4 h-4" />
          <span className="whitespace-nowrap font-bold">Quick Exit</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-black/40 rounded border border-white/20 font-mono">
            ESC
          </span>
        </button>
      </div>

      {/* Top Banner Notice for Safety Awareness */}
      <div className="bg-slate-900/95 border-b border-slate-800 text-slate-300 text-xs px-4 py-1.5 flex items-center justify-between gap-4 z-40 no-print">
        <div className="flex items-center gap-2 max-w-4xl mx-auto w-full">
          <ShieldAlert className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span className="truncate">
            <strong className="text-teal-300">Confidentiality Guarantee:</strong> No registration · No image uploads · No server logs. Press <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-teal-300 font-mono">ESC</kbd> anytime for Quick Exit.
          </span>
        </div>
        <button
          onClick={handleExit}
          className="shrink-0 text-rose-400 hover:text-rose-300 underline font-medium text-[11px]"
        >
          Leave Now
        </button>
      </div>
    </>
  );
};
