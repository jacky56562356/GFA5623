import React, { useState } from 'react';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';
import SEO from '../components/SEO';
import { 
  PlaySquare, 
  Globe2, 
  MonitorPlay, 
  Users, 
  Presentation, 
  CalendarClock, 
  CheckCircle2, 
  Award,
  Clapperboard,
  Mail,
  Smartphone,
  Check, 
  Plus, 
  Minus, 
  Info 
} from 'lucide-react';

// Pricing Data definition
const DEADLINES = [
  { id: 'early', nameEn: 'Early Bird', nameZh: '早鸟期', desc: 'Ends Sep 15' },
  { id: 'regular', nameEn: 'Regular', nameZh: '正常期', desc: 'Ends Oct 30' },
  { id: 'late', nameEn: 'Late', nameZh: '晚期', desc: 'Ends Nov 30' }
];

const ITEM_CATALOG = {
  submission: [
    { id: 'sub-en', nameEn: 'English Original', nameZh: '英文原创短剧', descEn: 'For international markets', descZh: '面向国际市场' },
    { id: 'sub-zh', nameEn: 'Chinese Drama', nameZh: '中文短剧', descEn: 'With English subtitles', descZh: '附英文字幕' },
    { id: 'sub-multi', nameEn: 'Multilingual', nameZh: '多语种短剧', descEn: 'Produced in other languages', descZh: '其他语言制作' },
    { id: 'sub-ai', nameEn: 'AI-Assisted', nameZh: 'AI辅助短剧', descEn: 'Using AI tech', descZh: '使用AI技术制作' }
  ],
  student: [
    { id: 'sub-student', nameEn: 'Student Shorts', nameZh: '学生短剧', descEn: 'Original student productions', descZh: '在校学生原创作品' }
  ],
  booths: [
    { id: 'booth-std', nameEn: 'Standard Booth', nameZh: '标准展位', price: 500, descEn: '6x6 ft Space', descZh: '6x6 英尺' },
    { id: 'booth-pre', nameEn: 'Premium Booth', nameZh: '高级展位', price: 800, descEn: '10x10 ft Space', descZh: '10x10 英尺' },
    { id: 'booth-vip', nameEn: 'VIP Booth', nameZh: 'VIP展位', price: 1500, descEn: '10x20 ft Space', descZh: '10x20 英尺' }
  ],
  ads_web: [
    { id: 'ad-home', nameEn: 'Homepage Banner Ad', nameZh: '首页Banner广告', price: 500, descEn: 'Full width, 120px height', descZh: '全宽 · 高度120px' },
    { id: 'ad-drama', nameEn: 'Drama Page Banner', nameZh: '短剧页Banner', price: 400, descEn: 'Full width, 100px height', descZh: '全宽 · 高度100px' },
    { id: 'ad-sidebar', nameEn: 'Sidebar Ad', nameZh: '侧边栏广告', price: 200, descEn: '300x250px', descZh: '300x250px' },
    { id: 'ad-email', nameEn: 'Email Newsletter Logo', nameZh: '邮件Logo', price: 150, descEn: 'Placement in global newsletter', descZh: '全球通讯邮件展示' },
  ],
  ads_onsite: [
    { id: 'ad-main', nameEn: 'Main Stage Backdrop Logo', nameZh: '主舞台背景板Logo', price: 600, descEn: 'Visible throughout ceremony', descZh: '颁奖典礼全程展示' },
    { id: 'ad-entrance', nameEn: 'Entrance Banner', nameZh: '入场处横幅', price: 400, descEn: 'Must-pass entry way', descZh: '所有来宾必经之路' },
    { id: 'ad-redcarpet', nameEn: 'Red Carpet Logo', nameZh: '红毯背景板Logo', price: 300, descEn: 'Step & Repeat backdrop', descZh: '所有红毯照片永久出现' },
    { id: 'ad-screen', nameEn: 'Big Screen Rolling Ad', nameZh: '大屏滚动广告', price: 300, descEn: 'Between major segments', descZh: '各环节间歇滚动播放' },
  ],
  ads_book: [
    { id: 'book-cover', nameEn: 'Program Book Cover', nameZh: '节目册封面', price: 500, descEn: 'Full color, premium spot', descZh: '全彩整版 最高曝光位置' },
    { id: 'book-full', nameEn: 'Full Page Ad', nameZh: '内页整版', price: 300, descEn: 'Full color page', descZh: '全彩印刷 内页整版' },
    { id: 'book-half', nameEn: 'Half Page Ad', nameZh: '内页半版', price: 180, descEn: 'Half page horizontal/vertical', descZh: '上半版或下半版' },
  ],
  posters: [
    { id: 'poster-film', nameEn: 'Film Poster', nameZh: '影片海报', price: 50, descEn: 'A2 Size Display', descZh: 'A2尺寸 (420x594mm)' },
    { id: 'poster-synopsis', nameEn: 'Poster + Synopsis Board', nameZh: '海报+简介展板', price: 80, descEn: 'Include text details', descZh: '包含影片剧情信息与导演简介' },
    { id: 'poster-company', nameEn: 'Company Poster', nameZh: '公司海报', price: 100, descEn: 'Corporate presentation', descZh: '企业介绍单独展示' },
    { id: 'poster-wall', nameEn: 'Brand Wall Logo', nameZh: '品牌展示墙Logo', price: 200, descEn: 'Dedicated high-exposure wall', descZh: '平台品牌展示墙 专属位置' },
  ],
  pitch: [
    { id: 'pitch-compete', nameEn: 'Pitch: Competing Team', nameZh: '参赛团队路演', price: 200, descEn: '8-min pitch for submitted films', descZh: '针对已投递参赛团队（8分钟）' },
    { id: 'pitch-noncompete', nameEn: 'Pitch: Non-competing', nameZh: '非参赛团队路演', price: 350, descEn: '8-min pitch for external teams', descZh: '外部团队/公司专场展示（8分钟）' },
  ],
  packages: [
    { id: 'pkg-platinum', nameEn: 'PLATINUM', nameZh: '白金平台套餐', price: 3000, valueEn: 'Save ~$1,600', valueZh: '节省约$1,600', isBestValue: true, features: [
      'VIP Exhibition Booth (10×20ft)', 'Red Carpet Backdrop Logo', 'Main Stage Backdrop Logo', 'Program Book Cover Ad', 'Homepage Banner Ad', 'Jury Representative Seat', '8 VIP Ceremony Tickets', 'Platform Brand Display Wall'
    ]},
    { id: 'pkg-gold', nameEn: 'GOLD', nameZh: '金牌企业套餐', price: 1800, valueEn: 'Save ~$800', valueZh: '节省约$800', features: [
      'Premium Exhibition Booth (10×10ft)', 'Red Carpet Backdrop Logo', 'Program Book Full Page Ad', 'Drama Page Banner Ad', 'Jury Representative Seat', '4 VIP Ceremony Tickets', 'Brand Wall Logo'
    ]},
    { id: 'pkg-silver', nameEn: 'SILVER', nameZh: '银牌展示套餐', price: 800, valueEn: 'Save ~$300', valueZh: '节省约$300', features: [
      'Standard Exhibition Booth (6×6ft)', 'Program Book Half Page Ad', '2 Ceremony Tickets', 'Brand Wall Logo', 'Email Newsletter Mention'
    ]},
    { id: 'pkg-production', nameEn: 'PRODUCTION', nameZh: '制作公司套餐', price: 500, valueEn: 'Save ~$200', valueZh: '节省约$200', features: [
      '1 Free Short Drama Submission', 'Pitch Session Slot (8 min)', 'Poster + Synopsis Board', '2 Ceremony Tickets', 'Direct Platform Matching'
    ]},
  ]
};

const getSubmissionPrice = (deadlineId: string, isStudent: boolean = false) => {
  const fees: Record<string, { standard: number, student: number }> = {
    early: { standard: 20, student: 10 },
    regular: { standard: 30, student: 15 },
    late: { standard: 40, student: 20 },
  };
  return isStudent ? fees[deadlineId].student : fees[deadlineId].standard;
};

