import { Locale, Translation } from './types';

const EN_JSON: Translation = {
  meta: { siteName: "GFA Global Film Alliance", tagline: "Certification • Compliance • Protection" },
  nav: {
    home: "Home",
    about: "Supervision",
    certification: "Compliance & Bond",
    certGov: {
      overview: "Overview",
      verify: "Bond Verification",
      governance: "Oversight Principles",
      standards: "Vetting Standards",
      transparency: "Bond Transparency",
      protection: "Youth Protection",
      directory: "Bonded Directory",
      reporting: "Report Violation",
      safeguarding: "Safeguarding Authority"
    },
    support: "Support Programs",
    casting: "Global Talent",
    membership: "Membership",
    partners: "Partners",
    events: "Events",
    contact: "Contact",
    verify: "Verify Bond",
    policies: "Policies",
    language: "Language"
  },
  common: {
    learnMore: "Learn more",
    getStarted: "Get started",
    applyNow: "Apply now",
    joinNow: "Join now",
    submit: "Submit",
    viewAll: "View all",
    back: "Back",
    comingSoon: "Coming soon",
    required: "Required",
    optional: "Optional",
    loading: "Checking Official Records...",
    searchRegistry: "Official Bond Lookup"
  },
  home: {
    hero: {
      title: "Global Film Alliance (GFA)",
      subtitle: "Certification · Compliance · Protection | The Global Authority Safeguarding Youth Talent and Independent Film Professionals",
      body: "We establish industry standards, certify legitimate organizations, protect minors from exploitation, and connect verified opportunities across the global film and entertainment ecosystem.",
      ctaPrimary: "Get Certified",
      ctaSecondary: "Verify an Audition",
      badge: "Institutional Authority • Statutory Oversight",
      tags: { cert: "Authority", gov: "Protection", prot: "Access" }
    },
    trust: {
      badge: "An Independent Industry Authority",
      title: "A nonprofit industry standards organization dedicated to improving transparency, safety, and professionalism.",
      body: "Unlike commercial agencies or training providers, GFA does not sell representation or services. We set standards, verify legitimacy, and protect participants.",
      passportTitle: "Authority Roles",
      passportSubtitle: "Compliance & Oversight Body",
      auditItems: ["Certification Authority", "Compliance & Oversight Body", "Youth Protection Advocate", "Industry Resource Connector"]
    },
    stats: {
      certifiedTalents: "Certified Registry",
      verifiedInstitutions: "Bonded Entities",
      supportedProjects: "Impact Outcomes",
      partnerMerchants: "Authorized Partners"
    },
    pillars: {
      title: "Why GFA Exists",
      subtitle: "Addressing the risks of fake auditions, hidden fees, and exploitation of minors.",
      p1Title: "Fake Auditions",
      p1Body: "Fraudulent casting calls and false promises of guaranteed roles.",
      p2Title: "Hidden Fees",
      p2Body: "Forced bundled purchases and pay-to-play recruitment schemes.",
      p3Title: "Unsafe Environments",
      p3Body: "Exploitation of minors and lack of physical operational auditing.",
      p4Title: "False Promises",
      p4Body: "Guaranteed roles or contracts used as predatory marketing.",
      p5Title: "Unregulated Entities",
      p5Body: "Agencies operating without state bonds or verified licenses.",
      explore: "Explore Registry"
    },
    closing: {
      title: "Public Certification Registry",
      body: "Transparency builds trust. Search and verify any organization’s certification status, validity, and complaint history in our live database.",
      cta: "Search Registry"
    }
  },
  about: {
    title: "California Supervision",
    mandate: {
      title: "Governing Industry Ethics",
      body: "GFA operates as an independent liaison assisting the state in monitoring industry compliance. Our core focus is the mandatory $50,000 guarantee fund requirement."
    },
    strategy: {
      title: "Auditing & Verification",
      body: "We perform technical site audits and manage the public ledger of bond vouchers to ensure every certified entity is physically and legally authentic."
    },
    coreFunctions: {
      title: "Supervisory Functions",
      items: [
        { title: "Bond Monitoring", body: "Tracking $50,000 bond renewals and status updates for talent services." },
        { title: "Premise Vetting", body: "Conducting on-site inspections to eliminate shadow or 'hotel-only' operations." },
        { title: "Fraud Resolution", body: "Assisting victims in seeking recourse from the statutory guarantee fund." }
      ]
    },
    youthProtection: {
      title: "Youth & Child Protection First",
      subtitle: "Safety is not optional. Protection is mandatory.",
      intro: "Protecting minors is our absolute priority. Any school or agency charging a fee must have a verified $50,000 bond.",
      pillars: [
        { title: "$50,000 DLSE Bond", body: "Primary financial protection for talent and parents against contract breach." },
        { title: "Fee Transparency Policy", body: "Prohibiting illegal upfront fees for auditions or talent representation." },
        { title: "Background Auditing", body: "Vetting faculty and staff to ensure safe creative environments for youth." },
        { title: "Complaint System", body: "Direct reporting portal for suspected fraud or safety violations." }
      ]
    },
    accountability: {
      title: "Transparency Ledger",
      body: "GFA maintains a public ledger of bond statuses. Every bond voucher can be independently verified on our platform.",
      items: [
        { title: "Agency Lookup", label: "Verify DLSE Licenses.", icon: "📜" },
        { title: "Bond Search", label: "Search $50k Bond Pool.", icon: "💰" },
        { title: "Permit Check", label: "Verify Work Permits.", icon: "🎭" }
      ]
    }
  },
  safeguarding: {
    title: "Safeguarding Authority",
    subtitle: "Ensuring a Transparent, Traceable, and Accountable Creative Industry for Minors.",
    mission: "We establish industry safety standards for minors to eliminate fraud and harm. Our mission is to ensure that auditions, training, agencies, and events operate within a framework that is transparent, traceable, and subject to formal appeal.",
    pillars: {
      p1: {
        title: "Verified Opportunities",
        items: [
          "All recruitment must be tied to verifiable projects (authorized production/casting contacts).",
          "Mandatory pre-posting vetting: Identity verification, project authentication, and workflow auditing.",
          "Every 'Verified Audition' carries a unique Audit ID with a dedicated public verification page.",
          "Strict prohibition of anonymous or projectless talent calls."
        ],
        cta: "Verify an Audition"
      },
      p2: {
        title: "Fee Transparency & Anti-Bundling",
        items: [
          "Mandatory disclosure of all fees: amount, purpose, optional status, and refund conditions.",
          "Zero-tolerance for forced bundling: Casting opportunities cannot be conditioned on paid training, photography, or portfolios.",
          "Risk audits for fees exceeding reasonable industry benchmarks with mandatory cost-of-service disclosure.",
          "Direct reporting portal for hidden fees or pay-to-play recruitment schemes."
        ],
        cta: "View Fee Rules"
      },
      p3: {
        title: "Minor Safeguarding Rules",
        redLinesTitle: "Mandatory Red Lines (Non-Negotiable)",
        redLines: [
          "Guardian Awareness: Guardians must be informed of all communications and have the absolute right to accompany minors.",
          "No Private Meetings: Absolute prohibition of private offline meetings between minors and unknown adults.",
          "Privacy Protection: Prohibition of collecting unnecessary sensitive data (home address, family finances, sensitive imagery).",
          "Traceable Channels: All communication must be archived via GFA-approved traceable channels (official email/platform logs)."
        ],
        onsiteTitle: "On-site Event Protocol (Auditions/Sets/Events)",
        onsite: [
          "Strict Check-in/Check-out system with mandatory guardian confirmation.",
          "All staff must wear verified institutional identification at all times.",
          "Mandatory Emergency Plan: Accessible medical points, emergency contacts, and evacuation routes.",
          "Data Retention: Clear policy on imagery usage and storage limits (Standard: 90 or 180 days)."
        ],
        cta: "Download Checklist"
      },
      p4: {
        title: "Complaint, Investigation & Remedy",
        response: "Unified portal with a guaranteed response within 24–72 hours.",
        levelsTitle: "Tiered Incident Triage",
        levels: [
          "Level 1: Information correction or clarification request.",
          "Level 2: Fee dispute arbitration and refund mediation.",
          "Level 3: Fraud or minor safety risk (Triggers immediate registry suspension)."
        ],
        outcomesTitle: "Regulatory Results",
        outcomes: [
          "Warning: Formal reprimand and mandatory rectification.",
          "Suspended: Temporary removal from the GFA Verified Directory.",
          "Revoked: Permanent blacklisting and legal referral to state authorities."
        ],
        cta: "Track Case Status/Report Violation"
      }
    },
    resources: {
      title: "Safeguarding Resource Center",
      items: [
        { title: "Parental Safety Guide", desc: "Essential checkpoints for registration, auditions, and contract signing." },
        { title: "Fair Contract Template", desc: "Pre-vetted clauses to prevent predatory 'Pay-to-Play' terms." },
        { title: "Scam Tactics Database", desc: "Live updates on common industry fraudulent methods and red flags." },
        { title: "Revoked Entities List", desc: "Public disclosure of organizations permanently banned for safety violations." }
      ]
    }
  },
  protection: {
    title: "Youth & Child Protection First",
    subtitle: "Safety is not optional. Protection is mandatory.",
    modelTitle: "Protection Framework",
    modelBody: "GFA establishes the standards for child safety on sets and in training environments.",
    modelItems: [
      "Verified Opportunities Only",
      "Fee Transparency Policy",
      "Minor Safeguarding Standards",
      "Complaint & Investigation System"
    ],
    safeguards: [
      { 
        title: "Verified Access", 
        items: [
          "No anonymous recruitment",
          "Project-tied auditions",
          "Authorized production contacts",
          "Vetted project existence"
        ] 
      },
      { 
        title: "Fee Policy", 
        items: [
          "No forced training",
          "No mandatory portfolios",
          "No pay-to-play",
          "Clearly disclosed costs"
        ] 
      },
      { 
        title: "Minor Standards", 
        items: [
          "Parent awareness required",
          "No private meetings",
          "Safe venues required",
          "Traceable communication"
        ] 
      }
    ],
    zeroTitle: "Zero-Tolerance Policy",
    zeroDesc: "Any institution failing the $50,000 bond requirement or violating minor safety protocols is immediately suspended.",
    reportTitle: "Report a Concern",
    reportDesc: "If you have been asked to pay for an audition or encountered an unbonded school, report it now.",
    reportCta: "Report a Concern"
  },
  verify: {
    title: "Verify an Audition",
    body: "Enter a Project ID, Bond Voucher, or Agency License to verify its statutory compliance before attending an audition or signing a contract.",
    form: {
      label: "GFA Bond ID / Project ID",
      placeholder: "GFA-BOND-XXXX or PROJ-2024-XXXX",
      button: "Verify Status"
    },
    result: {
      valid: "Legally Bonded • Audition Verified",
      expired: "Status Expired • Proceed with Caution",
      suspended: "Violation Reported • Do Not Pay Fees",
      notFound: "Unverified • High Fraud Risk",
      details: "Status: Compliant • Bond: $50,000 (Met) • Audited by GFA"
    },
    note: "LEGAL WARNING: Charging for an audition is illegal in California. If you are asked for money to audition, report it."
  },
  certification: {
    title: "Certification & Vetting",
    subtitle: "Only Certified & Verified Organizations are listed in our Public Registry.",
    typesTitle: "Certified & Verified Organizations Only",
    types: [
      "Talent Agencies: Licensed, contract-compliant, and financially transparent representation.",
      "Modeling Agencies: No forced purchases, real partnerships, safe supervision for minors.",
      "Auditions & Casting: Project-verified, fee-transparent, and publicly traceable.",
      "Management: Professional career planning with defined deliverables and ethical conduct.",
      "Training Providers: Qualified instructors, fair contracts, and child-safe environments."
    ],
    govTitle: "Mandatory Disclosures",
    processTitle: "Certification SOP",
    processBody: "Filing → Audit → Site Visit → Score Approval → Registry Entry",
    valueTitle: "GFA Universal Red-Lines",
    valueBullets: [
      "No Fake Credentials: Zero tolerance for document forgery.",
      "No Bundled Fees: Opportunities must not be conditioned on paid training.",
      "No Job Guarantees: Promises of casting are legally defined as fraud.",
      "Minor Safeguarding: Absolute compliance with parental privacy/safety."
    ],
    cta: "View Certification Standards",
    verifyCardTitle: "Public Registry",
    verifyCardBody: "Every certified entity must disclose its Bond ID, status, and location for public verification.",
    steps: ['Application Intake', 'ID Verification', 'Contract Sampling', 'Site Audit', 'Risk Assessment', 'Registry Posting', 'Annual Review']
  },
  governance: {
    title: "Institutional Governance",
    subtitle: "Assisting the state in managing the $50,000 guarantee fund system.",
    roleTitle: "GFA Supervisory Mandate",
    roleBody: "GFA operates as an independent liaison assisting the state. Our mandate is to supervise the collection and verification of the $50,000 bond for all cinematic organizations.",
    roleTag1: "Bond Oversight",
    roleTag1Desc: "Supervising the $50k statutory guarantee fund.",
    roleTag2: "Entity Vetting",
    roleTag2Desc: "Auditing organizational authenticity for state compliance.",
    principlesTitle: "Oversight Principles",
    principles: [
      { title: "State Bond Compliance", body: "Ensuring the mandatory $50,000 deposit is maintained by all profit-seeking entities." },
      { title: "Anti-Fraud Verification", body: "Assisting the state in identifying and blacklisting 'shadow' agencies without physical premises." },
      { title: "Transparent Registry", body: "Providing a public portal for the verification of bond voucher numbers." }
    ],
    policyTitle: "Governance Deliverables",
    policyBody: "Frameworks for transparent industry auditing and bond verification.",
    policyItems: ["Bond Voucher Registry", "Entity Authenticity Database", "Statutory Fee Guidelines"],
    policyNote: "Non-compliant entities are immediately reported to State Government authorities."
  },
  standards: {
    title: "Certification Standards",
    subtitle: "Technical requirements for 5 major categories. Each module covers Scope, Process, and Fees.",
    catA: {
      title: "Talent Agency",
      tag: "CAT-01",
      scope: "Representation, referrals, and contract negotiation.",
      docsTitle: "Audit Checklist",
      docs: ["DLSE License & Bond Receipt", "Standard Agency Contract", "Fee Disclosure", "Minor SOP"],
      matrixTitle: "Assessment Matrix",
      matrixBody: "Scope: Professional representation. Fees: Commission-only (Capped). Oversight: Quarterly sampling. Appeal: 30-day review period.",
      disqual: "Revocation for: Job guarantees, inducing high payments, or minor safety breach."
    },
    catB: {
      title: "Modeling Agency",
      tag: "CAT-02",
      scope: "Runway, Commercial, and E-commerce representation.",
      docsTitle: "Audit Checklist",
      docs: ["Portfolio/Client Proof", "Business Premise Audit", "Financial History", "Safety Manual"],
      matrixTitle: "Core Standards",
      matrixBody: "Scope: Global Modeling. Process: Brand verification. Fees: No forced portfolios. Oversight: Site visits.",
      disqual: "Revocation for: Forced services or fabricated luxury partnerships."
    },
    catC: {
      title: "Casting Call",
      tag: "CAT-03",
      scope: "Public casting calls for Film, TV, and Digital production.",
      docsTitle: "Audit Checklist",
      docs: ["Project Authorization", "Role Requirements", "Procedure Manual", "Data Policy"],
      matrixTitle: "Casting Ethics",
      matrixBody: "Scope: Project-specific recruitment. Process: Authorization audit. Fees: $0 (Illegal to charge). Oversight: Public registry audit.",
      disqual: "Revocation for: Fake projects, pay-to-play schemes, or minor violations."
    },
    catD: {
      title: "Management",
      tag: "CAT-04",
      scope: "Talent/Career management and brand strategy.",
      docsTitle: "Audit Checklist",
      docs: ["Deliverables SOP", "Pricing Disclosure", "Service Template", "Success Records"],
      matrixTitle: "Governance",
      matrixBody: "Scope: Career Planning. Process: Milestone review. Fees: Retainer transparency. Oversight: Ethics review.",
      disqual: "Revocation for: False promises or non-delivery of service."
    },
    catE: {
      title: "Training",
      tag: "CAT-05",
      scope: "Acting, modeling, and performance arts training.",
      docsTitle: "Audit Checklist",
      docs: ["Curriculum Outline", "Instructor Credentials", "Safety/Insurance", "Refund Policy"],
      matrixTitle: "Educational Integrity",
      matrixBody: "Scope: Professional Training. Process: Faculty vetting. Fees: Refund guarantee required. Oversight: Random audit.",
      disqual: "Revocation for: Fraudulent credentials or unresolved refund disputes."
    }
  },
  transparency: {
    title: "Fee Transparency & Bonding",
    subtitle: "Clear guidelines on statutory fee caps and bond verification.",
    tableTitle: "Statutory Fee Guidelines",
    tableHeaders: ["Service Type", "Standard Fee", "Mandatory", "Supervisory Note", "Refundable"],
    rulesTitle: "Bond Transparency Rules",
    rules: [
      "Every fee-charging service must provide a bond voucher.",
      "Hidden membership upsells are prohibited.",
      "Fees for project access must be clearly disclosed."
    ],
    protectionTitle: "Audit Safeguards",
    protectionRules: [
      "Physical site audits required for certification.",
      "Monthly sampling of service contracts.",
      "Immediate suspension for bond expiration."
    ],
    enforcementTitle: "Enforcement Actions",
    enforcementItems: ["Bond Forfeiture", "Registry Removal", "State Legal Referral"]
  },
  directory: {
    title: "Public Certification Registry",
    subtitle: "Search and verify any organization’s certification status, validity, and complaint history.",
    registryCount: "Certified Entities",
    tableHeaders: ["Entity Name", "Voucher / ID", "Type", "Status", "Risk / History"],
    statuses: { active: "Bonded", pending: "Auditing", blocked: "Frozen", rev: "Revoked" },
    note: "Supervision Notice: Engaging with unverified entities is high-risk. Transparency builds trust."
  },
  reporting: {
    title: "Report Fraud",
    subtitle: "File a formal complaint or bond claim against an industry entity.",
    formTitle: "Official Violation Filing",
    formLabels: { type: "Violation Category", org: "Entity Name", desc: "Statement", email: "Your Contact", submit: "Report Fraud" },
    reportTypes: ["Bond/Refund Fraud", "Fake Identity / Shadow Office", "Unsafe Environment", "Minor Safety Breach", "Statutory Fee Violation"],
    processTitle: "Resolution Lifecycle",
    process: [
      { s: "Filing", d: "Report logged with Supervisory Liaison." },
      { s: "Audit", d: "Verification of bond and office authenticity." },
      { s: "Ruling", d: "Arbitration using State-aligned standards." },
      { s: "Payout", d: "Recourse from the $50k bond pool if valid." }
    ],
    outcomesTitle: "Regulatory Outcomes",
    outcomes: ["Bond Payout Order", "ID Revocation", "State Legal Referral", "Permanent Blacklisting"]
  },
  support: {
    title: "Supporting the Next Generation of Filmmakers",
    subtitle: "From graduation to professional production.",
    intro: "The GFA Foundation supports emerging creators through grants, incubator programs, and equipment access.",
    programsTitle: "Programs",
    p1Title: "Emerging Filmmaker Incubator",
    p1Bullets: ["Script workshops", "Budget planning", "Production strategy", "Industry mentorship"],
    p2Title: "Micro Grants & Production Support",
    p2Bullets: ["Equipment", "Post-production", "Festival submissions", "Distribution materials"],
    p3Title: "Mentorship & Distribution",
    p3Bullets: ["Monthly advisory sessions", "Portfolio reviews", "Festival pathways", "DCP preparation"],
    howTitle: "Access the Support Network",
    howBody: "Proposal → Merit Audit → Resource Matching → Oversight",
    transparencyTitle: "Equipment Bank",
    transparencyBody: "Access to film equipment including lighting, audio, and camera accessories for certified students and projects.",
    cta: "Apply for Programs"
  },
  casting: {
    title: "Verified Opportunities",
    intro: "Connecting certified talent with vetted production opportunities in a governed environment.",
    featuresTitle: "Matching Protocols",
    features: ["Vetted Production Access", "Parental Guardian Portal", "Agent-Project Match", "Secure Identity Routing", "GFA Portfolio Seals"],
    ctaBrowse: "Explore Registry",
    ctaPost: "Post Audition (Bonded Only)",
    note: "Casting access is limited to organizations with an active Bond ID.",
    protectionTitle: "Talent Safety",
    protectionDesc: "Only authorized productions can access the minor talent database."
  },
  membership: {
    title: "GFA Membership",
    intro: "Professional protection and certified status for the global film community.",
    talentTitle: "Individual Tiers",
    orgTitle: "Institutional Tiers",
    talentTiers: [
      { name: 'Standard', price: '$0', perks: ['Directory Entry', 'Basic Support'] },
      { name: 'Certified', price: '$80/yr', perks: ['Verification Seal', 'Bond Protection', 'Priority Casting'] },
      { name: 'Elite', price: '$250/yr', perks: ['VFX/Thesis Grants', 'Free Equipment', 'Legal Aid'], recommended: true }
    ],
    orgTiers: [
      { name: 'Verified', price: '$0', perks: ['Entry Listing', 'Basic Governance'] },
      { name: 'Certified', price: '$1200/yr', perks: ['Trust Seal', 'Bond Verification', 'Audited Status'] },
      { name: 'Foundational', price: '$3000/yr', perks: ['Priority Partnership', 'Full Governance Integration'] }
    ],
    entTitle: "Government & Commissions",
    entDesc: "Custom oversight frameworks for film boards and national bodies.",
    entCta: "Contact Institutional Division"
  },
  partners: {
    title: "Trusted by Industry & Community Partners",
    intro: "GFA collaborates with production studios, schools, and institutions to ensure safer opportunities worldwide.",
    catLabel: "Sector",
    countryLabel: "Region",
    found: "Matched {n} Partners",
    card: { benefit: "Member Advantage", eligibility: "Trust Tier", address: "Location" }
  },
  events: {
    title: "Authorized Events",
    intro: "Sanctioned competitions and the Golden Feather Awards.",
    sections: { competitions: "GFA Circuit", screenings: "Vetted Premieres", workshops: "Ethics Training" },
    cta: "Submit Entry",
    note: "Only authorized events contribute to GFA professional standing.",
    eventStatus: ["Award Eligible", "Verified Showcase", "Certified Lab"]
  },
  contact: {
    title: "Contact the Alliance",
    intro: "Official communication for governance, certification, and aid.",
    labels: { individual: "Talent", organization: "Institution", merchant: "Partner", join: "Join", inquiries: "Support", press: "Press" },
    form: { name: "Name/Entity", email: "Contact Email", location: "Region", cat: "Tier", orgType: "Sector", message: "Inquiry Details", consent: "I agree to the GFA Governance Charter.", submit: "Send Request", header: "{type} Portal" }
  },
  policies: {
    privacy: {
      title: "Data Privacy",
      summary: "Protecting talent identities and minor records.",
      sections: { Security: "AES-256 encryption.", Usage: "Governance verification only." }
    },
    terms: {
      title: "Governance Terms",
      summary: "The rules of the GFA ecosystem.",
      sections: { Compliance: "Mandatory bond status.", Ethics: "Zero fraud tolerance." }
    },
    parental: {
      title: "Guardian Protocol",
      summary: "Safeguards for children in the film industry.",
      sections: { Control: "Guardian pre-authorization.", Rights: "Mandatory set access." }
    },
    content: {
      title: "Content Code",
      summary: "Ethical production standards.",
      sections: { Integrity: "Verifiable credits.", Ethics: "Fair representation." }
    }
  },
  footer: {
    verification: "Search Registry",
    privacy: "Privacy",
    terms: "Terms",
    parental: "Safeguarding",
    content: "Ethics",
    copyright: "© {year} GFA Alliance. Governing Industry Excellence.",
    desc: "Independent certification for global film standards, youth protection, and statutory bond verification."
  },
  language: { en: "English", zh: "Chinese", es: "Spanish", fr: "French", it: "Italian" }
};

