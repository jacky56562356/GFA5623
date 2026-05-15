import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Tent, Film, HeartHandshake, Sparkles, Calendar, MapPin, Video, ArrowRight } from 'lucide-react';

const YouthPrograms: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  const [showRegForm, setShowRegForm] = useState(false);
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
          <img fetchPriority="high" 
            src="https://wsrv.nl/?url=i.ibb.co%2F0p2HWy3Z%2Ffilmmaking-in-classroom.jpg&w=1200&output=webp" 
            alt="Youth holding a clapperboard" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
           width="1200" height="800" />
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
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{isEn ? "Location" : "地点"}</strong>
                    Greater Los Angeles Area
                  </div>
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
                <img loading="lazy"  src="https://wsrv.nl/?url=i.ibb.co%2FLXS8q7yn%2Fu8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-5253418c-4b1d-4d9b-8f51-219cc38fdef7-3.png&w=1200&output=webp" alt="Children's Film Project" className="w-full h-full object-cover"  width="1200" height="800" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <Film className="w-4 h-4"/> Children's Dream Film Project
                  </div>
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
                    <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FsJKd1kNv%2FMV5-BNWI3-Mj-I2-NDIt-Yj-Ix-Mi00-MGM4-LTlk-Mz-Qt-Mm-Rk-MDQ0-ZDRj-OWU5-Xk-Ey-Xk-Fqc-Gc-V1.jpg&w=1200&output=webp" alt="Film Poster 1" className="w-full h-auto rounded-lg shadow-md object-cover aspect-[2/3] hover:scale-105 transition-transform duration-300"  width="1200" height="800" />
                    <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FbgKF8pwy%2FGemini-Generated-Image-jtsengjtsengjtse.png&w=1200&output=webp" alt="Film Poster 2" className="w-full h-auto rounded-lg shadow-md object-cover aspect-[2/3] hover:scale-105 transition-transform duration-300"  width="1200" height="800" />
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
                <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FycRFxBZ4%2FChat-GPT-Image-2026-3-23-12-23-04.png&w=1200&output=webp" alt="Film Therapy" className="w-full h-full object-cover"  width="1200" height="800" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <HeartHandshake className="w-4 h-4"/> Film Therapy
                  </div>
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
                 width="1200" height="800" />
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


        </>
      )}
    </div>
  );
};
export default YouthPrograms;
