import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Trophy, Star, Medal, ArrowRight, Heart, Users, Camera } from 'lucide-react';

const Awards: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale !== Locale.ZH;

  return (
    <div className="font-sans pb-24">
      <SEO title="Golden Feather Awards | Global Film Alliance" />

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-gfa-inkBlack pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Awards ceremony"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/40 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 px-4 pb-20 max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <Trophy className="w-3.5 h-3.5" />
              {isEn ? "Hollywood's Premier Youth Film Awards" : "好莱坞青年电影人颁奖礼"}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-serif text-white mb-8 leading-tight">
              {isEn ? "Golden Feather" : "金羽奖"}<br/>
              <span className="text-[#C9A84C]">{isEn ? "Awards" : "颁奖典礼"}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
              {isEn
                ? "A formal, industry-judged ceremony honoring the exceptional artistic vision of emerging young filmmakers."
                : "由好莱坞专业人士担任评审，在洛杉矶核心地带举办正式颁奖典礼，表彰青年电影艺术家。"}
            </p>
          </div>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="bg-[#C9A84C] py-6">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { num: "18", label: isEn ? "Youth Winners (2025)" : "2025年获奖者" },
              { num: "100%", label: isEn ? "Industry Judging" : "好莱坞工业评审" },
              { num: "LA", label: isEn ? "Red Carpet Gala" : "正式红毯大典" },
            ].map((stat, i) => (
              <div key={i} className="text-black">
                <div className="text-3xl md:text-4xl font-bold font-serif">{stat.num}</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soulful Intro */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-2xl md:text-3xl font-light text-gfa-inkBlack leading-relaxed font-serif italic mb-10">
                {isEn
                  ? "\"It's the moment they call your name. You walk up the steps of that Hollywood stage. The lights are blinding, but when you look down, you see your parents in the front row, tears in their eyes. In that second, all those late nights editing... it becomes real. You are a filmmaker.\""
                  : "\"当名字被念出的那一刻，你走上好莱坞那座熠熠生辉的颁奖台。聚光灯很刺眼，但当你低下头，正好看到前排父母眼中闪烁的泪光。就在那一秒，所有熬夜剪辑的疲惫……全部化为真实。你是一名电影人。\""}
              </p>
              <div className="w-16 h-px bg-[#C9A84C] mb-8"></div>
              <div className="space-y-4 text-gfa-slate font-light leading-relaxed text-sm">
                <p>{isEn ? "The Golden Feather Awards is not a youth talent show. It is a serious, rigorous industry commendation." : "金羽奖不是一个简单的儿童才艺比赛。它是一个极其严肃的专业表彰活动。"}</p>
                <p>{isEn ? "Judged by active Hollywood professionals, we host a formal gala in Los Angeles to recognize the exceptional artistic vision and dedication of emerging young creatives." : "由好莱坞仍在活跃的专业人士组成评审委员会，并在好莱坞举办正式颁奖典礼，隆重表彰青年创作者。"}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Filmmaker"
                className="rounded-2xl w-full h-56 object-cover col-span-2"
              />
              <img
                src="https://images.pexels.com/photos/3419557/pexels-photo-3419557.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Film awards"
                className="rounded-2xl w-full h-44 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Young filmmaker"
                className="rounded-2xl w-full h-44 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Recap */}
      <section className="py-24 bg-gfa-inkBlack text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5827883/pexels-photo-5827883.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Awards night"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-gfa px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#C9A84C] mb-4">
              {isEn ? "2025 Ceremony Recap" : "2025 年度回顾"}
            </h2>
            <p className="text-white/60 font-light max-w-2xl mx-auto">
              {isEn ? "A night that changed lives. Here's a glimpse of what happened." : "一个改变生命的夜晚。"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-bold font-serif mb-2 text-white">18</div>
              <div className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isEn ? "Youth Winners" : "位青年电影人获奖"}</div>
            </div>
            <div className="text-center border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-bold font-serif mb-2 text-white">100%</div>
              <div className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isEn ? "Industry Judging" : "好莱坞工业评审"}</div>
            </div>
            <div className="text-center border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-bold font-serif mb-2 text-white">LA</div>
              <div className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isEn ? "Red Carpet Gala" : "正式红毯大典"}</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <Trophy className="absolute top-6 right-6 w-20 h-20 text-white/5" />
            <div className="flex items-center gap-2 text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-4 h-4" /> {isEn ? "Winner Spotlight" : "获奖者感言"}
            </div>
            <p className="text-xl md:text-2xl font-light text-white/80 italic mb-6 max-w-3xl">
              "{isEn ? "I shot my short film on my phone with my friends from school. Standing here tonight holding this trophy, surrounded by real directors... it changes everything. It tells me I actually belong here." : "我的短片是我和同学用手机拍的。今晚能站在这里拿着这座奖杯，周围全都是真正的导演……这改变了一切。它告诉我，我是属于这里的。"}"
            </p>
            <div className="text-sm font-bold uppercase tracking-widest text-white/40">— {isEn ? "Best Director (High School Category)" : "最佳青年导演（高中组）"}</div>
          </div>
        </div>
      </section>

      {/* Categories & Judging */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Categories */}
            <div>
              <div className="flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-6">
                <Trophy className="w-4 h-4" /> {isEn ? "Award Categories" : "奖项类别设置"}
              </div>
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-8">
                {isEn ? "What We Honor" : "我们表彰什么"}
              </h2>
              <div className="space-y-3">
                {[
                  { en: "Best Young Director", zh: "最佳青年导演", icon: <Star className="w-5 h-5"/> },
                  { en: "Best Performance", zh: "最佳表演", icon: <Star className="w-5 h-5"/> },
                  { en: "Best Short Film", zh: "最佳短片", icon: <Star className="w-5 h-5"/> },
                  { en: "Best Screenplay", zh: "最佳剧本", icon: <Star className="w-5 h-5"/> },
                  { en: "Best Cinematography", zh: "最佳摄影", icon: <Camera className="w-5 h-5"/> },
                  { en: "Emerging Star Award", zh: "最具潜力新星奖", icon: <Medal className="w-5 h-5"/> },
                  { en: "Special Jury Prize", zh: "评审特别奖", icon: <Trophy className="w-5 h-5"/> },
                ].map((cat, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[#C9A84C]">{cat.icon}</div>
                    <span className="font-bold text-gfa-inkBlack">{isEn ? cat.en : cat.zh}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Judging */}
            <div>
              <div className="flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-6">
                <Users className="w-4 h-4" /> {isEn ? "Judging Panel" : "评审机制"}
              </div>
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-8">
                {isEn ? "Industry-Grade Fairness" : "公正的评审机制"}
              </h2>
              <p className="text-gfa-slate font-light leading-relaxed mb-6">
                {isEn
                  ? "To guarantee the prestige of the Golden Feather Awards, our jury is composed exclusively of working professionals: active DGA directors, PGA producers, festival programmers, and seasoned entertainment educators."
                  : "为了保证金羽奖的权威性与荣誉感，我们的评审委员会完全由在一线活跃的行业专家组成：包括DGA导演、PGA制片人、电影节选片人以及资深影视教育专家。"}
              </p>
              <p className="text-gfa-slate font-light leading-relaxed mb-8">
                {isEn
                  ? "We use a blind-review system for initial technical categories to ensure absolute fairness, evaluating raw emotional impact and technical competency uninfluenced by background."
                  : "我们对初审阶段的技术类奖项采用盲审制度，纯粹评估作品传达的原始情感冲击力与技术成熟度，不受背景因素干扰。"}
              </p>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Film jury"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="font-bold font-serif text-[#C9A84C] text-lg mb-2">{isEn ? "2026 Awards Preview" : "2026年金羽奖预告"}</h4>
                  <p className="font-light text-white/80 mb-4 text-sm">
                    {isEn ? "The next ceremony will be bigger, bringing more global voices. Date TBA." : "下一届颁奖礼将规模更大。具体时间即将揭晓。"}
                  </p>
                  <button className="bg-[#C9A84C] hover:bg-white hover:text-black text-black font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors self-start">
                    {isEn ? "Join Notification List" : "加入通知名单"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Sponsors */}
      <section className="py-24 bg-white">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/3184560/pexels-photo-3184560.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Press coverage"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gfa-inkBlack/70 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold font-serif text-white mb-3">{isEn ? "Press & Media" : "媒体与报道"}</h4>
                <p className="text-sm font-light text-white/70 mb-6">{isEn ? "Cover the brightest young talents on their big night." : "为这些在闪耀之夜的才华青年进行报道。"}</p>
                <button className="border border-white text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors self-start">
                  {isEn ? "Request Press Pass" : "申请媒体证件"}
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/2489545/pexels-photo-2489545.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Corporate sponsors"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#C9A84C]/80 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold font-serif text-black mb-3">{isEn ? "Corporate Sponsors" : "企业赞助"}</h4>
                <p className="text-sm font-light text-black/80 mb-6">{isEn ? "Align your brand with the future stars of Hollywood." : "将您的品牌与好莱坞未来的璀璨新星联系在一起。"}</p>
                <button className="border border-black text-black font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors self-start">
                  {isEn ? "Sponsorship Inquiry" : "颁奖礼赞助咨询"}
                </button>
              </div>
            </div>
          </div>

          {/* Fund a Dream */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Dream ceremony"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gfa-inkBlack/80 flex flex-col items-center justify-center text-center px-8">
              <Heart className="w-12 h-12 text-[#C9A84C] mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
                {isEn ? "Fund a Dream" : "资助一个梦想之夜"}
              </h3>
              <p className="text-white/80 font-light mb-8 max-w-2xl">
                {isEn
                  ? "Our awards ceremony is entirely non-profit. Your donation ensures we can fly in low-income nominees and host an event they will remember for the rest of their lives."
                  : "我们的颁奖礼是完全非营利的。您的捐款将直接用于支持低收入家庭的提名者来到洛杉矶现场，为他们举办一场终生难忘的荣誉盛典。"}
              </p>
              <Link to="/donate" className="bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full transition-colors inline-flex items-center gap-2 shadow-lg">
                <Heart className="w-4 h-4 fill-current"/> {isEn ? "Donate to the Awards" : "为金羽奖捐款"}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Awards;
