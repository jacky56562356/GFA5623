import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Users, Presentation, Briefcase, ArrowRight, Building2, Heart, CircleCheck as CheckCircle2 } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const { locale } = useLocale();
  const isZh = locale === Locale.ZH;

  const [form, setForm] = useState({
    name: '', email: '', phone: '', skills: '',
    interest: '', availability: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/xpwzjvbp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'volunteer', ...form }),
      });
    } catch { /* silent */ }
    setSubmitted(true);
  };

  const interestOptions = isZh
    ? ['夏令营辅导员', '金羽奖活动支持', '社区放映协调', '行业导师', '数字营销', '摄影/录像', '其他']
    : ['Camp Counselor', 'Golden Feather Awards Support', 'Community Screening Coordinator', 'Industry Mentor', 'Digital Marketing', 'Photography/Video', 'Other'];

  return (
    <div className="font-sans pb-24 pt-16">
      <SEO title="Get Involved | Global Film Alliance" />

      {/* Hero */}
      <section className="bg-gfa-inkBlack text-white pt-20 pb-20 border-b border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
          <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-4">{isZh ? '参与我们' : 'Get Involved'}</div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            {isZh ? <>加入这项<br /><span className="text-[#C9A84C]">使命。</span></> : <>Join the<br /><span className="text-[#C9A84C]">Movement.</span></>}
          </h1>
          <p className="text-xl font-light text-white/70 max-w-2xl mx-auto font-serif">
            {isZh
              ? '培养一名电影人需要整个社区的力量。贡献你的时间、你的专业技能、或是你的热情。'
              : 'It takes a village to raise a filmmaker. Lend your time, your expertise, or your passion.'}
          </p>
        </div>
      </section>

      {/* Ways to help */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: isZh ? '成为志愿者' : 'Volunteer',
                desc: isZh ? '在夏令营中提供帮助，协助举办金羽奖，或在社区放映中提供支持。非常适合寻找社区服务时数的高中大学生和热心人士。' : 'Help at summer camps, assist at Golden Feather Awards, or support community screenings. Perfect for students seeking community service hours.',
                cta: isZh ? '申请成为志愿者' : 'Apply to Volunteer',
                anchor: 'volunteer-form',
              },
              {
                icon: <Presentation className="w-8 h-8" />,
                title: isZh ? '成为导师' : 'Become a Mentor',
                desc: isZh ? '您是已经在好莱坞立足的专业人士吗？通过指导1-2名新晋电影人来回馈行业。审阅剧本、一起喝杯咖啡，或让他们在片场观摩。' : 'Are you an established Hollywood professional? Give back by mentoring 1-2 emerging filmmakers. Review scripts, meet for coffee, or let them shadow you.',
                cta: isZh ? '加入导师网络' : 'Join Mentor Network',
                anchor: 'volunteer-form',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: isZh ? '机构合作' : 'Partner With Us',
                desc: isZh ? '学校、制片公司、电影节、政府机构和媒体组织欢迎与GFA探索战略合作，共同推动电影行业的公平与发展。' : 'Schools, production companies, film festivals, government agencies and media organizations are welcome to explore strategic partnerships with GFA.',
                cta: isZh ? '联系合作' : 'Explore Partnership',
                anchor: 'volunteer-form',
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: isZh ? '工作与实习' : 'Careers & Internships',
                desc: isZh ? '加入GFA核心团队。我们不定期招聘夏令营辅导员、数字营销人员和项目协调员，维持非营利组织的高效运转。' : 'Join the GFA core team. We occasionally hire camp counselors, digital marketers, and program coordinators to keep our nonprofit running smoothly.',
                cta: isZh ? '查看职位' : 'View Openings',
                anchor: 'volunteer-form',
              },
            ].map(card => (
              <div key={card.title} className="bg-[#F9F7F4] rounded-2xl p-8 border border-[#E6E7EA] hover:border-[#C9A84C]/40 hover:shadow-md transition-all group flex flex-col">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-[#C9A84C] mb-5 group-hover:bg-[#C9A84C] group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B0B0C] mb-3">{card.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 flex-grow">{card.desc}</p>
                <a href={`#${card.anchor}`} className="inline-flex items-center gap-2 text-[#0B0B0C] font-bold text-xs uppercase tracking-widest hover:text-[#C9A84C] transition-colors">
                  {card.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate sponsorship tiers */}
      <section className="py-20 bg-[#0B0B0C] text-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '企业赞助' : 'Corporate Sponsorship'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">{isZh ? '四级企业赞助' : 'Four Sponsorship Tiers'}</h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
              {isZh ? '您的赞助直接资助免费青少年电影教育和新晋电影人扶持项目，同时获得品牌曝光和影响力。' : 'Your sponsorship directly funds free youth film education and filmmaker support programs, while gaining brand visibility and impact.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { level: isZh ? '铜级' : 'Bronze', amount: '$1,000+', color: '#CD7F32', benefits: isZh ? ['网站Logo展示', '感谢信', '活动邀请'] : ['Logo on website', 'Thank-you letter', 'Event invitation'] },
              { level: isZh ? '银级' : 'Silver', amount: '$5,000+', color: '#C0C0C0', benefits: isZh ? ['所有铜级权益', '年度报告致谢', '社媒宣传', 'GFA活动VIP席'] : ['All Bronze benefits', 'Annual report credit', 'Social media feature', 'VIP event seats'] },
              { level: isZh ? '金级' : 'Gold', amount: '$10,000+', color: '#C9A84C', benefits: isZh ? ['所有银级权益', '颁奖典礼主赞助', '联名宣传', '独家企业参观'] : ['All Silver benefits', 'Awards ceremony sponsor', 'Co-branded content', 'Exclusive site visit'] },
              { level: isZh ? '铂金级' : 'Platinum', amount: '$25,000+', color: '#E5E4E2', benefits: isZh ? ['所有金级权益', '命名奖学金', '董事会席位机会', '优先合作权'] : ['All Gold benefits', 'Named scholarship', 'Board seat opportunity', 'Priority partnership'] },
            ].map(tier => (
              <div key={tier.level} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
                <div className="text-2xl font-bold font-serif mb-1" style={{ color: tier.color }}>{tier.level}</div>
                <div className="text-lg font-bold text-white mb-5">{tier.amount}</div>
                <div className="space-y-2">
                  {tier.benefits.map(b => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span className="text-xs text-white/60">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="py-20 bg-[#F9F7F4] border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '志愿者申请' : 'Volunteer Application'}</div>
            <h2 className="text-3xl font-bold font-serif text-[#0B0B0C]">{isZh ? '加入我们的团队' : 'Join Our Team'}</h2>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#E6E7EA]">
              <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-serif text-[#0B0B0C] mb-2">{isZh ? '申请已收到！' : 'Application Received!'}</h3>
              <p className="text-gray-500 text-sm">{isZh ? '感谢您的热情！我们的团队将在5个工作日内与您联系。' : 'Thank you for your passion! Our team will be in touch within 5 business days.'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#E6E7EA] shadow-sm space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '姓名 *' : 'Name *'}</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '邮箱 *' : 'Email *'}</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '电话' : 'Phone'}</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '兴趣方向 *' : 'Area of Interest *'}</label>
                  <select name="interest" value={form.interest} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors bg-white">
                    <option value="">{isZh ? '请选择' : 'Please select'}</option>
                    {interestOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '技能与经验' : 'Skills & Experience'}</label>
                <input name="skills" value={form.skills} onChange={handleChange} className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder={isZh ? '相关技能或经验简述' : 'Brief description of relevant skills or experience'} />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '可用时间' : 'Availability'}</label>
                <input name="availability" value={form.availability} onChange={handleChange} className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder={isZh ? '例：周末、每周X小时' : 'e.g. Weekends, X hours per week'} />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '留言' : 'Message'}</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" placeholder={isZh ? '告诉我们您为什么想加入GFA...' : 'Tell us why you want to join GFA...'} />
              </div>
              <button type="submit" className="w-full bg-[#C9A84C] text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-[#b09241] transition-all hover:-translate-y-px">
                {isZh ? '提交申请' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
