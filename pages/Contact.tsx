

import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const Contact: React.FC = () => {
  const { t } = useLocale();
  const [formType, setFormType] = useState<'Individual' | 'Organization' | 'Merchant'>('Individual');

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading title="Contact & Join" subtitle="Choose the pathway that fits you." />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1 space-y-12">
          <div className="flex flex-col gap-4">
            {['Individual', 'Organization', 'Merchant'].map((type) => (
              <button 
                key={type}
                onClick={() => setFormType(type as any)}
                className={`text-left p-6 border-l-4 transition-all uppercase text-xs font-black tracking-widest ${formType === type ? 'bg-gfa-gold/10 border-gfa-gold text-gfa-gold' : 'bg-gfa-darkGray/30 border-white/5 text-gfa-gray hover:text-white'}`}
              >
                {type} Join
              </button>
            ))}
          </div>
          
          <div className="pt-12 border-t border-white/5 space-y-8">
            <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-2">Inquiries</h4>
              <p className="text-gfa-gold font-bold">general@gfa-alliance.org</p>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-2">Press</h4>
              <p className="text-gfa-gold font-bold">media@gfa-alliance.org</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-gfa-darkGray p-10 md:p-16 border border-white/5 shadow-2xl">
          <h3 className="text-3xl font-black mb-12 uppercase tracking-tight">{formType} Application Form</h3>
          
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Application submitted to GFA Registry.'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Full Name / Entity Name</label>
                <input required type="text" className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Email Address</label>
                <input required type="email" className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Location (City, Country)</label>
                <input required type="text" className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold transition-colors" />
              </div>
              {formType === 'Merchant' && (
                <div className="space-y-3">
                  <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Business Category</label>
                  <select className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold">
                    <option>Legal</option>
                    <option>Insurance</option>
                    <option>Dining</option>
                    <option>Retail</option>
                    <option>Travel</option>
                    <option>Production Services</option>
                  </select>
                </div>
              )}
              {formType === 'Organization' && (
                <div className="space-y-3">
                  <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Organization Type</label>
                  <select className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold">
                    <option>Production Agency</option>
                    <option>Film School / Institution</option>
                    <option>Festival / Event Body</option>
                    <option>Government / NGO</option>
                  </select>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Brief Message / Proposal Summary</label>
              <textarea required rows={5} className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold transition-colors"></textarea>
            </div>

            <div className="flex items-start gap-4 py-4">
              <input required type="checkbox" className="mt-1 w-5 h-5 accent-gfa-gold" />
              <p className="text-[10px] text-gfa-gray uppercase tracking-widest font-bold leading-relaxed">
                I hereby consent to GFA processing my data in accordance with the Content Policy and Parental Consent frameworks where applicable. I certify that all information provided is accurate and verifiable.
              </p>
            </div>

            <button type="submit" className="bg-gfa-gold text-gfa-black px-16 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-xl">
              {/* Fix: Property 'send' does not exist on type common, use 'submit' instead */}
              {t.common.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
