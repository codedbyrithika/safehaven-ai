import React, { useState } from 'react';
import { EvidenceIncident } from '../../types';
import { 
  FileCheck2, 
  Plus, 
  Trash2, 
  Printer, 
  RotateCcw, 
  AlertCircle, 
  CheckCircle2, 
  Lock, 
  ShieldAlert, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const INITIAL_CHECKLIST_TEMPLATE = [
  { id: '1', text: 'Captured uncropped screenshots showing full usernames, timestamps, and message bubbles', completed: false },
  { id: '2', text: 'Refused payment demands and did not send money, gift cards, or crypto', completed: false },
  { id: '3', text: 'Preserved offender profile URL, handle, and platform message IDs', completed: false },
  { id: '4', text: 'Documented extortion payment accounts (CashApp, crypto addresses, PayPal handles)', completed: false },
  { id: '5', text: 'Generated digital hashes on Take It Down (minors) or StopNCII.org (adults)', completed: false },
  { id: '6', text: 'Submitted official in-app violation report and logged ticket reference #', completed: false },
  { id: '7', text: 'Enabled 2FA (Authenticator app) and updated passwords on personal accounts', completed: false },
  { id: '8', text: 'Safely archived files into an encrypted folder or offline USB storage', completed: false },
];

const PLATFORM_OPTIONS = [
  'Instagram',
  'Snapchat',
  'Discord',
  'Telegram',
  'X (Twitter)',
  'TikTok',
  'Reddit',
  'OnlyFans',
  'WhatsApp',
  'iMessage / SMS',
  'Web Forum / Hosting Site',
  'Other Platform'
];

export const EvidenceGuardian: React.FC = () => {
  const [incidents, setIncidents] = useState<EvidenceIncident[]>([
    {
      id: 'inc-1',
      platform: 'Instagram',
      profileUrlOrHandle: '',
      safeUrl: '',
      approxDateTime: '',
      reportReferenceNumber: '',
      officialChannel: 'In-app intimate media violation reporting form',
      supportNotes: '',
      evidenceItems: [...INITIAL_CHECKLIST_TEMPLATE]
    }
  ]);

  const [activeIncidentId, setActiveIncidentId] = useState<string>('inc-1');
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  const activeIncident = incidents.find(inc => inc.id === activeIncidentId) || incidents[0];

  // Calculate overall completion percentage
  const totalItems = incidents.reduce((acc, inc) => acc + inc.evidenceItems.length, 0);
  const completedItems = incidents.reduce(
    (acc, inc) => acc + inc.evidenceItems.filter(item => item.completed).length, 
    0
  );
  const completionPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  const handleUpdateIncident = (field: keyof EvidenceIncident, value: string) => {
    setIncidents(prev => prev.map(inc => {
      if (inc.id === activeIncident.id) {
        return { ...inc, [field]: value };
      }
      return inc;
    }));
  };

  const handleToggleChecklistItem = (itemId: string) => {
    setIncidents(prev => prev.map(inc => {
      if (inc.id === activeIncident.id) {
        return {
          ...inc,
          evidenceItems: inc.evidenceItems.map(item => 
            item.id === itemId ? { ...item, completed: !item.completed } : item
          )
        };
      }
      return inc;
    }));
  };

  const handleAddIncident = () => {
    const newId = `inc-${Date.now()}`;
    const newIncident: EvidenceIncident = {
      id: newId,
      platform: 'Snapchat',
      profileUrlOrHandle: '',
      safeUrl: '',
      approxDateTime: '',
      reportReferenceNumber: '',
      officialChannel: '',
      supportNotes: '',
      evidenceItems: [...INITIAL_CHECKLIST_TEMPLATE.map(t => ({ ...t }))]
    };
    setIncidents([...incidents, newIncident]);
    setActiveIncidentId(newId);
  };

  const handleRemoveIncident = (idToRemove: string) => {
    if (incidents.length <= 1) return;
    const remaining = incidents.filter(inc => inc.id !== idToRemove);
    setIncidents(remaining);
    setActiveIncidentId(remaining[0].id);
  };

  const handleResetAll = () => {
    setIncidents([
      {
        id: 'inc-1',
        platform: 'Instagram',
        profileUrlOrHandle: '',
        safeUrl: '',
        approxDateTime: '',
        reportReferenceNumber: '',
        officialChannel: '',
        supportNotes: '',
        evidenceItems: [...INITIAL_CHECKLIST_TEMPLATE.map(t => ({ ...t }))]
      }
    ]);
    setActiveIncidentId('inc-1');
    setShowClearConfirm(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2 no-print">
        <div className="flex items-center gap-2 text-xs font-semibold text-lavender-400 uppercase tracking-wider">
          <FileCheck2 className="w-4 h-4 text-lavender-400" />
          <span>Documentation & Preservation Toolkit</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Evidence Guardian
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Properly preserving digital evidence is the single most critical step for official takedowns, police reports, and legal action before blocking perpetrators. No data entered here is ever transmitted to a server.
        </p>
      </div>

      {/* Zero Server-Side Storage Disclaimer */}
      <div className="p-4 rounded-xl glass-panel-subtle border border-teal-500/30 text-xs text-slate-300 flex items-start gap-3 no-print">
        <Lock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-teal-300">Privacy Guarantee:</strong> Evidence Guardian runs 100% on your personal device. Information you type is stored only in your active browser session. When you click Print, a clean law-enforcement-ready PDF document is generated locally.
        </div>
      </div>

      {/* Completion Meter & Toolbar */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base text-white">Evidence Readiness Index</span>
              <span className="text-xs font-mono font-bold text-teal-400">{completionPercentage}%</span>
            </div>
            <p className="text-xs text-slate-400">
              {completedItems} of {totalItems} forensic preservation milestones completed across {incidents.length} record{incidents.length > 1 ? 's' : ''}.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Incident Dossier</span>
            </button>

            <button
              onClick={() => setShowClearConfirm(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-rose-400 border border-slate-700 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              title="Reset checklist"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-teal-400 via-teal-300 to-lavender-400 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Multi-Platform Incident Tabs */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 no-print">
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {incidents.map((inc, index) => (
            <button
              key={inc.id}
              onClick={() => setActiveIncidentId(inc.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                activeIncident.id === inc.id
                  ? 'bg-lavender-500/20 text-lavender-200 border border-lavender-500/40 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              <span>{inc.platform || `Incident ${index + 1}`}</span>
              {incidents.length > 1 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveIncident(inc.id);
                  }}
                  className="hover:text-rose-400 p-0.5"
                  title="Remove incident"
                >
                  <Trash2 className="w-3 h-3" />
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handleAddIncident}
          className="flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-medium border border-slate-800 transition-colors shrink-0 cursor-pointer ml-2"
        >
          <Plus className="w-3.5 h-3.5 text-teal-400" />
          <span>Add Platform</span>
        </button>
      </div>

      {/* Main Incident Form & Checklist Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Incident Details */}
        <div className="lg:col-span-6 space-y-5">
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="font-display font-bold text-base text-white flex items-center gap-2">
                <span>Incident Metadata</span>
                <span className="text-xs font-mono text-lavender-400">· {activeIncident.platform}</span>
              </h2>
              <p className="text-xs text-slate-400">Record identifiers to submit to platform moderators or cybercrime investigators.</p>
            </div>

            {/* Platform Selection */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Platform / Service Name *
              </label>
              <select
                value={activeIncident.platform}
                onChange={(e) => handleUpdateIncident('platform', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-teal-400"
              >
                {PLATFORM_OPTIONS.map((plat) => (
                  <option key={plat} value={plat}>{plat}</option>
                ))}
              </select>
            </div>

            {/* Perpetrator Username or Handle */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Offender Username, Handle, or Profile URL
              </label>
              <input
                type="text"
                value={activeIncident.profileUrlOrHandle}
                onChange={(e) => handleUpdateIncident('profileUrlOrHandle', e.target.value)}
                placeholder="e.g. @bad_user, https://instagram.com/user, Discord tag#0000"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 font-mono"
              />
            </div>

            {/* Approximate Date & Time */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Approximate Date & Time of Threat or Discovery
              </label>
              <input
                type="text"
                value={activeIncident.approxDateTime}
                onChange={(e) => handleUpdateIncident('approxDateTime', e.target.value)}
                placeholder="e.g. Oct 24, 2026 ~ 8:30 PM EST"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>

            {/* Safe URL Field with Trauma-Informed Warning */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-300">
                  Offending Post or Message URL (If Safe)
                </label>
                <span className="text-[10px] text-amber-400 flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  Do not view images
                </span>
              </div>
              <input
                type="text"
                value={activeIncident.safeUrl}
                onChange={(e) => handleUpdateIncident('safeUrl', e.target.value)}
                placeholder="https://example.com/post/12345 (Paste text only)"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 font-mono"
              />
              <p className="text-[11px] text-slate-400">
                <strong>Safety advice:</strong> Never re-open or view traumatic links unnecessarily. If you have the URL, copy and paste it without clicking.
              </p>
            </div>

            {/* Official Report Reference Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Official Report Reference / Ticket #
              </label>
              <input
                type="text"
                value={activeIncident.reportReferenceNumber}
                onChange={(e) => handleUpdateIncident('reportReferenceNumber', e.target.value)}
                placeholder="e.g. Case #META-982144, Police Incident #2026-441"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 font-mono"
              />
            </div>

            {/* Official Reporting Channel Notes */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Official Reporting Channel Used
              </label>
              <input
                type="text"
                value={activeIncident.officialChannel}
                onChange={(e) => handleUpdateIncident('officialChannel', e.target.value)}
                placeholder="e.g. Snap Safety Portal, NCMEC CyberTipline, StopNCII.org"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>

            {/* Support Options & Personal Notes */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Confidential Support Contacts & Notes
              </label>
              <textarea
                value={activeIncident.supportNotes}
                onChange={(e) => handleUpdateIncident('supportNotes', e.target.value)}
                rows={3}
                placeholder="Note down trusted contacts spoken to, counselor names, or evidence storage password hints."
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Evidence Checklist */}
        <div className="lg:col-span-6 space-y-5">
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="font-display font-bold text-base text-white flex items-center gap-2">
                <span>Critical Evidence Checklist</span>
                <span className="text-xs font-mono text-teal-400">· Step by Step</span>
              </h2>
              <p className="text-xs text-slate-400">
                Check off each item as you secure it. These actions preserve admissible digital proof without compromising your safety.
              </p>
            </div>

            <div className="space-y-3">
              {activeIncident.evidenceItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleToggleChecklistItem(item.id)}
                  className={`p-3.5 rounded-xl border text-xs transition-all cursor-pointer flex items-start gap-3 select-none ${
                    item.completed
                      ? 'border-teal-400/60 bg-teal-950/20 text-slate-200'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => {}} // controlled via parent div onClick
                      className="w-4 h-4 rounded text-teal-500 border-slate-700 focus:ring-teal-400 cursor-pointer"
                    />
                  </div>
                  <span className={`leading-relaxed ${item.completed ? 'text-white' : ''}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Forensic Tip */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-teal-300 font-semibold">
                <HelpCircle className="w-4 h-4 text-teal-400" />
                <span>Forensic Best Practice</span>
              </div>
              <p className="leading-relaxed">
                When capturing screenshots on your computer or phone, do NOT crop out the status bar, browser address bar, or clock. Uncropped screenshots preserve vital metadata (timestamp, device clock, battery indicator) that validates authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Printable Output View (Formatted specifically for Print/PDF) */}
      <div className="hidden print-only p-8 text-black bg-white space-y-6">
        <div className="border-b pb-4">
          <h1 className="text-2xl font-bold">SAFEHAVEN AI — EVIDENCE INCIDENT DOSSIER</h1>
          <p className="text-sm text-gray-600">Confidential Digital Evidence & Incident Preservation Record</p>
          <p className="text-xs text-gray-500">Date Generated: {new Date().toLocaleDateString()} · Generated Locally by SafeHaven Client</p>
        </div>

        {incidents.map((inc, idx) => (
          <div key={inc.id} className="border p-4 rounded space-y-3">
            <h2 className="text-lg font-bold">Incident #{idx + 1}: {inc.platform}</h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div><strong>Platform:</strong> {inc.platform || 'N/A'}</div>
              <div><strong>Offender Handle/URL:</strong> {inc.profileUrlOrHandle || 'N/A'}</div>
              <div><strong>Approx Date/Time:</strong> {inc.approxDateTime || 'N/A'}</div>
              <div><strong>Report Reference #:</strong> {inc.reportReferenceNumber || 'N/A'}</div>
              <div className="col-span-2"><strong>Target / Post URL:</strong> {inc.safeUrl || 'N/A'}</div>
              <div className="col-span-2"><strong>Reporting Channel:</strong> {inc.officialChannel || 'N/A'}</div>
              <div className="col-span-2"><strong>Support Notes:</strong> {inc.supportNotes || 'N/A'}</div>
            </div>

            <div className="pt-2">
              <strong className="text-xs">Preserved Checklist Actions:</strong>
              <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
                {inc.evidenceItems.map(item => (
                  <li key={item.id} className={item.completed ? 'font-semibold' : 'text-gray-400 line-through'}>
                    [{item.completed ? 'COMPLETED' : 'PENDING'}] {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="border-t pt-4 text-xs text-gray-500">
          This dossier was generated for evidentiary reporting and does not contain raw media files. SafeHaven AI maintains zero server-side logs.
        </div>
      </div>

      {/* Confirmation Modal for Reset */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel max-w-md w-full p-6 rounded-2xl border border-rose-500/40 space-y-4">
            <div className="flex items-center gap-3 text-rose-400 font-bold text-base">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>Clear Evidence Guardian Data?</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              This will wipe all platform notes and checklist checkboxes currently loaded in your browser. Because we maintain no server-side records, this cannot be recovered.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleResetAll}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                Yes, Wipe Checklist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
