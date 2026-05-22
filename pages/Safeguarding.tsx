import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { 
  Shield, CheckCircle, AlertCircle, 
  Heart, Users, PhoneCall, BookOpen, Scale
} from 'lucide-react';

const Safeguarding: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-3">
      <SEO title="Safeguarding Youth | GFA" />

      {/* Hero */}
      <div className="relative bg-[#1A2B4A] py-5 mb-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" 
            src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1529390079861-591de354faf5%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" 
            alt="Protecting Youth" 
            className="w-full h-full object-cover opacity-25 grayscale"
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-lg">
            {"Creating Safe Spaces for Young Storytellers"}
          </h1>
          <p className="text-xl md:text-2xl text-[#C9A84C] font-light leading-relaxed italic font-serif">
             {"Because an environment of trust is the foundation of true creativity."}
          </p>
        </div>
      </div>

      <div className="container-gfa max-w-6xl mx-auto space-y-4">
        
        {/* Intro */}
        <section className="bg-white p-12 md:p-16 rounded-[40px] shadow-xl border border-gfa-border relative overflow-hidden text-center max-w-4xl mx-auto -mt-32 z-20">
          <Heart className="w-16 h-16 text-[#C9A84C] mx-auto mb-3" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-3">
            {"Our Commitment to Youth"}
          </h2>
          <p className="text-xl text-gfa-slate leading-relaxed font-light">
             {"At the Global Film Alliance (GFA), we believe that the physical, emotional, and psychological well-being of the youth we serve comes before any production schedule or creative goal. As a non-profit organization advocating for youth in the film industry, setting the highest standard for child safeguarding is our fundamental duty."}
          </p>
        </section>

        {/* Photo Grid / Core Values */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
             <div className="space-y-3">
                <h3 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">
                  {"A Culture of Care on Every Set"}
                </h3>
                <p className="text-lg text-gfa-slate font-light leading-relaxed mb-3">
                  {"The film industry can be demanding, but our programs are designed to be nurturing. We train all our mentors, directors, and crew members on strict child safeguarding protocols."}
                </p>
                <ul className="space-y-4 text-gfa-inkBlack font-medium">
                  <li className="flex items-center gap-3"><CheckCircle className="text-[#C9A84C] w-5 h-5"/> {"Background checks for all adult staff"}</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-[#C9A84C] w-5 h-5"/> {"Zero tolerance for harassment or bullying"}</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-[#C9A84C] w-5 h-5"/> {"Strict working hour limits for minors"}</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-[#C9A84C] w-5 h-5"/> {"Dedicated onset Welfare Officers"}</li>
                </ul>
             </div>
             
             {/* Photo Collage */}
             <div className="grid grid-cols-2 gap-4">
               <img loading="lazy"  src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1573164713988-8665fc963095%3Fq%3D80%26w%3D2069%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Youth reading" className="w-full h-64 object-cover rounded-[32px] shadow-lg"  width="1200" height="800"   />
               <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1488521787991-ed7bbaae773c%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Youth smiling" className="w-full h-48 object-cover rounded-[32px] shadow-lg mt-4"  width="1200" height="800"   />
             </div>
          </div>
        </section>

        {/* Protection Framework */}
        <section className="bg-gfa-inkBlack text-white py-4 px-12 md:px-20 rounded-[40px] shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
           
           <div className="relative z-10 text-center mb-4">
             <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-3">
                {"Our Protection Framework"}
             </h2>
             <p className="max-w-2xl mx-auto text-white/80 font-light text-lg">
                {"We uphold international standards to ensure that the vulnerability of youth is never exploited."}
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px]">
                 <Shield className="w-12 h-12 text-[#C9A84C] mb-3" />
                 <h4 className="text-xl font-bold font-serif mb-4">{"Physical Safety"}</h4>
                 <p className="text-sm font-light text-white/70">
                   {"Safe sets, appropriate lighting, hydration stations, and strictly enforced safety rules around equipment."}
                 </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px]">
                 <Users className="w-12 h-12 text-[#C9A84C] mb-3" />
                 <h4 className="text-xl font-bold font-serif mb-4">{"Emotional Well-being"}</h4>
                 <p className="text-sm font-light text-white/70">
                   {"Creating an inclusive, non-judgmental environment where mistakes are treated as learning opportunities."}
                 </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px]">
                 <Scale className="w-12 h-12 text-[#C9A84C] mb-3" />
                 <h4 className="text-xl font-bold font-serif mb-4">{"Digital Privacy"}</h4>
                 <p className="text-sm font-light text-white/70">
                   {"Strict consent protocols for publishing images or films featuring minors, protecting their digital footprint."}
                 </p>
              </div>
           </div>
        </section>

        {/* More Images */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gfa-border">
              <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1516321497487-e288fb19713f%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Mentorship" className="w-full h-full object-cover"  width="1200" height="800"   />
           </div>
           <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gfa-border">
              <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1604928141064-207cea6f5722%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Mentorship 2" className="w-full h-full object-cover"  width="1200" height="800"   />
           </div>
           <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gfa-border">
              <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1503676260728-1c00da094a0b%3Fq%3D80%26w%3D2022%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Mentorship 3" className="w-full h-full object-cover"  width="1200" height="800"   />
           </div>
        </section>

        {/* Reporting Contact */}
        <section className="bg-red-50 border border-red-100 p-12 md:p-16 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center gap-3">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-red-500 shrink-0">
               <PhoneCall className="w-10 h-10" />
            </div>
            <div>
               <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {"See something? Say something."}
               </h3>
               <p className="text-gfa-slate font-light leading-relaxed mb-3 max-w-2xl">
                 {"If you have witnessed or experienced any violation of our youth protection standards, please contact us immediately. All reports are strictly confidential."}
               </p>
               <a href="mailto:jacky@gfafilm.org" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors">
                  <AlertCircle className="w-5 h-5" />
                  {"Submit Confidential Report"}
               </a>
            </div>
        </section>

      </div>
    </div>
  );
};

export default Safeguarding;
