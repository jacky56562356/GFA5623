import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Tent, Film, HeartHandshake, Sparkles, Calendar, MapPin, Video, ArrowRight, Heart, Users, Star } from 'lucide-react';

const YouthPrograms: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale !== Locale.ZH;

  return (
    <div className="font-sans pb-24">
      <SEO title="Youth Programs | Global Film Alliance" />

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-gfa-inkBlack pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Young filmmaker"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/40 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 px-4 pb-20 max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <Heart className="w-3.5 h-3.5 fill-current" />
              {isEn ? "Nonprofit Youth Initiative" : "非营利青少年项目"}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-serif text-white mb-8 leading-tight">
              {isEn ? "Planting the Seed of a" : "为下一代电影人"}<br/>
              <span className="text-[#C9A84C]">{isEn ? "Filmmaker's Dream" : "种下梦想的种子"}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-10 leading-relaxed">
              {isEn
                ? "We believe every child — regardless of income, background, or ability — deserves to tell their story on film."
                : "我们相信每一个孩子，无论家庭背景，都值得被看见。"}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {isEn ? "Explore Programs" : "探索项目"}
              </button>
              <Link to="/donate" className="border border-white/40 hover:border-white text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2">
                <Heart className="w-4 h-4" /> {isEn ? "Sponsor a Child" : "资助一个孩子"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Bar */}
      <section className="bg-[#C9A84C] py-6">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "500+", label: isEn ? "Youth Served Annually" : "每年服务青少年" },
              { num: "40%", label: isEn ? "On Full Scholarship" : "全额奖学金比例" },
              { num: "4", label: isEn ? "Program Tracks" : "课程方向" },
              { num: "6–17", label: isEn ? "Ages Welcomed" : "适合年龄段" },
            ].map((stat, i) => (
              <div key={i} className="text-black">
                <div className="text-3xl md:text-4xl font-bold font-serif">{stat.num}</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Camp */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-6">
                <Tent className="w-5 h-5"/> {isEn ? "Youth Film Summer Camp" : "影视夏令营"}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-6 leading-tight">
                {isEn ? "From First Frame to Premiere" : "从最初的画面到最终的首映"}
              </h2>
              <p className="text-lg font-serif font-light text-gfa-slate leading-relaxed italic mb-8">
                {isEn
                  ? "Picture day one: A child holds a professional camera for the first time, nervous but mesmerized. Now picture the final day: Sitting in a real theater, watching the audience's reaction to a film they directed. That transformation is our summer camp."
                  : "第一天：从未摸过摄影机，紧张又期待。最后一天：坐在观众席，看着自己导演的短片第一次公映，感受观众的掌声。"}
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Calendar className="w-5 h-5 text-[#C9A84C]" />, label: isEn ? "Session 1" : "第一期", val: "June 15–27, 2026" },
                  { icon: <Calendar className="w-5 h-5 text-[#C9A84C]" />, label: isEn ? "Session 2" : "第二期", val: "July 20 – Aug 1, 2026" },
                  { icon: <MapPin className="w-5 h-5 text-[#C9A84C]" />, label: isEn ? "Location" : "地点", val: "Greater Los Angeles Area" },
                  { icon: <Users className="w-5 h-5 text-[#C9A84C]" />, label: isEn ? "Ages" : "年龄", val: isEn ? "6–17 years old" : "6–17岁" },
                  { icon: <Video className="w-5 h-5 text-[#C9A84C]" />, label: isEn ? "Equipment" : "使用设备", val: isEn ? "Professional Blackmagic cameras" : "Blackmagic Design专业摄影机" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    {item.icon}
                    <span className="font-bold text-gfa-inkBlack w-28 shrink-0">{item.label}</span>
                    <span className="text-gfa-slate font-light">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Youth filmmaking"
                className="rounded-2xl w-full h-56 object-cover col-span-2"
              />
              <img
                src="https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Film production"
                className="rounded-2xl w-full h-44 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Young director"
                className="rounded-2xl w-full h-44 object-cover"
              />
            </div>
          </div>

          {/* Curriculum */}
          <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 mb-12">
            <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-8 text-center">{isEn ? "Curriculum Modules" : "课程内容"}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { en: "1. Screenwriting", zh: "1. 剧本创作", desc_en: "Find the stories only you can tell.", desc_zh: "找到只有你才能讲的故事" },
                { en: "2. Cinematography", zh: "2. 摄影技术", desc_en: "Express emotion through lenses and light.", desc_zh: "学会用光和镜头表达情感" },
                { en: "3. Acting", zh: "3. 表演指导", desc_en: "Find your authentic self on camera.", desc_zh: "在镜头前找到真实的自己" },
                { en: "4. Post-Production", zh: "4. 剪辑后期", desc_en: "Transform clips into a complete narrative.", desc_zh: "把零散素材变成完整作品" },
                { en: "5. Directing", zh: "5. 导演技巧", desc_en: "Lead a team to tell a unified story.", desc_zh: "学会带领团队讲述故事" },
                { en: "6. The Premiere", zh: "6. 作品展映", desc_en: "Experience a live audience watching your film.", desc_zh: "第一次看到观众看自己的作品" },
              ].map((m, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? m.en : m.zh}</h5>
                  <p className="text-sm font-light text-gfa-slate">{isEn ? m.desc_en : m.desc_zh}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarship CTA */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7234266/pexels-photo-7234266.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Youth filmmaker"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gfa-inkBlack/90 via-gfa-inkBlack/70 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 max-w-2xl">
              <h4 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-[#C9A84C]">
                {isEn ? "Talent shouldn't be limited by family income." : "才华，不应该被家庭收入所限制"}
              </h4>
              <p className="text-white/80 font-light mb-8 text-sm leading-relaxed">
                {isEn
                  ? "We provide full and partial scholarships so passionate children from any background can experience the magic of filmmaking."
                  : "我们为低收入家庭提供全额或部分费用减免，确保所有热爱电影的孩子都有机会参与。"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">
                  {isEn ? "Register My Child" : "为我的孩子报名"}
                </button>
                <button className="border border-white/40 hover:border-white text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">
                  {isEn ? "Sponsor a Child" : "资助一个孩子"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Film Project & Special Needs */}
      <section className="py-24 bg-[#F5F2EE] border-b border-gfa-border">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "More Programs" : "更多项目"}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Dream Film Project */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Children's Film Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <Film className="w-4 h-4"/> {isEn ? "Children's Dream Film Project" : "儿童梦想电影项目"}
                  </div>
                  <h3 className="text-2xl font-bold font-serif">{isEn ? "Children's Dream Film Project" : "儿童梦想电影项目"}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-6">
                  {isEn ? "We don't simulate — we produce and distribute. Every quarter, we produce a complete short film led entirely by youth." : "我们不模拟——我们真的制作，真的发行。每季度制作一部完整短片，全程由青少年主导。"}
                </p>
                <div className="bg-amber-50 border-l-4 border-[#C9A84C] p-6 rounded-r-xl mb-8 flex-grow">
                  <h4 className="font-bold text-gfa-inkBlack font-serif mb-2">{isEn ? "Case Study: 'Garden'" : "代表作：《花园 Garden》"}</h4>
                  <ul className="text-sm font-light text-gfa-slate space-y-2 mb-4">
                    <li>• {isEn ? "Winner: Best Family Film — Golden State Film Festival" : "Golden State Film Festival 最佳家庭电影"}</li>
                    <li>• {isEn ? "Distributed on Amazon Prime, YouTube, and Tubi" : "Amazon Prime / YouTube / Tubi 广泛发行"}</li>
                  </ul>
                  <p className="text-xs italic text-gfa-slate">"{isEn ? "Seeing my name in the credits on Amazon Prime made me realize I want to do this forever." : "在亚马逊上看到我的名字出现在片尾字幕时，我觉得我找到了我一生的热爱。"}"</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-gfa-inkBlack hover:bg-black text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Enroll for Next Film" : "让我的孩子参与下一部"}
                  </button>
                  <button className="border border-gfa-border hover:bg-gray-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Co-Produce" : "联合出品"}
                  </button>
                </div>
              </div>
            </div>

            {/* Special Needs */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8044196/pexels-photo-8044196.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Film Therapy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <HeartHandshake className="w-4 h-4"/> {isEn ? "Film Therapy" : "影视疗愈"}
                  </div>
                  <h3 className="text-2xl font-bold font-serif">{isEn ? "Film Therapy for Special Needs Youth" : "特殊需求儿童计划"}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-6 font-serif italic text-lg text-gfa-inkBlack">
                  {isEn ? '"Film is just another language. For children with special needs, it might be their most powerful one."' : '"电影，是另一种语言。对于有特殊需求的孩子，它可能是最有力的语言。"'}
                </p>
                <ul className="text-sm font-light text-gfa-slate space-y-4 mb-8 flex-grow">
                  {[
                    isEn ? "Designed for youth with autism, depression, and anxiety" : "专为自闭症、抑郁症、焦虑症儿童设计",
                    isEn ? "Self-expression and connection through acting and camerawork" : "通过拍摄和表演帮助孩子表达自我",
                    isEn ? "Instructors with professional psychological counseling backgrounds" : "有专业心理辅导背景的导师团队",
                    isEn ? "Small groups with 1:3 teacher-to-student ratio" : "小班制，1:3师生比例",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-gfa-inkBlack hover:bg-black text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Learn More" : "了解详情"}
                  </button>
                  <button className="border border-gfa-border hover:bg-gray-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Book Consultation" : "预约咨询"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Filmmaking */}
      <section className="py-24 bg-gfa-inkBlack relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8106613/pexels-photo-8106613.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Technology"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-gfa max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              {isEn ? "Innovation Track" : "前沿科技"}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
              {isEn ? "AI Filmmaking Training" : "AI影视制作培训"}
            </h2>
            <p className="text-xl md:text-2xl font-light text-white/70 font-serif italic max-w-3xl mx-auto">
              {isEn
                ? "As AI revolutionizes the film industry, we ensure the next generation leads the paradigm shift — not falls behind it."
                : "当AI正在改变整个影视工业，我们不让下一代落在时代后面。"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>, en: "AI Screenwriting", zh: "AI剧本创作", desc_en: "Mastering narrative generation with ChatGPT and Claude.", desc_zh: "ChatGPT、Claude等工具的创作流程" },
              { icon: <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>, en: "Visual Gen & VFX", zh: "AI视觉生成与特效", desc_en: "Creating visuals with Midjourney, Runway, and Sora.", desc_zh: "Midjourney、Runway、Sora等" },
              { icon: <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>, en: "AI Editing", zh: "AI辅助剪辑", desc_en: "Speeding up post-production with Descript and Adobe AI.", desc_zh: "Descript、Adobe AI等" },
              { icon: <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>, en: "AI Producing", zh: "AI制片与项目管理", desc_en: "Automating breakdowns and scheduling with intelligent tools.", desc_zh: "自动化剧本拆解与拍摄计划制定" },
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 backdrop-blur-sm">
                {card.icon}
                <h4 className="font-bold text-white font-serif text-lg mb-2">{isEn ? card.en : card.zh}</h4>
                <p className="text-sm font-light text-white/60 leading-relaxed">{isEn ? card.desc_en : card.desc_zh}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#C9A84C] hover:bg-[#b09241] text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg inline-flex items-center gap-2">
              {isEn ? "Join the Waitlist" : "加入等候名单"} <ArrowRight className="w-4 h-4"/>
            </button>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-6">
                <Heart className="w-4 h-4 fill-current" /> {isEn ? "Support Our Mission" : "支持我们的使命"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-6">
                {isEn ? "Every Dollar Gives a Child a Camera" : "每一份捐款都让一个孩子拿起摄影机"}
              </h2>
              <p className="text-gfa-slate font-light leading-relaxed mb-8">
                {isEn
                  ? "As a registered 501(c)(3) nonprofit, 100% of your donation goes directly to youth programs — scholarships, equipment, and mentorship."
                  : "作为注册的501(c)(3)非营利组织，您的每一份捐款都直接用于青少年项目——奖学金、设备和导师辅导。"}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate" className="bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-current" /> {isEn ? "Donate Now" : "立即捐款"}
                </Link>
                <Link to="/get-involved" className="border border-gfa-inkBlack hover:bg-gfa-inkBlack hover:text-white text-gfa-inkBlack font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all">
                  {isEn ? "Volunteer" : "志愿者"}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Youth program"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/7234266/pexels-photo-7234266.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Filmmaking"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Youth film"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/8044196/pexels-photo-8044196.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Student filmmaker"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default YouthPrograms;
