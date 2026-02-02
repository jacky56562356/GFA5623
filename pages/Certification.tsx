
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const CertificationPage: React.FC = () => {
  const { t } = useLocale();

  const certTypes = [
    'Talent Verified',
    'Agency Verified',
    'Training Institution Verified',
    'Event Verified',
    'Audition Process Verified',
    'Project Verified'
  ];

  const govStandards = [
    { title: 'Governance Principles', path: '/governance', icon: '⚖️' },
    { title: 'Auth Standards', path: '/standards', icon: '📋' },
    { title: 'Pricing Transparency', path: '/transparency', icon: '💰' },
    { title: 'Youth Protection', path: '/protection', icon: '🛡️' }
  ];

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title={t.certification.title} 
        subtitle={t.certification.subtitle} 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-black mb-8 uppercase tracking-widest border-l-4 border-gfa-gold pl-6">
            {t.certification.typesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {certTypes.map((type, i) => (
              <div key={i} className="bg-gfa-darkGray p-6 border border-white/5 flex items-center justify-between group hover:border-gfa-gold/50 transition-all">
                <span className="text-sm font-bold uppercase tracking-wider text-white">{type}</span>
                <span className="text-gfa-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-black mb-8 uppercase tracking-widest border-l-4 border-gfa-gold pl-6">
            Governance Standards
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {govStandards.map((std, i) => (
              <Link key={i} to={std.path} className="bg-gfa-darkGray p-6 border border-white/5 text-center group hover:border-gfa-gold transition-all">
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{std.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white">{std.title}</div>
              </Link>
            ))}
          </div>
          
          <div className="bg-gfa-gold/10 p-10 border border-gfa-gold/30">
            <h4 className="text-xl font-black mb-6 uppercase tracking-widest text-white">The Value of GFA Certification</h4>
            <ul className="space-y-4">
              {[
                'Public certificate verification',
                'Fraud prevention & credential security',
                'Higher hiring confidence for global productions',
                'Institutional credibility for international partners'
              ].map((v, i) => (
                <li key={i} className="flex items-start gap-4 text-gfa-gray text-sm">
                  <span className="text-gfa-gold">✦</span> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gfa-darkGray p-10 border border-gfa-gold flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gfa-gold/20 -mr-12 -mt-12 rotate-45"></div>
          <div className="text-6xl mb-8">🛡️</div>
          <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{t.certification.verifyCardTitle}</h3>
          <p className="text-gfa-gray text-sm mb-10 leading-relaxed">
            Protect your production by verifying credentials through our real-time global database.
          </p>
          <Link to="/verify" className="w-full bg-gfa-gold text-gfa-black py-4 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">
            Verify Now
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5 pt-32">
        <h3 className="text-3xl font-black text-center mb-20 uppercase tracking-[0.2em]">{t.certification.processTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
          {[
            'Apply', 'Submit Documents', 'Review', 'Approval', 'Certificate Issued', 'Public Verification', 'Annual Renewal'
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-gfa-gold text-gfa-gold flex items-center justify-center font-bold text-xs mb-4">
                {i + 1}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white leading-tight px-2">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-24 text-center">
          <button className="bg-gfa-gold text-gfa-black px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">
            Start Certification Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
