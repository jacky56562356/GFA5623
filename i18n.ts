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
    loading: "Accessing Registry Data...",
    searchRegistry: "Search Directory",
    searchPlaceholder: "Name, ID, or Keywords...",
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
    zhLegal: "全球电影联盟 (GFA) 是一家独立的非营利行业标准与透明度组织。我们不监管或许可政府机构。GFA 提供自愿的第三方认证和公开核查，以支持更安全的行业决策。"
  },
  registry: {
    title: "Public Information Registry",
    subtitle: "Verify the certification status, validity, and trust metrics of industry organizations in real-time.",
    viewDetails: "View Institutional Profile",
    reportConcern: "Report Concern",
    trustScore: "GFA Trust Index",
    lastReviewed: "Last Audit",
    nextReview: "Next Scheduled Review",
    disclosure: "Public Disclosures",
    transparencyIndicators: "Transparency Indicators",
    disclaimerBody: "Institutional data is verified by GFA audits. This record is a point-in-time snapshot and does not constitute a legal guarantee.",
    validity: "Audit Period",
    results: "Institutional Records Found",
    scoreLabel: "Transparency Index",
    statusLabels: { active: "Verified Active", suspended: "Suspended", expired: "Expired", revoked: "Revoked" }
  },
  footer: {
    desc: "Independent nonprofit industry standards organization. Promoting accountable and safe film communities.",
    copyright: "© {year} Global Film Alliance. All Rights Reserved."
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
    registry: "信息公示名录",
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
    searchPlaceholder: "机构名称、ID 或 关键词...",
    reset: "重置筛选",
    filters: "机构筛选",
    category: "机构类型",
    level: "认证级别",
    status: "有效期",
    city: "城市",
    country: "国家",
    sort: "排序方式",
    results: "发现机构记录"
  },
  registry: {
    ...EN_JSON.registry,
    title: "信息公示名录",
    subtitle: "实时核实全球电影机构的认证状态、有效期及信任评分。",
    viewDetails: "查看机构档案",
    reportConcern: "报告违规",
    trustScore: "GFA 信任指数",
    lastReviewed: "最后审计",
    nextReview: "计划审计",
    disclosure: "公开披露",
    transparencyIndicators: "透明度指标",
    disclaimerBody: "机构数据由 GFA 审计核实。此记录为实时快照，不构成法律保证。",
    validity: "审计有效期",
    results: "发现机构记录",
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