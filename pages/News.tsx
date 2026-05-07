import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight, Calendar, MapPin, Tag } from 'lucide-react';

type Category = 'all' | 'programs' | 'awards' | 'community' | 'media';

const News: React.FC = () => {
  const { locale } = useLocale();
  const isZh = locale === Locale.ZH;
  const [filter, setFilter] = useState<Category>('all');

  const newsItems = [
    {
      category: 'programs' as Category,
      date: isZh ? '2026年5月' : 'May 2026',
      title: isZh ? '好莱坞青少年电影夏令营2026正式开放报名' : 'Hollywood Youth Film Camp 2026 Now Open for Registration',
      desc: isZh ? 'GFA宣布2026年夏令营于6月15–30日在洛杉矶举办，现正接受报名。提供专业好莱坞级别的沉浸式电影制作体验，时长10天。' : 'GFA announces the 2026 Summer Camp running June 15–30 in Los Angeles is now accepting registrations. A 10-day Hollywood-level immersive filmmaking experience.',
      img: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      category: 'awards' as Category,
      date: isZh ? '2026年5月' : 'May 2026',
      title: isZh ? '第二届金羽奖报名将于6月16日正式开启' : 'Second Golden Feather Awards Opens Registration June 16',
      desc: isZh ? '第二届金羽奖将于2026年10月在洛杉矶举办颁奖典礼，设九大奖项类别，面向全球儿童电影、新晋导演和电影专业毕业生开放。' : 'The Second Golden Feather Awards will hold its ceremony in Los Angeles in October 2026, featuring nine award categories open to children\'s films, emerging directors, and film school graduates worldwide.',
      img: 'https://images.pexels.com/photos/7245486/pexels-photo-7245486.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      category: 'community' as Category,
      date: isZh ? '2026年4月' : 'April 2026',
      title: isZh ? '社区儿童电影放映计划进入加州第五个城市' : 'Community Screening Program Enters Fifth California City',
      desc: isZh ? 'GFA社区儿童电影放映计划持续扩张，为更多加州社区居民带来完全免费的儿童制作电影放映活动，现已进入第五个城市。' : 'GFA\'s Community Children\'s Film Screening Program continues to expand, bringing completely free screenings of children-made films to more California communities — now in its fifth city.',
      img: 'https://images.pexels.com/photos/8363831/pexels-photo-8363831.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      category: 'programs' as Category,
      date: isZh ? '2026年3月' : 'March 2026',
      title: isZh ? '2026全球青少年才艺大赛正式启动' : 'Global Youth Talent Competition 2026 Officially Launched',
      desc: isZh ? 'GFA宣布将于好莱坞杜比剧院举办核心赛事，首次将中美两地的才华青少年汇聚于同一舞台，报名现已开放。' : 'GFA announces its flagship event at the Dolby Theatre in Hollywood, for the first time uniting talented youth from the US and China on the same stage. Registration is now open.',
      img: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      category: 'media' as Category,
      date: isZh ? '2025年1月' : 'January 2025',
      title: isZh ? '学生短片《花园》成功上线Amazon Prime' : 'Student Short Film "Garden" Picked Up by Amazon Prime',
      desc: isZh ? '完全由GFA夏令营学员制作的获奖短片《花园》成功进入Amazon Prime发行，成为GFA青少年制作项目的重要里程碑。' : 'The award-winning short film "Garden," produced entirely by GFA summer camp participants, secures distribution on Amazon Prime — a milestone for GFA\'s youth production program.',
      img: 'https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      category: 'awards' as Category,
      date: isZh ? '2024年10月' : 'October 2024',
      title: isZh ? '首届金羽奖圆满举办，表彰18位杰出青年创作者' : 'First Golden Feather Awards Honors 18 Outstanding Young Creators',
      desc: isZh ? '首届金羽奖颁奖典礼在洛杉矶圆满举办，18位来自不同背景的青年电影人和表演者在这个不寻常的夜晚获得认可。' : 'The inaugural Golden Feather Awards ceremony was held successfully in Los Angeles, with 18 young filmmakers and performers from diverse backgrounds receiving recognition on an unforgettable night.',
      img: 'https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const filters: { key: Category; label: string; labelZh: string }[] = [
    { key: 'all', label: 'All', labelZh: '全部' },
    { key: 'programs', label: 'Programs', labelZh: '项目' },
    { key: 'awards', label: 'Awards', labelZh: '奖项' },
    { key: 'community', label: 'Community', labelZh: '社区' },
    { key: 'media', label: 'Media', labelZh: '媒体' },
  ];

  const filtered = filter === 'all' ? newsItems : newsItems.filter(n => n.category === filter);

  const upcomingEvents = [
    {
      title: isZh ? '好莱坞青少年电影夏令营2026' : 'Hollywood Youth Film Camp 2026',
      date: isZh ? '2026年6月15–30日' : 'June 15–30, 2026',
      location: isZh ? '洛杉矶，加利福尼亚州' : 'Los Angeles, California',
    },
    {
      title: isZh ? '第二届金羽奖报名开始' : '2nd Golden Feather Awards — Registration Opens',
      date: isZh ? '2026年6月16日' : 'June 16, 2026',
      location: isZh ? '线上报名' : 'Online Registration',
    },
    {
      title: isZh ? '第二届金羽奖颁奖典礼' : '2nd Golden Feather Awards Ceremony',
      date: isZh ? '2026年10月' : 'October 2026',
      location: isZh ? '洛杉矶，加利福尼亚州' : 'Los Angeles, California',
    },
  ];

  return (
    <div className="font-sans pb-24 pt-16">
      <SEO title="News & Events | Global Film Alliance" />

      {/* Hero */}
      <section className="bg-gfa-inkBlack text-white pt-20 pb-20 border-b border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
          <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-4">{isZh ? '新闻与活动' : 'News & Events'}</div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-5 leading-tight">
            {isZh ? <>新闻与<br /><span className="text-[#C9A84C]">活动</span></> : <>News &<br /><span className="text-[#C9A84C]">Events</span></>}
          </h1>
          <p className="text-white/60 font-light text-lg max-w-xl mx-auto">
            {isZh ? '了解GFA的最新动态、项目进展和即将举办的活动。' : 'Stay updated on GFA\'s latest news, program updates, and upcoming events.'}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white border-b border-[#E6E7EA]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-6">{isZh ? '即将举行的活动' : 'Upcoming Events'}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.map((ev, i) => (
              <div key={i} className="bg-[#F9F7F4] rounded-2xl p-6 border border-[#E6E7EA] hover:border-[#C9A84C]/40 transition-colors">
                <h3 className="text-[15px] font-bold font-serif text-[#0B0B0C] mb-3 leading-snug">{ev.title}</h3>
                <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" /> {ev.date}
                </div>
                <div className="flex items-center gap-2 text-[12px] text-gray-500">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" /> {ev.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-16 bg-[#F9F7F4]">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-lg text-[12px] font-bold uppercase tracking-widest transition-colors ${
                  filter === f.key
                    ? 'bg-[#0B0B0C] text-white'
                    : 'bg-white border border-[#E6E7EA] text-[#444] hover:border-[#C9A84C] hover:text-[#C9A84C]'
                }`}
              >
                {isZh ? f.labelZh : f.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filtered.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#E6E7EA] hover:shadow-md transition-all flex flex-col md:flex-row">
                <div className="md:w-72 shrink-0 h-48 md:h-auto overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">{item.date}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">·</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      <Tag className="w-3 h-3" />
                      {isZh
                        ? filters.find(f => f.key === item.category)?.labelZh
                        : filters.find(f => f.key === item.category)?.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0B0B0C] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-5">{item.desc}</p>
                  <button className="inline-flex items-center gap-2 text-[#0B0B0C] font-bold text-xs uppercase tracking-widest hover:text-[#C9A84C] transition-colors w-fit">
                    {isZh ? '阅读详情' : 'Read More'} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-16 bg-[#0B0B0C] text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-5">{isZh ? '媒体素材与资料包' : 'Media Assets & Press Kit'}</h2>
          <p className="text-white/60 font-light max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            {isZh
              ? '媒体人员可下载高清Logo、新闻素材视频(B-roll)以及机构背景介绍资料。如需采访，请通过联系页面联系我们。'
              : 'Members of the press can download high-resolution logos, B-roll footage, and organization bios. For interview requests, please contact us through the Contact page.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center gap-2 bg-[#C9A84C] text-black px-7 py-3 rounded-xl font-bold text-sm hover:bg-[#d4b055] transition-all">
              {isZh ? '下载媒体资料包 (.ZIP)' : 'Download Press Kit (.ZIP)'}
            </button>
            <a href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-white/5 transition-colors">
              {isZh ? '媒体合作联系' : 'Media Inquiries'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
