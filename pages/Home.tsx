import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight, Heart, Shield, Award, Users, Video, ChevronRight, Film, MapPin, Calendar } from 'lucide-react';

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
                {isZh ? '501(c)(3) 认证非营利机构 · 洛杉矶' : '501(c)(3) Certified Nonprofit · Los Angeles'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold font-serif text-[#0B0B0C] leading-[1.1] mb-6">
                {isZh ? (
                  <>打破电影行业壁垒，<br /><span className="text-[#C9A84C]">成就每一位电影人</span></>
                ) : (
                  <>Breaking Barriers,<br /><span className="text-[#C9A84C]">Empowering Every Filmmaker</span></>
                )}
              </h1>
              <p className="text-[#555] text-lg leading-relaxed mb-8 max-w-xl">
                {isZh
                  ? '全球电影联盟是一家总部位于洛杉矶的501(c)(3)非营利组织，致力于通过电影教育赋能青少年、支持新晋导演，构建公平的电影行业。'
                  : 'Global Film Alliance is a Los Angeles-based 501(c)(3) nonprofit empowering youth through film education and supporting emerging filmmakers to build sustainable careers in cinema.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/youth-programs"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-[#b09241] transition-all hover:-translate-y-px shadow-sm"
                >
                  {isZh ? '探索青少年项目' : 'Explore Youth Programs'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center gap-2 bg-[#0B0B0C] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-[#222] transition-colors"
                >
                  <Heart className="w-4 h-4 fill-current text-[#C9A84C]" />
                  {isZh ? '捐款支持' : 'Support Our Mission'}
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-[#E6E7EA] grid grid-cols-3 gap-4">
                {[
                  { num: '500+', label: isZh ? '服务青少年' : 'Youth Served' },
                  { num: '2nd', label: isZh ? '金羽奖届次' : 'Golden Feather Awards' },
                  { num: '4', label: isZh ? '核心项目' : 'Core Programs' },
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
                <div className="relative rounded-2xl overflow-hidden h-52 group">
                  <img
                    src="/images/ChatGPT_Image_2026年5月6日_18_06_00.png"
                    alt="Youth filmmakers around professional camera"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{isZh ? '青少年电影' : 'Youth Film'}</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-36 group">
                  <img
                    src="/images/ChatGPT_Image_2026年5月6日_18_06_52.png"
                    alt="Young boy with clapperboard on film set"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{isZh ? '专业制作' : 'Professional Production'}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-8">
                <div className="relative rounded-2xl overflow-hidden h-36 group">
                  <img
                    src="/images/ChatGPT_Image_2026年5月6日_18_12_27.png"
                    alt="Youth filmmakers at summer camp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{isZh ? '金羽奖' : 'Golden Feather Awards'}</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-52 group">
                  <img
                    src="/images/ChatGPT_Image_2026年5月6日_18_08_23.png"
                    alt="Youth filmmakers at golden hour"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{isZh ? '社区放映' : 'Community Screening'}</span>
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
          <span className="hidden md:inline text-[#C9A84C]/70">Golden Feather Awards</span>
          <span>Dolby Theatre 2026</span>
          <span className="hidden lg:inline">Los Angeles, CA</span>
        </div>
      </div>

      {/* ── MISSION ── */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '我们的使命' : 'Our Mission'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C] leading-tight mb-5">
                {isZh ? '连接全球卓越电影，守护电影的未来' : 'Connecting Global Film Excellence, Safeguarding the Future of Cinema'}
              </h2>
              <p className="text-[#555] leading-relaxed mb-5">
                {isZh
                  ? 'GFA相信，电影行业的壁垒不应该由才华之外的任何因素决定——不是家庭背景，不是人脉关系，也不是资金多寡。我们的存在就是为了消除这些障碍。'
                  : 'GFA believes the barriers in film should not be determined by anything beyond talent — not family background, not connections, not financial resources. We exist to remove those obstacles.'}
              </p>
              <p className="text-[#555] leading-relaxed mb-8">
                {isZh
                  ? '用电影唤醒无声者，用教育激发想象力，在创意与机遇之间架起桥梁。'
                  : 'Using film to awaken the voiceless, education to spark imagination, building bridges between creativity and opportunity.'}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Film className="w-4 h-4" />, label: isZh ? '青少年电影教育' : 'Youth Film Education' },
                  { icon: <Users className="w-4 h-4" />, label: isZh ? '社区文化推广' : 'Community Outreach' },
                  { icon: <Video className="w-4 h-4" />, label: isZh ? '新晋电影人支持' : 'Filmmaker Support' },
                  { icon: <Award className="w-4 h-4" />, label: isZh ? '金羽奖' : 'Golden Feather Awards' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#0B0B0C]">
                    <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-[#C9A84C] shrink-0">
                      {item.icon}
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="https://i.ibb.co/prw8Q6Rh/converted-image.jpg"
                alt="GFA official"
                className="w-full rounded-2xl object-cover"
              />
              <div className="bg-[#F9F7F4] rounded-2xl p-6 border border-[#E6E7EA]">
                <p className="text-sm font-serif italic text-[#444] leading-relaxed">
                  {isZh
                    ? '"用电影唤醒无声者，用教育激发想象力，在创意与机遇之间架起桥梁。——全球电影联盟"'
                    : '"Using film to awaken the voiceless, education to ignite imagination, building bridges between creativity and opportunity. — Global Film Alliance"'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className="py-20 bg-[#F9F7F4] border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-2">{isZh ? '特色项目' : 'Featured Programs'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C]">
                {isZh ? '正在进行中' : 'Now Active'}
              </h2>
            </div>
            <Link to="/youth-programs" className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-[#0B0B0C] hover:text-[#C9A84C] transition-colors">
              {isZh ? '查看全部项目' : 'All Programs'} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Program 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E6E7EA] hover:border-[#C9A84C]/40 hover:shadow-md transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_12_27.png"
                  alt="Youth at film camp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{isZh ? '正在实施' : 'Active'}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">{isZh ? '项目一' : 'Program 1'}</div>
                <h3 className="text-[15px] font-bold text-[#0B0B0C] mb-2 font-serif leading-snug">{isZh ? '社区儿童电影放映计划' : 'Community Children\'s Film Screening'}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                  {isZh ? 'GFA定期进入加州各地社区，举办免费电影放映活动。放映的全部是由孩子制作的电影，完全免费，服务所有社区居民。' : 'GFA regularly brings free film screenings to communities across California — featuring films made by children. Free for all community members.'}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <MapPin className="w-3 h-3" /> {isZh ? '加州各地社区' : 'Communities across California'}
                </div>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E6E7EA] hover:border-[#C9A84C]/40 hover:shadow-md transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_06_52.png"
                  alt="Young boy with clapperboard at film camp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#C9A84C] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{isZh ? '现正接受报名' : 'Enrolling Now'}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">{isZh ? '项目二' : 'Program 2'}</div>
                <h3 className="text-[15px] font-bold text-[#0B0B0C] mb-2 font-serif leading-snug">{isZh ? '好莱坞青少年电影夏令营2026' : 'Hollywood Youth Film Camp 2026'}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                  {isZh ? '为年轻故事讲述者提供好莱坞水平的沉浸式电影制作体验，时长10天。' : 'A Hollywood-level immersive filmmaking experience for young storytellers — 10 days in Los Angeles.'}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <Calendar className="w-3 h-3" /> {isZh ? '2026年6月15日–30日' : 'June 15–30, 2026'}
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E6E7EA] hover:border-[#C9A84C]/40 hover:shadow-md transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_08_23.png"
                  alt="Teen filmmakers at sunset"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-500 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{isZh ? '夏季开放' : 'Summer Open'}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">{isZh ? '项目四' : 'Program 4'}</div>
                <h3 className="text-[15px] font-bold text-[#0B0B0C] mb-2 font-serif leading-snug">{isZh ? '新晋导演与毕业生支持计划' : 'Emerging Director & Graduate Support'}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                  {isZh ? '帮助电影专业毕业生和新晋导演跨越学校到行业的鸿沟，提供设备、导师、发行和就业支持。' : 'Bridging the gap from school to industry for film graduates and emerging directors — equipment, mentors, distribution, and career support.'}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <Users className="w-3 h-3" /> {isZh ? '面向应届及近三年毕业生' : 'Open to recent film graduates'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO PILLARS ── */}
      <section className="py-20 bg-white border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '两大支柱' : 'Two Core Pillars'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C]">
              {isZh ? '我们的工作' : 'What We Do'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden bg-[#0B0B0C] relative group min-h-[360px]">
              <div className="absolute inset-0">
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_06_00.png"
                  alt="Youth filmmakers on professional set"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/50 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-widest mb-2">{isZh ? '支柱一' : 'Pillar One'}</div>
                <h3 className="text-2xl font-bold font-serif text-white mb-3">{isZh ? '青少年电影教育与社区推广' : 'Youth Film Education & Community Outreach'}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {isZh ? '通过专业青少年电影教育项目和加州各地免费社区投影，为下一代创作者开拓道路。' : 'Through professional youth film education programs and free community screenings across California, opening doors for the next generation of creators.'}
                </p>
                <Link to="/youth-programs" className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                  {isZh ? '了解青少年项目' : 'Youth Programs'} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#F9F7F4] border border-[#E6E7EA] relative group min-h-[360px] hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_06_52.png"
                  alt="Young boy with clapperboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="p-8">
                <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-widest mb-2">{isZh ? '支柱二' : 'Pillar Two'}</div>
                <h3 className="text-2xl font-bold font-serif text-[#0B0B0C] mb-3">{isZh ? '新晋电影人支持' : 'Emerging Filmmaker Support'}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {isZh ? '为新导演和电影专业毕业生提供设备、导师、资金和发行支持，消除才华与职业之间的每一道障碍。' : 'Providing equipment, mentors, funding and distribution support for new directors and film graduates — removing every barrier between talent and career.'}
                </p>
                <Link to="/filmmaker-support" className="inline-flex items-center gap-1.5 text-[#0B0B0C] font-bold text-xs uppercase tracking-widest hover:text-[#C9A84C] transition-colors">
                  {isZh ? '电影人支持' : 'Filmmaker Support'} <ChevronRight className="w-3.5 h-3.5" />
                </Link>
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
                  src="/images/ChatGPT_Image_2026年5月6日_18_12_27.png"
                  alt="Youth filmmakers at camp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" /> {isZh ? '第二届 · 2026年10月' : '2nd Edition · October 2026'}
                </div>
                <h3 className="text-2xl font-bold font-serif text-white mb-3">{isZh ? '金羽奖' : 'Golden Feather Awards'}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {isZh ? '表彰儿童电影、新晋导演和电影专业大学生的年度电影荣誉奖项。报名开始：2026年6月16日。' : 'Annual film honors celebrating children\'s cinema, emerging directors, and film students. Registration opens June 16, 2026.'}
                </p>
                <Link to="/awards" className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg transition-colors">
                  {isZh ? '了解详情 · 立即报名' : 'Learn More · Register'}
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group relative">
              <div className="h-72 overflow-hidden">
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_06_00.png"
                  alt="Youth filmmakers on set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest mb-2">
                  {isZh ? '2026总决赛 · 好莱坞杜比剧院' : '2026 Grand Finale · Dolby Theatre, Hollywood'}
                </div>
                <h3 className="text-2xl font-bold font-serif text-white mb-3">{isZh ? '全球青少年才艺大赛' : 'Global Youth Talent Competition'}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {isZh ? '首个中美同步举办的青少年影视才艺大赛，6-17岁参赛，决赛登陆好莱坞杜比剧院。' : 'The first simultaneous US–China youth film and talent competition. Ages 6–17. Grand Finale at Dolby Theatre.'}
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
                    ? '您的捐款直接资助免费青少年电影教育、加州各地社区投影，以及为缺乏经济资源的新晋电影人提供支持。GFA为501(c)(3)非营利组织，所有捐款均可税前抵扣。'
                    : 'Your donation directly funds free youth film education, community screenings across California, and support for emerging filmmakers who lack resources. GFA is a 501(c)(3) — all donations are tax-deductible.'}
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
                  {isZh ? 'EIN: 33-4817276 · 捐款可税前抵扣' : 'EIN: 33-4817276 · Tax-deductible donation'}
                </p>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-0">
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_06_52.png"
                  alt="Young filmmaker with clapperboard"
                  className="w-full h-full object-cover opacity-80"
                />
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_08_23.png"
                  alt="Teen filmmakers at golden hour"
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
