import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Camera, Users, PlaySquare, FileText, Clapperboard, CheckCircle2, ArrowRight } from 'lucide-react';

const FilmmakerSupport: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-24">
      <SEO title="Filmmaker Support | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/sp4fWHq3/Chat-GPT-Image-2026-3-23-12-23-22.png" 
            alt="Filmmaker on set" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "You Have the Talent." : "你有才华，"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "We'll Help You Get Through the Door." : "我们帮你打开那扇门。"}</span>
          </h1>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-light text-gfa-slate leading-relaxed font-serif">
            {isEn 
              ? "Imagine a recent film school graduate. Their portfolio is flawless. They have straight A's. But they have zero industry connections, cannot afford camera rentals, and have no idea how to actually break into the business. That person's exact struggle—that invisible wall—is why GFA exists." 
              : "想象一个刚从电影学院毕业的人，作品集拿了满分。但他没有人脉，租不起昂贵的设备，甚至不知道该如何接到第一份工作。这个人的处境，以及横在他面前的那堵无形的墙，正是GFA存在的原因。"}
          </p>
        </div>
      </section>

      {/* Core Support Areas */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "How We Help You Break In" : "我们如何提供公益支持"}
            </h2>
          </div>

          <div className="space-y-12">
            {/* Support 1 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Free Pro Gear Access" : "公益影视设备借用"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "高昂的硬件门槛："}</strong>
                  {isEn ? "A cinema camera package costs $1,500+ a day. This financial barrier forces talented emerging creators to shoot on consumer gear, compromising their creative vision." : "专业摄影机、镜头及灯光设备的单日租金极高。这道显而易见的资金门槛，让许多拥有卓越才华但预算有限的新生代创作者，被迫妥协于创作质量。"}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案：平权与赋能："}</strong>
                  {isEn ? "Driven by our nonprofit mission, we provide free access to professional equipment. Through industry donations and partnerships, we offer approved independent projects access to cinema cameras to equalize opportunities." : "作为非营利机构，GFA致力于影视资源平等化。我们为符合条件的独立创作者免费提供工业级摄像机（如Blackmagic Design设备）、镜头与配套收音器材，帮助年轻力量实现高质量视觉表达。"}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {isEn ? "Details: Open to low-budget narrative shorts and documentaries. Projects must demonstrate a clear vision and need. Approved filmmakers receive a 1 to 4-week equipment loan at no cost." : "具体说明：面向预算有限的独立短片、纪录片及公益影像项目开放。提交完整剧本与制片计划评估后，创作者即可获得1至4周的公益免租金设备借用支持。"}
                </p>
                <div className="pt-2">
                  <Link to="/gear-application" className="inline-block text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Apply for Gear" : "提交项目审阅与设备申请"}</Link>
                </div>
              </div>
            </div>

            {/* Support 2 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Nonprofit Mentorship" : "公益导师扶持计划"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "资源纽带缺失："}</strong>
                  {isEn ? "The film industry relies heavily on established networks, making it extremely difficult for outsiders—especially those from underrepresented backgrounds—to find guidance and opportunities." : "影视行业高度依赖人际协作网络。缺乏引路人的青年创作者，即使拥有出色的潜力，也往往在职业初期迷失方向，难以及时获得专业人士的指导与反馈。"}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案：社区连结："}</strong>
                  {isEn ? "We connect emerging filmmakers with experienced industry volunteers. Dedicated professionals offer guidance, review creative work, and help young creators navigate their early careers." : "通过非营利社区网络，GFA将新兴创作者与好莱坞资深行业志愿者（如导演、制片人、行业前辈）建立1对1辅导关系。导师无私分享经验、批注剧本，提供纯粹的职业发展指引。"}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {isEn ? "Details: Mentorship cycles typically run 3 to 6 months with monthly guidance sessions. The focus is on educational growth, community building, and long-term career planning." : "具体说明：辅导周期通常为3至6个月，每月提供系统性的公益深度对谈。旨在帮助青年电影人完善作品集、建立行业信心，并融入一个互相支持互助的创作者青年社群。"}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Apply for Mentorship" : "申请进入公益导师池"}</button>
                </div>
              </div>
            </div>

            {/* Support 3 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <PlaySquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Festival Strategy Support" : "公益展映与电影节支持"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "传播渠道困境："}</strong>
                  {isEn ? "Submitting blindly to festivals drains precious indie budgets, and getting independent work seen by a broader audience remains an enormous challenge." : "独立创作者往往需要面对高昂的电影节报名费，且对节展定位了解不足，盲目投递极易消耗宝贵资金；优秀作品完成之后，极大受限于被大众看见的稀缺发声平台。"}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案：公益放映赋能："}</strong>
                  {isEn ? "We provide strategic festival guidance and community screening opportunities. GFA helps filmmakers craft a realistic festival plan and secures fee waivers from partner festivals to reduce financial burdens." : "GFA为创作者提供电影节申报策略公益诊断，降低错误投递成本。并依托机构合作网络，为优秀作品争取合作电影节的豁免名额 (Fee Waivers) 以及免费的社区放映与展演机会。"}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {isEn ? "Details: Includes access to our educational resources on festival touring and opportunities to showcase work at GFA community events." : "具体说明：为创作者进行作品复盘及投递白名单设计。同时协助优秀的公益类独立电影及青年短片推向非营利的数字及线下放映社群，促进多元文化之间的共鸣。"}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Request Strategy" : "提交作品获取展映辅导"}</button>
                </div>
              </div>
            </div>

            {/* Support 4 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Public Grant Coaching" : "公共艺术资助申报辅导"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "公共资金申请经验缺失："}</strong>
                  {isEn ? "Navigating complex nonprofit and government film grants is overwhelming. Many independent creators lack the specialized grant-writing skills required to secure public arts funding." : "虽然有许多非营利艺术组织提供公益创作基金，但初出茅庐的电影人大多缺乏复杂的文书应对经验。诸多极具潜力的创作者，往往因不清晰的项目提案与预算规划错失公共资助的帮扶。"}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案：公益文书教育："}</strong>
                  {isEn ? "GFA offers educational workshops and specialized coaching to help filmmakers decode grant applications. We teach creators how to articulate their vision and construct transparent budgets for arts organizations." : "GFA为独立创作者免费提供艺术扶持基金（Grants）的申请教育体系。资深辅导志愿者手把手教您如何撰写真诚专业的《导演阐述》、明确制作初衷并构架公开透明、符合捐助方审查原则的制作预算表。"}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {isEn ? "Details: We host grant-writing workshops and offer peer reviews of director's statements and budget proposals to empower marginalized creators to successfully secure funding." : "具体说明：定期举办非营利属性的基金提案教育讲座工作坊（Workshop）及一对一文书精修审阅。旨在全面提升青年电影人尤其是代表不足群体在公共艺术领域的获资助能力。"}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Book Consultation" : "登记参与公益文书辅导"}</button>
                </div>
              </div>
            </div>

            {/* Support 5 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <Clapperboard className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Educational On-Set Experience" : "教育性片场实战锻炼"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "经验积淀两难困境："}</strong>
                  {isEn ? "It is an industry paradox: young filmmakers need set experience to get hired, but cannot gain that experience without prior opportunities." : "青年一代在职业起步时往往遭遇经验积累的死角：因为缺乏丰富的片场大组协同履历，往往被专业团队视作“新人风险”而拒之门外；但脱离实战剧组，也无从获取宝贵经验。"}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案：社区片场共演："}</strong>
                  {isEn ? "GFA produces educational content, community PSAs, and nonprofit short films. We invite aspiring filmmakers to shadow experienced volunteers and fill essential crew roles in a supportive environment." : "GFA作为社区核心，每年主导或联合筹拍高质量的教育宣传片(PSA)及公益短片。我们邀请并接纳尚缺乏履历但满怀热情的青年，加入到这些包容且安全的拍摄项目中。在资深业内志愿者的手把手传帮带下，在实战中淬炼技艺。"}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {isEn ? "Details: These practical experiences help young creators learn professional protocols, earn real IMDb credits, and build their collaborative skills before formally entering the industry." : "具体说明：提供如摄影二助、灯光协助或场记执行的跟组学习机会。这既是一场公益摄制，也是青年人建立行业协作规范、积累早期IMDb学分并自信走向影视职场的完美“毕业试演”。"}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Apply for Crew" : "申请参与公益影片实战摄制"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
              {isEn ? "How to Apply" : "申请流程"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">1</div>
              <h4 className="font-bold text-lg mb-2">{isEn ? "Submit Application" : "提交申请"}</h4>
              <p className="text-sm font-light text-gfa-slate">{isEn ? "Fill out the online form, attach your portfolio link and career goals." : "填写在线申请表，附上作品链接和职业目标"}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">2</div>
              <h4 className="font-bold text-lg mb-2">{isEn ? "GFA Review" : "GFA团队审核"}</h4>
              <p className="text-sm font-light text-gfa-slate">{isEn ? "We will carefully review your materials (usually within 3-5 days)." : "通常3-5个工作日内回复"}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">3</div>
              <h4 className="font-bold text-lg mb-2">{isEn ? "1-on-1 Matching" : "一对一匹配"}</h4>
              <p className="text-sm font-light text-gfa-slate">{isEn ? "We assign the best support resources and mentors based on your goals." : "根据你的需求和目标匹配最适合的支持资源"}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">4</div>
              <h4 className="font-bold text-lg mb-2">{isEn ? "Start Your Journey" : "开始你的旅程"}</h4>
              <p className="text-sm font-light text-gfa-slate">{isEn ? "Receive gear, meet mentors, and officially enter the GFA network." : "获得设备、导师、机会，正式进入GFA支持网络"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-8">{isEn ? "Who Can Apply?" : "谁可以申请？"}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10">
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-400 w-5 h-5"/> {isEn ? "Eligible:" : "符合资格："}</h4>
                <ul className="space-y-3 text-sm font-light text-white/80">
                  <li>• {isEn ? "Film, TV, and Media graduates" : "电影、电视、传媒相关专业毕业生"}</li>
                  <li>• {isEn ? "Independent directors, DPs, and producers with a portfolio" : "有作品的独立导演、摄影师、制片人"}</li>
                  <li>• {isEn ? "Emerging filmmakers from multicultural backgrounds" : "多元文化背景的新兴电影人"}</li>
                  <li>• {isEn ? "Talented creators from low-income backgrounds" : "低收入背景的有才华创作者"}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white/50">{isEn ? "Not Required:" : "不需要："}</h4>
                <ul className="space-y-3 text-sm font-light text-white/50">
                  <li>• {isEn ? "Ivy League or elite film school degrees" : "名校背景"}</li>
                  <li>• {isEn ? "Pre-existing industry connections" : "已有行业人脉"}</li>
                  <li>• {isEn ? "Expensive ownership of cinema gear" : "昂贵的设备"}</li>
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "Success Stories" : "学员故事"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1">Alex</h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{isEn ? "Cinematography Grad" : "摄影系毕业生"}</p>
               <p className="text-sm font-light text-gfa-slate mb-6 flex-grow italic">
                 "{isEn ? "GFA lent me an entire Blackmagic camera package for my first short film. That short got into festivals, and directly led to my first paying gig." : "通过设备借用完成了第一部短片，入围电影节后获得工作机会。"}"
               </p>
             </div>

             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1">Sarah</h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{isEn ? "Independent Director" : "独立导演"}</p>
               <p className="text-sm font-light text-gfa-slate mb-6 flex-grow italic">
                 "{isEn ? "My GFA mentor pulled my resume from the pile and got me a production company internship. Now I work there full-time." : "通过导师网络进入制片公司实习，现在已经全职工作。"}"
               </p>
             </div>

             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1">David</h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{isEn ? "Low-Income Creator" : "低收入创作者"}</p>
               <p className="text-sm font-light text-gfa-slate mb-6 flex-grow italic">
                 "{isEn ? "I had to shelve my passion project because I couldn't afford production. GFA's grant application coaching helped me secure the funding to finish it." : "通过基金辅导获得资助，完成了长期搁置的项目。"}"
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Large CTA */}
      <section className="py-24 bg-gfa-inkBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A84C] mix-blend-overlay opacity-10"></div>
        <div className="container-gfa relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
            {isEn ? "You're One Step Away." : "你距离行业，只差一步"}
          </h2>
          <p className="text-xl md:text-2xl font-serif text-[#C9A84C] mb-12">
            {isEn ? "Let GFA help you take it." : "GFA帮你跨过那一步"}
          </p>
          <Link to="/gear-application" className="bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-12 py-5 rounded-full font-bold uppercase tracking-widest text-base hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(201,168,76,0.4)] active:scale-95 active:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all duration-200 shadow-[0_0_30px_rgba(201,168,76,0.3)] mb-4 inline-flex items-center gap-2">
            {isEn ? "Apply Now" : "立即进入申请主页"} <ArrowRight className="w-5 h-5"/>
          </Link>
          <div className="text-sm font-light text-white/50 tracking-widest uppercase mt-4">
            {isEn ? "Free · Nonprofit · No Connections Required" : "免费 · 非营利 · 无需行业背景"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilmmakerSupport;
