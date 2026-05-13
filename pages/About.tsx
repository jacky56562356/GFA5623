import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Quote, Heart, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-4">
      <SEO 
        title="About" 
        description="Learn about the Global Film Alliance (GFA). We are a nonprofit organization dedicated to film education, industry support, and breaking down industry barriers."
      />

      {/* Banner */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack mt-[90px] md:mt-[100px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/jZ8b7DQD/IMG-3304.jpg" 
            alt="Founders and Team" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-2xl">
            {isEn ? "Who We Are &" : "我们是谁，"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "Why We Exist" : "我们为什么存在"}</span>
          </h1>
        </div>
      </section>

      {/* Founder's Statement */}
      <section className="py-3 md:py-4 bg-white relative">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="relative bg-[#F5F2EE] rounded-2xl p-5 md:p-6 shadow-sm border border-[#C9A84C]/20">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-[#C9A84C]/20 -rotate-6" />
            <div className="relative z-10">
              <h2 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-4 border-b border-[#C9A84C]/20 pb-2 inline-block">
                {isEn ? "A Message From Our Founder" : "创始人致辞"}
              </h2>
              
              <div className="space-y-4 text-sm md:text-base font-serif text-gfa-inkBlack leading-relaxed italic mb-6">
                {isEn ? (
                  <>
                    <p>"After years of working in Hollywood as a film producer, I have witnessed firsthand how this industry can simultaneously be the most magical place on earth — and one of the most difficult to enter.</p>
                    <p>I have seen extraordinarily talented young filmmakers walk away — not because they lacked vision, not because they lacked passion, but because no one opened the door for them. No camera. No mentor. No platform willing to take a chance on them.</p>
                    <p>That is the moment GFA was born in my heart.</p>
                    <p>As the founder of Golden Lion Animation and a producer who has navigated the full journey from independent filmmaking to Hollywood, I built this organization with one conviction: talent is everywhere, but opportunity has never been equally distributed. A closed door should never be the end of anyone's cinematic dream.</p>
                    <p>GFA is my commitment to the next generation — to give young filmmakers the equipment, the mentors, the industry connections, and the belief they need to truly enter this art form and this industry.</p>
                    <p>But real change must start from the very beginning. That is why we walk alongside young creators from the moment they first pick up a camera — through the classroom, onto the set, from a dream all the way to a career.</p>
                    <p>I built GFA because I believe the future of cinema depends not on who has the most access today, but on who we choose to invest in tomorrow. I invite every filmmaker, educator, and industry professional who shares this belief to join us — because the next generation of storytellers is already out there, waiting for someone to believe in them."</p>
                  </>
                ) : (
                  <>
                    <p>“在好莱坞作为电影制片人工作多年后，我亲眼目睹了这个行业在成为世界上最迷幻的地方的同时——也是最难进入的领域之一。</p>
                    <p>我看到过极其有才华的年轻电影人黯然离场——不是因为他们缺乏远见，也没有缺乏热情，而是因为没有人为他们打开那扇门。没有摄影机，没有导师，没有平台愿意给他们机会。</p>
                    <p>那一刻，GFA在我的心中诞生了。</p>
                    <p>作为金狮动画的创始人，也是一位从独立电影制作一路走到好莱坞的制片人，我建立这个机构的信念是：才华无处不在，但机会从来都不是均等分配的。一扇关闭的门永远不应该成为任何人电影梦想的终点。</p>
                    <p>GFA是我对下一代的承诺——为年轻电影人提供他们所需的设备、导师、行业人脉以及信念，让他们真正进入这门艺术和这个行业。</p>
                    <p>但真正的改变必须从最开始发生。这就是为什么从年轻创作者第一次拿起摄影机的那一刻起，我们就与他们并肩同行——走进教室，步入片场，从梦想一路走向职业生涯。</p>
                    <p>我建立GFA是因为我相信电影的未来不在于今天谁拥有最多的资源，而在于我们明天选择投资谁。我邀请每一位认同这一理念的电影人、教育工作者和行业专业人士加入我们——因为下一代的故事讲述者已经在那儿，等待着有人愿意相信他们。”</p>
                  </>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-[#C9A84C]/20 pt-4">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-gray-300 overflow-hidden border-2 border-[#C9A84C]">
                  <img src="https://i.ibb.co/23F9WNxm/8e219be0edf629ecba7014dd02d05c5e.jpg" alt="Jacky (xiaoren) Liu" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif text-gfa-inkBlack mb-1">Jacky (xiaoren) Liu</h3>
                  <p className="text-xs sm:text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isEn ? "Founder & Chairman, Global Film Alliance" : "环球青年电影联盟 主席兼创始人"}</p>
                  <p className="text-[10px] sm:text-xs text-gfa-slate uppercase tracking-wider mt-1">{isEn ? "Hollywood Film Producer | Founder, Golden Lion Animation" : "好莱坞电影制片人 | 金狮动画 创始人"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Content Section */}
      <section className="py-3 md:py-4 bg-white border-t border-gfa-border">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          
          {/* Organization Introduction */}
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div>
              <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                {isEn ? "About Global Film Alliance" : "机构简介"}
              </h3>
              <p className="text-base md:text-lg font-light text-gfa-slate leading-relaxed">
                {isEn 
                  ? "Global Film Alliance (GFA) is a 501(c)(3) certified nonprofit organization headquartered in Los Angeles, California. Through our commitment to film education, industry support, and international cooperation, we break down industry barriers and create equitable opportunities for everyone passionate about film." 
                  : "全球电影联盟（Global Film Alliance，简称GFA）是总部位于加利福尼亚州洛杉矶的501(c)(3)认证非营利组织。我们通过致力于影视教育、产业支撑与国际合作，为所有热爱电影的人打破行业壁垒，创造公平的机会。"}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
               <img src="https://i.ibb.co/5W4kfjsB/intro-photo.jpg" alt="About GFA" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#F5F2EE] p-8 rounded-2xl border border-[#C9A84C]/20">
              <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-4 flex items-center gap-2">
                 <Target className="w-5 h-5 text-[#C9A84C]" />
                {isEn ? "Our Mission" : "使命"}
              </h3>
              <p className="text-gfa-slate font-light leading-relaxed">
                {isEn
                  ? "Transform the next generation through film education; empower every filmmaker through industry support."
                  : "通过电影教育改变下一代，通过产业支持成就每一位电影人。"}
              </p>
            </div>
            <div className="bg-gfa-inkBlack text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold font-serif text-[#C9A84C] mb-4 flex items-center gap-2">
                 <Target className="w-5 h-5" />
                {isEn ? "Our Vision" : "愿景"}
              </h3>
              <p className="text-white/80 font-light leading-relaxed">
                {isEn
                  ? "To become a leading global film education and industry support platform, building an international film ecosystem that integrates education, creation, distribution, and industry resources."
                  : "成为全球领先的电影教育与产业支撑平台，构建融合教育、创作、发行与产业资源的国际影视生态系统。"}
              </p>
            </div>
          </div>

          {/* Four Core Truths */}
          <div className="mb-4">
            <div className="text-center mb-5">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-gfa-inkBlack">
                {isEn ? "Four Core Truths" : "四大真理"}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Truth 1 */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-100/20 hover:border-[#C9A84C]/50 transition-all shadow-sm hover:shadow-lg p-6 group h-[320px] flex flex-col justify-end">
                <div className="absolute inset-0 z-0 bg-black">
                  <img src="https://i.ibb.co/7Jsztbmc/99eee363-e56f-48a1-9ea7-355b47007e8d.jpg" alt="Nurture Youth Film Talent" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#C9A84C]/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-[#C9A84C] font-bold text-lg border border-[#C9A84C]/30">1</div>
                  <h4 className="text-lg font-bold font-serif text-white mb-3">
                    {isEn ? "Nurture Youth Film Talent" : "培养青少年电影人才"}
                  </h4>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    {isEn
                      ? "Provide systematic film education for children and youth, including professional training in acting, directing, filming, and screenwriting, fostering artistic literacy and creativity."
                      : "为儿童及青少年提供系统化影视教育，包括表演、导演、拍摄、编剧等专业训练，有利于建立艺术素养与创造力。"}
                  </p>
                </div>
              </div>

              {/* Truth 2 */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-100/20 hover:border-[#C9A84C]/50 transition-all shadow-sm hover:shadow-lg p-6 group h-[320px] flex flex-col justify-end">
                <div className="absolute inset-0 z-0 bg-black">
                  <img src="https://i.ibb.co/ZzZbpJ2G/20260122155828-1667-151-1.jpg" alt="Promote Equitable Film Opportunities" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#C9A84C]/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-[#C9A84C] font-bold text-lg border border-[#C9A84C]/30">2</div>
                  <h4 className="text-lg font-bold font-serif text-white mb-3">
                    {isEn ? "Promote Equitable Film Opportunities" : "推动公平的电影机会"}
                  </h4>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    {isEn
                      ? "Provide opportunities for seniors from diverse backgrounds to enter the film industry, raising industry standards and promoting confidence and caring development."
                      : "为不同背景的老年人提供进入影视行业的机会，提高行业水平，促进信心与关怀性发展。"}
                  </p>
                </div>
              </div>

              {/* Truth 3 */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-100/20 hover:border-[#C9A84C]/50 transition-all shadow-sm hover:shadow-lg p-6 group h-[320px] flex flex-col justify-end">
                <div className="absolute inset-0 z-0 bg-black">
                  <img src="https://i.ibb.co/nNQnFsHd/t.png" alt="Support Independent Filmmakers & Emerging Directors" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#C9A84C]/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-[#C9A84C] font-bold text-lg border border-[#C9A84C]/30">3</div>
                  <h4 className="text-lg font-bold font-serif text-white mb-3">
                    {isEn ? "Support Independent Filmmakers & Emerging Directors" : "支持独立电影人与新晋导演"}
                  </h4>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    {isEn
                      ? "Provide emerging filmmakers with equipment, mentorship networks, distribution channels, and funding support to help them complete the full cycle from creation to distribution."
                      : "为新兴电影人提供设备、导师网络、发行渠道和资金支持，帮助完成从创作到发行的全程闭环。"}
                  </p>
                </div>
              </div>

              {/* Truth 4 */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-100/20 hover:border-[#C9A84C]/50 transition-all shadow-sm hover:shadow-lg p-6 group h-[320px] flex flex-col justify-end">
                <div className="absolute inset-0 z-0 bg-black">
                  <img src="https://i.ibb.co/8DDg94mN/professional-camera-man-at-work-2022-02-09-18-59-44-utc.jpg" alt="Build a Film Ecosystem" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#C9A84C]/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-[#C9A84C] font-bold text-lg border border-[#C9A84C]/30">4</div>
                  <h4 className="text-lg font-bold font-serif text-white mb-3">
                    {isEn ? "Build a Film Ecosystem" : "打造电影生态"}
                  </h4>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    {isEn
                      ? "Advance high-quality, socially valuable film and television content, and utilize the Golden Feather Awards system to honor outstanding emerging directors and distinguished filmmakers."
                      : "推进高质量、有社会价值的影视制作内容，并通过金羽毛奖（Golden Feather Awards）体系表彰优秀的新晋导演与杰出电影人。"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Nonprofit Support */}
          <div>
            <div className="text-center mb-5">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-gfa-inkBlack">
                {isEn ? "Core Nonprofit Support" : "核心公益支持"}
              </h3>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F2EE] border-b border-gray-200">
                    <th className="py-4 px-6 font-bold text-gfa-inkBlack w-1/3 border-r border-gray-200">
                      {isEn ? "Sector" : "板块"}
                    </th>
                    <th className="py-4 px-6 font-bold text-gfa-inkBlack">
                      {isEn ? "Content" : "内容"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold font-serif text-gfa-inkBlack border-r border-gray-200">
                      {isEn ? "Youth Education" : "青少年教育"}
                    </td>
                    <td className="py-5 px-6 text-sm text-gfa-slate font-light leading-relaxed">
                      {isEn 
                        ? "Film acting, directing, screenwriting, cinematography courses; film summer camps; practical shooting" 
                        : "影视表演、导演、编剧、摄影课程；电影夏令营；实战拍摄"}
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold font-serif text-gfa-inkBlack border-r border-gray-200">
                      {isEn ? "Film Production Support" : "电影制作支持"}
                    </td>
                    <td className="py-5 px-6 text-sm text-gfa-slate font-light leading-relaxed">
                      {isEn 
                        ? "Original film production; short films; film festival projects" 
                        : "原创电影制作；短片；电影节参赛项目"}
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold font-serif text-gfa-inkBlack border-r border-gray-200">
                      {isEn ? "Emerging Filmmaker Support" : "新晋电影人支持"}
                    </td>
                    <td className="py-5 px-6 text-sm text-gfa-slate font-light leading-relaxed">
                      {isEn 
                        ? "Funding support; equipment resources; mentorship network; talent events & film companies" 
                        : "资金支持；设备资源；导师网络；人才活动影视公司"}
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold font-serif text-gfa-inkBlack border-r border-gray-200">
                      {isEn ? "Honorary Awards" : "荣誉奖项"}
                    </td>
                    <td className="py-5 px-6 text-sm text-gfa-slate font-light leading-relaxed">
                      {isEn 
                        ? "Golden Feather Awards — for emerging directors and all outstanding filmmakers" 
                        : "金羽毛奖 — 面向新晋导演与所有优秀电影人"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="py-3 md:py-4 bg-white">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-2">
              {isEn ? "Partners" : "我们的合作伙伴"}
            </h2>
            <h3 className="text-xl md:text-2xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "United by a Common Goal" : "为共同目标而联合"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">
            <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="h-10 flex items-center justify-center mb-3">
                 <div className="text-xl md:text-2xl font-bold italic tracking-tighter text-gfa-inkBlack">Blackmagic Design</div>
              </div>
              <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed mx-auto">
                {isEn ? "Professional equipment partner, providing pro-level camera gear support for GFA projects." : "专业设备合作伙伴，为GFA项目提供专业级摄影器材支持"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="h-10 flex items-center justify-center mb-3">
                 <div className="text-xl md:text-2xl font-serif text-gfa-inkBlack">Harmony Gold</div>
              </div>
              <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed mx-auto">
                {isEn ? "Content partner collaborating on distribution and youth production." : "内容合作伙伴，参与项目发行及合作体验。"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="h-10 flex items-center justify-center mb-3">
                 <div className="text-base md:text-lg font-bold uppercase tracking-widest text-gfa-inkBlack">City of Pomona</div>
              </div>
              <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed mx-auto">
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
