import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight, Heart, MapPin, Calendar, Clock, CircleCheck as CheckCircle2, Users, Film, Star, Clapperboard, GraduationCap, Briefcase } from 'lucide-react';

const YouthPrograms: React.FC = () => {
  const { locale } = useLocale();
  const isZh = locale === Locale.ZH;

  return (
    <div className="font-sans pb-24 pt-16">
      <SEO title="Youth Programs | Global Film Alliance" />

      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden bg-gfa-inkBlack">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ChatGPT_Image_2026年5月6日_18_06_00.png"
            alt="Youth filmmakers learning on set"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/40 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 px-4 pb-16 max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Heart className="w-3.5 h-3.5 fill-current" />
              {isZh ? '全球电影联盟 · 青少年项目' : 'Global Film Alliance · Youth Programs'}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-5 leading-tight">
              {isZh ? <>通过电影<br /><span className="text-[#C9A84C]">赋能下一代</span></> : <>Empowering<br /><span className="text-[#C9A84C]">The Next Generation</span></>}
            </h1>
            <p className="text-lg text-white/70 font-light max-w-2xl">
              {isZh
                ? 'GFA致力于培养青少年电影人，将电影文化带入加州各地社区，让每个孩子都有机会感受电影的力量。'
                : 'GFA cultivates young filmmakers, brings film culture into communities across California, and gives every child the chance to experience the power of cinema.'}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-[#E6E7EA]">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-light font-serif text-[#444] leading-relaxed">
            {isZh
              ? '我们相信每个孩子都有接触电影艺术的权利。通过教育、制作和社区放映，GFA在青少年与专业电影世界之间架起桥梁。'
              : 'We believe every child has the right to access film art. Through education, production, and community screenings, GFA bridges the gap between youth and the professional world of cinema.'}
          </p>
        </div>
      </section>

      {/* ── PROGRAM 1: Community Screening ── */}
      <section className="py-20 bg-[#F9F7F4]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src="https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community screening"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{isZh ? '正在实施中' : 'Active'}</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '项目一' : 'Program 1'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C] leading-tight mb-5">
                {isZh ? '社区儿童电影放映计划' : 'Community Children\'s Film Screening'}
              </h2>
              <p className="text-[#555] leading-relaxed mb-6">
                {isZh
                  ? 'GFA定期进入加州各地社区，举办免费电影放映活动——放映的全部是由孩子们制作的电影。我们把文化直接带到社区、学校、电影图书馆和公园。放映全部完全免费，服务所有社区居民。'
                  : 'GFA regularly enters communities across California to host free film screenings — featuring films made entirely by children. We bring culture directly to communities, schools, libraries, and parks. All screenings are completely free.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {(isZh ? [
                  '对所有社区居民完全免费',
                  '放映的电影全部由儿童制作',
                  '在加州各地社区轮流举办',
                  '与学校、图书馆和社区中心合作',
                ] : [
                  'Completely free for all community members',
                  'All films are made by children',
                  'Rotating across California communities',
                  'Partnering with schools, libraries, and community centers',
                ]).map(item => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#444]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{isZh ? '加利福尼亚州各地社区' : 'Communities across California'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM 2: Summer Camp ── */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '项目二' : 'Program 2'}</div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C] leading-tight">
                  {isZh ? '好莱坞青少年电影夏令营2026' : 'Hollywood Youth Film Camp 2026'}
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                {isZh ? '现正接受报名' : 'Enrolling Now'}
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#F9F7F4] rounded-xl p-3 text-center border border-[#E6E7EA]">
                  <Calendar className="w-4 h-4 text-[#C9A84C] mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-[#0B0B0C]">{isZh ? '6月15–30日' : 'June 15–30'}</div>
                  <div className="text-[10px] text-gray-400">2026</div>
                </div>
                <div className="bg-[#F9F7F4] rounded-xl p-3 text-center border border-[#E6E7EA]">
                  <Clock className="w-4 h-4 text-[#C9A84C] mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-[#0B0B0C]">{isZh ? '上午10–下午4:30' : '10am–4:30pm'}</div>
                  <div className="text-[10px] text-gray-400">{isZh ? '每日' : 'Daily'}</div>
                </div>
                <div className="bg-[#F9F7F4] rounded-xl p-3 text-center border border-[#E6E7EA]">
                  <MapPin className="w-4 h-4 text-[#C9A84C] mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-[#0B0B0C]">{isZh ? '洛杉矶' : 'Los Angeles'}</div>
                  <div className="text-[10px] text-gray-400">California</div>
                </div>
              </div>

              <p className="text-[#555] leading-relaxed mb-5">
                {isZh
                  ? '为年轻故事讲述者提供好莱坞水平的沉浸式电影制作体验。参与者与专业团队合作，在真实舞台和礼堂接受训练，并在洛杉矶多个地点进行实地拍摄。'
                  : 'A Hollywood-level immersive filmmaking experience for young storytellers. Participants work with professional teams, train in real stages and auditoriums, and shoot on location at multiple LA sites.'}
              </p>

              <div className="mb-6">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#0B0B0C] mb-3">{isZh ? '学习内容' : 'What You\'ll Learn'}</p>
                <div className="space-y-2">
                  {(isZh ? [
                    '专业表演与表现力训练',
                    '导演与故事讲述基础',
                    '剧本与剧本开发',
                    '幕后技术：摄影、灯光、录音',
                    '后期制作基础：动画与音效设计',
                    '从概念到最终成片的完整电影制作流程',
                  ] : [
                    'Professional acting and performance training',
                    'Directing and storytelling fundamentals',
                    'Screenwriting and script development',
                    'Behind-the-scenes: cinematography, lighting, sound',
                    'Post-production basics: animation and sound design',
                    'Complete filmmaking process from concept to final cut',
                  ]).map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#444]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#b09241] transition-all">
                {isZh ? '立即报名' : 'Register Now'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-56">
                <img
                  src="/images/ChatGPT_Image_2026年5月6日_18_12_27.png"
                  alt="Youth filmmakers around campfire at summer camp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#0B0B0C] rounded-2xl p-6 text-white">
                <p className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-widest mb-3">{isZh ? '夏令营亮点' : 'Camp Highlights'}</p>
                <div className="space-y-2.5">
                  {(isZh ? [
                    '与洛杉矶多地专业团队实地拍摄',
                    '专业舞台和礼堂训练',
                    '由好莱坞在职专业人士主导的工作坊',
                    '结营电影放映仪式',
                    'GFA结业证书',
                  ] : [
                    'On-location shoots with professional teams across LA',
                    'Professional stage and auditorium training',
                    'Workshops led by working Hollywood professionals',
                    'End-of-camp film screening ceremony',
                    'GFA Certificate of Completion',
                  ]).map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Star className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM 3: Quarterly Short Film ── */}
      <section className="py-20 bg-[#F9F7F4] border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Youth short film production"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{isZh ? '春季开放报名' : 'Spring Enrollment Open'}</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '项目三' : 'Program 3'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C] leading-tight mb-5">
                {isZh ? '青少年短片季度制作' : 'Youth Quarterly Short Film Production'}
              </h2>
              <p className="text-[#555] leading-relaxed mb-6">
                {isZh
                  ? '每个季度，GFA制作一部完全由青少年主导的专业短片。儿童和青少年在好莱坞职业人士的指导下担任每个关键角色——演员、导演、编剧和制片人。所有完成的影片提交国际电影节参赛。'
                  : 'Each quarter, GFA produces a professionally made short film led entirely by youth. Children and teens take on every key role — actors, directors, writers, and producers — under the guidance of Hollywood professionals. All completed films are submitted to international festivals.'}
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { step: '01', title: isZh ? '公开招募' : 'Open Recruitment', desc: isZh ? '向8-22岁青少年开放报名，招募演员、导演助理、编剧、摄影助理等岗位。' : 'Open to ages 8–22, recruiting actors, director assistants, writers, camera assistants and more.' },
                  { step: '02', title: isZh ? '剧本与前期开发' : 'Script & Pre-Production', desc: isZh ? '由GFA专业导师促成青少年参与者共同开发故事概念和剧本，所有创意决策由年轻人主导。' : 'GFA mentors guide youth participants to develop story concepts and scripts — all creative decisions led by the young creators.' },
                  { step: '03', title: isZh ? '拍摄' : 'Production', desc: isZh ? '在好莱坞专业电影团队支持下，青少年在真实片场完成拍摄，专业人士提供技术支持。' : 'Youth complete the shoot on a real film set with Hollywood professional support for technical aspects.' },
                  { step: '04', title: isZh ? '后期与发布' : 'Post & Release', desc: isZh ? '青少年参与后期制作，完成的影片以GFA名义提交国际青少年电影节参赛。' : 'Youth participate in post-production, and finished films are submitted to international youth film festivals under GFA.' },
                ].map(s => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C] text-white text-[12px] font-bold flex items-center justify-center shrink-0">{s.step}</div>
                    <div>
                      <div className="text-sm font-bold text-[#0B0B0C] mb-0.5">{s.title}</div>
                      <div className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-[#C9A84C]/30 rounded-xl p-4">
                <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-widest mb-2">{isZh ? '报名要求' : 'Requirements'}</p>
                <p className="text-sm text-[#444]">{isZh ? '年龄：8–22岁 · 无需任何先前经验 · 全程由专业团队陪伴指导' : 'Ages 8–22 · No prior experience required · Full professional team guidance throughout'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM 4: Graduate/Emerging Director Support ── */}
      <section className="py-20 bg-white border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '项目四' : 'Program 4'}</div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                {isZh ? '夏季开放' : 'Summer Open'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C] leading-tight mb-5">
                {isZh ? '新晋导演与毕业生支持计划' : 'Emerging Director & Graduate Support'}
              </h2>
              <p className="text-[#555] leading-relaxed mb-6">
                {isZh
                  ? 'GFA致力于帮助电影专业毕业生和新晋导演跨越从学校到行业的鸿沟。我们提供资源和支持，帮助他们完成第一部作品、专业组建团队、进入好莱坞职业体系。'
                  : 'GFA is dedicated to helping film graduates and emerging directors bridge the gap from school to industry. We provide resources and support to help them complete their first work, build professional teams, and enter the Hollywood career system.'}
              </p>

              <div className="space-y-4 mb-7">
                {[
                  { icon: <Film className="w-4 h-4" />, title: isZh ? '创作支持——帮助完成作品' : 'Creative Support', desc: isZh ? '为有创作计划的新晋导演提供专业设备使用、现场协调和制作资源，帮助将剧本变成真实的完整作品。' : 'Professional equipment, on-set coordination and production resources for directors with creative plans — turning scripts into completed works.' },
                  { icon: <Users className="w-4 h-4" />, title: isZh ? '团队搭建协助' : 'Team Building', desc: isZh ? '协助新晋导演搭建制作团队，通过GFA行业网络将新兴人才相互连接。' : 'Helping emerging directors build production teams and connecting new talents through GFA\'s industry network.' },
                  { icon: <Star className="w-4 h-4" />, title: isZh ? '导师网络——一对一指导' : 'Mentorship Network', desc: isZh ? '将新晋电影人与好莱坞在职专业人士匹配，提供一对一创作指导、行业经验分享和职业建议。' : 'Matching emerging filmmakers with working Hollywood professionals for 1-on-1 creative guidance, industry experience sharing and career advice.' },
                  { icon: <Clapperboard className="w-4 h-4" />, title: isZh ? '发行渠道支持' : 'Distribution Support', desc: isZh ? '帮助完成作品进入发行渠道，包括国际电影节、流媒体平台对接、短片放映等。' : 'Helping completed works enter distribution channels including international festivals, streaming platforms, and short film screenings.' },
                  { icon: <Briefcase className="w-4 h-4" />, title: isZh ? '就业指导与推荐' : 'Career Guidance', desc: isZh ? '提供职业路径规划、简历优化、行业人脉对接，通过GFA合作机构网络协助推荐就业机会。' : 'Career path planning, resume optimization, industry networking, and job referrals through GFA\'s partner network.' },
                  { icon: <GraduationCap className="w-4 h-4" />, title: isZh ? '资金与资助信息' : 'Funding & Grants', desc: isZh ? '提供电影基金、政府文化资助、独立电影资助项目的申请指导，帮助获取创作所需启动资金。' : 'Application guidance for film grants, government cultural funding, and independent film grants to secure the startup funding you need.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-[#C9A84C] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0B0B0C] mb-0.5">{item.title}</div>
                      <div className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/filmmaker-support" className="inline-flex items-center gap-2 bg-[#0B0B0C] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#C9A84C] transition-all">
                {isZh ? '申请支持' : 'Apply for Support'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Young filmmaker with camera"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F9F7F4] rounded-2xl p-6 border border-[#E6E7EA]">
                <p className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-widest mb-4">{isZh ? '适合对象' : 'Who This Is For'}</p>
                <div className="space-y-2.5">
                  {(isZh ? [
                    '电影专业应届及近三年毕业生',
                    '有完整构想但缺乏资源的新晋导演',
                    '希望完成第一部独立作品的创作者',
                    '寻求行业入口和就业机会的电影人',
                  ] : [
                    'Recent film graduates and those within 3 years of graduation',
                    'Emerging directors with a complete vision but limited resources',
                    'Creators who want to complete their first independent work',
                    'Filmmakers seeking industry entry points and employment opportunities',
                  ]).map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#444]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0B0C] text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-5">
            {isZh ? <>准备好了吗？<br /><span className="text-[#C9A84C]">让我们一起开始。</span></> : <>Ready to Begin?<br /><span className="text-[#C9A84C]">We're Here for You.</span></>}
          </h2>
          <p className="text-white/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            {isZh ? '无论你是一个充满好奇的孩子、有梦想的青少年，还是渴望突破的新晋电影人，GFA都为你准备好了。' : 'Whether you\'re a curious child, a dream-filled teenager, or an aspiring filmmaker ready to break through — GFA is here for you.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C9A84C] text-black px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#d4b055] transition-all">
              {isZh ? '联系我们报名' : 'Contact Us to Enroll'} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/donate" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/5 transition-colors">
              <Heart className="w-4 h-4 fill-current text-[#C9A84C]" />
              {isZh ? '捐款支持青少年项目' : 'Donate to Youth Programs'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouthPrograms;
