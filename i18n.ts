
import { Locale } from './types';

// Helper for Mock Data Images to avoid repetition
const IMAGES = {
  events: [
    'https://picsum.photos/seed/event1/800/400',
    'https://picsum.photos/seed/event2/800/400',
    'https://picsum.photos/seed/event3/800/400',
    'https://picsum.photos/seed/event4/800/400',
    'https://picsum.photos/seed/event5/800/400',
    'https://picsum.photos/seed/event6/800/400',
  ],
  support: [
    'https://picsum.photos/seed/support0/1000/600',
    'https://picsum.photos/seed/support1/1000/600',
    'https://picsum.photos/seed/support2/1000/600',
  ],
  partners: [
    'https://picsum.photos/seed/legal/100',
    'https://picsum.photos/seed/travel/100',
    'https://picsum.photos/seed/vfx/100',
    'https://picsum.photos/seed/gear/100',
    'https://picsum.photos/seed/ins/100',
    'https://picsum.photos/seed/dining/100',
    'https://picsum.photos/seed/retail/100',
    'https://picsum.photos/seed/sound/100',
    'https://picsum.photos/seed/fashion/100',
    'https://picsum.photos/seed/shipping/100',
  ]
};

const EN_JSON: any = {
  meta: { siteName: "Global Film Alliance (GFA)", tagline: "Industry Support, Standards & Professional Network" },
  nav: {
    home: "Home", certification: "Certification", childSafety: "Youth Safeguarding", graduateSupport: "Programs", registry: "Registry",
    complaints: "Feedback", about: "About", governance: "Governance", membership: "Membership", partners: "Partners",
    contact: "Contact", login: "Login", join: "Become a Member", memberPortal: "Member Portal", admin: "Admin Console"
  },
  disclaimer: {
    title: "Institutional & Legal Status",
    statutory: "GFA Certification is a voluntary professional recognition program developed by the Global Film Alliance to promote transparency, safety practices, and industry best standards. It does not replace any government license or legal authorization.",
    legal: "GFA certifications are voluntary professional recognitions and do not replace any government licenses, permits, or legal authorizations. The Global Film Alliance (GFA) is an independent non-profit service organization.",
    heroWarning: "Our certifications do not replace any government license or authorization."
  },
  home: {
    hero: {
      kicker: "Independent Nonprofit • Voluntary Standards • Global Network",
      title: "Global Film Alliance",
      subhead: "Trust, Safety, and Opportunity Across the Film Industry",
      body: "We provide voluntary certification frameworks, youth safeguarding guidance, and professional support programs for agencies, productions, and emerging filmmakers.",
      ctaPrimary: "Become a Member",
      ctaSecondary: "View Programs"
    },
    trust: { label: "TRUST SEAL", badge: "Voluntary • Transparent • Professional" },
    searchRegistry: {
      title: "Search GFA Verified Organizations",
      subtitle: "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards.",
      cta: "Search Registry",
      ui: {
        tabs: { org: "Organization Search", bond: "Verify Bond / License", project: "Project Status" },
        labels: { name: "Entity Name / ID", category: "Category", phone: "Phone Check", license: "License / Tax ID", country: "Country", state: "State / Prov", city: "City", address: "Street Address" },
        placeholders: { name: "Name, ID, or Reg No.", phone: "+1 (000) 000-0000", license: "Official License No.", state: "State", city: "City", address: "Registered Address Search..." },
        options: { allTypes: "All Types", agency: "Agency", production: "Production", school: "School", casting: "Casting", global: "Global" },
        filters: { verified: "Verified Active", bonded: "Bonded Services Only", affiliates: "Includes Affiliates" },
        trending: { label: "Trending:", la: "Los Angeles Agencies", uk: "Safe Sets UK", casting: "Casting Directors" }
      }
    },
    whatWeDo: {
      title: "Core Service Pillars",
      subtitle: "A structured, policy-first platform for industry transparency, safety practices, and career development.",
      cards: [
        { title: "Voluntary Certification", body: "A standardized framework for organizations to demonstrate commitment to ethical production and financial transparency.", link: "Certification Guidelines" },
        { title: "Youth Safeguarding", body: "Independent guidance and professional background vetting protocols to ensure the safety of minors in cinematic environments.", link: "Safety Standards" },
        { title: "Career & Industry Access", body: "Connecting verified talent with project matchmaking, equipment resources, and supported mentorship pathways.", link: "Access Programs" }
      ]
    },
    globalPresence: {
      title: "Global Strategic Presence", subtitle: "Institutional hubs in key production markets.",
      stats: [{ val: "14", label: "Regional Hubs" }, { val: "86", label: "Partner Agencies" }],
      locations: [{ city: "London", role: "European HQ" }, { city: "Los Angeles", role: "Legal Compliance" }, { city: "Beijing", role: "Asia-Pacific Center" }, { city: "Paris", role: "Cultural Liaison" }]
    },
    safeguardingSection: {
      title: "Youth Safeguarding & Trusted Industry Standards",
      subtitle: "Building a safer, fairer, and more transparent pathway into the film and performing arts industry for families, young talents, and professional organizations.",
      cards: [
        { title: "Verified", text: "Certified and reviewed organizations only" },
        { title: "Transparent", text: "Clear fees and written agreements" },
        { title: "Protected", text: "Financial safeguards up to $50,000" },
        { title: "Trusted", text: "Public ratings and ongoing monitoring" }
      ],
      whyExists: {
        title: "Why This System Exists",
        p1: "Entering the film industry can be confusing and risky for young performers and their families. Unverified auditions, hidden fees, unregulated training programs, and misleading promises often create financial loss and uncertainty.",
        p2: "Families need more than opportunities — they need clarity, accountability, and institutions they can trust. The Global Film Alliance establishes independent standards to create a safer and more professional environment for youth participation."
      },
      howHelps: {
        title: "How GFA Helps Families",
        list: ["Search and verify certified organizations", "Access transparent pricing and contracts", "Choose safer auditions and training environments", "Reduce risks of fraud or unethical practices", "Make informed decisions with confidence"]
      },
      requirements: {
        title: "Certification Requirements",
        list: [
          { l: "Legal Compliance:", t: "Verified registration, business legitimacy, and operational transparency" },
          { l: "Transparent Fees:", t: "Clear pricing, written contracts, no hidden charges" },
          { l: "Youth Safety Practices:", t: "Safe audition procedures and professional conduct standards" },
          { l: "Professional Capability:", t: "Qualified instructors and proven services" },
          { l: "Financial Responsibility:", t: "Security deposits or safeguards up to $50,000" },
          { l: "Public Rating System:", t: "Searchable certification status and ongoing review" }
        ]
      },
      benefits: {
        title: "Benefits for Organizations",
        list: ["Official certification badge and credibility", "Public listing on the GFA platform", "Increased trust from families and partners", "More exposure and collaboration opportunities", "Access to industry resources, studios, and networks"]
      }
    }
  },
  registry: {
    title: "Search GFA Verified Organizations",
    subtitle: "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards.",
    registryCount: "Institutional Records",
    viewDetails: "View Details",
    reportConcern: "Report Concern",
    trustScore: "Confidence Index",
    tableHeaders: ["Organization / ID", "Validity Period", "Category", "Status", "Trust Score"],
    disclaimerBody: "Registry data is updated every 48 hours following internal audit. Status reflects voluntary certification and does not replace statutory licensing.",
    ui: {
      portalLabel: "Official Certification Portal",
      active: "INSTITUTIONAL ACTIVE",
      pending: "PENDING / UNDER REVIEW",
      revoked: "REVOKED / SUSPENDED",
      noResults: "No institutional records match your criteria."
    }
  },
  certification: {
    title: "Professional Recognition Status",
    intro: "The GFA provides an objective framework for industry entities to signal their commitment to professional standards."
  },
  certificationDetails: {
    levels: [
      { t: 'Institutional Verified', d: 'Verification of operational legitimacy, verified address, and commitment to the GFA Ethics Pledge.' },
      { t: 'Industry Certified', d: 'Comprehensive audit of project history, reference checks, and verified financial transparency compliance.' },
      { t: 'Accredited Excellence', d: 'Elite recognition for organizations maintaining audited safety and best-practice benchmarks over multiple cycles.' }
    ],
    protocols: [
      { t: 'Documentation Audit', d: 'Verification of institutional filings, business credentials, and signed ethics adherence.' },
      { t: 'Operational Safety Review', d: 'Verification of workspace safeguarding protocols, especially regarding minor welfare.' },
      { t: 'Transparency Disclosure', d: 'Auditing of public fee structures and non-predatory business practice verification.' }
    ],
    cycle: [
      { s: 'Submission of Record', d: 'Initial intake of credentials and institutional history.' },
      { s: 'Compliance Audit', d: 'Independent documentation review and reference vetting phase.' },
      { s: 'Status Grant', d: 'Inclusion in the Global Registry with assigned Trust Score.' },
      { s: 'Ongoing Maintenance', d: 'Periodic re-verification of safety and operational transparency.' }
    ],
    cta: {
      title: "Elevate Your Professional Standing",
      body: "Joining the GFA network signals your dedication to international best practices. We support organizations through a transparent, administrative review process.",
      inquire: "Inquire for Intake",
      download: "Download Guidelines PDF"
    },
    ui: {
      mainTitle: "Institutional Standards & Professional Recognition",
      protocolsTitle: "Assessment Protocols",
      cycleTitle: "The Certification Cycle",
      levelPrefix: "Recognition Level"
    }
  },
  careerAccess: {
    title: "Career & Industry Access", subtitle: "Creating sustainable pathways for emerging professionals.",
    intro: "We bridge the gap between academic training and professional reality through vetted mentorship and resource grants.",
    pillars: {
      p1: { icon: "🎓", title: "Credential Verification", body: "Validating academic degrees and training certificates for global mobility." },
      p2: { icon: "🎥", title: "Project Matchmaking", body: "Connecting verified independent productions with qualified crew and talent." },
      p3: { icon: "⚖️", title: "Ethics Pledge", body: "Ensuring all participants adhere to the GFA code of professional conduct." }
    },
    inquiryTitle: "Program Inquiry", cta: "Submit Inquiry", inquiryNote: "Requests are reviewed by the Professional Development Committee."
  },
  graduatePathways: [
    { id: '01', t: 'Verification of Credentials', d: 'Supporting the audit of academic records from GFA-Recognized institutions.' },
    { id: '02', t: 'Portfolio Best Practices', d: 'Providing feedback on technical benchmarks for industry readiness.' },
    { id: '03', t: 'Professional Ethics Pledge', d: 'Supporting voluntary adherence to industry safety and transparency guidelines.' }
  ],
  support: {
    title: "Member Support", subtitle: "We are here to help.", intro: "Access resources and assistance.",
    p1Title: "Career", p1Bullets: ["Mentorship", "Guides"],
    p2Title: "Legal", p2Bullets: ["Contract Review", "Dispute"],
    p3Title: "Wellness", p3Bullets: ["Mental Health", "Safety"],
    cta: "Get Support", howTitle: "How It Works", howBody: "Submit a request and we will connect you.",
    transparencyTitle: "Our Promise", transparencyBody: "We serve your interests."
  },
  supportPrograms: [
    { id: 's1', title: 'Graduate Film Support', category: 'Graduate', features: ['Script mentorship', 'Festival strategy', 'Grant eligibility'], description: 'Bridging the gap for new filmmakers.' },
    { id: 's2', title: 'Post & VFX Support', category: 'VFX', features: ['Color grading', 'Sound mixing', 'VFX finishing'], description: 'Professional tools for high-end results.' },
    { id: 's3', title: 'Studio & Gear Access', category: 'Studio', features: ['Studio stage booking', 'Camera packages', 'Vehicle logistics'], description: 'Removing hardware barriers.' }
  ],
  partners: {
    title: "Verified Service Partners", intro: "A curated network of service providers vetted for quality and reliability.",
    catLabel: "Category", countryLabel: "Country", found: "{n} Partners Found", card: { eligibility: "Eligibility" },
    filterOptions: {
      categories: ["All", "Legal", "Production", "Travel", "Insurance", "Dining", "Retail"],
      countries: ["All", "USA", "China", "UK", "France", "Australia", "Italy"]
    }
  },
  partnersList: [
    { id: 'p1', name: 'Elite Legal Group', category: 'Legal', country: 'USA', state: 'California', city: 'Los Angeles', address: 'Wilshire Blvd', benefit: '20% off contract review', eligibility: 'Pro Members', logo: IMAGES.partners[0] },
    { id: 'p2', name: 'CineStay Suites', category: 'Travel', country: 'USA', state: 'New York', city: 'NYC', address: 'Broadway 42nd', benefit: '15% room discounts', eligibility: 'All Members', logo: IMAGES.partners[1] },
    { id: 'p3', name: 'Dragon VFX Studios', category: 'Production', country: 'China', state: 'Beijing', city: 'Beijing', address: 'Chaoyang Dist', benefit: 'Priority render access', eligibility: 'Silver & Up', logo: IMAGES.partners[2] },
    { id: 'p4', name: 'EuroLens Rentals', category: 'Production', country: 'UK', state: 'London', city: 'London', address: 'Soho Square', benefit: '10% gear discount', eligibility: 'Pro Members', logo: IMAGES.partners[3] },
    { id: 'p5', name: 'Global Safety Insurance', category: 'Insurance', country: 'USA', state: 'Texas', city: 'Austin', address: 'Main St', benefit: 'Free set audit', eligibility: 'Gold Members', logo: IMAGES.partners[4] },
    { id: 'p6', name: "Director's Bistro", category: 'Dining', country: 'France', state: 'Ile-de-France', city: 'Paris', address: 'Rue de Rivoli', benefit: 'Complimentary appetizer', eligibility: 'All Members', logo: IMAGES.partners[5] },
    { id: 'p7', name: 'Filmware Pro', category: 'Retail', country: 'USA', state: 'Washington', city: 'Seattle', address: 'Tech Plaza', benefit: 'Student bundle discounts', eligibility: 'Graduate Members', logo: IMAGES.partners[6] },
    { id: 'p8', name: 'Oceania Soundstages', category: 'Production', country: 'Australia', state: 'NSW', city: 'Sydney', address: 'Moore Park', benefit: 'Buy 2 days, get 1 free', eligibility: 'Gold Members', logo: IMAGES.partners[7] },
    { id: 'p9', name: 'Milano Wardrobe', category: 'Retail', country: 'Italy', state: 'Lombardy', city: 'Milan', address: 'Via Montenapoleone', benefit: '10% off set costumes', eligibility: 'Pro Members', logo: IMAGES.partners[8] },
    { id: 'p10', name: 'Global Courier Film', category: 'Travel', country: 'UK', state: 'England', city: 'London', address: 'Heathrow Logistics', benefit: 'Expedited film shipping', eligibility: 'Pro & Gold', logo: IMAGES.partners[9] }
  ],
  events: {
    title: "Industry Events Calendar", intro: "Official workshops, screenings, and networking events sanctioned by the GFA.", cta: "Register Interest",
    sections: { competitions: "Competitions", screenings: "Screenings", workshops: "Workshops" },
    eventStatus: ["Open for Submission", "Coming Soon", "Registration Closed"], note: "All events adhere to GFA safety and inclusivity standards."
  },
  eventsList: [
    { id: 'e1', title: 'Global Script Award 2024', date: 'Oct 15, 2024', type: 'Competition', image: IMAGES.events[0], description: 'Rewarding the boldest voices in new screenwriting.' },
    { id: 'e2', title: 'VFX Innovation Summit', date: 'Nov 02, 2024', type: 'Workshop', image: IMAGES.events[1], description: 'Learn the latest in AI-driven compositing.' },
    { id: 'e3', title: 'Beijing Debut Showcase', date: 'Dec 12, 2024', type: 'Showcase', image: IMAGES.events[2], description: 'Screenings of certified graduate projects.' },
    { id: 'e4', title: 'Indie Producer Workshop', date: 'Jan 20, 2025', type: 'Workshop', image: IMAGES.events[3], description: 'Mastering the business of independent film.' },
    { id: 'e5', title: 'Cannes Community Screening', date: 'May 14, 2025', type: 'Screening', image: IMAGES.events[4], description: 'GFA member exclusive screening event.' },
    { id: 'e6', title: 'Talent Scout Expo', date: 'Mar 10, 2025', type: 'Showcase', image: IMAGES.events[5], description: 'Connect with verified agencies and directors.' }
  ],
  adminDashboard: {
    header: { subtitle: "Internal Compliance Division", title: "Admin Control", access: "Master Access Verified" },
    nav: { audits: "Pending Audits", registry: "Registry Control", intake: "Intake Queue", scoring: "Scoring Logic", analytics: "System Analytics" },
    stats: { total: "Total Orgs", accredited: "Accredited", suspended: "Suspended", renewal: "Renewal Alert" },
    queueTitle: "Audit Review Queue",
    intakeTitle: "Institutional Intake Feed (Recent)",
    intakeItem: { title: "Case #INT-2024-811: Starlight Mgmt", priority: "PRIORITY: HIGH", body: "Concerns reported regarding minor supervision protocols during London pilot audition session. Evidence attached.", btn1: "Update Registry Score", btn2: "Forward to Compliance Lead" },
    btns: { open: "Open Review", dismiss: "Dismiss" }
  },
  memberPortal: {
    header: { subtitle: "Certified Organization Access", title: "Portal Access", support: "Support Desk", logout: "Log Out" },
    sidebar: { academy: "Elite Academy", tier: "Tier: Accredited", profile: "Profile Control", docs: "Document Bank", renewal: "Renewal Center", scores: "Transparency Scores", alerts: "Compliance Alerts", alertsBody: "No active alerts. Safeguarding policies are current." },
    stats: { trust: "Trust Indicator", grade: "Grade", certId: "Certification ID", status: "Status: Active", expiry: "Expiry Date", remaining: "Renewal: 18 Months Remaining" },
    docs: { title: "Document Management", addBtn: "Add New Institutional Document" },
    assets: { title: "Download Brand Assets", badge: "Institutional Badge", cert: "Certification PDF" }
  },
  complaints: { title: "File a Complaint", form: { submit: "Submit Complaint" } },
  contact: {
    title: "Contact General Secretariat", intro: "Reach out to our administrative offices for inquiries, press, or partnership proposals.",
    labels: { individual: "Individual", organization: "Organization", merchant: "Merchant", join: "Join", inquiries: "General Inquiries", press: "Press & Media" },
    form: { header: "{type} Application", name: "Full Name / Entity Name", email: "Contact Email", location: "Location (City/Country)", cat: "Business Category", orgType: "Organization Type", message: "Message / Inquiry Details", consent: "I consent to GFA storing my data for communication purposes.", submit: "Send Message" },
    dropdowns: { merchantCats: ["Legal", "Insurance", "Dining", "Retail", "Travel", "Production Services"], orgTypes: ["Production Agency", "Film School / Institution", "Festival / Event Body", "Government / NGO"] },
    ui: {
      secretariatBadge: "General Secretariat",
      alertMessage: "Application submitted to GFA Registry."
    }
  },
  membership: {
    title: "Membership Tiers", intro: "Join a network of verified professionals committed to excellence and safety.",
    talentTitle: "For Individual Talent", orgTitle: "For Organizations", entTitle: "Enterprise Solutions",
    entDesc: "Custom compliance and auditing packages for major studios and production houses.", entCta: "Contact Corporate Relations",
    talentTiers: [
      { name: "Free", price: "$0", perks: ["Registry Profile", "Basic Audition Access"], recommended: false },
      { name: "Pro", price: "$199/yr", perks: ["Verified Badge", "Priority Access", "Legal Support"], recommended: true },
      { name: "Gold", price: "$499/yr", perks: ["All Pro Benefits", "Mentorship Priority", "Equipment Grants"], recommended: false },
      { name: "Elite", price: "$999/yr", perks: ["Global Mobility Support", "Visa Consultation", "VIP Events"], recommended: false }
    ],
    orgTiers: [
      { name: "Certified", price: "$2,500/yr", perks: ["Institutional Badge", "Audit Support", "Recruitment Tools"] },
      { name: "Accredited", price: "$5,000/yr", perks: ["Global Partner Status", "Policy Consultation", "Board Voting Rights"] },
      { name: "Strategic", price: "Custom", perks: ["Regional Leadership", "Custom Compliance Frameworks"] }
    ],
    ui: {
      networkBadge: "GFA Professional Network",
      orgSubtitle: "Institutional Access for Companies & Schools",
      joinAs: "Join as {tier}",
      select: "Select {tier}"
    }
  },
  about: {
    hero: { kicker: "Institutional Overview", title: "Global Film Alliance", subtitle: "The definitive independent standard for the global motion picture industry." },
    mission: { title: "Mission", body: "To establish trusted industry standards, promote transparency and accountability in film production, protect young performers, and support the sustainable growth of the global film community through independent certification and collaboration." },
    vision: { title: "Vision", body: "To shape a transparent, accountable, and professionally governed global film ecosystem where talent and institutions can collaborate with confidence." },
    whoWeAre: { title: "Who We Are", body: "Global Film Alliance is an independent, nonprofit organization operating as a neutral and trusted third party for the film and media industry. We provide certification, education, and production support services that promote transparency, protect young performers, and strengthen professional standards across the global film community. By connecting institutions, creators, and resources, we help bridge policy, compliance, and real-world production." },
    whatWeDo: {
      title: "What We Do",
      items: [
        { title: "Standardization", icon: "⚖️", desc: "Defining universal benchmarks for safety and ethics." },
        { title: "Certification", icon: "🎖️", desc: "Verifying the legitimacy of agencies and schools." },
        { title: "Youth Safeguarding", icon: "🛡️", desc: "Enforcing strict protocols for minor protection." },
        { title: "Professional Registry", icon: "📋", desc: "Maintaining the central database of verified entities." },
        { title: "Industry Support", icon: "🤝", desc: "Connecting talent with verified career opportunities." },
        { title: "Mediation", icon: "⚖️", desc: "Providing neutral channels for dispute resolution." }
      ]
    },
    certification: { title: "Certification System", body: "GFA Certification is the industry's recognized mark of professional reliability. It validates that an organization adheres to our strict code of conduct and financial transparency requirements." },
    youthProtection: { title: "Youth Safeguarding", body: "We maintain a zero-tolerance policy for child safety violations. Our safeguarding framework includes background checks, on-set supervision requirements, and mandatory reporting channels." },
    support: { title: "Industry Support", body: "Beyond regulation, we actively support the growth of the industry through mentorship programs, equipment grants, and legal aid access for emerging filmmakers." },
    collaboration: { title: "Member Collaboration Network", subtitle: "Trusted Business Ecosystem", body: "GFA builds a trusted collaboration ecosystem where certified members can safely work together.", quote: "Members can find verified partners instead of unknown vendors.", features: ["Verified Directory", "Internal Referrals", "Project Matchmaking", "Co-Production", "Partner Reviews", "Credit System"] },
    resourceExchange: {
      title: "Film Resource Exchange Platform", subtitle: "A one-stop production resource ecosystem.", body: "Integrating professional resources required for film production, providing members with efficient, cost-effective, and trusted channels for resource acquisition.",
      categories: [
        { title: "Production Crew", icon: "🎬", items: ["Director / DP", "Gaffer / Sound", "Producer / Grip", "Art Department"] },
        { title: "Equipment", icon: "🎥", items: ["Cinema Cameras", "Lighting Systems", "Audio Gear", "Drones & Jibs"] },
        { title: "Post-Production", icon: "💻", items: ["Editing", "VFX / Animation", "Color Grading", "Sound Design"] },
        { title: "Talent & Casting", icon: "🎭", items: ["Actor Database", "Agency Connect", "Audition Referrals"] }
      ]
    },
    network: { title: "Global Network", body: "With regional hubs in major production capitals, GFA ensures that our standards are culturally adapted and locally enforceable." },
    governance: { title: "Governance & Compliance", body: "GFA operates under a transparent charter governed by an independent Board of Directors. We publish annual transparency reports to ensure accountability." },
    impact: { title: "Our Impact", stats: [{ value: "400+", label: "Verified Orgs" }, { value: "12K+", label: "Professionals" }, { value: "50+", label: "Safety Audits" }, { value: "14", label: "Global Hubs" }] },
    cta: { title: "Join the Alliance", body: "Align your organization with the highest standards of the global film industry.", button: "Apply for Membership" },
    ui: {
      mapPlaceholder: "[ Interactive Global Map Visualization ]",
      buttons: {
        viewStandards: "View Standards",
        readPolicy: "Read Safeguarding Policy →",
        explore: "Explore Programs",
        readCharter: "Read Charter & Bylaws",
        apply: "Apply for Recognition",
        readMission: "Read Mission Statement"
      },
      kickers: {
        profile: "Institutional Profile",
        zeroTolerance: "Zero Tolerance"
      },
      badges: {
        certified: "GFA CERTIFIED",
        standard: "Global Standard"
      }
    }
  },
  reporting: { title: "Complaint & Feedback Mechanism", subtitle: "GFA is committed to industry accountability...", commitment: "48-Hour Response Commitment...", formTitle: "Lodge a Professional Feedback Report", formLabels: { type: "Report Type", org: "Entity Name", desc: "Detailed Description...", email: "Official Contact Email", submit: "Submit Report to Registry" }, reportTypes: ["Safety Violation", "Ethical Misconduct", "Transparency Concern", "Other"], processTitle: "Resolution Workflow", process: [{s: "Intake", d: "Report received..."}, {s: "Verification", d: "Internal audit..."}, {s: "Resolution", d: "Outcome determined..."}], outcomes: ["Registry Status Suspension", "Public Warning Badge", "Formal Audit Requirement"] },
  governance: { title: "Institutional Guidelines & Governance", subtitle: "Maintaining structural transparency...", summaryTitle: "Charter Summary", summaryBody: "The GFA Charter defines...", roleTitle: "Board of Directors & Committees", roleBody: "The Global Film Alliance is governed...", board: [{role: "Executive Chair", title: "Institutional Strategy"}, {role: "Compliance Lead", title: "Regulatory Alignment"}, {role: "Welfare Director", title: "Youth Safeguarding Oversight"}, {role: "Legal Counsel", title: "Transparency & Standards"}], downloads: { charter: "Download Full GFA Charter (PDF)", bylaws: "Download Institutional Bylaws (PDF)" } },
  transparency: { title: "Transparency Index", subtitle: "Public disclosure...", tableTitle: "Standard Fee Structures", tableHeaders: ["Service Type", "Fee Cap", "Requirement", "Note", "Refundable"], rulesTitle: "Financial Conduct Rules", rules: ["No upfront fees...", "Commission caps...", "Clear refund...", "Segregated..."], protectionTitle: "Member Protections", protectionRules: ["Audit rights...", "Whistleblower...", "Dispute...", "Legal aid..."], enforcementTitle: "Enforcement Actions", enforcementItems: ["Suspension", "Revocation", "Public Notice", "Legal Referral"] },
  youthSafetyPolicy: { title: "Youth Safety Act", subtitle: "Safeguarding Framework", intro: "The GFA Youth Safety Act...", sections: { s1: {title: "Background Checks", body: "Mandatory criminal..."}, s2: {title: "Chaperone Requirements", body: "Certified guardians..."}, s3: {title: "Working Hours", body: "Strict adherence..."}, s4: {title: "Education", body: "Provision of..."} }, footer: "GFA 2025" },
  common: { searchPlaceholder: "Search by Name or ID", category: "Category", level: "Level", status: "Status", loading: "Accessing Records...", filters: "Filters", reset: "Reset", required: "Required", optional: "Optional" },
  standards: { title: "Industry Standards", subtitle: "Defining Professional Excellence", catA: {title: "Safety", scope: "Physical & Psychological", tag: "Priority", docsTitle: "Required Docs", docs: ["Safety Plan", "Insurance"], matrixBody: "Strict adherence required.", disqual: "Safety violation."}, catB: {title: "Ethics", scope: "Professional Conduct", tag: "Core", docsTitle: "Required Docs", docs: ["Code of Conduct"], matrixBody: "Zero tolerance...", disqual: "Ethical breach."}, catC: {title: "Finance", scope: "Transparency", tag: "Audit", docsTitle: "Required Docs", docs: ["Financial Audit"], matrixBody: "Open book policy.", disqual: "Fraud."}, catD: {title: "Legal", scope: "Compliance", tag: "Mandatory", docsTitle: "Required Docs", docs: ["Business License"], matrixBody: "Full legal compliance.", disqual: "Illegality."}, catE: {title: "Education", scope: "Training Standards", tag: "Quality", docsTitle: "Required Docs", docs: ["Curriculum"], matrixBody: "Qualified instructors.", disqual: "Subpar training."} },
  protection: { title: "Member Protection", subtitle: "Safeguarding Your Rights", modelItems: ["Verify Licenses", "Check Bonds", "Read Reviews", "Report Issues"] },
  directory: { title: "Organization Directory", subtitle: "The official list...", registryCount: "Total Records", tableHeaders: ["Entity Name", "Validity", "Type", "Status", "Audit Result"] },
  verify: { title: "Verify Credential", body: "Enter a credential ID...", form: { placeholder: "Credential ID / Bond Number", button: "Verify Status" } },
  policies: { privacy: {title: "Privacy Policy", summary: "How we handle...", sections: {collection: "We collect...", usage: "We use..."}}, terms: {title: "Terms of Service", summary: "Rules...", sections: {usage: "You must...", liability: "We are not..."}}, parental: {title: "Parental Consent", summary: "Information...", sections: {consent: "By allowing...", rights: "You have rights..."}}, content: {title: "Content Guidelines", summary: "Standards...", sections: {prohibited: "No hate...", ownership: "You own..."}} },
  casting: { title: "Casting Calls", intro: "Verified casting...", ctaBrowse: "Browse Castings", ctaPost: "Post a Casting", protectionTitle: "Safe Casting", protectionDesc: "All posts are vetted.", featuresTitle: "Why Use GFA Casting?", features: ["Verified", "Safe", "Global", "Talent", "Free"], note: "Report suspicious listings." },
  safeguarding: {
    title: "Global Safeguarding Standard",
    subtitle: "Independent Oversight & Welfare Protocols",
    intro: "The GFA maintains a zero-tolerance policy for safety violations. We provide centralized auditing for production sets, casting workshops, and talent agencies to ensure compliance with international minor protection laws.",
    policyLink: "View Youth Safety Policy",
    verificationTool: { title: "Verify Audition / Event", placeholder: "Enter Event ID or GFA Cast Code", btn: "Verify Status", note: "All GFA-sanctioned casting calls and workshops must possess a valid, active audit code." },
    categories: { title: "Regulated Environments", film: { title: "Film Sets & Soundstages", d: "Mandatory background checks for all crew interacting with minors. On-set welfare officers required for productions exceeding 12 hours." }, commercial: { title: "Commercial & Print", d: "Strict adherence to work-hour limitations and educational time requirements for school-age talent." }, model: { title: "Modeling & Fashion", d: "Prohibition of unauthorized photography. Private changing areas and chaperone presence enforced." }, events: { title: "Competitions & Workshops", d: "Vetting of all adjudicators and mentors. Open-door policies for workshops to ensure parental visibility." } },
    redFlags: { title: "Red Flags & Prohibited Practices", subtitle: "If you encounter any of these behaviors, disengage immediately and report to GFA Compliance.", list: [{ t: "Pay-to-Audition", d: "Legitimate casting directors never charge fees for audition slots." }, { t: "Private Hotel Meetings", d: "Professional meetings must occur in insured, public office environments." }, { t: "Guaranteed Fame", d: "Promises of stardom or guaranteed roles in exchange for upfront payments." }] },
    reportingCta: "Report a Concern",
    ui: {
      oversightBadge: "Global Safeguarding Oversight",
      reportingTitle: "Reporting Misconduct",
      reportingBody: "GFA maintains an independent compliance intake system to review violations of minor safeguarding and transparency protocols. If you have witnessed or been subjected to illegal fee mandates, bundled photography requirements, or predatory behavior, please report it immediately to our administrative division.",
      audit: { valid: "Audit Status: GFA AUTHENTICATED", invalid: "Audit Status: UNVERIFIED / ALERT", validDesc: "This project/event is officially registered and follows GFA welfare standards.", invalidDesc: "No matching record found. Exercise extreme caution. Private reporting advised." },
      ethicsBtn: "Ethics Violation Intake",
      standardsActive: "GFA Standards Active"
    }
  },
  footer: { desc: "Independent non-profit industry support organization. Facilitating professional standards in the global film industry.", copyright: "© {year} Global Film Alliance. Supporting Industry Excellence." }
};

