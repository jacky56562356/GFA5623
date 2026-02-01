
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const About: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionHeading title="Our Mission" subtitle="Advancing the Global Film Industry" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-full h-full border-4 border-gfa-gold -z-10 opacity-20"></div>
          <img src="https://picsum.photos/seed/about1/800/1000" alt="GFA Alliance" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-8 gold-gradient">Why GFA Exists</h3>
          <p className="text-gfa-gray text-lg mb-6 leading-relaxed">
            The film industry is a complex, multi-billion dollar ecosystem that often lacks transparency and standardized pathways for emerging talent. GFA Global Film Alliance was founded as a non-profit authority to bridge these gaps.
          </p>
          <p className="text-gfa-gray text-lg mb-8 leading-relaxed">
            Our mandate is to establish credible certification standards, protect minors in production environments, and provide the infrastructure support—from studio space to VFX mentorship—that transforms creative potential into professional success.
          </p>
          
          <div className="space-y-8">
             <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gfa-gold flex items-center justify-center font-bold text-gfa-black rounded-sm">01</div>
                <div>
                   <h4 className="text-white font-bold mb-2">Institutional Integrity</h4>
                   <p className="text-gfa-gray text-sm">We operate with government-grade transparency and rigorous compliance standards.</p>
                </div>
             </div>
             <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gfa-gold flex items-center justify-center font-bold text-gfa-black rounded-sm">02</div>
                <div>
                   <h4 className="text-white font-bold mb-2">Global Connectivity</h4>
                   <p className="text-gfa-gray text-sm">Our network spans across 6 continents, connecting regional hubs with Hollywood standards.</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-gfa-darkGray p-12 mb-32 border border-gfa-gold/20">
         <h3 className="text-2xl font-bold mb-12 text-center uppercase tracking-widest">Industry Problems We Solve</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <h5 className="text-gfa-gold font-bold mb-4 uppercase text-xs">Credential Inflation</h5>
               <p className="text-gfa-gray text-sm">Our certification ensures that a "Professional" tag actually means verified experience and skills.</p>
            </div>
            <div>
               <h5 className="text-gfa-gold font-bold mb-4 uppercase text-xs">Talent Isolation</h5>
               <p className="text-gfa-gray text-sm">We provide the network and casting infrastructure that makes talent discoverable by legitimate producers.</p>
            </div>
            <div>
               <h5 className="text-gfa-gold font-bold mb-4 uppercase text-xs">Cost Barriers</h5>
               <p className="text-gfa-gray text-sm">Through our support programs, we remove the financial burden of high-end equipment and studio stages.</p>
            </div>
         </div>
      </div>

      <SectionHeading title="Organization Structure" subtitle="Transparent & Accountable" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
         {[
           { title: 'Executive Board', desc: 'Industry veterans & legal experts' },
           { title: 'Certification Panel', desc: 'Academy-level vetting experts' },
           { title: 'Compliance Team', desc: 'Ethics and minor protection officers' },
           { title: 'Graduate Support', desc: 'Mentors from top global studios' }
         ].map((dept, i) => (
           <div key={i} className="border border-white/5 p-6 hover:bg-gfa-gold/5 transition-colors">
             <h4 className="font-bold text-white mb-2">{dept.title}</h4>
             <p className="text-gfa-gray text-xs">{dept.desc}</p>
           </div>
         ))}
      </div>
    </div>
  );
};

export default About;
