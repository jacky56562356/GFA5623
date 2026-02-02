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
    "loading": "Verifying..."
  },
  "home": {
    "hero": {
      "title": "GLOBAL FILM ALLIANCE",
      "subtitle": "Certification • Governance • Protection",
      "body": "GFA establishes independent standards to improve safety, transparency, and professionalism in the global film ecosystem. As a non-profit authority, we protect families and ensure institutional credibility.",
      "ctaPrimary": "Apply for Certification",
      "ctaSecondary": "View Governance",
      "ctaTertiary": "Verify a Program"
    },
    "trust": {
      "title": "Governance-First Cinema Standards",
      "body": "We provide transparent review criteria, structured safety workflows, and independent oversight designed to protect talent—especially minors—while ensuring production integrity."
    },
    "stats": {
      "certifiedTalents": "Certified Registry",
      "verifiedInstitutions": "Audit-Passed Entities",
      "supportedProjects": "Support Outcomes",
      "partnerMerchants": "Authorized Partners"
    },
    "pillars": {
      "title": "A Complete Ecosystem for Credible Growth",
      "p1Title": "Certification Authority",
      "p1Body": "Independent vetting of legal identities and professional standards.",
      "p2Title": "Global Talent Network",
      "p2Body": "Secure casting environments with mandatory guardian controls.",
      "p3Title": "Institutional Support",
      "p3Body": "Non-profit assistance for graduate films and emerging VFX talent.",
      "p4Title": "Alliance Benefits",
      "p4Body": "Verified member access to a trusted network of vendors."
    },
    "supportHighlight": {
      "title": "Supporting the Creators of Tomorrow",
      "card1": "Non-Profit Film Support",
      "card2": "Advanced Post Assistance",
      "card3": "Infrastructure Access",
      "cta": "Explore Support Programs"
    },
    "partnersTeaser": {
      "title": "The Alliance Partner Network",
      "body": "A vetted directory of essential services committed to GFA's transparency standards.",
      "cta": "Search Partner Directory"
    },
    "closing": {
      "title": "Build Your Future with Integrity.",
      "body": "Credibility, protection, and opportunity—designed for global cinematic excellence.",
      "cta": "Join the Alliance"
    }
  },
  "governance": {
    "title": "Governance, Standards & Youth Protection",
    "subtitle": "Independent certification, transparent pricing, and guardian-first safeguards for minors.",
    "roleTitle": "Section 1 — Our Role (Legal Positioning)",
    "roleBody": "GFA is an independent nonprofit standards and certification organization. We establish voluntary industry standards to improve safety, transparency, and professionalism across auditions, competitions, showcases, and training programs involving minors.",
    "roleTag1": "NON-REGULATORY",
    "roleTag1Desc": "GFA does not act as a government regulator. Participation in GFA certification is voluntary.",
    "roleTag2": "ECOSYSTEM ACCESS",
    "roleTag2Desc": "Only authorized programs may be listed, promoted, or supported within the GFA ecosystem.",
    "principlesTitle": "Section 2 — Core Principles",
    "principles": [
      { "title": "Child Safety First", "body": "The safety and well-being of minors take priority over commercial interests." },
      { "title": "Transparency Over Marketing", "body": "All fees, policies, and conditions must be clearly disclosed." },
      { "title": "No Hidden Costs", "body": "Parents must never face unexpected or forced charges." },
      { "title": "Guardian Control", "body": "Parents or guardians control all participation decisions for minors." },
      { "title": "Accountability", "body": "Certified organizations are subject to review, audits, and possible revocation." }
    ],
    "policyTitle": "Section 3 — “Authorization Before Promotion” Policy",
    "policyBody": "To protect families and ensure credibility: Any audition, competition, showcase, or training activity involving minors that wishes to be listed, recruit, or use branding within GFA must obtain GFA Authorization.",
    "policyItems": ["Listed on GFA", "Recruit through GFA", "Use GFA Branding", "Receive GFA Support", "Access Talent Network"],
    "policyNote": "Programs operating independently without authorization are not reviewed or endorsed by GFA."
  },
  "standards": {
    "title": "Certification & Authorization Standards",
    "subtitle": "Clear, objective, and professional review criteria across four essential categories.",
    "catA": {
      "title": "A. Organization Verification Standards",
      "tag": "Identity Audit",
      "docsTitle": "Required Documents",
      "docs": ["Legal business registration", "Responsible persons list", "Physical address verification", "Contact transparency", "Past activity history"],
      "matrixTitle": "Compliance Matrix",
      "matrixBody": "Organizations must demonstrate legitimate operations, identifiable leadership, and traceable accountability.",
      "disqual": "Disqualification: Fake addresses, shell companies, unverifiable ownership, history of complaints/fraud."
    },
    "catB": {
      "title": "B. Youth Protection Standards (Mandatory)",
      "tag": "Critical Priority",
      "sub1": "Guardian Control",
      "sub1Items": ["Pre-participation Consent", "Payment Approval Flow", "Media Release Approval", "Access to Schedules"],
      "sub2": "On-site Safety",
      "sub2Items": ["Published Venue Info", "Emergency Protocols", "Adult Supervision Policy", "No Private 1-on-1s"],
      // Fixed: Added missing 'sub3' property for standard Cat B
      "sub3": "Note",
      "sub3Body": "Immediate suspension for: Harassment, grooming behavior, pressure selling, or coercive contracts."
    },
    "catC": {
      "title": "C. Pricing Transparency Standards",
      "tag": "Anti-Overcharging",
      "discTitle": "Mandatory Disclosure",
      "discBody": "Organizations must publish an itemized price table covering registration, auditions, training, and optional services.",
      "prohibTitle": "Strictly Prohibited",
      "prohibBody": "Hidden fees, forced packages, surprise charges, 'pay more = higher chance' claims.",
      "compliance": "Billing Compliance: Invoices must match published prices exactly. Mismatch results in immediate violation."
    },
    "catD": {
      "title": "D. Professional & Educational Value",
      "tag": "Quality Audit",
      "critTitle": "Core Criteria",
      "critBody": "Qualified instructors/judges, structured curriculum, clear learning outcomes, and real development opportunities.",
      "rejTitle": "Rejected Models",
      "rejBody": "Profit-driven 'photo events', fake awards, meaningless certificates, no educational value."
    }
  },
  "transparency": {
    "title": "Pricing Transparency Standard",
    "subtitle": "Parents deserve complete clarity before paying for any youth program.",
    "tableTitle": "Mandatory Pricing Table (Template)",
    "tableHeaders": ["Item", "Price", "Required/Optional", "Description", "Refundable"],
    "rulesTitle": "Disclosure Rules",
    "rules": ["Publish pricing before registration", "Explain what each fee covers", "State refund policy clearly", "Avoid vague 'packages'"],
    "protectionTitle": "Parent Protection Rules",
    "protectionRules": ["Right to see all fees before payment", "Right to receive official receipts", "Right to request refunds per policy", "Right to file formal complaints"],
    "enforcementTitle": "Enforcement & Violations",
    "enforcementItems": ["Official Warning", "Suspension", "Certificate Freeze", "Revocation", "Public Removal"]
  },
  "protection": {
    "title": "Youth Protection & Guardian Controls",
    "subtitle": "Independent safeguards designed to protect young talent within the film industry.",
    "modelTitle": "Guardian-First Model",
    "modelBody": "For minors, the platform is structured around parental authority. No action can be taken without guardian oversight.",
    "modelItems": ["Parents control accounts", "Parents approve participation", "Parents approve payments", "Parents approve media release"],
    "safeguards": [
      { "title": "Audition Safety", "items": ["Platform-managed communication", "No private direct contact", "Scheduled locations disclosed", "System-only self-tape uploads", "Digital audit trail"] },
      { "title": "Training Safety", "items": ["Verified instructors only", "No private unsupervised sessions", "Transparent curriculum", "Formal complaint mechanism"] },
      { "title": "Media Protection", "items": ["Tiered visibility controls", "Guardian consent required", "Immediate withdrawal right", "Encrypted storage"] }
    ]
  },
  "directory": {
    "title": "Authorized Auditions & Events",
    "subtitle": "Only programs that meet strict GFA standards are permitted in this directory.",
    "registryCount": "Verified Registry Count",
    "tableHeaders": ["Organization Name", "Certificate ID", "Status", "Expiry", "Actions"],
    "statuses": { "active": "Authorized", "pending": "Under Review", "blocked": "Suspended", "rev": "Revoked" },
    "note": "Notice: If you are participating in a program claiming GFA authorization that is not listed here, please use the report tool immediately."
  },
  "reporting": {
    "title": "Report Misconduct or Overcharging",
    "subtitle": "Help protect minors and families by reporting unethical behavior or standard violations.",
    "formTitle": "Report Form",
    "formLabels": { "type": "Report Type", "org": "Organization Name", "desc": "Detailed Description", "email": "Contact Email", "submit": "Submit Report" },
    "reportTypes": ["Hidden Fees / Overcharging", "Unsafe Environment", "Harassment / Grooming", "False Promises / Scams", "Unprofessional Conduct"],
    "processTitle": "Investigation Process",
    "process": [
      { "s": "Intake", "d": "Record entry and triage." },
      { "s": "Review", "d": "Document and evidence review." },
      { "s": "Response", "d": "Official organization rebuttal." },
      { "s": "Decision", "d": "Formal compliance ruling." },
      { "s": "Enforcement", "d": "Execution of penalties." }
    ],
    "outcomesTitle": "Possible Outcomes",
    "outcomes": ["Correction Request", "Refund Requirement", "Suspension", "Revocation", "Global Blacklist"]
  },
  "about": {
    "title": "GFA Governance",
    "missionTitle": "The Mandate",
    "missionBody": "To establish professional safety standards, enforce pricing transparency, and protect the next generation of film talent through independent oversight.",
    "visionTitle": "Global Impact",
    "visionBody": "To become the unified standard of trust and accountability for filmmakers and institutions worldwide.",
    "whatTitle": "Core Functions",
    "whatBullets": [
      "Certification & Governance",
      "Youth Protection Auditing",
      "Pricing Transparency Enforcement",
      "Non-Profit Support Allocation",
      "Verified Directory Maintenance"
    ],
    "transparencyTitle": "Global Accountability",
    "transparencyBody": "As an independent non-profit, GFA prioritizes a digital audit trail for all certifications, financial disclosures for events, and public verification of credentials."
  },
  "certification": {
    "title": "Certification & Governance",
    "subtitle": "Verifiable standards for a credible film industry.",
    "typesTitle": "Authorization Tiers",
    "types": [
      "Talent Verified ID",
      "Agency Authorized Status",
      "Authorized Training Program",
      "GFA Sanctioned Event",
      "Audition Workflow Verified",
      "Standard Project Audit"
    ],
    "processTitle": "The Audit Process",
    "processBody": "Application → Identity Audit → Standards Review → Final Approval → Certificate Issuance → Registry Listing",
    "valueTitle": "Why Authority Matters",
    "valueBullets": [
      "Public real-time verification",
      "Fraud and overcharging protection",
      "Guardian-first safety compliance",
      "International institutional recognition"
    ],
    "cta": "Apply for Certification",
    "verifyCardTitle": "Public Registry",
    "verifyCardBody": "Validate the authorization status of any person, entity, or event within the GFA ecosystem."
  },
  "verify": {
    "title": "Global Registry Verification",
    "body": "Enter a GFA Authorization ID to validate status in the real-time global database.",
    "form": {
      "label": "GFA ID",
      "placeholder": "GFA-2026-XXXX",
      "button": "Verify ID"
    },
    "result": {
      "valid": "Authorized & Active",
      "expired": "Authorization Expired",
      "suspended": "Suspended / Under Investigation",
      "notFound": "No Record Found"
    },
    "note": "Authorized entities must display their GFA ID on all promotional materials."
  },
  "support": {
    "title": "Non-Profit Support",
    "subtitle": "Structured assistance for emerging cinema.",
    "intro": "The GFA Support Programs provide non-profit assistance to emerging creators, ensuring that professional resources are distributed based on talent and integrity, not commercial pressure.",
    "programsTitle": "Pathways",
    "p1Title": "Graduate Development",
    "p1Bullets": [
      "Script & story mentorship",
      "Non-profit production resources",
      "International festival strategy"
    ],
    "p2Title": "Technical finishing",
    "p2Bullets": [
      "Post-production assistance",
      "VFX compositing resources",
      "Global delivery standards"
    ],
    "p3Title": "Infrastructure Access",
    "p3Bullets": [
      "Authorized studio facilities",
      "Shared equipment ecosystem",
      "Production logistics support"
    ],
    "howTitle": "Support Lifecycle",
    "howBody": "Application → Review → Resource Allocation → Milestone Check → Outcome Showcase",
    "transparencyTitle": "Accountability",
    "transparencyBody": "Every supported project undergoes a transparent review to ensure resources are used according to the GFA Charter.",
    "cta": "Apply for Support"
  },
  "casting": {
    "title": "Global Talent Hub",
    "intro": "A secure professional environment connecting verified talent with global productions. Managed through GFA governance to ensure privacy and minor protection.",
    "featuresTitle": "Governance Features",
    "features": [
      "Verified Talent Profiles",
      "Independent Casting Audits",
      "Mandatory Guardian Controls",
      "Encrypted Communication",
      "Vetted Production Access"
    ],
    "ctaBrowse": "Search Registry",
    "ctaPost": "Authorize a Project",
    "note": "Production entities must hold a valid GFA Authorization to access the Full Talent Registry."
  },
  "membership": {
    "title": "Alliance Membership",
    "intro": "Membership funds our non-profit governance and support programs while providing professionals with verified credentials.",
    "tiersTitle": "Registration Tiers",
    "talentTitle": "Individual / Family",
    "orgTitle": "Institutional / Studio",
    "talentTiers": ["Basic", "Standard", "Professional", "Gold"],
    "orgTiers": ["Associate", "Authorized", "Institutional"],
    "benefitsTitle": "Alliance Benefits",
    "benefits": [
      "Verified Registry Status",
      "Priority Program Access",
      "Governance Audit Support",
      "Alliance Partner Network Access",
      "Legal & Compliance Resources"
    ],
    "cta": "Become a Member",
    "disclaimer": "Membership status is subject to annual compliance reviews."
  },
  "partners": {
    "title": "Alliance Partners",
    "intro": "Authorized merchants and services that have committed to the GFA Transparency Standard.",
    "filtersTitle": "Refine",
    "filterLocation": "Region",
    "filterCategory": "Service",
    "filterMembership": "Member Access",
    "sortTitle": "Order",
    "sortNearest": "Distance",
    "sortNewest": "Latest",
    "sortPopular": "Rank",
    "card": {
      "benefit": "Benefit",
      "eligibility": "Requirement",
      "address": "Contact"
    },
    "cta": "Apply to be a Partner",
    "formTitle": "Partner Onboarding",
    "form": {
      "businessName": "Entity name",
      "businessType": "Industry",
      "country": "Nation",
      "state": "Region",
      "city": "City",
      "offer": "Commitment to Members",
      "contactName": "Officer name",
      "contactEmail": "Contact email",
      "consent": "I affirm commitment to GFA Governance Standards.",
      "submit": "Initiate Application"
    }
  },
  "events": {
    "title": "Authorized Events",
    "intro": "Only competitions, workshops, and screenings that have obtained GFA Authorization appear in this directory.",
    "sections": {
      "competitions": "Authorized Showcases",
      "screenings": "Sanctioned Screenings",
      "workshops": "Governance Training"
    },
    "cta": "Register for Event",
    "note": "GFA does not endorse independent events operating without a valid Authorization ID."
  },
  "contact": {
    "title": "Contact the Alliance",
    "intro": "Inquiries regarding governance, certification, or miscondct reports.",
    "formsTitle": "Access Pathways",
    "f1Title": "Talent Join",
    "f2Title": "Institutional Audit",
    "f3Title": "Merchant Partnership",
    "form": {
      "name": "Full name",
      "email": "Email",
      "location": "Location",
      "message": "Inquiry details",
      "consent": "I consent to the GFA Privacy Charter.",
      "submit": "Transmit"
    }
  },
  "footer": {
    "verification": "Registry Search",
    "privacy": "Privacy Charter",
    "terms": "Terms of Authority",
    "parental": "Guardian Consent",
    "content": "Ethics Policy",
    "copyright": "© {year} GFA Global Film Alliance • A Non-Profit Governance Body."
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
      "protection": "青少年保护",
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
  "governance": {
    "title": "治理、标准与青少年保护",
    "subtitle": "针对未成年人的独立认证、价格透明及监护人优先保障。",
    "roleTitle": "第一节 — 我们的职能（法律定位）",
    "roleBody": "GFA 是一家独立的非营利标准与认证组织。我们建立自愿性的行业标准，以提高涉及未成年人的试镜、比赛、展示和培训计划的安全、透明和专业化水平。",
    "roleTag1": "非监管机构",
    "roleTag1Desc": "GFA 不具备政府监管职能。参与 GFA 认证属于自愿行为。",
    "roleTag2": "生态准入",
    "roleTag2Desc": "只有获得授权的项目才可以在 GFA 生态内列出、推广或获得支持。",
    "principlesTitle": "第二节 — 核心原则",
    "principles": [
      { "title": "青少年安全第一", "body": "未成年人的安全与福祉优先于商业利益。" },
      { "title": "透明度高于营销", "body": "所有费用、政策和条件必须明确公示。" },
      { "title": "无隐形成本", "body": "家长绝不会面临意料之外或被强制收取的费用。" },
      { "title": "监护人控制", "body": "家长 or 监护人掌握未成年人参与的所有决定权。" },
      { "title": "问责机制", "body": "认证机构须接受审查与审计，违规将被撤销资格。" }
    ],
    "policyTitle": "第三节 — “先授权后推广”政策",
    "policyBody": "为保护家庭并确保公信力：任何涉及未成年人且希望在 GFA 体系内展示、招聘或使用 brand 标识的活动，必须获得 GFA 授权。",
    "policyItems": ["在 GFA 列出", "通过 GFA 招聘", "使用 GFA 品牌", "获得 GFA 支持", "访问人才名录"],
    "policyNote": "未获得授权而独立运行的项目不受 GFA 的审核或背书。"
  },
  "standards": {
    "title": "认证与授权标准",
    "subtitle": "涵盖四个基本类别的清晰、客观且专业的评审准则。",
    "catA": {
      "title": "A. 机构验证标准",
      "tag": "身份审计",
      "docsTitle": "所需文件",
      "docs": ["企业合法注册证明", "负责人名录", "物理地址验证", "联系方式透明化", "过往活动记录"],
      "matrixTitle": "合规矩阵",
      "matrixBody": "机构必须证明其合法运营、具备可识别的领导层以及可追溯的问责制。",
      "disqual": "取消资格情形：虚假地址、壳公司、无法核实的所有权、投诉/欺诈记录。"
    },
    "catB": {
      "title": "B. 青少年保护标准（强制性）",
      "tag": "最高优先级",
      "sub1": "监护人控制",
      "sub1Items": ["参与前知情同意", "付款审核流程", "肖像发布批准", "日程访问权限"],
      "sub2": "现场安全",
      "sub2Items": ["公开场馆信息", "紧急处理预案", "成人监督政策", "禁止私人单独接触"],
      // Fixed: Added missing 'sub3' property for standard Cat B
      "sub3": "注意事项",
      "sub3Body": "出现以下情况立即停职：骚扰、引诱行为、强迫推销或胁迫性合同。"
    },
    "catC": {
      "title": "C. 价格透明度标准",
      "tag": "防虚高收费",
      "discTitle": "强制公示",
      "discBody": "机构必须公布详细的价格表，涵盖注册、试镜、培训和可选服务。",
      "prohibTitle": "严厉禁止",
      "prohibBody": "隐形费用、捆绑包、惊喜收费、“交钱多机会多”的虚假陈述。",
      "compliance": "账单合规：发票必须与公示价格完全一致。不符者将面临立即违规处罚。"
    },
    "catD": {
      "title": "D. 专业与教育价值",
      "tag": "质量审计",
      "critTitle": "核心准则",
      "critBody": "具备资质的导师/评委、结构化的课程、清晰的学习成果以及真实的职业机会。",
      "rejTitle": "拒绝的模式",
      "rejBody": "以盈利为目的的“拍照活动”、虚假奖项、无意义的证书、无教育价值。"
    }
  },
  "transparency": {
    "title": "价格透明标准",
    "subtitle": "在为任何青少年项目付费前，家长理应获得完全的透明度。",
    "tableTitle": "强制性价格表（模板）",
    "tableHeaders": ["项目", "价格", "必选/可选", "描述", "是否退款"],
    "rulesTitle": "公示规则",
    "rules": ["注册前公布价格", "解释每笔费用的覆盖内容", "明确说明退款政策", "避免含义模糊的“包价格”"],
    "protectionTitle": "家长保护规则",
    "protectionRules": ["付款前查看所有费用的权利", "获得正式收据的权利", "按政策要求退款的权利", "提出正式投诉的权利"],
    "enforcementTitle": "强制执行与违规处罚",
    "enforcementItems": ["官方警告", "暂停资格", "证书冻结", "撤回授权", "公开除名"]
  },
  "protection": {
    "title": "青少年保护与监护人控制",
    "subtitle": "旨在保护影视行业年轻人才的独立保障措施。",
    "modelTitle": "监护人优先模型",
    "modelBody": "对于未成年人，平台完全围绕监护人权限构建。未经监护人监督，不得采取任何行动。",
    "modelItems": ["家长控制账号", "家长批准参与", "家长批准付款", "家长批准肖像发布"],
    "safeguards": [
      { "title": "试镜安全", "items": ["平台管理通信", "禁止私下直接联系", "公开日程地点", "系统限定样带上传", "数字审计追踪"] },
      { "title": "培训安全", "items": ["仅限经认证的导师", "禁止私人无监督课时", "透明化的课程大纲", "正式投诉机制"] },
      { "title": "媒体保护", "items": ["分级可见性控制", "强制监护人同意", "立即撤回权限", "加密存储"] }
    ]
  },
  "directory": {
    "title": "授权试镜与活动",
    "subtitle": "只有符合 GFA 严格标准的项目才被允许列入此名录。",
    "registryCount": "经验证的注册总数",
    "tableHeaders": ["机构名称", "证书 ID", "状态", "到期日", "操作"],
    "statuses": { "active": "已授权", "pending": "审核中", "blocked": "已暂停", "rev": "已撤销" },
    "note": "注意：如果您参与的活动声称拥有 GFA 授权但在名录中无法找到，请立即进行举报。"
  },
  "reporting": {
    "title": "报告违规或过度收费",
    "subtitle": "通过报告不道德行为或违反标准的情况，帮助保护未成年人和家庭。",
    "formTitle": "报告表单",
    "formLabels": { "type": "报告类型", "org": "机构名称", "desc": "详细描述", "email": "联系邮箱", "submit": "提交报告" },
    "reportTypes": ["隐藏费用 / 过度收费", "不安全环境", "骚扰 / 引导行为", "虚假承诺 / 诈骗", "不专业行为"],
    "processTitle": "调查流程",
    "process": [
      { "s": "接收", "d": "记录报告并进行分类。" },
      { "s": "审查", "d": "审核文档 with 证据。" },
      { "s": "回应", "d": "涉事机构进行官方答辩。" },
      { "s": "裁定", "d": "做出正式合规裁决。" },
      { "s": "执行", "d": "执行相关处罚措施。" }
    ],
    "outcomesTitle": "可能的结果",
    "outcomes": ["限期整改", "退款要求", "暂停授权", "撤销授权", "全球黑名单"]
  },
  "footer": {
    "verification": "名录查询",
    "privacy": "隐私章程",
    "terms": "授权条款",
    "parental": "监护人同意",
    "content": "伦理政策",
    "copyright": "© {year} GFA 全球电影联盟 • 非营利治理机构。"
  }
};

