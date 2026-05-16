import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Tent, Film, HeartHandshake, Sparkles, Calendar, MapPin, Video, ArrowRight, ChevronDown, Map, Compass, BookOpen, GraduationCap, PhoneCall } from 'lucide-react';

const YouthPrograms: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  const [showRegForm, setShowRegForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = isEn ? [
    { q: "My child loves film, but I'm not sure if it's a good career path?", a: "The entertainment industry is one of the largest export industries in the US, with a massive demand for diverse talent ranging from creative to technical and business roles. With proper planning, it offers highly viable and lucrative career paths." },
    { q: "Is studying film very expensive?", a: "It can be, but it doesn't have to be. GFA specifically mitigates these costs by providing free gear, mentorship, and extensive scholarship programs so talent matters more than money." },
    { q: "What should my child major in for college?", a: "It depends completely on their interest. They don't have to major in 'Film Production'. Many successful producers majored in Business; many great cinematographers studied Physics or Fine Arts. We offer consultations to help figure this out." },
    { q: "As a Chinese family, how can we help our child succeed in the US industry?", a: "By understanding the US system early. Hollywood relies entirely on union structures, verified credits, and professional networks. GFA acts as a bridge, giving Chinese families the exact roadmap required to build an authentic Hollywood career." },
    { q: "How much do GFA's programs cost? Is there financial aid?", a: "Cost varies by program, but as a nonprofit, profitability is not our goal. We offer robust scholarships—up to 100% coverage—for low and middle-income families." },
    { q: "My child has absolutely no experience. Can they start with GFA?", a: "Yes. Our 6-10 age programs assume zero prior experience. We focus purely on kindling their passion and creativity in a pressure-free environment." },
    { q: "Will the Global Talent Competition actually help my child's future?", a: "Absolutely. Competing in Hollywood, receiving verified credentials from a recognized US 501(c)(3), and performing for industry judges are massive resume builders for college applications and talent agents." },
    { q: "How do I schedule a 1-on-1 consultation with the GFA team?", a: "Simply click the 'Book Free Consultation' button at the bottom of this page. We'll find a time to discuss your child's specific situation." }
  ] : [
    { q: "孩子喜欢电影，但我不确定这是不是一条好的职业道路？", a: "影视娱乐业是美国最大的出口产业之一，对从创作、技术到商业的各个领域都有巨大的人才需求。只要规划得当，这是一条极为可行且前景广阔的职业道路。" },
    { q: "学影视需要很多钱吗？", a: "可能需要，但并非必须。GFA的存在正是为了抵消这些成本。我们提供免费的设备借用、导师指导和丰厚的奖学金，确保才华比财富更重要。" },
    { q: "孩子应该读什么专业？", a: "这完全取决于他们的具体兴趣。他们不一定非要学“电影制作”。许多顶尖制片人学的是商科；优秀的摄影师可能学的是物理或美术。我们提供一对一咨询帮助您理清这一点。" },
    { q: "来自中国的家庭，如何帮助孩子在美国影视圈发展？", a: "尽早理解美国的行业体系非常重要。好莱坞完全依赖工会结构、被验证的履历网络。GFA作为桥梁，为中国家庭提供建立真正好莱坞事业所需的精确路线图。" },
    { q: "GFA的项目费用是多少？有没有资助？", a: "各项目费用不同，但作为非营利组织，盈利不是我们的目的。我们为中低收入家庭提供高达100%费用的奖学金。" },
    { q: "孩子没有任何基础，可以从GFA的项目开始吗？", a: "完全可以。我们6-10岁的项目无需任何基础。我们在无压力的环境中，纯粹专注于点燃他们的热情和创造力。" },
    { q: "全球才艺大赛对孩子的未来有帮助吗？", a: "极其有帮助。在好莱坞中心舞台角逐、获得受认可的美国501(c)(3)机构背书、并在行业评委面前展示才华——这些对大学申请和吸引经纪人来说都是极具含金量的履历。" },
    { q: "如何预约和GFA团队的一对一咨询？", a: "只需点击页面底部的“预约免费咨询”按钮，我们团队会与您安排专门的时间深入探讨您孩子的具体情况。" }
  ];
  const [resumeFileName, setResumeFileName] = useState('');
  const [portfolioFileNames, setPortfolioFileNames] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    program: 'Youth Film Summer Camp',
    emergencyContact: '',
    emergencyPhone: '',
    dietary: '',
    medical: '',
    filmmakingExperience: 'None',
    tshirtSize: 'M',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = isEn ? `Registration: ${formData.childName} for ${formData.program}` : `报名申请: ${formData.childName} 报名 ${formData.program}`;
    const body = `Program: ${formData.program}

--- Participant Information ---
Child Name: ${formData.childName}
Child Age: ${formData.childAge}
T-Shirt Size: ${formData.tshirtSize}
Filmmaking Experience: ${formData.filmmakingExperience}

--- Parent/Guardian Information ---
Parent Name: ${formData.parentName}
Email: ${formData.email}
Phone: ${formData.phone}

--- Emergency Contact ---
Name: ${formData.emergencyContact}
Phone: ${formData.emergencyPhone}

--- Health & Safety ---
Dietary Restrictions: ${formData.dietary}
Medical Conditions: ${formData.medical}

--- Additional Notes ---
${formData.message}`;

    window.location.href = `mailto:jacky@gfafilm.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowRegForm(false);
  };

  return (
    <div className="font-sans pb-3">
      <SEO title="Youth Programs | Global Film Alliance" />

      {showRegForm ? (
        <div className="bg-[#F5F2EE] min-h-screen pt-12 pb-24">
          <div className="container-gfa max-w-3xl mx-auto px-4">
            <button 
              onClick={() => setShowRegForm(false)}
              className="mb-8 flex items-center gap-2 text-gfa-slate hover:text-black transition-colors font-bold uppercase tracking-widest text-sm"
            >
              <ArrowRight className="w-5 h-5 rotate-180"/> {isEn ? "Back to Programs" : "返回项目"}
            </button>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-2 text-center">
                {isEn ? "Program Registration" : "项目报名申请"}
              </h3>
              <p className="text-center text-gfa-slate mb-8">{isEn ? "Please fill out the detailed form below." : "请详细填写下方的报名表单。"}</p>
              
              <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Participant Information" : "营员信息"}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Child's Name" : "孩子姓名"} *</label>
                      <input required name="childName" value={formData.childName} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Age" : "年龄"} *</label>
                      <input required name="childAge" value={formData.childAge} onChange={handleInputChange} type="number" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "T-Shirt Size" : "T恤尺寸"}</label>
                      <select name="tshirtSize" value={formData.tshirtSize} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Filmmaking Experience" : "影视制作经验"}</label>
                      <select name="filmmakingExperience" value={formData.filmmakingExperience} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                        <option value="None">{isEn ? "None" : "无经验"}</option>
                        <option value="Beginner">{isEn ? "Beginner" : "初学者"}</option>
                        <option value="Intermediate">{isEn ? "Intermediate" : "有一定经验"}</option>
                        <option value="Advanced">{isEn ? "Advanced" : "丰富经验"}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Parent/Guardian Info" : "家长信息"}</h4>
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Parent/Guardian Name" : "家长/监护人姓名"} *</label>
                    <input required name="parentName" value={formData.parentName} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Phone Number" : "联系电话"} *</label>
                      <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Email Address" : "电子邮箱"} *</label>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Emergency & Health" : "紧急联系及健康信息"}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Emergency Contact Name" : "紧急联系人姓名"} *</label>
                      <input required name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Emergency Phone" : "紧急联系电话"} *</label>
                      <input required name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} type="tel" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Dietary Restrictions" : "饮食禁忌/过敏 (如无请填无)"}</label>
                      <input name="dietary" value={formData.dietary} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Medical Conditions" : "特殊医疗状况 (如无请填无)"}</label>
                      <input name="medical" value={formData.medical} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Select Program" : "选择报名项目"} *</label>
                  <select required name="program" value={formData.program} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                    <option value="Youth Film Summer Camp">{isEn ? "Youth Film Summer Camp" : "影视夏令营"}</option>
                    <option value="Dream Film Project">{isEn ? "Dream Film Project" : "电影制作项目"}</option>
                    <option value="Youth Short Drama Program">{isEn ? "Youth Short Drama Program" : "少儿微短剧拍摄"}</option>
                    <option value="On-Set Internship">{isEn ? "On-Set Internship" : "剧组实习"}</option>
                    <option value="GFA AI Content Creator">{isEn ? "GFA AI Content Creator" : "AI 内容创作者项目"}</option>
                  </select>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Uploads" : "上传文件"}</h4>
                  <p className="text-xs text-gfa-slate">{isEn ? "Please note: These files will need to be manually attached when your email client opens." : "注意：在您的邮件客户端打开后，请手动将这些文件作为附件添加到邮件中。"}</p>
                  <div>
                    <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Resume (optional)" : "个人简历 (选填)"}</label>
                    <label className="flex items-center gap-3 w-full bg-[#F5F2EE] border border-gray-200 border-dashed rounded-lg p-3 cursor-pointer hover:bg-[#EAE4D8] transition-colors">
                      <span className="px-4 py-1.5 bg-white text-[#C9A84C] font-semibold text-sm rounded-full shadow-sm">{isEn ? "Choose File" : "选择文件"}</span>
                      <span className="text-sm text-gfa-slate truncate flex-1">{resumeFileName || (isEn ? "No file chosen" : "未选择任何文件")}</span>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFileName(e.target.files?.[0]?.name || '')} />
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Images or Portfolio (Max 20MB)" : "照片或作品集 (最大20MB)"}</label>
                    <label className="flex items-center gap-3 w-full bg-[#F5F2EE] border border-gray-200 border-dashed rounded-lg p-3 cursor-pointer hover:bg-[#EAE4D8] transition-colors">
                      <span className="px-4 py-1.5 bg-white text-[#C9A84C] font-semibold text-sm rounded-full shadow-sm">{isEn ? "Choose Files" : "选择文件"}</span>
                      <span className="text-sm text-gfa-slate truncate flex-1">
                        {portfolioFileNames.length > 0 
                          ? (isEn ? `${portfolioFileNames.length} file(s) chosen` : `已选择 ${portfolioFileNames.length} 个文件`) 
                          : (isEn ? "No file chosen" : "未选择任何文件")}
                      </span>
                      <input type="file" multiple className="hidden" accept="image/*" onChange={(e) => setPortfolioFileNames(Array.from(e.target.files || []).map(f => f.name))} />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Any Questions or Notes?" : "其他疑问或备注 (选填)"}</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]"></textarea>
                </div>

                <div className="text-sm text-gfa-slate font-light mb-4 text-center">
                  * {isEn ? "By submitting this form, you acknowledge that you will be redirected to your email client to send the registration details to GFA. Don't forget to attach your files!" : "提交此表单将带您前往您的电子邮件客户端，向GFA发送您的详细报名信息。请不要忘记在邮件中附上您的文件！"}
                </div>

                <button type="submit" className="w-full bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-lg py-5 rounded-xl transition-all shadow-md hover:shadow-lg mt-4">
                  {isEn ? "Generate Request & Email Us" : "生成报名并邮件发送"}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
      {/* Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-5">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" 
            src="https://wsrv.nl/?url=i.ibb.co%2F0p2HWy3Z%2Ffilmmaking-in-classroom.jpg&w=1200&output=webp" 
            alt="Youth holding a clapperboard" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
           width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-2xl">
            {isEn ? "Planting the Seed of a" : "为下一代电影人"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "Filmmaker's Dream" : "种下梦想的种子"}</span>
          </h1>
        </div>
      </section>

      {/* Program 1: Summer Camp */}
      <section className="py-3 bg-white border-b border-gfa-border">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4 flex justify-center items-center gap-2">
              <Tent className="w-5 h-5"/> {isEn ? "Youth Film Summer Camp" : "影视夏令营"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
              {isEn ? "From First Frame to Premiere" : "从最初的画面到最终的首映"}
            </h3>
            <p className="text-lg md:text-xl font-serif font-light text-gfa-slate leading-relaxed max-w-3xl mx-auto italic">
              {isEn 
                ? "Picture day one: A child holds a professional camera for the first time, nervous but fully mesmerized. Now picture the final day: Sitting in a real theater, watching the audience's reaction to a film they directed themselves. That transformation is our summer camp." 
                : "第一天：从未摸过摄影机，紧张又期待。最后一天：坐在观众席，看着自己导演的短片第一次公映，感受观众的掌声。这不仅仅是一个夏令营，这是一条清晰的职业成长路径的起点。"}
            </p>
          </div>

          <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 flex flex-col lg:flex-row gap-3 mb-4">
            <div className="lg:w-1/3">
              <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">{isEn ? "2026 Camp Details" : "2026年营地信息"}</h4>
              <ul className="space-y-3 text-sm font-light text-gfa-slate">
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">Session 1</strong>
                    June 15–27, 2026
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">Session 2</strong>
                    July 20–Aug 1, 2026
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex justify-center items-center text-[#C9A84C] font-bold shrink-0 mt-0.5">@</span>
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{isEn ? "Ages" : "年龄"}</strong>
                    6–17 {isEn ? " years old" : "岁"}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{isEn ? "Location" : "地点"}</strong>{/* [中文内容待填入] */} Greater Los Angeles Area </div>
                </li>
                <li className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{isEn ? "Gear" : "使用设备"}</strong>
                    {isEn ? "Professional Blackmagic Design cameras used by Hollywood directors." : "使用Blackmagic Design专业设备（和好莱坞导演用同款）"}
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-2/3">
              <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">{isEn ? "Curriculum Modules" : "课程内容"}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "1. Screenwriting" : "1. 剧本创作"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Find the stories that only you can tell." : "找到只有你才能讲的故事"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "2. Cinematography" : "2. 摄影技术"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Learn to express emotion through lenses and lighting." : "学会用光和镜头表达情感"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "3. Acting" : "3. 表演指导"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Find your authentic self in front of the camera." : "在镜头前找到真实的自己"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "4. Post-Production" : "4. 剪辑后期"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Transform scattered clips into a complete narrative." : "把零散的素材变成完整作品"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "5. Directing" : "5. 导演技巧"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Learn how to lead a team to tell a unified story." : "学会带领团队讲述故事"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "6. The Premiere" : "6. 作品展映"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Experience the thrill of a live audience watching your work." : "第一次看到观众看自己的作品"}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Scholarship */}
          <div className="bg-gfa-inkBlack text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
             <div className="relative z-10 max-w-3xl mx-auto">
               <h4 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-[#C9A84C]">
                 {isEn ? "Talent shouldn't be limited by family income." : "才华，不应该被家庭收入所限制"}
               </h4>
               <p className="text-white/80 font-light mb-4">
                 {isEn 
                   ? "We provide full and partial scholarships so that passionate children, regardless of their financial background, can experience the magic of our camps." 
                   : "我们为什么提供奖学金：为了确保所有对电影充满热情的孩子都有机会参与。我们为低收入家庭提供全额或部分费用减免。"}
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button onClick={() => setShowRegForm(true)} className="bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">
                   {isEn ? "Register My Child" : "为我的孩子报名"}
                 </button>
                 <button className="border border-white hover:bg-white hover:text-gfa-inkBlack text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">
                   {isEn ? "Sponsor a Child" : "资助一个孩子"}
                 </button>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Program 2 & 3 */}
      <section className="py-3 bg-[#F5F2EE] border-b border-gfa-border">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            
            {/* Program 2: Dream Film Project */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="h-64 bg-gray-200 relative">
                <img loading="lazy"  src="https://wsrv.nl/?url=i.ibb.co%2FLXS8q7yn%2Fu8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-5253418c-4b1d-4d9b-8f51-219cc38fdef7-3.png&w=1200&output=webp" alt="Children's Film Project" className="w-full h-full object-cover"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <Film className="w-4 h-4"/>{/* [中文内容待填入] */} Children's Dream Film Project </div>
                  <h3 className="text-2xl font-bold font-serif">{isEn ? "Children's Dream Film Project" : "儿童梦想电影项目"}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-3 font-bold">
                  {isEn ? "We don't simulate—we actually produce and distribute. Every quarter, we produce a complete short film led entirely by youth." : "我们不模拟——我们真的制作，真的发行。每季度制作一部完整短片，全程由青少年主导。"}
                </p>
                <div className="bg-gray-50 border-l-4 border-[#C9A84C] p-6 rounded-r-xl mb-4 flex-grow">
                  <h4 className="font-bold text-gfa-inkBlack font-serif mb-4">{isEn ? "Case Study: 'Garden'" : "代表作：《花园 Garden》"}</h4>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FsJKd1kNv%2FMV5-BNWI3-Mj-I2-NDIt-Yj-Ix-Mi00-MGM4-LTlk-Mz-Qt-Mm-Rk-MDQ0-ZDRj-OWU5-Xk-Ey-Xk-Fqc-Gc-V1.jpg&w=1200&output=webp" alt="Film Poster 1" className="w-full h-auto rounded-lg shadow-md object-cover aspect-[2/3] hover:scale-105 transition-transform duration-300"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                    <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FbgKF8pwy%2FGemini-Generated-Image-jtsengjtsengjtse.png&w=1200&output=webp" alt="Film Poster 2" className="w-full h-auto rounded-lg shadow-md object-cover aspect-[2/3] hover:scale-105 transition-transform duration-300"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                  </div>
                  <ul className="text-sm font-light text-gfa-slate space-y-2 mb-4">
                    <li>• {isEn ? "Winner: Best Family Film at Golden State Film Festival" : "Golden State Film Festival 最佳家庭电影"}</li>
                  </ul>
                </div>
                <div className="flex flex-col xl:flex-row gap-3">
                  <button className="bg-gfa-inkBlack hover:bg-black text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Enroll for Next Film" : "让我的孩子参与下一部"}
                  </button>
                  <button className="border border-gfa-border hover:bg-gray-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Co-Produce" : "联合出品"}
                  </button>
                </div>
              </div>
            </div>

            {/* Program 3: Special Needs */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="h-64 bg-gray-200 relative">
                <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FycRFxBZ4%2FChat-GPT-Image-2026-3-23-12-23-04.png&w=1200&output=webp" alt="Film Therapy" className="w-full h-full object-cover"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <HeartHandshake className="w-4 h-4"/>{/* [中文内容待填入] */} Film Therapy </div>
                  <h3 className="text-2xl font-bold font-serif">{isEn ? "Film Therapy for Special Needs Youth" : "特殊需求儿童计划"}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-3 font-serif italic text-lg text-gfa-inkBlack">
                  {isEn ? "\"Film is just another language. For children with special needs, it might be their most powerful one.\"" : "“电影，是另一种语言。对于有特殊需求的孩子，它可能是最有力的语言。”"}
                </p>
                <img loading="lazy" 
                  src="https://wsrv.nl/?url=i.ibb.co%2FKcNpRyb4%2FGemini-Generated-Image-2fx58a2fx58a2fx5-1.png&w=1200&output=webp" 
                  alt="Film Therapy Program" 
                  className="w-full h-auto rounded-xl shadow-sm mb-3 object-cover"
                 width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                <ul className="text-sm font-light text-gfa-slate space-y-4 mb-4 flex-grow">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {isEn ? "Filmmaking therapy designed specifically for youth with autism, depression, and anxiety." : "专为自闭症、抑郁症、焦虑症儿童设计的影视创作疗愈课程"}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {isEn ? "Helping children find self-expression and connection through acting and camerawork." : "通过拍摄和表演帮助孩子表达自我"}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {isEn ? "Instructors with professional backgrounds in psychological counseling." : "有专业心理辅导背景的导师团队"}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {isEn ? "Small group settings ensuring a 1:3 teacher-to-student ratio." : "小班制，1:3师生比例"}
                  </li>
                </ul>
                <div className="flex flex-col xl:flex-row gap-3">
                  <button className="bg-gfa-inkBlack hover:bg-black text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Learn More" : "了解详情"}
                  </button>
                  <button className="border border-gfa-border hover:bg-gray-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Book Consultation" : "预约咨询"}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program 4: AI Filmmaking */}
      <section className="py-3 bg-white">
        <div className="container-gfa max-w-5xl mx-auto px-4 text-center">
           <div className="inline-block px-4 py-1 border border-gfa-border text-gfa-inkBlack text-xs font-bold uppercase tracking-widest rounded-full mb-3">
             {isEn ? "Innovation Track" : "前沿科技"}
           </div>
           <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-3">
             {isEn ? "AI Filmmaking Training" : "AI影视制作培训"}
           </h2>
           <p className="text-xl md:text-2xl font-light text-gfa-slate mb-4 font-serif italic max-w-3xl mx-auto">
             {isEn 
               ? "As AI revolutionizes the film industry, we ensure the next generation doesn't fall behind. They will lead the paradigm shift." 
               : "当AI正在改变整个影视工业，我们不让下一代落在时代后面。"}
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-left mb-4">
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{isEn ? "AI Screenwriting" : "AI剧本创作"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {isEn ? "Mastering narrative generation workflows using ChatGPT and Claude." : "（ChatGPT、Claude等工具的创作流程）"}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{isEn ? "Visual Gen & VFX" : "AI视觉生成与特效"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {isEn ? "Creating mind-bending visuals with Midjourney, Runway, and Sora." : "（Midjourney、Runway、Sora等）"}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{isEn ? "AI Editing" : "AI辅助剪辑"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {isEn ? "Speeding up post-production using Descript and Adobe AI." : "（Descript、Adobe AI等）"}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{isEn ? "AI Producing" : "AI制片与项目管理"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {isEn ? "Automating breakdowns and scheduling with intelligent production tools." : "自动化剧本拆解与拍摄计划制定"}
               </p>
             </div>
           </div>

           <button onClick={() => setShowRegForm(true)} className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg inline-flex items-center gap-2">
             {isEn ? "Join the Waitlist" : "加入等候名单"} <ArrowRight className="w-4 h-4"/>
           </button>
        </div>
      </section>


      {/* Empathy Section */}
      <section className="py-5 bg-white border-b border-gfa-border" id="family-guide">
        <div className="container-gfa max-w-3xl mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-5 text-center">
             {isEn ? "Family Career Guide" : "家长指南"}
           </h2>
           <p className="text-xl md:text-2xl font-light text-gfa-slate leading-relaxed font-serif">
             {isEn 
               ? "We understand the worries many parents face: The film industry is fiercely competitive—is it truly a viable career path? When should my child start preparing? How much is this going to cost us? What specific roles are actually out there? This guide was designed precisely to answer your questions and replace uncertainty with a clear roadmap." 
               : "我们知道很多家长的担忧：影视行业竞争激烈，这条路真的可以走吗？孩子应该从什么时候开始准备？我们需要花多少钱？有什么具体的方向可以选择？这部分内容专门为您解答这些问题。"}
           </p>
        </div>
      </section>

      {/* Industry Paths */}
      <section className="py-3 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-3">
              {isEn ? "Understanding Industry Roles" : "影视行业职业路径说明"}
            </h2>
            <p className="text-gfa-slate font-light mb-4 max-w-2xl mx-auto">
              {isEn ? "It's not just 'being a director'. The industry offers a vast array of specialized, highly-skilled professions." : "不仅限于是制片人或者导演，影视行业拥有各种各样专业化、对技术要求极高的职业分支。"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Creative" : "创作类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "Director, Screenwriter, Cinematographer" : "导演、编剧、摄影师"}<br/><br/>
                  {isEn ? "The visionaries who craft the emotional core and visual style of the story." : "塑造故事的情感核心和视觉风格的远见者。"}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Production" : "制作类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "Producer, Production Designer, Editor" : "制片人、美术指导、剪辑师"}<br/><br/>
                  {isEn ? "The master organizers and builders who bring the script from paper to reality." : "将剧本从纸面转化为现实的组织者和执行领袖。"}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Technical" : "技术类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "VFX Artist, Sound Designer, Colorist" : "特效师、声音设计、调色师"}<br/><br/>
                  {isEn ? "The highly specialized experts who perfect the immersive experience." : "完善沉浸式视听体验的高精尖技术专家。"}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Emerging (Tech)" : "新兴类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "AI Filmmaker, Interactive Content Dir." : "AI影视创作者、内容总监"}<br/><br/>
                  {isEn ? "The pioneers utilizing artificial intelligence to revolutionize pipelines." : "利用人工智能重塑工作流的科技前沿开拓者。"}
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Business" : "商业类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "Distribution, Marketing, IP Law" : "发行、营销、版权律师"}<br/><br/>
                  {isEn ? "The strategists who ensure the art makes money and reaches the audience." : "确保作品能够盈利并触达观众的商业策略师。"}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Age Timeline */}
      <section className="py-3 bg-white border-y border-gfa-border">
         <div className="container-gfa max-w-4xl mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">
                {isEn ? "Development Strategy by Age" : "按年龄的培养建议"}
              </h2>
            </div>

            <div className="space-y-3">
               {/* 6-10 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">6-10</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <Map className="text-[#C9A84C] w-6 h-6"/> {isEn ? "Exploration Phase" : "探索期"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "Goal:" : "培养目标："}</strong>
                      {isEn ? "Love for cinema, keen observation, boundless creativity." : "爱上电影、培养观察力与无边的创造力"}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{isEn ? "GFA Provides:" : "GFA提供："}</strong>
                      {isEn ? "Summer Camps (Foundational), Community Screenings." : "夏令营（基础班）、社区电影放映"}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "What Parents Can Do:" : "家长可以做："}</strong>
                      {isEn ? "Take them to diverse films, encourage them to tell bedtime stories, give them a simple camera to play with." : "多带孩子看不同类型的电影，鼓励他们讲故事，给他们一个简单的相机玩耍。"}
                    </div>
                  </div>
               </div>

               {/* 11-14 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">11-14</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <Compass className="text-[#C9A84C] w-6 h-6"/> {isEn ? "Development Phase" : "发展期"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "Goal:" : "培养目标："}</strong>
                      {isEn ? "Master basic narrative creation; successfully complete their first real project." : "学会基本叙事创作，成功完成第一个真正的作品。"}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{isEn ? "GFA Provides:" : "GFA提供："}</strong>
                      {isEn ? "Summer Camps (Advanced), Children's Film Project, Talent Competitions." : "夏令营（进阶班）、儿童梦想电影项目、才艺大赛。"}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "What Parents Can Do:" : "家长可以做："}</strong>
                      {isEn ? "Support them shooting videos on a smartphone, encourage entering local contests, validate their artistic attempts." : "支持孩子用手机拍短视频，鼓励参加比赛，肯定他们的艺术尝试。"}
                    </div>
                  </div>
               </div>

               {/* 15-18 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">15-18</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <BookOpen className="text-[#C9A84C] w-6 h-6"/> {isEn ? "Specialization Phase" : "定向期"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "Goal:" : "培养目标："}</strong>
                      {isEn ? "Build a robust college portfolio, narrow down a specific career track." : "建立有竞争力的大学申请作品集，确定具体的职业方向。"}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{isEn ? "GFA Provides:" : "GFA提供："}</strong>
                      {isEn ? "Hollywood Career Training, AI Filmmaking Courses, Golden Feather Awards submissions." : "好莱坞职业培训、AI影视课程、申请金羽奖评选。"}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "What Parents Can Do:" : "家长可以做："}</strong>
                      {isEn ? "Support their choice of a related college major, help them start networking, trust their focus." : "支持孩子选择相关的大学专业，帮助他们建立初步的行业联系，信任他们的专注。"}
                    </div>
                  </div>
               </div>

               {/* College / Grad */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-gfa-inkBlack text-white font-bold font-serif text-sm tracking-widest uppercase px-6 py-3 rounded-bl-3xl rounded-tr-3xl">{/* [中文内容待填入] */} Grad </div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <GraduationCap className="text-gfa-inkBlack w-6 h-6"/> {isEn ? "Professional Launcher" : "大学 / 毕业阶段"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{isEn ? "GFA Provides:" : "GFA提供："}</strong>
                      {isEn ? "Filmmaker Career Support, industry mentorship network, free professional gear rentals." : "新晋电影人就业扶持、行业导师网络推荐、免费专业设备借用。"}
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-3 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4">
           <div className="text-center mb-4">
             <h2 className="text-3xl font-bold font-serif text-[#C9A84C]">{isEn ? "Frequently Asked Questions" : "家长常见问题 (FAQ)"}</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                      className="w-full px-6 py-5 text-left font-bold flex justify-between items-center focus:outline-none hover:bg-white/10 transition-colors"
                      onClick={() => toggleFaq(idx)}
                    >
                       <span className="pr-8">{faq.q}</span>
                       <ChevronDown className={`w-5 h-5 text-[#C9A84C] shrink-0 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 text-white/70 font-light text-sm overflow-hidden transition-all duration-300 ${openFaq === idx ? 'pb-3 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="pt-2 border-t border-white/10 mt-2">{faq.a}</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-3 bg-white text-center mb-10">
         <div className="container-gfa px-4">
           <div className="w-20 h-20 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C9A84C]">
             <PhoneCall className="w-8 h-8" />
           </div>
           <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-3">
             {isEn ? "Not Sure Where to Start?" : "不确定从哪里开始？"}<br/>
             <span className="text-[#C9A84C]">{isEn ? "Talk to us." : "和我们聊聊。"}</span>
           </h2>
           <p className="text-lg text-gfa-slate font-light max-w-2xl mx-auto mb-5">
             {isEn ? "The GFA team offers free, one-on-one parent consultations to help you understand the most suitable path for your talented child." : "GFA团队提供免费的一对一家长咨询，帮助您了解最适合孩子的艺术成长路径。"}
           </p>
           <button onClick={() => {window.location.href='/contact'}} className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-xl">
             {isEn ? "Book Free Consultation" : "预约免费咨询"}
           </button>
         </div>
      </section>
        </>
      )}
    </div>
  );
};
export default YouthPrograms;
