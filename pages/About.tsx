import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Quote, Heart, Users, Target, ArrowRight, CircleCheck as CheckCircle2, Globe, HandHeart } from 'lucide-react';

const About: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale !== Locale.ZH;

  return (
    <div className="font-sans pb-0">
      <SEO title="About | Global Film Alliance" />

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex items-end justify-start overflow-hidden bg-gfa-inkBlack pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Filmmakers at work"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gfa-inkBlack via-gfa-inkBlack/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 px-4 pb-20 max-w-3xl">
          <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Our Story' : '我们的故事'}</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight mb-6">
            {isEn ? <>Who We Are &<br/><span className="text-[#C9A84C]">Why We Exist</span></> : <>我们是谁，<br/><span className="text-[#C9A84C]">我们为什么存在</span></>}
          </h1>
          <p className="text-lg text-white/70 font-light max-w-2xl">
            {isEn
              ? 'A nonprofit born from a belief: talent should never be stopped by a closed door.'
              : '一家非营利机构，源于一个信念：才华不应该被关闭的门所阻挡。'}
          </p>
        </div>
      </section>

      {/* ── FOUNDER STATEMENT ── */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-6">{isEn ? "Founder's Message" : '创始人致辞'}</div>
              <Quote className="w-10 h-10 text-[#C9A84C]/30 mb-4" />
              <div className="space-y-5 text-lg md:text-xl font-serif text-gfa-inkBlack leading-relaxed italic mb-10 text-gfa-slate">
                {isEn ? (
                  <>
                    <p>"Working in the film industry for years, I've seen too many talented filmmakers leave because of invisible barriers — not because they weren't good enough, but because they didn't have a camera, didn't have someone to open that door, didn't have a platform willing to believe in them."</p>
                    <p>"GFA was born from a simple belief: talent is everywhere, but opportunity has never been equally distributed. We want to be the place that helps them push that door open — providing the equipment, mentors, and resources they need to truly enter this industry."</p>
                    <p>"Real change starts from the source. From the moment a child first picks up a camera, we are by their side — from the classroom to the set, from a dream to a career."</p>
                  </>
                ) : (
                  <>
                    <p>"在影视行业工作多年，我目睹了太多有才华的电影人因为看不见的门槛而离开这个行业——不是因为他们不够好，而是因为他们没有摄影机，没有推开那扇门的人，没有愿意相信他们的平台。"</p>
                    <p>"GFA的诞生源于一个简单的信念：才华无处不在，但机会从来不是均等分配的。我们要成为帮他们推开门的地方——提供他们需要的设备、导师和资源。"</p>
                    <p>"真正的改变需要从源头开始。从孩子第一次拿起摄影机的那一刻，我们就在他们身边——从教室到片场，从梦想到职业。"</p>
                  </>
                )}
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gfa-border">
                <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Jack Liu" className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A84C]" />
                <div>
                  <p className="font-bold text-gfa-inkBlack font-serif text-lg">Jack Liu</p>
                  <p className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isEn ? 'Founder & Executive Director' : '创始人 & 执行总监'}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Youth filmmaking" className="w-full h-72 object-cover rounded-3xl" />
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Director on set" className="w-full h-44 object-cover rounded-2xl" />
                <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Production team" className="w-full h-44 object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT GFA ── */}
      <section className="py-24 bg-[#F9F7F4]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://i.ibb.co/prw8Q6Rh/converted-image.jpg" alt="GFA official" className="w-full max-w-sm mx-auto lg:mx-0 rounded-3xl shadow-xl" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'About GFA' : '关于GFA'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack leading-tight mb-6">
                {isEn ? 'Global Film Alliance, Inc.' : '全球电影联盟'}
              </h2>
              <p className="text-gfa-slate font-light leading-relaxed mb-5 text-base">
                {isEn
                  ? 'Global Film Alliance (GFA) is a 501(c)(3) nonprofit organization headquartered in Los Angeles, California. We integrate Hollywood professional production teams, international film festival resources, and the global film industry network to establish a complete pathway from talent discovery and training to production and distribution.'
                  : '全球电影联盟（GFA）是一家总部位于加利福尼亚州洛杉矶的501(c)(3)认证非营利组织。我们整合好莱坞专业制作团队、国际电影节资源和全球影视产业网络，构建从人才发现、培训到制作和发行的完整路径。'}
              </p>
              <p className="text-gfa-slate font-light leading-relaxed mb-8 text-base">
                {isEn
                  ? 'Our work spans two core directions: providing career support for film graduates and emerging directors, and nurturing the next generation through youth film education.'
                  : '我们的工作覆盖两个核心方向：为电影毕业生和新晋导演提供就业扶持，以及通过青少年影视教育培养下一代创作者。'}
              </p>
              <div className="space-y-3">
                {(isEn ? [
                  '501(c)(3) Certified Nonprofit · EIN: 33-4817276',
                  'Headquartered in City of Industry, CA 91748',
                  'Blackmagic Design Equipment Partner',
                  'Amazon Prime & Tubi Distribution Access',
                ] : [
                  '501(c)(3)认证非营利机构 · EIN: 33-4817276',
                  '总部：加利福尼亚州工业市',
                  'Blackmagic Design设备合作伙伴',
                  'Amazon Prime & Tubi发行渠道',
                ]).map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    <span className="text-sm text-gfa-inkBlack font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-colors">
              <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4">{isEn ? 'Our Mission' : '使命'}</h3>
              <p className="text-white/70 font-light leading-relaxed">
                {isEn
                  ? 'To dismantle the systemic barriers preventing talented individuals from building careers in film — providing graduates, emerging directors, and youth from all backgrounds with the equipment, mentorship, distribution access, and funding support they need.'
                  : '消除电影行业中系统性的就业壁垒——为来自各种背景的毕业生、新晋导演和青少年提供设备、导师指导、发行渠道和资金支持。'}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-colors">
              <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4">{isEn ? 'Our Vision' : '愿景'}</h3>
              <p className="text-white/70 font-light leading-relaxed">
                {isEn
                  ? 'A film industry where background, income, and connections no longer determine who gets to tell stories — where every filmmaker with talent and drive has a real path forward, from first frame to feature film.'
                  : '一个背景、收入和人脉不再决定谁能讲述故事的电影行业——每一个有才华和驱动力的电影人都有一条真实的前进道路，从第一帧到长片。'}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">{isEn ? 'Our Core Values' : '核心价值观'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(isEn ? [
              { icon: <Target className="w-6 h-6" />, title: 'Access', sub: 'Open Every Door', desc: 'Talent should never be constrained by resources. Every creator deserves access to the support they need, regardless of background or income.' },
              { icon: <Users className="w-6 h-6" />, title: 'Community', sub: 'Rooted & Diverse', desc: 'Rooted in Los Angeles, we serve filmmakers from diverse cultural backgrounds, using film as a bridge between communities.' },
              { icon: <Heart className="w-6 h-6" />, title: 'Impact', sub: 'Real Outcomes', desc: 'We measure success not by events hosted, but by careers launched, barriers broken, and lives genuinely changed.' },
            ] : [
              { icon: <Target className="w-6 h-6" />, title: '可及性', sub: '打开每一扇门', desc: '才华不应受资源限制。无论背景、收入或人脉，每位有梦想的创作者都应得到所需支持。' },
              { icon: <Users className="w-6 h-6" />, title: '社区', sub: '扎根社区，服务多元', desc: '我们深植洛杉矶，服务来自多元文化背景的电影人，用电影连接不同社区。' },
              { icon: <Heart className="w-6 h-6" />, title: '影响力', sub: '真实成果', desc: '我们不以举办活动数量衡量成功，而以真正帮助多少人入行、改变多少孩子的生命轨迹为标准。' },
            ]).map(val => (
              <div key={val.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center mx-auto mb-5 text-[#C9A84C]">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-white mb-1">{val.title}</h3>
                <p className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-4">{val.sub}</p>
                <p className="text-white/60 text-sm font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Our Community' : '我们的社区'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">{isEn ? 'Who We Serve' : '我们服务的人群'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(isEn ? [
              { img: 'https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Film Graduates', desc: 'Recent graduates from USC, UCLA, Chapman, and other programs seeking their industry break.' },
              { img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Emerging Directors', desc: 'Independent creators with vision who lack distribution channels and industry resources.' },
              { img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Youth Ages 6–17', desc: 'Young people exploring creative potential through camps, production projects, and competitions.' },
              { img: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Special Needs Youth', desc: 'Children with autism, depression, or other special needs finding healing through film arts therapy.' },
            ] : [
              { img: 'https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=400', title: '电影专业毕业生', desc: '来自USC、UCLA、Chapman等院校的应届毕业生，寻求进入行业的第一步。' },
              { img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400', title: '新晋独立导演', desc: '有创作愿景但缺乏发行渠道和行业资源的独立创作者。' },
              { img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400', title: '6-17岁青少年', desc: '通过夏令营、制作项目和比赛探索创作潜能的年轻人。' },
              { img: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=400', title: '特殊需求儿童', desc: '自闭症、抑郁症等特殊需求儿童，通过电影艺术疗法找到疗愈。' },
            ]).map(item => (
              <div key={item.title} className="group bg-white border border-gfa-border rounded-3xl overflow-hidden hover:shadow-lg hover:border-[#C9A84C]/30 transition-all">
                <div className="h-44 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold font-serif text-gfa-inkBlack mb-2">{item.title}</h3>
                  <p className="text-sm text-gfa-slate font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-24 bg-[#F9F7F4]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isEn ? 'Our Partners' : '合作伙伴'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">{isEn ? 'United by a Common Goal' : '为共同目标而联合'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { name: 'Blackmagic Design', desc: isEn ? 'Professional equipment partner providing cinema-grade camera gear for GFA projects.' : '专业设备合作伙伴，为GFA项目提供电影级摄影设备。', logo: <span className="text-2xl font-bold italic tracking-tighter">Blackmagic Design</span> },
              { name: 'Harmony Gold', desc: isEn ? 'Content partner collaborating on distribution and youth production programs.' : '内容合作伙伴，参与项目发行及青少年制作项目。', logo: <span className="text-2xl font-serif">Harmony Gold</span> },
              { name: 'City of Pomona', desc: isEn ? 'Government partner proudly supporting GFA\'s local community outreach and youth initiatives.' : '政府合作伙伴，支持GFA的社区服务和青少年倡议。', logo: <span className="text-lg font-bold uppercase tracking-widest">City of Pomona</span> },
            ].map(p => (
              <div key={p.name} className="bg-white rounded-2xl p-8 text-center border border-gfa-border shadow-sm hover:shadow-md hover:border-[#C9A84C]/30 transition-all">
                <div className="h-12 flex items-center justify-center mb-5 text-gfa-inkBlack">{p.logo}</div>
                <p className="text-sm text-gfa-slate font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gfa-inkBlack rounded-3xl p-10 md:p-14 text-center text-white">
            <HandHeart className="w-10 h-10 text-[#C9A84C] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">{isEn ? 'Support Our Mission' : '支持我们的使命'}</h3>
            <p className="text-white/70 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              {isEn
                ? 'Your donation directly funds free equipment access, scholarships, and mentorships for filmmakers who need it most. Every dollar creates opportunity.'
                : '您的捐款直接资助设备使用、奖学金和导师计划，为最需要帮助的电影人创造机会。每一分钱都创造可能。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="inline-flex items-center gap-2 bg-[#C9A84C] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#d4b055] transition-all">
                <Heart className="w-4 h-4 fill-current" /> {isEn ? 'Donate Now' : '立即捐款'}
              </Link>
              <Link to="/get-involved" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                {isEn ? 'Get Involved' : '参与我们'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
