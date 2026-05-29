import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Camera, Users, PlaySquare, FileText, Clapperboard, CheckCircle2, ArrowRight } from 'lucide-react';

const FilmmakerSupport: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="font-sans pb-3">
      <div style={{ position: "absolute", left: "-9999px" }}>\n<h1>Filmmaker Support Program - Global Film Alliance</h1>\n<p>GFA's Filmmaker Support Program helps film graduates and emerging independent filmmakers launch their professional careers in Hollywood. We provide camera gear grants, networking opportunities, and producing support for debut features and short films.</p>\n<p>Support includes: Free camera equipment loans through Blackmagic Design partnership, access to professional Hollywood industry contacts, distribution support on Amazon Prime, YouTube, and Tubi, and mentorship from industry professionals.</p>\n<p>Apply for filmmaker support at gfaalliance.org. Contact: jacky@gfafilm.org, 626-677-8017.</p>\n</div>\n      <SEO 
        title="Filmmaker Support" 
        description="GFA provides free professional filming equipment, mentorship, distribution support, and funding advice to help young filmmakers succeed."
      />

      {/* Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-5">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" 
            src="https://wsrv.nl/?url=i.ibb.co%2Fsp4fWHq3%2FChat-GPT-Image-2026-3-23-12-23-22.png&w=1200&output=webp" 
            alt="Filmmaker on set" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-2xl">
            {"You Have the Talent."}<br/>
            <span className="text-[#C9A84C]">{"We'll Help You Get Through the Door."}</span>
          </h1>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-5 bg-white">
        <div className="container-gfa max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-light text-gfa-slate leading-relaxed font-serif">
            {"Imagine a recent film school graduate. Their portfolio is flawless. They have straight A's. But they have zero industry connections, cannot afford camera rentals, and have no idea how to actually break into the business. That person's exact struggle—that invisible wall—is why GFA exists."}
          </p>
        </div>
      </section>

      {/* Core Support Areas */}
      <section className="py-3 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {"How We Help You Break In"}
            </h2>
          </div>

          <div className="space-y-3">
            {/* Support 1 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 shrink-0 flex flex-col">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-3 text-[#C9A84C]">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">{"Free Pro Gear Access"}</h3>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm mt-auto mb-4 md:mb-0">
                  <img loading="lazy" src="https://i.ibb.co/jZs4rXHp/Gemini-Generated-Image-coqxqkcoqxqkcoqx-1.png" alt="Pro Gear Access" className="w-full h-full object-cover" width="600" height="400"  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{"The Barrier: "}</strong>
                  {"A cinema camera package costs $1,500+ a day. This financial barrier forces talented emerging creators to shoot on consumer gear, compromising their creative vision."}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{"GFA Solution: "}</strong>
                  {"Driven by our nonprofit mission, we provide free access to professional equipment. Through industry donations and partnerships, we offer approved independent projects access to cinema cameras to equalize opportunities."}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {"Details: Open to low-budget narrative shorts and documentaries. Projects must demonstrate a clear vision and need. Approved filmmakers receive a 1 to 4-week equipment loan at no cost."}
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link to="/gear-application" className="inline-block text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{"Apply for Gear"}</Link>
                  <Link to="/gear-donation" className="inline-block text-xs font-bold uppercase tracking-widest bg-[#F5F2EE] border border-gfa-border text-gfa-inkBlack px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200">{"Donate Gear for Employment Support"}</Link>
                </div>
              </div>
            </div>

            {/* Support 2 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 shrink-0 flex flex-col gap-4">
                <div>
                  <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-3 text-[#C9A84C]">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif mb-4">{"Nonprofit Mentorship"}</h3>
                </div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <img loading="lazy" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&q=80" alt="Mentorship" className="w-full h-full object-cover" width="600" height="400"  />
                </div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <img loading="lazy" src="https://i.ibb.co/C54fvP0D/Gemini-Generated-Image-d4y2gqd4y2gqd4y2.png" alt="Mentorship 2" className="w-full h-full object-cover" width="600" height="400"  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{"The Barrier: "}</strong>
                  {"The film industry relies heavily on established networks, making it extremely difficult for outsiders—especially those from underrepresented backgrounds—to find guidance and opportunities."}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{"GFA Solution: "}</strong>
                  {"We connect emerging filmmakers with experienced industry volunteers. Dedicated professionals offer guidance, review creative work, and help young creators navigate their early careers."}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {"Details: Mentorship cycles typically run 3 to 6 months with monthly guidance sessions. The focus is on educational growth, community building, and long-term career planning."}
                </p>

                {/* Mentors Info */}
                <div className="pt-4 border-t border-gray-100 mt-2">
                  <h4 className="text-sm font-bold mb-3">{"Our Mentors Spotlight"}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-200">
                        <img loading="lazy"  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80" alt="Mentor" className="w-full h-full object-cover"  width="1200" height="800"   />
                      </div>
                      <div>
                        <div className="font-bold text-sm"> Robert M. </div>
                        <div className="text-xs text-gfa-slate">{"Executive Producer"}</div>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-200">
                        <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1573496359142-b8d87734a5a2%3Fw%3D150%26h%3D150%26fit%3Dcrop%26q%3D80&w=1200&output=webp" alt="Mentor" className="w-full h-full object-cover"  width="1200" height="800"   />
                      </div>
                      <div>
                        <div className="font-bold text-sm"> Sarah W. </div>
                        <div className="text-xs text-gfa-slate">{"Indie Film Director"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Works Showcase */}
                <div className="pt-2">
                  <h4 className="text-sm font-bold mb-3">{"Supported Works Showcase"}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative group">
                      <img loading="lazy" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&h=400&fit=crop&q=80" alt="Work" className="w-full h-full object-cover"  width="1200" height="800"   />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-[10px] sm:text-xs font-bold px-2 py-1 bg-[#C9A84C]/90 rounded">{"Watch Trailer"}</span>
                      </div>
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative group">
                      <img loading="lazy" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop&q=80" alt="Work" className="w-full h-full object-cover"  width="1200" height="800"   />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-[10px] sm:text-xs font-bold px-2 py-1 bg-[#C9A84C]/90 rounded">{"Watch Trailer"}</span>
                      </div>
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative group hidden sm:block">
                      <img loading="lazy" src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&h=400&fit=crop&q=80" alt="Work" className="w-full h-full object-cover"  width="1200" height="800"   />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-[10px] sm:text-xs font-bold px-2 py-1 bg-[#C9A84C]/90 rounded">{"Watch Trailer"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link to="/mentorship-application" className="inline-block text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{"Mentorship Application Form"}</Link>
                  <Link to="/mentors" className="inline-block text-xs font-bold uppercase tracking-widest bg-[#F5F2EE] border border-gfa-border text-gfa-inkBlack px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200">{"View All Mentors"}</Link>
                </div>
              </div>
            </div>

            {/* Support 3 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 shrink-0 flex flex-col">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-3 text-[#C9A84C]">
                  <PlaySquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">{"Festival Strategy Support"}</h3>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm mt-auto mb-4 md:mb-0">
                  <img loading="lazy" src="https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&h=400&fit=crop&q=80" alt="Festival Support" className="w-full h-full object-cover" width="600" height="400"  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{"The Barrier: "}</strong>
                  {"Submitting blindly to festivals drains precious indie budgets, and getting independent work seen by a broader audience remains an enormous challenge."}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{"GFA Solution: "}</strong>
                  {"We provide strategic festival guidance and community screening opportunities. GFA helps filmmakers craft a realistic festival plan and secures fee waivers from partner festivals to reduce financial burdens."}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {"Details: Includes access to our educational resources on festival touring and opportunities to showcase work at GFA community events."}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{"Request Strategy"}</button>
                </div>
              </div>
            </div>

            {/* Support 4 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 shrink-0 flex flex-col">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-3 text-[#C9A84C]">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">{"Public Grant Coaching"}</h3>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm mt-auto mb-4 md:mb-0">
                  <img loading="lazy" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80" alt="Grant Coaching" className="w-full h-full object-cover" width="600" height="400"  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{"The Barrier: "}</strong>
                  {"Navigating complex nonprofit and government film grants is overwhelming. Many independent creators lack the specialized grant-writing skills required to secure public arts funding."}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{"GFA Solution: "}</strong>
                  {"GFA offers educational workshops and specialized coaching to help filmmakers decode grant applications. We teach creators how to articulate their vision and construct transparent budgets for arts organizations."}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {"Details: We host grant-writing workshops and offer peer reviews of director's statements and budget proposals to empower marginalized creators to successfully secure funding."}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{"Book Consultation"}</button>
                </div>
              </div>
            </div>

            {/* Support 5 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 shrink-0 flex flex-col">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-3 text-[#C9A84C]">
                  <Clapperboard className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">{"Educational On-Set Experience"}</h3>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm mt-auto mb-4 md:mb-0">
                  <img loading="lazy" src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&h=400&fit=crop&q=80" alt="On-Set Experience" className="w-full h-full object-cover" width="600" height="400"  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-5 rounded-xl text-sm font-light border border-red-100 leading-relaxed">
                  <strong className="font-bold">{"The Barrier: "}</strong>
                  {"It is an industry paradox: young filmmakers need set experience to get hired, but cannot gain that experience without prior opportunities."}
                </div>
                <div className="bg-green-50 text-green-800 p-5 rounded-xl text-sm font-light border border-green-100 leading-relaxed">
                  <strong className="font-bold">{"GFA Solution: "}</strong>
                  {"GFA produces educational content, community PSAs, and nonprofit short films. We invite aspiring filmmakers to shadow experienced volunteers and fill essential crew roles in a supportive environment."}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2 leading-relaxed">
                  {"Details: These practical experiences help young creators learn professional protocols, earn real IMDb credits, and build their collaborative skills before formally entering the industry."}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{"Apply for Crew"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-3 bg-white border-b border-gfa-border">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
              {"How to Apply"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">1</div>
              <h4 className="font-bold text-lg mb-2">{"Submit Application"}</h4>
              <p className="text-sm font-light text-gfa-slate">{"Fill out the online form, attach your portfolio link and career goals."}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">2</div>
              <h4 className="font-bold text-lg mb-2">{"GFA Review"}</h4>
              <p className="text-sm font-light text-gfa-slate">{"We will carefully review your materials (usually within 3-5 days)."}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">3</div>
              <h4 className="font-bold text-lg mb-2">{"1-on-1 Matching"}</h4>
              <p className="text-sm font-light text-gfa-slate">{"We assign the best support resources and mentors based on your goals."}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">4</div>
              <h4 className="font-bold text-lg mb-2">{"Start Your Journey"}</h4>
              <p className="text-sm font-light text-gfa-slate">{"Receive gear, meet mentors, and officially enter the GFA network."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-5 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4">{"Who Can Apply?"}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10">
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-400 w-5 h-5"/> {"Eligible:"}</h4>
                <ul className="space-y-3 text-sm font-light text-white/80">
                  <li>• {"Film, TV, and Media graduates"}</li>
                  <li>• {"Independent directors, DPs, and producers with a portfolio"}</li>
                  <li>• {"Emerging filmmakers from multicultural backgrounds"}</li>
                  <li>• {"Talented creators from low-income backgrounds"}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white/50">{"Not Required:"}</h4>
                <ul className="space-y-3 text-sm font-light text-white/50">
                  <li>• {"Ivy League or elite film school degrees"}</li>
                  <li>• {"Pre-existing industry connections"}</li>
                  <li>• {"Expensive ownership of cinema gear"}</li>
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-3 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {"Success Stories"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1"> Alex </h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{"Cinematography Grad"}</p>
               <p className="text-sm font-light text-gfa-slate mb-3 flex-grow italic">
                 "{"GFA lent me an entire Blackmagic camera package for my first short film. That short got into festivals, and directly led to my first paying gig."}"
               </p>
             </div>

             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1"> Sarah </h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{"Independent Director"}</p>
               <p className="text-sm font-light text-gfa-slate mb-3 flex-grow italic">
                 "{"My GFA mentor pulled my resume from the pile and got me a production company internship. Now I work there full-time."}"
               </p>
             </div>

             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1"> David </h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{"Low-Income Creator"}</p>
               <p className="text-sm font-light text-gfa-slate mb-3 flex-grow italic">
                 "{"I had to shelve my passion project because I couldn't afford production. GFA's grant application coaching helped me secure the funding to finish it."}"
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Large CTA */}
      <section className="py-3 bg-gfa-inkBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A84C] mix-blend-overlay opacity-10"></div>
        <div className="container-gfa relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-3">
            {"You're One Step Away."}
          </h2>
          <p className="text-xl md:text-2xl font-serif text-[#C9A84C] mb-3">
            {"Let GFA help you take it."}
          </p>
          <Link to="/gear-application" className="bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-12 py-5 rounded-full font-bold uppercase tracking-widest text-base hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(201,168,76,0.4)] active:scale-95 active:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all duration-200 shadow-[0_0_30px_rgba(201,168,76,0.3)] mb-4 inline-flex items-center gap-2">
            {"Apply Now"} <ArrowRight className="w-5 h-5"/>
          </Link>
          <div className="text-sm font-light text-white/50 tracking-widest uppercase mt-4">
            {"Free · Nonprofit · No Connections Required"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilmmakerSupport;
