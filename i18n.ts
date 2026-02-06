
import { Locale } from './types';

const EN_JSON: any = {
  meta: { 
    siteName: "GFA Global Film Alliance", 
    tagline: "Industry Standards • Child Protection • Transparency" 
  },
  nav: {
    home: "Home",
    certification: "Certification",
    childSafety: "Child Safety",
    graduateSupport: "Graduate Support",
    registry: "Public Registry",
    complaints: "Reporting",
    about: "About GFA",
    memberPortal: "Member Access",
    admin: "Console",
    governance: "Governance",
    standards: "Standards",
    partners: "Partners",
    membership: "Membership",
    events: "Events",
    casting: "Casting"
  },
  common: {
    loading: "Accessing Official Registry...",
    searchRegistry: "Search Directory",
    searchPlaceholder: "Search by Name, GFA ID, or Location...",
    required: "Statutory Mandatory",
    optional: "Recommended",
    reset: "Reset Filters",
    filters: "Institutional Filters",
    category: "Org Category",
    level: "Cert Level",
    status: "Validity",
    city: "City",
    country: "Country",
    sort: "Sort By",
    results: "Institutional Records Found"
  },
  safeguarding: {
    title: "Youth Protection & Audition Verification Center",
    subtitle: "Protecting minors through strict institutional auditing and audition transparency.",
    mission: "GFA maintains a zero-tolerance policy for predatory behavior. Our safeguarding framework provides families with the tools to verify the legitimacy of auditions, training programs, and talent competitions.",
    verificationTool: {
      title: "Real-time Audition & Event Verification",
      placeholder: "Enter Audition ID or Event Name...",
      btn: "Verify Status",
      note: "Search for GFA-verified film, commercial, or model casting calls."
    },
    categories: {
      title: "Vertical Protection Domains",
      film: { title: "Film & TV Casting", d: "Verification of project financing and physical studio legitimacy for long-form content." },
      commercial: { title: "Commercial Auditions", d: "Auditing of production agencies and fee-related transparency for advertising." },
      model: { title: "Modeling & Fashion", d: "Strict monitoring of portfolio fee mandates and agency background checks." },
      events: { title: "Youth Competitions", d: "Accreditation of talent competitions and award ceremonies for children." }
    },
    redFlags: {
      title: "Unreasonable Procedures & Red Flags",
      subtitle: "Avoid any entity or audition that engages in the following prohibited practices:",
      list: [
        { t: "Upfront Photo Fees", d: "Mandatory 'portfolio' or 'photo card' fees as a prerequisite for auditions." },
        { t: "Work Guarantees", d: "Promises that a minor is '100% guaranteed' to be cast or get work." },
        { t: "Private Settings", d: "Auditions held in hotels, private residences, or non-commercial spaces." },
        { t: "Unsupervised Sessions", d: "Requirement for minors to be interviewed or auditioned without a guardian present." },
        { t: "Immediate 'Bonds'", d: "Demanding immediate cash 'enrollment fees' or 'security deposits' at the audition site." },
        { t: "Opaque Contracts", d: "Pressure to sign complex documents without 48-hour legal review time." }
      ]
    },
    redLinesTitle: "Zero-Tolerance Red Lines",
    redLines: [
      "Fees for auditions or talent discovery.",
      "Unsupervised contact with minors.",
      "Guarantees of work or casting.",
      "Pressure for upfront professional photography fees."
    ],
    guideTitle: "Parental Toolkit",
    guide: "Always verify the GFA ID of any person or agency claiming to represent your child.",
    cta: "Download Safety Toolkit"
  },
  disclaimer: {
    title: "Institutional Disclaimer",
    legal: "Global Film Alliance (GFA) is an independent nonprofit industry standards and transparency organization. We do not regulate or license government authorities. GFA provides voluntary third-party certification and public verification to support safer industry decisions.",
    body: "Registry listings reflect voluntary participation and disclosed information. Please verify any required licenses or legal obligations independently.",
    zhLegal: "全球电影联盟 (GFA) 是一家独立的非营利行业标准与透明度组织。我们不监管或许可政府机构。GFA 提供自愿的第三方认证和公开核查，以支持更安全的行业决策。"
  },
  home: {
    hero: {
      title: "Global Film Alliance (GFA)",
      subtitle: "Industry Standards • Youth Protection • Public Transparency",
      body: "Empowering the film community through independent certification and structural accountability. Our platform serves as a transparency hub for families and professionals.",
      ctaPrimary: "Apply for Status",
      ctaSecondary: "Search Registry",
      note: "Institutional Status Verified for 2025"
    },
    stats: {
      audited: "500+ Audited Orgs",
      verified: "12k+ Verified Talents",
      countries: "42 Countries Covered",
      safeguarding: "Zero Tolerance Active"
    },
    pillars: {
      title: "The Pillars of Industry Trust",
      subtitle: "GFA maintains the integrity of the cinematic ecosystem through three core operational mandates.",
      p1: { title: "Verification", body: "Rigorous document audits and physical site inspections to ensure institutional legitimacy." },
      p2: { title: "Safeguarding", body: "Zero-tolerance frameworks and background checks to protect minors and vulnerable talent." },
      p3: { title: "Transparency", body: "Standardized fee caps and public disclosure logs to eliminate predatory practices." }
    },
    hubs: {
      title: "Information & Verification Center",
      subtitle: "Real-time verification of institutional certification status, validity, and trust metrics. The GFA database is a critical resource for safe industry decisions.",
      registry: { 
        title: "Public Registry", 
        body: "Comprehensive database of GFA certified film organizations and educational providers.",
        features: ["GFA-ID Verification", "Audit History Search", "Certification Validity"]
      },
      bond: { 
        title: "Bond Verification", 
        body: "Statutory $50,000 bond verification for talent service providers and workshops.",
        features: ["Bond Status Tracking", "Legal Filing Search", "Regulatory Compliance"]
      },
      safety: { 
        title: "Youth Protection", 
        body: "Protocols and red-lines for child safety in professional film environments.",
        features: ["Red-Line Policy", "Parental Toolkit", "Safeguarding Audits"]
      },
      transparency: { 
        title: "Fee Transparency", 
        body: "Public monitoring of fee structures and mandatory transparency disclosures.",
        features: ["Capped Fee Tables", "Disclosure Logs", "Refund Protocol Check"]
      }
    },
    certFramework: {
      title: "Certification Tiers",
      body: "GFA provides a structured tier system based on documentation audit and operational transparency.",
      levels: [
        { title: "GFA Verified", body: "Identity, business registration, and physical office status confirmed." },
        { title: "GFA Certified", body: "Operational transparency and fee structure audit successfully passed." },
        { title: "GFA Accredited", body: "Advanced site audit and child safeguarding protocols verified." }
      ],
      cta: "Full Standards"
    },
    news: {
      title: "Institutional Bulletins",
      items: [
        { date: "MAR 2025", title: "New Safeguarding Protocols for Remote Auditions Published.", type: "Policy" },
        { date: "FEB 2025", title: "Annual Compliance Audit of Training Centers Completed.", type: "Audit" }
      ]
    },
    governance: {
      title: "Charter & Independence",
      body: "GFA operates as an independent nonprofit. we do not represent talent or produce films for profit. Our independence is the core asset of our objective public registry.",
      cta: "Read Charter"
    }
  },
  verify: {
    title: "Official Bond Verification",
    body: "Statutory Verification of $50,000 Surety Bonds for Talent Service Providers. Use this tool to verify the legal filing status of any training center or agency.",
    form: {
      placeholder: "Enter Bond ID or Organization Name...",
      button: "Verify Statutory Status"
    }
  },
  directory: {
    title: "Certification Directory",
    subtitle: "Public listing of all verified and certified entities.",
    registryCount: "Certified Entities",
    tableHeaders: ["Organization", "Period", "Category", "Status", "Audit Ref"]
  },
  reporting: {
    title: "Institutional Reporting",
    subtitle: "File a formal complaint or report an ethical violation for GFA review.",
    formTitle: "Compliance Report Intake",
    formLabels: {
      type: "Violation Category",
      org: "Entity Name",
      desc: "Detailed Incident Description",
      email: "Contact Email",
      submit: "Submit Report to GFA Compliance"
    },
    reportTypes: ["Fee Transparency Violation", "Minor Safeguarding Concern", "Unlicensed Activity", "Contractual Misconduct"],
    processTitle: "Review Process",
    process: [
      { s: "Intake", d: "Report is logged and assigned to a compliance officer." },
      { s: "Audit", d: "Internal review of entity certification history." },
      { s: "Resolution", d: "Correction mandated or certification revoked." }
    ],
    outcomesTitle: "Potential Outcomes",
    outcomes: ["Public Warning", "Score Deduction", "Immediate Revocation", "Referral to Authorities"]
  },
  protection: {
    title: "Institutional Protection",
    subtitle: "Safeguarding the next generation of creative talent.",
    modelItems: ["Zero-Tolerance Audits", "Physical Site Verification", "Background Check Requirement", "Fee Cap Monitoring"]
  },
  contact: {
    title: "Contact GFA",
    intro: "Reach out to our global administration and compliance departments.",
    labels: {
      individual: "Professional",
      organization: "Institutional",
      merchant: "Partner",
      join: "Inquiry",
      inquiries: "General Inquiries",
      press: "Media & Press"
    },
    form: {
      header: "{type} Inquiry",
      name: "Full Name",
      email: "Official Email",
      location: "Primary Region",
      cat: "Partner Category",
      orgType: "Entity Type",
      message: "Message Body",
      consent: "I acknowledge the GFA data privacy terms.",
      submit: "Send Message"
    }
  },
  governance: {
    title: "Governance Charter",
    subtitle: "Structural Independence & Regulatory Oversight",
    roleTitle: "Our Institutional Role",
    roleBody: "The Global Film Alliance functions as an independent, non-profit standard-setting body. Our governance is designed to ensure impartiality in the certification of talent agencies, production studios, and educational providers.",
    roleTag1: "Non-Profit Status",
    roleTag1Desc: "Operating exclusively for the benefit of industry safety and transparency.",
    roleTag2: "Regulatory Liaison",
    roleTag2Desc: "Assisting state and local authorities in enforcing talent service statutes.",
    principlesTitle: "Core Governance Principles",
    principles: [
      { title: "Total Independence", body: "No financial interest in production, casting, or talent representation." },
      { title: "Audit Integrity", body: "All certifications require physical site verification and document audit." },
      { title: "Public Accountability", body: "All disciplinary actions and revocations are listed in the public registry." }
    ],
    policyTitle: "Authorization Policy",
    policyBody: "GFA authorization is a voluntary standard. Entities using the GFA seal must maintain continuous compliance with all local and international labor laws.",
    policyItems: ["Anti-Fraud Compliance", "Minor Protection", "Fee Transparency"],
    policyNote: "Violations result in immediate suspension and public disclosure."
  },
  standards: {
    title: "Industry Standards",
    subtitle: "Technical & Ethical Requirements for Certification",
    catA: { title: "Talent Representation", scope: "Scope: Agencies & Managers", tag: "STATUTORY", docsTitle: "Required Evidence", docs: ["Valid State License", "Mandatory Surety Bond", "Contract Template Disclosure"], matrixBody: "Evaluation includes background check of principals and history of complaint resolution.", disqual: "Illegal upfront fees for auditions." },
    catB: { title: "Educational Providers", scope: "Scope: Schools & Workshops", tag: "TRANSPARENCY", docsTitle: "Required Evidence", docs: ["Course Syllabus", "Fee Schedule", "Instructor Credentials"], matrixBody: "Evaluation of educational value vs marketing claims.", disqual: "Predatory 'guaranteed roles' marketing." },
    catC: { title: "Production Services", scope: "Scope: Studios & Rental", tag: "OPERATIONAL", docsTitle: "Required Evidence", docs: ["Safety Protocols", "Equipment Maintenance Logs"], matrixBody: "Assessment of physical environment and equipment quality.", disqual: "Safety code violations." },
    catD: { title: "Post-Production", scope: "Scope: VFX & Editing", tag: "TECHNICAL", docsTitle: "Required Evidence", docs: ["Data Security Policy", "Work History"], matrixBody: "Technical audit of infrastructure and workflow security.", disqual: "Data breaches." },
    catE: { title: "Casting Directors", scope: "Scope: Independent Casting", tag: "ETHICS", docsTitle: "Required Evidence", docs: ["Project History", "Professional Refs"], matrixBody: "Review of casting practices and participant safety.", disqual: "Sexual harassment or illegal kickbacks." }
  },
  transparency: {
    title: "Transparency Index",
    subtitle: "Standardized Fee Monitoring & Accountability",
    tableTitle: "Mandated Fee Caps & Disclosures",
    tableHeaders: ["Service Type", "GFA Mandated Cap", "Status", "Note", "Audit Ref"],
    rulesTitle: "Standard Rules",
    rules: ["All fees must be disclosed upfront.", "No fees allowed for simple directory entry.", "Casting services must never charge for auditions."],
    protectionTitle: "User Protections",
    protectionRules: ["Right to cancel within 3 days.", "Verified refund protocols.", "Independent arbitration."],
    enforcementTitle: "Enforcement Mechanisms",
    enforcementItems: ["Score Deduction", "Public Warning", "License Revocation"]
  },
  certification: {
    title: "GFA Certification",
    intro: "Setting the standard for excellence and accountability in the global film community.",
    standards: [
      { title: "Institutional Vetting", d: "Deep audit of business registration and tax compliance." },
      { title: "Operational Security", d: "Physical site audits and safety protocol verification." },
      { title: "Ethical Conduct", d: "Verification of non-predatory business practices." }
    ],
    processTitle: "The Audit Process",
    process: [
      { s: "Application", d: "Submit institutional documents and fees." },
      { s: "Desk Review", d: "Verification of statutory bonds and licenses." },
      { s: "Site Audit", d: "Physical inspection of premises and practices." },
      { s: "Decision", d: "Final board review and registry update." }
    ]
  },
  registry: {
    title: "Public Certification Registry",
    subtitle: "Search organizations and verify certification status. Our database serves as a transparency hub for families and professionals.",
    viewDetails: "View Institutional Profile",
    reportConcern: "Report a Concern",
    trustScore: "GFA Trust Index",
    lastReviewed: "Last Audit",
    nextReview: "Next Scheduled Review",
    disclosure: "Public Disclosures",
    transparencyIndicators: "Transparency Indicators",
    disclaimerBody: "Institutional data is verified by GFA audits. This record is a point-in-time snapshot and does not constitute a legal guarantee.",
    resultsFound: "Institutional Records Found",
    scoreLabel: "Transparency Index",
    statusLabels: { active: "Verified Active", suspended: "Suspended", expired: "Expired", revoked: "Revoked" }
  },
  footer: {
    desc: "Independent nonprofit industry standards organization. Promoting accountable and safe film communities.",
    copyright: "© {year} Global Film Alliance. All Rights Reserved."
  },
  complaints: {
    title: "Compliance Intake",
    form: {
      submit: "Submit Complaint"
    }
  },
  about: {
    title: "About Global Film Alliance",
    body: "GFA is a non-profit dedicated to structural integrity in the cinematic arts.",
    mandate: { title: "Our Mandate", body: "Establishing voluntary transparency standards for the global industry." },
    strategy: { title: "Institutional Strategy", body: "Direct document audit and site verification." },
    coreFunctions: { title: "Primary Oversight", items: [{title: "Licensing Assistance", body: "Verifying state compliance."}, {title: "Bond Audit", body: "Ensuring statutory financial security."}, {title: "Fee Monitoring", body: "Preventing predatory pricing."}] },
    youthProtection: { title: "Youth Protection", subtitle: "Zero Tolerance Framework", intro: "Protecting minors is our absolute priority.", pillars: [{title: "Verification", body: "Strict ID and license checks."}, {title: "Policy", body: "Enforced red-line standards."}] },
    accountability: { title: "Accountability Index", body: "Maintaining a living record of industry conduct.", items: [{title: "Registry", label: "Public Database", icon: "📊"}] }
  }
};

