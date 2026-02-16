
import { Locale } from './types';

const EN_JSON: any = {
  meta: { siteName: "Global Film Alliance (GFA)", tagline: "Industry Support, Standards & Professional Network" },
  common: {
    loading: "Accessing Records...",
    filters: "Filters",
    reset: "Reset",
    category: "Category",
    level: "Level",
    status: "Status",
    required: "Required",
    optional: "Optional",
    searchPlaceholder: "Search by Name or ID",
    searchRegistry: "Search Registry"
  },
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
      ctaSecondary: "View Programs",
      btnCertify: "Apply for Certification"
    },
    trust: { 
      label: "Official Recognition", 
      badge: "Voluntary • Transparent • Professional",
      guilds: ["Global Production Guild", "Cinematic Arts Council", "Independent Film Bureau"],
      integrity: "Industry Integrity",
      upholding: "Upholding Industry Professionalism",
      professionalismBody: "Professionalism in film relies on collective industry commitment. We provide a neutral channel for professional support and help standardized guidelines for cinematic workplaces worldwide.",
      operational: "Operational"
    },
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
    charter: {
      title: "GFA Charter Status",
      points: ["Independent Institutional Support", "Global Industry Best Practices", "Non-Commercial Service Mandate"]
    },
    globalPresence: {
      title: "Global Strategic Presence", 
      subtitle: "Institutional hubs in key production markets.",
      networkKicker: "Institutional Network",
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
  about: {
    hero: { kicker: "Institutional Profile", title: "About Global Film Alliance", subtitle: "Building the standard for global cinematic excellence and safety." },
    mission: { title: "Our Mission", body: "To provide an independent framework for professional recognition and youth protection in the film industry." },
    vision: { title: "Our Vision", body: "A film industry where every professional and young talent operates in a safe, transparent, and verified environment." },
    whoWeAre: { title: "Institutional Oversight", body: "We are an independent non-profit body dedicated to maintaining cinematic workplace standards." },
    whatWeDo: {
      title: "Our Core Services",
      items: [
        { icon: "⚖️", title: "Standards", desc: "Setting the benchmark for ethical production." },
        { icon: "🛡️", title: "Protection", desc: "Global safeguarding protocols for minors." },
        { icon: "🎓", title: "Support", desc: "Pathways for emerging filmmakers." }
      ]
    },
    certification: { title: "Certification Framework", body: "Our three-tier certification system allows agencies to verify their commitment to best practices." },
    youthProtection: { title: "Zero Tolerance Policy", body: "Ensuring every production environment meets our strict youth safety act." },
    support: { title: "Industry Support", body: "Connecting certified members with exclusive resources and networking." },
    network: { title: "Global Reach", body: "Operating across major film hubs worldwide." },
    governance: { title: "Public Accountability", body: "Governed by a charter of ethics and transparency." },
    impact: {
      title: "Our Impact",
      stats: [{ value: "500+", label: "Certified Entities" }, { value: "12", label: "Countries" }, { value: "A+", label: "Trust Rating" }, { value: "24/7", label: "Oversight" }]
    },
    cta: { title: "Join the Alliance", body: "Signal your commitment to professional industry standards today.", button: "Inquire Now" }
  },
  safeguarding: {
    title: "Youth Safeguarding Oversight",
    subtitle: "Maintaining the industry's highest standards for minor welfare.",
    policyLink: "View Full Policy",
    reportingCta: "Report a Concern",
    verificationTool: { title: "Verify Project Registration", placeholder: "Enter GFA-ID...", btn: "Audit Now", note: "Verification of official casting calls and events." },
    categories: {
      title: "Regulated Domains",
      film: { title: "Motion Pictures", d: "Protection on theatrical film sets." },
      commercial: { title: "Advertising", d: "Compliance for commercial productions." },
      model: { title: "Modeling", d: "Safeguarding in fashion and photography." },
      talent: { title: "Talent Development", d: "Vetting training and school providers." }
    },
    redFlags: {
      title: "Warning Signs",
      subtitle: "Protect yourself from unverified or predatory practices.",
      list: [
        { t: "Required Fees", d: "Demanding payment for auditions is strictly prohibited." },
        { t: "Bundled Sales", d: "Mandatory photo packages are a violation of ethics." },
        { t: "Opaque Details", d: "Lack of specific location or registered entity details." }
      ]
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
      { t: 'Institutional Verified', d: 'Verification of operational legitimacy and commitment to the GFA Ethics Pledge.' },
      { t: 'Industry Certified', d: 'Comprehensive audit of project history and financial transparency compliance.' },
      { t: 'Accredited Excellence', d: 'Elite recognition for organizations maintaining safety benchmarks over multiple cycles.' }
    ],
    protocols: [
      { t: 'Documentation Audit', d: 'Verification of institutional filings and business credentials.' },
      { t: 'Operational Safety Review', d: 'Verification of workspace safeguarding protocols.' },
      { t: 'Transparency Disclosure', d: 'Auditing of public fee structures and non-predatory business practices.' }
    ],
    cycle: [
      { s: 'Submission of Record', d: 'Initial intake of credentials.' },
      { s: 'Compliance Audit', d: 'Independent documentation review.' },
      { s: 'Status Grant', d: 'Inclusion in the Global Registry.' },
      { s: 'Ongoing Maintenance', d: 'Periodic re-verification.' }
    ],
    cta: {
      title: "Elevate Your Professional Standing",
      body: "Joining the GFA network signals your dedication to international best practices.",
      inquire: "Inquire for Intake",
      download: "Download Guidelines PDF"
    }
  },
  governance: {
    title: "Global Charter & Governance",
    subtitle: "Guided by a multi-national board dedicated to cinematic ethics.",
    downloads: { charter: "Download Charter", bylaws: "Download Bylaws" },
    summaryTitle: "Charter Summary",
    summaryBody: "The Global Film Alliance operates as an independent non-profit to serve the public interest within the film industry.",
    roleTitle: "Administrative Structure",
    roleBody: "Our leadership is composed of industry veterans committed to non-commercial service.",
    board: [
      { role: "Director General", title: "Office of the Secretariat" },
      { role: "Compliance Lead", title: "Institutional Oversight Division" }
    ]
  },
  careerAccess: {
    title: "Career & Industry Access",
    subtitle: "Supporting the next generation of film professionals.",
    intro: "GFA provides neutral support for career pathways.",
    pillars: {
      mentorship: { title: "Mentorship", body: "Direct access to industry leads.", icon: "🤝" },
      funding: { title: "Support Funds", body: "Grants for verified graduate projects.", icon: "💰" },
      matching: { title: "Project Matching", body: "Connecting talent with certified productions.", icon: "🎬" }
    },
    inquiryTitle: "Program Intake",
    cta: "Apply for Pathway Support",
    inquiryNote: "All programs require verification of professional background."
  },
  memberPortal: {
    header: { title: "Member Dashboard", subtitle: "Secure Registry Portal", support: "System Support", logout: "Log Out" },
    sidebar: { academy: "Member Profile", tier: "Accredited Agency", profile: "Overview", docs: "My Documents", renewal: "Status Renewal", scores: "Trust Index", alerts: "Recent Alerts", alertsBody: "System audit scheduled for April." },
    stats: { trust: "Trust Score", grade: "Current Grade", certId: "Registration ID", status: "Status: Active", expiry: "Validity End", remaining: "Days remaining: 365" },
    docs: { title: "Compliance Uploads", addBtn: "Upload New Document" },
    assets: { title: "Identity Assets", badge: "Download Badge", cert: "View Certificate" }
  },
  adminDashboard: {
    header: { title: "Admin Console", subtitle: "Registry Management", access: "Superuser" },
    nav: { audits: "Audits", registry: "Directory", intake: "Intake Queue", scoring: "Scoring", analytics: "System Health" },
    stats: { total: "Total Records", accredited: "Accredited", suspended: "Suspended", renewal: "Renewals Due" },
    queueTitle: "Administrative Intake Queue",
    btns: { open: "Open Case", dismiss: "Dismiss" },
    intakeTitle: "System Integrity Alerts",
    intakeItem: { title: "Registry Conflict Detected", priority: "High", body: "Multiple identity vouchers submitted for ID #GFA-091.", btn1: "Reconcile", btn2: "Flag" }
  },
  footer: { 
    desc: "Independent non-profit industry support organization. Facilitating professional standards in the global film industry.", 
    copyright: "© {year} Global Film Alliance. Supporting Industry Excellence." 
  }
};

