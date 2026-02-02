
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Transparency: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Pricing Transparency Standard" 
        subtitle="Parents deserve complete clarity before paying for any youth program." 
      />

      <div className="mb-24">
        <h3 className="text-2xl font-black mb-12 uppercase tracking-widest gold-gradient">Mandatory Pricing Table (Template)</h3>
        <div className="overflow-x-auto border border-white/10 shadow-2xl">
          <table className="w-full text-left border-collapse bg-gfa-darkGray">
            <thead>
              <tr className="bg-gfa-gold text-gfa-black font-black uppercase text-[10px] tracking-widest">
                <th className="p-6 border-r border-gfa-black/10">Item</th>
                <th className="p-6 border-r border-gfa-black/10">Price</th>
                <th className="p-6 border-r border-gfa-black/10">Required/Optional</th>
                <th className="p-6 border-r border-gfa-black/10">Description</th>
                <th className="p-6">Refundable</th>
              </tr>
            </thead>
            <tbody className="text-[10px] font-black uppercase tracking-widest text-gfa-gray">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-6 text-white border-r border-white/5">Registration Fee</td>
                <td className="p-6 border-r border-white/5">$XX.XX</td>
                <td className="p-6 border-r border-white/5">Required</td>
                <td className="p-6 border-r border-white/5">Administrative processing</td>
                <td className="p-6">No</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-6 text-white border-r border-white/5">Audition Session</td>
                <td className="p-6 border-r border-white/5">$XX.XX</td>
                <td className="p-6 border-r border-white/5">Required</td>
                <td className="p-6 border-r border-white/5">Professional evaluation</td>
                <td className="p-6">Yes (per policy)</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-white border-r border-white/5">Optional Training</td>
                <td className="p-6 border-r border-white/5">$XX.XX</td>
                <td className="p-6 border-r border-white/5">Optional</td>
                <td className="p-6 border-r border-white/5">Masterclass access</td>
                <td className="p-6">Partial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        <div className="bg-gfa-darkGray p-12 border border-white/5">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-8 border-b border-gfa-gold/30 pb-4">Disclosure Rules</h4>
          <ul className="space-y-6 text-xs text-gfa-gray font-bold uppercase tracking-wider">
            <li className="flex gap-4"><span>01</span> Publish pricing before registration</li>
            <li className="flex gap-4"><span>02</span> Explain what each fee covers</li>
            <li className="flex gap-4"><span>03</span> State refund policy clearly</li>
            <li className="flex gap-4"><span>04</span> Avoid vague "packages"</li>
          </ul>
        </div>
        <div className="bg-gfa-darkGray p-12 border border-white/5">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-8 border-b border-gfa-gold/30 pb-4">Parent Protection Rules</h4>
          <ul className="space-y-6 text-xs text-gfa-gray font-bold uppercase tracking-wider">
            <li className="flex gap-4"><span>🛡️</span> Right to see all fees before payment</li>
            <li className="flex gap-4"><span>🛡️</span> Right to receive official receipts</li>
            <li className="flex gap-4"><span>🛡️</span> Right to request refunds per policy</li>
            <li className="flex gap-4"><span>🛡️</span> Right to file formal complaints</li>
          </ul>
        </div>
      </div>

      <div className="p-12 bg-red-500/5 border border-red-500/20 text-center">
        <h4 className="text-xl font-black text-red-500 uppercase tracking-widest mb-6">Enforcement & Violations</h4>
        <div className="flex flex-wrap justify-center gap-8">
          {['Official Warning', 'Suspension', 'Certificate Freeze', 'Revocation', 'Public Removal'].map(v => (
            <div key={v} className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 opacity-60">
              • {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transparency;
