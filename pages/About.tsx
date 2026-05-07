import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Quote, Heart, Users, Target, ArrowRight, CircleCheck as CheckCircle2, Globe, HandHeart, Film, Award, Lightbulb, Star } from 'lucide-react';

const About: React.FC = () => {
  const { locale } = useLocale();
  const isZh = locale === Locale.ZH;

  return (
    <div className="font-sans pb-0 pt-16">
      <SEO title="About | Global Film Alliance" />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end justify-start overflow-hidden bg-gfa-inkBlack">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Youth filmmakers at work"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gfa-inkBlack via-gfa-inkBlack/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 px-4 pb-20 max-w-3xl">
          <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isZh ? '关于我们' : 'About GFA'}</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight mb-6">
            {isZh ? <>我们是谁，<br /><span className="text-[#C9A84C]">为何存在</span></> : <>Who We Are &<br /><span className="text-[#C9A84C]">Why We Exist</span></>}
          </h1>
          <p className="text-lg text-white/70 font-light max-w-2xl">
            {isZh
              ? '一家非营利机构，源于一个信念：才华不应该被关闭的门所阻挡。'
              : 'A nonprofit born from a belief: talent should never be stopped by a closed door.'}
          </p>
        </div>
      </section>

      {/* ── ABOUT GFA ── */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://i.ibb.co/prw8Q6Rh/converted-image.jpg" alt="GFA official" className="w-full max-w-sm mx-auto lg:mx-0 rounded-2xl shadow-xl" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isZh ? '机构介绍' : 'Organization Overview'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack leading-tight mb-6">
                {isZh ? '全球电影联盟' : 'Global Film Alliance, Inc.'}
              </h2>
              <p className="text-gfa-slate font-light leading-relaxed mb-5 text-base">
                {isZh
                  ? '全球电影联盟（GFA）是总部位于加利福尼亚州洛杉矶的501(c)(3)认证非营利组织。我们消除致力于电影行业的系统性壁垒，为每一位有才华的电影人创造平等的机会，无论其背景、人脉或经济状况如何。'
                  : 'Global Film Alliance (GFA) is a 501(c)(3) nonprofit organization headquartered in Los Angeles, California. We are dedicated to eliminating the systemic barriers in the film industry and creating equal opportunities for every talented filmmaker, regardless of background, connections, or financial resources.'}
              </p>
              <p className="text-gfa-slate font-light leading-relaxed mb-8 text-base">
                {isZh
                  ? '我们整合好莱坞专业制作团队、国际电影节资源和全球影视产业网络，构建从人才发现、培训到制作和发行的完整路径。'
                  : 'We integrate Hollywood professional production teams, international film festival resources, and the global film industry network to build a complete pathway from talent discovery and training to production and distribution.'}
              </p>
              <div className="space-y-3">
                {(isZh ? [
                  '501(c)(3)认证非营利机构 · EIN: 33-4817276',
                  '总部：加利福尼亚州洛杉矶',
                  'Blackmagic Design设备合作伙伴',
                  'Amazon Prime & Tubi发行渠道合作',
                ] : [
                  '501(c)(3) Certified Nonprofit · EIN: 33-4817276',
                  'Headquartered in Los Angeles, California',
                  'Blackmagic Design Equipment Partner',
                  'Amazon Prime & Tubi Distribution Access',
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

      {/* ── FOUNDER STATEMENT ── */}
      <section className="py-24 bg-[#F9F7F4]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-6">{isZh ? '主席寄语' : "Chairman's Message"}</div>
              <Quote className="w-10 h-10 text-[#C9A84C]/30 mb-4" />
              <div className="space-y-5 text-lg md:text-xl font-serif text-gfa-inkBlack leading-relaxed italic mb-10 text-gfa-slate">
                {isZh ? (
                  <>
                    <p>"在影视行业工作多年，我目睹了太多有才华的电影人因为看不见的门槛而离开这个行业——不是因为他们不够好，而是因为他们没有摄影机，没有推开那扇门的人，没有愿意相信他们的平台。"</p>
                    <p>"GFA的诞生源于一个简单的信念：才华无处不在，但机会从来不是均等分配的。我们相信，电影行业的壁垒不应该由才华之外的任何因素决定——不是家庭背景，不是人脉关系，也不是资金多寡。"</p>
                    <p>"真正的改变需要从源头开始。从孩子第一次拿起摄影机的那一刻，我们就在他们身边——从教室到片场，从梦想到职业。"</p>
                  </>
                ) : (
                  <>
                    <p>"Working in the film industry for years, I've seen too many talented filmmakers leave because of invisible barriers — not because they weren't good enough, but because they didn't have a camera, didn't have someone to open that door, didn't have a platform willing to believe in them."</p>
                    <p>"GFA was born from a simple belief: talent is everywhere, but opportunity has never been equally distributed. The barriers in film should not be determined by anything beyond talent — not family background, not connections, not financial resources."</p>
                    <p>"Real change starts from the source. From the moment a child first picks up a camera, we are by their side — from the classroom to the set, from a dream to a career."</p>
                  </>
                )}
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gfa-border">
                <img src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Jack Liu" className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A84C]" />
                <div>
                  <p className="font-bold text-gfa-inkBlack font-serif text-lg">刘宗基 / Jack Liu</p>
                  <p className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isZh ? '全球电影联盟主席' : 'Chairman, Global Film Alliance'}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Youth filmmaking" className="w-full h-72 object-cover rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Young director on set" className="w-full h-44 object-cover rounded-2xl" />
                <img src="https://images.pexels.com/photos/8363831/pexels-photo-8363831.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Children film production" className="w-full h-44 object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/8 transition-colors">
              <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4">{isZh ? '使命' : 'Mission'}</h3>
              <p className="text-white/70 font-light leading-relaxed">
                {isZh
                  ? '通过电影教育赋能青少年，支持新晋导演和电影专业毕业生建立可持续的专业电影职业生涯。消除电影行业中系统性的壁垒，为每一位有才华的电影人创造平等的机会。'
                  : 'Empowering youth through film education and supporting emerging directors and film graduates to build sustainable professional careers in cinema. Eliminating systemic barriers in the industry to create equal opportunities for every talented filmmaker.'}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/8 transition-colors">
              <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4">{isZh ? '愿景' : 'Vision'}</h3>
              <p className="text-white/70 font-light leading-relaxed">
                {isZh
                  ? '成为全球公认的电影教育与行业支持平台，通过公平、平等和卓越构建明天的创意人才队伍。连接全球卓越电影，守护电影的未来。'
                  : 'To become a globally recognized platform for film education and industry support, building tomorrow\'s creative talent pipeline through fairness, equality, and excellence. Connecting global film excellence, safeguarding the future of cinema.'}
              </p>
            </div>
          </div>

          {/* Four Pillars */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">{isZh ? '四大核心方向' : 'Four Core Directions'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Users className="w-5 h-5" />, title: isZh ? '青少年电影教育' : 'Youth Film Education', desc: isZh ? '为儿童和青少年提供系统化专业电影培训' : 'Systematic professional film training for children and youth' },
              { icon: <Film className="w-5 h-5" />, title: isZh ? '社区文化推广' : 'Community Outreach', desc: isZh ? '在加州各地社区提供免费观影和文化项目' : 'Free screenings and cultural programs across California communities' },
              { icon: <Lightbulb className="w-5 h-5" />, title: isZh ? '新晋电影人支持' : 'Filmmaker Support', desc: isZh ? '为新导演和毕业生提供设备、导师、资金和发行支持' : 'Equipment, mentors, funding and distribution for new directors and graduates' },
              { icon: <Award className="w-5 h-5" />, title: isZh ? '金羽奖' : 'Golden Feather Awards', desc: isZh ? '年度电影荣誉奖，表彰儿童电影和新晋导演' : 'Annual film honors celebrating children\'s cinema and emerging directors' },
            ].map(val => (
              <div key={val.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-[#C9A84C]/20 rounded-lg flex items-center justify-center mb-4 text-[#C9A84C]">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold font-serif text-white mb-2">{val.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIX VALUES ── */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isZh ? '核心价值观' : 'Core Values'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">{isZh ? '指引我们前行的六大价值' : 'Six Values That Guide Us'}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {(isZh
              ? ['公平', '卓越', '创意', '社区', '支持', '影响力']
              : ['Fairness', 'Excellence', 'Creativity', 'Community', 'Support', 'Impact']
            ).map((val, i) => (
              <div key={val} className="bg-[#F9F7F4] rounded-2xl p-6 text-center border border-[#E6E7EA] hover:border-[#C9A84C]/40 hover:shadow-md transition-all">
                <div className="text-2xl font-bold font-serif text-[#C9A84C] mb-2">{String(i + 1).padStart(2, '0')}</div>
                <p className="text-sm font-bold text-gfa-inkBlack">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-24 bg-[#F9F7F4]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isZh ? '我们服务的人群' : 'Who We Serve'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">{isZh ? '我们为每一位电影人而存在' : 'We Exist for Every Filmmaker'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(isZh ? [
              { img: 'https://images.pexels.com/photos/8363831/pexels-photo-8363831.jpeg?auto=compress&cs=tinysrgb&w=400', title: '电影专业毕业生', desc: '来自USC、UCLA、Chapman等院校的应届毕业生，寻求进入行业的第一步。' },
              { img: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400', title: '新晋独立导演', desc: '有创作愿景但缺乏发行渠道和行业资源的独立创作者。' },
              { img: 'https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=400', title: '6-17岁青少年', desc: '通过夏令营、制作项目和比赛探索创作潜能的年轻人。' },
              { img: 'https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=400', title: '特殊需求儿童', desc: '自闭症、抑郁症等特殊需求儿童，通过电影艺术疗法找到疗愈。' },
            ] : [
              { img: 'https://images.pexels.com/photos/8363831/pexels-photo-8363831.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Film Graduates', desc: 'Recent graduates from USC, UCLA, Chapman seeking their industry breakthrough.' },
              { img: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Emerging Directors', desc: 'Independent creators with vision who lack distribution channels and industry resources.' },
              { img: 'https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Youth Ages 6–17', desc: 'Young people exploring creative potential through camps, production projects, and competitions.' },
              { img: 'https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Special Needs Youth', desc: 'Children with autism or depression finding healing through film arts therapy programs.' },
            ]).map(item => (
              <div key={item.title} className="group bg-white border border-[#E6E7EA] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#C9A84C]/30 transition-all">
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
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">{isZh ? '合作伙伴' : 'Our Partners'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack">{isZh ? '为共同目标而联合' : 'United by a Common Goal'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { name: 'Blackmagic Design', desc: isZh ? '专业设备合作伙伴，为GFA项目提供电影级摄影设备。' : 'Professional equipment partner providing cinema-grade camera gear for GFA projects.', logo: <span className="text-2xl font-bold italic tracking-tighter">Blackmagic Design</span> },
              { name: 'Harmony Gold', desc: isZh ? '内容合作伙伴，参与项目发行及青少年制作项目。' : 'Content partner collaborating on distribution and youth production programs.', logo: <span className="text-2xl font-serif">Harmony Gold</span> },
              { name: 'City of Pomona', desc: isZh ? '政府合作伙伴，支持GFA的社区服务和青少年倡议。' : 'Government partner proudly supporting GFA community outreach and youth initiatives.', logo: <span className="text-lg font-bold uppercase tracking-widest">City of Pomona</span> },
            ].map(p => (
              <div key={p.name} className="bg-[#F9F7F4] rounded-2xl p-8 text-center border border-[#E6E7EA] shadow-sm hover:shadow-md hover:border-[#C9A84C]/30 transition-all">
                <div className="h-12 flex items-center justify-center mb-5 text-gfa-inkBlack">{p.logo}</div>
                <p className="text-sm text-gfa-slate font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gfa-inkBlack rounded-2xl p-10 md:p-14 text-center text-white">
            <HandHeart className="w-10 h-10 text-[#C9A84C] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">{isZh ? '支持我们的使命' : 'Support Our Mission'}</h3>
            <p className="text-white/70 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              {isZh
                ? '您的捐款直接资助免费青少年电影教育、社区投影和新晋电影人扶持计划。GFA是501(c)(3)非营利机构，所有捐款均可税前抵扣。'
                : 'Your donation directly funds free youth film education, community screenings, and emerging filmmaker support. GFA is a 501(c)(3) nonprofit — all donations are tax-deductible.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="inline-flex items-center gap-2 bg-[#C9A84C] text-black px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-[#d4b055] transition-all">
                <Heart className="w-4 h-4 fill-current" /> {isZh ? '立即捐款' : 'Donate Now'}
              </Link>
              <Link to="/get-involved" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white/10 transition-all">
                {isZh ? '参与我们' : 'Get Involved'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
