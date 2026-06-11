import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  const title = "Our Programs — Shaping Tomorrow's Storytellers";
  const desc = "Empowering youth through professional training, real-world experience, and industry access.";

  const programs = [
    {
      title: "Film Awards Ceremony",
      desc: "Celebrating young creatives and emerging directors on Hollywood's biggest stages.",
      link: "/programs/awards",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Emerging Director Support",
      desc: "Providing mentorship, grants, and practical set resources to guide new directors in bringing their vision to life.",
      link: "/programs/emerging-director",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Global Film Platform Alliance",
      desc: "Partnering with major streaming networks, theaters, and global festivals to amplify young voices worldwide.",
      link: "/programs/platform-alliance",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Diverse Ethnicity Film Support",
      desc: "Funding and spotlighting underrepresented cultural stories globally, ensuring every ethnicity has a voice in cinema.",
      link: "/programs/diverse-ethnicity",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-3">
      <SEO title={"Programs | GFA"} description={desc} />

      {/* Banner */}
      <div className="relative bg-[#1A2B4A] py-5 mb-3 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchPriority="high" 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop" 
            alt="Programs Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gfa-gold font-light leading-relaxed max-w-2xl italic font-serif">
               {desc}
            </p>
          </div>
        </div>
      </div>

      <div className="container-gfa max-w-6xl mx-auto space-y-4">
        {programs.map((program, idx) => (
          <div key={idx} className={`bg-white rounded-[32px] overflow-hidden shadow-xl border border-gfa-border flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} group hover:shadow-2xl transition-all duration-500`}>
            {/* Image */}
            <div className="md:w-1/2 relative overflow-hidden h-[300px] md:h-auto">
              <img loading="lazy" 
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
               width="1200" height="800"   />
            </div>
            
            {/* Content */}
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:bg-[#C9A84C]/10 pointer-events-none"></div>
               <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-3 leading-tight">{program.title}</h2>
               <p className="text-lg text-gfa-slate leading-relaxed font-light mb-5 opacity-90">
                 {program.desc}
               </p>
               <Link 
                 to={program.link} 
                 className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#C9A84C] hover:text-black transition-colors group/link w-fit"
               >
                 {'Learn More'}
                 <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
