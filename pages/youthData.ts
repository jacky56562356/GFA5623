export interface CampSession {
  id: string;
  title: string;
  age: string;
  dates: string;
  location: string;
  gear: string;
  spots: string;
  highlights: string[];
  description: string;
  curriculum: { step: string; detail: string }[];
  imageUrl: string;
}

export interface PrecautionCategory {
  title: string;
  icon: string;
  items: { label: string; value: string }[];
}

export const YOUTH_LANG_DATA = {
  en: {
    hero: {
      tag: "Youth Film Programs",
      title: "Planting the Seed of a",
      highlight: "Filmmaker's Dream",
      desc: "GFA provides world-class youth filmmaking education, empowering the next generation of storytellers through hands-on cameras, professional mentorship, and cinema premieres in Los Angeles."
    },
    promo: {
      title: "Why GFA Summer Camp?",
      subtitle: "The Gold Standard in Youth Film Education",
      desc: "We don't play pretend. Our campers use Hollywood-grade equipment under the guidance of industry masters to write, direct, and edit their own absolute original films.",
      features: [
        {
          title: "Cinema-Grade Gear",
          desc: "Campers shoot on Blackmagic and Panavision cameras, learning cinematography in full-scale professional settings."
        },
        {
          title: "Hollywood Mentors",
          desc: "Instructors are USC/AFI/NYU film school alumni and active industry directors, editors, and screenwriters."
        },
        {
          title: "The Silver Screen",
          desc: "Every completed short film is projected in a commercial theater for family, friends, and industry judges."
        },
        {
          title: "Safe & Certified",
          desc: "All instructors hold youth safeguarding certificates with a robust 1:5 teacher-to-student ratio."
        }
      ]
    },
    campsSection: {
      title: "Our Summer Camp Programs",
      subtitle: "Choose the Perfect Creative Journey",
      spotsLabel: "spots left",
      ageLabel: "Ages",
      datesLabel: "Dates",
      locationLabel: "Location",
      gearLabel: "Equipment",
      tuitionLabel: "Funding Status",
      benefitScholarship: "Full/Partial Scholarships available for low and middle-income families.",
      registerBtn: "Register Now",
      soldOut: "Filling Fast!"
    },
    precautions: {
      title: "Camp Rules & Precautions",
      subtitle: "A Safe, Empowering, and Professional Environment for Everyone",
      intro: "To ensure the safety, health, and creative success of all campers, we ask parents and participants to carefully review our guidelines before camp begins.",
      disclaimer: "GFA strictly adheres to standard child safety guidelines and the US 501(c)(3) regulatory framework. Our sets are fully insured and staff are background checked."
    },
    form: {
      title: "Summer Camp Register",
      subtitle: "Join GFA Camp and kickstart your cinema dream",
      backBtn: "Back to programs",
      personalSec: "1. Participant Information",
      parentSec: "2. Parent / Guardian Contact",
      emergencySec: "3. Emergency Contact & Health",
      uploadSec: "4. Supporting Files (Optional)",
      childName: "Child's Name",
      childAge: "Child's Age",
      tshirtSize: "T-Shirt Size",
      experience: "Filmmaking Experience",
      experienceOpts: {
        None: "None (Zero experience welcome)",
        Beginner: "Beginner",
        Intermediate: "Intermediate",
        Advanced: "Advanced (Has portfolio)"
      },
      parentName: "Parent/Guardian Name",
      phone: "Phone Number",
      email: "Email Address",
      emergencyContactName: "Emergency Contact Name",
      emergencyPhone: "Emergency Contact Phone",
      dietary: "Dietary Restrictions & Allergies",
      medical: "Medical Conditions / Daily Medications",
      selectCamp: "Select Summer Camp Session",
      notes: "Letters to the Director / Questions",
      fileNote: "Note: Files can be uploaded securely. Our team will review them for placement.",
      submitBtn: "Submit Secure Registration",
      submitting: "Saving registration secure records...",
      successTitle: "Registration Submitted successfully!",
      successDesc: "Your registration details have been securely saved to the GFA Secretariat registry. Our admissions coordinator will email you within 2 business days with onboarding documentation and the parent consent form.",
      successDetails: "A receipt has been dispatched to: "
    },
    faqTitle: "Frequently Asked Questions"
  },
  zh: {
    hero: {
      tag: "青少年电影计划",
      title: "在孩子心中播下",
      highlight: "电影梦想的种子",
      desc: "GFA提供世界一流的青少年电影教育平台，通过实机操作、好莱坞名师指导，以及洛杉矶知名影院的首映礼，助力下一代影视创作人才自信启航。"
    },
    promo: {
      title: "为什么选择 GFA 夏令营？",
      subtitle: "青少年影视教育的黄金标准",
      desc: "我们拒绝纸上谈兵。夏令营小学员将在好莱坞一线大咖的指导下，亲手使用专业级的器材，自编、自导、自演并剪辑出属于他们自己的原创影片。",
      features: [
        {
          title: "影院级专业器材",
          desc: "使用 Blackmagic Design 和 Panavision 等好莱坞现场同款机器，零距离学习摄影与灯光造型。"
        },
        {
          title: "好莱坞名师班底",
          desc: "授课导师均为南加大(USC)、安菲(AFI)等名校校友及好莱坞活跃导演、编剧和剪辑师。"
        },
        {
          title: "影院真实大银幕首映",
          desc: "所有毕业短片都将在洛杉矶商业影院举办正式的首映礼，邀请家长、朋友与专业评审走上红毯。"
        },
        {
          title: "安全第一与双语关怀",
          desc: "所有导师均拥有青少年安全背景审核，维持1:5的高师生比，提供安心且具有包容性的双语指导。"
        }
      ]
    },
    campsSection: {
      title: "2026年 精品夏令营课程",
      subtitle: "为孩子挑选最适合的创意影视之旅",
      spotsLabel: "剩余名额",
      ageLabel: "招收年龄",
      datesLabel: "营期时间",
      locationLabel: "活动地点",
      gearLabel: "配发设备",
      tuitionLabel: "学费及资助状态",
      benefitScholarship: "低收入及中产阶级家庭可申请高达 50% 至 100% 的学费资助金（奖学金）。",
      registerBtn: "立即报名",
      soldOut: "抢位中！"
    },
    precautions: {
      title: "夏令营注意事项与家长指南",
      subtitle: "打造安全、健康、高效且充满创造力的专业影视现场",
      intro: "为确保每位营员在高度安全、严谨且充满艺术氛围的环境中度过难忘的夏令营，请家长与孩子在开营前仔细通读以下注意事项：",
      disclaimer: "GFA作为美国501(c)(3)非营利性教育机构，严格执行美国青少年安全保障政策，所有片场均购买了高额商业与人身安全保险，导师团队均已通过背景审查。"
    },
    form: {
      title: "青少年夏令营在线报名表",
      subtitle: "填写以下档案，开启您的好莱坞影视创作梦想",
      backBtn: "返回项目大纲",
      personalSec: "1. 报名营员基本信息",
      parentSec: "2. 家长/监护人联络信息",
      emergencySec: "3. 紧急联络人与健康申报",
      uploadSec: "4. 辅助材料与作品（选填）",
      childName: "营员姓名",
      childAge: "营员年龄",
      tshirtSize: "T恤尺码",
      experience: "影视/创作基础",
      experienceOpts: {
        None: "无任何基础（欢迎零基础学员）",
        Beginner: "初学基础（手机拍摄、写过小故事）",
        Intermediate: "中级水平（独立剪辑或拍摄过短片）",
        Advanced: "高级水平（有完整的作品集或专业基础）"
      },
      parentName: "家长/监护人姓名",
      phone: "联络电话",
      email: "电子邮箱",
      emergencyContactName: "紧急联络人姓名",
      emergencyPhone: "紧急联络人电话",
      dietary: "过敏源与饮食限制说明",
      medical: "重大病史 / 每日服药说明",
      selectCamp: "意向选择夏令营班次",
      notes: "写给导演组的话 / 其他疑问",
      fileNote: "提示：您可以上传简历或过往画作、影视链接，我们将为孩子匹配最合适的创作岗位。",
      submitBtn: "提交报名表（加密传输）",
      submitting: "正在保存报名加密记录...",
      successTitle: "恭喜！夏令营报名表提交成功",
      successDesc: "您的报名信息已成功录入GFA秘书处登记册。我们的招生协调员将在 2 个工作日内向您的邮箱发送入学确认书、家长同意书以及片场安全知情书。",
      successDetails: "确认信与收据已发送至电子邮箱："
    },
    faqTitle: "常见核心解答"
  }
};

