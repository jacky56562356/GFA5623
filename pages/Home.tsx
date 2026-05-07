import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight, Heart, Shield, Award, Users, Video, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const { locale } = useLocale();
  const isZh = locale === Locale.ZH;

  return (
    <div className="font-sans bg-white pt-16">
      <SEO title="Home | Global Film Alliance" />

      {/* ── HERO ── */}
      <section className="relative bg-white border-b border-[#E6E7EA] overflow-hidden">
        <div className="container-gfa max-w-6xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-[#C9A84C]/30 text-[#C9A84C] text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-7">
                <Shield className="w-3 h-3" />
                {isZh ? '501(c)(3) 认证非营利机构' : '501(c)(3) Certified Nonprofit'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#0B0B0C] leading-[1.1] mb-6">
                {isZh ? (
                  <>每一位电影人<br /><span className="text-[#C9A84C]">都值得一个机会</span></>
                ) : (
                  <>Every Filmmaker<br /><span className="text-[#C9A84C]">Deserves a Chance</span></>
                )}
              </h1>
              <p className="text-[#555] text-lg leading-relaxed mb-8 max-w-xl">
                {isZh
                  ? 'GFA是一家非营利机构，为有才华的影视毕业生和青少年创作者提供设备、导师、发行与资金支持。'
                  : 'GFA is a nonprofit removing the barriers between talented graduates and the careers they\'ve earned — equipment, mentorship, distribution, and funding.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/filmmaker-support"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-[#b09241] transition-all hover:-translate-y-px shadow-sm"
                >
                  {isZh ? '申请扶持' : 'Apply for Support'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center gap-2 bg-[#0B0B0C] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-[#222] transition-colors"
                >
                  <Heart className="w-4 h-4 fill-current text-[#C9A84C]" />
                  {isZh ? '捐款支持' : 'Donate'}
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-[#E6E7EA] grid grid-cols-3 gap-4">
                {[
                  { num: '500+', label: isZh ? '服务青少年' : 'Youth Served' },
                  { num: '18', label: isZh ? '获奖人数' : 'Award Winners' },
                  { num: '$50K+', label: isZh ? '争取到的资金' : 'Grants Secured' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold font-serif text-[#0B0B0C]">{stat.num}</div>
                    <div className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <img
                    src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Young filmmaker"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{isZh ? '青少年计划' : 'Youth Programs'}</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-36 group">
                  <img
                    src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Film production"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{isZh ? '设备支持' : 'Equipment Access'}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-8">
                <div className="relative rounded-2xl overflow-hidden h-36 group">
                  <img
                    src="https://images.pexels.com/photos/3137081/pexels-photo-3137081.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Awards ceremony"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{isZh ? '金羽奖' : 'Golden Feather Awards'}</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <img
                    src="https://images.pexels.com/photos/7234266/pexels-photo-7234266.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Mentorship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{isZh ? '导师计划' : 'Mentorship'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-[#F9F7F4] border-b border-[#E6E7EA] py-3 overflow-hidden">
        <div className="container-gfa flex flex-wrap justify-center md:justify-between items-center text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400 gap-4 px-4">
          <span className="text-[#0B0B0C]/60">501(c)(3) · EIN 33-4817276</span>
          <span>Blackmagic Design Partner</span>
          <span>Amazon Prime · Tubi · YouTube</span>
          <span className="hidden md:inline text-[#C9A84C]/70">Golden State Film Festival</span>
          <span>Dolby Theatre 2026</span>
          <span className="hidden lg:inline">Los Angeles, CA</span>
        </div>
      </div>

      {/* ── PROGRAMS GRID ── */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-2">{isZh ? '我们的计划' : 'Our Programs'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C]">
                {isZh ? '打破四大核心壁垒' : 'Breaking Four Critical Barriers'}
              </h2>
            </div>
            <Link to="/filmmaker-support" className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-[#0B0B0C] hover:text-[#C9A84C] transition-colors">
              {isZh ? '查看全部' : 'View all'} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(isZh ? [
              { tag: '设备壁垒', title: '免费设备借用', icon: <Video className="w-5 h-5" />, img: 'https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=500', desc: '与Blackmagic Design合作，为符合条件的毕业生免费借用专业级电影机。' },
              { tag: '人脉壁垒', title: '好莱坞导师网络', icon: <Users className="w-5 h-5" />, img: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=500', desc: '与好莱坞资深电影人一对一匹配，帮助打破圈层壁垒。' },
              { tag: '发行壁垒', title: '流媒体发行对接', icon: <Award className="w-5 h-5" />, img: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=500', desc: '协助作品进入Amazon Prime、Tubi、YouTube等全球流媒体平台。' },
              { tag: '资金壁垒', title: '基金申请辅导', icon: <Heart className="w-5 h-5" />, img: 'https://images.pexels.com/photos/6893815/pexels-photo-6893815.jpeg?auto=compress&cs=tinysrgb&w=500', desc: '专业一对一基金申请辅导，帮助争取NEA及私人基金会资助。' },
            ] : [
              { tag: 'Equipment', title: 'Free Equipment Access', icon: <Video className="w-5 h-5" />, img: 'https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Blackmagic Design partnership grants access to professional cinema cameras — free for qualifying graduates.' },
              { tag: 'Network', title: 'Hollywood Mentorship', icon: <Users className="w-5 h-5" />, img: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=500', desc: '1-on-1 matching with Hollywood veterans. Breaking the referral wall for outsiders and first-generation creators.' },
              { tag: 'Distribution', title: 'Platform Distribution', icon: <Award className="w-5 h-5" />, img: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Help youth and graduate projects reach Amazon Prime, Tubi, YouTube, and international platforms.' },
              { tag: 'Funding', title: 'Grant Assistance', icon: <Heart className="w-5 h-5" />, img: 'https://images.pexels.com/photos/6893815/pexels-photo-6893815.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Expert grant writing coaching for NEA, California Arts Council, and private foundations.' },
            ]).map((item) => (
              <div key={item.tag} className="bg-[#F9F7F4] rounded-2xl overflow-hidden border border-[#E6E7EA] hover:border-[#C9A84C]/40 hover:shadow-md transition-all group">
                <div className="h-44 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">{item.tag}</div>
                  <h3 className="text-[15px] font-bold text-[#0B0B0C] mb-2 font-serif leading-snug">{item.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-20 bg-[#0B0B0C] text-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-4">{isZh ? '我们的使命' : 'Our Mission'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight mb-6">
                {isZh ? '才华无处不在。\n机会却从来不均等。' : 'Talent is everywhere.\nOpportunity is not.'}
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">
                {isZh
                  ? '每年，5,000多名影视毕业生涌入加州市场。而行业正在萎缩——实地拍摄天数自2021年以来下降了58%。没有设备、人脉或资金，即使最有才华的毕业生也面临一堵难以逾越的墙。'
                  : 'Every year, 5,000+ film graduates flood the California market. But on-location shoots dropped 58% since 2021. Without equipment, connections, or funding, even the most gifted graduate faces an impossible wall.'}
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                {isZh
                  ? 'GFA的存在就是为了拆除这堵墙。我们提供免费设备、好莱坞导师、流媒体发行对接和基金申请支持。'
                  : 'GFA exists to tear down that wall. We provide free equipment, Hollywood mentors, streaming distribution deals, and grant writing support.'}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                {isZh ? '了解我们的故事' : 'Our Story'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '42K', label: isZh ? '洛杉矶流失岗位' : 'Lost Jobs in LA', sub: '2022–2024', color: '#ef4444' },
                { num: '10.9%', label: isZh ? '行业失业率' : 'Industry Unemployment', sub: isZh ? '全国均值2.5倍' : '2.5× National Avg', color: '#ef4444' },
                { num: '−58%', label: isZh ? '实地拍摄天数' : 'Location Shoot Days', sub: isZh ? '自2021年峰值' : 'Since 2021 Peak', color: '#f97316' },
                { num: '5K+', label: isZh ? '年度影视毕业生' : 'Annual Film Grads', sub: isZh ? '加州全州' : 'California Total', color: '#C9A84C' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors">
                  <div className="text-2xl font-bold font-serif mb-1" style={{ color: stat.color }}>{stat.num}</div>
                  <p className="text-[12px] font-semibold text-white/70 mb-0.5">{stat.label}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS FOR ALL AGES ── */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '全年龄段计划' : 'Programs for All Ages'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C]">
              {isZh ? '从6岁到毕业，全程陪伴' : 'From 6 to Graduation'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 rounded-2xl overflow-hidden bg-[#0B0B0C] relative flex flex-col group h-full min-h-[420px]">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/8044196/pexels-photo-8044196.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Film camp"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <span className="inline-block bg-[#C9A84C] text-black text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">Core</span>
                <h3 className="text-2xl font-bold font-serif text-white mb-3">{isZh ? '新电影人就业扶持' : 'Filmmaker Support'}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {isZh ? '设备借用、导师对接、发行接触、基金辅导和就业网络。' : 'Equipment, mentors, distribution, grant coaching, and employment networking for film graduates.'}
                </p>
                <Link to="/filmmaker-support" className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                  {isZh ? '了解详情' : 'Learn More'} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-rows-2 gap-6">
              <div className="rounded-2xl overflow-hidden bg-[#F9F7F4] border border-[#E6E7EA] flex group hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
                <div className="w-2/5 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Youth programs"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">{isZh ? '青少年' : 'Ages 6–17'}</div>
                  <h3 className="text-xl font-bold font-serif text-[#0B0B0C] mb-2">{isZh ? '青少年电影计划' : 'Youth Film Program'}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {isZh ? '夏令营、电影制作项目、才艺大赛及奖学金。' : 'Summer camps, short film projects, talent competitions, and scholarships for ages 6–17.'}
                  </p>
                  <Link to="/youth-programs" className="inline-flex items-center gap-1.5 text-[#0B0B0C] font-bold text-xs uppercase tracking-widest hover:text-[#C9A84C] transition-colors">
                    {isZh ? '查看计划' : 'Explore'} <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-[#F9F7F4] border border-[#E6E7EA] flex group hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
                <div className="w-2/5 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Family guide"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">{isZh ? '家长指南' : 'For Parents'}</div>
                  <h3 className="text-xl font-bold font-serif text-[#0B0B0C] mb-2">{isZh ? '家长艺术规划指南' : 'Family Career Guide'}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {isZh ? '帮助家长了解影视行业，为孩子规划清晰的职业成长路径。' : 'Helping parents navigate the industry and build clear career paths for their children.'}
                  </p>
                  <Link to="/family-guide" className="inline-flex items-center gap-1.5 text-[#0B0B0C] font-bold text-xs uppercase tracking-widest hover:text-[#C9A84C] transition-colors">
                    {isZh ? '阅读指南' : 'Read Guide'} <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS & COMPETITION ── */}
      <section className="py-20 bg-[#F9F7F4] border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-2">{isZh ? '奖项与赛事' : 'Awards & Events'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C]">
                {isZh ? '表彰卓越' : 'Celebrating Excellence'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl overflow-hidden group relative">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3137081/pexels-photo-3137081.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Golden Feather Awards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" /> {isZh ? '年度活动' : 'Annual Event'}
                </div>
                <h3 className="text-2xl font-bold font-serif text-white mb-3">{isZh ? '金羽奖' : 'Golden Feather Awards'}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {isZh ? '每年在好莱坞举办，表彰在电影艺术领域展现卓越才华的青年创作者。' : 'Hosted annually in Hollywood, honoring young creators showing exceptional cinematic talent.'}
                </p>
                <Link to="/awards" className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg transition-colors">
                  {isZh ? '了解详情' : 'About the Awards'}
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group relative">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Dolby Theatre competition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest mb-2">
                  {isZh ? '2026总决赛' : '2026 Grand Finale'}
                </div>
                <h3 className="text-2xl font-bold font-serif text-white mb-3">{isZh ? '全球青少年才艺大赛' : 'Global Youth Talent Competition'}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {isZh ? '首个中美同步举办的青少年影视才艺大赛，决赛登陆好莱坞杜比剧院。' : 'The first simultaneous US–China youth film and talent competition. Grand Finale at Dolby Theatre, Hollywood.'}
                </p>
                <Link to="/competition" className="inline-flex items-center gap-2 bg-[#C9A84C] text-black hover:bg-[#b09241] font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg transition-colors">
                  {isZh ? '立即报名' : 'Register Now'} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="py-20 bg-white border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="bg-[#0B0B0C] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-4">{isZh ? '支持我们的使命' : 'Support Our Mission'}</div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight mb-5">
                  {isZh ? <><span className="text-[#C9A84C]">你的捐款</span><br />打开一扇门。</> : <><span className="text-[#C9A84C]">Your donation</span><br />opens doors.</>}
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  {isZh
                    ? '每一笔捐款都资助摄影机使用、奖学金和导师计划。GFA是501(c)(3)非营利机构，所有捐款均可税前抵扣。'
                    : 'Every dollar funds camera access, scholarships, and mentorships. GFA is a 501(c)(3) nonprofit — all donations are tax-deductible.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/donate" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-black px-7 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-[#d4b055] transition-all">
                    <Heart className="w-4 h-4 fill-current" />
                    {isZh ? '立即捐款' : 'Donate Now'}
                  </Link>
                  <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-white/5 transition-colors">
                    {isZh ? '参与我们' : 'Get Involved'}
                  </Link>
                </div>
                <p className="text-white/25 text-[11px] mt-6 uppercase tracking-widest">
                  {isZh ? 'EIN: 33-4817276 · 捐款可税前抵扣' : 'EIN: 33-4817276 · Tax-deductible'}
                </p>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-0">
                <img
                  src="https://images.pexels.com/photos/8424554/pexels-photo-8424554.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Youth filmmaker"
                  className="w-full h-full object-cover opacity-80"
                />
                <img
                  src="https://images.pexels.com/photos/5212364/pexels-photo-5212364.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Mentor with student"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSORS MARQUEE ── */}
      <section className="py-14 bg-[#F9F7F4] border-t border-[#E6E7EA] overflow-hidden">
        <div className="container-gfa text-center mb-8">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            {isZh ? '合作伙伴与赞助商' : 'Partners & Sponsors'}
          </p>
        </div>
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9F7F4] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9F7F4] to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-marquee pause-animation items-center">
            {[1, 2].map(copy => (
              <div key={copy} className="flex items-center justify-around min-w-[100vw] shrink-0 gap-16 px-8">
                <span className="text-lg font-bold italic tracking-tighter text-[#0B0B0C]/50 shrink-0">Blackmagic Design</span>
                <span className="text-xl font-serif text-[#0B0B0C]/50 shrink-0">Harmony Gold</span>
                <span className="text-lg font-bold uppercase tracking-widest text-center text-[#0B0B0C]/50 shrink-0">City of<br />Pomona</span>
                <img src="https://i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png" alt="Sponsor" className="h-10 object-contain opacity-50" />
                <img src="https://i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png" alt="Sponsor" className="h-10 object-contain opacity-50" />
                <img src="https://i.ibb.co/XBZ4F7j/Alvantor-new-logo-2020-1.png" alt="Sponsor" className="h-10 object-contain opacity-50" />
                <img src="https://i.ibb.co/cSVbb7ZM/list-2.png" alt="Sponsor" className="h-10 object-contain opacity-50" />
                <img src="https://i.ibb.co/whJfbzKn/ALT-LOGO-2400x1800-2.jpg" alt="Sponsor" className="h-10 object-contain opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
