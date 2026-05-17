import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Users, Presentation, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolved: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="font-sans pb-3">
      <SEO title="Get Involved | Global Film Alliance" />

      {/* Hero */}
      <section className="bg-gfa-inkBlack text-white pt-4 pb-3 border-b border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h1 className="text-4xl md:text-6xl font-bold font-serif mb-3 leading-tight">
             {"Join the"}<br/>
             <span className="text-[#C9A84C]">{"Movement."}</span>
           </h1>
           <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto italic font-serif">
             {"It takes a village to raise a filmmaker. Lend your time, your expertise, or your passion."}
           </p>
        </div>
      </section>

      {/* Options */}
      <section className="py-3 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Volunteer */}
              <div className="bg-[#F5F2EE] rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                 <Users className="w-10 h-10 text-[#C9A84C] mb-3" />
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{"Volunteer"}</h3>
                 <p className="text-gfa-slate font-light text-sm mb-4 leading-relaxed flex-grow">
                   {"Help out at our summer camps, assist with the Golden Feather Awards, or support our community screenings. Perfect for college students looking for hours or community lovers."}
                 </p>
                 <Link to="/contact" className="inline-flex text-gfa-inkBlack font-bold uppercase tracking-widest text-xs items-center gap-2 group-hover:text-[#C9A84C] transition-colors">
                   {"Apply to Volunteer"} <ArrowRight className="w-4 h-4"/>
                 </Link>
              </div>

              {/* Mentor */}
              <div className="bg-[#F5F2EE] rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                 <Presentation className="w-10 h-10 text-[#C9A84C] mb-3" />
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{"Become a Mentor"}</h3>
                 <p className="text-gfa-slate font-light text-sm mb-4 leading-relaxed flex-grow">
                   {"Are you an established Hollywood professional? Give back by taking 1-2 emerging filmmakers under your wing. Review scripts, offer coffee chats, or let them shadow."}
                 </p>
                 <Link to="/become-mentor" className="inline-flex text-gfa-inkBlack font-bold uppercase tracking-widest text-xs items-center gap-2 group-hover:text-[#C9A84C] transition-colors">
                   {"Join Mentorship Matrix"} <ArrowRight className="w-4 h-4"/>
                 </Link>
              </div>

              {/* Careers */}
              <div className="bg-[#F5F2EE] rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                 <Briefcase className="w-10 h-10 text-[#C9A84C] mb-3" />
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{"Careers & Internships"}</h3>
                 <p className="text-gfa-slate font-light text-sm mb-4 leading-relaxed flex-grow">
                   {"Join the GFA core team. We occasionally hire camp counselors, digital marketers, and program coordinators to keep our nonprofit running smoothly."}
                 </p>
                 <Link to="/contact" className="inline-flex text-gfa-inkBlack font-bold uppercase tracking-widest text-xs items-center gap-2 group-hover:text-[#C9A84C] transition-colors">
                   {"View Openings"} <ArrowRight className="w-4 h-4"/>
                 </Link>
              </div>

           </div>
        </div>
      </section>

    </div>
  );
};

export default GetInvolved;
