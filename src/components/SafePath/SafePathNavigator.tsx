import React, { useState } from 'react';
import { 
  NavigatorInput, 
  SituationType, 
  ContentType, 
  AgeGroup, 
  CountryCode, 
  ActionPlan 
} from '../../types';
import { generateActionPlan } from '../../data/decisionLogic';
import { 
  Compass, 
  AlertTriangle, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Printer, 
  ExternalLink, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  Info,
  Clock,
  Lock,
  ChevronRight,
  ShieldCheck,
  UserX
} from 'lucide-react';

interface SafePathNavigatorProps {
  onGoToEvidenceGuardian: () => void;
  onGoToResources: () => void;
}

export const SafePathNavigator: React.FC<SafePathNavigatorProps> = ({
  onGoToEvidenceGuardian,
  onGoToResources
}) => {
  // Step index: 0 = Emergency & Safety, 1 = Situation Type, 2 = Content Type, 3 = Age & Location, 4 = Generated Action Plan
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [input, setInput] = useState<NavigatorInput>({
    immediateDanger: false,
    situation: 'threatened',
    contentType: 'real',
    ageGroup: 'adult',
    country: 'US',
    stateOrRegion: ''
  });

  const [actionPlan, setActionPlan] = useState<ActionPlan | null>(null);

  const stepTitles = [
    'Safety Check',
    'Current Situation',
    'Content Classification',
    'Age & Jurisdiction',
    'Personalized Action Plan'
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      // Generate deterministic action plan
      const plan = generateActionPlan(input);
      setActionPlan(plan);
      setCurrentStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    // Allows proceeding with current/default selections
    handleNext();
  };

  const handleReset = () => {
    setInput({
      immediateDanger: false,
      situation: 'threatened',
      contentType: 'real',
      ageGroup: 'adult',
      country: 'US',
      stateOrRegion: ''
    });
    setActionPlan(null);
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title Header */}
      <div className="space-y-2 no-print">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
          <Compass className="w-4 h-4 text-teal-400" />
          <span>Interactive Guidance System</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          SafePath Navigator
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
          Answer a few confidential questions to generate a deterministic, step-by-step safety plan. No personal data is stored or transmitted.
        </p>
      </div>

      {/* Progress Bar (Visible during steps 0-3) */}
      {currentStep < 4 && (
        <div className="space-y-2 no-print">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Step {currentStep + 1} of 4: <strong className="text-white">{stepTitles[currentStep]}</strong></span>
            <span>{Math.round(((currentStep + 1) / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-teal-400 to-lavender-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 0: Safety & Immediate Danger Check                  */}
      {/* ======================================================== */}
      {currentStep === 0 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              <span>Are you in immediate physical danger or severe acute crisis?</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Your physical and emotional safety is paramount. If someone has threatened physical violence, knows your physical location, or if you are feeling overwhelmed to the point of self-harm, we prioritize emergency support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setInput({ ...input, immediateDanger: false })}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                !input.immediateDanger
                  ? 'border-teal-400/80 bg-teal-950/20 shadow-md ring-1 ring-teal-400/40'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-white">No Physical Threat</span>
                {!input.immediateDanger && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                I am not currently in immediate physical danger, but I need guidance to protect my digital privacy and stop content dissemination.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setInput({ ...input, immediateDanger: true })}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                input.immediateDanger
                  ? 'border-rose-400/80 bg-rose-950/30 shadow-md ring-1 ring-rose-400/40'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-rose-300">Yes, Immediate Safety Concern</span>
                {input.immediateDanger && <AlertTriangle className="w-4 h-4 text-rose-400" />}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                There are threats of bodily harm, stalking at my home/school/work, or I am experiencing severe crisis thoughts.
              </p>
            </button>
          </div>

          {input.immediateDanger && (
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-rose-300">
                <AlertTriangle className="w-4 h-4" />
                <span>Immediate Safety Recommendation:</span>
              </div>
              <p>
                Please call emergency services (911 in the US/Canada, 999 in the UK, 000 in Australia) or connect with the 988 Suicide & Crisis Lifeline immediately. Your SafePath plan will prioritize emergency coordination.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 1: Current Situation                                */}
      {/* ======================================================== */}
      {currentStep === 1 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-white">
              What is your current situation?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Different stages require specific tactical responses. Select the option that best describes what is happening:
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                id: 'threatened' as SituationType,
                title: 'Threatened with Sharing (Extortion / Blackmail)',
                desc: 'Someone is demanding money, gift cards, additional photos, or actions in exchange for not sharing intimate media with your friends, family, or employer.',
                recommendedTag: 'Sextortion Response'
              },
              {
                id: 'already_shared' as SituationType,
                title: 'Media Already Shared or Leaked',
                desc: 'Intimate content has already been posted online, sent to someone, uploaded to a forum, social media platform, or adult website.',
                recommendedTag: 'Takedown & Suppression'
              },
              {
                id: 'unsure' as SituationType,
                title: 'Unsure or Suspected Compromise',
                desc: 'You suspect an account was hacked, found suspicious messages, or lost access to a device containing private media, but are unsure if anything was published.',
                recommendedTag: 'Investigation & Account Hardening'
              }
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setInput({ ...input, situation: option.id })}
                className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  input.situation === option.id
                    ? 'border-teal-400/80 bg-teal-950/20 shadow-md ring-1 ring-teal-400/40'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{option.title}</span>
                    <span className="text-[11px] text-teal-400 font-mono">· {option.recommendedTag}</span>
                  </div>
                  {input.situation === option.id && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{option.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 2: Content Classification                           */}
      {/* ======================================================== */}
      {currentStep === 2 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-lavender-400" />
              <span>Is the content authentic or AI-generated/manipulated?</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Synthetic intimate imagery (deepfakes, morphs, face-swaps) has distinct platform reporting categories and specialized legal protections.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                id: 'real' as ContentType,
                title: 'Authentic Photography / Video',
                desc: 'Real photos or videos captured on a camera or phone, originally taken privately or consensually and now distributed without consent.'
              },
              {
                id: 'synthetic' as ContentType,
                title: 'AI-Generated / Deepfake / Manipulated Content',
                desc: 'Photos or videos created or altered using artificial intelligence, face-swapping software, body morphs, or synthetic nudity tools ("nudification").'
              },
              {
                id: 'unsure' as ContentType,
                title: 'Unsure or Mixed',
                desc: 'You are not certain whether the content was generated using AI or comes from a real source, or it combines both.'
              }
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setInput({ ...input, contentType: option.id })}
                className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  input.contentType === option.id
                    ? 'border-teal-400/80 bg-teal-950/20 shadow-md ring-1 ring-teal-400/40'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-white">{option.title}</span>
                  {input.contentType === option.id && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{option.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 3: Age Group & Jurisdiction                         */}
      {/* ======================================================== */}
      {currentStep === 3 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-teal-400" />
              <span>Age Group and Jurisdiction</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              <strong>Mandatory Safety Requirement:</strong> Minors under 18 have dedicated statutory child-protection pathways (e.g. Take It Down, NCMEC) and are strictly separated from adult tools.
            </p>
          </div>

          {/* Age Selection */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Age of the Person Depicted in the Images (at the time of capture)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setInput({ ...input, ageGroup: 'minor' })}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  input.ageGroup === 'minor'
                    ? 'border-lavender-400/80 bg-lavender-950/30 shadow-md ring-1 ring-lavender-400/40'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-lavender-200">Under 18 (Minor / Youth)</span>
                  {input.ageGroup === 'minor' && <CheckCircle2 className="w-4 h-4 text-lavender-400" />}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Activates confidential child-protection protocols, Take It Down by NCMEC, and youth helplines. Adult-only platforms will be omitted.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setInput({ ...input, ageGroup: 'adult' })}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  input.ageGroup === 'adult'
                    ? 'border-teal-400/80 bg-teal-950/20 shadow-md ring-1 ring-teal-400/40'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-teal-200">Adult (18 and Older)</span>
                  {input.ageGroup === 'adult' && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Activates StopNCII.org cryptographic hashing, regulatory reporting, and adult privacy frameworks.
                </p>
              </button>
            </div>
          </div>

          {/* Country Selection */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Country / Jurisdiction
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { code: 'US' as CountryCode, name: 'United States' },
                { code: 'UK' as CountryCode, name: 'United Kingdom' },
                { code: 'CA' as CountryCode, name: 'Canada' },
                { code: 'AU' as CountryCode, name: 'Australia' },
                { code: 'INTERNATIONAL' as CountryCode, name: 'International' },
              ].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setInput({ ...input, country: c.code })}
                  className={`py-2.5 px-3 rounded-lg border text-center text-xs font-medium transition-all cursor-pointer ${
                    input.country === c.code
                      ? 'border-teal-400 bg-teal-950/30 text-teal-200 font-bold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* State / Province (Optional) */}
          <div className="space-y-1.5 pt-2">
            <label className="block text-xs font-semibold text-slate-300">
              State, Province, or Territory (Optional)
            </label>
            <input
              type="text"
              value={input.stateOrRegion}
              onChange={(e) => setInput({ ...input, stateOrRegion: e.target.value })}
              placeholder="e.g. California, Ontario, New South Wales, England"
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons for Wizard Steps (0 to 3) */}
      {currentStep < 4 && (
        <div className="flex items-center justify-between gap-4 pt-2 no-print">
          <div>
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium rounded-lg border border-slate-700 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleSkip}
              className="px-3 py-2 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Skip Step
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-lg shadow-md transition-all cursor-pointer"
            >
              <span>{currentStep === 3 ? 'Generate Action Plan' : 'Next Step'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 4: Generated Action Plan Output                     */}
      {/* ======================================================== */}
      {currentStep === 4 && actionPlan && (
        <div className="space-y-8 animate-fadeIn">
          {/* Action Plan Top Bar Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl glass-panel border border-teal-500/30 no-print">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-sm text-white">Your Tailored SafePath Protocol Is Ready</h3>
                <span className="text-xs text-teal-300">Deterministic safety strategy compiled for your scenario</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save Plan</span>
              </button>
              <button
                onClick={handleReset}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg text-xs font-medium border border-slate-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart</span>
              </button>
            </div>
          </div>

          {/* Safety Alert Banner (if immediateDanger was selected) */}
          {actionPlan.safetyAlert && (
            <div className="p-5 rounded-xl bg-rose-950/40 border border-rose-500/50 text-rose-200 text-xs sm:text-sm space-y-2">
              <div className="font-bold flex items-center gap-2 text-rose-300 text-sm">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>CRITICAL SAFETY ALERT</span>
              </div>
              <p className="leading-relaxed">{actionPlan.safetyAlert}</p>
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href="tel:988"
                  className="px-3 py-1.5 bg-rose-600 text-white font-bold text-xs rounded-lg inline-flex items-center gap-1"
                >
                  Call or Text 988 (Lifeline)
                </a>
                <a
                  href="sms:741741&body=HOME"
                  className="px-3 py-1.5 bg-slate-900 border border-rose-500/40 text-rose-200 text-xs rounded-lg"
                >
                  Text HOME to 741741
                </a>
              </div>
            </div>
          )}

          {/* Summary Box */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[11px] font-mono text-teal-400 tracking-wider uppercase">Executive Guidance</span>
                <h2 className="font-display font-bold text-lg text-white">Recommended Course of Action</h2>
              </div>
              <div className="text-xs text-slate-400">
                Primary Channel: <strong className="text-teal-300 font-medium">{actionPlan.primaryChannel}</strong>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {actionPlan.summary}
            </p>

            {/* Applicable Digital Tools Strip */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">Recommended Official Removal Tools:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {actionPlan.applicableTools.map((tool, idx) => (
                  <a
                    key={idx}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-teal-500/20 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-white font-bold text-xs mb-1">
                        <span className="group-hover:text-teal-300 transition-colors">{tool.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-teal-400" />
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{tool.description}</p>
                    </div>
                    <div className="mt-2 text-[10px] text-teal-400/90 font-mono">
                      Eligibility: {tool.targetAge}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Critical "What NOT to Do" Callout */}
          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm font-display">
              <UserX className="w-4 h-4 text-amber-400" />
              <span>Critical Protocol: What NOT To Do</span>
            </div>
            <ul className="space-y-2 text-xs text-amber-100/90 leading-relaxed">
              {actionPlan.doNotDoList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0 mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Phased Plan */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-400" />
              <span>Phased Action Roadmap</span>
            </h3>

            <div className="space-y-4">
              {actionPlan.steps.map((step, idx) => (
                <div
                  key={step.id}
                  className={`p-5 rounded-2xl glass-panel space-y-3 border transition-all ${
                    step.critical
                      ? 'border-teal-500/40 bg-teal-950/10'
                      : 'border-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[11px] font-mono text-teal-400 font-semibold uppercase">
                      {step.phaseTitle} · Step {idx + 1}
                    </span>
                    {step.resourceBadge && (
                      <span className="text-[10px] text-lavender-300 font-mono">
                        [{step.resourceBadge}]
                      </span>
                    )}
                  </div>

                  <h4 className="font-display font-bold text-sm sm:text-base text-white">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  {step.safetyTip && (
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{step.safetyTip}</span>
                    </div>
                  )}

                  {step.actionUrl && (
                    <div className="pt-1">
                      <a
                        href={step.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/30 rounded-lg text-xs font-semibold transition-colors"
                      >
                        <span>{step.actionUrlLabel || 'Open Official Resource'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legal Framework Context */}
          <div className="p-5 rounded-xl glass-panel-subtle border border-slate-800 text-xs space-y-2 text-slate-400">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Legal & Statutory Context:</span>
            <p className="leading-relaxed text-slate-300">{actionPlan.legalContext}</p>
            <p className="text-[11px] text-slate-400 italic">
              Note: This is an informational overview of statutory frameworks and does not constitute formal legal counsel. For formal court orders or subpoena assistance, connect with our verified legal resources.
            </p>
          </div>

          {/* Cross-Link Actions */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 no-print">
            <button
              onClick={onGoToEvidenceGuardian}
              className="p-4 rounded-xl glass-panel border border-lavender-500/30 hover:border-lavender-500/60 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between text-white font-bold text-sm mb-1">
                <span className="group-hover:text-lavender-300">Open Evidence Guardian Checklist</span>
                <ChevronRight className="w-4 h-4 text-lavender-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-xs text-slate-400">
                Record handles, screenshot timestamps, and platform reference tickets before blocking.
              </p>
            </button>

            <button
              onClick={onGoToResources}
              className="p-4 rounded-xl glass-panel border border-teal-500/30 hover:border-teal-500/60 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between text-white font-bold text-sm mb-1">
                <span className="group-hover:text-teal-300">Browse Verified Resource Directory</span>
                <ChevronRight className="w-4 h-4 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-xs text-slate-400">
                Direct access to NCMEC, eSafety, Google Removal, and crisis hotlines worldwide.
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
