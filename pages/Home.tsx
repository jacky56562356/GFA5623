import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight, Heart, Star, Video, Users, UsersRound, ChevronDown, Quote, CircleCheck as CheckCircle2, HandHeart, Globe, Award } from 'lucide-react';

const Home: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale !== Locale.ZH;

  return (
    <div className="font-sans">
      <SEO title="Home | Global Film Alliance" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-gfa-inkBlack group pb-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Young filmmaker behind camera"
            className="w-full h-full object-cover opacity-45 transform group-hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/70 to-gfa-inkBlack/20"></div>
        </div>

        {/* Overlay badge top-left */}
        <div className="absolute top-32 left-8 lg:left-16 z-10 hidden lg:flex flex-col gap-3">
          <span className="bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full backdrop-blur-sm">501(c)(3) Nonprofit</span>
          <span className="bg-white/10 border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full backdrop-blur-sm">Los Angeles, CA</span>
        </div>

        {/* Stats top-right */}
        <div className="absolute top-32 right-8 lg:right-16 z-10 hidden lg:flex flex-col gap-3 text-right">
          <div className="bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-3 rounded-2xl">
            <div className="text-2xl font-bold font-serif text-white">500<span className="text-[#C9A84C]">+</span></div>
            <div className="text-[10px] text-white/60 uppercase tracking-widest">{isEn ? 'Youth Served' : '服务青少年'}</div>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-3 rounded-2xl">
            <div className="text-2xl font-bold font-serif text-white">18</div>
            <div className="text-[10px] text-white/60 uppercase tracking-widest">{isEn ? 'Award Winners' : '获奖人数'}</div>
          </div>
        </div>

        <div className="container-gfa relative z-10 px-4 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm">
            <Heart className="w-3.5 h-3.5 fill-current" />
            {isEn ? 'Opening Doors for Filmmakers' : '为每一位电影人打开那扇门'}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-serif text-white mb-8 leading-[1.05] drop-shadow-2xl">
            {isEn ? (
              <>Every Filmmaker<br/><span className="text-[#C9A84C]">Deserves a Chance</span></>
            ) : (
              <>每一位电影人<br/><span className="text-[#C9A84C]">都值得一个机会</span></>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            {isEn
              ? "GFA is a nonprofit removing the barriers between talented graduates and the careers they've earned — providing equipment, mentorship, distribution, and funding."
              : "GFA是一家非营利机构，帮助有才华的电影毕业生跨越行业壁垒，提供设备、导师、发行与资金支持。"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/filmmaker-support" className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-[0_0_30px_rgba(201,168,76,0.4)] inline-flex justify-center items-center gap-2">
              {isEn ? 'Apply for Support' : '申请扶持'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/donate" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all inline-flex justify-center items-center gap-2 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-[#C9A84C]" />
              {isEn ? 'Make a Donation' : '爱心捐款'}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center animate-bounce">
            <ChevronDown className="w-5 h-5 text-white/60" />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-[#0D0D0E] border-b border-white/5 py-4 overflow-hidden">
        <div className="container-gfa flex flex-wrap justify-center md:justify-between items-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 gap-6">
          <span className="text-white/60">501(c)(3) Certified Nonprofit · EIN 33-4817276</span>
          <span>Blackmagic Design Partner</span>
          <span>Amazon Prime · Tubi · YouTube</span>
          <span className="hidden md:inline text-[#C9A84C]/60">Golden State Film Festival</span>
          <span>Dolby Theatre 2026</span>
          <span className="hidden lg:inline">City of Pomona Partner</span>
        </div>
      </div>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Our Mission' : '我们的使命'}</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-gfa-inkBlack leading-tight mb-6">
                {isEn ? 'Talent is everywhere. Opportunity is not.' : '才华无处不在，机会却从来不均等。'}
              </h2>
              <p className="text-gfa-slate font-light leading-relaxed mb-6 text-base md:text-lg">
                {isEn
                  ? "Every year, 5,000+ film graduates flood the California market. But the industry is shrinking — on-location shoots dropped 58% since 2021. Without equipment, connections, or funding, even the most gifted graduate faces an impossible wall."
                  : "每年，5,000多名影视毕业生涌入加州市场。而行业正在萎缩——实地拍摄天数自2021年以来下降了58%。没有设备、人脉或资金，即使最有才华的毕业生也面临一堵难以逾越的墙。"}
              </p>
              <p className="text-gfa-slate font-light leading-relaxed mb-8 text-base md:text-lg">
                {isEn
                  ? "GFA exists to tear down that wall. We provide free equipment, Hollywood mentors, streaming distribution deals, and grant writing support — removing every barrier between talent and career."
                  : "GFA的存在就是为了拆除这堵墙。我们提供免费设备、好莱坞导师、流媒体发行对接和基金申请支持，消除才华与职业之间的每一道障碍。"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-colors group">
                  {isEn ? 'Our Story' : '我们的故事'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/impact" className="inline-flex items-center gap-2 text-gfa-slate hover:text-gfa-inkBlack font-medium text-sm transition-colors group">
                  {isEn ? 'See Our Impact' : '查看影响力'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Young filmmakers working together"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              {/* Floating quote */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-gfa-border">
                <Quote className="w-6 h-6 text-[#C9A84C] mb-2" />
                <p className="text-sm font-serif text-gfa-inkBlack italic leading-relaxed">
                  {isEn
                    ? '"A filmmaker shouldn\'t have to give up because they can\'t afford gear."'
                    : '"一个有才华的人，不应该因为买不起摄影机而放弃梦想。"'}
                </p>
                <p className="text-xs font-bold text-[#C9A84C] mt-3 uppercase tracking-widest">Jack Liu · Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CRISIS ── */}
      <section className="py-20 bg-gfa-inkBlack text-white overflow-hidden">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Why GFA Exists' : '为什么GFA存在'}</div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
              {isEn ? 'The California Film Industry Crisis' : '加州影视就业危机'}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { num: '42K', label: isEn ? 'Lost Jobs in LA' : '洛杉矶流失岗位', sub: '2022–2024', color: '#ef4444' },
              { num: '10.9%', label: isEn ? 'Industry Unemployment' : '行业失业率', sub: isEn ? '2.5× National Avg' : '全国均值的2.5倍', color: '#ef4444' },
              { num: '−58%', label: isEn ? 'Location Shoot Days' : '实地拍摄天数', sub: isEn ? 'Since 2021 Peak' : '自2021年峰值', color: '#f97316' },
              { num: '5,000+', label: isEn ? 'Annual Film Grads' : '年度影视毕业生', sub: isEn ? 'California Total' : '加州全州合计', color: '#C9A84C' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl md:text-4xl font-bold font-serif mb-2" style={{ color: stat.color }}>{stat.num}</div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">{stat.label}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold font-serif text-[#C9A84C] mb-5">{isEn ? 'The Four Walls Graduates Face' : '毕业生面临的四堵墙'}</h3>
              <div className="space-y-4">
                {(isEn ? [
                  { label: 'No Equipment', desc: 'Professional cameras rent for $500+/day. Most grads cannot afford a single shoot.' },
                  { label: 'No Network', desc: 'Hollywood runs on referrals. Outsiders and immigrants have almost no entry channel.' },
                  { label: 'No Distribution', desc: 'Even great films get stuck without a platform deal or festival circuit access.' },
                  { label: 'No Funding', desc: 'Public arts grants exist but writing winning applications requires industry knowledge most grads lack.' },
                ] : [
                  { label: '没有设备', desc: '专业摄影机日租金$500+，大多数毕业生根本负担不起。' },
                  { label: '没有人脉', desc: '好莱坞高度依赖推荐。外来者和移民几乎没有进入渠道。' },
                  { label: '没有发行', desc: '即使是优秀的影片，没有平台协议或影展渠道也无法触达观众。' },
                  { label: '没有资金', desc: '公共艺术基金存在，但申请需要大多数毕业生所缺乏的行业知识。' },
                ]).map(item => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0"></div>
                    <div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                      <span className="text-sm font-light text-white/60 ml-2">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold font-serif text-white mb-4">{isEn ? 'The Gap GFA Fills' : 'GFA填补的缺口'}</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6 text-sm">
                {isEn
                  ? "Existing organizations like MPTF primarily serve industry veterans. Fresh graduates — especially those from low-income, immigrant, or minority backgrounds — have zero dedicated support pipeline. GFA was founded specifically to fill this void."
                  : "现有机构（如MPTF等）主要服务老从业者。新毕业生——尤其是来自低收入、移民或少数族裔背景的——几乎没有专属支持渠道。GFA正是为填补这一空白而成立。"}
              </p>
              <Link to="/impact" className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                {isEn ? 'See the Impact' : '查看成效'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 SOLUTIONS ── */}
      <section className="py-20 bg-[#F9F7F4]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Our Programs' : '我们的计划'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? 'Breaking the 4 Critical Barriers' : '打破四大核心壁垒'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(isEn ? [
              { tag: 'Equipment Barrier', title: 'Free Equipment Access', img: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Blackmagic Design partnership grants access to professional cinema camera packages — 100% free for qualifying graduates completing their debut independent feature.' },
              { tag: 'Network Barrier', title: 'Hollywood Mentorship', img: 'https://images.pexels.com/photos/7234266/pexels-photo-7234266.jpeg?auto=compress&cs=tinysrgb&w=600', desc: '1-on-1 mentorship with veteran Hollywood filmmakers, casting directors, and producers. We break the referral wall for outsiders, immigrants, and first-generation creators.' },
              { tag: 'Distribution Barrier', title: 'Platform Distribution', img: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'We help youth and graduate projects secure distribution on Amazon Prime, Tubi, YouTube, and international streaming platforms with real audience reach.' },
              { tag: 'Funding Barrier', title: 'Grant Assistance', img: 'https://images.pexels.com/photos/6893815/pexels-photo-6893815.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Expert 1-on-1 grant writing coaching. We guide filmmakers to secure NEA, California Arts Council, and private foundation funding — turning applications into awards.' },
            ] : [
              { tag: '设备壁垒', title: '免费设备借用', img: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600', desc: '基于Blackmagic Design合作设备库，为符合条件的毕业生提供100%免费借用专业级电影机，助力完成首部独立长片。' },
              { tag: '人脉壁垒', title: '好莱坞导师网络', img: 'https://images.pexels.com/photos/7234266/pexels-photo-7234266.jpeg?auto=compress&cs=tinysrgb&w=600', desc: '与好莱坞资深电影人、选角导演和制片人一对一匹配。我们帮助外来者、移民和一代移民创作者打破圈层壁垒。' },
              { tag: '发行壁垒', title: '流媒体发行对接', img: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=600', desc: '协助青年和毕业生作品进入Amazon Prime、Tubi、YouTube等全球流媒体平台，真正触达观众。' },
              { tag: '资金壁垒', title: '基金申请辅导', img: 'https://images.pexels.com/photos/6893815/pexels-photo-6893815.jpeg?auto=compress&cs=tinysrgb&w=600', desc: '专业的一对一基金申请写作辅导。帮助电影人争取NEA、加州艺术委员会及私人基金会资助，将申请转化为资金。' },
            ]).map((item) => (
              <div key={item.tag} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gfa-border hover:shadow-lg hover:border-[#C9A84C]/30 transition-all duration-300 group flex flex-col">
                <div className="h-52 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{item.tag}</div>
                  <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-3">{item.title}</h3>
                  <p className="text-gfa-slate font-light text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/filmmaker-support" className="inline-flex items-center gap-2 bg-gfa-inkBlack text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#C9A84C] hover:text-gfa-inkBlack transition-all duration-300">
              {isEn ? 'Apply for Filmmaker Support' : '申请电影人扶持'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 CORE SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Programs for All Ages' : '全年龄段计划'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? 'From 6 to Graduation' : '从6岁到毕业，全程陪伴'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured */}
            <div className="md:col-span-1 bg-gfa-inkBlack text-white rounded-3xl overflow-hidden relative flex flex-col group">
              <div className="h-60 overflow-hidden">
                <img src="https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Filmmaker career support" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-5 left-5">
                <span className="bg-[#C9A84C] text-gfa-inkBlack text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Core Program</span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-3">{isEn ? 'Filmmaker Career Support' : '新电影人就业扶持'}</h3>
                <p className="text-white/70 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {isEn ? 'Equipment rentals, mentor matching, distribution access, grant coaching, and employment networking for film graduates.' : '设备借用、导师对接、发行接触、基金辅导和就业推荐网络。'}
                </p>
                <Link to="/filmmaker-support" className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                  {isEn ? 'Learn More' : '了解详情'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F9F7F4] rounded-3xl overflow-hidden group flex flex-col hover:shadow-lg transition-all border border-gfa-border">
              <div className="h-52 overflow-hidden">
                <img src="https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Youth film camp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-gfa-inkBlack/10 rounded-xl flex items-center justify-center mb-4">
                  <UsersRound className="w-6 h-6 text-gfa-inkBlack" />
                </div>
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-3">{isEn ? 'Youth Film Program' : '儿童与青少年计划'}</h3>
                <p className="text-gfa-slate font-light text-sm leading-relaxed mb-6 flex-grow">
                  {isEn ? 'Summer camps for ages 6–17, children\'s film production projects, talent competitions, and scholarships for low-income families.' : '6-17岁影视夏令营、儿童电影制作项目、才艺大赛及低收入家庭奖学金。'}
                </p>
                <Link to="/youth-programs" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold text-sm uppercase tracking-widest hover:text-[#C9A84C] transition-colors group/link">
                  {isEn ? 'Explore Programs' : '查看计划'} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F9F7F4] rounded-3xl overflow-hidden group flex flex-col hover:shadow-lg transition-all border border-gfa-border">
              <div className="h-52 overflow-hidden">
                <img src="https://images.pexels.com/photos/8044196/pexels-photo-8044196.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Family film guide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-gfa-inkBlack/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-gfa-inkBlack" />
                </div>
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-3">{isEn ? 'Family Career Guide' : '家长艺术规划指南'}</h3>
                <p className="text-gfa-slate font-light text-sm leading-relaxed mb-6 flex-grow">
                  {isEn ? 'Helping parents navigate the film industry and build clear, actionable career paths for their children — avoiding scams and maximizing opportunities.' : '帮助家长了解影视行业，为孩子规划清晰的艺术职业成长路径，避免骗局并最大化机会。'}
                </p>
                <Link to="/family-guide" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold text-sm uppercase tracking-widest hover:text-[#C9A84C] transition-colors group/link">
                  {isEn ? 'Read the Guide' : '阅读指南'} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="py-20 bg-[#F9F7F4] overflow-hidden">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'The GFA Journey' : 'GFA陪伴每一步'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? 'From First Frame to Career' : '从第一帧画面到职业生涯'}
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {(isEn ? [
                { stage: '01', age: 'Ages 6–10', title: 'Discover Film', desc: 'Summer camps · Community screenings · First short films', img: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300' },
                { stage: '02', age: 'Ages 11–14', title: 'Learn Creation', desc: 'Short film production · Talent competitions · Workshops', img: 'https://images.pexels.com/photos/8363831/pexels-photo-8363831.jpeg?auto=compress&cs=tinysrgb&w=300' },
                { stage: '03', age: 'Ages 15–18', title: 'Professional Training', desc: 'Hollywood training · AI filmmaking · Advanced workshops', img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=300' },
                { stage: '04', age: 'Graduate', title: 'Break Into Industry', desc: 'Career support · Free gear · Distribution deals', img: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=300' },
                { stage: '05', age: 'Professional', title: 'Give Back', desc: 'Become a mentor · Support next generation · Lead', img: 'https://images.pexels.com/photos/5212364/pexels-photo-5212364.jpeg?auto=compress&cs=tinysrgb&w=300' },
              ] : [
                { stage: '01', age: '6-10岁', title: '发现电影', desc: '夏令营 · 社区放映 · 第一部短片', img: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300' },
                { stage: '02', age: '11-14岁', title: '学习创作', desc: '短片制作 · 才艺大赛 · 工作坊', img: 'https://images.pexels.com/photos/8363831/pexels-photo-8363831.jpeg?auto=compress&cs=tinysrgb&w=300' },
                { stage: '03', age: '15-18岁', title: '专业训练', desc: '好莱坞培训 · AI影视 · 高级工作坊', img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=300' },
                { stage: '04', age: '毕业阶段', title: '进入行业', desc: '就业扶持 · 免费设备 · 发行对接', img: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=300' },
                { stage: '05', age: '职业阶段', title: '反哺社区', desc: '成为导师 · 支持下一代 · 传递力量', img: 'https://images.pexels.com/photos/5212364/pexels-photo-5212364.jpeg?auto=compress&cs=tinysrgb&w=300' },
              ]).map((step, i) => (
                <div key={step.stage} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 group-hover:border-[#C9A84C] transition-colors relative z-10">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[10px] font-black text-[#C9A84C] uppercase tracking-widest mb-1">{step.age}</div>
                  <h4 className="text-base font-bold font-serif text-gfa-inkBlack mb-2">{step.title}</h4>
                  <p className="text-xs text-gfa-slate font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS & COMPETITION ── */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Awards & Events' : '奖项与赛事'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">{isEn ? 'Celebrating Excellence' : '表彰卓越'}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-xl group relative flex flex-col h-full">
              <div className="h-80 overflow-hidden relative">
                <img src="https://images.pexels.com/photos/3137081/pexels-photo-3137081.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Golden Feather Awards ceremony" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute top-5 left-5">
                  <span className="bg-[#C9A84C] text-black text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3" /> Annual Event
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold font-serif text-white mb-2">{isEn ? 'Golden Feather Awards' : '金羽奖'}</h3>
                  <p className="text-[#C9A84C] font-bold text-xs tracking-widest uppercase">{isEn ? "Hollywood's Premier Youth Film Awards" : '好莱坞最受期待的青年电影颁奖礼'}</p>
                </div>
              </div>
              <div className="bg-gfa-inkBlack p-8 flex flex-col flex-grow">
                <p className="text-white/70 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {isEn
                    ? 'Hosted annually in Hollywood, honoring young creators showing exceptional cinematic talent. In 2025, 18 remarkable youth received recognition.'
                    : '每年在好莱坞举办，表彰在电影艺术领域展现卓越才华的青年创作者。2025年，18位青少年在此获奖。'}
                </p>
                <Link to="/awards" className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors self-start">
                  {isEn ? 'About the Awards' : '了解金羽奖'}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl group relative flex flex-col h-full">
              <div className="h-80 overflow-hidden relative">
                <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Dolby Theatre competition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute top-5 left-5">
                  <span className="bg-white/20 border border-white/30 text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">2026 Grand Finale</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold font-serif text-white mb-2">{isEn ? 'Global Youth Talent Competition' : '2026全球青少年才艺大赛'}</h3>
                  <p className="text-[#C9A84C] font-bold text-xs tracking-widest uppercase">{isEn ? 'Grand Finale at Dolby Theatre, Hollywood' : '总决赛登陆好莱坞杜比剧院'}</p>
                </div>
              </div>
              <div className="bg-[#1a1a1c] p-8 flex flex-col flex-grow">
                <p className="text-white/70 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {isEn
                    ? 'The first simultaneous US–China youth film and talent competition. Ages 6–17. The 2026 Grand Finale lights up the iconic Dolby Theatre in Hollywood.'
                    : '首个中美同步举办的青少年影视才艺大赛，6–17岁参赛，2026年决赛登陆好莱坞杜比剧院。'}
                </p>
                <Link to="/competition" className="inline-flex items-center gap-2 bg-[#C9A84C] text-black hover:bg-[#b09241] font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors self-start">
                  {isEn ? 'Register Now' : '立即报名'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="py-20 bg-[#F9F7F4]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Our Impact' : '我们的影响'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack leading-tight mb-8">
                {isEn ? 'Measuring What Matters' : '我们如何衡量成功'}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '500+', label: isEn ? 'Youth in Programs' : '计划中的青少年' },
                  { num: '18', label: isEn ? 'Award Recipients' : '获奖人数' },
                  { num: '3', label: isEn ? 'Films Distributed' : '已发行影片' },
                  { num: '$50K+', label: isEn ? 'Grants Secured' : '争取到的资金' },
                ].map(item => (
                  <div key={item.label} className="bg-white rounded-2xl p-6 border border-gfa-border shadow-sm">
                    <div className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-1">{item.num}</div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gfa-slate">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/impact" className="inline-flex items-center gap-2 bg-gfa-inkBlack text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#C9A84C] hover:text-gfa-inkBlack transition-all duration-300">
                  {isEn ? 'Full Impact Report' : '完整影响力报告'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Youth filmmaker" className="rounded-2xl h-52 w-full object-cover" />
              <img src="https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Film production" className="rounded-2xl h-52 w-full object-cover mt-8" />
              <img src="https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Children in film camp" className="rounded-2xl h-52 w-full object-cover -mt-4" />
              <img src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Camera crew" className="rounded-2xl h-52 w-full object-cover mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="py-24 bg-gfa-inkBlack relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Filmmakers at golden hour" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gfa-inkBlack/80"></div>
        </div>
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full mb-8">
            <HandHeart className="w-3.5 h-3.5" />
            {isEn ? 'Support Our Mission' : '支持我们的使命'}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight mb-6">
            {isEn ? (
              <><span className="text-[#C9A84C]">Your donation</span><br/>opens doors.</>
            ) : (
              <><span className="text-[#C9A84C]">你的捐款</span><br/>打开一扇门。</>
            )}
          </h2>
          <p className="text-white/70 font-light text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {isEn
              ? 'Every dollar funds camera access, scholarships, and mentorships for filmmakers who would otherwise be left behind. GFA is a 501(c)(3) nonprofit — all donations are tax-deductible.'
              : '每一笔捐款都资助摄影机使用、奖学金和导师计划，帮助那些否则会被遗忘的电影人。GFA是501(c)(3)非营利机构，所有捐款均可税前抵扣。'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#d4b055] transition-all hover:scale-105 shadow-[0_0_30px_rgba(201,168,76,0.3)]">
              <Heart className="w-4 h-4 fill-current" />
              {isEn ? 'Donate Now' : '立即捐款'}
            </Link>
            <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              {isEn ? 'Get Involved' : '参与我们'}
            </Link>
          </div>
          <p className="text-white/30 text-xs mt-8 uppercase tracking-widest">
            {isEn ? '501(c)(3) Nonprofit · EIN: 33-4817276 · All donations are tax-deductible' : '501(c)(3)非营利机构 · EIN: 33-4817276 · 所有捐款均可税前抵扣'}
          </p>
        </div>
      </section>

      {/* ── SPONSORS MARQUEE ── */}
      <section className="py-16 bg-white border-t border-gfa-border overflow-hidden">
        <div className="container-gfa text-center mb-10">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            {isEn ? 'Partners & Sponsors' : '合作伙伴与赞助商'}
          </p>
        </div>
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-marquee pause-animation items-center">
            {[1, 2].map(copy => (
              <div key={copy} className="flex items-center justify-around min-w-[100vw] shrink-0 gap-16 px-8">
                <span className="text-xl font-bold italic tracking-tighter text-gfa-inkBlack/70 shrink-0">Blackmagic Design</span>
                <span className="text-2xl font-serif text-gfa-inkBlack/70 shrink-0">Harmony Gold</span>
                <span className="text-xl font-bold uppercase tracking-widest text-center text-gfa-inkBlack/70 shrink-0">City of<br/>Pomona</span>
                <img src="https://i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png" alt="Sponsor" className="h-12 object-contain opacity-70" />
                <img src="https://i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png" alt="Sponsor" className="h-12 object-contain opacity-70" />
                <img src="https://i.ibb.co/XBZ4F7j/Alvantor-new-logo-2020-1.png" alt="Sponsor" className="h-12 object-contain opacity-70" />
                <img src="https://i.ibb.co/cSVbb7ZM/list-2.png" alt="Sponsor" className="h-12 object-contain opacity-70" />
                <img src="https://i.ibb.co/whJfbzKn/ALT-LOGO-2400x1800-2.jpg" alt="Sponsor" className="h-12 object-contain opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
