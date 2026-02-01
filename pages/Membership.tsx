

import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const Membership: React.FC = () => {
  const { t } = useLocale();

  const talentTiers = [
    { name: 'Free', price: '$0', perks: ['Basic Directory Listing', 'Public Audition Access'] },
    { name: 'Silver', price: '$49/yr', perks: ['Verified Badge', 'Priority Audition Access', '10% Gear Discounts'] },
    { name: 'Pro', price: '$199/yr', perks: ['Advanced Talent Profile', 'Support Program Eligibility', '20% Gear Discounts'], recommended: true },
    { name: 'Gold', price: '$499/yr', perks: ['VIP Program Access', 'Concierge Casting Support', 'Unlimited Perk Access'] }
  ];

  const orgTiers = [
    { name: 'Free', price: '$0', perks: ['Post 1 Project / Month', 'Basic Agency Profile'] },
    { name: 'Pro', price: '$999/yr', perks: ['Unlimited Project Posts', 'Advanced Recruitment Tools', 'Verification Seal'] },
    { name: 'Studio', price: '$2499/yr', perks: ['GFA Partner Integration', 'Dedicated Account Manager', 'Custom Support Allocation'] }
  ];

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      {/* Fix: Property 'desc' does not exist on type membership, use 'intro' instead */}
      <SectionHeading title={t.membership.title} subtitle={t.membership.intro} />
      
      <div className="mb-32">
        <h3 className="text-2xl font-black mb-12 uppercase tracking-widest text-center gold-gradient">Talent Memberships</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {talentTiers.map((tier, i) => (
            <div key={i} className={`p-8 border-2 ${tier.recommended ? 'border-gfa-gold bg-gfa-darkGray/50' : 'border-white/5 bg-gfa-black'} flex flex-col`}>
              <h4 className="text-lg font-black uppercase tracking-tight mb-2">{tier.name}</h4>
              <div className="text-3xl font-black text-gfa-gold mb-8">{tier.price}</div>
              <ul className="space-y-3 mb-12 flex-grow">
                {tier.perks.map((p, idx) => (
                  <li key={idx} className="text-[10px] text-gfa-gray uppercase font-bold tracking-widest flex items-center gap-3">
                    <span className="text-gfa-gold">✓</span> {p}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 text-[10px] font-black uppercase tracking-widest border ${tier.recommended ? 'bg-gfa-gold text-gfa-black' : 'border-gfa-gold/50 text-gfa-gold hover:bg-gfa-gold/10'} transition-all`}>
                Select {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-2xl font-black mb-12 uppercase tracking-widest text-center gold-gradient">Organization Memberships</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {orgTiers.map((tier, i) => (
            <div key={i} className="p-10 border border-white/10 bg-gfa-darkGray/20 flex flex-col text-center">
              <h4 className="text-xl font-black uppercase tracking-tight mb-2">{tier.name}</h4>
              <div className="text-4xl font-black text-gfa-gold mb-10">{tier.price}</div>
              <ul className="space-y-4 mb-12 flex-grow text-left">
                {tier.perks.map((p, idx) => (
                  <li key={idx} className="text-xs text-gfa-gray font-medium flex items-start gap-4">
                    <span className="text-gfa-gold mt-1">✦</span> {p}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 text-xs font-black uppercase tracking-widest border border-gfa-gold text-gfa-gold hover:bg-gfa-gold hover:text-gfa-black transition-all">
                Join as {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gfa-gold p-16 text-center text-gfa-black">
        <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Institutional Access</h3>
        <p className="max-w-2xl mx-auto mb-12 font-medium">For government bodies, large-scale studio facilities, or national film boards requiring custom enterprise-level certification workflows.</p>
        <button className="bg-gfa-black text-gfa-gold px-12 py-5 font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl">
          Contact GFA Enterprise
        </button>
      </div>
    </div>
  );
};

export default Membership;
