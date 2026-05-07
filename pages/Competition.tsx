import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight, Trophy, Star, Medal, Clapperboard, Frame, PenTool, CircleCheck as CheckCircle2, ChevronDown, Heart } from 'lucide-react';

const Competition: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale !== Locale.ZH;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = isEn ? [
    { q: "How do Chinese children participate?", a: "We have an official China division handling local registrations and preliminary rounds. Finalists will be invited to Los Angeles for the Grand Finale at the Dolby Theatre." },
    { q: "What language skills are required?", a: "Art transcends language. While basic English is helpful for the LA trip, performances and films can be in Chinese with English subtitles. We provide translation support during the finals." },
    { q: "Do we have to travel to Los Angeles for the finals?", a: "Yes, the Grand Finale is a live, in-person event at the Dolby Theatre. For finalists who cannot secure a visa, we offer live-streamed inclusion, but in-person attendance is strongly encouraged." },
    { q: "What are the entry fees? Are there scholarships?", a: "Entry fees cover administrative costs. Yes, GFA provides needs-based scholarships that can waive entry fees and even subsidize travel costs for extraordinary talents from low-income families." },
    { q: "Who are the judges and what is the criteria?", a: "Our jury consists of active Hollywood directors, casting agents, and educators. They judge based on originality, emotional resonance, technical execution (for film), and stage presence (for talent)." },
    { q: "How will we know if we made it to the finals?", a: "All participants will be notified via email on the scheduled 'Finalist Announcement' date. A public list will also be published on our website." }
  ] : [
    { q: "中国的孩子如何参赛？", a: "我们设有官方中国赛区，负责本地报名和初筛。成功晋级的选手将收到官方邀请函，前往洛杉矶主场地参加杜比剧院的总决赛。" },
    { q: "参赛需要什么语言能力？", a: "艺术超越语言。虽然基础英语对洛杉矶之旅有帮助，但表演和短片完全可以是中文（配备英文字幕）。我们在总决赛期间提供必要的语言协助。" },
    { q: "决赛是否需要亲自去洛杉矶？", a: "是的，总决赛是在杜比剧院举办的现场落地活动。如果您获得了决赛资格但因签证等不可抗力无法抵达，我们提供线上接入方案，但强烈建议亲自出席以获得完整体验。" },
    { q: "参赛费用是多少？有奖学金吗？", a: "报名费用于覆盖评审与行政成本。是的，GFA为来自低收入家庭的卓越才华选手提供按需分配的奖学金，包含报名费豁免，甚至是差旅补贴。" },
    { q: "评审是谁？标准是什么？", a: "我们的评审团由好莱坞活跃的导演、选角导演及资深教育专家组成。他们的评判标准基于：原创性、情感共鸣、技术执行力（针对短片组）和舞台表现力（针对才艺组）。" },
    { q: "如何知道是否入围决赛？", a: "所有参赛者将在预定的入围名单公布日通过电子邮件收到正式通知。同时，官方晋级名单也会在网站上公示。" }
  ];

  return (
    <div className="font-sans pb-24">
      <SEO title="Global Competition | Global Film Alliance" />

      {/* Hero */}
      <section className="relative h-screen min-h-[800px] flex items-end overflow-hidden bg-gfa-inkBlack pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ChatGPT_Image_2026年5月6日_18_06_00.png"
            alt="Grand stage competition"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 px-4 pb-24 max-w-6xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <Trophy className="w-3.5 h-3.5" />
              {isEn ? "Grand Finale at Dolby Theatre, Hollywood" : "决赛在好莱坞 Dolby Theatre"}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-serif text-white mb-6 leading-tight">
              {isEn ? "2026 GFA Global Youth" : "2026全球青少年"}<br/>
              <span className="text-[#C9A84C]">{isEn ? "Talent Competition" : "才艺大赛"}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-10 leading-relaxed">
              {isEn
                ? "The first simultaneous youth film and talent competition across the US and China — uniting the next generation of creators on Hollywood's most iconic stage."
                : "首个中美同步举办的青少年影视才艺大赛，在好莱坞最著名的舞台上汇聚下一代创作者。"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-colors shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 hover:shadow-lg">
                {isEn ? "Register — US" : "美国区报名"}
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gfa-inkBlack text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-colors">
                {isEn ? "Register — China" : "报名参赛 — 中国"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dolby */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-2xl md:text-3xl font-serif text-gfa-inkBlack italic leading-relaxed mb-8">
                {isEn
                  ? '"The first simultaneous youth film and talent competition held across the US and China, bridging a massive cultural gap to unite the next generation of creators."'
                  : '"首个中美同步举办的青少年影视才艺大赛，以最高规格的艺术展示，填补了中美青少年深度文化交流的空白。"'}
              </p>
              <div className="space-y-6 text-gfa-slate font-light leading-relaxed">
                <p>
                  {isEn
                    ? "Why the Dolby Theatre? We chose it because it is the home of the Oscars. Every February, the absolute pinnacle of cinematic achievement is honored here. In 2026, we are giving that same stage to your children — telling them their art matters that much."
                    : "为什么是Dolby Theatre？这里是奥斯卡的家。每年二月，世界最顶尖的电影人在这里书写历史。2026年，这个舞台属于你的孩子。"}
                </p>
                <p>
                  {isEn
                    ? "Children from two vastly different countries, using the universal language of film and performance, meeting on the very same stage to share their dreams."
                    : "两国的孩子，能用电影与艺术这个共同的语言，在同一个舞台上相遇，相互启发。"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/ChatGPT_Image_2026年5月6日_18_06_52.png"
                alt="Young filmmaker with camera"
                className="rounded-2xl w-full h-52 object-cover"
              />
              <img
                src="/images/ChatGPT_Image_2026年5月6日_18_12_27.png"
                alt="Youth performance on stage"
                className="rounded-2xl w-full h-52 object-cover mt-8"
              />
              <img
                src="/images/ChatGPT_Image_2026年5月6日_18_06_00.png"
                alt="Youth film production"
                className="rounded-2xl w-full h-52 object-cover"
              />
              <img
                src="/images/ChatGPT_Image_2026年5月6日_18_08_23.png"
                alt="Youth talent showcase"
                className="rounded-2xl w-full h-52 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Age Groups */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gfa-inkBlack font-bold font-serif">{isEn ? "Competition Divisions" : "参赛组别"}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Age Groups */}
            <div>
              <div className="flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-8">
                <CheckCircle2 className="w-4 h-4"/> {isEn ? "By Age Group" : "按年龄划分"}
              </div>
              <div className="space-y-4">
                {[
                  { label: "Mini Stars", age: isEn ? "Ages 6–10" : "6–10岁", bg: "bg-gfa-inkBlack text-white", badge: "Mini" },
                  { label: "Rising Stars", age: isEn ? "Ages 11–14" : "11–14岁", bg: "bg-[#C9A84C] text-black", badge: "Rise" },
                  { label: "Next Gen", age: isEn ? "Ages 15–18" : "15–18岁", bg: "bg-white border-4 border-[#C9A84C] text-gfa-inkBlack", badge: "Next" },
                ].map((g, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold font-serif text-xl shrink-0 ${g.bg}`}>{g.badge}</div>
                    <div>
                      <h4 className="font-bold text-lg text-gfa-inkBlack">{g.label}</h4>
                      <p className="text-sm font-light text-gfa-slate">{g.age}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <div className="flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-8">
                <CheckCircle2 className="w-4 h-4"/> {isEn ? "By Category" : "按专业类别划分"}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Star className="w-8 h-8 text-[#C9A84C] mx-auto mb-3"/>, en: "Performance", zh: "表演类", sub_en: "(Solo / Ensemble)", sub_zh: "个人 / 团体" },
                  { icon: <Clapperboard className="w-8 h-8 text-[#C9A84C] mx-auto mb-3"/>, en: "Film Directing", zh: "短片导演类", sub_en: "Short films", sub_zh: "剧情短片 / 纪录片" },
                  { icon: <PenTool className="w-8 h-8 text-[#C9A84C] mx-auto mb-3"/>, en: "Screenwriting", zh: "剧本创作类", sub_en: "Original scripts", sub_zh: "原创电影剧本" },
                  { icon: <Frame className="w-8 h-8 text-[#C9A84C] mx-auto mb-3"/>, en: "Talent Showcase", zh: "才艺展示类", sub_en: "Dance, Music, etc.", sub_zh: "舞蹈 / 音乐等" },
                ].map((cat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                    {cat.icon}
                    <h4 className="font-bold text-gfa-inkBlack mb-1">{isEn ? cat.en : cat.zh}</h4>
                    <p className="text-xs text-gfa-slate">{isEn ? cat.sub_en : cat.sub_zh}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* US vs China Message */}
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative overflow-hidden min-h-[360px]">
          <img
            src="/images/ChatGPT_Image_2026年5月6日_18_06_00.png"
            alt="Youth filmmaking"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gfa-inkBlack/80"></div>
          <div className="relative z-10 p-12 md:p-16 flex flex-col justify-center h-full">
            <h3 className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-4">To Chinese Families</h3>
            <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed italic text-white">
              "这不是一个普通的才艺比赛。这是让你的孩子真正站上好莱坞最著名舞台的机会。Dolby Theatre，是每一个电影梦开始的地方。"
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative overflow-hidden min-h-[360px]">
          <img
            src="/images/ChatGPT_Image_2026年5月6日_18_12_27.png"
            alt="Young performers on stage"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-[#C9A84C]/85"></div>
          <div className="relative z-10 p-12 md:p-16 flex flex-col justify-center h-full">
            <h3 className="text-black/70 font-bold tracking-widest uppercase text-sm mb-4">To American Families</h3>
            <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed italic text-black">
              "This is where East meets West on Hollywood's most iconic stage. Your child's story deserves to be told to the world."
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">{isEn ? "Process & Timeline" : "参赛流程与节点"}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { n: 1, zh: "在线报名", zhd: "填写基本信息和参赛类别", en: "Register Online", end: "Fill out info & categories", img: "/images/ChatGPT_Image_2026年5月6日_18_06_00.png" },
              { n: 2, zh: "提交作品", zhd: "上传视频或作品文件", en: "Submit Work", end: "Upload video or file", img: "/images/ChatGPT_Image_2026年5月6日_18_06_52.png" },
              { n: 3, zh: "评审入围", zhd: "专业评审委员会审核", en: "Jury Selection", end: "Industry panel review", img: "/images/ChatGPT_Image_2026年5月6日_18_12_27.png" },
              { n: 4, zh: "决赛舞台", zhd: "Dolby Theatre，好莱坞", en: "Grand Finale", end: "Dolby Theatre, LA", img: "/images/ChatGPT_Image_2026年5月6日_18_08_23.png" },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img src={step.img} alt={step.en} className="w-full h-36 object-cover" />
                  <div className="absolute inset-0 bg-gfa-inkBlack/50 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-black font-bold font-serif text-xl flex items-center justify-center shadow-lg">
                      {step.n}
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-gfa-inkBlack mb-1">{isEn ? step.en : step.zh}</h4>
                <p className="text-xs font-light text-gfa-slate">{isEn ? step.end : step.zhd}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-24 bg-gfa-inkBlack relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ChatGPT_Image_2026年5月6日_18_06_00.png"
            alt="Youth awards ceremony"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-gfa px-4 max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">{isEn ? "Awards & Honors" : "最高荣誉奖项设置"}</h2>
          <p className="text-white/60 font-light mb-12">{isEn ? "Every winner receives a formal trophy and industry recognition." : "每位获奖者将获得正式奖杯和行业认可。"}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Trophy className="w-8 h-8 text-[#C9A84C] mx-auto mb-2"/>, en: "Grand Champion", zh: "总冠军", highlight: true },
              { icon: <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>, en: "Best Performance", zh: "最佳表演", highlight: false },
              { icon: <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>, en: "Best Film", zh: "最佳短片", highlight: false },
              { icon: <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>, en: "Best Screenplay", zh: "最佳剧本", highlight: false },
              { icon: <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>, en: "Best Talent", zh: "最佳才艺", highlight: false },
              { icon: <Medal className="w-6 h-6 text-white mx-auto mb-2"/>, en: "Special Jury Award", zh: "评审特别奖", highlight: false, dark: true },
              { icon: <Medal className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>, en: "Rising Star Award", zh: "最具潜力新星", highlight: false, dark: true },
            ].map((award, i) => (
              <div key={i} className={`p-4 rounded-xl text-center ${award.highlight ? 'border-2 border-[#C9A84C] bg-[#C9A84C]/10 -translate-y-2' : award.dark ? 'bg-white/5 border border-white/10' : 'bg-white/5 border border-white/10'}`}>
                {award.icon}
                <div className={`font-bold text-sm ${award.dark ? 'text-[#C9A84C]' : 'text-white'}`}>{isEn ? award.en : award.zh}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">{isEn ? "Frequently Asked Questions" : "常见问题"}</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                <button
                  className="w-full px-6 py-5 text-left font-bold text-gfa-inkBlack flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#C9A84C] shrink-0 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 text-gfa-slate font-light text-sm overflow-hidden transition-all duration-300 ${openFaq === idx ? 'pb-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-2 border-t border-gray-100">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-hidden min-h-[320px]">
            <img
              src="/images/ChatGPT_Image_2026年5月6日_18_12_27.png"
              alt="Community film event"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gfa-inkBlack/80 flex flex-col justify-center items-center text-center px-10 py-16">
              <h3 className="text-2xl font-serif text-white mb-4">
                {isEn ? "Become an Official Sponsor" : "成为大赛官方赞助商"}
              </h3>
              <p className="text-white/60 font-light mb-6 text-sm max-w-xs">
                {isEn
                  ? "Gain brand exposure at the Dolby Theatre while supporting the next generation of global creators."
                  : "在杜比剧院获得极致的品牌曝光，同时支持下一代全球创作者群体的发展。"}
              </p>
              <button className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black uppercase tracking-widest text-xs font-bold px-8 py-3 rounded-full transition-colors">
                {isEn ? "Sponsorship Inquiry" : "赞助方案咨询"}
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden min-h-[320px]">
            <img
              src="/images/ChatGPT_Image_2026年5月6日_18_06_52.png"
              alt="Children at film event"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-[#C9A84C]/85 flex flex-col justify-center items-center text-center px-10 py-16">
              <Heart className="w-10 h-10 text-black mb-4" />
              <h3 className="text-2xl font-serif text-black mb-4">
                {isEn ? "Support a Young Finalist" : "资助一位青年决赛选手"}
              </h3>
              <p className="text-black/70 font-light mb-6 text-sm max-w-xs">
                {isEn
                  ? "Your donation funds travel grants so low-income finalists can perform on the Dolby Theatre stage."
                  : "您的捐款将资助低收入决赛选手前往洛杉矶，站上杜比剧院的舞台。"}
              </p>
              <Link to="/donate" className="bg-black text-white hover:bg-gfa-inkBlack uppercase tracking-widest text-xs font-bold px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 fill-current" /> {isEn ? "Donate Now" : "立即捐款"}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Competition;