const ZH_JSON: any = {
  ...EN_JSON,
  nav: {
    home: "首页", certification: "行业认证", childSafety: "青少年保护", graduateSupport: "支持计划", registry: "认证名录",
    complaints: "反馈渠道", about: "关于我们", governance: "治理准则", membership: "会员权益", partners: "合作伙伴",
    contact: "联系我们", login: "登录", join: "加入会员", memberPortal: "会员门户", admin: "管理后台"
  },
  registry: {
    ...EN_JSON.registry,
    title: "搜索 GFA 认证机构",
    subtitle: "查找在 GFA 自愿性认证标准下获得认可的代理机构、工作室及合作伙伴。",
    registryCount: "机构记录",
    viewDetails: "查看详情",
    reportConcern: "报告问题",
    trustScore: "信任指数",
    tableHeaders: ["机构名称 / 编号", "认证有效期", "类别", "状态", "信任评分"],
    disclaimerBody: "名录数据每 48 小时在内部审计后更新一次。状态反映自愿性认证，不取代法定许可。",
    ui: {
      portalLabel: "官方认证门户",
      active: "机构活跃",
      pending: "待定 / 审核中",
      revoked: "已撤销 / 暂停",
      noResults: "没有符合您查询条件的机构记录。"
    }
  },
  certification: {
    ...EN_JSON.certification,
    title: "专业认证状态",
    intro: "GFA 为行业实体提供客观框架，以表明其对专业标准的承诺。"
  },
  certificationDetails: {
    levels: [
      { t: '机构验证级', d: '验证运营合法性、真实地址，并承诺遵守 GFA 道德誓言。' },
      { t: '行业认证级', d: '对项目历史进行全面审计、背景调查，并核实财务透明度合规性。' },
      { t: '卓越认可级', d: '对在多个周期内保持审计安全和最佳实践基准的组织给予精英认可。' }
    ],
    protocols: [
      { t: '文件审计', d: '验证机构备案、业务凭证和已签署的道德准则。' },
      { t: '运营安全审查', d: '验证工作场所保护协议，特别是关于未成年人福利的协议。' },
      { t: '透明度披露', d: '审计公开费用结构，并验证非掠夺性商业行为。' }
    ],
    cycle: [
      { s: '记录提交', d: '初步受理凭证和机构历史。' },
      { s: '合规审计', d: '独立的文件审查和背景调查阶段。' },
      { s: '授予状态', d: '纳入全球名录并分配信任评分。' },
      { s: '持续维护', d: '定期重新验证安全和运营透明度。' }
    ],
    cta: {
      title: "提升您的专业地位",
      body: "加入 GFA 网络标志着您致力于国际最佳实践。我们通过透明的行政审查流程支持各个组织。",
      inquire: "申请加入",
      download: "下载指南 PDF"
    },
    ui: {
      mainTitle: "机构标准与专业认可",
      protocolsTitle: "评估协议",
      cycleTitle: "认证周期",
      levelPrefix: "认可等级"
    }
  },
  safeguarding: {
    title: "全球青少年保障标准",
    subtitle: "独立监督与福利协议",
    intro: "GFA 对安全违规行为持零容忍态度。我们对制作现场、选角工作坊和人才经纪机构进行集中审计，以确保符合国际未成年人保护法。",
    policyLink: "查看青少年安全政策",
    verificationTool: {
      title: "验证试镜 / 活动",
      placeholder: "输入活动 ID 或 GFA 选角代码",
      btn: "验证状态",
      note: "所有经 GFA 批准的选角和研讨会必须拥有有效、激活的审计代码。"
    },
    categories: {
      title: "受监管环境",
      film: {
        title: "电影片场与摄影棚",
        d: "所有与未成年人接触的剧组人员必须进行背景调查。超过 12 小时的制作必须配备现场福利专员。"
      },
      commercial: {
        title: "商业与平面广告",
        d: "严格遵守学龄人才的工作时间限制和教育时间要求。"
      },
      model: {
        title: "模特与时尚",
        d: "禁止未经授权的摄影。强制执行私人更衣区和监护人陪同。"
      },
      events: {
        title: "比赛与研讨会",
        d: "对所有评委和导师进行审查。研讨会实行开放政策，确保家长可见。"
      }
    },
    redFlags: {
      title: "危险信号与禁止行为",
      subtitle: "如果您遇到以下任何行为，请立即停止接触并向 GFA 合规部门报告。",
      list: [
        { t: "付费试镜", d: "合法的选角导演绝不会对试镜名额收费。" },
        { t: "私人酒店会议", d: "专业会议必须在有保险的公共办公环境中进行。" },
        { t: "保证成名", d: "承诺以预付款换取成名或保证角色。" }
      ]
    },
    reportingCta: "报告问题",
    ui: {
      oversightBadge: "全球保障监督",
      reportingTitle: "报告不当行为",
      reportingBody: "GFA 维护一个独立的合规受理系统，以审查违反未成年人保护和透明度协议的行为。如果您目睹或遭遇非法收费强制要求、捆绑摄影要求或掠夺性行为，请立即向我们的行政部门报告。",
      audit: { valid: "审计状态：GFA 认证", invalid: "审计状态：未验证 / 警报", validDesc: "此项目/活动已正式注册并遵循 GFA 福利标准。", invalidDesc: "未找到匹配记录。请极度谨慎。建议进行私人报告。" },
      ethicsBtn: "道德违规受理",
      standardsActive: "GFA 标准已激活"
    }
  },
  membership: {
    title: "会员等级",
    intro: "加入致力于卓越与安全的认证专业人士网络。",
    talentTitle: "个人人才",
    orgTitle: "机构组织",
    entTitle: "企业解决方案",
    entDesc: "为主要制片厂和制作公司定制的合规与审计方案。",
    entCta: "联系企业关系部",
    talentTiers: [
      { name: "免费版", price: "$0", perks: ["注册档案", "基础试镜访问"], recommended: false },
      { name: "专业版", price: "$199/年", perks: ["认证徽章", "优先访问", "法律支持"], recommended: true },
      { name: "黄金版", price: "$499/年", perks: ["所有专业权益", "导师优先权", "设备资助"], recommended: false },
      { name: "精英版", price: "$999/年", perks: ["全球流动支持", "签证咨询", "VIP 活动"], recommended: false }
    ],
    orgTiers: [
      { name: "认证级", price: "$2,500/年", perks: ["机构徽章", "审计支持", "招聘工具"] },
      { name: "认可级", price: "$5,000/年", perks: ["全球伙伴地位", "政策咨询", "董事会投票权"] },
      { name: "战略级", price: "定制", perks: ["区域领导力", "定制合规框架"] }
    ],
    ui: {
      networkBadge: "GFA 专业网络",
      orgSubtitle: "公司与学校的机构准入",
      joinAs: "作为{tier}加入",
      select: "选择{tier}"
    }
  },
  contact: {
    title: "联系总秘书处",
    intro: "如有咨询、媒体或合作建议，请联系我们的行政办公室。",
    labels: {
      individual: "个人",
      organization: "机构",
      merchant: "商户",
      join: "加入",
      inquiries: "一般咨询",
      press: "媒体与新闻"
    },
    form: {
      header: "{type} 申请",
      name: "全名 / 实体名称",
      email: "联系邮箱",
      location: "地点 (城市/国家)",
      cat: "业务类别",
      orgType: "机构类型",
      message: "留言 / 咨询详情",
      consent: "我同意 GFA 存储我的数据用于沟通。",
      submit: "发送消息"
    },
    dropdowns: {
      merchantCats: ["法律服务", "保险", "餐饮", "零售", "旅行", "制作服务"],
      orgTypes: ["制片公司", "电影学校 / 机构", "电影节 / 活动方", "政府 / 非营利组织"]
    },
    ui: {
      secretariatBadge: "总秘书处",
      alertMessage: "申请已提交至 GFA 注册处。"
    }
  },
  about: {
    hero: { kicker: "机构概览", title: "全球电影联盟 (GFA)", subtitle: "全球电影行业权威的独立标准制定者。" },
    mission: { title: "使命 Mission", body: "通过独立认证与协作，建立值得信赖的行业标准，促进电影制作的透明度与问责制，保护青少年演员，并支持全球电影社区的可持续发展。" },
    vision: { title: "愿景 Vision", body: "塑造一个透明、负责任且专业治理的全球电影生态系统，让人才和机构能够充满信心地进行合作。" },
    whoWeAre: { title: "我们是谁 Who We Are", body: "Global Film Alliance 是一家独立的非营利组织，作为电影和媒体行业中立且值得信赖的第三方机构运作。我们提供认证、教育和制作支持服务，旨在促进透明度，保护青少年演员，并加强全球电影社区的专业标准。通过连接机构、创作者和资源，我们帮助弥合政策、合规与实际制作之间的差距。" },
    whatWeDo: {
      title: "我们做什么 What We Do",
      items: [
        { title: "标准制定", icon: "⚖️", desc: "定义安全与道德的通用基准。" },
        { title: "行业认证", icon: "🎖️", desc: "验证机构和学校的合法性。" },
        { title: "青少年保护", icon: "🛡️", desc: "执行严格的未成年人保护协议。" },
        { title: "专业名录", icon: "📋", desc: "维护认证实体的中央数据库。" },
        { title: "行业扶持", icon: "🤝", desc: "连接人才与经过验证的职业机会。" },
        { title: "争议调解", icon: "⚖️", desc: "为行业冲突提供中立的解决渠道。" }
      ]
    },
    certification: { title: "认证体系 Certification System", body: "GFA 认证是行业公认的专业可靠性标志。它验证了一个组织是否遵守我们严格的行为准则和财务透明度要求。" },
    youthProtection: { title: "儿童与青少年保护", body: "我们对侵犯儿童安全的行为采取零容忍态度。我们的保障框架包括背景调查、片场监督要求和强制性报告渠道。" },
    support: { title: "行业支持与扶持", body: "除监管外，我们还通过导师计划、设备资助和新兴电影人法律援助，积极支持行业发展。" },
    collaboration: { title: "会员协作网络", subtitle: "核心商业生态", body: "GFA为会员建立安全可信的合作网络，帮助机构之间快速对接资源、共享机会、形成长期合作关系。", quote: "会员可以找到经过验证的合作伙伴，而不是未知的供应商。", features: ["会员名录", "内部合作推荐", "项目对接", "联合制作撮合", "合作评价系统", "信用记录体系"] },
    resourceExchange: {
      title: "电影资源整合平台", subtitle: "一站式影视制作资源生态系统", body: "整合影视制作所需的各类专业资源，为会员提供高效、低成本、可信赖的资源获取渠道。",
      categories: [
        { title: "拍摄团队", icon: "🎬", items: ["导演 / 摄影", "灯光 / 收音", "制片 / 场务", "美术"] },
        { title: "设备资源", icon: "🎥", items: ["摄影机", "灯光系统", "录音设备", "无人机 / 移动车"] },
        { title: "制作支持", icon: "💻", items: ["剪辑", "VFX / 特效", "动画 / 调色", "声音后期"] },
        { title: "演员与经纪", icon: "🎭", items: ["演员数据库", "经纪公司对接", "试镜推荐"] }
      ]
    },
    network: { title: "全球合作网络", body: "GFA 在主要制作之都设有区域中心，确保我们的标准既符合国际规范，又适应当地文化并可执行。" },
    governance: { title: "治理与合规", body: "GFA 在由独立董事会管理的透明章程下运作。我们发布年度透明度报告以确保问责制。" },
    impact: { title: "影响力数据", stats: [{ value: "400+", label: "认证机构" }, { value: "12K+", label: "专业人才" }, { value: "50+", label: "安全审计" }, { value: "14", label: "全球中心" }] },
    cta: { title: "加入联盟", body: "让您的组织与全球电影行业的最高标准接轨。", button: "申请会员资格" },
    ui: {
      mapPlaceholder: "[ 交互式全球地图可视化 ]",
      buttons: {
        viewStandards: "查看标准",
        readPolicy: "阅读安全政策 →",
        explore: "探索计划",
        readCharter: "阅读章程与细则",
        apply: "申请认可",
        readMission: "阅读使命宣言"
      },
      kickers: {
        profile: "机构概况",
        zeroTolerance: "零容忍"
      },
      badges: {
        certified: "GFA 认证",
        standard: "全球标准"
      }
    }
  }
};

