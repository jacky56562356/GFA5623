
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';

const Home = () => {
  const { t } = useLocale();
  const h = t.home;

  return (
    <div className="bg-gfa-black">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.08),transparent_70%)] opacity-60"></div>
        <div className="max-w-6xl text-center z-10 animate-fade-in relative">
          <div className="inline-block px-5 py-1.5 border border-gfa-gold/40 text-gfa-gold text-[10px] font-black uppercase tracking-[0.6em] mb-12 bg-gfa-gold/5 rounded-sm backdrop-blur-md">
            Independent Nonprofit • Industry Standards
          </div>
          <h1 className="mb-10 gold uppercase text-6xl md:text-9xl tracking-tighter leading-[0.85] font-black">
            {h.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gfa-gray font-light uppercase tracking-[0.3em] mb-14 max-w-5xl mx-auto leading-loose border-y border-white/10 py-12">
            {h.hero.subtitle}
          </p>
          <p className="text-gfa-gray/60 text-sm md:text-base max-w-3xl mx-auto mb-16 leading-relaxed uppercase tracking-[0.15em] font-medium">
            {h.hero.body}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/certification" className="btn-gold px-16 py-6 shadow-2xl">{h.hero.ctaPrimary}</Link>
            <Link to="/registry" className="px-16 py-6 border border-gfa-gold/40 text-gfa-gold text-[11px] font-black uppercase tracking-[0.3em] hover:bg-gfa-gold hover:text-gfa-black transition-all rounded-sm backdrop-blur-sm shadow-xl">{h.hero.ctaSecondary}</Link>
          </div>
          <p className="mt-12 text-[10px] text-gfa-gray/40 uppercase tracking-[0.4em] italic">
            {h.hero.note}
          </p>
        </div>
      </section>

      {/* 2. Platform Hubs - 信息公示板块 */}
      <section className="py-40 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-4xl font-black uppercase tracking-[0.4em] gold mb-8">信息公示与核查中心</h2>
            <p className="text-gfa-gray/60 text-sm uppercase tracking-widest max-w-2xl mx-auto leading-loose">
              实时核实行业机构的认证状态、有效期限及信誉评分。GFA 数据库是家庭做出安全选择的重要保障。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/registry" className="group bg-white/5 p-12 border border-white/10 hover:border-gfa-gold transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-gfa-gold/10">
               <div className="text-gfa-gold mb-10 text-4xl opacity-30 group-hover:opacity-100 transition-opacity">🔍</div>
               <h3 className="text-xl font-black uppercase tracking-widest text-white mb-4 group-hover:text-gfa-gold transition-colors">公示名录</h3>
               <p className="text-[10px] text-gfa-gray uppercase tracking-widest leading-loose opacity-60">搜索并核实全球范围内获得 GFA 认证的所有电影机构。</p>
               <div className="mt-8 text-gfa-gold text-[9px] font-black uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform">立即搜索 →</div>
            </Link>
            <Link to="/verify" className="group bg-white/5 p-12 border border-white/10 hover:border-gfa-gold transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-gfa-gold/10">
               <div className="text-gfa-gold mb-10 text-4xl opacity-30 group-hover:opacity-100 transition-opacity">🛡️</div>
               <h3 className="text-xl font-black uppercase tracking-widest text-white mb-4 group-hover:text-gfa-gold transition-colors">保证金核验</h3>
               <p className="text-[10px] text-gfa-gray uppercase tracking-widest leading-loose opacity-60">核实人才服务提供商是否缴纳了法定的 5 万美金保证金。</p>
               <div className="mt-8 text-gfa-gold text-[9px] font-black uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform">启动核查 →</div>
            </Link>
            <Link to="/safeguarding" className="group bg-white/5 p-12 border border-white/10 hover:border-gfa-gold transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-gfa-gold/10">
               <div className="text-gfa-gold mb-10 text-4xl opacity-30 group-hover:opacity-100 transition-opacity">🚩</div>
               <h3 className="text-xl font-black uppercase tracking-widest text-white mb-4 group-hover:text-gfa-gold transition-colors">青少年保护</h3>
               <p className="text-[10px] text-gfa-gray uppercase tracking-widest leading-loose opacity-60">查阅 GFA 设立的儿童保护红线政策及合规操作指南。</p>
               <div className="mt-8 text-gfa-gold text-[9px] font-black uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform">了解政策 →</div>
            </Link>
            <Link to="/transparency" className="group bg-white/5 p-12 border border-white/10 hover:border-gfa-gold transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-gfa-gold/10">
               <div className="text-gfa-gold mb-10 text-4xl opacity-30 group-hover:opacity-100 transition-opacity">💰</div>
               <h3 className="text-xl font-black uppercase tracking-widest text-white mb-4 group-hover:text-gfa-gold transition-colors">收费透明化</h3>
               <p className="text-[10px] text-gfa-gray uppercase tracking-widest leading-loose opacity-60">查看 GFA 规定的收费上限及透明披露标准。</p>
               <div className="mt-8 text-gfa-gold text-[9px] font-black uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform">查看标准 →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Certification Framework - 三级认证体系 */}
      <section className="py-40 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-24 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black uppercase tracking-[0.4em] gold mb-12 leading-tight">{h.certFramework.title}</h2>
              <p className="text-sm text-gfa-gray/70 leading-loose uppercase tracking-widest mb-16">
                {h.certFramework.body}
              </p>
              <Link to="/certification" className="text-xs font-black uppercase tracking-[0.5em] text-gfa-gold hover:text-white transition-colors">
                {h.certFramework.cta} →
              </Link>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {h.certFramework.levels.map((lvl: any, i: number) => (
                <div key={i} className="p-12 bg-gfa-black border border-white/10 hover:border-gfa-gold transition-all duration-500 relative group shadow-2xl">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gfa-gold/10 border border-gfa-gold/40 text-gfa-gold text-[9px] px-4 py-1.5 font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    TIER 0{i+1}
                  </div>
                  <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 border-b border-white/5 pb-4">{lvl.title}</h4>
                  <p className="text-[11px] text-gfa-gray/60 uppercase tracking-widest leading-relaxed">
                    {lvl.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bulletin News - 机构公告 */}
      <section className="py-40 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-[0.3em] gold mb-16">{h.news.title}</h2>
            <div className="space-y-10">
              {h.news.items.map((news: any, i: number) => (
                <div key={i} className="flex gap-10 items-start group border-b border-white/5 pb-10">
                  <div className="text-[10px] text-gfa-gold font-black uppercase tracking-widest pt-1 opacity-60">{news.date}</div>
                  <div className="flex-grow">
                    <div className="text-[8px] text-white/30 uppercase tracking-[0.4em] mb-3 font-black">{news.type}</div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-gfa-gold transition-colors">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gfa-darkGray/60 p-16 border border-white/10 relative shadow-3xl flex flex-col justify-center rounded-sm">
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] gold mb-10">组织章程与独立性</h2>
            <p className="text-sm text-gfa-gray leading-loose uppercase tracking-widest mb-16 opacity-70 italic border-l-4 border-gfa-gold/30 pl-10">
              GFA 作为独立的非营利机构运营。我们不代理人才、不制片盈利，我们的独立性是维护客观公示名录的核心资产。
            </p>
            <Link to="/about" className="btn-gold w-fit px-12 py-5 text-[10px]">阅读章程</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