const ZH_JSON: Translation = {
  ...EN_JSON,
  meta: { siteName: "GFA 全球电影联盟", tagline: "认证 • 合规 • 保护" },
  nav: {
    home: "首页",
    about: "协助监督",
    certification: "合规与保证金",
    certGov: {
      overview: "概览",
      verify: "保证金查验",
      governance: "监督准则",
      standards: "审查标准",
      transparency: "保证金透明度",
      protection: "青少年保护",
      directory: "已缴纳名录",
      reporting: "报告违规",
      safeguarding: "青少年保护权威"
    },
    support: "扶持计划",
    casting: "全球人才",
    membership: "会员体系",
    partners: "合作伙伴",
    events: "授权活动",
    contact: "联系 / 加入",
    verify: "验证编号",
    policies: "政策条款",
    language: "语言"
  },
  common: {
    ...EN_JSON.common,
    submit: "提交",
    loading: "正在核对官方记录...",
    searchRegistry: "官方保证金查询"
  },
  home: {
    hero: {
      title: "全球电影联盟 (GFA)",
      subtitle: "认证 · 合规 · 保护 | 守护青少年人才与独立电影专业人士的全球权威机构",
      body: "我们建立行业标准，认证合法机构，保护未成年人免受剥削，并连接全球电影和娱乐生态系统中的经核实机遇。",
      ctaPrimary: "申请认证",
      ctaSecondary: "核实试镜",
      badge: "行业权威 • 法定合规监督",
      tags: { cert: "权威认证", gov: "行业保护", prot: "合规准入" }
    },
    trust: {
      badge: "独立行业权威机构",
      title: "致力于提高透明度、安全性和专业性的非营利行业标准组织。",
      body: "与商业机构或培训提供商不同，GFA 不出售代理或服务。我们制定标准、验证合法性并保护参与者。",
      passportTitle: "权威角色",
      passportSubtitle: "合规与监督机构",
      auditItems: ["认证权威", "合规与监督机构", "青少年保护倡导者", "行业资源连接者"]
    },
    stats: {
      certifiedTalents: "已认证名录",
      verifiedInstitutions: "已缴纳机构",
      supportedProjects: "影响力成果",
      partnerMerchants: "授权合作伙伴"
    },
    pillars: {
      title: "为什么需要 GFA",
      subtitle: "解决虚假试镜、隐藏费用和剥削未成年人的风险。",
      p1Title: "虚假试镜",
      p1Body: "消除虚假选角通知和关于“必拿角色”的虚假承诺。",
      p2Title: "隐藏费用",
      p2Body: "强制捆绑销售和“付费试镜”等掠夺性招募计划。",
      p3Title: "不安全环境",
      p3Body: "剥削未成年人以及缺乏实地运营审计。",
      p4Title: "虚假承诺",
      p4Body: "将承诺的角色或合同定性为掠夺性营销并予以取缔。",
      p5Title: "无监管实体",
      p5Body: "打击在没有州政府保证金或核实执照的情况下运营的机构。",
      explore: "搜索名录"
    },
    closing: {
      title: "公共认证名录",
      body: "透明度建立信任。在我们的实时数据库中搜索并核实任何机构的认证状态、有效期和投诉历史。",
      cta: "搜索名录"
    }
  },
  safeguarding: {
    title: "青少年保护权威 (Safeguarding)",
    subtitle: "确保未成年人在创意产业中享有透明、可追溯且负责任的环境。",
    mission: "我们建立面向未成年演艺活动的行业安全标准，减少诈骗与伤害，确保试镜、培训、经纪与赛事活动在透明、可追溯、可申诉的框架下运行。",
    pillars: {
      p1: {
        title: "机会验证",
        items: [
          "试镜/招募必须绑定可核验项目（制片/选角联系人可验证）。",
          "发布前必须完成：身份核验、项目证明核验、招募流程核验。",
          "所有“Verified Audition”均带有独立验证编号与官方查询页面。",
          "严禁发布匿名招募或无具体项目的虚构招聘。"
        ],
        cta: "核实一个试镜"
      },
      p2: {
        title: "收费透明与反捆绑",
        items: [
          "任何收费必须公开：明确金额、用途、是否可选及退款条件。",
          "严禁强制捆绑：严禁以“必须买课/摄影包/作品集”作为给予试镜机会的前提。",
          "对“超出行业合理范围收费”启动风险审查与强制成本披露制度。",
          "建立针对隐藏费用与“付费试镜”骗局的专项举报通道。"
        ],
        cta: "查看收费准则"
      },
      p3: {
        title: "未成年人安全规则",
        redLinesTitle: "强制规则 (法律红线)",
        redLines: [
          "监护人知情权：未成年人试镜与沟通，监护人必须全程知情并拥有陪同权。",
          "禁止私下会面：严禁未成年人与陌生成年人进行无监管的单独线下见面。",
          "隐私保护红线：禁止索取住址、家庭财务、敏感影像等非必要隐私信息。",
          "沟通可追溯：所有专业沟通必须通过官方邮件或平台记录，确保有据可查。"
        ],
        onsiteTitle: "现场活动安全要求 (试镜/拍摄/赛事)",
        onsite: [
          "严格的签到/签退制度，必须由监护人实名确认。",
          "所有现场工作人员必须持有并佩戴统一的身份标识。",
          "必须具备应急预案：包含紧急联系人、医疗点及安全疏散方案。",
          "影像使用授权：明确影像存储期限（建议 90 天或 180 天）及使用范围声明。"
        ],
        cta: "下载安全清单"
      },
      p4: {
        title: "投诉、调查与救济",
        response: "统一投诉入口，GFA 承诺在 24–72 小时内响应受理。",
        levelsTitle: "分级调查机制",
        levels: [
          "Level 1: 信息纠错与解释说明请求。",
          "Level 2: 费用纠纷调解与强制退款复核。",
          "Level 3: 涉嫌欺诈或未成年人安全风险（立即暂停名录公示）。"
        ],
        outcomesTitle: "监管处理决定",
        outcomes: [
          "警告 (Warning): 强制纠正及合规约谈。",
          "暂停 (Suspended): 暂时移出公共认证名录，进入观察期。",
          "吊销 (Revoked): 永久黑名单，并移交州政府司法渠道。"
        ],
        cta: "查询进度/举报"
      }
    },
    resources: {
      title: "安全资源中心",
      items: [
        { title: "家长安全指南", desc: "报名、试镜与合同时的关键风险点避坑指南。" },
        { title: "标准合规合同模板", desc: "防止“付费入组”等霸王条款的权威模板。" },
        { title: "常见诈骗手法库", desc: "实时更新的行业陷阱预警与真实案例拆解。" },
        { title: "违规吊销名单", desc: "被永久封禁并移交法办的违规机构公开公示。" }
      ]
    }
  },
  footer: {
    verification: "搜索名录",
    privacy: "隐私",
    terms: "条款",
    parental: "监护安全",
    content: "职业伦理",
    copyright: "© {year} GFA 全球电影联盟。引领行业卓越。",
    desc: "独立的全球电影标准认证机构，专注于青少年保护与法定保证金核验。"
  },
  language: { en: "English", zh: "中文", es: "ES", fr: "FR", it: "IT" }
};