const ES_JSON: Translation = {
  ...EN_JSON,
  "meta": { "siteName": "GFA Alianza Global de Cine", "tagline": "Certificación Independiente • Gobernanza Global • Protección de Talento" },
  "nav": {
    "home": "Inicio", "about": "Autoridad", "certification": "Certificación y Gobernanza",
    "certGov": {
      "overview": "Resumen", "verify": "Verificar Certificado", "governance": "Gobernanza y Principios",
      "standards": "Estándares de Autorización", "transparency": "Transparencia de Precios",
      "protection": "Protección Juvenil", "directory": "Directorio Autorizado", "reporting": "Reportar Mala Conducta"
    },
    "support": "Programas de Apoyo", "casting": "Talento Global", "membership": "Membresía",
    "partners": "Socios", "events": "Eventos Autorizados", "contact": "Contacto / Unirse",
    "verify": "Verificar ID", "policies": "Políticas", "language": "Idioma"
  }
};

const FR_JSON: Translation = {
  ...EN_JSON,
  "meta": { "siteName": "GFA Alliance Mondiale du Cinéma", "tagline": "Certification Indépendante • Gouvernance Mondiale • Protection des Talents" },
  "nav": {
    "home": "Accueil", "about": "Autorité", "certification": "Certification & Governance",
    "certGov": {
      "overview": "Aperçu", "verify": "Vérifier le Certificat", "governance": "Gouvernance et Principes",
      "standards": "Normes d'Autorisation", "transparency": "Transparence des Prix",
      "protection": "Protection de la Jeunesse", "directory": "Annuaire Agréé", "reporting": "Signaler un Inconduite"
    },
    "support": "Programmes d'Aide", "casting": "Talents Mondiaux", "membership": "Adhésion",
    "partners": "Partenaires", "events": "Événements Agréés", "contact": "Contact / Rejoindre",
    "verify": "Vérifier ID", "policies": "Politiques", "language": "Langue"
  }
};

const IT_JSON: Translation = {
  ...EN_JSON,
  "meta": { "siteName": "GFA Alleanza Globale del Cinema", "tagline": "Certificazione Indipendente • Governance Globale • Protezione Talenti" },
  "nav": {
    "home": "Home", "about": "Autorità", "certification": "Certificazione e Governance",
    "certGov": {
      "overview": "Panoramica", "verify": "Verifica Certificato", "governance": "Governance e Principi",
      "standards": "Standard di Autorizzazione", "transparency": "Trasparenza dei Prezzi",
      "protection": "Protezione dei Giovani", "directory": "Elenco Autorizzato", "reporting": "Segnala Inconduzione"
    },
    "support": "Programmi di Sostegno", "casting": "Talento Globale", "membership": "Iscrizione",
    "partners": "Partner", "events": "Eventi Autorizzati", "contact": "Contatti / Unisciti",
    "verify": "Verifica ID", "policies": "Politiche", "language": "Lingua"
  }
};

export const DICTIONARIES: Record<Locale, Translation> = {
  [Locale.EN]: EN_JSON,
  [Locale.ZH]: ZH_JSON,
  [Locale.ES]: ES_JSON,
  [Locale.FR]: FR_JSON,
  [Locale.IT]: IT_JSON,
};