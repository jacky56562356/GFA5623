import React, { useState, useRef } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight, Trophy, Star, Medal, Clapperboard, Frame, PenTool, CheckCircle2, ChevronDown } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Competition: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;
  const isZh = locale === 'zh';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    participantName: '',
    participantAge: '',
    parentName: '',
    email: '',
    phone: '',
    region: 'US', // 'US' | 'China'
    division: 'Rising Stars (Ages 11-14)',
    category: 'Performance',
    submissionTitle: '',
    submissionUrl: '',
    description: '',
    agreesToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = (region: 'US' | 'China') => {
    setFormData(prev => ({
      ...prev,
      region: region
    }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await addDoc(collection(db, 'youth_competition_registrations'), {
        ...formData,
        participantAge: parseInt(formData.participantAge, 10) || 0,
        createdAt: serverTimestamp(),
      });
      setSubmitSuccess(true);
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (err: any) {
      console.error('Error submitting registration:', err);
      setErrorMessage(err.message || (isZh ? '提交时发生错误，请稍后重试。' : 'An error occurred during submission. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { q: "How do Chinese children participate?", a: "We have an official China division handling local registrations and preliminary rounds. Finalists will be invited to Los Angeles for the Grand Finale in Hollywood." },
    { q: "What language skills are required?", a: "Art transcends language. While basic English is helpful for the LA trip, performances and films can be in Chinese with English subtitles. We provide translation support during the finals." },
    { q: "Do we have to travel to Los Angeles for the finals?", a: "Yes, the Grand Finale is a live, in-person event in Hollywood. For finalists who cannot secure a visa, we offer live-streamed inclusion, but in-person attendance is strongly encouraged." },
    { q: "What are the entry fees? Are there scholarships?", a: "Entry fees cover administrative costs. Yes, GFA provides needs-based scholarships that can waive entry fees and even subsidize travel costs for extraordinary talents from low-income families." },
    { q: "Who are the judges and what is the criteria?", a: "Our jury consists of active Hollywood directors, casting agents, and educators. They judge based on originality, emotional resonance, technical execution (for film), and stage presence (for talent)." },
    { q: "How will we know if we made it to the finals?", a: "All participants will be notified via email on the scheduled 'Finalist Announcement' date. A public list will also be published on our website." }
  ];

  const tForm = {
    title: isZh ? "2026 青少年赛事在线报名" : "2026 GFA Youth Competition Registration",
    subtitle: isZh ? "填写以下信息，开启您的好莱坞艺术之旅" : "Fill out the form below to begin your Hollywood artistic journey",
    participantName: isZh ? "参赛者姓名" : "Participant Name",
    participantAge: isZh ? "参赛者年龄" : "Participant Age",
    parentName: isZh ? "家长/监护人姓名" : "Parent / Guardian Name",
    email: isZh ? "联系邮箱" : "Contact Email Address",
    phone: isZh ? "联系电话" : "Contact Phone",
    region: isZh ? "参赛赛区" : "Competition Region",
    regionUS: isZh ? "美国赛区" : "United States Division",
    regionCN: isZh ? "中国赛区" : "China Division",
    division: isZh ? "参赛组别" : "Age Division",
    divMini: isZh ? "Mini 组 (6–10 岁)" : "Mini Stars (Ages 6–10)",
    divRising: isZh ? "Rising 组 (11–14 岁)" : "Rising Stars (Ages 11–14)",
    divNextGen: isZh ? "Next Gen 组 (15–18 岁)" : "Next Gen (Ages 15–18)",
    category: isZh ? "参赛类别" : "Competition Category",
    catPerformance: isZh ? "舞台表演 (个人/团体)" : "Performance (Solo / Ensemble)",
    catFilm: isZh ? "电影导演 (短片)" : "Film Directing (Short films)",
    catScreenwriting: isZh ? "剧本创作 (原创剧本)" : "Screenwriting (Original scripts)",
    catTalent: isZh ? "综合才艺 (舞蹈、音乐等)" : "Talent Showcase (Dance, Music, etc.)",
    submissionTitle: isZh ? "参赛作品/节目名称" : "Submission / Act Title",
    submissionUrl: isZh ? "作品/展示视频链接 (选填)" : "Submission / Video Link (Optional)",
    urlPlaceholder: isZh ? "例如 Google Drive、YouTube 或百度网盘链接" : "e.g., Google Drive, YouTube, or Vimeo link",
    desc: isZh ? "参赛作品/节目简介 (选填)" : "Brief Description / Bio (Optional)",
    agree: isZh ? "我确认已获得家长/监护人同意，并确保参赛作品的原创性。" : "I certify that I have parent/guardian consent and the submitted work is original.",
    submit: isZh ? "提交报名" : "Submit Registration",
    submitting: isZh ? "正在提交..." : "Submitting...",
    success: isZh ? "报名提交成功！" : "Registration Successful!",
    successDesc: isZh ? "感谢您的报名。我们的评委会将仔细评审您的申请，并会尽快通过邮件与您联系。" : "Thank you for registering. Our entry jury will carefully review your application and contact you via email shortly.",
    backToHome: isZh ? "返回首页" : "Return Home",
    registerAnother: isZh ? "再次报名" : "Register Another Participant",
  };

  return (
    <div className="font-sans pb-3">
      <div style={{ position: "absolute", left: "-9999px" }}>\n<h1>GFA Global Youth Talent Competition</h1>\n<p>The GFA Global Youth Talent Competition is an international performing arts competition for young talent ages 6-17. The competition runs simultaneously in the United States and China, with finals targeting the Dolby Theatre in Hollywood.</p>\n<p>Competition categories include acting, filmmaking, directing, and performing arts. GFA has partnered with 乐华圆娱 for the 2026 US-China simultaneous competition.</p>\n<p>Winners receive Hollywood industry exposure, distribution opportunities, and recognition at the Golden Feather Awards ceremony. Register at gfaalliance.org.</p>\n<p>Contact: jacky@gfafilm.org, 626-677-8017. Global Film Alliance Inc., EIN: 33-4817276.</p>\n</div>\n      <SEO 
        title="Global Competition" 
        description="Join the GFA Global Youth Talent Competition. An international platform for young actors and filmmakers to showcase their skills in Hollywood."
      />

      {/* Hero Image */}
      <section className="relative w-full bg-gfa-inkBlack pt-[80px] md:pt-[100px] flex justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
          <img 
            fetchPriority="high" 
            src="https://wsrv.nl/?url=i.ibb.co%2FS4Mb6TcN%2F24480b00-65a2-4468-8dc6-50aae205d0fa.png&w=1200&output=webp" 
            alt="Hollywood style stage" 
            className="w-full h-auto object-contain" 
            width="1200" 
            height="800"   
          />
        </div>
      </section>

      {/* Hero Text & Actions */}
      <section className="py-3 md:py-4 bg-gfa-inkBlack relative z-10 border-b border-white/5">
        <div className="container-gfa text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-3 md:mb-5 leading-tight">
            {"2026 GFA Global Youth"}<br/>
            <span className="text-[#C9A84C]">{"Talent Competition"}</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-light text-white/90 tracking-widest uppercase mb-4 md:mb-5">
            {"Grand Finale in Hollywood"}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
            <button 
              onClick={() => scrollToForm('US')}
              className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-[0_0_30px_rgba(201,168,76,0.3)] min-w-[200px]"
            >
              {"Register — US"}
            </button>
            <button 
              onClick={() => scrollToForm('China')}
              className="w-full sm:w-auto border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-gfa-inkBlack px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg min-w-[200px]"
            >
              {"Register — China"}
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-3 bg-white">
        <div className="container-gfa px-4 max-w-4xl mx-auto text-center space-y-5 text-lg md:text-xl font-light text-gfa-slate leading-relaxed">
           <p className="font-serif text-2xl text-gfa-inkBlack italic mb-3">
             {"The first simultaneous youth film and talent competition held across the US and China, bridging a massive cultural gap to unite the next generation of creators."}
           </p>
           
           <p>
             {"Why do we host the finals in Hollywood? We chose it because it is the home of cinema. Every year, the absolute pinnacle of cinematic achievement is honored here. We are giving that exact same stage to your children. We are telling them their art matters that much."}
           </p>

           <p>
             {"There is profound meaning in this connection. Children from two vastly different countries, using the shared, universal language of film and performance, meeting on the very same stage to share their dreams."}
           </p>
        </div>
      </section>

      {/* Categories & Age Groups */}
      <section className="py-3 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl text-gfa-inkBlack font-bold font-serif">{"Competition Divisions"}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
             {/* Age Groups */}
             <div>
               <h3 className="text-lg font-bold text-[#C9A84C] uppercase tracking-widest mb-3 flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5"/> {"By Age Group"}
               </h3>
               <div className="space-y-4">
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                   <div className="w-16 h-16 bg-[#111111] text-white rounded-full flex items-center justify-center font-bold font-serif text-xl">{"Mini"}</div>
                   <div>
                     <h4 className="font-bold text-lg text-gfa-inkBlack">{"Mini Stars"}</h4>
                     <p className="text-sm font-light text-gfa-slate">{"Ages 6–10"}</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                   <div className="w-16 h-16 bg-[#C9A84C] text-black rounded-full flex items-center justify-center font-bold font-serif text-xl">{"Rise"}</div>
                   <div>
                     <h4 className="font-bold text-lg text-gfa-inkBlack">{"Rising Stars"}</h4>
                     <p className="text-sm font-light text-gfa-slate">{"Ages 11–14"}</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                   <div className="w-16 h-16 bg-white border-4 border-[#C9A84C] text-gfa-inkBlack rounded-full flex items-center justify-center font-bold font-serif text-xl">{"Next"}</div>
                   <div>
                     <h4 className="font-bold text-lg text-gfa-inkBlack">{"Next Gen"}</h4>
                     <p className="text-sm font-light text-gfa-slate">{"Ages 15–18"}</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Categories */}
             <div>
               <h3 className="text-lg font-bold text-[#C9A84C] uppercase tracking-widest mb-3 flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5"/> {"By Category"}
               </h3>
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <Star className="w-8 h-8 text-[#C9A84C] mx-auto mb-3" />
                   <h4 className="font-bold text-gfa-inkBlack mb-1">{"Performance"}</h4>
                   <p className="text-xs text-gfa-slate">{"(Solo / Ensemble)"}</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <Clapperboard className="w-8 h-8 text-[#C9A84C] mx-auto mb-3" />
                   <h4 className="font-bold text-gfa-inkBlack mb-1">{"Film Directing"}</h4>
                   <p className="text-xs text-gfa-slate">{"Short films"}</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <PenTool className="w-8 h-8 text-[#C9A84C] mx-auto mb-3" />
                   <h4 className="font-bold text-gfa-inkBlack mb-1">{"Screenwriting"}</h4>
                   <p className="text-xs text-gfa-slate">{"Original scripts"}</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <Frame className="w-8 h-8 text-[#C9A84C] mx-auto mb-3" />
                   <h4 className="font-bold text-gfa-inkBlack mb-1">{"Talent Showcase"}</h4>
                   <p className="text-xs text-gfa-slate">{"Dance, Music, etc."}</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Target Audience Messages */}
      <section className="py-0 flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gfa-inkBlack text-white p-16 md:p-24 flex flex-col justify-center">
           <h3 className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-4">{"To Chinese Families"}</h3>
           <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed italic">
             {"\"This is not just a talent competition. It is a chance for your child to truly stand on Hollywood's grandest stage. This is where every cinematic dream begins.\""}
           </p>
        </div>
        <div className="md:w-1/2 bg-[#C9A84C] text-black p-16 md:p-24 flex flex-col justify-center">
           <h3 className="text-black/60 font-bold tracking-widest uppercase text-sm mb-4">{"To American Families"}</h3>
           <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed italic">
             {"\"This is where East meets West on Hollywood's most iconic stage. Your child's story deserves to be told to the world.\""}
           </p>
        </div>
      </section>

      {/* Process & Timeline */}
      <section className="py-3 bg-white border-b border-gfa-border">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">{"Process & Timeline"}</h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-none space-y-3 md:space-y-0 md:flex md:justify-between mb-4">
             <div className="md:hidden absolute top-0 bottom-0 left-[-1px] w-0.5 bg-gradient-to-b from-[#C9A84C] to-gray-200"></div>
             <div className="hidden md:block absolute top-[24px] left-8 right-8 h-0.5 bg-gradient-to-r from-[#C9A84C] to-gray-200"></div>

             {[
               { n: 1, en: "Register Online", end: "Fill out info & categories" },
               { n: 2, en: "Submit Work", end: "Upload video or file" },
               { n: 3, en: "Jury Selection", end: "Industry panel review" },
               { n: 4, en: "Grand Finale", end: "Hollywood, LA" },
             ].map((step) => (
               <div key={step.n} className="relative z-10 pl-10 md:pl-0 md:text-center md:w-1/4">
                 <div className="absolute left-[-20px] top-0 md:relative md:left-auto flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#C9A84C] text-white font-bold mx-auto mb-4 shadow-sm">
                   {step.n}
                 </div>
                 <h4 className="font-bold text-gfa-inkBlack mb-1 text-lg">{step.en}</h4>
                 <p className="text-sm font-light text-gfa-slate">{step.end}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-3 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">{"Awards & Honors"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
             <div className="bg-white p-4 rounded-xl border border-[#C9A84C] shadow-md transform -translate-y-2">
               <Trophy className="w-8 h-8 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{"Grand Champion"}</div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{"Best Performance"}</div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{"Best Film"}</div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{"Best Screenplay"}</div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{"Best Talent"}</div>
             </div>
             <div className="bg-gfa-inkBlack text-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Medal className="w-6 h-6 text-white mx-auto mb-2"/>
               <div className="font-bold text-sm tracking-wide">{"Special Jury Award"}</div>
             </div>
             <div className="bg-gfa-inkBlack text-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Medal className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-[#C9A84C] text-sm tracking-wide">{"Rising Star Award"}</div>
             </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section ref={formRef} className="py-16 bg-white border-b border-gfa-border scroll-mt-20 shrink-0" id="registration-section">
        <div className="container-gfa max-w-3xl mx-auto px-4">
          <div className="bg-gfa-warmWhite p-8 md:p-12 rounded-[40px] border border-gfa-border shadow-2xl relative">
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-green-500 mb-6 border border-green-100">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
                  {tForm.success}
                </h3>
                <p className="text-gfa-slate text-lg mb-8 max-w-md mx-auto">
                  {tForm.successDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        participantName: '',
                        participantAge: '',
                        parentName: '',
                        email: '',
                        phone: '',
                        region: 'US',
                        division: 'Rising Stars (Ages 11-14)',
                        category: 'Performance',
                        submissionTitle: '',
                        submissionUrl: '',
                        description: '',
                        agreesToTerms: false,
                      });
                    }}
                    className="bg-[#C9A84C] hover:bg-gfa-inkBlack hover:text-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    {tForm.registerAnother}
                  </button>
                  <a 
                    href="/"
                    className="border border-gfa-border hover:border-[#C9A84C] text-gfa-slate hover:text-[#C9A84C] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-with-easing flex items-center justify-center"
                  >
                    {tForm.backToHome}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-4 py-2 rounded-full mb-3 inline-block">
                    {isZh ? "开启梦想" : "GET INVOLVED"}
                  </span>
                  <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mt-2">
                    {tForm.title}
                  </h3>
                  <p className="text-gfa-slate text-sm mt-2">
                    {tForm.subtitle}
                  </p>
                </div>

                {errorMessage && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Participant Name */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.participantName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.participantName}
                      onChange={(e) => setFormData({ ...formData, participantName: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                      placeholder={isZh ? "请输入参赛者完整姓名" : "Enter full name"}
                    />
                  </div>

                  {/* Participant Age */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.participantAge} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="6"
                      max="18"
                      value={formData.participantAge}
                      onChange={(e) => setFormData({ ...formData, participantAge: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                      placeholder={isZh ? "请输入 6-18 岁" : "Ages 6-18"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Parent Name */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.parentName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                      placeholder={isZh ? "请输入家长或监护人姓名" : "Parent/guardian full name"}
                    />
                  </div>

                  {/* Region */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.region} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                    >
                      <option value="US">{tForm.regionUS}</option>
                      <option value="China">{tForm.regionCN}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                      placeholder="e.g. contact@domain.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.phone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                      placeholder="e.g. 626-677-8017"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Division */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.division} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                    >
                      <option value="Mini Stars (Ages 6-10)">{tForm.divMini}</option>
                      <option value="Rising Stars (Ages 11-14)">{tForm.divRising}</option>
                      <option value="Next Gen (Ages 15-18)">{tForm.divNextGen}</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.category} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                    >
                      <option value="Performance">{tForm.catPerformance}</option>
                      <option value="Film Directing">{tForm.catFilm}</option>
                      <option value="Screenwriting">{tForm.catScreenwriting}</option>
                      <option value="Talent Showcase">{tForm.catTalent}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Submission Title */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.submissionTitle} <span className="text-gray-400 font-normal">({isZh ? "选填" : "Optional"})</span>
                    </label>
                    <input
                      type="text"
                      value={formData.submissionTitle}
                      onChange={(e) => setFormData({ ...formData, submissionTitle: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                      placeholder={isZh ? "请输入作品、表演节目或剧本的名称" : "Title of your work, performance, or script"}
                    />
                  </div>

                  {/* Submission URL */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.submissionUrl} <span className="text-gray-400 font-normal">({isZh ? "选填" : "Optional"})</span>
                    </label>
                    <input
                      type="url"
                      value={formData.submissionUrl}
                      onChange={(e) => setFormData({ ...formData, submissionUrl: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                      placeholder={tForm.urlPlaceholder}
                    />
                  </div>

                  {/* Short Description */}
                  <div>
                    <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                      {tForm.desc} <span className="text-gray-400 font-normal">({isZh ? "选填" : "Optional"})</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-5 py-4 border border-gfa-border rounded-xl focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors bg-white text-gfa-inkBlack font-sans"
                      placeholder={isZh ? "请简短描述您的节目创意、电影大纲或个人介绍。" : "Introduce your creative vision, film synopsis, or performing background."}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gfa-border">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreesToTerms}
                      onChange={(e) => setFormData({ ...formData, agreesToTerms: e.target.checked })}
                      className="mt-1 w-5 h-5 text-[#C9A84C] focus:ring-[#C9A84C] rounded border-gray-300"
                    />
                    <span className="text-sm text-gfa-slate leading-relaxed">
                      {tForm.agree} <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreesToTerms}
                    className={`w-full md:w-auto px-16 py-5 rounded-full font-bold uppercase tracking-widest text-base transition-all duration-300 shadow-md ${
                      isSubmitting || !formData.agreesToTerms
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-[#C9A84C] text-black hover:bg-gfa-inkBlack hover:text-white hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? tForm.submitting : tForm.submit}
                  </button>
                </div>
              </form>
            )}
            
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-3 bg-white">
        <div className="container-gfa max-w-4xl mx-auto px-4">
           <div className="text-center mb-4">
             <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">{"FAQ"}</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                 <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 font-sans">
                    <button 
                      className="w-full px-6 py-5 text-left font-bold text-gfa-inkBlack flex justify-between items-center focus:outline-none hover:bg-gray-100 transition-colors"
                      onClick={() => toggleFaq(idx)}
                    >
                       <span className="pr-8">{faq.q}</span>
                       <ChevronDown className={`w-5 h-5 text-[#C9A84C] shrink-0 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 text-gfa-slate font-light text-sm overflow-hidden transition-all duration-300 ${openFaq === idx ? 'pb-3 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="pt-2 border-t border-gray-200 mt-2">{faq.a}</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="py-4 bg-gfa-inkBlack text-center">
        <div className="container-gfa px-4">
           <h3 className="text-2xl font-serif text-white mb-3">
             {"Become an Official Sponsor"}
           </h3>
           <p className="text-white/60 font-light max-w-2xl mx-auto mb-4 font-sans">
             {"Gain brand exposure in Hollywood while supporting the next generation of global creators."}
           </p>
           <button className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black uppercase tracking-widest text-xs font-bold px-8 py-3 rounded-full transition-colors">
             {"Sponsorship Inquiry"}
           </button>
        </div>
      </section>

    </div>
  );
};

export default Competition;