const ES_JSON: Translation = {
  ...EN_JSON,
  meta: { siteName: "GFA Global Film Alliance", tagline: "Certificación • Cumplimiento • Protección" },
  nav: {
    home: "Inicio",
    about: "Supervisión",
    certification: "Cumplimiento y Garantía",
    certGov: {
      overview: "Resumen",
      verify: "Verificación de Fianza",
      governance: "Principios de Supervisión",
      standards: "Estándares de Evaluación",
      transparency: "Transparencia de Fianza",
      protection: "Protección Juvenil",
      directory: "Directorio Asegurado",
      reporting: "Reportar Violación",
      safeguarding: "Autoridad de Protección"
    },
    support: "Programas de Apoyo",
    casting: "Talento Global",
    membership: "Membresía",
    partners: "Socios",
    events: "Eventos",
    contact: "Contacto",
    verify: "Verificar Fianza",
    policies: "Políticas",
    language: "Idioma"
  },
  common: {
    ...EN_JSON.common,
    learnMore: "Saber más",
    getStarted: "Comenzar",
    applyNow: "Postular ahora",
    joinNow: "Unirse ahora",
    submit: "Enviar",
    loading: "Verificando registros oficiales...",
    searchRegistry: "Búsqueda de Fianza"
  },
  home: {
    ...EN_JSON.home,
    hero: {
      ...EN_JSON.home.hero,
      title: "Alianza Global del Cine (GFA)",
      subtitle: "Certificación · Cumplimiento · Protección | La Autoridad Global para el Talento Juvenil",
      ctaPrimary: "Certificarse",
      ctaSecondary: "Verificar Audición"
    },
    closing: {
      ...EN_JSON.home.closing,
      title: "Registro Público de Certificación",
      cta: "Buscar en el Registro"
    }
  },
  about: {
    ...EN_JSON.about,
    title: "Supervisión de California",
    mandate: { title: "Ética de la Industria", body: "GFA opera como enlace independiente para monitorear el cumplimiento, con enfoque en el fondo de garantía de $50,000." }
  },
  support: {
    ...EN_JSON.support,
    title: "Apoyando a la Próxima Generación",
    programsTitle: "Programas",
    cta: "Postular a Programas"
  },
  casting: {
    ...EN_JSON.casting,
    title: "Oportunidades Verificadas",
    intro: "Conectando talento certificado con oportunidades de producción en un entorno gobernado."
  },
  membership: {
    ...EN_JSON.membership,
    title: "Membresía GFA",
    intro: "Protección profesional y estatus certificado para la comunidad cinematográfica mundial."
  },
  partners: {
    ...EN_JSON.partners,
    title: "Aliados de Confianza",
    found: "{n} Socios Encontrados"
  },
  events: {
    ...EN_JSON.events,
    title: "Eventos Autorizados",
    cta: "Enviar Inscripción"
  },
  footer: {
    ...EN_JSON.footer,
    verification: "Buscar Registro",
    desc: "Certificación independiente para estándares globales, protección juvenil y fianza estatutaria."
  },
  language: { en: "English", zh: "Chino", es: "Español", fr: "Francés", it: "Italiano" }
};

