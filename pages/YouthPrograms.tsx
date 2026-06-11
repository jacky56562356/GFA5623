import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { 
  Tent, Film, HeartHandshake, Sparkles, Calendar, MapPin, 
  Video, ArrowRight, ChevronDown, Map, Compass, BookOpen, 
  GraduationCap, PhoneCall, ShieldCheck, CheckCircle2, Package, Car, AlertTriangle
} from 'lucide-react';
import { db } from '../lib/firebase.ts';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { YOUTH_LANG_DATA, CAMP_LIST, PRECAUTIONS_DATA } from './youthData.ts';

const YouthPrograms: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale !== 'zh';
  
  // States
  const [showRegForm, setShowRegForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Form submission and success states
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [resumeFileName, setResumeFileName] = useState('');
  const [portfolioFileNames, setPortfolioFileNames] = useState<string[]>([]);
  
  // Form data state
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    program: 'GFA Hollywood Director & Creator Camp',
    emergencyContact: '',
    emergencyPhone: '',
    dietary: '',
    medical: '',
    filmmakingExperience: 'None',
    tshirtSize: 'M',
    message: ''
  });

  // Extract translation dictionaries
  const content = isEn ? YOUTH_LANG_DATA.en : YOUTH_LANG_DATA.zh;
  const precautions = isEn ? PRECAUTIONS_DATA.en : PRECAUTIONS_DATA.zh;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Trigger submission to Firebase Firestore
  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    
    try {
      const payload = {
        parentName: formData.parentName,
        childName: formData.childName,
        childAge: String(formData.childAge),
        email: formData.email,
        phone: formData.phone,
        program: formData.program,
        emergencyContact: formData.emergencyContact,
        emergencyPhone: formData.emergencyPhone,
        dietary: formData.dietary || '',
        medical: formData.medical || '',
        filmmakingExperience: formData.filmmakingExperience,
        tshirtSize: formData.tshirtSize,
        message: formData.message || '',
        status: 'pending',
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'youth_camp_registrations'), payload);
      
      // Keep track of the submitter's email to show on receipt
      setSubmittedEmail(formData.email);
      setSubmissionSuccess(true);
      
      // Reset form fields
      setFormData({
        parentName: '',
        childName: '',
        childAge: '',
        email: '',
        phone: '',
        program: 'GFA Hollywood Director & Creator Camp',
        emergencyContact: '',
        emergencyPhone: '',
        dietary: '',
        medical: '',
        filmmakingExperience: 'None',
        tshirtSize: 'M',
        message: ''
      });
      setResumeFileName('');
      setPortfolioFileNames([]);
    } catch (err: any) {
      console.error("Failed to commit registration record to secure Firestore:", err);
      setErrorMsg(err?.message || "Secure system communication error");
    } finally {
      setSubmitting(false);
    }
  };

  // Pre-select program options when a summer camp button is clicked
  const handleStartRegistration = (programName: string) => {
    setFormData(prev => ({ ...prev, program: programName }));
    setSubmissionSuccess(false);
    setShowRegForm(true);
    // Smooth scroll to top of form container
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const faqs = isEn ? [
    { q: "My child loves film, but I'm not sure if it's a good career path?", a: "The entertainment industry is one of the largest export industries in the US, with a massive demand for diverse talent ranging from creative to technical and business roles. With proper planning, it offers highly viable and lucrative career paths." },
    { q: "Is studying film very expensive?", a: "It can be, but it doesn't have to be. GFA specifically mitigates these costs by providing free gear, mentorship, and extensive scholarship programs so talent matters more than money." },
    { q: "What should my child major in for college?", a: "It depends completely on their interest. They don't have to major in 'Film Production'. Many successful producers majored in Business; many great cinematographers studied Physics or Fine Arts. We offer consultations to help figure this out." },
    { q: "As a Chinese family, how can we help our child succeed in the US industry?", a: "By understanding the US system early. Hollywood relies entirely on union structures, verified credits, and professional networks. GFA acts as a bridge, giving Chinese families the exact roadmap required to build an authentic Hollywood career." },
    { q: "How much do GFA's programs cost? Is there financial aid?", a: "Cost varies by program, but as a nonprofit, profitability is not our goal. We offer robust scholarships—up to 100% coverage—for low and middle-income families." },
    { q: "My child has absolutely no experience. Can they start with GFA?", a: "Yes. Our youth programs assume zero prior experience. We focus purely on kindling their passion and creativity in a pressure-free environment." }
  ] : [
    { q: "我的孩子热爱电影，但我不确定这是否是一条好的职业道路？", a: "娱乐影视行业是美国最大的出口支柱产业之一，不仅需要创意人才，对技术、数字科技、制片管理及IP版权也有巨大需求。通过系统性的规划，这是一条富有潜力且回报丰厚的上升通道。" },
    { q: "学习电影摄制是否非常昂贵？", a: "传统的器材租赁与拍摄场地成本确实较高。但GFA通过非营利组织架构，免费提供好莱坞顶尖摄影机与片场支持，并向符合家庭收入标准的学员发放补助金，确保孩子的才华不受经济条件限制。" },
    { q: "孩子升大学时应该选择什么专业？", a: "专业选择取决于孩子的个人发展定位。并不一定局限于“电影制作”本科。许多知名制片人拥有商科学位，优秀的电影摄影师曾深造于物理学、电气工程或美术学。GFA提供 1对1 升学路线规划服务。" },
    { q: "华人家庭如何更好地协助孩子融入好莱坞的核心影视工业体系？", a: "必须要尽早熟悉好莱坞的演艺工会、学分绩点与署名权体系。GFA根植于加州本地，与各主管工会、知名电影节、顶尖名校紧密沟通，为华人家庭提供具有权威、合规性的好莱坞职业规划路线图。" },
    { q: "GFA 的夏令营和青少年项目学费如何？有助学金申请条件吗？", a: "各夏令营由于配置的专业级设备和特邀导师班底，学费有所不同。作为非营利组织，我们提供全面的财务补助计划（满额/半额奖学金），旨在帮扶有志于影视创作的中低收入阶层家庭。" },
    { q: "完全零基础的孩子可以参加夏令营并跟上进度吗？", a: "当然可以。我们的探影者创意短片夏令营以及导演营，均假设学员没有过往经验。我们将通过极具趣味性的分组协作、极简的图像化思维，带领孩子快速找到控制摄影镜头与画面编排的乐趣。" }
  ];

  return (
    <div className="font-sans pb-3 bg-gfa-warmWhite">
      <SEO 
        title={isEn ? "Youth Film Programs & Summer Camps | GFA" : "青少年电影教育计划及好莱坞电影夏令营 | GFA"} 
        description={isEn 
          ? "GFA offers hands-on youth film camps, training, and support for ages 6-17 in Los Angeles. Direct and edit real cinema shorts using pro cameras. 501(c)(3) nonprofit scholarships available." 
          : "GFA面向 6-17 岁青少年提供好莱坞高规格实机电影夏令营与编导演训练，使用名大片同款RED、Blackmagic摄影机，成果走上真实影院大银幕。提供501(c)(3)非营利助学金。"}
      />

      {/* Hero Header Banner */}
      <section className="relative h-[48vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            fetchPriority="high" 
            src="https://wsrv.nl/?url=i.ibb.co%2F0p2HWy3Z%2Ffilmmaking-in-classroom.jpg&w=1200&output=webp" 
            alt="Youth Filmmaking" 
            className="w-full h-full object-cover opacity-35 mix-blend-luminosity grayscale" 
            width="1200" height="800" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/70 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto mt-6 animate-fade-in">
          <span className="inline-block bg-[#C9A84C]/20 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4">
            {content.hero.tag}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
            {content.hero.title}<br/>
            <span className="text-[#C9A84C] relative inline-block">
              {content.hero.highlight}
              <span className="absolute left-0 right-0 bottom-1 h-1 bg-[#C9A84C]/30 rounded"></span>
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            {content.hero.desc}
          </p>
        </div>
      </section>

      {showRegForm ? (
        /* ================= REGISTRATION FORM OVERLAY ================= */
        <div className="bg-[#F5F2EE] min-h-screen py-12">
          <div className="container-gfa max-w-3xl mx-auto px-4">
            <button 
              onClick={() => { setShowRegForm(false); setSubmissionSuccess(false); }}
              className="mb-8 flex items-center gap-2 text-gfa-slate hover:text-black transition-colors font-bold uppercase tracking-widest text-xs border border-gfa-border bg-white px-5 py-2.5 rounded-full shadow-sm"
            >
              <ArrowRight className="w-4 h-4 rotate-180"/> {content.form.backBtn}
            </button>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-100">
              {submissionSuccess ? (
                /* Success Receipt View */
                <div className="text-center py-10 space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 border border-green-200">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack">
                    {content.form.successTitle}
                  </h3>
                  <div className="max-w-md mx-auto space-y-4">
                    <p className="text-gfa-slate text-sm leading-relaxed">
                      {content.form.successDesc}
                    </p>
                    <div className="p-4 bg-[#F5F2EE] rounded-2xl border border-gray-100 text-xs font-semibold text-gfa-slate">
                      {content.form.successDetails} <span className="text-black font-serif underline">{submittedEmail}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setShowRegForm(false); setSubmissionSuccess(false); }}
                    className="mt-6 bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded-full transition-all"
                  >
                    {isEn ? "Done" : "完成"}
                  </button>
                </div>
              ) : (
                /* Main Form View */
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-2">
                      {content.form.title}
                    </h3>
                    <p className="text-sm text-gfa-slate font-light">{content.form.subtitle}</p>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs mb-6 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <div>
                        <strong>Submission Error:</strong> {errorMsg}
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                    {/* Participant Info */}
                    <div className="bg-slate-50/50 p-6 rounded-2xl space-y-4 border border-slate-100">
                      <h4 className="font-bold text-[#C9A84C] text-xs uppercase tracking-widest border-b border-gray-200 pb-2">
                        {content.form.personalSec}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.childName} *</label>
                          <input required name="childName" value={formData.childName} onChange={handleInputChange} type="text" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/5 bg-white" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.childAge} *</label>
                          <input required name="childAge" value={formData.childAge} onChange={handleInputChange} type="number" min="5" max="20" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/5 bg-white" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.tshirtSize}</label>
                          <select name="tshirtSize" value={formData.tshirtSize} onChange={handleInputChange} className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] bg-white">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.experience}</label>
                          <select name="filmmakingExperience" value={formData.filmmakingExperience} onChange={handleInputChange} className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] bg-white">
                            <option value="None">{content.form.experienceOpts.None}</option>
                            <option value="Beginner">{content.form.experienceOpts.Beginner}</option>
                            <option value="Intermediate">{content.form.experienceOpts.Intermediate}</option>
                            <option value="Advanced">{content.form.experienceOpts.Advanced}</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Parents Contact */}
                    <div className="bg-slate-50/50 p-6 rounded-2xl space-y-4 border border-slate-100">
                      <h4 className="font-bold text-[#C9A84C] text-xs uppercase tracking-widest border-b border-gray-200 pb-2">
                        {content.form.parentSec}
                      </h4>
                      <div>
                        <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.parentName} *</label>
                        <input required name="parentName" value={formData.parentName} onChange={handleInputChange} type="text" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/5 bg-white" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.phone} *</label>
                          <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/5 bg-white" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.email} *</label>
                          <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/5 bg-white" />
                        </div>
                      </div>
                    </div>

                    {/* Emergency Contacts */}
                    <div className="bg-slate-50/50 p-6 rounded-2xl space-y-4 border border-slate-100">
                      <h4 className="font-bold text-[#C9A84C] text-xs uppercase tracking-widest border-b border-gray-200 pb-2">
                        {content.form.emergencySec}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.emergencyContactName} *</label>
                          <input required name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} type="text" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/5 bg-white" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.emergencyPhone} *</label>
                          <input required name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} type="tel" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/5 bg-white" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.dietary}</label>
                          <input name="dietary" value={formData.dietary} onChange={handleInputChange} type="text" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] bg-white text-xs" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.medical}</label>
                          <input name="medical" value={formData.medical} onChange={handleInputChange} type="text" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] bg-white text-xs" />
                        </div>
                      </div>
                    </div>

                    {/* Select Camp Track */}
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1.5">{content.form.selectCamp} *</label>
                      <select required name="program" value={formData.program} onChange={handleInputChange} className="w-full px-4 py-3 text-sm font-bold rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] bg-white cursor-pointer shadow-sm">
                        <option value="GFA Hollywood Director & Creator Camp">GFA Hollywood Director & Creator Camp (Ages 11-17)</option>
                        <option value="Junior Film Explorers Creative Workshop">Junior Film Explorers Creative Workshop (Ages 6-10)</option>
                        <option value="Sci-Fi & AI Digital Filmmaking Camp">Sci-Fi & AI Digital Filmmaking Camp (Ages 12-17)</option>
                        <option value="Dream Film Project">Dream Film Project (Long Term Crew)</option>
                        <option value="Film Therapy for Special Needs Youth">Film Therapy for Special Needs Youth</option>
                      </select>
                    </div>

                    {/* Supporting files (Optional) */}
                    <div className="bg-slate-50/50 p-6 rounded-2xl space-y-4 border border-slate-100">
                      <h4 className="font-bold text-[#C9A84C] text-xs uppercase tracking-widest border-b border-gray-200 pb-2">
                        {content.form.uploadSec}
                      </h4>
                      <p className="text-[11px] text-gfa-slate leading-relaxed">{content.form.fileNote}</p>
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-gfa-slate mb-1">{"Resume / CV"}</label>
                          <label className="flex items-center gap-3 w-full bg-white border border-gray-200 border-dashed rounded-xl p-3 cursor-pointer hover:bg-slate-50">
                            <span className="px-3.5 py-1.5 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 text-[#C9A84C] font-bold text-xs rounded-lg transition-colors whitespace-nowrap">{isEn ? "Select File" : "选择文件"}</span>
                            <span className="text-xs text-gfa-slate truncate flex-1">{resumeFileName || (isEn ? "No file selected" : "未选中文件")}</span>
                            <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFileName(e.target.files?.[0]?.name || '')} />
                          </label>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-gfa-slate mb-1">{"Artwork Portfolio Link or Images"}</label>
                          <label className="flex items-center gap-3 w-full bg-white border border-gray-200 border-dashed rounded-xl p-3 cursor-pointer hover:bg-slate-50">
                            <span className="px-3.5 py-1.5 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 text-[#C9A84C] font-bold text-xs rounded-lg transition-colors whitespace-nowrap">{isEn ? "Select Images" : "选择多张图片"}</span>
                            <span className="text-xs text-gfa-slate truncate flex-1">
                              {portfolioFileNames.length > 0 
                                ? (`${portfolioFileNames.length} file(s) chosen`) 
                                : (isEn ? "No image loaded" : "未放入图片")}
                            </span>
                            <input type="file" multiple className="hidden" accept="image/*" onChange={(e) => setPortfolioFileNames(Array.from(e.target.files || []).map(f => f.name))} />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{content.form.notes}</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C] bg-white" placeholder={isEn ? "Ask any queries or describe special conditions..." : "如有任何班次、优惠、食宿需求，请在此注明..."}></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={submitting}
                      className="w-full bg-[#C9A84C] hover:bg-[#b09241] disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-bold uppercase tracking-widest text-sm py-5 rounded-xl transition-all shadow-md hover:shadow-lg mt-4 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          {content.form.submitting}
                        </>
                      ) : (
                        content.form.submitBtn
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* ================= MAIN PROGRAMS OVERVIEW ================= */
        <>
          {/* Summer Camp Promotion & Benefits Section (宣传亮点) */}
          <section className="py-12 bg-white">
            <div className="container-gfa max-w-6xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-[#C9A84C] text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.3em]">
                  {content.promo.title}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mt-2 mb-4 leading-tight">
                  {content.promo.subtitle}
                </h2>
                <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-4 rounded"></div>
                <p className="text-sm md:text-base text-gfa-slate leading-relaxed font-light">
                  {content.promo.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.promo.features.map((feature, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:border-[#C9A84C] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-125"></div>
                    <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-4 text-[#C9A84C]">
                      {idx === 0 && <Video className="w-5 h-5" />}
                      {idx === 1 && <GraduationCap className="w-5 h-5" />}
                      {idx === 2 && <Film className="w-5 h-5" />}
                      {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                    </div>
                    <h4 className="font-bold font-serif text-gfa-inkBlack text-base mb-2">{feature.title}</h4>
                    <p className="text-xs text-gfa-slate leading-relaxed font-light">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Summer Camps Grid Catalogue Section (精品夏令营课程) */}
          <section className="py-12 bg-[#F5F2EE] border-y border-gfa-border">
            <div className="container-gfa max-w-6xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-[#C9A84C] text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                  <Tent className="w-4 h-4" /> {content.campsSection.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mt-2 mb-2">
                  {content.campsSection.subtitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {CAMP_LIST.map((camp) => (
                  <div key={camp.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
                    {/* Camp Image Graphic */}
                    <div className="h-48 relative overflow-hidden bg-gray-200">
                      <img 
                        src={camp.imageUrl} 
                        alt={camp.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy" 
                        width="640" 
                        height="400"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4 z-10 flex gap-2">
                        <span className="bg-[#C9A84C] text-black text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                          {content.campsSection.ageLabel} {camp.age}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-red-500 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> {camp.spots} {content.campsSection.spotsLabel}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 space-y-5 flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold font-serif text-gfa-inkBlack leading-tight">
                          {isEn ? camp.title : (
                            camp.id === 'camp_director' ? '好莱坞导演与创作者实拍夏令营' : 
                            camp.id === 'camp_explorer' ? '探影者少儿创意短片启蒙夏令营' : '科幻与创意科技电影夏令营'
                          )}
                        </h3>

                        <p className="text-xs text-gfa-slate font-light leading-relaxed">
                          {isEn ? camp.description : (
                            camp.id === 'camp_director' ? '我们最核心的旗舰级电影摄制营。学员将在好莱坞片场标准下轮换担任 导演、摄影、灯光、演员 与剪辑。在两周时间内，亲手将原创剧本拍摄制作成一部高质量商业微电影。' :
                            camp.id === 'camp_explorer' ? '专为富有天马行空想象力的低龄少儿设计的创意影视营。抛弃枯燥理论，通过绿幕游戏、泥塑定格动画、以及智能手机创意拍摄，培养孩子的视觉探索力与团队配合。' : '专为青少年设计的科幻创意营！通过将趣味表演、绿幕交互与数字化艺术工具融为一体，带领孩子们安全、启发性地探索未来的电影魔法，培养想象力、协作与表达能力。'
                          )}
                        </p>

                        <div className="pt-4 border-t border-gray-100 space-y-2.5 text-xs text-gfa-slate">
                          <div className="flex items-start gap-2">
                            <Calendar className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                            <div><strong className="text-black font-semibold">{content.campsSection.datesLabel}:</strong> {isEn ? camp.dates : (
                              camp.id === 'camp_director' ? '第一期: 2026年6月15日-27日 | 第二期: 7月20日-8月1日' :
                              camp.id === 'camp_explorer' ? 'A期: 2026年6月29日-7月3日 | B期: 8月3日-7月7日' : '全一期: 2026年7月6日-18日'
                            )}</div>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                            <div><strong className="text-black font-semibold">{content.campsSection.locationLabel}:</strong> {isEn ? camp.location : (
                              camp.id === 'camp_director' ? '大洛杉矶地区（好莱坞校区及摄影基地）' :
                              camp.id === 'camp_explorer' ? 'GFA洛杉矶青少年影视中心及数字绿幕基地' : 'GFA高科技视觉交互实验室及虚拟影视片场'
                            )}</div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Video className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                            <div><strong className="text-black font-semibold">{content.campsSection.gearLabel}:</strong> {camp.gear}</div>
                          </div>
                        </div>

                        {/* Course Schedule Curriculum breakdown */}
                        <div className="mt-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                          <strong className="text-[10px] text-gfa-inkBlack uppercase tracking-widest block font-bold mb-2">
                            {isEn ? "Curriculum Stages" : "每天大纲规划"}
                          </strong>
                          {camp.curriculum.map((cur, ci) => (
                            <div key={ci} className="text-xs">
                              <span className="font-semibold text-black">{isEn ? cur.step : (
                                cur.step.includes("Days 1-3") || cur.step.includes("Day 1") ? (isEn ? cur.step : "第一阶段") :
                                cur.step.includes("Days 4-5") || cur.step.includes("Day 2") ? "第二阶段" :
                                cur.step.includes("Days 6-9") || cur.step.includes("Day 3") ? "第三阶段" : "收尾阶段"
                              )}:</span> <span className="text-gfa-slate font-light">{isEn ? cur.detail : (
                                camp.id === 'camp_director' ? (
                                  ci === 0 ? '剧本写作大师课与角色工坊。每名学员独立完成剧本。' :
                                  ci === 1 ? '创作者创投会与剧组分工。选拔优秀剧本进入实拍。' :
                                  ci === 2 ? '片场实机拍摄演练。配备专业灯光与大型摄影组。' : '达芬奇色彩分级、配乐、ADR录音及整片导出。'
                                ) : camp.id === 'camp_explorer' ? (
                                  ci === 0 ? '镜头魔法与故事板。大与小的透视及视觉错觉拼图。' :
                                  ci === 1 ? '无声演艺与配音录制。设计自己代表的动漫声效。' :
                                  ci === 2 ? '橡皮泥分镜定格。一帧一帧粘出心中的主角。' :
                                  ci === 3 ? '科幻抠像大作战：利用数字绿幕一键穿梭太空。' : '全片粗剪，视频名字设计，全家温馨首映礼。'
                                ) : (
                                  ci === 0 ? '科幻世界观建立与异星角色绘制。学习趣味故事创作，在 iPad 上绘制异星角色。' :
                                  ci === 1 ? '创意美术与配乐制作。动手制作电影背景，为自己的科幻片录制科技音效。' :
                                  ci === 2 ? '绿色屏幕大冒险。穿上太空戏服，在绿色大背景前进行真人场景模拟与拍摄。' : '特效编辑大师。把真人影像和奇妙的太空背景合二为一，制作酷炫的最终电影作品！'
                                )
                              )}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 pt-0 border-t border-gray-100 mt-4 bg-slate-50/40 rounded-b-3xl">
                      <div className="flex justify-between items-center py-4">
                        <span className="text-xs font-semibold text-gfa-slate uppercase tracking-wider">{content.campsSection.tuitionLabel}</span>
                        <span className="text-xs font-extrabold text-green-700 bg-green-50 px-2.5 py-1 rounded border border-green-100 uppercase tracking-wide">
                          {isEn ? "100% Scholarship Covered" : "100% 助学金全额资助"}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleStartRegistration(camp.title)}
                        className="w-full bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-wider text-xs py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                      >
                        {content.campsSection.registerBtn} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scholarship Banner */}
              <div className="bg-gfa-inkBlack text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-md">
                <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
                <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                  <h4 className="text-xl md:text-2xl font-bold font-serif text-[#C9A84C]">
                    {isEn ? "Talent shouldn't be limited by family income." : "才华，绝不应该被低收入阻碍"}
                  </h4>
                  <p className="text-gray-300 font-light text-xs sm:text-sm leading-relaxed">
                    {content.campsSection.benefitScholarship}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                    <button 
                      onClick={() => handleStartRegistration("Youth Film Summer Camp")} 
                      className="bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-widest text-[11px] px-8 py-3.5 rounded-full transition-colors font-sans"
                    >
                      {isEn ? "Apply with Scholarship" : "申请助学金专属报名"}
                    </button>
                    <button 
                      onClick={() => window.location.href = '/contact'}
                      className="border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-[11px] px-8 py-3.5 rounded-full transition-colors font-sans"
                    >
                      {isEn ? "Corporate Sponsorship" : "爱心款项赞助合作"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New Section: Summer Camp Precautions & Rules (注意事项) */}
          <section className="py-12 bg-white">
            <div className="container-gfa max-w-5xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <span className="text-red-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] bg-red-50 border border-red-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> {content.precautions.title}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold font-serif text-gfa-inkBlack mt-3 mb-3 leading-tight animate-fade-in">
                  {content.precautions.subtitle}
                </h2>
                <p className="text-xs md:text-sm text-gfa-slate leading-relaxed font-light">
                  {content.precautions.intro}
                </p>
              </div>

              {/* Safety Commitment Banner Card */}
              <div className="mb-10 p-5 bg-gfa-warmWhite border border-gray-200/60 rounded-3xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left transition-all hover:bg-slate-50 shadow-sm animate-fade-in">
                <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gfa-inkBlack text-sm mb-1 font-serif">
                    {isEn ? "Safety & Screening Guarantee" : "教学导师与片场员工安全承诺"}
                  </h4>
                  <p className="text-xs text-gfa-slate leading-relaxed font-light font-sans">
                    {isEn 
                      ? "All our instructors and staff members have passed background checks and sex offender screenings to ensure a safe learning environment."
                      : "我们所有的导师和员工均已通过背景调查和性犯罪者筛查，以确保安全的学习环境。"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {precautions.map((pGroup, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
                    <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center shrink-0">
                        {idx === 0 && <Package className="w-5 h-5" />}
                        {idx === 1 && <Car className="w-5 h-5" />}
                        {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                      </div>
                      <h4 className="font-bold font-serif text-gfa-inkBlack text-base">{pGroup.title}</h4>
                    </div>
                    <div className="space-y-4">
                      {pGroup.items.map((item, iIdx) => (
                        <div key={iIdx} className="space-y-1">
                          <strong className="text-xs font-serif font-black text-gfa-inkBlack flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>
                            {item.label}
                          </strong>
                          <p className="text-[11px] text-gfa-slate leading-relaxed font-light">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50/50 border border-yellow-100 rounded-2xl text-[11px] text-yellow-800 text-center font-light leading-relaxed">
                {content.precautions.disclaimer}
              </div>
            </div>
          </section>

          {/* Program 2 & 3: Dream Film Project & Special Needs */}
          <section className="py-12 bg-[#F5F2EE] border-t border-gfa-border">
            <div className="container-gfa max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Program 2: Dream Film Project */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
                  <div className="h-60 bg-gray-200 relative">
                    <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FLXS8q7yn%2Fu8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-5253418c-4b1d-4d9b-8f51-219cc38fdef7-3.png&w=1200&output=webp" alt="Children's Film Project" className="w-full h-full object-cover" width="1200" height="800" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-1.5 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                        <Film className="w-4 h-4"/> {isEn ? "Dream Film Project" : "奇幻小导演长周期影片创作"}
                      </div>
                      <h3 className="text-2xl font-bold font-serif">{isEn ? "Children's Dream Film Project" : "“童梦奇缘”商业院线片划"}</h3>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <p className="text-xs text-gfa-slate font-light leading-relaxed mb-4">
                      {isEn 
                        ? "We don't simulate—we actually produce and distribute. Every quarter, GFA produces a complete short film led entirely by youth, giving them real industry credits."
                        : "我们不做模拟器——我们真正制片并发售。每个季度，GFA旗下儿童片厂均会开发一部完整的儿童剧情短片，小导演、小演员全部获得IMDb院线演职员表登记。"}
                    </p>
                    <div className="bg-slate-50 border-l-4 border-[#C9A84C] p-4 rounded-r-xl mb-4">
                      <h4 className="font-bold text-gfa-inkBlack font-serif text-sm mb-3">
                        {isEn ? "Featured Production: 'The Garden'" : "优秀荣誉案例：《花园 (The Garden)》"}
                      </h4>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FsJKd1kNv%2FMV5-BNWI3-Mj-I2-NDIt-Yj-Ix-Mi00-MGM4-LTlk-Mz-Qt-Mm-Rk-MDQ0-ZDRj-OWU5-Xk-Ey-Xk-Fqc-Gc-V1.jpg&w=420&output=webp" alt="Film Poster 1" className="w-full h-36 rounded shadow-sm object-cover" width="420" height="280" />
                        <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FbgKF8pwy%2FGemini-Generated-Image-jtsengjtsengjtse.png&w=420&output=webp" alt="Film Poster 2" className="w-full h-36 rounded shadow-sm object-cover" width="420" height="280" />
                      </div>
                      <p className="text-[11px] text-gfa-slate font-semibold leading-relaxed">
                        ★ {isEn ? "Winner: Best Family Film at Golden State Film Festival" : "荣获：金州国际电影节 (Golden State) 最佳家庭动作类短片奖"}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => handleStartRegistration("Dream Film Project")} className="bg-gfa-inkBlack hover:bg-[black] text-white font-bold uppercase tracking-widest text-[10px] py-3 rounded-xl flex-1 transition-all">
                        {isEn ? "Enroll for Next Film" : "申请下一届拍摄角色"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Program 3: Special Needs */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
                  <div className="h-60 bg-gray-200 relative">
                    <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FycRFxBZ4%2FChat-GPT-Image-2026-3-23-12-23-04.png&w=1200&output=webp" alt="Film Therapy" className="w-full h-full object-cover" width="1200" height="800" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-1.5 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                        <HeartHandshake className="w-4 h-4"/> {isEn ? "Film Therapy" : "电影艺术感官疗愈计划"}
                      </div>
                      <h3 className="text-2xl font-bold font-serif">{isEn ? "Film Therapy for Special Needs Youth" : "自闭与特殊障碍儿童感官摄影疗愈"}</h3>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <p className="text-xs text-gfa-slate font-light leading-relaxed mb-4">
                      {isEn 
                        ? "Film is an expansive language. For kids with mild autism, attention issues, or social disorders, camerawork and performance can form their most potent medium of connection."
                        : "“电影是一种表达万物的大爱语言。”面向患有轻度自闭症、情绪焦虑或ADHD等沟通障碍的孩子，我们设计了艺术疗愈光盘，通过触控摄影机和安全角色演绎引导他们重释世界。"}
                    </p>
                    
                    <ul className="text-[11px] text-gfa-slate font-light space-y-2 bg-slate-50 p-4 rounded-xl mb-4">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>
                        {isEn ? "Designed for ADHD, Anxiety, or sensory disorders." : "适配多动、高敏、言语迟缓等特需学员。"}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>
                        {isEn ? "1:3 ultra-high teacher to kid coaching." : "配置1:3的卓越高师生陪伴比，全程辅导。"}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>
                        {isEn ? "Supervised by certified child arts therapists." : "核心内容由专业儿童创伤心理与艺术咨询师执棒。"}
                      </li>
                    </ul>

                    <button onClick={() => window.location.href = '/contact'} className="border border-gfa-border hover:bg-slate-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-[10px] py-3.5 rounded-xl transition-all">
                      {isEn ? "Request Group Evaluation" : "预约1对1艺术成长及特需咨询"}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Program 4: AI Filmmaking */}
          <section className="py-12 bg-white">
            <div className="container-gfa max-w-5xl mx-auto px-4 text-center">
              <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                {isEn ? "Innovation Track" : "前沿科技分支"}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-3">
                {isEn ? "AI Digital Filmmaking Masterclasses" : "前瞻AI数字影视制作先锋班"}
              </h2>
              <p className="text-base md:text-lg font-light text-gfa-slate mb-8 max-w-2xl mx-auto">
                {isEn 
                  ? "As generative technology revolutionizes Hollywood, GFA ensures children lead this paradigm shift with ethical and rich prompt engineering concepts."
                  : "技术不断颠覆，我们助力孩子不仅不掉队，更在此赛道领跑。全面传授正版合规的文本大模型剧本生成、Midjourney视觉风格定原及 Runway 动态影视资产渲染。"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left mb-8">
                {[
                  { t: "AI Screenwriting", tZh: "AI创意编剧与故事生成", d: "Plot structure mapping with massive language models.", dZh: "利用 ChatGPT 辅助推敲戏剧张力冲突及世界观。" },
                  { t: "Style Gen & Previs", tZh: "风格探索与AI分镜图", d: "Synthesize concept storyboard renders with Midjourney.", dZh: "通过 Midjourney 极速生成电影质感的分镜设计。" },
                  { t: "Smart Post Editing", tZh: "AI自动化粗剪调色", d: "Accelerating clean composite mapping with neural systems.", dZh: "调用后期智能轨道，大幅压缩繁琐剪辑和初次降噪。" },
                  { t: "AI Soundscapes", tZh: "电影级管弦AI合成乐", d: "Generating custom immersive sound fx layouts.", dZh: "利用智能乐理工具批量定制高度吻合情节的音效与音画。" }
                ].map((track, ti) => (
                  <div key={ti} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center mb-3">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-gfa-inkBlack font-serif text-sm mb-1">{isEn ? track.t : track.tZh}</h4>
                    <p className="text-[11px] text-gfa-slate leading-relaxed font-light">{isEn ? track.d : track.dZh}</p>
                  </div>
                ))}
              </div>

              <button onClick={() => handleStartRegistration("Sci-Fi & AI Digital Filmmaking Camp")} className="bg-gfa-inkBlack hover:bg-[#C9A84C] hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors shadow-md flex items-center justify-center gap-2 mx-auto">
                {isEn ? "Join Sci-Fi Future Camp" : "开启未来科幻AI营"} <ArrowRight className="w-4 h-4"/>
              </button>
            </div>
          </section>

          {/* Educational Roadmap Section (原来 Family Guide 合并/优化) */}
          <section className="py-12 bg-[#F5F2EE] border-t border-gfa-border" id="family-guide">
            <div className="container-gfa max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4 text-center">
                {isEn ? "Age-Based Career Development Roadmap" : "青少年影视进阶路线指南（分阶段）"}
              </h2>
              <p className="text-xs sm:text-sm text-gfa-slate leading-relaxed font-light text-center max-w-2xl mx-auto mb-10">
                {isEn 
                  ? "Youth filmmaking is not a singular leap—GFA breaks development into systematic creative phases so parents have a completely secure timeline."
                  : "从兴趣爱好到名校敲门砖再到入行职业化，GFA细分为四个进阶系统，让您的每一步投入都有章可循、稳步累积。"}
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 relative shadow-sm">
                  <div className="absolute top-4 right-6 bg-[#C9A84C]/10 text-[#C9A84C] font-mono text-sm px-3.5 py-1 rounded-full font-bold">Ages 6-10</div>
                  <h3 className="text-lg font-bold font-serif text-gfa-inkBlack flex items-center gap-2 mb-3">
                    <Map className="text-[#C9A84C] w-5 h-5 shrink-0" />
                    {isEn ? "Exploration Phase" : "兴趣启蒙与好奇探索阶段"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light text-gfa-slate">
                    <div>
                      <strong className="text-black font-semibold block mb-0.5">{isEn ? "Milestones" : "培养核心"}</strong>
                      {isEn ? "Visual storytelling, screen freedom, collaborative play." : "锻炼想象力，通过相机探索透视、空间与色彩构成。"}
                    </div>
                    <div>
                      <strong className="text-[#C9A84C] font-semibold block mb-0.5">{isEn ? "GFA Programs" : "GFA提供推荐"}</strong>
                      {isEn ? "Junior Film Explorers Creative Camp, Puppet acting games." : "探影者创意短片营、画作动态绿幕演职。"}
                    </div>
                    <div>
                      <strong className="text-black font-semibold block mb-0.5">{isEn ? "Parent Guideline" : "家长建议"}</strong>
                      {isEn ? "Watch high-concept films together, don't grade their drawings." : "带他们观看优秀艺术电影，多提问并录像讲故事。"}
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 relative shadow-sm">
                  <div className="absolute top-4 right-6 bg-[#C9A84C]/10 text-[#C9A84C] font-mono text-sm px-3.5 py-1 rounded-full font-bold">Ages 11-14</div>
                  <h3 className="text-lg font-bold font-serif text-gfa-inkBlack flex items-center gap-2 mb-3">
                    <Compass className="text-[#C9A84C] w-5 h-5 shrink-0" />
                    {isEn ? "Formulation & Real Production" : "实操进阶与导演构建阶段"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light text-gfa-slate">
                    <div>
                      <strong className="text-black font-semibold block mb-0.5">{isEn ? "Milestones" : "培养核心"}</strong>
                      {isEn ? "Mastering camera movement, directing colleagues, basic edit logic." : "建立时间线与剪辑概念，学习团队管理与画面机位设计。"}
                    </div>
                    <div>
                      <strong className="text-[#C9A84C] font-semibold block mb-0.5">{isEn ? "GFA Programs" : "GFA提供推荐"}</strong>
                      {isEn ? "GFA Youth Director Camp, Children's Dream Film Projects." : "GFA好莱坞新锐导演创作夏令营、童梦大电影主创。"}
                    </div>
                    <div>
                      <strong className="text-black font-semibold block mb-0.5">{isEn ? "Parent Guideline" : "家长建议"}</strong>
                      {isEn ? "Sponsor a decent tablet for local cuts, allow script mistakes." : "允许孩子使用智能手机/平板剪辑自媒体，尊重其编剧视角。"}
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 relative shadow-sm">
                  <div className="absolute top-4 right-6 bg-[#C9A84C]/10 text-[#C9A84C] font-mono text-sm px-3.5 py-1 rounded-full font-bold">Ages 15-18</div>
                  <h3 className="text-lg font-bold font-serif text-gfa-inkBlack flex items-center gap-2 mb-3">
                    <BookOpen className="text-[#C9A84C] w-5 h-5 shrink-0" />
                    {isEn ? "Specialization & Portfolios" : "黄金备考与专业作品集阶段"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light text-gfa-slate">
                    <div>
                      <strong className="text-black font-semibold block mb-0.5">{isEn ? "Milestones" : "培养核心"}</strong>
                      {isEn ? "Completing high-end shorts, entering global festivals, USC/NYU apps." : "打磨完备的艺术及戏剧作品集，参赛电影节，增色大学申请。"}
                    </div>
                    <div>
                      <strong className="text-[#C9A84C] font-semibold block mb-0.5">{isEn ? "GFA Programs" : "GFA提供推荐"}</strong>
                      {isEn ? "Advanced Sci-Fi Camp, Hollywood Industry Mentorship, Awards Panel." : "未来科幻AI未来营、好莱坞大师班、金羽毛奖剧组选送。"}
                    </div>
                    <div>
                      <strong className="text-black font-semibold block mb-0.5">{isEn ? "Parent Guideline" : "家长建议"}</strong>
                      {isEn ? "Guide college search early, connect to genuine industry players." : "尽早接轨好莱坞专业平台，协助累积业界执照与认可。"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 bg-gfa-inkBlack text-white">
            <div className="container-gfa max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest block mb-2">Q&A</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#C9A84C]">{content.faqTitle}</h2>
              </div>
              
              <div className="space-y-3.5">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                      className="w-full px-6 py-4.5 text-left font-bold text-xs sm:text-sm flex justify-between items-center focus:outline-none hover:bg-white/10 transition-colors"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="pr-8 leading-relaxed">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#C9A84C] shrink-0 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 text-white/70 font-light text-xs overflow-hidden transition-all duration-300 ${openFaq === idx ? 'pb-4 max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-2.5 border-t border-white/10 mt-1">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Booking segment */}
          <section className="py-12 bg-white text-center mb-10">
            <div className="container-gfa px-4 max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C9A84C]">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-3">
                {isEn ? "Not Sure Which Track Fits Best?" : "无法确定哪条发展路径最契合？"}
              </h2>
              <p className="text-xs md:text-sm text-gfa-slate font-light mb-6 max-w-xl mx-auto leading-relaxed">
                {isEn 
                  ? "Book a completely free, 30-minute consultation with a GFA Admissions director. We will map out a customized strategy based on your child's age and hobbies."
                  : "预约30分钟完全免费的好莱坞影视成长咨询。由GFA专家委员会面对面为孩子定制适合年龄、偏好与发展周期的个性化进阶方案。"}
              </p>
              <button 
                onClick={() => { window.location.href='/contact' }} 
                className="bg-gfa-inkBlack hover:bg-[#C9A84C] hover:text-black text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs transition-colors shadow-md"
              >
                {isEn ? "Book Free Consultation Tour" : "预约免费成长线路规划之旅"}
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default YouthPrograms;
