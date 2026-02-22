import { Locale, Translation } from './types.ts';

export const DICTIONARIES: Record<Locale, Translation> = {
  [Locale.EN]: {
    meta: { siteName: "Global Film Alliance (GFA)", tagline: "Industry Support, Standards & Professional Network" },
    common: { loading: "Accessing Records...", filters: "Filters", reset: "Reset", category: "Category", level: "Level", status: "Status", required: "Required", optional: "Optional", searchPlaceholder: "Search by Name or ID", searchRegistry: "Search Registry", view: "View", region: "Region" },
    nav: { home: "Home", certification: "Certification", childSafety: "Youth Safeguarding", graduateSupport: "Programs", registry: "Registry", complaints: "Feedback", about: "About", governance: "Governance", membership: "Membership", partners: "Partners", contact: "Contact", login: "Login", join: "Become a Member", memberPortal: "Member Portal", admin: "Admin Console" },
    disclaimer: { title: "Institutional & Legal Status", statutory: "GFA Certification is a voluntary professional recognition program developed by the Global Film Alliance to promote transparency, safety practices, and industry best standards. It does not replace any government license or legal authorization.", legal: "GFA certifications are voluntary professional recognitions and do not replace any government licenses, permits, or legal authorizations. The Global Film Alliance (GFA) is an independent non-profit service organization.", heroWarning: "Our certifications do not replace any government license or authorization." },
    home: { hero: { kicker: "Independent Nonprofit • Voluntary Standards • Global Network", title: "Global Film Alliance", subhead: "Trust, Safety, and Opportunity Across the Film Industry", body: "We provide voluntary certification frameworks, youth safeguarding guidance, and professional support programs for agencies, productions, and emerging filmmakers.", ctaPrimary: "Become a Member", ctaSecondary: "View Programs", btnCertify: "Apply for Certification" }, trust: { label: "Official Recognition", badge: "Voluntary • Transparent • Professional", guilds: ["Global Production Guild", "Cinematic Arts Council", "Independent Film Bureau"], integrity: "Industry Integrity", upholding: "Upholding Industry Professionalism", professionalismBody: "Professionalism in film relies on collective industry commitment. We provide a neutral channel for professional support and help standardized guidelines for cinematic workplaces worldwide.", operational: "Operational" }, searchRegistry: { title: "Search GFA Verified Organizations", subtitle: "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards.", cta: "Search Registry", ui: { tabs: { org: "Organization Search", bond: "Verify Bond / License", project: "Project Status" }, labels: { name: "Entity Name / ID", category: "Category", phone: "Phone Check", license: "License / Tax ID", country: "Country", state: "State / Prov", city: "City", address: "Street Address" }, placeholders: { name: "Name, ID, or Reg No.", phone: "+1 (000) 000-0000", license: "Official License No.", state: "State", city: "City", address: "Registered Address Search..." }, options: { allTypes: "All Types", agency: "Agency", production: "Production", school: "School", casting: "Casting", global: "Global" }, filters: { verified: "Verified Active", bonded: "Bonded Services Only", affiliates: "Includes Affiliates" }, trending: { label: "Trending:", la: "Los Angeles Agencies", uk: "Safe Sets UK", casting: "Casting Directors" } } }, whatWeDo: { title: "Core Service Pillars", subtitle: "A structured, policy-first platform for industry transparency, safety practices, and career development.", cards: [{ title: "Voluntary Certification", body: "A standardized framework for organizations to demonstrate commitment to ethical production and financial transparency.", link: "Certification Guidelines" }, { title: "Youth Safeguarding", body: "Independent guidance and professional background vetting protocols to ensure the safety of minors in cinematic environments.", link: "Safety Standards" }, { title: "Career & Industry Access", body: "Connecting verified talent with project matchmaking, equipment resources, and supported mentorship pathways.", link: "Access Programs" }] }, charter: { title: "GFA Charter Status", points: ["Independent Institutional Support", "Global Industry Best Practices", "Non-Commercial Service Mandate"] }, globalPresence: { title: "Global Strategic Presence", subtitle: "Institutional hubs in key production markets.", networkKicker: "Institutional Network", stats: [{ val: "14", label: "Regional Hubs" }, { val: "86", label: "Partner Agencies" }], locations: [{ city: "London", role: "European HQ" }, { city: "Los Angeles", role: "Legal Compliance" }, { city: "Beijing", role: "Asia-Pacific Center" }, { city: "Paris", role: "Cultural Liaison" }] }, safeguardingSection: { title: "Youth Safeguarding & Trusted Industry Standards", subtitle: "Building a safer, fairer, and more transparent pathway into the film and performing arts industry for families, young talents, and professional organizations.", cards: [{ title: "Verified", text: "Certified and reviewed organizations only" }, { title: "Transparent", text: "Clear fees and written agreements" }, { title: "Protected", text: "Financial safeguards up to $50,000" }, { title: "Trusted", text: "Public ratings and ongoing monitoring" }], whyExists: { title: "Why This System Exists", p1: "Entering the film industry can be confusing and risky for young performers and their families. Unverified auditions, hidden fees, unregulated training programs, and misleading promises often create financial loss and uncertainty.", p2: "Families need more than opportunities — they need clarity, accountability, and institutions they can trust. The Global Film Alliance establishes independent standards to create a safer and more professional environment for youth participation." }, howHelps: { title: "How GFA Helps Families", list: ["Search and verify certified organizations", "Access transparent pricing and contracts", "Choose safer auditions and training environments", "Reduce risks of fraud or unethical practices", "Make informed decisions with confidence"] }, requirements: { title: "Certification Requirements", list: [{ l: "Legal Compliance:", t: "Verified registration, business legitimacy, and operational transparency" }, { l: "Transparent Fees:", t: "Clear pricing, written contracts, no hidden charges" }, { l: "Youth Safety Practices:", t: "Safe audition procedures and professional conduct standards" }, { l: "Professional Capability:", t: "Qualified instructors and proven services" }, { l: "Financial Responsibility:", t: "Security deposits or safeguards up to $50,000" }, { l: "Public Rating System:", t: "Searchable certification status and ongoing review" }] }, benefits: { title: "Benefits for Organizations", list: ["Official certification badge and credibility", "Public listing on the GFA platform", "Increased trust from families and partners", "More exposure and collaboration opportunities", "Access to industry resources, studios, and networks"] } } },
    about: { hero: { kicker: "Institutional Profile", title: "About Global Film Alliance", subtitle: "Building the standard for global cinematic excellence and safety." }, mission: { title: "Our Mission", body: "To provide an independent framework for professional recognition and youth protection in the film industry." }, vision: { title: "Our Vision", body: "A film industry where every professional and young talent operates in a safe, transparent, and verified environment." }, whoWeAre: { title: "Institutional Oversight", body: "We are an independent non-profit body dedicated to maintaining cinematic workplace standards." }, whatWeDo: { title: "Our Core Services", items: [{ icon: "⚖️", title: "Standards", desc: "Setting the benchmark for ethical production." }, { icon: "🛡️", title: "Protection", desc: "Global safeguarding protocols for minors." }, { icon: "🎓", title: "Support", desc: "Pathways for emerging filmmakers." }] }, certification: { title: "Certification Framework", body: "Our three-tier certification system allows agencies to verify their commitment to best practices." }, youthProtection: { title: "Zero Tolerance Policy", body: "Ensuring every production environment meets our strict youth safety act." }, support: { title: "Industry Support", body: "Connecting certified members with exclusive resources and networking." }, network: { title: "Global Reach", body: "Operating across major film hubs worldwide." }, governance: { title: "Public Accountability", body: "Governed by a charter of ethics and transparency." }, impact: { title: "Our Impact", stats: [{ value: "500+", label: "Certified Entities" }, { value: "12", label: "Countries" }, { value: "A+", label: "Trust Rating" }, { value: "24/7", label: "Oversight" }] }, cta: { title: "Join the Alliance", body: "Signal your commitment to professional industry standards today.", button: "Inquire Now" } },
    safeguarding: { 
      title: "Youth Safeguarding Oversight", 
      subtitle: "Maintaining the industry's highest standards for minor welfare.", 
      kicker: "GFA Protection",
      titleEn: "Global Standards",
      btns: { report: "Report a Concern", checklist: "Family Checklist" },
      policyLink: "View Full Policy", 
      reportingCta: "Report a Concern", 
      verificationTool: { title: "Verify Project Registration", placeholder: "Enter GFA-ID...", btn: "Audit Now", note: "Verification of official casting calls and events." }, 
      intro: {
        title: "Protecting the Future of Film",
        body: "The entertainment industry offers incredible opportunities, but it also presents unique risks for young performers. The GFA is dedicated to creating a safe, transparent, and professional environment where talent can thrive without compromising their well-being. Our comprehensive framework ensures that every interaction—from audition to production—adheres to strict ethical guidelines designed to protect minors from exploitation, harassment, and unsafe working conditions.",
        imageAlt: "Young performers on set"
      },
      tips: {
        title: "Safety First: Quick Tips",
        list: [
          { t: "Always Ask", d: "Legitimate agencies welcome questions about their policies." },
          { t: "Trust Your Gut", d: "If a situation feels uncomfortable, leave immediately." },
          { t: "Verify Everything", d: "Use the GFA Registry to check credentials." },
          { t: "No Private Meetings", d: "Professional meetings happen in offices, not hotels or homes." },
          { t: "Keep Records", d: "Save all emails, texts, and contracts." }
        ]
      },
      process: {
        title: "The GFA Safety Process",
        steps: [
          { t: "Verification", d: "We audit every member agency." },
          { t: "Education", d: "We provide training for parents and guardians." },
          { t: "Monitoring", d: "Ongoing checks to ensure compliance." }
        ]
      },
      faq: {
        title: "Common Questions",
        list: [
          { q: "Is GFA certification mandatory?", a: "It is voluntary, but highly recommended for safety." },
          { q: "What if I find a non-compliant agency?", a: "Report them immediately using our tool." },
          { q: "Can I report anonymously?", a: "Yes, our reporting portal allows for anonymous submissions to protect your identity." },
          { q: "Does GFA offer legal advice?", a: "We provide guidance and resources, but we recommend consulting with a legal professional for specific contract disputes." }
        ]
      },
      why: { title: "Why This System Exists", body: "Entering the film industry can be confusing and risky for young performers and their families. Unverified auditions, hidden fees, unregulated training programs, and misleading promises often create financial loss and uncertainty.", note: "GFA establishes independent standards to create a safer environment." }, 
      categories: { title: "Regulated Domains", film: { title: "Motion Pictures", d: "Protection on theatrical film sets." }, commercial: { title: "Advertising", d: "Compliance for commercial productions." }, model: { title: "Modeling", d: "Safeguarding in fashion and photography." }, talent: { title: "Talent Development", d: "Vetting training and school providers." } }, 
      redFlags: { title: "Warning Signs", subtitle: "Protect yourself from unverified or predatory practices.", list: [{ t: "Required Fees", d: "Demanding payment for auditions is strictly prohibited." }, { t: "Bundled Sales", d: "Mandatory photo packages are a violation of ethics." }, { t: "Opaque Details", d: "Lack of specific location or registered entity details." }, { t: "Guaranteed Fame", d: "Promises of immediate stardom or guaranteed roles are often scams." }, { t: "Pressure Tactics", d: "Urgency to sign contracts immediately without review." }] }, 
      principles: { title: "Core Principles", list: [{ t: "Transparency", d: "Clear communication of fees and expectations.", icon: "👁️" }, { t: "Accountability", d: "Verified entities are held to strict standards.", icon: "⚖️" }, { t: "Safety", d: "Zero tolerance for unsafe practices.", icon: "🛡️" }, { t: "Education", d: "Empowering families with knowledge.", icon: "📚" }] }, 
      familyChecklist: { title: "Family Safety Checklist", desc: "Ensure these steps are taken before any engagement.", list: ["Verify the organization's GFA certification.", "Request a written contract detailing all fees.", "Ensure a parent/guardian is present at all times.", "Check for a valid GFA Project ID.", "Never agree to 'secret' or 'exclusive' private meetings.", "Research the agency's reputation online.", "Trust your instincts—if it feels wrong, it probably is."] }, 
      report: { title: "Reporting a Concern", contact: "Confidential Support:", email: "safety@gfaalliance.org", steps: [{ t: "Document", d: "Save all communications and details." }, { t: "Verify", d: "Check the entity's status in our registry." }, { t: "Report", d: "Submit a formal complaint via our secure portal." }] }, 
      sidebar: { quickView: "Quick Guide", whatGfa: { t: "What is GFA?", d: "The Global Film Alliance is a non-profit standards body." }, parents: { t: "For Parents", d: "Resources to navigate the industry safely." }, partners: { t: "Our Partners", d: "Working with global guilds and unions." }, extra: { d: "Download Full Guide" } }, 
      standards: { title: "Safety Standards", list: [{ t: "Two-Adult Rule", d: "Minors must never be alone with a single adult." }, { t: "Hours of Work", d: "Strict limits on working hours for minors." }, { t: "Background Checks", d: "Mandatory vetting for all staff interacting with minors." }, { t: "Privacy Protection", d: "Strict protocols for handling personal data and images of minors." }, { t: "Mental Health", d: "Access to support resources for young performers." }] }, 
      guideTitle: "Parent's Guide", guide: "Download our comprehensive safety guide.", cta: "Download PDF" 
    },
    registry: { title: "Search GFA Verified Organizations", subtitle: "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards.", registryCount: "Institutional Records", viewDetails: "View Details", reportConcern: "Report Concern", trustScore: "Confidence Index", tableHeaders: ["Organization / ID", "Validity Period", "Category", "Status", "Trust Score"], disclaimerBody: "Registry data is updated every 48 hours following internal audit. Status reflects voluntary certification and does not replace statutory licensing.", ui: { portalLabel: "Official Certification Portal", active: "INSTITUTIONAL ACTIVE", pending: "PENDING / UNDER REVIEW", revoked: "REVOKED / SUSPENDED", noResults: "No institutional records match your criteria." } },
    certification: { title: "Professional Recognition Status", intro: "The GFA provides an objective framework for industry entities to signal their commitment to professional standards." },
    certificationDetails: { levels: [{ t: "Institutional Verified", d: "Verification of operational legitimacy and commitment to the GFA Ethics Pledge." }, { t: "Industry Certified", d: "Comprehensive audit of project history and financial transparency compliance." }, { t: "Accredited Excellence", d: "Elite recognition for organizations maintaining safety benchmarks over multiple cycles." }], protocols: [{ t: "Documentation Audit", d: "Verification of institutional filings and business credentials." }, { t: "Operational Safety Review", d: "Verification of workspace safeguarding protocols." }, { t: "Transparency Disclosure", d: "Auditing of public fee structures and non-predatory business practices." }], cycle: [{ s: "Submission of Record", d: "Initial intake of credentials." }, { s: "Compliance Audit", d: "Independent documentation review." }, { s: "Status Grant", d: "Inclusion in the Global Registry." }, { s: "Ongoing Maintenance", d: "Periodic re-verification." }], cta: { title: "Elevate Your Professional Standing", body: "Joining the GFA network signals your dedication to international best practices.", inquire: "Inquire for Intake", download: "Download Guidelines PDF" } },
    governance: { title: "Global Charter & Governance", subtitle: "Guided by a multi-national board dedicated to cinematic ethics.", downloads: { charter: "Download Charter", bylaws: "Download Bylaws" }, summaryTitle: "Charter Summary", summaryBody: "The Global Film Alliance operates as an independent non-profit to serve the public interest within the film industry.", roleTitle: "Administrative Structure", roleBody: "Our leadership is composed of industry veterans committed to non-commercial service.", board: [{ role: "Director General", title: "Office of the Secretariat" }, { role: "Compliance Lead", title: "Institutional Oversight Division" }] },
    careerAccess: { title: "Career & Industry Access", subtitle: "Supporting the next generation of film professionals.", intro: "GFA provides neutral support for career pathways.", pillars: { mentorship: { title: "Mentorship", body: "Direct access to industry leads.", icon: "🤝" }, funding: { title: "Support Funds", body: "Grants for verified graduate projects.", icon: "💰" }, matching: { title: "Project Matching", body: "Connecting talent with certified productions.", icon: "🎬" } }, inquiryTitle: "Program Intake", cta: "Apply for Pathway Support", inquiryNote: "All programs require verification of professional background." },
    memberPortal: { header: { title: "Member Dashboard", subtitle: "Secure Registry Portal", support: "System Support", logout: "Log Out" }, sidebar: { academy: "Member Profile", tier: "Accredited Agency", profile: "Overview", docs: "My Documents", renewal: "Status Renewal", scores: "Trust Index", alerts: "Recent Alerts", alertsBody: "System audit scheduled for April." }, stats: { trust: "Trust Score", grade: "Current Grade", certId: "Registration ID", status: "Status: Active", expiry: "Validity End", remaining: "Days remaining: 365" }, docs: { title: "Compliance Uploads", addBtn: "Upload New Document" }, assets: { title: "Identity Assets", badge: "Download Badge", cert: "View Certificate" } },
    adminDashboard: { header: { title: "Admin Console", subtitle: "Registry Management", access: "Superuser" }, nav: { audits: "Audits", registry: "Directory", intake: "Intake Queue", scoring: "Scoring", analytics: "System Health" }, stats: { total: "Total Records", accredited: "Accredited", suspended: "Suspended", renewal: "Renewals Due" }, queueTitle: "Administrative Intake Queue", btns: { open: "Open Case", dismiss: "Dismiss" }, intakeTitle: "System Integrity Alerts", intakeItem: { title: "Registry Conflict Detected", priority: "High", body: "Multiple identity vouchers submitted for ID #GFA-091.", btn1: "Reconcile", btn2: "Flag" } },
    membership: {
      title: "Membership Privileges & Benefits",
      intro: "Join the Global Film Alliance professional network. Access talent tiers, organizational accreditation, and industry resources.",
      talentTitle: "Talent Membership Tiers",
      orgTitle: "Organizational Accreditation",
      entTitle: "Enterprise & Institutional",
      entDesc: "For major studios, guilds, and government bodies requiring custom integration and oversight.",
      entCta: "Contact Secretariat",
      talentTiers: [
        { 
          id: "1", 
          name: "Emerging", 
          price: "Free", 
          desc: "Designed for film students and early-career individuals seeking to establish their professional foundation. This entry-level tier provides essential safety training and inclusion in the GFA global registry.",
          perks: ["Registry Listing", "Basic Safety Training", "Industry Newsletter"], 
          recommended: false 
        },
        { 
          id: "2", 
          name: "Professional", 
          price: "$120/yr", 
          desc: "The standard for active industry professionals. Signals your commitment to international safety and ethical standards with a verified badge and priority matching.",
          perks: ["Verified Badge", "Priority Project Matching", "Legal Templates", "Merchant Discounts"], 
          recommended: true 
        },
        { 
          id: "3", 
          name: "Elite", 
          price: "$350/yr", 
          desc: "For established filmmakers and industry leaders. Includes premium registry placement, direct mentorship, and specialized support for festival submissions and grants.",
          perks: ["Premium Placement", "Mentorship Access", "Festival Submission Support", "Equipment Grants"], 
          recommended: false 
        }
      ],
      orgTiers: [
        { 
          id: "o1", 
          name: "Boutique", 
          price: "$500/yr", 
          desc: "Ideal for small agencies and production houses seeking initial GFA recognition. Includes basic compliance audit and directory listing.",
          perks: ["GFA Certification", "Registry Listing", "Basic Audit"], 
          recommended: false 
        },
        { 
          id: "o2", 
          name: "Studio", 
          price: "$2,500/yr", 
          desc: "For established production studios requiring full compliance verification. Includes comprehensive safety audits and priority network access.",
          perks: ["Full Compliance Audit", "Priority Casting Access", "Global Network Access"], 
          recommended: true 
        },
        { 
          id: "o3", 
          name: "Institution", 
          price: "$10,000/yr", 
          desc: "For major industry bodies and educational institutions. Offers governance voting rights and strategic partnership status.",
          perks: ["Governance Voting Rights", "Custom Safety Protocols", "Strategic Partnership"], 
          recommended: false 
        }
      ],
      ui: {
        networkBadge: "GFA Professional Network",
        orgSubtitle: "Institutional Access for Companies & Schools",
        joinAs: "Join as {tier}",
        select: "Select {tier}",
        benefitsTitle: "Exclusive Member Benefits",
        searchPlaceholder: "Search merchant benefits..."
      },
      pillars: [
        { 
          title: "Graduate Professional Pathway", 
          desc: "A comprehensive bridge program designed to transition film graduates into the professional industry. Members receive one-on-one mentorship from established industry veterans, exclusive access to our proprietary job-matching database with GFA-certified productions, and personalized career roadmap consulting to ensure a sustainable entry into the global cinematic workforce.", 
          icon: "🎓" 
        },
        { 
          title: "Production Support", 
          desc: "Empowering emerging creators with the physical tools of the trade. This includes subsidized access to high-end equipment rentals (RED/ARRI kits), priority booking for partner soundstages and post-production suites, and expert guidance on film festival circuit strategies, including submission fee waivers and technical delivery compliance.", 
          icon: "🎬" 
        },
        { 
          title: "Financing & Sponsorship", 
          desc: "Strategic financial architecture for independent projects. We assist members in developing professional pitch decks, securing direct introductions to private equity film funds, and brokering high-value brand sponsorships. Our team also provides guidance on navigating international tax incentives and co-production treaties to maximize project budgets.", 
          icon: "💰" 
        }
      ],
      merchantBenefits: {
        title: "Member Merchant Benefits",
        subtitle: "Exclusive discounts and offers from our verified partners across the industry.",
        categories: ["All", "Restaurants", "Equipment", "Lighting", "Vehicles", "Post-Production", "Insurance"]
      },
      whyJoin: {
        title: "Why Join the Alliance?",
        subtitle: "GFA membership is more than a credential—it's an ecosystem of support, safety, and professional growth.",
        items: [
          { title: "Global Recognition", desc: "Your GFA-verified status is recognized by major guilds and productions worldwide, opening doors to international opportunities.", icon: "🌍" },
          { title: "Safety First", desc: "Access to the industry's most rigorous youth safeguarding protocols and professional conduct training.", icon: "🛡️" },
          { title: "Resource Network", desc: "Connect with a vetted network of vendors, studios, and mentors dedicated to your project's success.", icon: "🤝" }
        ]
      },
      process: {
        title: "How to Join",
        subtitle: "A simple, transparent process to elevate your professional standing.",
        steps: [
          { title: "Select Tier", desc: "Choose the membership level that best fits your current career stage or organizational needs." },
          { title: "Verification", desc: "Submit your credentials for our independent audit team to verify your professional background." },
          { title: "Onboarding", desc: "Once approved, access your dashboard, download your digital badge, and start using member benefits." }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Is GFA membership a legal requirement?", a: "No, GFA is a voluntary standards body. However, many productions require GFA verification for key roles and vendor contracts." },
          { q: "How long does verification take?", a: "Standard verification typically takes 3-5 business days once all documentation is submitted." },
          { q: "Can I upgrade my tier later?", a: "Yes, you can upgrade your membership tier at any time through your member portal." },
          { q: "Are merchant discounts available globally?", a: "Most discounts are available in major film hubs (LA, London, Beijing, Paris), with more being added monthly." }
        ]
      }
    },
    partners: {
      title: "Verified Service Partners",
      intro: "Connect with GFA-verified vendors offering specialized services for the film industry.",
      catLabel: "Category",
      countryLabel: "Country",
      found: "{n} Partners Found",
      card: { eligibility: "Eligibility" },
      filterOptions: {
        categories: ["All", "Restaurants", "Equipment", "Lighting", "Vehicles", "Post-Production", "Insurance"],
        countries: ["All", "USA", "China", "UK", "France", "Australia", "Italy"]
      }
    },
    partnersList: [
      { id: "p1", name: "CineRentals Global", category: "Equipment", city: "London", country: "UK", benefit: "20% Off All Rentals", eligibility: "Professional & Elite", logo: "https://picsum.photos/seed/p1/100/100" },
      { id: "p2", name: "The Film Bistro", category: "Restaurants", city: "Los Angeles", country: "USA", benefit: "15% Discount on Catering", eligibility: "All Members", logo: "https://picsum.photos/seed/p2/100/100" },
      { id: "p3", name: "Lux Lighting Solutions", category: "Lighting", city: "Beijing", country: "China", benefit: "Free Delivery & Setup", eligibility: "Elite Members", logo: "https://picsum.photos/seed/p3/100/100" },
      { id: "p4", name: "Production Wheels", category: "Vehicles", city: "Paris", country: "France", benefit: "10% Off Fleet Bookings", eligibility: "All Members", logo: "https://picsum.photos/seed/p4/100/100" },
      { id: "p5", name: "SafeSet Insurance", category: "Insurance", city: "New York", country: "USA", benefit: "Waived Admin Fees", eligibility: "Professional & Elite", logo: "https://picsum.photos/seed/p5/100/100" },
      { id: "p6", name: "PixelPerfect Post", category: "Post-Production", city: "Seoul", country: "Korea", benefit: "5% Off Color Grading", eligibility: "Elite Members", logo: "https://picsum.photos/seed/p6/100/100" }
    ],
    footer: { desc: "Independent non-profit industry support organization. Facilitating professional standards in the global film industry.", copyright: "© {year} Global Film Alliance. Supporting Industry Excellence." }
  } as any,
  [Locale.ZH]: {
    meta: { siteName: "Global Film Alliance (GFA)", tagline: "Industry Support, Standards & Professional Network" },
    common: { loading: "正在访问记录...", filters: "筛选", reset: "重置", category: "类别", level: "等级", status: "状态", required: "必填", optional: "可选", searchPlaceholder: "按名称或 ID 搜索", searchRegistry: "搜索名录", view: "查看", region: "地区" },
    nav: { home: "首页", certification: "行业认证", childSafety: "青少年保护", graduateSupport: "扶持计划", registry: "认证名录", complaints: "反馈渠道", about: "关于我们", governance: "治理准则", membership: "会员权益", partners: "合作伙伴", contact: "联系我们", login: "登录", join: "加入会员", memberPortal: "会员门户", admin: "管理后台" },
    disclaimer: { title: "Institutional & Legal Status", statutory: "GFA Certification is a voluntary professional recognition program developed by the Global Film Alliance to promote transparency, safety practices, and industry best standards. It does not replace any government license or legal authorization.", legal: "GFA certifications are voluntary professional recognitions and do not replace any government licenses, permits, or legal authorizations. The Global Film Alliance (GFA) is an independent non-profit service organization.", heroWarning: "Our certifications do not replace any government license or authorization." },
    home: { hero: { kicker: "独立非营利机构 • 自愿性标准 • 全球行业网络", title: "全球电影联盟 (GFA)", subhead: "建立电影行业的信任、安全与机遇", body: "我们为机构、制作方和新锐电影人提供自愿性认证框架、青少年保护指南及专业事业支持计划。", ctaPrimary: "加入会员", ctaSecondary: "查看计划", btnCertify: "申请认证" }, trust: { label: "Official Recognition", badge: "Voluntary • Transparent • Professional", guilds: ["Global Production Guild", "Cinematic Arts Council", "Independent Film Bureau"], integrity: "Industry Integrity", upholding: "Upholding Industry Professionalism", professionalismBody: "Professionalism in film relies on collective industry commitment. We provide a neutral channel for professional support and help standardized guidelines for cinematic workplaces worldwide.", operational: "Operational" }, searchRegistry: { title: "Search GFA Verified Organizations", subtitle: "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards.", cta: "Search Registry", ui: { tabs: { org: "Organization Search", bond: "Verify Bond / License", project: "Project Status" }, labels: { name: "Entity Name / ID", category: "Category", phone: "Phone Check", license: "License / Tax ID", country: "Country", state: "State / Prov", city: "City", address: "Street Address" }, placeholders: { name: "Name, ID, or Reg No.", phone: "+1 (000) 000-0000", license: "Official License No.", state: "State", city: "City", address: "Registered Address Search..." }, options: { allTypes: "All Types", agency: "Agency", production: "Production", school: "School", casting: "Casting", global: "Global" }, filters: { verified: "Verified Active", bonded: "Bonded Services Only", affiliates: "Includes Affiliates" }, trending: { label: "Trending:", la: "Los Angeles Agencies", uk: "Safe Sets UK", casting: "Casting Directors" } } }, whatWeDo: { title: "Core Service Pillars", subtitle: "A structured, policy-first platform for industry transparency, safety practices, and career development.", cards: [{ title: "Voluntary Certification", body: "A standardized framework for organizations to demonstrate commitment to ethical production and financial transparency.", link: "Certification Guidelines" }, { title: "Youth Safeguarding", body: "Independent guidance and professional background vetting protocols to ensure the safety of minors in cinematic environments.", link: "Safety Standards" }, { title: "Career & Industry Access", body: "Connecting verified talent with project matchmaking, equipment resources, and supported mentorship pathways.", link: "Access Programs" }] }, charter: { title: "GFA Charter Status", points: ["Independent Institutional Support", "Global Industry Best Practices", "Non-Commercial Service Mandate"] }, globalPresence: { title: "Global Strategic Presence", subtitle: "Institutional hubs in key production markets.", networkKicker: "Institutional Network", stats: [{ val: "14", label: "Regional Hubs" }, { val: "86", label: "Partner Agencies" }], locations: [{ city: "London", role: "European HQ" }, { city: "Los Angeles", role: "Legal Compliance" }, { city: "Beijing", role: "Asia-Pacific Center" }, { city: "Paris", role: "Cultural Liaison" }] }, safeguardingSection: { title: "Youth Safeguarding & Trusted Industry Standards", subtitle: "Building a safer, fairer, and more transparent pathway into the film and performing arts industry for families, young talents, and professional organizations.", cards: [{ title: "Verified", text: "Certified and reviewed organizations only" }, { title: "Transparent", text: "Clear fees and written agreements" }, { title: "Protected", text: "Financial safeguards up to $50,000" }, { title: "Trusted", text: "Public ratings and ongoing monitoring" }], whyExists: { title: "Why This System Exists", p1: "Entering the film industry can be confusing and risky for young performers and their families. Unverified auditions, hidden fees, unregulated training programs, and misleading promises often create financial loss and uncertainty.", p2: "Families need more than opportunities — they need clarity, accountability, and institutions they can trust. The Global Film Alliance establishes independent standards to create a safer and more professional environment for youth participation." }, howHelps: { title: "How GFA Helps Families", list: ["Search and verify certified organizations", "Access transparent pricing and contracts", "Choose safer auditions and training environments", "Reduce risks of fraud or unethical practices", "Make informed decisions with confidence"] }, requirements: { title: "Certification Requirements", list: [{ l: "Legal Compliance:", t: "Verified registration, business legitimacy, and operational transparency" }, { l: "Transparent Fees:", t: "Clear pricing, written contracts, no hidden charges" }, { l: "Youth Safety Practices:", t: "Safe audition procedures and professional conduct standards" }, { l: "Professional Capability:", t: "Qualified instructors and proven services" }, { l: "Financial Responsibility:", t: "Security deposits or safeguards up to $50,000" }, { l: "Public Rating System:", t: "Searchable certification status and ongoing review" }] }, benefits: { title: "Benefits for Organizations", list: ["Official certification badge and credibility", "Public listing on the GFA platform", "Increased trust from families and partners", "More exposure and collaboration opportunities", "Access to industry resources, studios, and networks"] } } },
    about: { hero: { kicker: "Institutional Profile", title: "About Global Film Alliance", subtitle: "Building the standard for global cinematic excellence and safety." }, mission: { title: "Our Mission", body: "To provide an independent framework for professional recognition and youth protection in the film industry." }, vision: { title: "Our Vision", body: "A film industry where every professional and young talent operates in a safe, transparent, and verified environment." }, whoWeAre: { title: "Institutional Oversight", body: "We are an independent non-profit body dedicated to maintaining cinematic workplace standards." }, whatWeDo: { title: "Our Core Services", items: [{ icon: "⚖️", title: "Standards", desc: "Setting the benchmark for ethical production." }, { icon: "🛡️", title: "Protection", desc: "Global safeguarding protocols for minors." }, { icon: "🎓", title: "Support", desc: "Pathways for emerging filmmakers." }] }, certification: { title: "Certification Framework", body: "Our three-tier certification system allows agencies to verify their commitment to best practices." }, youthProtection: { title: "Zero Tolerance Policy", body: "Ensuring every production environment meets our strict youth safety act." }, support: { title: "Industry Support", body: "Connecting certified members with exclusive resources and networking." }, network: { title: "Global Reach", body: "Operating across major film hubs worldwide." }, governance: { title: "Public Accountability", body: "Governed by a charter of ethics and transparency." }, impact: { title: "Our Impact", stats: [{ value: "500+", label: "Certified Entities" }, { value: "12", label: "Countries" }, { value: "A+", label: "Trust Rating" }, { value: "24/7", label: "Oversight" }] }, cta: { title: "Join the Alliance", body: "Signal your commitment to professional industry standards today.", button: "Inquire Now" } },
    safeguarding: { 
      title: "Youth Safeguarding Oversight", 
      subtitle: "Maintaining the industry's highest standards for minor welfare.", 
      kicker: "GFA 保护", 
      titleEn: "全球标准", 
      btns: { report: "报告问题", checklist: "家庭清单" }, 
      policyLink: "View Full Policy", 
      reportingCta: "Report a Concern", 
      verificationTool: { title: "验证项目注册", placeholder: "输入 GFA-ID...", btn: "立即审计", note: "官方选角和活动的验证。" }, 
      intro: {
        title: "保护电影的未来",
        body: "娱乐行业提供了令人难以置信的机会，但也给年轻表演者带来了独特的风险。GFA 致力于创造一个安全、透明和专业的环境，让人才在不损害福祉的情况下茁壮成长。我们的综合框架确保从试镜到制作的每一次互动都遵守严格的道德准则，旨在保护未成年人免受剥削、骚扰和不安全工作条件的影响。",
        imageAlt: "片场的年轻表演者"
      },
      tips: {
        title: "安全第一：快速提示",
        list: [
          { t: "尽管提问", d: "合法的机构欢迎对其政策的提问。" },
          { t: "相信直觉", d: "如果情况让人感到不舒服，请立即离开。" },
          { t: "核实一切", d: "使用 GFA 名录检查凭证。" },
          { t: "拒绝私密会议", d: "专业会议应在办公室进行，而非酒店或家中。" },
          { t: "保留记录", d: "保存所有电子邮件、短信和合同。" }
        ]
      },
      process: {
        title: "GFA 安全流程",
        steps: [
          { t: "验证", d: "我们审核每一个成员机构。" },
          { t: "教育", d: "我们为家长和监护人提供培训。" },
          { t: "监控", d: "持续检查以确保合规。" }
        ]
      },
      faq: {
        title: "常见问题",
        list: [
          { q: "GFA 认证是强制性的吗？", a: "它是自愿的，但为了安全起见强烈推荐。" },
          { q: "如果我发现违规机构怎么办？", a: "请立即使用我们的工具举报。" },
          { q: "我可以匿名举报吗？", a: "是的，我们的举报门户允许匿名提交以保护您的身份。" },
          { q: "GFA 提供法律建议吗？", a: "我们提供指导和资源，但对于具体的合同纠纷，我们建议咨询法律专业人士。" }
        ]
      },
      why: { title: "为什么存在此系统", body: "对于年轻表演者及其家庭来说，进入电影行业可能充满困惑和风险。未经核实的试镜、隐藏费用、不受监管的培训项目和误导性承诺往往造成经济损失和不确定性。", note: "GFA 建立独立标准以创造更安全的环境。" }, 
      categories: { title: "受监管领域", film: { title: "电影", d: "院线电影片场的保护。" }, commercial: { title: "广告", d: "商业制作的合规性。" }, model: { title: "模特", d: "时尚和摄影中的保障。" }, talent: { title: "人才发展", d: "审查培训和学校提供者。" } }, 
      redFlags: { title: "警告信号", subtitle: "保护自己免受未经核实或掠夺性行为的侵害。", list: [{ t: "强制收费", d: "严禁要求试镜付费。" }, { t: "捆绑销售", d: "强制性照片套餐违反道德规范。" }, { t: "细节不透明", d: "缺乏具体地点或注册实体详细信息。" }, { t: "保证成名", d: "承诺立即成名或保证角色的通常是骗局。" }, { t: "施压手段", d: "迫使立即签署合同而不给予审查时间。" }] }, 
      principles: { title: "核心原则", list: [{ t: "透明度", d: "清晰沟通费用和期望。", icon: "👁️" }, { t: "问责制", d: "认证实体需遵守严格标准。", icon: "⚖️" }, { t: "安全", d: "对不安全行为零容忍。", icon: "🛡️" }, { t: "教育", d: "用知识赋能家庭。", icon: "📚" }] }, 
      familyChecklist: { title: "家庭安全清单", desc: "在任何接触前确保采取这些步骤。", list: ["验证组织的 GFA 认证。", "要求详细列出所有费用的书面合同。", "确保始终有家长/监护人在场。", "检查有效的 GFA 项目 ID。", "切勿同意“秘密”或“独家”私人会议。", "在线研究该机构的声誉。", "相信你的直觉——如果感觉不对，那可能就是不对。"] }, 
      report: { title: "报告问题", contact: "保密支持：", email: "safety@gfaalliance.org", steps: [{ t: "记录", d: "保存所有沟通和细节。" }, { t: "验证", d: "在我们的名录中检查实体状态。" }, { t: "报告", d: "通过我们的安全门户提交正式投诉。" }] }, 
      sidebar: { quickView: "快速指南", whatGfa: { t: "什么是 GFA？", d: "全球电影联盟是一个非营利标准机构。" }, parents: { t: "致家长", d: "安全导航行业的资源。" }, partners: { t: "我们的合作伙伴", d: "与全球工会和协会合作。" }, extra: { d: "下载完整指南" } }, 
      standards: { title: "安全标准", list: [{ t: "双人成人规则", d: "未成年人绝不能与单个成年人独处。" }, { t: "工作时间", d: "严格限制未成年人的工作时间。" }, { t: "背景调查", d: "所有与未成年人接触的工作人员必须经过审查。" }, { t: "隐私保护", d: "处理未成年人个人数据和图像的严格协议。" }, { t: "心理健康", d: "为年轻表演者提供支持资源。" }] }, 
      guideTitle: "家长指南", guide: "下载我们的综合安全指南。", cta: "下载 PDF" 
    },
    registry: { title: "Search GFA Verified Organizations", subtitle: "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards.", registryCount: "Institutional Records", viewDetails: "View Details", reportConcern: "Report Concern", trustScore: "Confidence Index", tableHeaders: ["Organization / ID", "Validity Period", "Category", "Status", "Trust Score"], disclaimerBody: "Registry data is updated every 48 hours following internal audit. Status reflects voluntary certification and does not replace statutory licensing.", ui: { portalLabel: "Official Certification Portal", active: "INSTITUTIONAL ACTIVE", pending: "PENDING / UNDER REVIEW", revoked: "REVOKED / SUSPENDED", noResults: "No institutional records match your criteria." } },
    certification: { title: "Professional Recognition Status", intro: "The GFA provides an objective framework for industry entities to signal their commitment to professional standards." },
    certificationDetails: { levels: [{ t: "Institutional Verified", d: "Verification of operational legitimacy and commitment to the GFA Ethics Pledge." }, { t: "Industry Certified", d: "Comprehensive audit of project history and financial transparency compliance." }, { t: "Accredited Excellence", d: "Elite recognition for organizations maintaining safety benchmarks over multiple cycles." }], protocols: [{ t: "Documentation Audit", d: "Verification of institutional filings and business credentials." }, { t: "Operational Safety Review", d: "Verification of workspace safeguarding protocols." }, { t: "Transparency Disclosure", d: "Auditing of public fee structures and non-predatory business practices." }], cycle: [{ s: "Submission of Record", d: "Initial intake of credentials." }, { s: "Compliance Audit", d: "Independent documentation review." }, { s: "Status Grant", d: "Inclusion in the Global Registry." }, { s: "Ongoing Maintenance", d: "Periodic re-verification." }], cta: { title: "Elevate Your Professional Standing", body: "Joining the GFA network signals your dedication to international best practices.", inquire: "Inquire for Intake", download: "Download Guidelines PDF" } },
    governance: { title: "Global Charter & Governance", subtitle: "Guided by a multi-national board dedicated to cinematic ethics.", downloads: { charter: "Download Charter", bylaws: "Download Bylaws" }, summaryTitle: "Charter Summary", summaryBody: "The Global Film Alliance operates as an independent non-profit to serve the public interest within the film industry.", roleTitle: "Administrative Structure", roleBody: "Our leadership is composed of industry veterans committed to non-commercial service.", board: [{ role: "Director General", title: "Office of the Secretariat" }, { role: "Compliance Lead", title: "Institutional Oversight Division" }] },
    careerAccess: { title: "Career & Industry Access", subtitle: "Supporting the next generation of film professionals.", intro: "GFA provides neutral support for career pathways.", pillars: { mentorship: { title: "Mentorship", body: "Direct access to industry leads.", icon: "🤝" }, funding: { title: "Support Funds", body: "Grants for verified graduate projects.", icon: "💰" }, matching: { title: "Project Matching", body: "Connecting talent with certified productions.", icon: "🎬" } }, inquiryTitle: "Program Intake", cta: "Apply for Pathway Support", inquiryNote: "All programs require verification of professional background." },
    memberPortal: { header: { title: "Member Dashboard", subtitle: "Secure Registry Portal", support: "System Support", logout: "Log Out" }, sidebar: { academy: "Member Profile", tier: "Accredited Agency", profile: "Overview", docs: "My Documents", renewal: "Status Renewal", scores: "Trust Index", alerts: "Recent Alerts", alertsBody: "System audit scheduled for April." }, stats: { trust: "Trust Score", grade: "Current Grade", certId: "Registration ID", status: "Status: Active", expiry: "Validity End", remaining: "Days remaining: 365" }, docs: { title: "Compliance Uploads", addBtn: "Upload New Document" }, assets: { title: "Identity Assets", badge: "Download Badge", cert: "View Certificate" } },
    adminDashboard: { header: { title: "Admin Console", subtitle: "Registry Management", access: "Superuser" }, nav: { audits: "Audits", registry: "Directory", intake: "Intake Queue", scoring: "Scoring", analytics: "System Health" }, stats: { total: "Total Records", accredited: "Accredited", suspended: "Suspended", renewal: "Renewals Due" }, queueTitle: "Administrative Intake Queue", btns: { open: "Open Case", dismiss: "Dismiss" }, intakeTitle: "System Integrity Alerts", intakeItem: { title: "Registry Conflict Detected", priority: "High", body: "Multiple identity vouchers submitted for ID #GFA-091.", btn1: "Reconcile", btn2: "Flag" } },
    membership: {
      title: "会员权限与福利",
      intro: "加入全球电影联盟专业网络。访问人才等级、机构认证和行业资源。",
      talentTitle: "人才会员等级",
      orgTitle: "机构认证",
      entTitle: "企业与机构",
      entDesc: "适用于需要定制集成和监督的大型工作室、工会和政府机构。",
      entCta: "联系秘书处",
      talentTiers: [
        { 
          id: "1", 
          name: "新锐", 
          price: "免费", 
          desc: "专为电影专业学生及职业生涯早期的个人设计，旨在建立专业基础。提供必要的安全培训并将其列入 GFA 全球名录。",
          perks: ["名录列入", "基础安全培训", "行业简报"], 
          recommended: false 
        },
        { 
          id: "2", 
          name: "专业", 
          price: "$120/年", 
          desc: "活跃行业专业人士的标准选择。通过验证徽章和优先匹配，标志着您对国际安全与道德标准的承诺。",
          perks: ["验证徽章", "优先项目匹配", "法律模板", "商家折扣"], 
          recommended: true 
        },
        { 
          id: "3", 
          name: "精英", 
          price: "$350/年", 
          desc: "为资深电影人和行业领袖提供。包括名录高级位置展示、直接导师指导以及电影节提交和资助的专项支持。",
          perks: ["高级位置展示", "导师指导", "电影节提交支持", "设备资助"], 
          recommended: false 
        }
      ],
      orgTiers: [
        { 
          id: "o1", 
          name: "精品", 
          price: "$500/年", 
          desc: "适合寻求初步 GFA 认可的小型代理机构和制作公司。包括基础合规审计和名录列入。",
          perks: ["GFA 认证", "名录列入", "基础审计"], 
          recommended: false 
        },
        { 
          id: "o2", 
          name: "工作室", 
          price: "$2,500/年", 
          desc: "适用于需要全面合规验证的资深制作工作室。包括全面安全审计和优先网络访问。",
          perks: ["全面合规审计", "优先选角访问", "全球网络访问"], 
          recommended: true 
        },
        { 
          id: "o3", 
          name: "机构", 
          price: "$10,000/年", 
          desc: "适用于大型行业团体和教育机构。提供治理投票权和战略合作伙伴地位。",
          perks: ["治理投票权", "定制安全协议", "战略合作伙伴"], 
          recommended: false 
        }
      ],
      ui: {
        networkBadge: "GFA 专业网络",
        orgSubtitle: "公司与学校的机构访问权限",
        joinAs: "以 {tier} 身份加入",
        select: "选择 {tier}",
        benefitsTitle: "专属会员福利",
        searchPlaceholder: "搜索商家福利..."
      },
      pillars: [
        { 
          title: "毕业生职业道路扶持", 
          desc: "专为电影专业毕业生设计的职业过渡桥梁计划。会员将获得行业资深导师的一对一指导，独家访问 GFA 认证制作项目的职位匹配数据库，以及个性化的职业路线规划咨询，确保毕业生能够稳健地进入全球电影工业体系并实现可持续发展。", 
          icon: "🎓" 
        },
        { 
          title: "作品创作与制作支持", 
          desc: "为新锐创作者提供核心硬件与场地支持。会员可享受高阶摄影器材（如 RED/ARRI 套装）的租赁补贴，优先预订合作伙伴的专业影棚与后期工作室，并获得关于国际电影节申报策略的专家指导，包括报名费减免和技术交付合规咨询。", 
          icon: "🎬" 
        },
        { 
          title: "资金融资与品牌赞助", 
          desc: "为独立电影项目提供战略性财务架构支持。我们协助会员开发专业的项目计划书（Pitch Deck），直接对接私募电影基金与投资者，并促成高价值的品牌赞助与植入合作。此外，我们还提供关于国际退税政策和合拍片协议的专业指引，以最大化项目预算效率。", 
          icon: "💰" 
        }
      ],
      merchantBenefits: {
        title: "会员商家福利",
        subtitle: "GFA 会员在行业内认证合作伙伴处可享受的专属折扣和优惠。",
        categories: ["全部", "餐厅", "设备", "灯光", "车辆", "后期制作", "保险"]
      },
      whyJoin: {
        title: "为什么要加入联盟？",
        subtitle: "GFA 会员身份不仅仅是一个凭证——它是一个包含支持、安全和职业成长的生态系统。",
        items: [
          { title: "全球认可", desc: "您的 GFA 验证身份受到全球主要工会和制作方的认可，为您开启国际机遇之门。", icon: "🌍" },
          { title: "安全至上", desc: "访问行业内最严格的青少年保护协议和专业行为准则培训。", icon: "🛡️" },
          { title: "资源网络", desc: "连接经过审核的供应商、工作室和导师网络，助力您的项目取得成功。", icon: "🤝" }
        ]
      },
      process: {
        title: "如何加入",
        subtitle: "简单透明的流程，提升您的专业地位。",
        steps: [
          { title: "选择等级", desc: "选择最适合您当前职业阶段或组织需求的会员级别。" },
          { title: "背景验证", desc: "提交您的凭证，由我们的独立审计团队验证您的专业背景。" },
          { title: "开启权益", desc: "获得批准后，即可访问您的控制面板，下载数字徽章，并开始使用会员福利。" }
        ]
      },
      faq: {
        title: "常见问题",
        items: [
          { q: "GFA 会员是法律强制要求的吗？", a: "不是，GFA 是一个自愿性标准机构。然而，许多制作方在关键职位和供应商合同中要求 GFA 验证。" },
          { q: "验证需要多长时间？", a: "一旦提交所有文件，标准验证通常需要 3-5 个工作日。" },
          { q: "我以后可以升级等级吗？", a: "可以，您可以随时通过会员门户升级您的会员等级。" },
          { q: "商家折扣在全球都可用吗？", a: "大多数折扣在主要的电影中心（洛杉矶、伦敦、北京、巴黎）可用，每月都会增加更多城市。" }
        ]
      }
    },
    partners: {
      title: "认证服务合作伙伴",
      intro: "联系 GFA 认证的供应商，为电影行业提供专业服务。",
      catLabel: "类别",
      countryLabel: "国家",
      found: "找到 {n} 个合作伙伴",
      card: { eligibility: "准入要求" },
      filterOptions: {
        categories: ["全部", "餐厅", "设备", "灯光", "车辆", "后期制作", "保险"],
        countries: ["全部", "美国", "中国", "英国", "法国", "澳大利亚", "意大利"]
      }
    },
    partnersList: [
      { id: "p1", name: "CineRentals Global", category: "设备", city: "伦敦", country: "英国", benefit: "所有租赁 8 折", eligibility: "专业与精英会员", logo: "https://picsum.photos/seed/p1/100/100" },
      { id: "p2", name: "电影小馆", category: "餐厅", city: "洛杉矶", country: "美国", benefit: "餐饮 85 折", eligibility: "所有会员", logo: "https://picsum.photos/seed/p2/100/100" },
      { id: "p3", name: "Lux 灯光解决方案", category: "灯光", city: "北京", country: "中国", benefit: "免费送货与安装", eligibility: "精英会员", logo: "https://picsum.photos/seed/p3/100/100" },
      { id: "p4", name: "制片车队", category: "车辆", city: "巴黎", country: "法国", benefit: "车队预订 9 折", eligibility: "所有会员", logo: "https://picsum.photos/seed/p4/100/100" },
      { id: "p5", name: "SafeSet 保险", category: "保险", city: "纽约", country: "美国", benefit: "免除管理费", eligibility: "专业与精英会员", logo: "https://picsum.photos/seed/p5/100/100" },
      { id: "p6", name: "PixelPerfect 后期", category: "后期制作", city: "首尔", country: "韩国", benefit: "调色 95 折", eligibility: "精英会员", logo: "https://picsum.photos/seed/p6/100/100" }
    ],
    footer: { desc: "独立的非营利行业支持组织。促进全球电影行业的专业标准。", copyright: "© {year} 全球电影联盟 (GFA)。支持行业卓越。" }
  } as any,
  [Locale.ES]: {} as any, [Locale.FR]: {} as any, [Locale.IT]: {} as any, [Locale.KO]: {} as any, [Locale.JA]: {} as any, [Locale.DE]: {} as any
};
