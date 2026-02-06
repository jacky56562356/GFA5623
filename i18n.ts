
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
    searchPlaceholder: "Search name / certification ID / keyword",
    required: "Statutory Mandatory",
    optional: "Recommended",
    reset: "Reset",
    filters: "Filters",
    category: "Category",
    level: "Level",
    status: "Status",
    city: "City",
    country: "Country",
    sort: "Sort",
    results: "Results"
  },
  disclaimer: {
    title: "Institutional Disclaimer",
    legal: "Global Film Alliance (GFA) is an independent nonprofit industry standards and transparency organization. We do not regulate or license government authorities. GFA provides voluntary third-party certification and public verification to support safer industry decisions.",
    body: "Registry listings reflect voluntary participation and disclosed information. Please verify any required licenses or legal obligations independently.",
    zhLegal: "全球电影联盟 (GFA) 是一家独立的非营利行业标准与透明度组织。我们不监管或许可政府机构。GFA 提供自愿的第三方认证和公开核查，以支持更安全的行业决策。"
  },
  registry: {
    title: "Public Certification Registry",
    subtitle: "Search organizations and verify certification status. Our database serves as a transparency hub for families and professionals.",
    viewDetails: "View Details",
    reportConcern: "Report a Concern",
    trustScore: "Trust Score",
    certification: "Certification",
    validity: "Validity",
    lastReviewed: "Last Reviewed",
    nextReview: "Next Review",
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