const FR_JSON: Translation = {
  ...EN_JSON,
  meta: { siteName: "GFA Global Film Alliance", tagline: "Certification • Conformité • Protection" },
  nav: {
    home: "Accueil",
    about: "Supervision",
    certification: "Conformité et Caution",
    certGov: {
      overview: "Aperçu",
      verify: "Vérification de Caution",
      governance: "Principes de Supervision",
      standards: "Normes d'Évaluation",
      transparency: "Transparence des Cautions",
      protection: "Protection de la Jeunesse",
      directory: "Annuaire des Cautionnés",
      reporting: "Signaler une Violation",
      safeguarding: "Autorité de Protection"
    },
    support: "Programmes d'Aide",
    casting: "Talents Mondiaux",
    membership: "Adhésion",
    partners: "Partenaires",
    events: "Événements",
    contact: "Contact",
    verify: "Vérifier la Caution",
    policies: "Politiques",
    language: "Langue"
  },
  common: {
    ...EN_JSON.common,
    learnMore: "En savoir plus",
    getStarted: "Commencer",
    submit: "Envoyer",
    loading: "Vérification des registres officiels...",
    searchRegistry: "Recherche de Caution"
  },
  home: {
    ...EN_JSON.home,
    hero: {
      ...EN_JSON.home.hero,
      title: "Alliance Mondiale du Cinéma (GFA)",
      subtitle: "Certification · Conformité · Protection | L'Autorité Mondiale pour la Protection des Jeunes Talents",
      ctaPrimary: "Obtenir la Certification",
      ctaSecondary: "Vérifier une Audition"
    },
    closing: {
      ...EN_JSON.home.closing,
      title: "Registre Public de Certification",
      cta: "Rechercher dans le Registre"
    }
  },
  about: {
    ...EN_JSON.about,
    title: "Supervision de Californie",
    mandate: { title: "Gouvernance de l'Éthique", body: "GFA agit en tant que liaison indépendante pour surveiller la conformité, centrée sur le fonds de garantie de 50 000 $." }
  },
  support: {
    ...EN_JSON.support,
    title: "Soutenir la Prochaine Génération",
    programsTitle: "Programmes",
    cta: "Postuler aux Programmes"
  },
  casting: {
    ...EN_JSON.casting,
    title: "Opportunités Vérifiées",
    intro: "Connecter les talents certifiés avec des opportunités de production dans un environnement gouverné."
  },
  membership: {
    ...EN_JSON.membership,
    title: "Adhésion GFA",
    intro: "Protection professionnelle et statut certifié pour la communauté cinématographique mondiale."
  },
  partners: {
    ...EN_JSON.partners,
    title: "Partenaires de Confiance",
    found: "{n} Partenaires Trouvés"
  },
  events: {
    ...EN_JSON.events,
    title: "Événements Autorisés",
    cta: "Soumettre une Entrée"
  },
  footer: {
    ...EN_JSON.footer,
    verification: "Rechercher Registre",
    desc: "Certification indépendante pour les normes mondiales, la protection de la jeunesse et le cautionnement statutaire."
  },
  language: { en: "Anglais", zh: "Chinois", es: "Espagnol", fr: "Français", it: "Italien" }
};

