import { VerifiedResource } from '../types';

export const VERIFIED_RESOURCES: VerifiedResource[] = [
  // Child Protection Resources (Under 18)
  {
    id: 'take-it-down',
    name: 'Take It Down (NCMEC)',
    category: 'child_protection',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'minors',
    description: 'A free, confidential tool operated by the National Center for Missing & Exploited Children (NCMEC) to help remove explicit images/videos taken before age 18. Assigns a unique digital hash directly from your device without uploading your images.',
    officialUrl: 'https://takeitdown.ncmec.org',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Images never leave your phone or computer; only a cryptographic hash is created',
      'Works for photos or videos of anyone taken while they were under 18',
      'Participating platforms search for and remove matching hashes across their servers',
      'Supported by major platforms including Meta, Snap, OnlyFans, and TikTok'
    ]
  },
  {
    id: 'ncmec-cybertipline',
    name: 'NCMEC CyberTipline',
    category: 'child_protection',
    country: 'US',
    countryLabel: 'United States & Global',
    eligibility: 'minors',
    description: 'The primary US national reporting clearinghouse for reports of child sexual abuse material, online enticement, and sexual extortion targeting minors. Coordinates with law enforcement worldwide.',
    officialUrl: 'https://report.cybertip.org',
    verificationDate: 'Verified March 2026',
    contactInfo: '1-800-843-5678 (24/7 Hotline)',
    isCrisis: true,
    keyInstructions: [
      'Report any sextortion or non-consensual sharing involving anyone under 18',
      'Reports can be submitted completely anonymously',
      'NCMEC coordinates with domestic law enforcement and INTERPOL',
      'Do not delete threat messages before noting down the details'
    ]
  },
  {
    id: 'iwf-reporting',
    name: 'Internet Watch Foundation (IWF)',
    category: 'child_protection',
    country: 'GLOBAL',
    countryLabel: 'United Kingdom & International',
    eligibility: 'minors',
    description: 'Global charity that works internationally to find and remove non-consensual explicit images of children and minors online. Offers confidential reporting and automated takedown notices.',
    officialUrl: 'https://report.iwf.org.uk',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Confidential and anonymous reporting for youth under 18',
      'Issues takedown orders to global hosting providers and search engines',
      'Partners with UK police, CEOP, and international hotlines in INHOPE'
    ]
  },
  {
    id: 'childline-uk',
    name: 'Childline UK',
    category: 'child_protection',
    country: 'UK',
    countryLabel: 'United Kingdom',
    eligibility: 'minors',
    description: 'Free, confidential support service for anyone under 19 in the UK. Provides 1-on-1 counseling, support through sextortion, and help using the Report Remove tool to pull images off the internet.',
    officialUrl: 'https://www.childline.org.uk',
    contactInfo: '0800 1111 (Free 24/7)',
    verificationDate: 'Verified March 2026',
    isCrisis: true,
    keyInstructions: [
      'Speak to a trained counselor anytime day or night',
      'Access "Report Remove" tool operated with IWF to stop image circulation',
      'Calls do not show up on your phone bill'
    ]
  },
  {
    id: 'cybertip-ca',
    name: 'Cybertip.ca (Canadian Centre for Child Protection)',
    category: 'child_protection',
    country: 'CA',
    countryLabel: 'Canada',
    eligibility: 'minors',
    description: "Canada's national tipline for reporting the online sexual abuse and exploitation of children, including online sextortion and youth non-consensual sharing.",
    officialUrl: 'https://www.cybertip.ca',
    contactInfo: '1-800-532-9135',
    verificationDate: 'Verified March 2026',
    isCrisis: true,
    keyInstructions: [
      'Report online exploitation and non-consensual distribution involving minors',
      'Offers NeedHelpNow.ca dedicated guides for Canadian youth and parents',
      'Works with law enforcement across Canadian provinces'
    ]
  },
  {
    id: 'kids-helphone-ca',
    name: 'Kids Help Phone Canada',
    category: 'emergency',
    country: 'CA',
    countryLabel: 'Canada',
    eligibility: 'minors',
    description: 'Canada’s only 24/7, national, bilingual e-mental health service offering free, confidential support to young people.',
    officialUrl: 'https://kidshelpphone.ca',
    contactInfo: 'Text 686868 or Call 1-800-668-6868',
    verificationDate: 'Verified March 2026',
    isCrisis: true,
    keyInstructions: [
      'Free 24/7 crisis response via text or phone',
      'Available in English and French',
      'Completely confidential and non-judgmental'
    ]
  },

  // Emergency / Crisis Helplines
  {
    id: 'us-crisis-text-line',
    name: 'Crisis Text Line',
    category: 'emergency',
    country: 'US',
    countryLabel: 'United States (also UK & Canada)',
    eligibility: 'all',
    description: 'Free, 24/7, confidential text message support for anyone in crisis or experiencing emotional distress from extortion, stalking, or privacy breaches.',
    officialUrl: 'https://www.crisistextline.org',
    contactInfo: 'Text HOME to 741741',
    verificationDate: 'Verified March 2026',
    isCrisis: true,
    keyInstructions: [
      'Text HOME to 741741 to connect with a crisis counselor within minutes',
      'Confidential and secure text conversation',
      'No fees or charges on major mobile carriers'
    ]
  },
  {
    id: 'us-988-lifeline',
    name: '988 Suicide & Crisis Lifeline',
    category: 'emergency',
    country: 'US',
    countryLabel: 'United States',
    eligibility: 'all',
    description: 'The US 988 Suicide & Crisis Lifeline provides 24/7, free and confidential support for people in suicidal crisis or emotional trauma.',
    officialUrl: 'https://988lifeline.org',
    contactInfo: 'Call or Text 988',
    verificationDate: 'Verified March 2026',
    isCrisis: true,
    keyInstructions: [
      'Call or text 988 from anywhere in the United States',
      'Services available in English and Spanish, plus 240+ languages via translation',
      'Immediate de-escalation and trauma support'
    ]
  },
  {
    id: 'trevor-project',
    name: 'The Trevor Project',
    category: 'emergency',
    country: 'US',
    countryLabel: 'United States & Global',
    eligibility: 'all',
    description: 'Leading suicide prevention and crisis intervention organization for LGBTQ young people who may be targeted by targeted outing, doxxing, or intimate image extortion.',
    officialUrl: 'https://www.thetrevorproject.org',
    contactInfo: '1-866-488-7386 or Text START to 678-678',
    verificationDate: 'Verified March 2026',
    isCrisis: true,
    keyInstructions: [
      '100% confidential and free 24/7 phone, text, and chat',
      'Specialized counselors trained in LGBTQ+ specific safety and threat models'
    ]
  },
  {
    id: 'au-lifeline',
    name: 'Lifeline Australia',
    category: 'emergency',
    country: 'AU',
    countryLabel: 'Australia',
    eligibility: 'all',
    description: 'National charity providing all Australians experiencing emotional distress with access to 24-hour crisis support and suicide prevention services.',
    officialUrl: 'https://www.lifeline.org.au',
    contactInfo: '13 11 14 (Call 24/7) or Text 0477 13 11 14',
    verificationDate: 'Verified March 2026',
    isCrisis: true,
    keyInstructions: [
      'Call 13 11 14 anytime for immediate crisis counseling',
      'Confidential crisis support over telephone or SMS'
    ]
  },

  // Adult Hash-Based Removal & Proactive Blocking
  {
    id: 'stop-ncii',
    name: 'StopNCII.org (SWGfL)',
    category: 'search_removal',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'adults',
    description: 'Free, privacy-preserving platform that creates digital hashes of intimate images directly on your device. Never uploads or stores your photos. Used by Facebook, Instagram, OnlyFans, TikTok, Reddit, and Threads to stop non-consensual sharing before or after it happens.',
    officialUrl: 'https://stopncii.org',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Operated by the Revenge Porn Helpline and SWGfL',
      'For individuals aged 18 and older',
      'Only the mathematical hash (fingerprint) is generated on your browser; images never leave your device',
      'Participating technology companies use hashes to detect and block matching uploads'
    ]
  },

  // Government Regulatory & Legal Resources
  {
    id: 'esafety-commissioner',
    name: 'eSafety Commissioner (Australia)',
    category: 'government',
    country: 'AU',
    countryLabel: 'Australia',
    eligibility: 'all',
    description: "Australia's independent national regulator for online safety. Legally empowered under the Online Safety Act to order online platforms to remove non-consensual intimate images, cyberbullying, and illegal content within 24 hours.",
    officialUrl: 'https://www.esafety.gov.au/report',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Can legally issue formal takedown notices with civil penalties for non-compliance',
      'Handles adult image-based abuse, youth cyberbullying, and synthetic deepfakes',
      'Free, secure, and government-backed assistance'
    ]
  },
  {
    id: 'revenge-porn-helpline-uk',
    name: 'Revenge Porn Helpline (UK)',
    category: 'government',
    country: 'UK',
    countryLabel: 'United Kingdom',
    eligibility: 'adults',
    description: 'UK National helpline supporting adult victims of non-consensual intimate image abuse. Provides emotional, legal, and technical support, with an over 90% success rate in getting intimate content removed.',
    officialUrl: 'https://revengepornhelpline.org.uk',
    contactInfo: '0345 6000 459',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Free, non-judgmental, and trauma-informed guidance for adults in the UK',
      'Direct escalation relationships with major tech platforms',
      'Assistance with StopNCII case generation and evidence preservation'
    ]
  },
  {
    id: 'ftc-consumer-alert',
    name: 'Federal Trade Commission (FTC)',
    category: 'government',
    country: 'US',
    countryLabel: 'United States',
    eligibility: 'all',
    description: 'The US federal consumer protection agency that investigates sextortion scams, romance extortion, and corporate deceptive practices around personal privacy.',
    officialUrl: 'https://reportfraud.ftc.gov',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'File fraud and extortion alerts regarding financial blackmail',
      'Resources on spotting international scam syndicates',
      'Official guidelines for identity safety and credit freezes'
    ]
  },
  {
    id: 'fbi-ic3',
    name: 'FBI Internet Crime Complaint Center (IC3)',
    category: 'government',
    country: 'US',
    countryLabel: 'United States',
    eligibility: 'all',
    description: 'The central hub for reporting cyber crime to the Federal Bureau of Investigation, specifically financial sextortion, wire fraud, and interstate harassment.',
    officialUrl: 'https://www.ic3.gov',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Formal federal cybercrime complaint documentation',
      'Crucial for documenting wire fraud, Bitcoin demands, and cross-border extortion rings',
      'Keeps permanent case records for local law enforcement coordination'
    ]
  },

  // Search Engine Removal Portals
  {
    id: 'google-remove-ncii',
    name: 'Google: Remove Explicit Intimate Images From Search',
    category: 'search_removal',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Official Google Search policy tool to de-index non-consensual explicit images, revenge pornography, and fake/manipulated deepfake porn from appearing in Google Search results.',
    officialUrl: 'https://support.google.com/websearch/troubleshooter/3111061',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Submitting removes the specific URLs and images from search results worldwide',
      'Includes automated protections: Google will attempt to de-index duplicate/mirror copies found later',
      'Requires submitting the exact hosting webpage URLs where images are published'
    ]
  },
  {
    id: 'bing-remove-ncii',
    name: 'Microsoft / Bing: Report Non-Consensual Imagery',
    category: 'search_removal',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Official form to request the removal of non-consensual intimate imagery and manipulated explicit content from Bing search results and Microsoft hosted platforms.',
    officialUrl: 'https://www.microsoft.com/en-us/concern/contentremoval',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'De-indexes pages and media previews across Microsoft Bing and MSN properties',
      'Provides tracking receipt number for your ticket'
    ]
  },

  // Social Media Direct Removal Portals
  {
    id: 'meta-reporting',
    name: 'Meta (Instagram & Facebook) Takedown Request',
    category: 'social_media',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Official dedicated reporting flow for non-consensual intimate imagery, threats to share private photos, or harassment on Instagram and Facebook.',
    officialUrl: 'https://www.facebook.com/help/contact/567360146613371',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Report both active posts/stories and extortion threats received via Direct Messages',
      'Use the in-app reporting menu: "Report" -> "Nudity or sexual activity" -> "Sharing private images"',
      'Meta participates in StopNCII.org and Take It Down hashing networks'
    ]
  },
  {
    id: 'snapchat-safety',
    name: 'Snapchat Safety & Support Portal',
    category: 'social_media',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Dedicated Snapchat reporting team for sextortion, threats to share snaps, and non-consensual nudity on Snapchat accounts.',
    officialUrl: 'https://help.snapchat.com/hc/en-us/requests/new?ticket_form_id=360000002843',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Press and hold on the snap or chat message to report directly in-app',
      'Use web portal if the harasser deleted their account or blocked you',
      'Snapchat works directly with NCMEC and Take It Down'
    ]
  },
  {
    id: 'tiktok-privacy-report',
    name: 'TikTok Intimate Privacy Violation Reporting',
    category: 'social_media',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Direct reporting pathway to remove non-consensual intimate media, deepfake impersonations, or extortion threats hosted on TikTok.',
    officialUrl: 'https://www.tiktok.com/legal/report/feedback',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Select "Report a safety concern" -> "Non-consensual sexual content"',
      'Provide exact profile link (@handle) and video URLs',
      'TikTok removes videos and bans accounts violating intimate privacy policies'
    ]
  },
  {
    id: 'x-twitter-private-media',
    name: 'X (formerly Twitter) Non-Consensual Nudity Report',
    category: 'social_media',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Official direct violation portal for reporting unauthorized distribution of private sexual images or synthetic intimate media on X.',
    officialUrl: 'https://help.twitter.com/en/forms/safety-and-sensitive-content/private-information',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Select "Someone is sharing private intimate photos or videos without my consent"',
      'Zero tolerance policy: offending accounts face permanent suspension upon confirmation',
      'Can be submitted by the victim or an authorized representative'
    ]
  },
  {
    id: 'discord-trust-safety',
    name: 'Discord Trust & Safety Portal',
    category: 'social_media',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Official reporting channel for extortion, server distribution, and unauthorized sharing of intimate imagery across Discord servers and direct messages.',
    officialUrl: 'https://dis.gd/request',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Submit under "Trust & Safety" -> "Report harassment or privacy violation"',
      'Include Discord Message IDs (Enable Developer Mode in Discord settings to right-click and Copy ID)',
      'Discord cooperates with NCMEC for any child sexual abuse reports'
    ]
  },
  {
    id: 'reddit-intimate-report',
    name: 'Reddit Non-Consensual Intimate Media Reporting',
    category: 'social_media',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Direct administrative form for the removal of non-consensual sexual media and deepfakes across all subreddits and Reddit chat.',
    officialUrl: 'https://www.reddit.com/report?reason=it-is-non-consensual-intimate-media',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Requires the direct post or comment permalink on Reddit',
      'Content is investigated and removed at the site administrator level (overrides subreddit moderators)',
      'Submissions result in hash blocking to prevent reposts'
    ]
  },
  {
    id: 'telegram-abuse',
    name: 'Telegram Abusive Content Reporting',
    category: 'social_media',
    country: 'GLOBAL',
    countryLabel: 'Global / International',
    eligibility: 'all',
    description: 'Official channels for requesting the removal of unauthorized intimate media circulated in public or private Telegram channels and groups.',
    officialUrl: 'https://telegram.org/faq#q-there-is-illegal-content-on-telegram-how-do-i-take-it-down',
    contactInfo: 'abuse@telegram.org or stopca@telegram.org (for youth)',
    verificationDate: 'Verified March 2026',
    isCrisis: false,
    keyInstructions: [
      'Send direct links to the Telegram post (t.me/... format) to abuse@telegram.org',
      'For content involving anyone under 18, email stopca@telegram.org immediately',
      'Use in-app report on the specific message: Select "Report" -> "Illegal Personal Details"'
    ]
  }
];
