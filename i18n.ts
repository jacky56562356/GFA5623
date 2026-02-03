
import { Locale, Translation } from './types';

const EN_JSON: Translation = {
  "meta": {
    "siteName": "GFA Global Film Alliance",
    "tagline": "Independent Certification • Global Governance • Talent Protection"
  },
  "nav": {
    "home": "Home",
    "about": "Authority",
    "certification": "Certification & Governance",
    "certGov": {
      "overview": "Overview",
      "verify": "Verify Certificate",
      "governance": "Governance & Principles",
      "standards": "Authorization Standards",
      "transparency": "Pricing Transparency",
      "protection": "Youth Protection",
      "directory": "Authorized Directory",
      "reporting": "Report Misconduct"
    },
    "support": "Support Programs",
    "casting": "Global Talent",
    "membership": "Membership",
    "partners": "Partners",
    "events": "Authorized Events",
    "contact": "Contact / Join",
    "verify": "Verify ID",
    "policies": "Policies",
    "language": "Language"
  },
  "common": {
    "learnMore": "Learn more",
    "getStarted": "Get started",
    "applyNow": "Apply now",
    "joinNow": "Join now",
    "submit": "Submit",
    "viewAll": "View all",
    "back": "Back",
    "comingSoon": "Coming soon",
    "required": "Required",
    "optional": "Optional",
    "loading": "Verifying...",
    "searchRegistry": "Search Registry"
  },
  "home": {
    "hero": {
      "title": "GLOBAL FILM ALLIANCE",
      "subtitle": "Official • Certified • Trusted",
      "body": "GFA establishes the global benchmark for safety, transparency, and professional ethics in the film industry. We protect talent and certify institutional integrity.",
      "ctaPrimary": "Apply for Certification",
      "ctaSecondary": "View Governance",
      "badge": "Independent Global Standards • Est. 2024",
      "tags": { "cert": "Industry Authority", "gov": "Governance", "prot": "Protection" }
    },
    "trust": {
      "badge": "Institutional Mandate",
      "title": "The Four Iron Rules of GFA.",
      "body": "Absolute transparency, youth protection first, anti-fraud enforcement, and full traceability. These principles define every certification we issue.",
      "passportTitle": "GFA Trust Profile",
      "passportSubtitle": "Credential Verification Standard",
      "auditItems": ["Transparency Audit", "Safety Compliance", "Ethical Pricing", "Identity Verification"]
    },
    "stats": {
      "certifiedTalents": "Certified Registry",
      "verifiedInstitutions": "Audit-Passed Entities",
      "supportedProjects": "Impact Outcomes",
      "partnerMerchants": "Authorized Partners"
    },
    "pillars": {
      "title": "Five Pillars of Global Cinematic Integrity",
      "subtitle": "Establishing the standards for connection, protection, and growth.",
      "p1Title": "Certification Authority",
      "p1Body": "Official vetting of auditions, training programs, agencies, and productions.",
      "p2Title": "Talent Protection",
      "p2Body": "Safety protocols, anti-fraud tools, and mandatory minor protection mechanisms.",
      "p3Title": "Industry Matching",
      "p3Body": "Connecting verified talent to productions and agencies to parents.",
      "p4Title": "Global Governance",
      "p4Body": "Standardized pricing, whitepapers, and industry-wide data monitoring.",
      // Fix: Added missing 5th pillar to EN dictionary to match updated Translation interface
      "p5Title": "Impact & Creative Support",
      "p5Body": "Support for independent film, graduate works, and the Golden Feather Awards.",
      "explore": "Explore Pillar"
    },
    "closing": {
      "title": "Built For Integrity.",
      "body": "Official authority. Verified protection. Professional access.",
      "cta": "Join the Alliance"
    }
  },
  "about": {
    "title": "GFA Governance",
    "missionTitle": "The Mandate",
    "missionBody": "To standardize global film workflows, protect vulnerable participants, and provide a verified ecosystem for cinematic excellence.",
    "visionTitle": "Global Impact",
    "visionBody": "To become the definitive standard of institutional trust for the next generation of global cinema.",
    "whatTitle": "Primary Functions",
    "whatBullets": [
      "Certification & Industry Vetting",
      "Minor Safeguarding & Rights",
      "Connection & Resource Matching",
      "Whitepaper & Standards Publishing",
      "Global Registry Maintenance"
    ],
    "transparencyTitle": "Accountability Model",
    "transparencyBody": "Our non-profit structure ensures that governance remains unbiased, with every audit trail publicly verifiable for institutions and individuals alike.",
    "accTitle": "Public Verification",
    "accDesc": "Real-time lookup for all authorized entities.",
    "outTitle": "Support Impact",
    "outDesc": "Tracking the growth of supported creators."
  },
  "certification": {
    "title": "Certification & Authority",
    "subtitle": "Official. Certified. Trusted.",
    "typesTitle": "Authorization Categories",
    "types": [
      "Certified Audition",
      "Certified Training Provider",
      "Certified Agency / Agent",
      "Certified Event / Competition",
      "Certified Production Unit",
      "Verified Talent Status"
    ],
    "govTitle": "Governance System",
    "processTitle": "Audit Lifecycle",
    "processBody": "Application → Verification → Standards Audit → Final Approval → ID Issuance → Public Registry",
    "valueTitle": "The Four Iron Rules",
    "valueBullets": [
      "Absolute Transparency: Standards, fees, and expiry are public.",
      "Protection First: Minor safety and guardian rights are mandatory.",
      "Anti-Fraud: Zero-tolerance for hidden fees or deceptive promises.",
      "Traceability: All certificates are verifiable and subject to review."
    ],
    "cta": "Apply for Authorization",
    "verifyCardTitle": "Public Registry",
    "verifyCardBody": "Validate the official GFA status of any audition, organization, or professional.",
    "steps": ['Application', 'Identity Vetting', 'Project Proof', 'Fee Audit', 'Protection Check', 'Issuance', 'Annual Review']
  },
  "governance": {
    "title": "Governance & Policy",
    "subtitle": "The foundation of institutional trust.",
    "roleTitle": "Our Role as Governing Body",
    "roleBody": "GFA acts as an independent authority. We establish pricing caps, audit audition workflows, and publish industry whitepapers to monitor and regulate professional conduct.",
    "roleTag1": "Policy Enforcement",
    "roleTag1Desc": "Strict monitoring of authorized fee schedules.",
    "roleTag2": "Data Supervision",
    "roleTag2Desc": "Tracking industry trends and compliance rates.",
    "principlesTitle": "Governing Standards",
    "principles": [
      { "title": "Standardized Workflows", "body": "Mandatory audit trails for all recruitment and training activities." },
      { "title": "Price Governance", "body": "Enforcement of reasonable fee ranges to prevent exploitation." },
      { "title": "Verified Merit", "body": "Recognition based on certified quality and ethical standards." }
    ],
    "policyTitle": "Governance Deliverables",
    "policyBody": "We provide the industry with technical frameworks to ensure fair operations.",
    "policyItems": ["Industry Whitepapers", "Standard Pricing Matrix", "Audition Workflow Blueprints"],
    "policyNote": "Failure to meet governance standards results in immediate status revocation."
  },
  "standards": {
    "title": "Authorization Standards",
    "subtitle": "Technical requirements for GFA recognition.",
    "catA": {
      "title": "Certified Auditions",
      "tag": "Official Seal",
      "docsTitle": "Required Proof",
      "docs": ["Authorized Project Letter", "Production Insurance", "Transparent Fee Schedule"],
      "matrixTitle": "Authenticity Standards",
      "matrixBody": "Auditions must be tied to specific, verified production needs. Rolling recruitment without projects is prohibited.",
      "disqual": "Charging for 'promises of casting' results in permanent blacklisting."
    },
    "catB": {
      "title": "Certified Training Providers",
      "tag": "Education Standard",
      "sub1": "Faculty Quality",
      "sub1Items": ["Verified Instructor Background", "Professional Portfolio Audit", "No Fake 'Hollywood' Branding"],
      "sub2": "Contract Safety",
      "sub2Items": ["Refund Policy Disclosure", "No Forced Upselling", "Guardian Access Rights"],
      "sub3": "Instructional Integrity",
      "sub3Body": "Programs must demonstrate measurable educational outcomes and transparent pricing."
    },
    "catC": {
      "title": "Certified Agencies & Agents",
      "tag": "Agency Standard",
      "discTitle": "Fair Contracting",
      "discBody": "Commission caps (10-20%) and clear termination clauses are mandatory.",
      "prohibTitle": "Exploitation Ban",
      "prohibBody": "Prohibition of mandatory upfront 'registration fees' or bundled training requirements.",
      "compliance": "Mandatory guardian CC protocol for all minor-talent communications."
    },
    "catD": {
      "title": "Certified Events & Competitions",
      "tag": "Merit Standard",
      "critTitle": "Jury & Process",
      "critBody": "Juries must be disclosed and evaluation criteria must be public and consistent.",
      "rejTitle": "Grounds for Rejection",
      "rejBody": "Hidden 'promotion fees' or pay-to-win mechanics without independent review."
    }
  },
  "transparency": {
    "title": "Pricing Transparency",
    "subtitle": "Fair costs. Anti-overcharging. Global accountability.",
    "tableTitle": "Authorized Fee Caps (Global Reference)",
    "tableHeaders": ["Service Type", "Authorized Range", "Tier", "Mandatory Refund", "Audit Status"],
    "rulesTitle": "Anti-Fraud Standards",
    "rules": [
      "Total itemization of all participant costs.",
      "Prohibition of 'casting-for-fee' schemes.",
      "Mandatory escrow for deposits over $500."
    ],
    "protectionTitle": "Overcharging Protection",
    "protectionRules": [
      "Public reporting for price gouging.",
      "GFA-imposed fine for hidden fees.",
      "Automatic suspension for billing fraud."
    ],
    "enforcementTitle": "Financial Governance",
    "enforcementItems": ["Receipt Audit", "Escrow Monitoring", "Member Sanctions", "ID Revocation"]
  },
  "verify": {
    "title": "Authority ID Verification",
    "body": "Enter a GFA ID to verify the status of an audition, institution, or professional.",
    "form": {
      "label": "Authority ID",
      "placeholder": "GFA-AUTH-XXXX",
      "button": "Verify Registry"
    },
    "result": {
      "valid": "Certified & Official",
      "expired": "Certification Expired",
      "suspended": "Suspended for Investigation",
      "notFound": "Unverified / No Record",
      "details": "Status: Official • Tier: Certified • Verified: Global Alliance"
    },
    "note": "Keywords: Official • Certified • Trusted"
  },
  "protection": {
    "title": "Talent Protection & Compliance",
    "subtitle": "Safety. Protection. Compliance.",
    "modelTitle": "Guardian Protection Model",
    "modelBody": "GFA enforces a 'Guardian-First' protocol for all minors. No interaction between minors and production occurs without encrypted, traceable oversight.",
    "modelItems": [
      "Anti-fraud verification tools",
      "Legal contract templates",
      "Parental protection dashboards",
      "Minor rights safeguards"
    ],
    "safeguards": [
      { 
        "title": "Safety Standards", 
        "items": [
          "No private 1-on-1 auditions",
          "Verified venue physical safety audit",
          "Traceable digital communication",
          "On-set safety compliance monitors"
        ] 
      },
      { 
        "title": "Protection from Scams", 
        "items": [
          "Anti-overcharging pricing audits",
          "No 'guaranteed debut' scams",
          "Mandatory refund policies",
          "Verified agency credentials"
        ] 
      },
      { 
        "title": "Legal Compliance", 
        "items": [
          "Standardized GFA Fair Contracts",
          "Guardian consent frameworks",
          "GDPR-K data protection",
          "IP rights protection for talent"
        ] 
      }
    ],
    "zeroTitle": "Safety Enforcement",
    "zeroDesc": "GFA maintains a global blacklist. Any breach of safety or protection standards results in immediate revocation and referral to international authorities.",
    "reportTitle": "Report a Violation",
    "reportDesc": "Anonymously report unsafe environments or hidden fees.",
    "reportCta": "Submit Safety Report"
  },
  "directory": {
    "title": "Authorized Industry Registry",
    "subtitle": "Only certified programs and audited auditions are permitted here.",
    "registryCount": "Official Registry Count",
    "tableHeaders": ["Organization", "Auth ID", "Status", "Expiry", "Audit"],
    "statuses": { "active": "Official", "pending": "Reviewing", "blocked": "Suspended", "rev": "Revoked" },
    "note": "Verify and Trust: Use this registry to ensure your career safety."
  },
  "reporting": {
    "title": "Report Fraud & Misconduct",
    "subtitle": "Protecting the integrity of the film ecosystem.",
    "formTitle": "Conflict Report",
    "formLabels": { "type": "Violation Type", "org": "Entity Name", "desc": "Statement", "email": "Contact Email", "submit": "Transmit Report" },
    "reportTypes": ["Overcharging / Hidden Fees", "Unsafe Environment", "Scam / False Promise", "Minor Safety Breach", "Unprofessional Conduct"],
    "processTitle": "Resolution Path",
    "process": [
      { "s": "Intake", "d": "Report logging and triage." },
      { "s": "Investigation", "d": "Evidence and witness audit." },
      { "s": "Arbitration", "d": "Direct mediation or ruling." },
      { "s": "Penalty", "d": "Fines or Status removal." },
      { "s": "Blacklist", "d": "Permanent removal." }
    ],
    "outcomesTitle": "Compliance Actions",
    "outcomes": ["Corrective Action", "Refund Order", "Authority Suspension", "ID Revocation", "Law Enforcement Referral"]
  },
  "support": {
    "title": "Impact & Creative Support",
    "subtitle": "Connecting creators to resources and recognition.",
    "intro": "The GFA Impact Foundation provides the infrastructure for emerging excellence through non-profit aid and the prestigious Golden Feather Awards.",
    "programsTitle": "Impact Pathways",
    "p1Title": "Creative Foundation",
    "p1Bullets": [
      "Support for Independent Film",
      "Graduate Thesis Funding",
      "Golden Feather Awards (GFA)"
    ],
    "p2Title": "Technical Access",
    "p2Bullets": [
      "Equipment & Lens Grants",
      "Studio Facility Credits",
      "Post-Production Scholarships"
    ],
    "p3Title": "Industry Access",
    "p3Bullets": [
      "Talent Matching Services",
      "Production-Investor Connection",
      "Agency-Parent Referrals"
    ],
    "howTitle": "Matching Lifecycle",
    "howBody": "Evaluation → Connection → Resource Allocation → Impact Measurement",
    "transparencyTitle": "Fair Allocation",
    "transparencyBody": "Support is allocated based on certified merit and community impact, governed by the GFA Foundation Board.",
    "cta": "Apply for Impact Support"
  },
  "casting": {
    "title": "Industry Connection Hub",
    "intro": "Connecting verified talent with global production needs. A governed environment built on the keywords: Connection, Placement, and Industry Access.",
    "featuresTitle": "Connection Standards",
    "features": [
      "Talent-to-Production Matching",
      "Agency-to-Parent Referrals",
      "Project-to-Investor Access",
      "Verified Resource Routing",
      "GFA Member Networking"
    ],
    "ctaBrowse": "Access Connections",
    "ctaPost": "Submit a Requirement",
    "note": "Connection services are restricted to GFA Certified Members to ensure professional quality.",
    "protectionTitle": "Vetted Access",
    "protectionDesc": "Only authorized productions can access the talent matching database."
  },
  "membership": {
    "title": "Membership & Authority",
    "intro": "Join the global standard for cinematic integrity. Gain certified credentials and professional protection.",
    "talentTitle": "Professional Talent Tiers",
    "orgTitle": "Institutional Authority Tiers",
    "talentTiers": [
      { name: 'Basic', price: '$0', perks: ['Public Profile', 'Basic Audition Access'] },
      { name: 'Certified', price: '$99/yr', perks: ['Verified Badge', 'Priority Matching', 'Anti-Fraud Protection'] },
      { name: 'Elite', price: '$299/yr', perks: ['Scholarship Eligibility', 'Pro Equipment Access', 'Legal Audit'], recommended: true },
      { name: 'Guardian', price: '$0', perks: ['Minor Protection Dashboard', 'CC Safety Protocol', 'School Verification'] }
    ],
    "orgTiers": [
      { name: 'Authorized', price: '$0', perks: ['Post Auditions', 'Basic Agency Hub'] },
      { name: 'Accredited', price: '$1499/yr', perks: ['GFA Seal of Quality', 'Full Talent Matching', 'Financial Audit'] },
      { name: 'Studio', price: '$3499/yr', perks: ['Enterprise Governance', 'Whitepaper Access', 'Priority Partner Status'] }
    ],
    "entTitle": "Government & National Bodies",
    "entDesc": "For film boards and international commissions requiring custom standard implementation and regional data monitoring.",
    "entCta": "Contact Institutional Division"
  },
  "partners": {
    "title": "Official Partners",
    "intro": "Trusted vendors and services certified for transparency and professional quality.",
    "catLabel": "Category",
    "countryLabel": "Region",
    "found": "Found {n} Trusted Partners",
    "card": {
      "benefit": "Member Advantage",
      "eligibility": "Trust Requirement",
      "address": "Region"
    }
  },
  "events": {
    "title": "GFA Authorized Events",
    "intro": "Official competitions and awards governed by GFA Standards.",
    "sections": {
      "competitions": "Golden Feather Awards",
      "screenings": "Certified Showcases",
      "workshops": "Governance Training"
    },
    "cta": "Apply for Entry",
    "note": "Only GFA Authorized events are eligible for the Golden Feather Awards circuit.",
    "eventStatus": ["Golden Feather Nominee", "Verified Showcase", "Official Selection"]
  },
  "contact": {
    "title": "Contact Authority",
    "intro": "The gateway to professional cinematic integrity.",
    "labels": {
      "individual": "Professional",
      "organization": "Institution",
      "merchant": "Certified Vendor",
      "join": "Authorize",
      "inquiries": "Official Inquiry",
      "press": "Public Relations"
    },
    "form": {
      "name": "Legal Name / Entity",
      "email": "Official Email",
      "location": "Global Region",
      "cat": "Authorization Type",
      "orgType": "Institutional Type",
      "message": "Protocol / Project Summary",
      "consent": "I agree to the GFA Governance Charter and minor protection compliance where applicable.",
      "submit": "Transmit Protocol",
      "header": "{type} Authorization Portal"
    }
  },
  "policies": {
    "privacy": {
      "title": "Global Data Charter",
      "summary": "Protecting talent privacy and encryption of minor data.",
      "sections": {
        "Collection": "Data is only used for identity and project verification.",
        "Encryption": "Minor data is AES-256 encrypted and guardian-controlled.",
        "Usage": "Third-party sharing is prohibited without explicit guardian override."
      }
    },
    "terms": {
      "title": "Terms of Governance",
      "summary": "The rules of engagement within the GFA Ecosystem.",
      "sections": {
        "Conduct": "Members must adhere to the Four Iron Rules.",
        "Sanctions": "Breach results in immediate public revocation of status.",
        "Audit": "Members agree to random pricing and safety audits."
      }
    },
    "parental": {
      "title": "Guardian Protocol",
      "summary": "Mandatory safety frameworks for children in film.",
      "sections": {
        "Control": "Guardians must pre-authorize all professional contacts.",
        "Visibility": "Minor profiles are hidden from public unverified search.",
        "Safety": "On-set guardian access is an non-negotiable right."
      }
    },
    "content": {
      "title": "Ethics & Content Code",
      "summary": "Standardized professional representation.",
      "sections": {
        "Integrity": "Zero tolerance for fake portfolios or misleading branding.",
        "Ethics": "Fair representation of diversity and safe production practices.",
        "Safety": "Prohibition of exploitative or harmful content creation."
      }
    }
  },
  "footer": {
    "verification": "Registry Search",
    "privacy": "Privacy Charter",
    "terms": "Governance Terms",
    "parental": "Guardian Protocol",
    "content": "Ethical Code",
    "copyright": "© {year} GFA Global Film Alliance • Official Governing Authority.",
    "desc": "Independent certification for industry excellence, youth protection, and the Golden Feather Awards foundation."
  },
  "language": {
    "en": "English",
    "zh": "中文",
    "es": "Español",
    "fr": "Français",
    "it": "Italiano"
  }
};

