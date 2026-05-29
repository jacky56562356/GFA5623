import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Tent, Film, HeartHandshake, Sparkles, Calendar, MapPin, Video, ArrowRight, ChevronDown, Map, Compass, BookOpen, GraduationCap, PhoneCall } from 'lucide-react';

const YouthPrograms: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;
  const [showRegForm, setShowRegForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "My child loves film, but I'm not sure if it's a good career path?", a: "The entertainment industry is one of the largest export industries in the US, with a massive demand for diverse talent ranging from creative to technical and business roles. With proper planning, it offers highly viable and lucrative career paths." },
    { q: "Is studying film very expensive?", a: "It can be, but it doesn't have to be. GFA specifically mitigates these costs by providing free gear, mentorship, and extensive scholarship programs so talent matters more than money." },
    { q: "What should my child major in for college?", a: "It depends completely on their interest. They don't have to major in 'Film Production'. Many successful producers majored in Business; many great cinematographers studied Physics or Fine Arts. We offer consultations to help figure this out." },
    { q: "As a Chinese family, how can we help our child succeed in the US industry?", a: "By understanding the US system early. Hollywood relies entirely on union structures, verified credits, and professional networks. GFA acts as a bridge, giving Chinese families the exact roadmap required to build an authentic Hollywood career." },
    { q: "How much do GFA's programs cost? Is there financial aid?", a: "Cost varies by program, but as a nonprofit, profitability is not our goal. We offer robust scholarships—up to 100% coverage—for low and middle-income families." },
    { q: "My child has absolutely no experience. Can they start with GFA?", a: "Yes. Our 6-10 age programs assume zero prior experience. We focus purely on kindling their passion and creativity in a pressure-free environment." },
    { q: "Will the Global Talent Competition actually help my child's future?", a: "Absolutely. Competing in Hollywood, receiving verified credentials from a recognized US 501(c)(3), and performing for industry judges are massive resume builders for college applications and talent agents." },
    { q: "How do I schedule a 1-on-1 consultation with the GFA team?", a: "Simply click the 'Book Free Consultation' button at the bottom of this page. We'll find a time to discuss your child's specific situation." }
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
    const subject = `Registration: ${formData.childName} for ${formData.program}`;
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
      <div style={{ position: "absolute", left: "-9999px" }}>\n<h1>Youth Film Programs - GFA Summer Camp Los Angeles</h1>\n<p>GFA offers hands-on youth film education programs for children and teenagers ages 6-17 in Los Angeles, California. Our programs teach scriptwriting, directing, acting, editing, and film production.</p>\n<p>2026 Youth Film Summer Camp: Session 1: June 15-27, 2026. Session 2: July 20 - August 1, 2026. Location: Los Angeles area. Ages 6-17 welcome.</p>\n<p>Equipment provided by Blackmagic Design and Panavision New Filmmakers Program. Transportation support available through HopSkipDrive. Register at gfaalliance.org.</p>\n<p>Contact: jacky@gfafilm.org, 626-677-8017. Global Film Alliance Inc., EIN: 33-4817276.</p>\n</div>\n      <SEO title="Youth Programs | Global Film Alliance" />

      {showRegForm ? (
        <div className="bg-[#F5F2EE] min-h-screen pt-12 pb-24">
          <div className="container-gfa max-w-3xl mx-auto px-4">
            <button 
              onClick={() => setShowRegForm(false)}
              className="mb-8 flex items-center gap-2 text-gfa-slate hover:text-black transition-colors font-bold uppercase tracking-widest text-sm"
            >
              <ArrowRight className="w-5 h-5 rotate-180"/> {"Back to Programs"}
            </button>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-2 text-center">
                {"Program Registration"}
              </h3>
              <p className="text-center text-gfa-slate mb-8">{"Please fill out the detailed form below."}</p>
              
              <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{"Participant Information"}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Child's Name"} *</label>
                      <input required name="childName" value={formData.childName} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Age"} *</label>
                      <input required name="childAge" value={formData.childAge} onChange={handleInputChange} type="number" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"T-Shirt Size"}</label>
                      <select name="tshirtSize" value={formData.tshirtSize} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Filmmaking Experience"}</label>
                      <select name="filmmakingExperience" value={formData.filmmakingExperience} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                        <option value="None">{"None"}</option>
                        <option value="Beginner">{"Beginner"}</option>
                        <option value="Intermediate">{"Intermediate"}</option>
                        <option value="Advanced">{"Advanced"}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{"Parent/Guardian Info"}</h4>
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{"Parent/Guardian Name"} *</label>
                    <input required name="parentName" value={formData.parentName} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Phone Number"} *</label>
                      <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Email Address"} *</label>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{"Emergency & Health"}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Emergency Contact Name"} *</label>
                      <input required name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Emergency Phone"} *</label>
                      <input required name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} type="tel" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Dietary Restrictions"}</label>
                      <input name="dietary" value={formData.dietary} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gfa-slate mb-1">{"Medical Conditions"}</label>
                      <input name="medical" value={formData.medical} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gfa-slate mb-1">{"Select Program"} *</label>
                  <select required name="program" value={formData.program} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                    <option value="Youth Film Summer Camp">{"Youth Film Summer Camp"}</option>
                    <option value="Dream Film Project">{"Dream Film Project"}</option>
                    <option value="Youth Short Drama Program">{"Youth Short Drama Program"}</option>
                    <option value="On-Set Internship">{"On-Set Internship"}</option>
                    <option value="GFA AI Content Creator">{"GFA AI Content Creator"}</option>
                  </select>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{"Uploads"}</h4>
                  <p className="text-xs text-gfa-slate">{"Please note: These files will need to be manually attached when your email client opens."}</p>
                  <div>
                    <label className="block text-sm font-bold text-gfa-slate mb-1">{"Resume (optional)"}</label>
                    <label className="flex items-center gap-3 w-full bg-[#F5F2EE] border border-gray-200 border-dashed rounded-lg p-3 cursor-pointer hover:bg-[#EAE4D8] transition-colors">
                      <span className="px-4 py-1.5 bg-white text-[#C9A84C] font-semibold text-sm rounded-full shadow-sm">{"Choose File"}</span>
                      <span className="text-sm text-gfa-slate truncate flex-1">{resumeFileName || ("No file chosen")}</span>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFileName(e.target.files?.[0]?.name || '')} />
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gfa-slate mb-1">{"Images or Portfolio (Max 20MB)"}</label>
                    <label className="flex items-center gap-3 w-full bg-[#F5F2EE] border border-gray-200 border-dashed rounded-lg p-3 cursor-pointer hover:bg-[#EAE4D8] transition-colors">
                      <span className="px-4 py-1.5 bg-white text-[#C9A84C] font-semibold text-sm rounded-full shadow-sm">{"Choose Files"}</span>
                      <span className="text-sm text-gfa-slate truncate flex-1">
                        {portfolioFileNames.length > 0 
                          ? (`${portfolioFileNames.length} file(s) chosen`) 
                          : ("No file chosen")}
                      </span>
                      <input type="file" multiple className="hidden" accept="image/*" onChange={(e) => setPortfolioFileNames(Array.from(e.target.files || []).map(f => f.name))} />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gfa-slate mb-1">{"Any Questions or Notes?"}</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]"></textarea>
                </div>

                <div className="text-sm text-gfa-slate font-light mb-4 text-center">
                  * {"By submitting this form, you acknowledge that you will be redirected to your email client to send the registration details to GFA. Don't forget to attach your files!"}
                </div>

                <button type="submit" className="w-full bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-lg py-5 rounded-xl transition-all shadow-md hover:shadow-lg mt-4">
                  {"Generate Request & Email Us"}
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
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-2xl">
            {"Planting the Seed of a"}<br/>
            <span className="text-[#C9A84C]">{"Filmmaker's Dream"}</span>
          </h1>
        </div>
      </section>

      {/* Program 1: Summer Camp */}
      <section className="py-3 bg-white border-b border-gfa-border">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4 flex justify-center items-center gap-2">
              <Tent className="w-5 h-5"/> {"Youth Film Summer Camp"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
              {"From First Frame to Premiere"}
            </h3>
            <p className="text-lg md:text-xl font-serif font-light text-gfa-slate leading-relaxed max-w-3xl mx-auto italic">
              {"Picture day one: A child holds a professional camera for the first time, nervous but fully mesmerized. Now picture the final day: Sitting in a real theater, watching the audience's reaction to a film they directed themselves. That transformation is our summer camp."}
            </p>
          </div>

          <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 flex flex-col lg:flex-row gap-3 mb-4">
            <div className="lg:w-1/3">
              <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">{"2026 Camp Details"}</h4>
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
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{"Ages"}</strong>
                    6–17 {" years old"}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{"Location"}</strong> Greater Los Angeles Area </div>
                </li>
                <li className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{"Gear"}</strong>
                    {"Professional Blackmagic Design cameras used by Hollywood directors."}
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-2/3">
              <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">{"Curriculum Modules"}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{"1. Screenwriting"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{"Find the stories that only you can tell."}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{"2. Cinematography"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{"Learn to express emotion through lenses and lighting."}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{"3. Acting"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{"Find your authentic self in front of the camera."}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{"4. Post-Production"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{"Transform scattered clips into a complete narrative."}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{"5. Directing"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{"Learn how to lead a team to tell a unified story."}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{"6. The Premiere"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{"Experience the thrill of a live audience watching your work."}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Scholarship */}
          <div className="bg-gfa-inkBlack text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
             <div className="relative z-10 max-w-3xl mx-auto">
               <h4 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-[#C9A84C]">
                 {"Talent shouldn't be limited by family income."}
               </h4>
               <p className="text-white/80 font-light mb-4">
                 {"We provide full and partial scholarships so that passionate children, regardless of their financial background, can experience the magic of our camps."}
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button onClick={() => setShowRegForm(true)} className="bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">
                   {"Register My Child"}
                 </button>
                 <button className="border border-white hover:bg-white hover:text-gfa-inkBlack text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">
                   {"Sponsor a Child"}
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
                <img loading="lazy"  src="https://wsrv.nl/?url=i.ibb.co%2FLXS8q7yn%2Fu8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-5253418c-4b1d-4d9b-8f51-219cc38fdef7-3.png&w=1200&output=webp" alt="Children's Film Project" className="w-full h-full object-cover"  width="1200" height="800"   />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <Film className="w-4 h-4"/> Children's Dream Film Project </div>
                  <h3 className="text-2xl font-bold font-serif">{"Children's Dream Film Project"}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-3 font-bold">
                  {"We don't simulate—we actually produce and distribute. Every quarter, we produce a complete short film led entirely by youth."}
                </p>
                <div className="bg-gray-50 border-l-4 border-[#C9A84C] p-6 rounded-r-xl mb-4 flex-grow">
                  <h4 className="font-bold text-gfa-inkBlack font-serif mb-4">{"Case Study: 'Garden'"}</h4>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FsJKd1kNv%2FMV5-BNWI3-Mj-I2-NDIt-Yj-Ix-Mi00-MGM4-LTlk-Mz-Qt-Mm-Rk-MDQ0-ZDRj-OWU5-Xk-Ey-Xk-Fqc-Gc-V1.jpg&w=1200&output=webp" alt="Film Poster 1" className="w-full h-auto rounded-lg shadow-md object-cover aspect-[2/3] hover:scale-105 transition-transform duration-300"  width="1200" height="800"   />
                    <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FbgKF8pwy%2FGemini-Generated-Image-jtsengjtsengjtse.png&w=1200&output=webp" alt="Film Poster 2" className="w-full h-auto rounded-lg shadow-md object-cover aspect-[2/3] hover:scale-105 transition-transform duration-300"  width="1200" height="800"   />
                  </div>
                  <ul className="text-sm font-light text-gfa-slate space-y-2 mb-4">
                    <li>• {"Winner: Best Family Film at Golden State Film Festival"}</li>
                  </ul>
                </div>
                <div className="flex flex-col xl:flex-row gap-3">
                  <button className="bg-gfa-inkBlack hover:bg-black text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {"Enroll for Next Film"}
                  </button>
                  <button className="border border-gfa-border hover:bg-gray-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {"Co-Produce"}
                  </button>
                </div>
              </div>
            </div>

            {/* Program 3: Special Needs */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="h-64 bg-gray-200 relative">
                <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FycRFxBZ4%2FChat-GPT-Image-2026-3-23-12-23-04.png&w=1200&output=webp" alt="Film Therapy" className="w-full h-full object-cover"  width="1200" height="800"   />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <HeartHandshake className="w-4 h-4"/> Film Therapy </div>
                  <h3 className="text-2xl font-bold font-serif">{"Film Therapy for Special Needs Youth"}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-3 font-serif italic text-lg text-gfa-inkBlack">
                  {"\"Film is just another language. For children with special needs, it might be their most powerful one.\""}
                </p>
                <img loading="lazy" 
                  src="https://wsrv.nl/?url=i.ibb.co%2FKcNpRyb4%2FGemini-Generated-Image-2fx58a2fx58a2fx5-1.png&w=1200&output=webp" 
                  alt="Film Therapy Program" 
                  className="w-full h-auto rounded-xl shadow-sm mb-3 object-cover"
                 width="1200" height="800"   />
                <ul className="text-sm font-light text-gfa-slate space-y-4 mb-4 flex-grow">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {"Filmmaking therapy designed specifically for youth with autism, depression, and anxiety."}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {"Helping children find self-expression and connection through acting and camerawork."}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {"Instructors with professional backgrounds in psychological counseling."}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {"Small group settings ensuring a 1:3 teacher-to-student ratio."}
                  </li>
                </ul>
                <div className="flex flex-col xl:flex-row gap-3">
                  <button className="bg-gfa-inkBlack hover:bg-black text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {"Learn More"}
                  </button>
                  <button className="border border-gfa-border hover:bg-gray-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {"Book Consultation"}
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
             {"Innovation Track"}
           </div>
           <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-3">
             {"AI Filmmaking Training"}
           </h2>
           <p className="text-xl md:text-2xl font-light text-gfa-slate mb-4 font-serif italic max-w-3xl mx-auto">
             {"As AI revolutionizes the film industry, we ensure the next generation doesn't fall behind. They will lead the paradigm shift."}
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-left mb-4">
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{"AI Screenwriting"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {"Mastering narrative generation workflows using ChatGPT and Claude."}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{"Visual Gen & VFX"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {"Creating mind-bending visuals with Midjourney, Runway, and Sora."}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{"AI Editing"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {"Speeding up post-production using Descript and Adobe AI."}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{"AI Producing"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {"Automating breakdowns and scheduling with intelligent production tools."}
               </p>
             </div>
           </div>

           <button onClick={() => setShowRegForm(true)} className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg inline-flex items-center gap-2">
             {"Join the Waitlist"} <ArrowRight className="w-4 h-4"/>
           </button>
        </div>
      </section>


      {/* Empathy Section */}
      <section className="py-5 bg-white border-b border-gfa-border" id="family-guide">
        <div className="container-gfa max-w-3xl mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-5 text-center">
             {"Family Career Guide"}
           </h2>
           <p className="text-xl md:text-2xl font-light text-gfa-slate leading-relaxed font-serif">
             {"We understand the worries many parents face: The film industry is fiercely competitive—is it truly a viable career path? When should my child start preparing? How much is this going to cost us? What specific roles are actually out there? This guide was designed precisely to answer your questions and replace uncertainty with a clear roadmap."}
           </p>
        </div>
      </section>

      {/* Industry Paths */}
      <section className="py-3 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-3">
              {"Understanding Industry Roles"}
            </h2>
            <p className="text-gfa-slate font-light mb-4 max-w-2xl mx-auto">
              {"It's not just 'being a director'. The industry offers a vast array of specialized, highly-skilled professions."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Creative"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"Director, Screenwriter, Cinematographer"}<br/><br/>
                  {"The visionaries who craft the emotional core and visual style of the story."}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Production"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"Producer, Production Designer, Editor"}<br/><br/>
                  {"The master organizers and builders who bring the script from paper to reality."}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Technical"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"VFX Artist, Sound Designer, Colorist"}<br/><br/>
                  {"The highly specialized experts who perfect the immersive experience."}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Emerging (Tech)"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"AI Filmmaker, Interactive Content Dir."}<br/><br/>
                  {"The pioneers utilizing artificial intelligence to revolutionize pipelines."}
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Business"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"Distribution, Marketing, IP Law"}<br/><br/>
                  {"The strategists who ensure the art makes money and reaches the audience."}
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
                {"Development Strategy by Age"}
              </h2>
            </div>

            <div className="space-y-3">
               {/* 6-10 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">6-10</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <Map className="text-[#C9A84C] w-6 h-6"/> {"Exploration Phase"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"Goal:"}</strong>
                      {"Love for cinema, keen observation, boundless creativity."}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{"GFA Provides:"}</strong>
                      {"Summer Camps (Foundational), Community Screenings."}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"What Parents Can Do:"}</strong>
                      {"Take them to diverse films, encourage them to tell bedtime stories, give them a simple camera to play with."}
                    </div>
                  </div>
               </div>

               {/* 11-14 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">11-14</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <Compass className="text-[#C9A84C] w-6 h-6"/> {"Development Phase"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"Goal:"}</strong>
                      {"Master basic narrative creation; successfully complete their first real project."}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{"GFA Provides:"}</strong>
                      {"Summer Camps (Advanced), Children's Film Project, Talent Competitions."}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"What Parents Can Do:"}</strong>
                      {"Support them shooting videos on a smartphone, encourage entering local contests, validate their artistic attempts."}
                    </div>
                  </div>
               </div>

               {/* 15-18 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">15-18</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <BookOpen className="text-[#C9A84C] w-6 h-6"/> {"Specialization Phase"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"Goal:"}</strong>
                      {"Build a robust college portfolio, narrow down a specific career track."}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{"GFA Provides:"}</strong>
                      {"Hollywood Career Training, AI Filmmaking Courses, Golden Feather Awards submissions."}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"What Parents Can Do:"}</strong>
                      {"Support their choice of a related college major, help them start networking, trust their focus."}
                    </div>
                  </div>
               </div>

               {/* College / Grad */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-gfa-inkBlack text-white font-bold font-serif text-sm tracking-widest uppercase px-6 py-3 rounded-bl-3xl rounded-tr-3xl"> Grad </div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <GraduationCap className="text-gfa-inkBlack w-6 h-6"/> {"Professional Launcher"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{"GFA Provides:"}</strong>
                      {"Filmmaker Career Support, industry mentorship network, free professional gear rentals."}
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
             <h2 className="text-3xl font-bold font-serif text-[#C9A84C]">{"Frequently Asked Questions"}</h2>
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
             {"Not Sure Where to Start?"}<br/>
             <span className="text-[#C9A84C]">{"Talk to us."}</span>
           </h2>
           <p className="text-lg text-gfa-slate font-light max-w-2xl mx-auto mb-5">
             {"The GFA team offers free, one-on-one parent consultations to help you understand the most suitable path for your talented child."}
           </p>
           <button onClick={() => {window.location.href='/contact'}} className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-xl">
             {"Book Free Consultation"}
           </button>
         </div>
      </section>
        </>
      )}
    </div>
  );
};
export default YouthPrograms;