const ZH_JSON: any = {
  ...EN_JSON,
  common: {
    loading: "正在访问记录...",
    filters: "筛选",
    reset: "重置",
    category: "类别",
    level: "等级",
    status: "状态",
    required: "必填",
    optional: "可选",
    searchPlaceholder: "按名称或 ID 搜索",
    searchRegistry: "搜索名录"
  },
  nav: {
    home: "首页", certification: "行业认证", childSafety: "青少年保护", graduateSupport: "扶持计划", registry: "认证名录",
    complaints: "反馈渠道", about: "关于我们", governance: "治理准则", membership: "会员权益", partners: "合作伙伴",
    contact: "联系我们", login: "登录", join: "加入会员", memberPortal: "会员门户", admin: "管理后台"
  },
  home: {
    ...EN_JSON.home,
    hero: {
      kicker: "独立非营利机构 • 自愿性标准 • 全球行业网络",
      title: "全球电影联盟 (GFA)",
      subhead: "建立电影行业的信任、安全与机遇",
      body: "我们为机构、制作方和新锐电影人提供自愿性认证框架、青少年保护指南及专业事业支持计划。",
      ctaPrimary: "加入会员",
      ctaSecondary: "查看计划",
      btnCertify: "申请认证"
    }
  },
  footer: { desc: "独立的非营利行业支持组织。促进全球电影行业的专业标准。", copyright: "© {year} 全球电影联盟 (GFA)。支持行业卓越。" }
};

export const DICTIONARIES: Record<Locale, any> = {
  [Locale.EN]: EN_JSON,
  [Locale.ZH]: ZH_JSON,
  [Locale.ES]: EN_JSON,
  [Locale.FR]: EN_JSON,
  [Locale.IT]: EN_JSON,
  [Locale.KO]: EN_JSON,
  [Locale.JA]: EN_JSON,
  [Locale.DE]: EN_JSON,
};