const ES_JSON: any = { ...EN_JSON, registry: EN_JSON.registry, certificationDetails: EN_JSON.certificationDetails, safeguarding: EN_JSON.safeguarding, membership: EN_JSON.membership, contact: EN_JSON.contact, about: EN_JSON.about };
const FR_JSON: any = { ...EN_JSON, registry: EN_JSON.registry, certificationDetails: EN_JSON.certificationDetails, safeguarding: EN_JSON.safeguarding, membership: EN_JSON.membership, contact: EN_JSON.contact, about: EN_JSON.about };
const IT_JSON: any = { ...EN_JSON, registry: EN_JSON.registry, certificationDetails: EN_JSON.certificationDetails, safeguarding: EN_JSON.safeguarding, membership: EN_JSON.membership, contact: EN_JSON.contact, about: EN_JSON.about };
const KO_JSON: any = { ...EN_JSON, registry: EN_JSON.registry, certificationDetails: EN_JSON.certificationDetails, safeguarding: EN_JSON.safeguarding, membership: EN_JSON.membership, contact: EN_JSON.contact, about: EN_JSON.about };
const JA_JSON: any = { ...EN_JSON, registry: EN_JSON.registry, certificationDetails: EN_JSON.certificationDetails, safeguarding: EN_JSON.safeguarding, membership: EN_JSON.membership, contact: EN_JSON.contact, about: EN_JSON.about };
const DE_JSON: any = { ...EN_JSON, registry: EN_JSON.registry, certificationDetails: EN_JSON.certificationDetails, safeguarding: EN_JSON.safeguarding, membership: EN_JSON.membership, contact: EN_JSON.contact, about: EN_JSON.about };

export const DICTIONARIES: Record<Locale, any> = {
  [Locale.EN]: EN_JSON,
  [Locale.ZH]: ZH_JSON,
  [Locale.ES]: ES_JSON,
  [Locale.FR]: FR_JSON,
  [Locale.IT]: IT_JSON,
  [Locale.KO]: KO_JSON,
  [Locale.JA]: JA_JSON,
  [Locale.DE]: DE_JSON,
};