const ZH_JSON: Translation = {
  ...EN_JSON,
  "meta": {
    "siteName": "GFA 全球电影联盟",
    "tagline": "独立认证 • 全球治理 • 未成年人保护"
  },
  "nav": {
    "home": "首页",
    "about": "机构权威",
    "certification": "认证与治理",
    "certGov": {
      "overview": "概览",
      "verify": "验证证书",
      "governance": "治理原则",
      "standards": "授权标准",
      "transparency": "价格透明度",
      "protection": "青少年保护宪章",
      "directory": "授权名录",
      "reporting": "报告违规"
    },
    "support": "扶持计划",
    "casting": "全球人才",
    "membership": "会员体系",
    "partners": "合作伙伴",
    "events": "授权活动",
    "contact": "联系 / 加入",
    "verify": "验证编号",
    "policies": "政策条款",
    "language": "语言"
  },
  "common": {
    ...EN_JSON.common,
    "submit": "提交",
    "loading": "验证中...",
    "searchRegistry": "名录查询"
  },
  "home": {
    "hero": {
      "title": "全球电影联盟",
      "subtitle": "权威认证 • 官方背书 • 行业互信",
      "body": "GFA 制定电影行业的全球安全性、透明度和职业道德基准。我们保护行业人才，并核验机构的诚信资质。",
      "ctaPrimary": "申请官方认证",
      "ctaSecondary": "查看治理准则",
      "badge": "独立全球标准 • 始于 2024",
      "tags": { "cert": "行业权威", "gov": "治理体系", "prot": "权益保护" }
    },
    "trust": {
      "badge": "机构授权",
      "title": "GFA 认证体系四大铁律",
      "body": "公开透明、青少年保护优先、反诈骗与反乱收费、可追溯与可复核。这些准则定义了我们签发的每一份认证。",
      "passportTitle": "GFA 信任档案",
      "passportSubtitle": "机构凭证核验标准",
      "auditItems": ["透明度审计", "安全合规性", "定价伦理", "身份真伪核验"]
    },
    "stats": {
      "certifiedTalents": "已认证名录",
      "verifiedInstitutions": "通过审计机构",
      "supportedProjects": "影响力成果",
      "partnerMerchants": "授权合作伙伴"
    },
    "pillars": {
      "title": "全球电影诚信体系五大支柱",
      "subtitle": "建立资源连接、安全保护与可持续增长的标准。",
      "p1Title": "行业认证权威",
      "p1Body": "对试镜、培训、经纪及制作单位进行官方资质审查。",
      "p2Title": "人才安全保护",
      "p2Body": "反诈骗工具、法律合同模板及强制性未成年人保护机制。",
      "p3Title": "行业资源对接",
      "p3Body": "将核实的人才推荐至剧组，将经认证的机构推荐给家长。",
      "p4Title": "全球行业治理",
      "p4Body": "制定收费与流程标准，发布行业白皮书并实施数据监管。",
      "p5Title": "公益扶持与影响力",
      // Fix: Corrected duplicate p1Body key to p5Body (lines 546-547 in the original file)
      "p5Body": "扶持独立电影与毕业生作品，设立“金羽奖”及奖学金。",
      "explore": "探索支柱模块"
    },
    "closing": {
      "title": "以诚信铸就未来。",
      "body": "官方权威认证。全方位安全保护。专业资源准入。",
      "cta": "加入全球联盟"
    }
  },
  "about": {
    "title": "GFA 治理机构",
    "missionTitle": "机构使命",
    "missionBody": "规范全球电影工作流，保护弱势群体，并为卓越电影创作提供核实过的生态环境。",
    "visionTitle": "全球愿景",
    "visionBody": "成为全球下一代电影工业中机构信任的决定性标准。",
    "whatTitle": "核心职能",
    "whatBullets": [
      "行业认证与资质审查",
      "未成年人权益保障",
      "资源对接与人才匹配",
      "白皮书与行业标准发布",
      "全球权威名录维护"
    ],
    "transparencyTitle": "问责模式",
    "transparencyBody": "我们的非营利结构确保了治理的公正性，每项审计追踪对于机构和个人而言都是公开可核实的。",
    "accTitle": "公众验证",
    "accDesc": "所有授权实体的实时查询通道。",
    "outTitle": "扶持影响力",
    "outDesc": "追踪受扶持创作者的成长历程。"
  },
  "certification": {
    "title": "认证体系与权威",
    "subtitle": "官方认证 • 权威背书 • 值得信赖",
    "typesTitle": "授权类别",
    "types": [
      "认证试镜 (Official Audition)",
      "认证培训机构 (Training Provider)",
      "认证经纪公司/经纪人 (Agency)",
      "认证赛事/比赛 (Event)",
      "认证制作单位 (Production)",
      "人才核验身份 (Talent ID)"
    ],
    "govTitle": "治理体系总则",
    "processTitle": "审计生命周期",
    "processBody": "申请 → 材料核验 → 标准审计 → 最终批准 → 签发 ID → 名录公示",
    "valueTitle": "四大铁律 (The Iron Rules)",
    "valueBullets": [
      "公开透明：认证标准、流程、费用、有效期全部公开。",
      "青少年保护优先：任何项目必须满足未成年人保护与监护要求。",
      "反诈骗与反乱收费：严禁隐形收费、强制捆绑、诱导消费。",
      "可追溯与可复核：所有授权实体必须可核实、可投诉、可复核。"
    ],
    "cta": "申请官方授权",
    "verifyCardTitle": "公共名录",
    "verifyCardBody": "在 GFA 全球数据库中验证试镜、机构或专业人士的官方状态。",
    "steps": ['提交申请', '身份审核', '项目真实性', '收费审计', '安全合规', '正式授权', '年度复审']
  },
  "governance": {
    "title": "治理与政策",
    "subtitle": "机构公信力的基石。",
    "roleTitle": "作为治理机构的角色",
    "roleBody": "GFA 作为一个独立的权威机构运营。我们制定收费上限，审计试镜流程，并发布行业白皮书，以监管和规范专业行为。",
    "roleTag1": "政策执行",
    "roleTag1Desc": "严格监管授权实体的费用清单。",
    "roleTag2": "数据监管",
    "roleTag2Desc": "追踪行业趋势与合规率。",
    "principlesTitle": "治理标准",
    "principles": [
      { "title": "标准化工作流", "body": "所有招募和培训活动必须具备强制审计追踪。" },
      { "title": "价格治理", "body": "强制执行合理的费用区间，防止剥削行为。" },
      { "title": "德才核验", "body": "基于认证质量和伦理标准的行业认可。" }
    ],
    "policyTitle": "治理成果",
    "policyBody": "我们向行业提供技术框架，以确保公平运营。",
    "policyItems": ["行业白皮书", "标准定价矩阵", "试镜工作流蓝图"],
    "policyNote": "未达到治理标准的实体将被立即撤销官方状态。"
  },
  "standards": {
    "title": "行业授权标准",
    "subtitle": "获得 GFA 官方认可的技术要求。",
    "catA": {
      "title": "认证试镜标准",
      "tag": "官方印记",
      "docsTitle": "必要证明",
      "docs": ["制作方授权函/立项证明", "片场保险证明", "透明的收费清单"],
      "matrixTitle": "真实性标准",
      "matrixBody": "试镜必须绑定具体的、经过核实的制作需求。禁止无项目支撑的“无限期滚动招募”。",
      "disqual": "以“包进组/包出道”为名收取费用的行为将导致永久封禁。"
    },
    "catB": {
      "title": "认证培训机构标准",
      "tag": "教育准则",
      "sub1": "师资质量",
      "sub1Items": ["教师履历真实性核验", "作品集审计", "禁止虚假“好莱坞”包装"],
      "sub2": "合同安全",
      "sub2Items": ["退费政策完全披露", "禁止强制性加价销售", "监护人观察权"],
      "sub3": "教学诚信",
      "sub3Body": "项目必须展示可量化的教学成果及透明的学费结构。"
    },
    "catC": {
      "title": "认证经纪公司标准",
      "tag": "经纪准则",
      "discTitle": "公平合同",
      "discBody": "必须执行佣金上限（10-20%）及清晰的解约条款。",
      "prohibTitle": "禁止剥削",
      "prohibBody": "严禁收取高额前端“注册费”或强制捆绑培训服务。",
      "compliance": "针对未成年人才，必须执行强制性的监护人抄送协议。",
    },
    "catD": {
      "title": "认证赛事与放映标准",
      "tag": "价值准则",
      "critTitle": "评审与流程",
      "critBody": "评委名单必须披露，评分机制必须公开且具备可复核性。",
      "rejTitle": "拒绝理由",
      "rejBody": "存在隐藏“晋级费”或无独立评审的“付费即赢”机制。"
    }
  },
  "transparency": {
    "title": "价格透明度标准",
    "subtitle": "公平定价。反乱收费。全程问责。",
    "tableTitle": "授权费用区间（全球参考）",
    "tableHeaders": ["服务类型", "授权费用区间", "级别", "退款保障", "审计状态"],
    "rulesTitle": "反诈骗标准",
    "rules": [
      "所有参与成本必须全额明细化。",
      "严禁“付费换角”等不正当收费模式。",
      "超过 $500/¥3500 的定金必须进行强制托管。"
    ],
    "protectionTitle": "防过度收费保护",
    "protectionRules": [
      "对价格欺诈设立公开举报渠道。",
      "对隐藏费用处以 GFA 官方罚款。",
      "财务欺诈行为将导致授权自动暂停。"
    ],
    "enforcementTitle": "财务治理",
    "enforcementItems": ["发票审计", "托管金监管", "会员制裁", "身份撤销"]
  },
  "verify": {
    "title": "权威身份核验",
    "body": "输入 GFA 编号，核查试镜项目、机构或专业人士的官方授权状态。",
    "form": {
      "label": "官方编号",
      "placeholder": "GFA-AUTH-XXXX",
      "button": "查询数据库"
    },
    "result": {
      "valid": "官方认证 • 活跃",
      "expired": "认证已过期",
      "suspended": "由于违规正在接受调查",
      "notFound": "未核实 / 无记录",
      "details": "状态: 官方授权 • 级别: 已认证 • 核验机构: GFA 全球联盟"
    },
    "note": "关键词：官方 (Official) • 认证 (Certified) • 互信 (Trusted)"
  },
  "protection": {
    "title": "人才保护与合规",
    "subtitle": "安全。保护。合规。",
    "modelTitle": "监护人保障模型",
    "modelBody": "GFA 对未成年人强制执行“监护人优先”协议。任何未成年人与制作方的互动必须在加密且可追溯的监管下进行。",
    "modelItems": [
      "防诈骗核验工具",
      "合法合同标准模板",
      "家长保护控制面板",
      "未成年人权益保障法"
    ],
    "safeguards": [
      { 
        "title": "安全标准", 
        "items": [
          "严禁私人一对一试镜",
          "物理场地安全强制审计",
          "可追溯的数字通信记录",
          "片场安全合规监督员"
        ] 
      },
      { 
        "title": "防范陷阱", 
        "items": [
          "反乱收费定价审计",
          "禁止“保送出道”虚假承诺",
          "强制性的退费保障政策",
          "核实过的经纪公司资质"
        ] 
      },
      { 
        "title": "法律合规", 
        "items": [
          "标准化 GFA 公平合同模板",
          "监护人同意权利框架",
          "符合 GDPR-K 的数据保护",
          "人才肖像权与知识产权保护"
        ] 
      }
    ],
    "zeroTitle": "安全强制执行",
    "zeroDesc": "GFA 维护一份全球黑名单。任何违反安全或保护标准的行为将导致立即撤销证书，并移交国际执法部门。",
    "reportTitle": "报告安全违规？",
    "reportDesc": "匿名举报不安全的环境、过度收费或骚扰行为。",
    "reportCta": "提交安全报告"
  },
  "directory": {
    "title": "官方授权名录",
    "subtitle": "只有通过 GFA 标准审计的项目 and 机构才允许列入此表。",
    "registryCount": "官方核实数量",
    "tableHeaders": ["机构/项目名称", "授权编号", "状态", "有效期", "审计报告"],
    "statuses": { "active": "官方授权", "pending": "审核中", "blocked": "已暂停", "rev": "已撤销" },
    "note": "核实与信任：利用此名录确保您的职业安全。"
  },
  "reporting": {
    "title": "举报欺诈与违规",
    "subtitle": "维护电影行业生态的公信力。",
    "formTitle": "违规申报",
    "formLabels": { "type": "违规类型", "org": "实体名称", "desc": "陈述内容", "email": "联系邮箱", "submit": "提交报告" },
    "reportTypes": ["过度收费 / 隐形费用", "不安全的环境", "诈骗 / 虚假承诺", "未成年人安全违规", "不专业行为"],
    "processTitle": "解决路径",
    "process": [
      { "s": "受理", "d": "报告录入与初步分流。" },
      { "s": "审计", "d": "证据链与证人核查。" },
      { "s": "调解", "d": "直接调解或官方裁定。" },
      { "s": "处罚", "d": "罚金或身份撤回。" },
      { "s": "封禁", "d": "永久黑名单列入。" }
    ],
    "outcomesTitle": "合规行动",
    "outcomes": ["限期整改令", "强制退款要求", "官方权限暂停", "ID 永久吊销", "移交司法机关"]
  },
  "support": {
    "title": "行业扶持与金羽奖",
    "subtitle": "连接创作者与资源，助力卓越成就。",
    "intro": "GFA 扶持基金通过非营利援助及享有盛誉的“金羽奖” (Golden Feather Awards) 为行业人才提供成长土壤。",
    "programsTitle": "扶持路径",
    "p1Title": "创作基石",
    "p1Bullets": [
      "独立电影制作扶持",
      "毕业生作品专项基金",
      "金羽奖 (GFA Awards) 巡评"
    ],
    "p2Title": "技术与资源",
    "p2Bullets": [
      "镜头与器材专项资助",
      "摄影棚拍摄点数补贴",
      "后期制作全额奖学金"
    ],
    "p3Title": "资源对接",
    "p3Bullets": [
      "人才-剧组精准匹配",
      "项目-投资人引荐",
      "经纪机构-家长互荐"
    ],
    "howTitle": "匹配生命周期",
    "howBody": "评估 → 连接 → 资源分配 → 影响力评估",
    "transparencyTitle": "公平分配",
    "transparencyBody": "扶持方案基于认证的专业水平及社区贡献，由 GFA 基金会理事会统一监管。",
    "cta": "申请专项扶持"
  },
  "casting": {
    "title": "行业资源连接枢纽",
    "intro": "将经核实的人才与全球制作需求连接。这是一个受治理的环境，基于“连接、安置、行业准入”的核心理念。",
    "featuresTitle": "连接标准",
    "features": [
      "演员-剧组推荐对接",
      "经纪机构-家长引荐",
      "项目-投资人引荐",
      "经核实的资源路由",
      "GFA 成员专属交流网络"
    ],
    "ctaBrowse": "进入连接中心",
    "ctaPost": "发布需求申请",
    "note": "连接服务仅限 GFA 已认证成员，以确保专业质量。",
    "protectionTitle": "受审准入",
    "protectionDesc": "只有持有有效授权编号的剧组才能访问人才匹配数据库。"
  },
  "membership": {
    "title": "会员体系与官方背书",
    "intro": "加入全球电影诚信标准。获得权威认证凭证及全方位的职业保护。",
    "talentTitle": "专业人才会员",
    "orgTitle": "机构授权会员",
    "talentTiers": [
      { name: '基础', price: '¥0', perks: ['公共名录展示', '基础试镜机会'] },
      { name: '核验', price: '¥699/年', perks: ['已核验勋章', '优先资源匹配', '防诈骗法律保护'] },
      { name: '专业', price: '¥1999/年', perks: ['奖学金申请资格', '专业器材特权', '法务合同审计'], recommended: true },
      { name: '监护', price: '¥0', perks: ['未成年人保护面板', '强制抄送协议', '校园核实'] }
    ],
    "orgTiers": [
      { name: '授权', price: '¥0', perks: ['发布认证试镜', '基础机构中心'] },
      { name: '认证', price: '¥9999/年', perks: ['GFA 官方印记', '完整人才对接', '年度财务审计'] },
      { name: '影业', price: '¥24999/年', perks: ['企业级治理集成', '白皮书获取权', '优先合作伙伴'] }
    ],
    "entTitle": "政府与国家级机构",
    "entDesc": "针对电影局及国际制片委员会，提供定制化标准实施及区域数据监控方案。",
    "entCta": "联系机构合作部"
  },
  "partners": {
    "title": "官方合作伙伴",
    "intro": "经认证、承诺财务透明并具备卓越专业素质的优选供应商。",
    "catLabel": "业务分类",
    "countryLabel": "区域",
    "found": "找到 {n} 位受信任伙伴",
    "card": {
      "benefit": "成员专属权益",
      "eligibility": "信任等级要求",
      "address": "地区"
    }
  },
  "events": {
    "title": "GFA 授权活动",
    "intro": "受 GFA 标准监管的官方竞赛、颁奖及放映活动。",
    "sections": {
      "competitions": "金羽奖官方巡评",
      "screenings": "核准项目展映",
      "workshops": "治理与合规培训"
    },
    "cta": "申请参赛报名",
    "note": "只有获得 GFA 官方授权的活动才有资格进入“金羽奖”评选序列。",
    "eventStatus": ["金羽奖提名项目", "经核实的展映", "官方入选"]
  },
  "contact": {
    "title": "联系权威机构",
    "intro": "通往专业电影诚信生态的门户。",
    "labels": {
      "individual": "专业人士",
      "organization": "机构实体",
      "merchant": "已认证供应商",
      "join": "申请授权",
      "inquiries": "官方咨询",
      "press": "媒体公关"
    },
    "form": {
      "name": "法定名称 / 实体名",
      "email": "官方联系邮箱",
      "location": "全球所在地",
      "cat": "申请授权类型",
      "orgType": "机构类型",
      "message": "提案或项目简述",
      "consent": "我同意遵守 GFA 治理宪章及（如适用）未成年人保护合规条例。",
      "submit": "发送申请协议",
      "header": "{type} 授权申请入口"
    }
  },
  "policies": {
    "privacy": {
      "title": "全球数据隐私章程",
      "summary": "保护人才隐私及未成年人数据的加密存储。",
      "sections": {
        "数据收集": "数据仅用于身份验证及项目真实性审查。",
        "数据加密": "未成年人数据经 AES-256 加密，仅限监护人控制。",
        "数据使用": "严禁在未经监护人显式授权的情况下与第三方共享。"
      }
    },
    "terms": {
      "title": "治理条款",
      "summary": "GFA 生态系统内的参与准则。",
      "sections": {
        "行为准则": "所有成员必须严格遵守“四大铁律”。",
        "制裁机制": "任何违规行为将导致官方状态的立即公开吊销。",
        "审计授权": "成员同意接受定期的价格、安全及合规审计。"
      }
    },
    "parental": {
      "title": "监护人协议框架",
      "summary": "电影行业中针对儿童的强制性安全框架。",
      "sections": {
        "控制权": "监护人必须预先批准所有专业联络邀请。",
        "可见性": "未成年人档案对非核验用户完全隐藏。",
        "片场权利": "监护人陪同权是不可拨夺的 GFA 标准权利。"
      }
    },
    "content": {
      "title": "伦理与内容守则",
      "summary": "标准化的专业行为呈现。",
      "sections": {
        "诚信呈现": "严禁虚假作品集或欺骗性品牌包装。",
        "行业伦理": "公正呈现多样性，并确保制作环境绝对安全。",
        "制作合规": "严禁创作涉及未成年人的剥削性或有害内容。"
      }
    }
  },
  "footer": {
    "verification": "官方名录查询",
    "privacy": "数据隐私章程",
    "terms": "行业治理条款",
    "parental": "监护人协议",
    "content": "职业伦理守则",
    "copyright": "© {year} GFA 全球电影联盟 • 官方治理权威机构。",
    "desc": "独立的行业认证机构，专注于卓越制作、青少年保护及“金羽奖”公益基金会。"
  },
  "language": {
    "en": "English",
    "zh": "中文",
    "es": "Español",
    "fr": "Français",
    "it": "Italiano"
  }
};

const ES_JSON: Translation = { ...EN_JSON };
const FR_JSON: Translation = { ...EN_JSON };
const IT_JSON: Translation = { ...EN_JSON };

export const DICTIONARIES: Record<Locale, Translation> = {
  [Locale.EN]: EN_JSON,
  [Locale.ZH]: ZH_JSON,
  [Locale.ES]: ES_JSON,
  [Locale.FR]: FR_JSON,
  [Locale.IT]: IT_JSON,
};
