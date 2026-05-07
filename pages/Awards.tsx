import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Trophy, Star, ArrowRight, Heart, Calendar, MapPin, Film, Users, CircleCheck as CheckCircle2, Award } from 'lucide-react';

const CATEGORIES_EN = [
  'Best Children\'s Film',
  'Best Emerging Director',
  'Best Student Film',
  'Best Independent Short',
  'Best Documentary',
  'Best Animation',
  'Best Young Actor/Actress',
  'Best Original Score',
  'Special Jury Award',
];

const CATEGORIES_ZH = [
  '最佳儿童电影奖',
  '最佳新晋导演奖',
  '最佳大学生作品奖',
  '最佳独立短片奖',
  '最佳纪录片奖',
  '最佳动画奖',
  '最佳青年演员奖',
  '最佳原创音乐奖',
  '评审特别奖',
];

const Awards: React.FC = () => {
  const { locale } = useLocale();
  const isZh = locale === Locale.ZH;

  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '',
    filmTitle: '', category: '', duration: '', year: '',
    language: '', synopsis: '', link: '', directorBio: '', agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/xpwzjvbp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const categories = isZh ? CATEGORIES_ZH : CATEGORIES_EN;

  return (
    <div className="font-sans pb-24 pt-16">
      <SEO title="Golden Feather Awards | Global Film Alliance" />

      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden bg-gfa-inkBlack">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7245486/pexels-photo-7245486.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Youth awards ceremony"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/40 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 px-4 pb-16 max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Trophy className="w-3.5 h-3.5" />
              {isZh ? '第二届 · 2026年10月 · 洛杉矶' : '2nd Edition · October 2026 · Los Angeles'}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-5 leading-tight">
              {isZh ? <>金羽奖<br /><span className="text-[#C9A84C]">第二届</span></> : <>Golden Feather<br /><span className="text-[#C9A84C]">Awards</span></>}
            </h1>
            <p className="text-lg text-white/70 font-light max-w-2xl">
              {isZh
                ? '表彰儿童电影创作、新晋导演成长，以及电影专业毕业生首部作品的年度电影荣誉奖项。'
                : 'Annual film honors celebrating children\'s cinema, emerging directors, and the debut works of film graduates.'}
            </p>
          </div>
        </div>
      </section>

      {/* Key Info Bar */}
      <div className="bg-[#0B0B0C] border-b border-white/10 py-4">
        <div className="container-gfa max-w-6xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6 text-[12px] font-bold uppercase tracking-widest text-white/60">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>{isZh ? '报名开始：2026年6月16日' : 'Registration Opens: June 16, 2026'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>{isZh ? '颁奖典礼：2026年10月' : 'Ceremony: October 2026'}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>{isZh ? '地点：洛杉矶，加利福尼亚州' : 'Location: Los Angeles, California'}</span>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-4">{isZh ? '关于金羽奖' : 'About the Awards'}</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C] leading-tight mb-6">
                {isZh ? '每一部诚挚的作品，都值得被看见' : 'Every Sincere Work Deserves to Be Seen'}
              </h2>
              <p className="text-[#555] leading-relaxed mb-5">
                {isZh
                  ? '金羽奖是全球电影联盟设立的年度电影荣誉奖项，旨在鼓励和支持儿童电影创作、新晋导演成长，以及电影专业毕业生的首部作品。'
                  : 'Golden Feather Awards is an annual film honor established by Global Film Alliance to encourage and support children\'s filmmaking, the growth of emerging directors, and the debut works of film graduates.'}
              </p>
              <p className="text-[#555] leading-relaxed mb-8">
                {isZh
                  ? '我们相信每一个诚挚的作品都值得被看见，每一个勇敢的创作者都值得被认可。金羽奖为独立电影和青少年电影中最有潜力的声音提供权威展示平台。'
                  : 'We believe every sincere work deserves to be seen, and every brave creator deserves recognition. Golden Feather Awards provides an authoritative platform for the most promising voices in independent and youth cinema.'}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: '9', label: isZh ? '奖项类别' : 'Award Categories' },
                  { num: '2nd', label: isZh ? '届次' : 'Edition' },
                  { num: 'Oct 2026', label: isZh ? '颁奖典礼' : 'Ceremony' },
                ].map(stat => (
                  <div key={stat.label} className="text-center bg-[#F9F7F4] rounded-xl p-4 border border-[#E6E7EA]">
                    <div className="text-2xl font-bold font-serif text-[#C9A84C]">{stat.num}</div>
                    <div className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Young filmmaker receiving award" className="w-full h-72 object-cover rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Children at film screening" className="w-full h-40 object-cover rounded-2xl" />
                <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Youth performing on stage" className="w-full h-40 object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[#F9F7F4] border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '九大奖项类别' : 'Nine Award Categories'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C]">
              {isZh ? '每一种电影语言，都有归宿' : 'A Category for Every Voice'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(isZh ? [
              { title: '最佳儿童电影奖', desc: '由18岁以下演员创作或主演的影片', icon: <Film className="w-5 h-5" /> },
              { title: '最佳新晋导演奖', desc: '首部或第二部作品，导演35岁以下', icon: <Star className="w-5 h-5" /> },
              { title: '最佳大学生作品奖', desc: '电影专业毕业三年内完成的作品', icon: <Award className="w-5 h-5" /> },
              { title: '最佳独立短片奖', desc: '任何独立制作短片，时长30分钟以内', icon: <Film className="w-5 h-5" /> },
              { title: '最佳纪录片奖', desc: '任何题材的短纪录片', icon: <Film className="w-5 h-5" /> },
              { title: '最佳动画奖', desc: '任何形式的动画短片', icon: <Star className="w-5 h-5" /> },
              { title: '最佳青年演员奖', desc: '18岁以下演员杰出表演', icon: <Users className="w-5 h-5" /> },
              { title: '最佳原创音乐奖', desc: '杰出原创电影配乐', icon: <Star className="w-5 h-5" /> },
              { title: '评审特别奖', desc: '评审团自由裁量的特别奖项', icon: <Trophy className="w-5 h-5" /> },
            ] : [
              { title: 'Best Children\'s Film', desc: 'Films created by or starring creators under 18', icon: <Film className="w-5 h-5" /> },
              { title: 'Best Emerging Director', desc: 'First or second feature, director under 35', icon: <Star className="w-5 h-5" /> },
              { title: 'Best Student Film', desc: 'Completed within 3 years of film school graduation', icon: <Award className="w-5 h-5" /> },
              { title: 'Best Independent Short', desc: 'Any independent short, up to 30 minutes', icon: <Film className="w-5 h-5" /> },
              { title: 'Best Documentary', desc: 'Short documentaries on any subject', icon: <Film className="w-5 h-5" /> },
              { title: 'Best Animation', desc: 'Any style or technique of animation', icon: <Star className="w-5 h-5" /> },
              { title: 'Best Young Actor/Actress', desc: 'Outstanding performance by a performer under 18', icon: <Users className="w-5 h-5" /> },
              { title: 'Best Original Score', desc: 'Outstanding original film music', icon: <Star className="w-5 h-5" /> },
              { title: 'Special Jury Award', desc: 'Special recognition at jury discretion', icon: <Trophy className="w-5 h-5" /> },
            ]).map(cat => (
              <div key={cat.title} className="bg-white rounded-2xl p-6 border border-[#E6E7EA] hover:border-[#C9A84C]/40 hover:shadow-md transition-all group">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-[#C9A84C] mb-4 group-hover:bg-[#C9A84C] group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-[15px] font-bold font-serif text-[#0B0B0C] mb-2">{cat.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Timeline */}
      <section className="py-20 bg-[#0B0B0C] text-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-4">{isZh ? '参赛资格' : 'Eligibility'}</div>
              <h2 className="text-2xl font-bold font-serif text-white mb-6">{isZh ? '谁可以参赛？' : 'Who Can Enter?'}</h2>
              <div className="space-y-3">
                {(isZh ? [
                  '儿童电影组：影片由18岁以下创作者制作或主演',
                  '新晋导演组：导演35岁以下，影片为首部或第二部作品',
                  '大学生组：导演须在过去三年内获得电影专业毕业证书',
                  '独立短片组：面向全球所有独立电影人，时长30分钟以内',
                  '纪录片组：面向全球所有独立纪录片制作人',
                  '动画组：接受所有动画风格和技术',
                  '所有影片须于2024年1月1日后完成',
                  '英语非对白影片须附英文字幕',
                ] : [
                  'Children\'s Film: made by or starring creators under 18',
                  'Emerging Director: director under 35, first or second feature',
                  'Student Film: director graduated from film school within past 3 years',
                  'Independent Short: open globally, up to 30 minutes',
                  'Documentary: open to all independent documentary filmmakers',
                  'Animation: all styles and techniques accepted',
                  'All films must be completed after January 1, 2024',
                  'Non-English films must include English subtitles',
                ]).map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-4">{isZh ? '赛事时间线' : 'Timeline'}</div>
              <h2 className="text-2xl font-bold font-serif text-white mb-6">{isZh ? '关键日期' : 'Key Dates'}</h2>
              <div className="space-y-4">
                {[
                  { date: isZh ? '2026年6月16日' : 'June 16, 2026', event: isZh ? '报名开始' : 'Registration Opens', active: true },
                  { date: isZh ? '2026年8月31日' : 'August 31, 2026', event: isZh ? '报名截止' : 'Submission Deadline', active: false },
                  { date: isZh ? '2026年9月' : 'September 2026', event: isZh ? '第一轮评审' : 'First Round Judging', active: false },
                  { date: isZh ? '2026年10月' : 'October 2026', event: isZh ? '终审评选' : 'Final Jury Selection', active: false },
                  { date: isZh ? '2026年10月底' : 'Late October 2026', event: isZh ? '颁奖典礼，洛杉矶' : 'Award Ceremony, Los Angeles', active: false },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-4 p-4 rounded-xl border transition-colors ${item.active ? 'bg-[#C9A84C]/15 border-[#C9A84C]/30' : 'bg-white/5 border-white/10'}`}>
                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${item.active ? 'bg-[#C9A84C]' : 'bg-white/30'}`}></div>
                    <div>
                      <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-widest mb-0.5">{item.date}</div>
                      <div className="text-sm font-semibold text-white">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jury */}
      <section className="py-20 bg-white border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '评审团' : 'Our Jury'}</div>
            <h2 className="text-3xl font-bold font-serif text-[#0B0B0C] mb-4">{isZh ? '我们的评审团' : 'Meet Our Jurors'}</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
              {isZh
                ? '金羽奖评审团由经验丰富的电影行业专业人士、教育工作者和文化领袖组成。成员名单将在报名截止前公布。'
                : 'The Golden Feather Awards jury is composed of experienced film industry professionals, educators, and cultural leaders. Members will be announced before the submission deadline.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: isZh ? '好莱坞电影导演' : 'Hollywood Director', img: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { role: isZh ? '电影节策展人' : 'Festival Programmer', img: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { role: isZh ? '电影教育专家' : 'Film Education Expert', img: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=400' },
            ].map((juror, i) => (
              <div key={i} className="bg-[#F9F7F4] rounded-2xl overflow-hidden border border-[#E6E7EA]">
                <div className="h-52 overflow-hidden">
                  <img src={juror.img} alt="Jury member" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <div className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-widest mb-1">{juror.role}</div>
                  <div className="text-sm text-gray-400">{isZh ? '评审成员将于提交截止前公布' : 'Name to be announced'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBMISSION FORM ── */}
      <section className="py-20 bg-[#F9F7F4] border-t border-[#E6E7EA]">
        <div className="container-gfa max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-3">{isZh ? '提交参赛作品' : 'Submit Your Film'}</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B0B0C] mb-4">
              {isZh ? '立即报名参赛' : 'Enter Now'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isZh ? '报名开放时间：2026年6月16日起' : 'Registration opens June 16, 2026'}
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#E6E7EA] shadow-sm">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold font-serif text-[#0B0B0C] mb-3">
                {isZh ? '提交成功！' : 'Submission Received!'}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {isZh
                  ? '感谢您的参赛申请！我们的团队将在评审开始前与您联系。祝您好运！'
                  : 'Thank you for your submission! Our team will be in touch before judging begins. Good luck!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#E6E7EA] shadow-sm space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '导演/电影人全名 *' : 'Director / Filmmaker Name *'}</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder={isZh ? '您的全名' : 'Your full name'} />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '电子邮件 *' : 'Email *'}</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '电话号码' : 'Phone Number'}</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="+1 (xxx) xxx-xxxx" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '所在国家 *' : 'Country *'}</label>
                  <input name="country" value={form.country} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder={isZh ? '国家' : 'Country'} />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '影片名称 *' : 'Film Title *'}</label>
                  <input name="filmTitle" value={form.filmTitle} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder={isZh ? '影片名称' : 'Film title'} />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '参赛类别 *' : 'Category *'}</label>
                  <select name="category" value={form.category} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors bg-white">
                    <option value="">{isZh ? '请选择类别' : 'Select a category'}</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '影片时长 *' : 'Film Duration *'}</label>
                  <input name="duration" value={form.duration} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder={isZh ? '例：12分钟' : 'e.g. 12 minutes'} />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '完成年份 *' : 'Completion Year *'}</label>
                  <input name="year" value={form.year} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="2024 / 2025 / 2026" />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '影片语言' : 'Film Language'}</label>
                <input name="language" value={form.language} onChange={handleChange} className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder={isZh ? '例：英语、中文、西班牙语' : 'e.g. English, Mandarin, Spanish'} />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '影片简介 * (最多500字)' : 'Film Synopsis * (max 500 words)'}</label>
                <textarea name="synopsis" value={form.synopsis} onChange={handleChange} required rows={4} className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" placeholder={isZh ? '请简要描述您的影片内容...' : 'Briefly describe your film...'} />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? 'Vimeo / YouTube 链接 *' : 'Vimeo / YouTube Link *'}</label>
                <input name="link" type="url" value={form.link} onChange={handleChange} required className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="https://vimeo.com/..." />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#0B0B0C] uppercase tracking-widest mb-2">{isZh ? '导演简介' : 'Director Bio'}</label>
                <textarea name="directorBio" value={form.directorBio} onChange={handleChange} rows={3} className="w-full border border-[#E6E7EA] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" placeholder={isZh ? '简短介绍您的背景和创作经历...' : 'Brief background and filmmaking experience...'} />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} required id="agree" className="mt-1 w-4 h-4 accent-[#C9A84C]" />
                <label htmlFor="agree" className="text-sm text-[#444] leading-relaxed cursor-pointer">
                  {isZh ? '我同意参赛条款，确认所提交的影片版权归属无误，并授权金羽奖用于展映和宣传目的。*' : 'I agree to the entry terms, confirm that the submitted film\'s copyright is clear, and authorize Golden Feather Awards to use it for screening and promotional purposes. *'}
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A84C] text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-[#b09241] transition-all hover:-translate-y-px shadow-sm"
              >
                {isZh ? '提交参赛申请' : 'Submit Entry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Awards;
