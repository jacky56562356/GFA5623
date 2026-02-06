
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
  safeguarding: {
    title: "Safeguarding Minors",
    intro: "Comprehensive protection framework for children in the film industry.",
    mission: "GFA maintains a zero-tolerance policy for predatory behavior. Our safeguarding framework provides parents with the tools to verify professional legitimacy.",
    redLinesTitle: "Zero-Tolerance Red Lines",
    redLines: [
      "Fees for auditions or talent discovery.",
      "Unsupervised contact with minors.",
      "Guarantees of work or casting.",
      "Pressure for upfront professional photography fees."
    ],
    guideTitle: "Parental Guidance",
    guide: "Always verify the GFA ID of any person or agency claiming to represent your child.",
    cta: "Download Safety Toolkit"
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
  common: {
    ...EN_JSON.common,
    loading: "正在访问官方名录...",
    searchPlaceholder: "搜索：机构名称 / 认证编号 / 关键词",
    reset: "清空",
    filters: "筛选",
    category: "类别",
    level: "等级",
    status: "状态",
    city: "城市",
    country: "国家",
    sort: "排序",
    results: "结果"
  },
  disclaimer: {
    ...EN_JSON.disclaimer,
    title: "免责声明",
    body: "公示库基于自愿参与与公开披露信息，提供透明度参考。请用户自行核验政府许可/法律义务等要求。"
  },
  home: {
    ...EN_JSON.home,
    stats: {
      audited: "500+ 已审计机构",
      verified: "1.2万+ 已核实人才",
      countries: "42个 国家与地区覆盖",
      safeguarding: "零容忍政策 全面执行"
    },
    pillars: {
      title: "行业信任的核心支柱",
      subtitle: "GFA 通过三项核心职能维护电影生态系统的公正性与安全性。",
      p1: { title: "真实性核验", body: "严格的文件审计与实地考察，确保公示机构的合法经营地位。" },
      p2: { title: "青少年保护", body: "零容忍框架与背景审查机制，全方位保护未成年人与弱势创作人才。" },
      p3: { title: "收费透明化", body: "标准化的收费上限公示与公开披露日志，根除行业中的掠夺性行为。" }
    },
    hubs: {
      title: "信息公示与核查中心",
      subtitle: "实时核实行业机构的认证状态、有效期限及信誉评分。GFA 数据库是家庭做出安全选择的重要保障。",
      registry: { 
        title: "公示名录", 
        body: "全面收录经 GFA 认证的全球电影机构及教育提供商数据库。",
        features: ["GFA-ID 核验", "审计历史查询", "认证有效期验证"]
      },
      bond: { 
        title: "保证金核验", 
        body: "针对人才服务机构及工作坊的 5 万美金法定保证金公示核查。",
        features: ["保证金状态追踪", "法律备案查询", "合规性审计"]
      },
      safety: { 
        title: "青少年保护", 
        body: "在专业电影环境中保护儿童安全的红线政策及合规操作指南。",
        features: ["红线政策解读", "家长核实工具包", "安全保障审计"]
      },
      transparency: { 
        title: "收费透明化", 
        body: "对行业机构收费结构的公众监控及强制性透明披露标准。",
        features: ["收费上限公示表", "披露日志查询", "退款协议核查"]
      }
    }
  },
  verify: {
    title: "官方保证金核验",
    body: "针对人才服务提供商的 50,000 美金法定保证金核查。使用此工具核实任何培训中心或机构的法律备案状态。",
    form: {
      placeholder: "输入保证金编号或机构名称...",
      button: "核实法律状态"
    }
  },
  directory: {
    title: "认证名录",
    subtitle: "所有经核实及认证实体的公开列表。",
    registryCount: "已认证实体",
    tableHeaders: ["机构名称", "有效期", "类别", "状态", "审计参考"]
  },
  reporting: {
    title: "机构报告",
    subtitle: "提交正式投诉或向 GFA 举报违反职业道德的行为。",
    formTitle: "合规报告受理",
    formLabels: {
      type: "违规类别",
      org: "被举报实体名称",
      desc: "事件详细描述",
      email: "联系邮箱",
      submit: "提交至 GFA 合规部"
    },
    reportTypes: ["收费透明度违规", "青少年保护顾虑", "无照经营", "合同违约行为"],
    processTitle: "审核流程",
    process: [
      { s: "受理", d: "报告已记录并分配给合规专员。" },
      { s: "审计", d: "内部审查实体的认证历史。" },
      { s: "解决", d: "强制整改或撤销认证。" }
    ],
    outcomesTitle: "可能的结果",
    outcomes: ["公开警告", "信用减分", "立即撤销认证", "移交相关部门"]
  },
  protection: {
    title: "机构保护",
    subtitle: "守护下一代创作人才。",
    modelItems: ["零容忍审计", "实地验证", "背景调查要求", "收费上限监控"]
  },
  contact: {
    title: "联系 GFA",
    intro: "联系我们的全球行政及合规部门。",
    labels: {
      individual: "专业人士",
      organization: "机构实体",
      merchant: "合作伙伴",
      join: "咨询",
      inquiries: "常规咨询",
      press: "媒体与新闻"
    },
    form: {
      header: "{type} 咨询",
      name: "全名",
      email: "官方邮箱",
      location: "主要地区",
      cat: "伙伴类别",
      orgType: "实体类型",
      message: "消息内容",
      consent: "我了解 GFA 的数据隐私条款。",
      submit: "发送消息"
    }
  },
  governance: {
    title: "治理章程",
    subtitle: "结构独立性与监管职能",
    roleTitle: "我们的组织角色",
    roleBody: "全球电影联盟作为一个独立的非营利标准制定机构运作。我们的治理旨在确保在人才中介、制片厂和教育机构认证中的公正性。",
    roleTag1: "非营利地位",
    roleTag1Desc: "专门为行业安全和透明度利益而运营。",
    roleTag2: "监管联络",
    roleTag2Desc: "协助地方政府执行人才服务法规。",
    principlesTitle: "核心治理原则",
    principles: [
      { title: "完全独立", body: "在制片、选角或人才代理中没有经济利益。" },
      { title: "审计诚信", body: "所有认证均需实地核查和文件审计。" },
      { title: "公众问责", body: "所有纪律处分和撤销记录均在公示库中列出。" }
    ],
    policyTitle: "授权政策",
    policyBody: "GFA 授权是一项自愿标准。使用 GFA 印章的实体必须持续遵守所有当地和国际劳工法。",
    policyItems: ["反欺诈合规", "青少年保护", "收费透明度"],
    policyNote: "违规将导致立即暂停授权并向公众披露。"
  },
  registry: {
    ...EN_JSON.registry,
    title: "可验证公示库",
    subtitle: "可通过名称、认证编号、类别或地区查询机构信息。公示内容提供透明度与核验参考，不替代任何政府许可或法律义务核查。",
    viewDetails: "查看详情",
    reportConcern: "投诉与举报",
    trustScore: "透明度评分指数",
    lastReviewed: "最近审查",
    nextReview: "下次复审",
    disclosure: "公开披露",
    transparencyIndicators: "透明度指标",
    disclaimerBody: "机构数据由 GFA 审计核实。此记录为实时快照，不构成法律保证。",
    validity: "审计有效期",
    resultsFound: "发现机构记录",
    scoreLabel: "透明度指数",
  }
};

export const DICTIONARIES: Record<Locale, any> = {
  [Locale.EN]: EN_JSON,
  [Locale.ZH]: ZH_JSON,
  [Locale.ES]: EN_JSON,
  [Locale.FR]: EN_JSON,
  [Locale.IT]: EN_JSON,
};