export const CAMP_LIST: CampSession[] = [
  {
    id: "camp_director",
    title: "GFA Hollywood Director & Creator Camp",
    age: "11-17",
    dates: "Session 1: June 15–27, 2026 | Session 2: July 20–Aug 1, 2026",
    location: "Greater Los Angeles (Hollywood Campus & Sets)",
    gear: "Blackmagic Ursa Mini Pro, ARRI Alexa Classic, DaVinci Resolve Studio",
    spots: "6",
    highlights: [
      "Direct a 5-minute original short film with full crew",
      "Pitch projects to real Hollywood producers on Day 5",
      "Hands-on with cine-primes, grip, and dynamic lighting rigs"
    ],
    description: "Our flagship intensive program. Campers rotate through key set positions: Director, Director of Photography, Sound Mixer, Actor, and Gaffer. Over 2 weeks, they turn an initial script draft into a high-production-value cinema short.",
    curriculum: [
      { step: "Days 1-3", detail: "Screenwriting masterclass & character workshop. Every camper writes an individual script." },
      { step: "Days 4-5", detail: "Pitching and role assignments. Selecting films to move into active production." },
      { step: "Days 6-9", detail: "On-set production. Active shooting with professional setups and high-end cinema cams." },
      { step: "Days 10-12", detail: "Editing, ADR sound recording, color grading, and final export." }
    ],
    imageUrl: "https://wsrv.nl/?url=i.ibb.co/xSc1fNkg/Chat-GPT-Image-2026-5-6-18-06-00.png&w=640&output=webp"
  },
  {
    id: "camp_explorer",
    title: "Junior Film Explorers Creative Workshop",
    age: "6-10",
    dates: "Week A: June 29–July 3, 2026 | Week B: August 3–7, 2026",
    location: "GFA L.A. Youth Center & Dynamic Green-screen Studio",
    gear: "Sony FX30, iPads with LumaFusion, Professional Wireless Mics",
    spots: "12",
    highlights: [
      "Create high-energy claymation & puppet character animations",
      "Learn smartphone/tablet stabilization and creative camera angles",
      "Practice screen projection acting and collaborative group scripts"
    ],
    description: "Designed for younger kids with immense imagination. We skip dry theory and dive immediately into creative play. Campers learn how camera placement tells stories, how color evokes feelings, and how acting channels expression.",
    curriculum: [
      { step: "Day 1", detail: "The Magic of Lenses & Storyboarding. Playing visual games of size and scale." },
      { step: "Day 2", detail: "Acting & Puppetry. Finding voices and recording high-fidelity sound FX." },
      { step: "Day 3", detail: "Claymation & Frame-by-Frame. Crafting moving characters from clay." },
      { step: "Day 4", detail: "The Big Shoot: Green-screen production using virtual set backgrounds." },
      { step: "Day 5", detail: "Rough cuts, title credits design, and family soft screening." }
    ],
    imageUrl: "https://wsrv.nl/?url=i.ibb.co/ycRFxBZ4/Chat-GPT-Image-2026-3-23-12-23-04.png&w=640&output=webp"
  },
  {
    id: "camp_ai",
    title: "Sci-Fi & AI Digital Filmmaking Camp",
    age: "12-17",
    dates: "One Session: July 6–18, 2026",
    location: "GFA High-Tech Visual Lab & Virtual Production stage",
    gear: "iPad Pro with Procreate, Green Screen, CapCut, and DaVinci Resolve Magic Tools",
    spots: "8",
    highlights: [
      "Learn to write fun sci-fi adventure scripts and draw animated storyboards",
      "Act in costumes in front of a giant green screen and jump into other worlds",
      "Explore creative, kid-safe digital tools to paint outer-space backgrounds"
    ],
    description: "An exciting, highly creative camp designed for teenagers! Discover the magic of future filmmaking by blending physical acting, colorful green-screen technology, and fun digital art projects. Campers learn how to safely and responsibly express their wildest sci-fi visions.",
    curriculum: [
      { step: "Days 1-2", detail: "Sci-Fi World-Building & Character Design: Learn narrative sketching and script mini-short films." },
      { step: "Days 3-4", detail: "Art & Soundtrack Workshop: Paint cool planet backgrounds on iPads and record futuristic sound FX." },
      { step: "Days 5-8", detail: "Active Green-Screen Shooting: Grab fun costumes and film your stories live against our digital screen." },
      { step: "Days 9-12", detail: "Clipper VFX & Video Editing: Merge live acting with creative backgrounds, choose music, and export." }
    ],
    imageUrl: "/images/camp_ai.jpg"
  }
];