const IT_JSON: Translation = {
  ...EN_JSON,
  meta: { siteName: "GFA Global Film Alliance", tagline: "Certificazione • Conformità • Protezione" },
  nav: {
    home: "Home",
    about: "Supervisione",
    certification: "Conformità e Fideiussione",
    certGov: {
      overview: "Panoramica",
      verify: "Verifica Fideiussione",
      governance: "Principi di Supervisione",
      standards: "Standard di Valutazione",
      transparency: "Trasparenza Fideiussoria",
      protection: "Protezione della Gioventù",
      directory: "Elenco Certificati",
      reporting: "Segnala Violazione",
      safeguarding: "Autorità di Protezione"
    },
    support: "Programmi di Sostegno",
    casting: "Talento Globale",
    membership: "Iscrizione",
    partners: "Partner",
    events: "Eventi",
    contact: "Contatti",
    verify: "Verifica Fideiussione",
    policies: "Politiche",
    language: "Lingua"
  },
  common: {
    ...EN_JSON.common,
    learnMore: "Scopri di più",
    getStarted: "Inizia ora",
    submit: "Invia",
    loading: "Verifica dei registri ufficiali...",
    searchRegistry: "Ricerca Fideiussione"
  },
  home: {
    ...EN_JSON.home,
    hero: {
      ...EN_JSON.home.hero,
      title: "Alleanza Mondiale del Cinema (GFA)",
      subtitle: "Certificazione · Conformità · Protezione | L'Autorità Globale per la Protezione dei Giovani Talenti",
      ctaPrimary: "Ottieni la Certificazione",
      ctaSecondary: "Verifica un Provino"
    },
    closing: {
      ...EN_JSON.home.closing,
      title: "Registro Pubblico di Certificazione",
      cta: "Cerca nel Registro"
    }
  },
  about: {
    ...EN_JSON.about,
    title: "Supervisione California",
    mandate: { title: "Governo dell'Etica", body: "GFA opera come collegamento indipendente per monitorare la conformità, focalizzato sul fondo di garanzia di $50.000." }
  },
  support: {
    ...EN_JSON.support,
    title: "Sostenere la Prossima Generazione",
    programsTitle: "Programmi",
    cta: "Candidati ai Programmi"
  },
  casting: {
    ...EN_JSON.casting,
    title: "Opportunità Verificate",
    intro: "Collegare talenti certificati con opportunità di produzione in un ambiente governato."
  },
  membership: {
    ...EN_JSON.membership,
    title: "Iscrizione GFA",
    intro: "Protezione professionale e status certificato per la comunità cinematografica mondiale."
  },
  partners: {
    ...EN_JSON.partners,
    title: "Partner di Fiducia",
    found: "{n} Partner Trovati"
  },
  events: {
    ...EN_JSON.events,
    title: "Eventi Autorizzati",
    cta: "Invia Iscrizione"
  },
  footer: {
    ...EN_JSON.footer,
    verification: "Cerca Registro",
    desc: "Certificazione indipendente per gli standard globali, la protezione della gioventù e la fideiussione statutaria."
  },
  language: { en: "Inglese", zh: "Cinese", es: "Spagnolo", fr: "Francese", it: "Italiano" }
};

export const DICTIONARIES: Record<Locale, Translation> = {
  [Locale.EN]: EN_JSON,
  [Locale.ZH]: ZH_JSON,
  [Locale.ES]: ES_JSON,
  [Locale.FR]: FR_JSON,
  [Locale.IT]: IT_JSON,
};
