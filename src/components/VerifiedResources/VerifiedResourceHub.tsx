import React, { useState, useMemo } from 'react';
import { VERIFIED_RESOURCES } from '../../data/resources';
import { ResourceCategory, CountryCode } from '../../types';
import { 
  BookOpen, 
  Search, 
  Filter, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  PhoneCall, 
  AlertCircle,
  HelpCircle,
  Globe2,
  Users
} from 'lucide-react';

export const VerifiedResourceHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedEligibility, setSelectedEligibility] = useState<string>('all');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Resources' },
    { id: 'child_protection', label: 'Child Protection (Youth)' },
    { id: 'emergency', label: '24/7 Crisis Helplines' },
    { id: 'search_removal', label: 'Search & Hash Blocking' },
    { id: 'social_media', label: 'Social Media Takedowns' },
    { id: 'government', label: 'Government & Legal' },
  ];

  const countries: { id: string; label: string }[] = [
    { id: 'all', label: 'All Jurisdictions' },
    { id: 'GLOBAL', label: 'Global / International' },
    { id: 'US', label: 'United States' },
    { id: 'UK', label: 'United Kingdom' },
    { id: 'CA', label: 'Canada' },
    { id: 'AU', label: 'Australia' },
  ];

  const eligibilityOptions: { id: string; label: string }[] = [
    { id: 'all', label: 'All Eligibility' },
    { id: 'minors', label: 'Minors & Youth (Under 18)' },
    { id: 'adults', label: 'Adults (18+)' },
  ];

  const filteredResources = useMemo(() => {
    return VERIFIED_RESOURCES.filter((res) => {
      // Category filter
      if (selectedCategory !== 'all' && res.category !== selectedCategory) {
        return false;
      }

      // Country filter
      if (selectedCountry !== 'all') {
        if (selectedCountry === 'GLOBAL' && res.country !== 'GLOBAL') return false;
        if (selectedCountry !== 'GLOBAL' && res.country !== selectedCountry && res.country !== 'GLOBAL') {
          return false;
        }
      }

      // Eligibility filter
      if (selectedEligibility !== 'all') {
        if (selectedEligibility === 'minors' && res.eligibility === 'adults') return false;
        if (selectedEligibility === 'adults' && res.eligibility === 'minors') return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = res.name.toLowerCase().includes(query);
        const matchDesc = res.description.toLowerCase().includes(query);
        const matchCountry = res.countryLabel.toLowerCase().includes(query);
        const matchCat = res.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCountry && !matchCat) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedCountry, selectedEligibility]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-teal-400" />
          <span>Curated Official Directory</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Verified Resource Hub
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Direct, verified pathways to statutory regulators, official social media reporting portals, emergency crisis helplines, and hash-based removal services. All links point directly to official domains.
        </p>
      </div>

      {/* Safety Notice & Trust Guarantee */}
      <div className="p-4 rounded-xl glass-panel-subtle border border-teal-500/20 text-xs text-slate-300 flex items-start gap-3">
        <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-white">Anti-Predatory Guarantee:</strong>
          <span className="text-slate-400 ml-1">
            SafeHaven AI never lists commercial "reputation cleaner" companies that charge thousands of dollars or make false takedown guarantees. All resources listed below are official non-profits, statutory authorities, or verified platform portals.
          </span>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by agency name, platform (e.g. Instagram, Snapchat, Google), or keywords..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
          {/* Category Tabs */}
          <div className="md:col-span-6 space-y-1.5">
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Category
            </label>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Country / Jurisdiction */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Globe2 className="w-3 h-3 text-teal-400" />
              <span>Jurisdiction</span>
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-teal-400"
            >
              {countries.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Eligibility */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Users className="w-3 h-3 text-lavender-400" />
              <span>Target Eligibility</span>
            </label>
            <select
              value={selectedEligibility}
              onChange={(e) => setSelectedEligibility(e.target.value)}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-teal-400"
            >
              {eligibilityOptions.map((e) => (
                <option key={e.id} value={e.id}>{e.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
          <span>Showing <strong className="text-white">{filteredResources.length}</strong> verified resources</span>
          {(searchQuery || selectedCategory !== 'all' || selectedCountry !== 'all' || selectedEligibility !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedCountry('all');
                setSelectedEligibility('all');
              }}
              className="text-teal-400 hover:text-teal-300 underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Resources Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 text-center space-y-3 border border-slate-800">
          <AlertCircle className="w-8 h-8 text-slate-500 mx-auto" />
          <h3 className="font-display font-bold text-base text-white">No Resources Found</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            We couldn't find any resources matching your exact filter criteria. Try adjusting your search query or selecting "All Jurisdictions".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className={`glass-panel rounded-2xl p-6 border space-y-4 flex flex-col justify-between glass-card-hover ${
                resource.category === 'child_protection'
                  ? 'border-lavender-500/30 bg-lavender-950/10'
                  : resource.category === 'emergency'
                  ? 'border-rose-500/30 bg-rose-950/10'
                  : 'border-teal-500/20'
              }`}
            >
              <div className="space-y-3">
                {/* Header Row: Title & Badges */}
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-display font-bold text-base text-white">
                      {resource.name}
                    </h2>
                    {resource.isCrisis && (
                      <span className="text-[10px] font-mono text-rose-400 shrink-0 font-bold">
                        [CRISIS HELPLINE]
                      </span>
                    )}
                  </div>

                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                    <span className="text-teal-300 font-medium">{resource.countryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{resource.category.replace('_', ' ')}</span>
                    <span aria-hidden="true">·</span>
                    <span className={resource.eligibility === 'minors' ? 'text-lavender-300' : 'text-slate-400'}>
                      {resource.eligibility === 'minors' ? 'Minors (Under 18)' : resource.eligibility === 'adults' ? 'Adults (18+)' : 'All Ages'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[11px] text-slate-500">{resource.verificationDate}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {resource.description}
                </p>

                {/* Crisis Phone / Contact Callout */}
                {resource.contactInfo && (
                  <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/30 text-rose-200 text-xs flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Direct Hotline: <strong className="text-white font-mono">{resource.contactInfo}</strong></span>
                  </div>
                )}

                {/* Key Instructions */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400 block">Key Protocol & Access Notes:</span>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {resource.keyInstructions.map((instruction, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-teal-400 shrink-0">·</span>
                        <span className="leading-snug">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  Verified Official Portal
                </span>

                <a
                  href={resource.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-teal-300 hover:text-white border border-teal-500/40 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer group"
                >
                  <span>Open Official Service</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