const ZH_JSON: any = {
  ...EN_JSON,
  meta: { 
    siteName: "GFA 全球电影联盟", 
    tagline: "行业标准 • 青少年保护 • 信息公示" 
  },
  nav: {
    home: "首页",
    certification: "行业认证",
    childSafety: "青少年保护",
    graduateSupport: "毕业生扶持",
    registry: "可验证公示库",
    complaints: "报告与求助",
    about: "关于我们",
    memberPortal: "会员登录",
    admin: "管理后台",
    governance: "治理章程",
    standards: "行业标准",
    partners: "合作伙伴",
    membership: "会员权益",
    events: "活动与公告",
    casting: "选角中心"
  },
  safeguarding: {
    title: "青少年保护与试镜核查中心",
    subtitle: "通过严格的机构审计与试镜透明度保护未成年人。",
    mission: "GFA 对任何形式的掠夺性行为持零容忍态度。我们的保护框架为家长提供核实试镜、培训计划和人才大赛真实性的工具。",
    verificationTool: {
      title: "实时试镜与赛事核查",
      placeholder: "输入试镜编号、赛事名称或机构名称...",
      btn: "核实状态",
      note: "查询经 GFA 核证的电影、广告或模特选角通知。"
    },
    categories: {
      title: "垂直保护领域",
      film: { title: "影视演员试镜", d: "对影视项目融资真实性、制片方资质及实地办公状态的综合核验。" },
      commercial: { title: "广告试镜 (TVC)", d: "对广告制作机构的审计，重点在于收费透明度及拍摄环境的安全核查。" },
      model: { title: "平面模特试镜", d: "严格监控‘模卡照片费’强制摊派行为，并对模特经纪人进行背景核实。" },
      events: { title: "青少年赛事认证", d: "对各类才艺大赛、模特大赛及颁奖典礼的组织资质与奖项含金量进行认证。" }
    },
    redFlags: {
      title: "不合理程序与违规预警",
      subtitle: "若试镜或培训机构存在以下行为，请务必保持高度警惕并拒绝参与：",
      list: [
        { t: "捆绑收费", d: "以试镜为前提，强制要求缴纳‘模特卡照片费’、‘资料费’或‘存档费’。" },
        { t: "承诺就业/角色", d: "向家长承诺‘100% 进组’、‘保底出演’或‘必拿奖项’的虚假宣传。" },
        { t: "私人场所面试", d: "在酒店房间、私人住宅或其他非公开商业场所进行的单独面试。" },
        { t: "排斥监护人", d: "要求未成年人在没有监护人陪同的情况下进行单独试镜或单独交谈。" },
        { t: "当场强迫交费", d: "在试镜现场以‘名额有限’为由，强迫家长立即缴纳数千元的高额培训费或报名费。" },
        { t: "合同信息隐瞒", d: "强迫家长立即签署复杂合同，且拒绝给予 48 小时的法律顾问审阅期。" }
      ]
    }
  }
};

export const DICTIONARIES: Record<Locale, any> = {
  [Locale.EN]: EN_JSON,
  [Locale.ZH]: ZH_JSON,
  [Locale.ES]: EN_JSON,
  [Locale.FR]: EN_JSON,
  [Locale.IT]: EN_JSON,
};