export const PRECAUTIONS_DATA = {
  en: [
    {
      title: "Set Operations & Costume",
      icon: "Vest",
      items: [
        { label: "Footwear Requirement", value: "Campers must wear closed-toe athletic shoes. No sandals, flip-flops, or high heels are allowed on set for safety reasons." },
        { label: "Comfortable Clothing", value: "Sets can be dusty or hot. Dress in layers. Avoid large branding, stripes, or neon green/blue clothing (as it interferes with green screen work)." },
        { label: "Weather Protection", value: "Bring a sunhat, water bottle, and apply/bring SPF 50 sunscreen. GFA provides unlimited cold water stations on sets." }
      ]
    },
    {
      title: "Attendance & Transport",
      icon: "Car",
      items: [
        { label: "Drop-off & Pick-up", value: "Drop-off is strictly at 10:00 AM. Pick-up is strictly at 3:30 PM. Parents must strictly adhere to these designated times. Late pickups will be supervised in our safe lounge." },
        { label: "Sign-in Protocols", value: "Campers must be signed in/out daily by authorized guardians. Written notification is required for self-walking teens." }
      ]
    },
    {
      title: "Safety, Health & Conduct",
      icon: "Shield",
      items: [
        { label: "Medical Submissions", value: "Before the first day of camp, a written disclosure must be signed and submitted for each child, detailing their video allergy history, current medical conditions, and any medications currently used. Signed Liability and Media Releases are also required." },
        { label: "Zero Bullying Policy", value: "GFA maintains an inclusive zone. We strictly enforce a Zero-Bullying Policy. Respect for peer creators is paramount." },
        { label: "Equipment Insurance", value: "All GFA equipment is secured and fully commercially insured under GFA's policies. Active supervision prevents accidents." }
      ]
    }
  ],
  zh: [
    {
      title: "片场拍摄与穿着指南",
      icon: "Vest",
      items: [
        { label: "鞋履要求", value: "全体学员在摄制区必须穿着包头运动鞋。为了安全原因，严禁穿着凉鞋、拖鞋或高跟鞋进场。" },
        { label: "舒适穿着", value: "拍摄场地可能会有风沙或炎热。建议采用叠穿。避免大面积商标、条纹或荧光绿/蓝颜色衣服（因为会干扰绿幕工作）。" },
        { label: "防晒与避暑服务", value: "请携带遮阳帽、自备水壶并涂发/携带 SPF 50 防晒霜。GFA片场提供无限量冰镇饮水机及水站服务。" }
      ]
    },
    {
      title: "每日接送与交通保障",
      icon: "Car",
      items: [
        { label: "接送时间窗口", value: "早上入营签到时间严格定为上午 10:00。下午闭营接载时间严格定为下午 3:30。家长必须严格遵守指定接送时间。迟到的学生将在安全休息室得到专人看护。" },
        { label: "安全签到手续", value: "营员每日进出必须有登记授权的监护人签字。青少年自理回家需提供书面确认签名通知。" }
      ]
    },
    {
      title: "安全保险与行为规范",
      icon: "Shield",
      items: [
        { label: "医疗备案要求", value: "开营首日之前，必须为每个孩子提交并签署书面健康披露报告，详细说明其影像/食品过敏史、治疗用药情况，同时需提交签署的责任豁免与肖像授权书。" },
        { label: "反霸凌与友好准则", value: "GFA 始终维护阳光包容的创作环境。我们严格执行对任何欺凌歧视行为的零容忍政策，致力于保护每名团队学员。" },
        { label: "器材财产保险", value: "所有 GFA 的电影器材及配套设备均由商业险全额担保，并由跟队导师全时监督，确保教学与操作安全无虞。" }
      ]
    }
  ]
};