export default function ShortDrama() {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  
  const [deadline, setDeadline] = useState('regular');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  // Recalculate Total
  const calculateTotal = () => {
    let total = 0;
    
    Object.keys(cart).forEach(id => {
      const qty = cart[id];
      if (qty === 0) return;

      let itemPrice = 0;
      
      const subItem = ITEM_CATALOG.submission.find(i => i.id === id);
      if (subItem) itemPrice = getSubmissionPrice(deadline, false);
      
      const studentItem = ITEM_CATALOG.student.find(i => i.id === id);
      if (studentItem) itemPrice = getSubmissionPrice(deadline, true);

      ['booths', 'ads_web', 'ads_onsite', 'ads_book', 'posters', 'pitch', 'packages'].forEach(cat => {
        // @ts-ignore
        const item = ITEM_CATALOG[cat].find(i => i.id === id);
        if (item) itemPrice = item.price;
      });

      total += itemPrice * qty;
    });
    
    return total;
  };

  const handleUpdateCart = (id: string, change: number) => {
    setCart(prev => {
      const currentQty = prev[id] || 0;
      const newQty = Math.max(0, currentQty + change);
      
      const isPackage = ITEM_CATALOG.packages.some(p => p.id === id);
      if (isPackage && newQty > 0) {
        let newCart = { ...prev };
        ITEM_CATALOG.packages.forEach(p => { newCart[p.id] = 0; });
        newCart[id] = 1;
        return newCart;
      }
      
      return { ...prev, [id]: newQty };
    });
  };

  const currentTotal = calculateTotal();
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const getActiveItemsInfo = () => {
    let items: any[] = [];
    Object.keys(cart).forEach(id => {
      if (cart[id] > 0) {
        let nameEn = "", nameZh = "", price = 0;
        
        let found = ITEM_CATALOG.submission.find(i => i.id === id);
        if (found) { nameEn = found.nameEn; nameZh = found.nameZh; price = getSubmissionPrice(deadline, false); }
        
        if (!found) {
          found = ITEM_CATALOG.student.find(i => i.id === id);
          if (found) { nameEn = found.nameEn; nameZh = found.nameZh; price = getSubmissionPrice(deadline, true); }
        }

        ['booths', 'ads_web', 'ads_onsite', 'ads_book', 'posters', 'pitch', 'packages'].forEach(cat => {
          // @ts-ignore
          const item = ITEM_CATALOG[cat].find(i => i.id === id);
          if (item) { nameEn = item.nameEn; nameZh = item.nameZh; price = item.price; }
        });

        items.push({ id, nameEn, nameZh, price, qty: cart[id] });
      }
    });
    return items;
  };

  const activeItems = getActiveItemsInfo();

  const CardItem = ({ item, isDynamicPrice = false, isStudent = false }: { item: any, isDynamicPrice?: boolean, isStudent?: boolean }) => {
    const qty = cart[item.id] || 0;
    const isSelected = qty > 0;
    const price = isDynamicPrice ? getSubmissionPrice(deadline, isStudent) : item.price;

    return (
      <div 
        onClick={() => { if (!isSelected) handleUpdateCart(item.id, 1) }}
        className={`bg-[#1A1A1A] border transition-all duration-300 relative overflow-hidden group
          ${isSelected ? 'border-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.15)] bg-gradient-to-br from-[#1A1A1A] to-[#1A1208]' : 'border-[#252525] hover:border-[#8B6914] cursor-pointer'}`}
      >
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isSelected ? 'bg-[#C9A84C] text-black' : 'border border-[#555] group-hover:border-[#C9A84C]'}`}>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </div>
              <div>
                <h4 className={`font-bold text-sm tracking-wide ${isSelected ? 'text-[#C9A84C]' : 'text-white'}`}>{isEn ? item.nameEn : item.nameZh}</h4>
                {!isEn && <div className="text-[10px] text-gray-500 font-serif leading-tight">{item.nameEn}</div>}
              </div>
            </div>
            <div className="text-right shrink-0">
               <div className={`font-serif font-bold text-lg ${isSelected ? 'text-[#E8C97A]' : 'text-white'}`}>${price}</div>
               <div className="text-[10px] text-gray-500">{isEn ? 'per unit' : '单价'}</div>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 font-light ml-8 mb-2 leading-tight h-[32px] overflow-hidden">
            {isEn ? item.descEn : item.descZh}
          </p>

          <div className={`ml-8 flex items-center gap-4 transition-all duration-300 overflow-hidden ${isSelected && !ITEM_CATALOG.packages.some((p: any)=>p.id===item.id) ? 'h-8 opacity-100 mt-2' : 'h-0 opacity-0'}`}>
             <span className="text-[10px] text-gray-400 uppercase tracking-widest">{isEn ? 'Quantity' : '数量'}:</span>
             <div className="flex items-center gap-1 bg-[#0A0A0A] rounded border border-[#333] p-0.5" onClick={(e)=>e.stopPropagation()}>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleUpdateCart(item.id, -1); }}
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:bg-[#1A1208] rounded transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <div className="w-8 text-center text-sm font-bold text-white leading-none pt-1">{qty}</div>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleUpdateCart(item.id, 1); }}
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:bg-[#1A1208] rounded transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
             </div>
          </div>
        </div>
      </div>
    );
  };

  const SectionTitle = ({ step, en, zh }: { step?: string, en: string, zh: string }) => (
    <div className="mb-3 relative mt-8 pt-8 border-t border-[#252525]">
      {step && <div className="text-[10px] text-[#C9A84C] uppercase tracking-[0.2em] font-bold mb-1">STEP {step} · 第{step}步</div>}
      <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-1">{isEn ? en : zh}</h2>
      {!isEn && <div className="text-xs text-[#E8C97A] tracking-wide mb-2">{en}</div>}
      <div className="w-8 h-0.5 bg-[#C9A84C]"></div>
    </div>
  );

  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans text-white pb-32">
      <SEO title="GFA Short Drama Showcase | Global Film Alliance" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-8 lg:pt-24 lg:pb-12 border-b border-[#252525] bg-gradient-to-b from-[#0A0A0A] via-[#1A1208] to-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
           <img fetchPriority="high"  src="https://wsrv.nl/?url=i.ibb.co%2FfdnnyXHm%2FGemini-Generated-Image-vzmo29vzmo29vzmo-1.png&w=1200&output=webp" referrerPolicy="no-referrer" className="w-full h-full object-cover mix-blend-screen" alt="Hero background"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container-gfa relative z-10 px-6 text-center max-w-5xl mx-auto">
          <div className="inline-block border border-[#C9A84C] px-5 py-2 rounded-sm mb-6 bg-[#0A0A0A]/50 backdrop-blur-md">
            <div className="text-[10px] text-[#C9A84C] tracking-[0.3em] font-bold uppercase">GLOBAL FILM ALLIANCE · GOLDEN FEATHER AWARDS 2026</div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl flex flex-col items-center justify-center">
            <span className="text-[#C9A84C] block">{/* [中文内容待填入] */} SHORT DRAMA </span>
            <span className="block">{/* [中文内容待填入] */} SHOWCASE </span>
          </h1>
          <p className="text-xs md:text-sm tracking-[0.4em] text-[#C9A84C] uppercase font-bold mb-6 pl-[0.4em]">{/* [中文内容待填入] */} Where Stories Meet Platforms </p>
          <p className="text-base md:text-lg text-[#CCCCCC] font-light md:w-3/4 mx-auto mb-12 leading-relaxed">
            {isEn 
             ? "The Short Drama Showcase is a special featured category of the Golden Feather Awards, running synchronously with the main ceremony. It's a dedicated platform designed for production companies, creators, and distribution platforms to showcase their work, discover new talent, and forge strategic partnerships. From Hollywood to Asia—we bridge high-quality short drama content with global distribution." 
             : "作为金羽奖的官方特设单元，短剧展映与金羽奖颁奖盛典同步进行。它不仅是一个内容角逐的竞赛单元，更是专为制作公司（内容方）和发行平台打造的综合性展示与对接生态。在这里，短剧作品展示、制作团队路演与平台出海需求实现精准对接。从好莱坞到亚洲——我们构建连接优质短剧内容与全球平台的最佳桥梁。"}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 border border-[#C9A84C]/30 bg-[#1A1A1A]/80 backdrop-blur-md p-6 rounded-lg max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-50"></div>
             
             <div className="flex-1 min-w-[120px]">
                <div className="font-serif text-3xl md:text-5xl font-bold text-[#C9A84C] mb-2 drop-shadow-md">300+</div>
                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-tight">{isEn ? "Global Submissions" : "全球投递"}</div>
             </div>
             <div className="hidden md:block w-px h-16 bg-[#C9A84C]/30"></div>
             <div className="flex-1 min-w-[120px]">
                <div className="font-serif text-3xl md:text-5xl font-bold text-[#C9A84C] mb-2 drop-shadow-md">5+</div>
                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-tight">{isEn ? "Partner Platforms" : "合作平台"}</div>
             </div>
             <div className="hidden md:block w-px h-16 bg-[#C9A84C]/30"></div>
             <div className="flex-1 min-w-[120px]">
                <div className="font-serif text-3xl md:text-5xl font-bold text-[#C9A84C] mb-2 drop-shadow-md">3</div>
                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-tight">{isEn ? "Asian Markets" : "亚洲市场"}</div>
             </div>
          </div>
        </div>
      </section>

      {/* Intro Sections */}
      <section className="py-12 bg-[#0F0F0F] border-b border-[#252525]">
         <div className="container-gfa max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
               <div className="space-y-4">
                  <div className="inline-block bg-[#1A1A1A] border border-[#333] text-[#C9A84C] px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest">
                     {isEn ? "For Platforms" : "平台合作权益"}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight">
                     {isEn ? "Empower Your Content Pipeline" : "为您的内容库注入新活力"}
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed">
                     {isEn 
                       ? "As an official partner platform of the GFA Short Drama Showcase, you gain unprecedented access to premium content and creators:" 
                       : "作为GFA金羽奖短剧单元官方合作平台，您将获得："}
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      { en: "First-look Access & Priority Distribution Rights: Exclusive early contact for distribution of nominated and winning short dramas.", zh: "内容优先对接权 — 所有入围及获奖短剧，优先向合作平台提交发行洽谈，公开发布前独家接触" },
                      { en: "Complete Content Database: Get all screening links, team information, and synopsis for all submissions.", zh: "完整内容数据库 — 获取所有参赛短剧资料，包括剧情简介、制作团队、样片链接、演员阵容及技术规格" },
                      { en: "Official Judging Seat: Your representative joins the showcase jury to evaluate premium content first.", zh: "评审委员会席位 — 您的代表担任短剧单元评审，第一时间接触并筛选最优质内容" },
                      { en: "Hollywood Onsite Booth: Dedicated physical booth at the awards to connect directly with creators and investors.", zh: "好莱坞现场展台 — 颁奖典礼现场专属展台，与制作公司、创作者、投资人直接面对面对接" },
                      { en: "Production Team Pitch: Dedicated sessions to scout for cooperative production companies and creators.", zh: "制作团队Pitch会 — 专场制作团队展示环节，直接发掘合作制作公司及创作团队" },
                      { en: "Asian Distribution Pipeline: Access our distribution network covering Mainland China, Hong Kong, and Taiwan.", zh: "亚洲发行通道 — GFA覆盖中国大陆、香港及台湾的发行网络，为平台提供亚洲市场直接通道" },
                      { en: "Hollywood Brand Endorsement: Official joint branding across the website, media, and ceremony.", zh: "好莱坞品牌背书 — 官方联合品牌认证，出现在网站、颁奖典礼及所有GFA媒体渠道" }
                    ].map((item, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 flex items-center justify-center bg-[#C9A84C]/20 border border-[#C9A84C]/50 rounded text-xs mt-0.5 shrink-0 select-none">✓</div>
                          <span className="text-gray-200 text-sm font-light leading-relaxed">{isEn ? item.en : item.zh}</span>
                       </li>
                    ))}
                  </ul>
               </div>
               <div className="relative">
                  <div className="absolute inset-0 bg-[#C9A84C]/10 rounded-[20px] transform translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6"></div>
                  <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1556761175-5973dc0f32d7%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Partnership" className="relative rounded-[20px] shadow-2xl w-full h-[350px] md:h-[450px] object-cover border border-[#333] z-10"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Categories */}
               <div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-white mb-6 flex items-center gap-3">
                     <PlaySquare className="w-5 h-5 text-[#C9A84C]" />
                     {isEn ? "Submission Categories" : "参赛类别"}
                  </h3>
                  <div className="space-y-3">
                     {[
                       { icon: "🇺🇸", titleEn: "English Original", titleZh: "英文原创短剧", descEn: "English production for international markets.", descZh: "英语制作，面向国际市场" },
                       { icon: "🇨🇳", titleEn: "Chinese Drama", titleZh: "中文短剧", descEn: "Mandarin production with English subtitles.", descZh: "普通话制作，附英文字幕" },
                       { icon: "🌐", titleEn: "Multilingual", titleZh: "多语种短剧", descEn: "Produced in other languages.", descZh: "其他语言制作" },
                       { icon: "🤖", titleEn: "AI-Assisted", titleZh: "AI辅助短剧", descEn: "Innovative content using AI tech.", descZh: "使用AI技术制作的创新内容" },
                       { icon: "🎓", titleEn: "Student Shorts", titleZh: "学生短剧", descEn: "Original student productions.", descZh: "在校学生原创作品" },
                     ].map((item, idx) => (
                        <div key={idx} className="bg-[#1A1A1A] border border-[#252525] p-5 rounded-xl flex items-start gap-4">
                           <div className="text-2xl grayscale">{item.icon}</div>
                           <div>
                              <h4 className="font-bold text-sm text-white mb-1">{isEn ? item.titleEn : item.titleZh}</h4>
                              <p className="text-gray-500 text-xs font-light">{isEn ? item.descEn : item.descZh}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Awards */}
               <div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-white mb-6 flex items-center gap-3">
                     <Award className="w-5 h-5 text-[#C9A84C]" />
                     {isEn ? "Awards & Honors" : "荣誉表彰"}
                  </h3>
                  <div className="space-y-3">
                     {[
                       { titleEn: "Best Short Drama Production", titleZh: "最佳短剧制作奖", descEn: "Recognizes overall production quality, visuals, and tech.", descZh: "表彰整体制作质量、视觉呈现与技术水准" },
                       { titleEn: "Best Short Drama Story", titleZh: "最佳短剧故事奖", descEn: "Recognizes narrative creativity and originality.", descZh: "表彰剧情创意、叙事结构与原创性" },
                       { titleEn: "Best Short Drama Actor / Actress", titleZh: "最佳短剧男女主角", descEn: "Best performances in the shorts category.", descZh: "短剧类最佳演出表演奖项" },
                       { titleEn: "Platform Favorite Award", titleZh: "平台最受欢迎奖", descEn: "Voted by partner platform representatives.", descZh: "由合作平台代表官方投票决定" },
                       { titleEn: "Audience Choice Award", titleZh: "观众最喜爱短剧", descEn: "Voted by audience; 100% of proceeds go to creators.", descZh: "观众直接投票支持，100%资金归创作者" },
                     ].map((item, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-[#1A1A1A] to-transparent p-5 rounded-xl border-l-2 border-[#C9A84C]">
                           <h4 className="font-bold text-sm text-[#E8C97A] mb-1">{isEn ? item.titleEn : item.titleZh}</h4>
                           <p className="text-gray-400 text-xs font-light">{isEn ? item.descEn : item.descZh}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Booking Form Layout */}
      <form 
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          
          setIsSubmitting(true);
          try {
             const itemsList: any[] = [];
             Object.entries(cart).forEach(([id, count]) => {
                if (count > 0) {
                   const allCatalogs = [...ITEM_CATALOG.submission, ...ITEM_CATALOG.student, ...ITEM_CATALOG.booths, ...ITEM_CATALOG.ads_web, ...ITEM_CATALOG.ads_onsite, ...ITEM_CATALOG.ads_book, ...ITEM_CATALOG.posters, ...ITEM_CATALOG.pitch, ...ITEM_CATALOG.packages];
                   const catalogItem: any = allCatalogs.find((i: any) => i.id === id);
                   if (catalogItem) {
                      let finalPrice = catalogItem.price;
                      if (ITEM_CATALOG.submission.find(i=>i.id===id) || ITEM_CATALOG.student.find(i=>i.id===id)) {
                         const studentAdjustment = ITEM_CATALOG.student.find(i=>i.id===id) ? -100 : 0;
                         if (deadline === 'early') finalPrice = 199 + studentAdjustment;
                         if (deadline === 'regular') finalPrice = 299 + studentAdjustment;
                         if (deadline === 'late') finalPrice = 399 + studentAdjustment;
                      }
                      
                      itemsList.push({
                         name: isEn ? catalogItem.nameEn : catalogItem.nameZh,
                         qty: count,
                         price: finalPrice
                      });
                   }
                }
             });

             const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                   items: itemsList,
                   customerDetails: {
                      email: data['Email'] || '',
                      filmTitle: data['Film Title (En)'] || data['Film Title (Zh)'] || 'Short Drama Entry',
                      director: data['Director Name'] || '',
                      company: data['Company/Brand Name'] || '',
                   }
                })
             });
             
             const result = await response.json();
             if (result.url) {
                window.location.href = result.url;
             } else if (result.error === "missing_stripe_key") {
                alert(isEn ? 'Stripe Checkout Demo Mode: Success! (Add STRIPE_SECRET_KEY to test payments)' : '演示模式：提交成功！（注：尚未配置真实支付密钥，故跳过支付环节）');
                setCart({});
             } else {
                throw new Error(result.message || 'Error redirecting to checkout');
             }
          } catch (e: any) {
             console.error(e);
             alert(e.message || "Failed to go to checkout");
          } finally {
             setIsSubmitting(false);
          }
        }}
        className="container-gfa max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-6 relative" id="registration-form">
         
         {/* Left Column: Form Steps */}
         <div className="w-full lg:w-[65%] space-y-4">
            <div className="mb-4 mt-4 text-center">
               <h2 className="text-2xl md:text-3xl font-serif text-[#C9A84C] font-bold mb-2">{isEn ? 'Reserve Your Spot' : '报名及预订资源'}</h2>
               <p className="text-sm text-gray-400 font-light">{isEn ? 'Configure your participation options below. Your selections will be summarized on the right.' : '请在下方配置您的参展选项。您所填写的内容将在右侧实时汇总展示。'}</p>
            </div>
            
            {/* Step 1: Submission Fees */}
            <section id="step1">
               <SectionTitle step="1" en="Category Submissions" zh="选择参赛类别" />
               <div className="mb-4 overflow-hidden rounded-[20px]">
                  <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1485846234645-a62644f84728%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Filmmaking" className="w-full h-48 object-cover opacity-60 border border-[#252525] rounded-[20px]"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
               </div>

               {/* Registration Details */}
               <section id="registration-details" className="mt-8 mb-12">
                  <SectionTitle en="Applicant & Film Information" zh="报名与影片信息填写" />
                  <div className="bg-[#111] border border-[#252525] rounded-xl p-6 md:p-8 shadow-inner space-y-6">
                     {/* Submission Form Fields */}
                   <div className="space-y-4">
                     <h4 className="text-[#C9A84C] uppercase tracking-widest text-sm font-bold border-b border-[#333] pb-2">{isEn ? 'Film Information' : '影片基本信息'}</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Film Title (En) (If applicable)' : '影片名称 (英文) (若有必填)'}</label>
                          <input type="text" name="Film Title (En)" />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Film Title (Zh)' : '影片名称 (中文)'}</label>
                          <input type="text" name="Film Title (Zh)" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Director Name (If applicable)' : '导演姓名 (若有必填)'}</label>
                          <input type="text" name="" />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Production Company' : '制作公司'}</label>
                          <input type="text" name="Production Company" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Duration (minutes)' : '影片时长 (分钟)'}</label>
                          <input type="number" name="Duration (minutes)" min="0" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Production Year' : '制作年份'}</label>
                          <input type="number" name="Production Year" min="1900" max="2099" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Screener Link (If applicable)' : '样片链接 Screener/Trailer (若有必填)'}</label>
                          <input type="url" name="" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Poster Upload (JPG/PNG/PDF, min A2)' : '海报上传 Poster Upload (JPG/PNG/PDF)'}</label>
                          <input type="file" name="Poster File" accept="image/png, image/jpeg, application/pdf" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-gray-500 text-sm focus:border-[#C9A84C] outline-none file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-[#333] file:text-gray-200 hover:file:bg-[#C9A84C] hover:file:text-black" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Synopsis / Intro' : '简介 Synopsis (若有必填)'}</label>
                          <textarea name=""></textarea>
                        </div>
                     </div>
                   </div>

                {/* Booths & Sponsored Ads Info */}
                
                   <div className="space-y-4">
                     <h4 className="text-[#C9A84C] uppercase tracking-widest text-sm font-bold border-b border-[#333] pb-2 pt-4">{isEn ? 'Corporate / Brand Information' : '企业/品牌信息'}</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Company/Brand Name (If applicable)' : '公司/品牌名称 (若有必填)'}</label>
                          <input type="text" name="" />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Contact Person' : '联系人姓名'} *</label>
                          <input type="text" name="Contact Person" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" required />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Title / Position' : '职位/头衔'}</label>
                          <input type="text" name="Title/Position" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Website URL' : '公司网址 URL'}</label>
                          <input type="url" name="Website URL" placeholder="https://" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" />
                        </div>
                        
                        {/* Only show these if they selected a booth or setup */}
                        
                          <>
                            <div className="md:col-span-2">
                              <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'On-site Representatives (If booking booth)' : '现场参展代表姓名 (预订展位必填)'}</label>
                              <div className="text-[10px] text-gray-500 mb-1">{isEn ? 'Please list names of staff attending the booth (for badges)' : '请列出所有将在展位工作的代表名单（用于制作参展证件）'}</div>
                              <input type="text" name="" />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Brand/Product Intro' : '品牌/展品简介 (限150字以内)'}</label>
                              <textarea name=""></textarea>
                            </div>
                          </>

                        <div className="md:col-span-2">
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Logo / Ad Material Upload' : 'Logo/广告素材上传 Ad Material Upload'}</label>
                          <div className="text-[10px] text-gray-500 mb-2">{isEn ? 'PNG transparent / CMYK PDF / JPG (min 300dpi)' : '支持JPG/PNG/PDF格式，最小300dpi。横幅为1920x400，侧边栏为300x250'}</div>
                          <input type="file" name="Brand Material File" accept="image/png, image/jpeg, application/pdf" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-gray-500 text-sm focus:border-[#C9A84C] outline-none file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-[#333] file:text-gray-200 hover:file:bg-[#C9A84C] hover:file:text-black" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Special Booth Requirements or Notes' : '特殊布展需求或备注 Special Requirements'}</label>
                          <textarea name="Special Requirements" rows={2} className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none"></textarea>
                        </div>
                     </div>
                   </div>

                {/* Common Contact Fields */}
                <div className="space-y-4">
                  <h4 className="text-[#C9A84C] uppercase tracking-widest text-sm font-bold border-b border-[#333] pb-2 pt-4">{isEn ? 'Contact Details' : '联络方式'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Email Address' : '联系邮箱 Email'} *</label>
                       <input type="email" name="Email" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" required />
                     </div>
                     <div>
                       <label className="block text-[11px] text-gray-400 uppercase tracking-widest mb-1">{isEn ? 'Phone Number' : '联系电话 Phone'} *</label>
                       <input type="tel" name="Phone" className="w-full bg-[#1A1A1A] border border-[#333] rounded p-2 text-white focus:border-[#C9A84C] outline-none" required />
                     </div>
                  </div>
                </div>

             
                  </div>
               </section>

            
               <div className="mb-4 pl-4 border-l-2 border-[#C9A84C] bg-[#1A1A1A] p-3 text-xs text-gray-300 leading-relaxed rounded-r shadow-inner">
                  {isEn 
                    ? "Select your submission category. Entry fees vary by deadline."
                    : "请选择您要参赛的类别（可多选）。报名费随阶段提升，尽早提交以获取优惠。"}
               </div>

               {/* Deadline Switcher */}
               <div className="flex bg-[#1A1A1A] p-1 rounded-md border border-[#252525] mb-4 relative">
                  {DEADLINES.map(d => (
                     <button 
                        key={d.id}
                        onClick={() => setDeadline(d.id)}
                        className={`flex-1 py-2 text-center transition-all duration-300 rounded relative z-10 ${deadline === d.id ? 'text-black font-bold' : 'text-gray-400 hover:text-white'}`}
                     >
                        <div className="text-sm uppercase tracking-wider font-bold mb-1">{isEn ? d.nameEn : d.nameZh}</div>
                        <div className={`text-[10px] ${deadline === d.id ? 'text-black/70' : 'text-gray-500'}`}>{d.desc}</div>
                     </button>
                  ))}
                  <div className="absolute top-1 bottom-1 w-[calc(33.33%-4px)] bg-[#C9A84C] rounded shadow transition-all duration-300 ease-in-out" 
                       style={{ transform: `translateX(${deadline === 'early' ? '4px' : deadline === 'regular' ? 'calc(100% + 8px)' : 'calc(200% + 12px)'})` }}></div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                 {ITEM_CATALOG.submission.map(item => (
                   <CardItem key={item.id} item={item} isDynamicPrice={true} />
                 ))}
               </div>
               <div className="grid grid-cols-1 gap-3">
                 {ITEM_CATALOG.student.map(item => (
                   <CardItem key={item.id} item={item} isDynamicPrice={true} isStudent={true} />
                 ))}
               </div>
            </section>

            

         
            {/* Step 2: Booths */}
            <section id="step2">
               <SectionTitle step="2" en="Exhibition Booths" zh="现场实体展位" />
               <div className="mb-6 pl-4 border-l-2 border-[#C9A84C] bg-[#1A1A1A] p-4 text-sm text-gray-300 leading-relaxed rounded-r">
                  {isEn 
                    ? "Engage attendees directly. Booths are strategically located in the main networking hall."
                    : "直面产业资源。展位位于颁奖典礼核心会场交流区，是与平台/投资人洽谈最佳场所。"}
               </div>

               <div className="mb-6 overflow-hidden rounded-[20px]">
                  <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1540575467063-178a50c2df87%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Exhibition Area" className="w-full h-48 object-cover opacity-60 border border-[#252525] rounded-[20px]"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
               </div>

               <div className="grid grid-cols-1 gap-6">
                 {ITEM_CATALOG.booths.map(item => (
                   <div key={item.id}>
                     <CardItem item={item} />
                     <div className="mt-3 bg-[#111] border border-[#252525] rounded-xl p-6 flex justify-center items-center overflow-x-auto">
                        {/* Custom SVG Diagrams */}
                        {item.id === 'booth-std' && (
                          <><svg width="200" height="160" viewBox="0 0 200 160" className="min-w-[200px]">
                            <rect x="10" y="10" width="180" height="140" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4"/>
                            <rect x="20" y="15" width="160" height="60" fill="#2A2A2A" stroke="#8B6914" strokeWidth="1"/>
                            <text x="100" y="45" textAnchor="middle" fill="#C9A84C" fontSize="11">{isEn ? 'Backdrop' : '背景板'}</text>
                            <rect x="20" y="95" width="80" height="40" fill="#3A2A1A" stroke="#8B6914" strokeWidth="1"/>
                            <text x="60" y="120" textAnchor="middle" fill="#888" fontSize="10">{isEn ? 'Table' : '桌子'}</text>
                            <rect x="115" y="100" width="25" height="25" rx="3" fill="#2A2A2A" stroke="#8B6914" strokeWidth="1"/>
                            <rect x="150" y="100" width="25" height="25" rx="3" fill="#2A2A2A" stroke="#8B6914" strokeWidth="1"/>
                            <text x="100" y="158" textAnchor="middle" fill="#888" fontSize="9">6 ft × 6 ft</text>
                          </svg>
                          <div className="mt-3 text-[#888] text-[11px] bg-[#1A1A1A] py-1 border border-[#333] rounded w-full flex items-center justify-center">{isEn ? 'Includes: Table, Chairs & Power' : '包含：桌椅 + 电源'}</div></>
                        )}
                        {item.id === 'booth-pre' && (
                          <><svg width="240" height="160" viewBox="0 0 240 160" className="min-w-[240px]">
                            <rect x="10" y="10" width="220" height="140" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4"/>
                            <rect x="20" y="15" width="200" height="50" fill="#2A2A2A" stroke="#8B6914" strokeWidth="1"/>
                            <text x="120" y="42" textAnchor="middle" fill="#C9A84C" fontSize="10">{isEn ? 'Branded Backdrop' : '品牌背景板'}</text>
                            <rect x="20" y="85" width="90" height="40" fill="#3A2A1A" stroke="#8B6914" strokeWidth="1"/>
                            <text x="65" y="110" textAnchor="middle" fill="#CCC" fontSize="10">{isEn ? 'Display Table' : '展示桌'}</text>
                            <rect x="130" y="75" width="80" height="60" fill="none" stroke="#8B6914" strokeWidth="1" strokeDasharray="2"/>
                            <text x="170" y="110" textAnchor="middle" fill="#888" fontSize="10">{isEn ? 'Display Area' : '展示区域'}</text>
                            <text x="120" y="158" textAnchor="middle" fill="#888" fontSize="9">10 ft × 10 ft</text>
                          </svg>
                          <div className="mt-3 text-[#888] text-[11px] bg-[#1A1A1A] py-1 px-2 text-center border border-[#333] rounded w-full">{isEn ? 'Includes: Branded Backdrop, Table, Chairs & Power' : '包含：品牌背景板 + 桌椅 + 电源 + 展示架'}</div></>
                        )}
                        {item.id === 'booth-vip' && (
                          <><svg width="340" height="160" viewBox="0 0 340 160" className="min-w-[340px]">
                            <rect x="10" y="10" width="320" height="140" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4"/>
                            <rect x="20" y="15" width="300" height="40" fill="#2A2A2A" stroke="#8B6914" strokeWidth="1"/>
                            <text x="170" y="38" textAnchor="middle" fill="#C9A84C" fontSize="10" fontWeight="bold">{isEn ? 'Large Branded Backdrop' : '大型品牌背景板'}</text>
                            
                            <rect x="20" y="80" width="80" height="50" fill="#3A2A1A" stroke="#8B6914" strokeWidth="1"/>
                            <text x="60" y="110" textAnchor="middle" fill="#CCC" fontSize="10">{isEn ? 'Main Stand' : '主展示台'}</text>
                            
                            <rect x="120" y="90" width="60" height="30" fill="#3A2A1A" stroke="#8B6914" strokeWidth="1"/>
                            <text x="150" y="110" textAnchor="middle" fill="#888" fontSize="8">{isEn ? 'Meeting' : '洽谈区'}</text>
                            <rect x="105" y="95" width="10" height="20" rx="2" fill="#2A2A2A" stroke="#8B6914" strokeWidth="0.5"/>
                            <rect x="185" y="95" width="10" height="20" rx="2" fill="#2A2A2A" stroke="#8B6914" strokeWidth="0.5"/>
                            
                            <rect x="210" y="70" width="90" height="70" fill="none" stroke="#8B6914" strokeWidth="1" strokeDasharray="2"/>
                            <text x="255" y="110" textAnchor="middle" fill="#888" fontSize="10">{isEn ? 'Display Area' : '资料陈列区'}</text>
                            
                            <text x="170" y="158" textAnchor="middle" fill="#888" fontSize="9">10 ft × 20 ft - {isEn ? 'Priority Location' : '优先位置'}</text>
                          </svg>
                          <div className="mt-3 text-[#888] text-[11px] bg-[#1A1A1A] py-1 px-2 text-center border border-[#333] rounded w-full">{isEn ? 'Includes: Full Setup & Program Book Ad' : '包含：大背景板 + 洽谈桌椅 + 展示架 + 全套设备 + 节目内页广告'}</div></>
                        )}
                     </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Step 3: Advertising Slots */}
            <section id="step3">
               <SectionTitle step="3" en="Global & Onsite Advertising" zh="全球宣发与会场广告位" />
               <div className="mb-4 pl-4 border-l-2 border-[#C9A84C] bg-[#1A1A1A] p-3 text-xs text-gray-300 leading-relaxed rounded-r">
                  {isEn 
                    ? "Maximize your brand exposure through digital spaces and high-traffic physical locations."
                    : "通过官网核心位置、活动会场醒目标识及官方刊物，最大化您的品牌曝光度。"}
               </div>

               <div className="space-y-6">
                  {/* Digital */}
                  <div>
                    <h3 className="text-base font-serif text-[#C9A84C] mb-3 border-b border-[#252525] pb-1">{isEn ? 'Digital & Website' : '数字端官网广告'}</h3>
                    <div className="mb-4 overflow-hidden rounded-[16px]">
                      <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1551288049-bebda4e38f71%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Digital Display" className="w-full h-32 object-cover opacity-60 border border-[#252525] rounded-[16px]"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                    </div>
                    <div className="grid grid-cols-1 gap-3 mb-2">
                      {ITEM_CATALOG.ads_web.map((item: any) => (
                        <div key={item.id}>
                          <CardItem item={item} />
                          {item.id === 'ad-home' && (
                            <div className="mt-2 bg-[#111] border border-[#252525] rounded-lg p-3 flex justify-center items-center overflow-x-auto">
                              <svg width="280" height="80" viewBox="0 0 280 80">
                                 <rect x="0" y="0" width="280" height="80" fill="#2A2A2A" rx="4"/>
                                 <rect x="0" y="0" width="280" height="12" fill="#111" rx="4"/>
                                 <text x="140" y="9" textAnchor="middle" fill="#888" fontSize="7" fontFamily="sans-serif">{/* [中文内容待填入] */} Website Navbar </text>
                                 <rect x="10" y="18" width="260" height="24" fill="#3A2A1A" stroke="#C9A84C" strokeWidth="1" strokeDasharray="2"/>
                                 <text x="140" y="32" textAnchor="middle" fill="#C9A84C" fontSize="9">Hero Banner Ad (1920x400px)</text>
                                 <rect x="10" y="50" width="160" height="20" fill="#222"/>
                                 <rect x="180" y="50" width="90" height="20" fill="#222"/>
                              </svg>
                            </div>
                          )}
                          {item.id === 'ad-sidebar' && (
                            <div className="mt-2 bg-[#111] border border-[#252525] rounded-lg p-3 flex justify-center items-center overflow-x-auto">
                              <svg width="280" height="80" viewBox="0 0 280 80">
                                 <rect x="0" y="0" width="280" height="80" fill="#2A2A2A" rx="4"/>
                                 <rect x="10" y="10" width="160" height="60" fill="#222"/>
                                 <rect x="180" y="10" width="90" height="40" fill="#3A2A1A" stroke="#C9A84C" strokeWidth="1" strokeDasharray="2"/>
                                 <text x="225" y="26" textAnchor="middle" fill="#C9A84C" fontSize="9">{/* [中文内容待填入] */} Sidebar Ad </text>
                                 <text x="225" y="38" textAnchor="middle" fill="#888" fontSize="7">300x250px</text>
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Onsite */}
                  <div>
                    <h3 className="text-base font-serif text-[#C9A84C] mb-3 border-b border-[#252525] pb-1">{isEn ? 'Ceremony Onsite' : '颁奖典礼现场广告'}</h3>
                    
                    <div className="mb-4 overflow-hidden rounded-[16px] relative">
                      <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1517604931442-7e0c8ed2963c%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Onsite Billboard" className="w-full h-32 object-cover opacity-60 border border-[#252525] rounded-[16px]"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="font-serif text-[#C9A84C] uppercase font-bold tracking-widest px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-[#C9A84C]/30 rounded text-xs">{/* [中文内容待填入] */} Premium Placements </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 mb-2">
                      {ITEM_CATALOG.ads_onsite.map((item: any) => (
                        <div key={item.id}>
                           <CardItem item={item} />
                           {item.id === 'ad-main' && (
                            <div className="mt-2 bg-[#111] border border-[#252525] rounded-lg p-3 flex justify-center items-center overflow-x-auto">
                              <svg width="280" height="80" viewBox="0 0 280 80">
                                 <rect x="20" y="10" width="240" height="45" fill="#222" stroke="#333" strokeWidth="2"/>
                                 <rect x="40" y="15" width="200" height="30" fill="#3A2A1A" stroke="#C9A84C" strokeWidth="1"/>
                                 <text x="140" y="32" textAnchor="middle" fill="#C9A84C" fontSize="9" fontWeight="bold">{/* [中文内容待填入] */} Main Stage Backdrop Logo </text>
                                 <path d="M 120 55 L 160 55 L 150 75 L 130 75 Z" fill="#444"/>
                                 <rect x="40" y="75" width="200" height="5" fill="#8B6914"/>
                              </svg>
                            </div>
                           )}
                           {item.id === 'ad-entrance' && (
                            <div className="mt-2 bg-[#111] border border-[#252525] rounded-lg p-3 flex justify-center items-center overflow-x-auto">
                              <svg width="280" height="60" viewBox="0 0 280 60">
                                 <rect x="40" y="5" width="200" height="20" fill="#3A2A1A" stroke="#C9A84C" strokeWidth="1" strokeDasharray="2"/>
                                 <text x="140" y="18" textAnchor="middle" fill="#C9A84C" fontSize="8">{/* [中文内容待填入] */} Entrance Overhead Banner </text>
                                 <rect x="40" y="25" width="10" height="35" fill="#333"/>
                                 <rect x="230" y="25" width="10" height="35" fill="#333"/>
                                 <rect x="80" y="35" width="120" height="25" fill="#222"/>
                              </svg>
                            </div>
                           )}
                           {item.id === 'ad-screen' && (
                            <div className="mt-2 bg-[#111] border border-[#252525] rounded-lg p-3 flex justify-center items-center overflow-x-auto">
                              <svg width="280" height="80" viewBox="0 0 280 80">
                                 <rect x="20" y="10" width="240" height="50" rx="4" fill="#1A1A1A" stroke="#444" strokeWidth="2"/>
                                 <rect x="30" y="20" width="220" height="30" fill="#3A2A1A" stroke="#C9A84C" strokeWidth="1"/>
                                 <text x="140" y="38" textAnchor="middle" fill="#C9A84C" fontSize="9" fontWeight="bold">{/* [中文内容待填入] */} Big Screen Rolling Ad </text>
                                 <rect x="130" y="60" width="20" height="15" fill="#333"/>
                                 <rect x="100" y="75" width="80" height="5" fill="#555"/>
                              </svg>
                            </div>
                           )}
                           {item.id === 'ad-redcarpet' && (
                            <div className="mt-2 bg-[#111] border border-[#252525] rounded-lg p-3 flex justify-center items-center overflow-x-auto">
                              <svg width="280" height="80" viewBox="0 0 280 80">
                                 <rect x="20" y="10" width="240" height="40" fill="#222" stroke="#444" strokeWidth="2"/>
                                 <text x="140" y="24" textAnchor="middle" fill="#C9A84C" fontSize="8">Red Carpet Backdrop (Step & Repeat)</text>
                                 <text x="140" y="38" textAnchor="middle" fill="#E8C97A" fontSize="6">{/* [中文内容待填入] */} Logo Logo Logo Logo Logo Logo </text>
                                 <rect x="20" y="60" width="240" height="15" fill="#501A1A"/>
                                 <text x="140" y="70" textAnchor="middle" fill="#FAA" fontSize="7">&lt;── Red Carpet ──&gt;</text>
                              </svg>
                            </div>
                           )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Book */}
                  <div>
                    <h3 className="text-base font-serif text-[#C9A84C] mb-3 border-b border-[#252525] pb-1">{isEn ? 'Official Program Book' : '官方节目印刷册'}</h3>
                    <div className="mb-4 overflow-hidden rounded-[16px]">
                      <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1552596205-db43df024090%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Program Book" className="w-full h-32 object-cover opacity-60 border border-[#252525] rounded-[16px]"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {ITEM_CATALOG.ads_book.map((item: any) => (
                         <div key={item.id}>
                           <CardItem item={item} />
                           {item.id === 'book-cover' && (
                            <div className="mt-2 bg-[#111] border border-[#252525] rounded-lg p-3 flex justify-center items-center overflow-x-auto">
                               <svg width="100" height="140" viewBox="0 0 100 140">
                                 <rect x="5" y="5" width="90" height="130" fill="#3A2A1A" stroke="#C9A84C" strokeWidth="2"/>
                                 <text x="50" y="65" textAnchor="middle" fill="#C9A84C" fontSize="10">{/* [中文内容待填入] */} Cover Ad </text>
                                 <text x="50" y="80" textAnchor="middle" fill="#888" fontSize="8">{/* [中文内容待填入] */} Full Page </text>
                               </svg>
                            </div>
                           )}
                           {item.id === 'book-half' && (
                            <div className="mt-2 bg-[#111] border border-[#252525] rounded-lg p-3 flex justify-center items-center overflow-x-auto">
                               <svg width="100" height="140" viewBox="0 0 100 140">
                                 <rect x="5" y="5" width="90" height="130" fill="#111" stroke="#444" strokeWidth="1"/>
                                 <rect x="5" y="5" width="90" height="60" fill="#3A2A1A" stroke="#C9A84C" strokeWidth="1" strokeDasharray="2"/>
                                 <text x="50" y="40" textAnchor="middle" fill="#C9A84C" fontSize="10">{/* [中文内容待填入] */} Half Page Ad </text>
                                 <rect x="15" y="80" width="70" height="5" fill="#333"/>
                                 <rect x="15" y="90" width="50" height="5" fill="#333"/>
                               </svg>
                            </div>
                           )}
                         </div>
                      ))}
                    </div>
                  </div>
               </div>
            </section>

            {/* Step 4: Poster Display */}
            <section id="step4">
               <SectionTitle step="4" en="Poster & Brand Exhibitions" zh="海报与专区展示" />
               <div className="mb-4 overflow-hidden rounded-[16px]">
                  <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1531259683007-016a7b628fc3%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Gallery" className="w-full h-32 object-cover opacity-60 border border-[#252525] rounded-[16px]"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {ITEM_CATALOG.posters.map((item: any) => (
                    <CardItem key={item.id} item={item} />
                 ))}
               </div>
               
               {/* Posters Diagram */}
               <div className="mt-4 bg-[#111] p-4 rounded-xl border border-[#252525] flex justify-center overflow-x-auto">
                 <svg width="400" height="120" viewBox="0 0 400 120">
                    <rect x="0" y="0" width="400" height="120" fill="none" stroke="#222" strokeWidth="2"/>
                    <rect x="20" y="20" width="40" height="60" fill="#1A1A1A" stroke="#555" strokeWidth="1"/>
                    <text x="40" y="55" textAnchor="middle" fill="#888" fontSize="8">{/* [中文内容待填入] */} Poster </text>
                    <rect x="70" y="20" width="40" height="60" fill="#1A1A1A" stroke="#555" strokeWidth="1"/>
                    <text x="90" y="55" textAnchor="middle" fill="#888" fontSize="8">{/* [中文内容待填入] */} Poster </text>
                    
                    <rect x="140" y="20" width="80" height="60" fill="#2A2A2A" stroke="#8B6914" strokeWidth="1"/>
                    <text x="180" y="45" textAnchor="middle" fill="#C9A84C" fontSize="8">{/* [中文内容待填入] */} Poster + Synopsis </text>
                    <text x="180" y="60" textAnchor="middle" fill="#888" fontSize="6">{/* [中文内容待填入] */} Info Panel </text>
                    
                    <rect x="240" y="20" width="140" height="60" fill="#3A2A1A" stroke="#C9A84C" strokeWidth="1"/>
                    <text x="310" y="50" textAnchor="middle" fill="#C9A84C" fontSize="9" fontWeight="bold">{/* [中文内容待填入] */} Brand Display Wall </text>
                    <text x="310" y="65" textAnchor="middle" fill="#E8C97A" fontSize="7">[Platform Logo] [Logo]</text>
                 </svg>
               </div>
            </section>

            {/* Step 5: Pitching */}
            <section id="step5">
               <SectionTitle step="5" en="Production Team Pitch" zh="制作团队展示与路演(8分钟)" />
               <div className="mb-6 overflow-hidden rounded-[20px]">
                  <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1559532297-c6a6f6fcd1bb%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Pitch" className="w-full h-48 object-cover opacity-60 border border-[#252525] rounded-[20px]"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {ITEM_CATALOG.pitch.map(item => <CardItem key={item.id} item={item} />)}
               </div>
               
               <div className="mt-6 bg-[#111] p-5 rounded-xl border border-[#252525]">
                  <h4 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                     <CalendarClock className="w-4 h-4" />
                     {isEn ? "Pitch Session Structure" : "8分钟路演时间分配"}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
                     <div className="bg-[#1A1A1A] p-2 rounded">
                        <div className="font-serif text-xl font-bold text-white mb-1">2m</div>
                        <div className="text-[10px] text-gray-400 leading-tight">{isEn ? 'Team Intro' : '团队介绍'}</div>
                     </div>
                     <div className="bg-[#1A1A1A] p-2 rounded">
                        <div className="font-serif text-xl font-bold text-white mb-1">4m</div>
                        <div className="text-[10px] text-gray-400 leading-tight">{isEn ? 'Screening' : '作品片段展示'}</div>
                     </div>
                     <div className="bg-[#1A1A1A] p-2 rounded">
                        <div className="font-serif text-xl font-bold text-white mb-1">2m</div>
                        <div className="text-[10px] text-gray-400 leading-tight">{isEn ? 'Platform Q&A' : '平台/投资人提问'}</div>
                     </div>
                     <div className="bg-[#1A1A1A] p-2 rounded border border-[#C9A84C]/30 flex flex-col justify-center">
                        <div className="text-[11px] text-[#C9A84C] font-bold">{isEn ? 'Post-Showcase' : '展示会后'}</div>
                        <div className="text-[9px] text-gray-400 leading-tight mt-1">{isEn ? 'Networking' : '自由对接洽谈'}</div>
                     </div>
                  </div>
                  <div className="border-t border-[#252525] pt-3 text-xs text-gray-400">
                    <span className="text-[#E8C97A] font-bold">{isEn ? 'Attendees:' : '出席嘉宾：'}</span> {isEn ? 'Partner Platforms · Investors · Production Companies · Hollywood Professionals' : '合作平台代表 · 影视投资人 · 制片公司 · 好莱坞专业人士'}
                  </div>
               </div>
            </section>
            
            {/* Event Schedule section added */}
            <section className="mb-4">
              <SectionTitle step="日程" en="Event Schedule" zh="当天活动日程" />
              <div className="bg-[#1A1A1A] border border-[#252525] rounded-xl overflow-hidden shadow-2xl">
                <table className="w-full text-left text-sm text-gray-300">
                  <thead className="bg-[#0A0A0A] border-b border-[#333] text-[#C9A84C] font-serif uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="px-5 py-3 w-1/3">{isEn ? 'Time' : '时间'}</th>
                      <th className="px-5 py-3">{isEn ? 'Segment' : '环节'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#252525] text-xs">
                    {[
                      { time: '2:00 PM', timeZh: '下午 2:00', segmentEn: 'Short Drama Screening Begins', segmentZh: '短剧展映开始' },
                      { time: '4:00 PM', timeZh: '下午 4:00', segmentEn: 'Production Team Showcase', segmentZh: '制作团队展示会' },
                      { time: '5:30 PM', timeZh: '下午 5:30', segmentEn: 'Open Networking', segmentZh: '平台与创作者自由对接' },
                      { time: '7:00 PM', timeZh: '晚上 7:00', segmentEn: 'Opening & Red Carpet', segmentZh: '颁奖典礼开幕·红毯' },
                      { time: '9:00 PM', timeZh: '晚上 9:00', segmentEn: 'Short Drama Awards Ceremony', segmentZh: '短剧单元颁奖' },
                      { time: '9:30 PM', timeZh: '晚上 9:30', segmentEn: 'Awards Reception & Deep Networking', segmentZh: '颁奖酒会·深度对接' },
                    ].map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#111] transition-colors">
                        <td className="px-5 py-3 font-mono font-bold text-white">{isEn ? item.time : item.timeZh}</td>
                        <td className="px-5 py-3">{isEn ? item.segmentEn : item.segmentZh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Step 6: Packages */}
            <section id="step6">
               <SectionTitle step="6" en="Sponsorship Packages" zh="官方赞助组合套餐" />
               <div className="mb-6 overflow-hidden rounded-[20px]">
                  <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1561489422-45de3d015e3e%3Fq%3D80%26w%3D2670%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" referrerPolicy="no-referrer" alt="Event Package" className="w-full h-48 object-cover opacity-60 border border-[#252525] rounded-[20px]"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
               </div>
               <div className="mb-6 pl-4 border-l-2 border-[#C9A84C] bg-[#1A1A1A] p-4 text-sm text-gray-300 leading-relaxed rounded-r">
                  {isEn 
                    ? "Maximum value. Select one of our curated packages. (Selecting a package will clear other package selections)."
                    : "最高性价比推荐！包揽核心曝光资源。注意：套餐最多只可选择一种。"}
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {ITEM_CATALOG.packages.map(pkg => {
                    const qty = cart[pkg.id] || 0;
                    const isSelected = qty > 0;
                    return (
                       <div 
                         key={pkg.id} 
                         onClick={() => { if (!isSelected) handleUpdateCart(pkg.id, 1) }}
                         className={`relative bg-[#1A1A1A] border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group
                           ${isSelected ? 'border-[#C9A84C] shadow-[0_0_20px_rgba(201,168,76,0.2)] bg-gradient-to-br from-[#1A1A1A] to-[#1A1208]' : 'border-[#333] hover:border-[#8B6914]'}`}
                       >
                         {pkg.isBestValue && (
                           <div className="absolute top-0 right-0 bg-[#C9A84C] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg z-10 shadow-md">{/* [中文内容待填入] */} Best Value </div>
                         )}
                         <div className="p-6 h-full flex flex-col relative z-0">
                            {isSelected && (
                              <div className="absolute top-6 left-6 w-5 h-5 bg-[#C9A84C] text-black rounded flex items-center justify-center">
                                 <Check className="w-3.5 h-3.5" />
                              </div>
                            )}
                            <h4 className={`text-[13px] font-bold font-sans tracking-widest mb-1 ${isSelected ? 'ml-8 text-white' : 'text-gray-300'}`}>{pkg.nameEn}</h4>
                            <div className={`text-[11px] font-serif mb-6 ${isSelected ? 'ml-8 text-[#E8C97A]' : 'text-[#C9A84C]'}`}>{pkg.nameZh}</div>
                            
                            <div className="font-serif text-3xl font-bold text-[#C9A84C] mb-2">${pkg.price}</div>
                            <div className="text-[10px] text-green-500 font-bold mb-6 flex items-center gap-1.5"><Info className="w-3 h-3"/> {isEn ? pkg.valueEn : pkg.valueZh}</div>

                            <ul className="space-y-2 mt-auto pb-4">
                              {pkg.features.map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-[10px] text-gray-400 font-light leading-tight">
                                   <div className="w-1 h-1 bg-[#8B6914] rounded-full mt-1.5 shrink-0"></div>
                                   {feature}
                                </li>
                              ))}
                            </ul>
                            
                            {/* Remove action */}
                            {isSelected && (
                               <div className="pt-3 border-t border-[#333] mt-auto">
                                  <button onClick={(e) => { e.stopPropagation(); handleUpdateCart(pkg.id, -1); }} className="text-[10px] text-gray-400 hover:text-red-400 underline transition-colors">
                                     {isEn ? 'Remove Package' : '取消选择'}
                                  </button>
                               </div>
                            )}
                         </div>
                       </div>
                    );
                 })}
               </div>
            </section>

         </div>

         {/* Right Column: Sticky Summary Panel */}
         <div className="w-full lg:w-[35%] relative">
            <div className="sticky top-28 bg-[#111] border border-[#252525] rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
               {/* Panel Header */}
               <div className="bg-[#1A1A1A] border-b border-[#C9A84C]/30 p-6">
                  <h3 className="text-xl font-serif text-[#C9A84C] font-bold mb-1">{isEn ? 'Your Selection Summary' : '已选项目汇总'}</h3>
                  <div className="text-[11px] text-gray-400 tracking-wide uppercase">{isEn ? 'Review and proceed' : '确认选择并进行下一步'}</div>
               </div>

               {/* Items List */}
               <div className="p-6 max-h-[400px] overflow-y-auto space-y-4 custom-scrollbar">
                  {activeItems.length === 0 ? (
                    <div className="text-center text-gray-500 py-8 text-sm italic font-light">
                      {isEn ? 'No items selected yet. Please select from the options on the left.' : '暂无选项，请在左侧栏点击项目进行添加。'}
                    </div>
                  ) : (
                    activeItems.map(item => (
                      <div key={item.id} className="flex justify-between items-start border-b border-[#252525] pb-4 last:border-0 last:pb-0 group">
                         <div className="pr-4 flex-1">
                            <div className="flex items-start gap-2">
                               <Check className="w-3 h-3 text-[#C9A84C] mt-1 shrink-0" />
                               <div>
                                  <div className="text-gray-200 text-sm">{isEn ? item.nameEn : item.nameZh} {item.qty > 1 && <span className="text-[#C9A84C] ml-1">×{item.qty}</span>}</div>
                                  {!isEn && <div className="text-[10px] text-gray-500">{item.nameEn}</div>}
                               </div>
                            </div>
                         </div>
                         <div className="text-right shrink-0 min-w-[60px]">
                            <div className="text-[#C9A84C] font-serif font-bold">${item.price * item.qty}</div>
                            {item.qty > 1 && (
                               <div className="text-[10px] text-gray-600">${item.price} {isEn ? 'ea' : '单价'}</div>
                            )}
                         </div>
                         <button 
                           onClick={() => handleUpdateCart(item.id, -item.qty)}
                           className="ml-2 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                           title={isEn ? 'Remove' : '移除'}
                         >
                           ×
                         </button>
                      </div>
                    ))
                  )}
               </div>

               {/* Total Area */}
               <div className="bg-[#0A0A0A] p-6 border-t border-[#C9A84C]/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-30"></div>
                  <div className="text-[11px] text-[#C9A84C] uppercase tracking-widest font-bold mb-2">{isEn ? 'Total Amount' : '总金额合计'}</div>
                  <div className="text-4xl font-serif font-bold text-[#C9A84C] mb-4">
                     ${currentTotal.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400 bg-[#1A1A1A] p-3 rounded flex justify-between items-center border border-[#252525]">
                     <span>{isEn ? `Total Items: ${totalItems}` : `共 ${totalItems} 项`}</span>
                     <span className="text-[#E8C97A]">{isEn ? 'CNY Approx:' : '人民币参考:'} <span className="font-bold ml-1 text-white">¥{(currentTotal * 7.2).toLocaleString()}</span></span>
                  </div>

                  <button 
                     type="submit"
                     disabled={currentTotal === 0 || isSubmitting}
                     className={`w-full mt-6 py-4 font-bold tracking-widest uppercase transition-all duration-300 rounded text-sm
                       ${currentTotal > 0 
                         ? 'bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C97A] shadow-[0_0_20px_rgba(201,168,76,0.3)]' 
                         : 'bg-[#252525] text-gray-500 cursor-not-allowed'}`}
                  >
                     {isSubmitting ? (isEn ? 'Processing...' : '处理中...') : (isEn ? 'Submit & Pay via Stripe' : '确认提交并去 Stripe 线上付款')}
                  </button>
                  
                  {currentTotal > 0 && (
                     <button 
                       onClick={() => setCart({})}
                       className="w-full mt-3 py-2 border border-transparent hover:border-[#333] text-gray-500 hover:text-white rounded text-[10px] tracking-widest uppercase transition-all"
                     >
                       {isEn ? 'Clear All Selections' : '清除全部已选项'}
                     </button>
                  )}
               </div>
               
               {/* Form Requirements Note */}
               {currentTotal > 0 && (
                  <div className="bg-[#1A1A1A] p-4 text-[10px] text-gray-400 font-light border-t border-[#252525]">
                     {isEn 
                       ? "Note: Please fill out the registration form on the left. Upon submission, an email will be generated. Our team will review your application and send you an invoice with payment instructions." 
                       : "提示：请在左侧填写所有必要的报名信息，点击提交后会生成邮件。我们将人工审核您的报名，并在确认无误后邮件发送付款须知及 invoice。"}
                  </div>
               )}
            </div>
         </div>

      </form>

      {/* Contact Footer */}
      <section className="border-t border-[#252525] py-16 bg-[#0A0A0A]">
         <div className="container-gfa max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-[#E8C97A] font-serif text-2xl font-bold mb-4">{isEn ? 'Need Assistance?' : '成为官方合作平台或需要定制化方案？'}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light md:w-2/3 mx-auto">
              {isEn 
               ? 'Our team is here to help you navigate the Short Drama Showcase and find the best fit for your platform or production.' 
               : '加入短剧展映单元，接触数百部经过专业筛选的内容，在好莱坞与制作团队直接对接，扩展您的内容库。请直接联系官方负责人。'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
               <a href="mailto:jacky@gfafilm.org" className="flex items-center gap-2 text-white hover:text-[#C9A84C] font-mono tracking-wider transition-colors border-b border-transparent hover:border-[#C9A84C] pb-1">
                 <Mail className="w-4 h-4" />{/* [中文内容待填入] */} jacky@gfafilm.org </a>
               <span className="hidden sm:inline text-gray-600">|</span>
               <a href="tel:626-677-8017" className="flex items-center gap-2 text-white hover:text-[#C9A84C] font-mono tracking-wider transition-colors border-b border-transparent hover:border-[#C9A84C] pb-1">
                 <Smartphone className="w-4 h-4" /> 626-677-8017
               </a>
            </div>
         </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #C9A84C; }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
}
