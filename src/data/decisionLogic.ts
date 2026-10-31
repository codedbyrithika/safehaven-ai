import { ActionPlan, ActionPlanStep, NavigatorInput } from '../types';

export function generateActionPlan(input: NavigatorInput): ActionPlan {
  const isMinor = input.ageGroup === 'minor';
  const isSynthetic = input.contentType === 'synthetic';
  const isThreatened = input.situation === 'threatened';
  const isAlreadyShared = input.situation === 'already_shared';
  
  const steps: ActionPlanStep[] = [];
  const doNotDoList: string[] = [];
  const applicableTools: ActionPlan['applicableTools'] = [];

  // ==========================================
  // 1. Critical "What NOT to do" Rules
  // ==========================================
  if (isThreatened) {
    doNotDoList.push('Do NOT send money or purchase gift cards. Blackmailers rarely delete material after payment; paying confirms your vulnerability and almost always triggers escalating demands.');
    doNotDoList.push('Do NOT delete messages or block the perpetrator before documenting screenshots of the chat, their username, and payment handles.');
    doNotDoList.push('Do NOT send additional photos or negotiate alone. Extortionists rely on panic to isolate you.');
  } else {
    doNotDoList.push('Do NOT pay any commercial "guaranteed content removal" websites that ask for thousands of dollars upfront. Many are predatory and illegitimate.');
    doNotDoList.push('Do NOT share, re-post, or upload the intimate images to any third-party websites or forums to "prove" they are yours.');
  }

  doNotDoList.push('Do NOT blame yourself. Non-consensual distribution and extortion are unlawful violations committed by the perpetrator, not your fault.');

  // ==========================================
  // 2. Applicable Digital Removal Tools (Strict Age Gating)
  // ==========================================
  if (isMinor) {
    // MINORS ONLY: Take It Down (NCMEC)
    applicableTools.push({
      name: 'Take It Down (NCMEC)',
      url: 'https://takeitdown.ncmec.org',
      description: 'Free, confidential hash creation on your device for anyone under 18. Images never leave your device.',
      targetAge: 'Minors & Youth (Taken under 18)'
    });
    applicableTools.push({
      name: 'NCMEC CyberTipline',
      url: 'https://report.cybertip.org',
      description: 'Official US & international clearinghouse for youth sextortion and unauthorized distribution.',
      targetAge: 'Under 18 (Confidential & Anonymous)'
    });
    if (input.country === 'UK') {
      applicableTools.push({
        name: 'Childline "Report Remove" (IWF)',
        url: 'https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/remove-nude-image-shared-online/',
        description: 'Direct UK youth takedown service powered by the Internet Watch Foundation.',
        targetAge: 'Under 19'
      });
    } else if (input.country === 'CA') {
      applicableTools.push({
        name: 'NeedHelpNow.ca (Cybertip Canada)',
        url: 'https://needhelpnow.ca',
        description: 'Specialized youth navigator for non-consensual image incidents in Canada.',
        targetAge: 'Under 18'
      });
    }
  } else {
    // ADULTS ONLY: StopNCII.org (Do NOT show to minors)
    applicableTools.push({
      name: 'StopNCII.org',
      url: 'https://stopncii.org',
      description: 'Privacy-first cryptographic hash generator for adults 18+. Images never leave your device.',
      targetAge: 'Adults (18+)'
    });
  }

  // Common Search removal tools for all
  applicableTools.push({
    name: 'Google Non-Consensual Imagery Removal',
    url: 'https://support.google.com/websearch/troubleshooter/3111061',
    description: 'De-index explicit images, deepfakes, or personal photos from Google Search results.',
    targetAge: 'All Ages'
  });

  applicableTools.push({
    name: 'Microsoft Bing Content Removal',
    url: 'https://www.microsoft.com/en-us/concern/contentremoval',
    description: 'De-index intimate content and deepfake links from Bing search results.',
    targetAge: 'All Ages'
  });

  // ==========================================
  // 3. Phased Deterministic Steps
  // ==========================================

  // --- PHASE 1: Immediate Safety & Evidence ---
  if (input.immediateDanger) {
    steps.push({
      id: 'step-emergency-immediate',
      phase: 'immediate',
      phaseTitle: 'Phase 1: Immediate Emergency Safety',
      title: 'Prioritize Your Immediate Physical and Mental Safety',
      description: 'Because you indicated immediate danger or severe crisis, please reach out to emergency or crisis responders right now. Physical safety always comes before digital remediation.',
      critical: true,
      actionUrl: input.country === 'UK' ? 'tel:999' : input.country === 'AU' ? 'tel:000' : 'tel:911',
      actionUrlLabel: input.country === 'UK' ? 'Call Emergency (999)' : input.country === 'AU' ? 'Call Emergency (000)' : 'Call Emergency (911)',
      safetyTip: 'If you are experiencing suicidal thoughts or panic, dial 988 in the US/Canada or 111 in the UK, or text HOME to 741741 for immediate, free confidential support.'
    });
  }

  if (isMinor) {
    steps.push({
      id: 'step-minor-trusted-adult',
      phase: 'immediate',
      phaseTitle: 'Phase 1: Immediate Support & Child Protection',
      title: 'Connect With a Safe, Trusted Adult or Confidential Counselor',
      description: 'You are protected under child exploitation and privacy laws. What happened is NOT your fault, and perpetrators use intimidation to keep you quiet. Talk to a parent, older sibling, school counselor, or contact Childline / Crisis Text Line.',
      critical: true,
      actionUrl: input.country === 'UK' ? 'https://www.childline.org.uk' : input.country === 'CA' ? 'https://kidshelpphone.ca' : 'https://www.crisistextline.org',
      actionUrlLabel: input.country === 'UK' ? 'Childline UK (Free 24/7)' : input.country === 'CA' ? 'Kids Help Phone Canada' : 'Crisis Text Line (Text HOME to 741741)',
      safetyTip: 'You do not have to handle extortion alone. Law enforcement and counselors treat minors as victims, never criminals.'
    });
  }

  steps.push({
    id: 'step-preserve-evidence',
    phase: 'immediate',
    phaseTitle: 'Phase 1: Preserve Essential Evidence',
    title: 'Document and Secure Evidence Before Blocking',
    description: 'Open the Evidence Guardian tool in SafeHaven AI. Take uncropped screenshots that clearly show: the perpetrator’s username/handle, full URL, timestamps, the specific threat or demands, and payment accounts (PayPal, CashApp, crypto addresses).',
    critical: true,
    safetyTip: 'Do not click on suspicious links sent by extortionists. Store screenshots in an offline password-protected folder.'
  });

  if (isThreatened) {
    steps.push({
      id: 'step-cease-engagement',
      phase: 'immediate',
      phaseTitle: 'Phase 1: Extortion Containment',
      title: 'Cease All Communication and Refuse Payment',
      description: 'Do not respond further to threats or provide any confirmation of panic. Extortionists often move on once they realize they will not receive money and that the victim cannot be blackmailed into compliance.',
      critical: true,
      safetyTip: 'Cut off contact only AFTER screenshots and handles are safely saved in your Evidence Guardian checklist.'
    });
  }

  // --- PHASE 2: 24-Hour Containment & Digital Hashing ---
  if (isMinor) {
    steps.push({
      id: 'step-hash-takeitdown',
      phase: '24hours',
      phaseTitle: 'Phase 2: Proactive Hash Blocking (Next 24 Hours)',
      title: 'Submit Hashes via Take It Down (NCMEC)',
      description: 'Use the official Take It Down platform. It converts your images into a digital fingerprint (hash) directly on your device. The image is never uploaded to NCMEC or the public. Participating tech platforms (Instagram, Snap, TikTok, OnlyFans, X) check this hash and prevent uploads.',
      critical: true,
      actionUrl: 'https://takeitdown.ncmec.org',
      actionUrlLabel: 'Open Take It Down by NCMEC',
      resourceBadge: 'Minor Protection'
    });
  } else {
    steps.push({
      id: 'step-hash-stopncii',
      phase: '24hours',
      phaseTitle: 'Phase 2: Proactive Hash Blocking (Next 24 Hours)',
      title: 'Create Digital Fingerprints via StopNCII.org',
      description: 'Generate cryptographic hashes directly in your browser using StopNCII.org. Your actual images NEVER leave your device. The generated hash codes are securely shared with partner platforms (Meta, Snap, Reddit, TikTok, OnlyFans) to block existing or future uploads.',
      critical: true,
      actionUrl: 'https://stopncii.org',
      actionUrlLabel: 'Open StopNCII.org',
      resourceBadge: 'Adult Hash Shield'
    });
  }

  // Synthetic / Deepfake specific steps
  if (isSynthetic) {
    steps.push({
      id: 'step-synthetic-deepfake-report',
      phase: '24hours',
      phaseTitle: 'Phase 2: Synthetic / AI Deepfake Remediation',
      title: 'Report Content Specifically Under Synthetic Media & Impersonation Policies',
      description: 'Major platforms have distinct reporting rules specifically prohibiting non-consensual deepfakes and AI synthetic nudity. When submitting reports, select "Manipulated Media", "Synthetic Intimate Content", or "Deceptive Impersonation".',
      critical: true,
      actionUrl: 'https://support.google.com/websearch/troubleshooter/3111061',
      actionUrlLabel: 'Google Deepfake Removal Request',
      resourceBadge: 'AI / Synthetic Policy'
    });
  }

  steps.push({
    id: 'step-platform-reporting',
    phase: '24hours',
    phaseTitle: 'Phase 2: Official Platform Escalation',
    title: 'Submit Formal In-App & Web Abuse Reports',
    description: 'Use our Verified Resource Hub to find the exact official intimate media reporting form for the platform where content or threats appeared (Meta/Instagram, Snapchat, Discord, Telegram, X, Reddit). Submit your report and retain your confirmation reference numbers.',
    critical: false,
    safetyTip: 'Never use third-party "hackers" or Instagram recovery services claiming they can delete content for a fee; these are almost always secondary scams.'
  });

  // --- PHASE 3: Next Steps & De-Indexing ---
  steps.push({
    id: 'step-search-deindex',
    phase: 'next_steps',
    phaseTitle: 'Phase 3: Search Engine De-Indexing & Suppression',
    title: 'Submit De-Indexing Requests to Google and Bing',
    description: 'If imagery or links were indexed publicly, submit removal requests through Google Search and Microsoft Bing. This ensures that searching your name or handles will not yield intimate search results or preview thumbnails.',
    critical: false,
    actionUrl: 'https://support.google.com/websearch/troubleshooter/3111061',
    actionUrlLabel: 'Google Search Removal Tool'
  });

  // Regulatory / Legal body by country
  let legalAuthorityStep: ActionPlanStep;
  if (input.country === 'AU') {
    legalAuthorityStep = {
      id: 'step-legal-esafety-au',
      phase: 'next_steps',
      phaseTitle: 'Phase 3: Statutory Authority Escalation',
      title: 'Lodge a Complaint With the eSafety Commissioner',
      description: 'The Australian eSafety Commissioner has legal power under the Online Safety Act to issue legally binding 24-hour takedown notices to platforms and search engines, with civil penalties for non-compliance.',
      critical: true,
      actionUrl: 'https://www.esafety.gov.au/report',
      actionUrlLabel: 'Lodge Report at eSafety.gov.au',
      resourceBadge: 'Australian Legal Authority'
    };
  } else if (input.country === 'UK') {
    legalAuthorityStep = {
      id: 'step-legal-helpline-uk',
      phase: 'next_steps',
      phaseTitle: 'Phase 3: Statutory Authority Escalation',
      title: isMinor ? 'Report to CEOP & IWF' : 'Contact the Revenge Porn Helpline (UK)',
      description: isMinor
        ? 'Report the incident to the Child Exploitation and Online Protection Command (CEOP) and Internet Watch Foundation for rapid enforcement.'
        : 'The Revenge Porn Helpline has dedicated direct takedown channels with major platforms and 90%+ resolution rates under the UK Online Safety Act.',
      critical: true,
      actionUrl: isMinor ? 'https://www.ceop.police.uk' : 'https://revengepornhelpline.org.uk',
      actionUrlLabel: isMinor ? 'CEOP Police Report' : 'Revenge Porn Helpline UK',
      resourceBadge: 'UK Enforcement'
    };
  } else if (input.country === 'CA') {
    legalAuthorityStep = {
      id: 'step-legal-canada',
      phase: 'next_steps',
      phaseTitle: 'Phase 3: Canadian Support & Legal Remedies',
      title: isMinor ? 'Report to Cybertip.ca' : 'Contact Local Police & Provincial Privacy Commissioner',
      description: 'Non-consensual sharing of intimate images is a criminal offense under Section 162.1 of the Canadian Criminal Code. Cybertip.ca coordinates national remediation for youth.',
      critical: false,
      actionUrl: 'https://www.cybertip.ca',
      actionUrlLabel: 'Cybertip.ca Reporting'
    };
  } else {
    // US or International
    legalAuthorityStep = {
      id: 'step-legal-fbi-ic3',
      phase: 'next_steps',
      phaseTitle: 'Phase 3: Legal & Law Enforcement Coordination',
      title: isMinor ? 'File Report with NCMEC CyberTipline' : 'File an IC3 Cybercrime Report & Local Police Record',
      description: isMinor
        ? 'NCMEC is designated by US Congress as the official national reporting mechanism for exploitation involving youth under 18.'
        : 'File a complaint with the FBI Internet Crime Complaint Center (IC3.gov) and file an informational police report with your local jurisdiction.',
      critical: false,
      actionUrl: isMinor ? 'https://report.cybertip.org' : 'https://www.ic3.gov',
      actionUrlLabel: isMinor ? 'NCMEC CyberTipline' : 'FBI IC3 Report Portal',
      resourceBadge: 'Official Legal Channel'
    };
  }
  steps.push(legalAuthorityStep);

  // --- PHASE 4: Ongoing Recovery & Account Hardening ---
  steps.push({
    id: 'step-harden-security',
    phase: 'support',
    phaseTitle: 'Phase 4: Security Hardening & Emotional Recovery',
    title: 'Harden Social Media & Email Account Security',
    description: 'Change passwords on primary email and social accounts. Turn on Two-Factor Authentication (prefer authenticator apps like Google Authenticator or hardware keys over SMS). Review active logged-in sessions and revoke unrecognized devices.',
    critical: false,
    safetyTip: 'Check account privacy settings to ensure your phone number, email, and friend lists are not visible to the public or strangers.'
  });

  steps.push({
    id: 'step-emotional-care',
    phase: 'support',
    phaseTitle: 'Phase 4: Trauma-Informed Emotional Care',
    title: 'Prioritize Self-Compassion and Emotional Grounding',
    description: 'Intimate image violation and extortion often cause acute anxiety, shame, and feelings of betrayal. Remember that you did nothing wrong. Reach out to a trauma-informed therapist, confidential crisis line, or supportive community.',
    critical: false,
    actionUrl: 'https://www.crisistextline.org',
    actionUrlLabel: 'Crisis Text Line (Free 24/7)'
  });

  // Summary and legal context
  const summary = isMinor
    ? 'Tailored Child-Protection Pathway: Your plan prioritizes youth safety protections, hash blocking via Take It Down, direct tipline reporting, and emotional care. Adult-only tools are strictly omitted.'
    : `Tailored Support Pathway: Your plan combines proactive hashing via StopNCII.org, platform-specific takedowns, search engine de-indexing, and ${input.country} legal resources.`;

  const primaryChannel = isMinor 
    ? 'Take It Down (NCMEC) + Confidential Child Helplines'
    : 'StopNCII.org + Platform Direct Takedown Forms';

  const legalContext = isMinor
    ? 'Under federal and international law, non-consensual creation or distribution of explicit material involving minors is classified as Child Sexual Abuse Material (CSAM/CSAE) and carries strict criminal penalties regardless of intent. You are the victim protected under these statutes.'
    : isSynthetic
    ? 'Synthetic explicit imagery (AI deepfakes) without consent violates terms of service across major tech platforms and is explicitly addressed by civil and criminal legislation in Australia, the UK, and over 15 US states.'
    : 'Non-consensual distribution of intimate images is a criminal or civil violation in over 48 US states, the United Kingdom, Australia, Canada, and many other jurisdictions.';

  return {
    safetyAlert: input.immediateDanger ? 'Immediate Danger Detected: Please call emergency services (911/999/000) or text 741741 before proceeding with digital takedown steps.' : undefined,
    summary,
    primaryChannel,
    steps,
    applicableTools,
    legalContext,
    doNotDoList
  };
}
