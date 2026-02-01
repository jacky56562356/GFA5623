
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Transparency: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Pricing Transparency Standard" 
        subtitle="Parents deserve complete clarity before paying for any youth program." 
      />

      <div className="mb-24 overflow-x-auto">
        <h3 className="text-2xl font-black mb-8 uppercase tracking-widest gold-gradient">Mandatory Pricing Table Example</h3>
        <table className="w-full text-left border-collapse bg-gfa-darkGray border border-white/10">
          <thead>
            <tr className="border-b border-gfa-gold/30">
              {['Item', 'Price', 'Required/Optional', 'Description', 'Refundable'].map(h => (
                <th key={h} className="p-6 text-[10px] font-black uppercase tracking-widest text-gfa-gold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs text-gfa-gray font-bold uppercase tracking-widest">
            <tr className="border-b border-white/5">
              <td className="p-6 text-white">Initial Registration</td>
              <td className="p-6">$50.00</td>
              <td className="p-6">Required</td>
              <td className="p-6">One-time processing fee</td>
              <td className="p-6">No</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="p-6 text-white">Audition Slot</td>
              <td className="p-6">$25.00</td>
              <td className="p-6">Required</td>
              <td className="p-6">Professional venue fee</td>
              <td className="p-6">Yes (48h notice)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="p-6 text-white">Professional Portfolio</td>
              <td className="p-6">$120.00</td>
              <td className="p-6">Optional</td>
              <td className="p-6">Standard 5-photo digital set</td>
              <td className="p-6">N/A (After session)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="bg-gfa-darkGray p-10 border border-white/5">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-6 underline">Disclosure Rules</h4>
          <ul className="space-y-4 text-xs text-gfa-gray leading-loose font-bold uppercase">
            <li>Publish pricing before registration</li>
            <li>Explain what each fee covers</li>
            <li>State refund policy clearly</li>
            <li>Avoid vague "packages"</li>
          </ul>
        </div>
        <div className="bg-gfa-darkGray p-10 border border-white/5">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-6 underline">Parent Protection Rights</h4>
          <ul className="space-y-4 text-xs text-gfa-gray leading-loose font-bold uppercase">
            <li>See all fees before payment</li>
            <li>Receive official receipts</li>
            <li>Request refunds per policy</li>
            <li>File formal complaints</li>
          </ul>
        </div>
        <div className="bg-gfa-darkGray p-10 border border-white/5">
          <h4 className="text-sm font-black uppercase tracking-widest text-red-500 mb-6 underline">Enforcement</h4>
          <ul className="space-y-4 text-xs text-red-400 leading-loose font-bold uppercase opacity-80">
            <li>Official Warnings</li>
            <li>Temporary Suspension</li>
            <li>Certificate Freezing</li>
            <li>Full Revocation</li>
            <li>Public Listing Removal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
