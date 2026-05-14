import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Quote, Target, FileText, PlayCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-4">
      <SEO 
        title={isEn ? "About, Impact & News | Global Film Alliance" : "关于、影响力与新闻 | Global Film Alliance"} 
        description={isEn ? "Learn about our mission, real-world impact, and the latest news from Global Film Alliance." : "了解我们的使命、真实的改变以及全球电影联盟的最新新闻。"}
      />

      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack mt-[90px] md:mt-[100px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2670&q=80" 
            alt="Diverse team of young filmmakers" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-4 leading-tight drop-shadow-2xl">
            {isEn ? "Who We Are &" : "我们是谁，"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "Our Global Impact" : "与我们的全球影响力"}</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base font-light">
             {isEn ? "Discover our mission, our work, and the real-world stories driving change in the film industry." : "发掘我们的使命、我们在做的工作以及正在电影行业带来改变的真实故事。"}
          </p>
        </div>
      </section>

      {/* Part 1: Organization Introduction */}
      <section className="py-12 md:py-16 bg-white border-t border-gfa-border">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-4">
                {isEn ? "About Us" : "关于我们"}
              </h2>
              <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
                {isEn ? "Global Film Alliance" : "全球电影联盟 (GFA)"}
              </h3>
              <p className="text-base md:text-lg font-light text-gfa-slate leading-relaxed">
                {isEn 
                  ? "Global Film Alliance (GFA) is a 501(c)(3) certified nonprofit organization headquartered in Los Angeles, California. Through our commitment to film education, industry support, and international cooperation, we break down industry barriers and create equitable opportunities for everyone passionate about film." 
                  : "全球电影联盟（Global Film Alliance，简称GFA）是总部位于加利福尼亚州洛杉矶的501(c)(3)认证非营利组织。我们通过致力于影视教育、产业支撑与国际合作，为所有热爱电影的人打破行业壁垒，创造公平的机会。"}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-80">
               <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" alt="Film Team Working" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#F5F2EE] p-10 rounded-2xl border border-[#C9A84C]/20">
              <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4 flex items-center gap-3">
                 <Target className="w-6 h-6 text-[#C9A84C]" />
                {isEn ? "Our Mission" : "使命"}
              </h3>
              <div className="text-gfa-slate font-light leading-relaxed text-lg">
                {isEn ? (
                  <>
                    <p className="mb-4">
                      Talent should never disappear because opportunity never arrived.<br/>
                      GFA opens the door for every child with a dream,<br/>
                      helps every graduate find their place,<br/>
                      and builds real careers for independent creators.
                    </p>
                    <p className="font-medium text-gfa-inkBlack">
                      We don't offer one-time help.<br/>
                      We offer a lifetime of support.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-4">
                      才华不应因机会未到而埋没。<br/>
                      GFA为每一个怀揣梦想的孩子打开大门，<br/>
                      帮助每一位毕业生找到自己的位置，<br/>
                      为独立创作者建立真正的职业道路。
                    </p>
                    <p className="font-medium text-gfa-inkBlack">
                      我们提供的不只是一次性的帮助。<br/>
                      我们提供的是一生的支持与陪伴。
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="bg-gfa-inkBlack text-white p-10 rounded-2xl">
              <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4 flex items-center gap-3">
                 <Target className="w-6 h-6" />
                {isEn ? "Our Vision" : "愿景"}
              </h3>
              <p className="text-white/80 font-light leading-relaxed text-lg">
                {isEn
                  ? "To become a leading global film education and industry support platform, building an international film ecosystem that integrates education, creation, distribution, and industry resources."
                  : "成为全球领先的电影教育与产业支撑平台，构建融合教育、创作、发行与产业资源的国际影视生态系统。"}
              </p>
            </div>
          </div>

          {/* Founder's Statement */}
          <div className="relative bg-[#F5F2EE] rounded-3xl p-8 md:p-12 shadow-sm border border-[#C9A84C]/20 mb-16">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#C9A84C]/20 -rotate-6" />
            <div className="relative z-10 w-full max-w-4xl mx-auto">
              <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-6 border-b border-[#C9A84C]/20 pb-3 inline-block">
                {isEn ? "A Message From Our Founder" : "创始人致辞"}
              </h2>
              
              <div className="space-y-5 text-base md:text-xl font-serif text-gfa-inkBlack leading-relaxed italic mb-8">
                {isEn ? (
                  <>
                    <p>"After years of working in Hollywood as a film producer, I have witnessed firsthand how this industry can simultaneously be the most magical place on earth — and one of the most difficult to enter.</p>
                    <p>I have seen extraordinarily talented young filmmakers walk away — not because they lacked vision, not because they lacked passion, but because no one opened the door for them. No camera. No mentor. No platform willing to take a chance on them. That is the moment GFA was born in my heart.</p>
                    <p>I built GFA because I believe the future of cinema depends not on who has the most access today, but on who we choose to invest in tomorrow. I invite every filmmaker, educator, and industry professional who shares this belief to join us — because the next generation of storytellers is already out there, waiting for someone to believe in them."</p>
                  </>
                ) : (
                  <>
                    <p>“在好莱坞作为电影制片人工作多年后，我亲眼目睹了这个行业在成为世界上最迷幻的地方的同时——也是最难进入的领域之一。</p>
                    <p>我看到过极其有才华的年轻电影人黯然离场——不是因为他们缺乏远见，也没有缺乏热情，而是因为没有人为他们打开那扇门。没有摄影机，没有导师，没有平台愿意给他们机会。那一刻，GFA在我的心中诞生了。</p>
                    <p>我建立GFA是因为我相信电影的未来不在于今天谁拥有最多的资源，而在于我们明天选择投资谁。我邀请每一位认同这一理念的电影人、教育工作者和行业专业人士加入我们——因为下一代的故事讲述者已经在那儿，等待着有人愿意相信他们。”</p>
                  </>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-t border-[#C9A84C]/20 pt-6">
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-gray-300 overflow-hidden border-2 border-[#C9A84C]">
                  <img src="https://i.ibb.co/23F9WNxm/8e219be0edf629ecba7014dd02d05c5e.jpg" alt="Jacky (xiaoren) Liu" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-1">Jacky (xiaoren) Liu</h3>
                  <p className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest mb-1">{isEn ? "Founder & Chairman, Global Film Alliance" : "环球青年电影联盟 主席兼创始人"}</p>
                  <p className="text-xs text-gfa-slate uppercase tracking-wider">{isEn ? "Hollywood Film Producer | Founder, Golden Lion Animation" : "好莱坞电影制片人 | 金狮动画 创始人"}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Part 2: Impact & Success Metrics */}
      <section className="py-16 md:py-20 bg-gfa-inkBlack text-white">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4">
              {isEn ? "Our Footprint" : "我们的足迹"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-white">
              {isEn ? "Measuring What Matters" : "我们如何衡量成功"}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold font-serif text-white mb-2">500<span className="text-[#C9A84C]">+</span></div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{isEn ? "Child Performers" : "参演儿童"}</p>
              <p className="text-xs text-white/60 font-light">{isEn ? "Youth engaged in our programs." : "参与夏令营及电影项目"}</p>
            </div>
            <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold font-serif text-white mb-2">18</div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{isEn ? "Award Winners" : "好莱坞获奖"}</p>
              <p className="text-xs text-white/60 font-light">{isEn ? "Recognized at Golden Feather." : "被行业专业评审表彰"}</p>
            </div>
            <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold font-serif text-white mb-2">3</div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{isEn ? "Films Distributed" : "发行的影片"}</p>
              <p className="text-xs text-white/60 font-light">{isEn ? "Active on major streaming platforms." : "在主流流媒体平台上线"}</p>
            </div>
            <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold font-serif text-white mb-2">10K<span className="text-[#C9A84C]">+</span></div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{isEn ? "Global Views" : "全球播放量"}</p>
              <p className="text-xs text-white/60 font-light">{isEn ? "Audience reach of youth films." : "覆盖全球数字平台观众"}</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-2xl md:text-4xl font-bold font-serif mb-8">
               {isEn ? "Financial Transparency" : "资金透明度声明"}
             </h2>
             <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-10">
                <div className="flex flex-col items-center">
                   <span className="text-5xl md:text-7xl font-bold font-serif text-[#C9A84C] mb-4">70%</span>
                   <span className="text-sm uppercase tracking-widest font-bold text-white/80">{isEn ? "Filmmaker Support & Youth Programs" : "电影人支持与青少年项目"}</span>
                </div>
                <div className="w-16 h-px bg-white/20 rotate-90 md:rotate-0"></div>
                <div className="flex flex-col items-center">
                   <span className="text-5xl md:text-7xl font-bold font-serif text-white mb-4">20%</span>
                   <span className="text-sm uppercase tracking-widest font-bold text-white/80">{isEn ? "Scholarships for Low-Income Families" : "奖学金与低收入家庭资助"}</span>
                </div>
                <div className="w-16 h-px bg-white/20 rotate-90 md:rotate-0"></div>
                <div className="flex flex-col items-center">
                   <span className="text-5xl md:text-7xl font-bold font-serif text-white/40 mb-4">10%</span>
                   <span className="text-sm uppercase tracking-widest font-bold text-white/40">{isEn ? "Admin & Operations" : "行政运营"}</span>
                </div>
             </div>
             <p className="text-white/60 font-light text-base leading-relaxed mb-6 max-w-3xl mx-auto">
               {isEn 
                 ? "As a 501(c)(3) nonprofit, accountability is our bedrock. Your support fuels art, not bureaucracy." 
                 : "作为注册的 501(c)(3) 非营利机构，公信力是我们的基石。你的捐赠直接驱动了艺术的发生。"}
             </p>
          </div>
        </div>
      </section>

      {/* Part 3: The Faces of Change & Featured Films */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">{isEn ? "The Faces of Change" : "每一个真实的故事"}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
             <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-56 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=2000&q=80" alt="Filmmaker Action" className="w-full h-full object-cover" />
               </div>
               <div className="p-8">
                 <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-3">{isEn ? "Career Support" : "就业扶持计划"}</div>
                 <h3 className="font-serif font-bold text-2xl mb-4 text-gfa-inkBlack">Marcus T.</h3>
                 <p className="text-gfa-slate font-light text-base italic leading-relaxed">
                   "{isEn ? "I was working two retail jobs after film school just to survive. GFA connected me with my mentor, who got me my first PA gig on a real union set." : "电影学院毕业后为了生存我在做两份零售工作。是GFA给我匹配了导师，让我接到了真正的工会剧组的第一个PA职位。"}"
                 </p>
               </div>
             </div>

             <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-56 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?auto=format&fit=crop&w=2000&q=80" alt="Summer Camp" className="w-full h-full object-cover" />
               </div>
               <div className="p-8">
                 <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-3">{isEn ? "Youth Camp" : "影视夏令营"}</div>
                 <h3 className="font-serif font-bold text-2xl mb-4 text-gfa-inkBlack">Sophia L. & Family</h3>
                 <p className="text-gfa-slate font-light text-base italic leading-relaxed">
                   "{isEn ? "The full scholarship changed everything. Watching Sophia direct her short film gave her a level of confidence we had never seen before." : "全额奖学金改变了一切。看着女儿在片场自信地当导演，那是我们在她身上从未见过的光芒。"}"
                 </p>
               </div>
             </div>

             <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-56 overflow-hidden relative flex justify-center p-4">
                 <img src="https://i.ibb.co/8gHZ9bxG/Chat-GPT-Image-2026-3-8-11-02-27.png" alt="Awards Night" className="h-full object-contain drop-shadow-xl" />
               </div>
               <div className="p-8">
                 <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-3">{isEn ? "Golden Feather" : "金羽奖获奖者"}</div>
                 <h3 className="font-serif font-bold text-2xl mb-4 text-gfa-inkBlack">Elena R.</h3>
                 <p className="text-gfa-slate font-light text-base italic leading-relaxed">
                   "{isEn ? "Winning Best Screenplay meant my voice actually mattered. It's the validation I carry into every single writing session now." : "赢得最佳剧本奖意味着我的声音是有人在乎的。这份肯定我现在写每一个剧本时都带在心中。"}"
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Part 4: News & Media */}
      <section className="py-16 md:py-20 bg-[#F5F2EE]">
        <div className="container-gfa max-w-5xl mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4">{isEn ? "Latest Updates" : "最新动态"}</h2>
             <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">{isEn ? "News & Media" : "媒体与新闻报道"}</h3>
           </div>

           <div className="space-y-6">
              {/* News Item 1 */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow group">
                 <div className="md:w-1/3 shrink-0">
                    <div className="h-56 md:h-full bg-gray-200 rounded-2xl overflow-hidden relative">
                       <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2000&auto=format&fit=crop" alt="News Image 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                 </div>
                 <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-3">March 2025</div>
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                      {isEn ? "Global Youth Talent Competition 2026 Officially Announced" : "2026全球青少年才艺大赛正式启动"}
                    </h3>
                    <p className="text-gfa-slate font-light text-base mb-6 leading-relaxed">
                      {isEn ? "GFA announces its flagship event to be held in Hollywood, uniting young talents from the US and China on a single stage. Registration opens soon for students spanning multiple disciplines." : "GFA宣布将于好莱坞中心舞台举办核心赛事，首次将中美两地的才华青少年汇聚于同一舞台。目前正式对多领域的学生开放注册。"}
                    </p>
                    <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:text-[#C9A84C] transition-colors w-fit">
                      {isEn ? "Read Full Release" : "阅读完整新闻稿"} <ArrowRight className="w-5 h-5"/>
                    </button>
                 </div>
              </div>

              {/* News Item 2 */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow group">
                 <div className="md:w-1/3 shrink-0">
                    <div className="h-56 md:h-full bg-gray-200 rounded-2xl overflow-hidden relative">
                       <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop" alt="News Image 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                 </div>
                 <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-3">January 2025</div>
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                      {isEn ? "Student Short Film 'Garden' Picked Up by Amazon Prime" : "学生短片《花园》成功上线 Amazon Prime"}
                    </h3>
                    <p className="text-gfa-slate font-light text-base mb-6 leading-relaxed">
                      {isEn ? "Produced entirely by our Youth Film Campers, the award-winning short film secures major streaming distribution right after its premiere." : "完全由 GFA 夏令营学员制作的获奖短片在首映后立刻获得主流流媒体平台发行支持。"}
                    </p>
                    <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:text-[#C9A84C] transition-colors w-fit">
                      {isEn ? "Read Full Release" : "阅读完整新闻稿"} <ArrowRight className="w-5 h-5"/>
                    </button>
                 </div>
              </div>
           </div>

           <div className="text-center mt-10">
              <button className="border border-gfa-inkBlack text-gfa-inkBlack px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gfa-inkBlack hover:text-white transition-colors">
                {isEn ? "Download Media Kit & Resources" : "下载媒体资料包与资源"}
              </button>
           </div>
        </div>
      </section>

      {/* Part 5: Partners section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4">
              {isEn ? "Partners" : "我们的合作伙伴"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "United by a Common Goal" : "为共同目标而联合"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                 <div className="text-2xl font-bold italic tracking-tighter text-gfa-inkBlack">Blackmagic Design</div>
              </div>
              <p className="text-sm md:text-base font-light text-gfa-slate leading-relaxed mx-auto">
                {isEn ? "Professional equipment partner, providing pro-level camera gear support for GFA projects." : "专业设备合作伙伴，为GFA项目提供专业级摄影器材支持"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                 <div className="text-xl font-bold uppercase tracking-widest text-gfa-inkBlack">City of Pomona</div>
              </div>
              <p className="text-sm md:text-base font-light text-gfa-slate leading-relaxed mx-auto">
                {isEn ? "Government partner, proudly supporting GFA's local community outreach and youth initiatives." : "政府合作伙伴，支持GFA的社区服务项目"}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
