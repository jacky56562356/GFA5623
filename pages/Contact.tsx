
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Contact: React.FC = () => {
  const { t } = useLocale();
  const [formType, setFormType] = useState<'Individual' | 'Organization' | 'Merchant'>('Individual');
  const ui = t.contact.ui || { secretariatBadge: "General Secretariat", alertMessage: "Application submitted to GFA Registry." };

  const types = [
    { id: 'Individual', label: t.contact.labels.individual },
    { id: 'Organization', label: t.contact.labels.organization },
    { id: 'Merchant', label: t.contact.labels.merchant }
  ];

  const merchantCats = t.contact.dropdowns.merchantCats || ['Legal', 'Insurance', 'Dining', 'Retail', 'Travel', 'Production Services'];
  const orgTypes = t.contact.dropdowns.orgTypes || ['Production Agency', 'Film School / Institution', 'Festival / Event Body', 'Government / NGO'];

  return (
    <div className="bg-gfa-warmWhite pt-48 pb-32 px-6 min-h-screen">
      <div className="container-gfa">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8">{ui.secretariatBadge}</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {t.contact.title}
          </h1>
          <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80 border-y border-gfa-border py-12 italic">
            {t.contact.intro}
          </p>
        </header>
      
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 space-y-12">
            <div className="flex flex-col gap-4">
              {types.map((type) => (
                <button 
                  key={type.id}
                  onClick={() => setFormType(type.id as any)}
                  className={`text-left p-6 border-l-4 transition-all uppercase text-[11px] font-black tracking-widest ${formType === type.id ? 'bg-white border-gfa-gold text-gfa-inkBlack shadow-sm' : 'bg-transparent border-gfa-border text-gfa-slate hover:bg-white hover:text-gfa-inkBlack'}`}
                >
                  {type.label} {t.contact.labels.join}
                </button>
              ))}
            </div>
            
            <div className="pt-12 border-t border-gfa-border space-y-8">
              <div>
                <h4 className="text-gfa-slate font-black uppercase text-[10px] tracking-widest mb-2">{t.contact.labels.inquiries}</h4>
                <p className="text-gfa-gold font-bold text-sm">general@gfa-alliance.org</p>
              </div>
              <div>
                <h4 className="text-gfa-slate font-black uppercase text-[10px] tracking-widest mb-2">{t.contact.labels.press}</h4>
                <p className="text-gfa-gold font-bold text-sm">media@gfa-alliance.org</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-10 md:p-16 border border-gfa-border shadow-sm rounded-card">
            <h3 className="text-2xl font-bold mb-12 uppercase tracking-tight font-serif text-gfa-inkBlack">
              {t.contact.form.header.replace('{type}', types.find(it => it.id === formType)?.label || '')}
            </h3>
            
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert(ui.alertMessage); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] text-gfa-slate uppercase font-bold tracking-widest">{t.contact.form.name}</label>
                  <input required type="text" className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold transition-colors rounded-btn text-sm font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] text-gfa-slate uppercase font-bold tracking-widest">{t.contact.form.email}</label>
                  <input required type="email" className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold transition-colors rounded-btn text-sm font-medium" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] text-gfa-slate uppercase font-bold tracking-widest">{t.contact.form.location}</label>
                  <input required type="text" className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold transition-colors rounded-btn text-sm font-medium" />
                </div>
                {formType === 'Merchant' && (
                  <div className="space-y-3">
                    <label className="text-[11px] text-gfa-slate uppercase font-bold tracking-widest">{t.contact.form.cat}</label>
                    <select className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold rounded-btn text-sm font-medium cursor-pointer">
                      {merchantCats.map((c: string) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                )}
                {formType === 'Organization' && (
                  <div className="space-y-3">
                    <label className="text-[11px] text-gfa-slate uppercase font-bold tracking-widest">{t.contact.form.orgType}</label>
                    <select className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold rounded-btn text-sm font-medium cursor-pointer">
                      {orgTypes.map((o: string) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <label className="text-[11px] text-gfa-slate uppercase font-bold tracking-widest">{t.contact.form.message}</label>
                <textarea required rows={5} className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold transition-colors rounded-btn text-sm font-medium"></textarea>
              </div>

              <div className="flex items-start gap-4 py-4">
                <input required type="checkbox" className="mt-1 w-5 h-5 accent-gfa-gold" />
                <p className="text-[11px] text-gfa-slate uppercase tracking-wider font-bold leading-relaxed opacity-70">
                  {t.contact.form.consent}
                </p>
              </div>

              <button type="submit" className="btn-primary w-full shadow-lg">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
