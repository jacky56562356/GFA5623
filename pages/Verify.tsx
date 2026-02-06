
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Verify: React.FC = () => {
  const { t } = useLocale();
  const v = t.verify || { title: 'Bond Verification', body: 'Verify statutory bonds.', form: { placeholder: 'Bond ID', button: 'Verify' } };
  const [id, setId] = useState('');
  const [result, setResult] = useState<'valid' | 'expired' | 'suspended' | 'notFound' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const clean = id.trim().toUpperCase();
      if (clean.includes('BOND-2024') || clean === 'GFA-BOND') setResult('valid');
      else setResult('notFound');
    }, 1500);
  };

  return (
    <div className="py-40 max-w-6xl mx-auto px-4 min-h-screen">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <div className="inline-block px-4 py-1 border border-gfa-gold/30 text-gfa-gold text-[8px] font-black uppercase tracking-[0.5em] mb-10 bg-gfa-gold/5 font-montserrat">
           Supervisory Database Access
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-8 gold gold-shimmer uppercase tracking-tighter font-cinzel leading-none">
          {v.title}
        </h1>
        <p className="text-gfa-gray text-base mb-12 font-medium uppercase tracking-[0.2em] max-w-2xl mx-auto leading-loose opacity-60">
          {v.body}
        </p>
        
        <form onSubmit={handleVerify} className="bg-gfa-darkGray/40 p-12 border border-white/10 shadow-3xl relative overflow-hidden rounded-sm backdrop-blur-md">
          <div className="absolute top-0 left-0 w-1 h-full bg-gfa-gold opacity-30"></div>
          <input 
            type="text" 
            placeholder={v.form.placeholder} 
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full bg-gfa-black/60 border border-white/10 p-6 text-white focus:outline-none focus:border-gfa-gold font-mono uppercase text-xs tracking-[0.3em] rounded-sm mb-6 transition-all"
          />
          <button disabled={loading} className="btn-gold px-12 py-5 w-full text-[11px] shadow-2xl">
            {loading ? t.common.loading : v.form.button}
          </button>
        </form>

        {result === 'valid' && (
          <div className="mt-12 p-10 bg-green-500/10 border border-green-500/20 animate-fade-up">
            <div className="text-green-500 font-black text-xs uppercase tracking-[0.4em] mb-4">Statutory Status: Verified</div>
            <div className="text-white text-lg font-black uppercase tracking-widest">Bond Active & Audited for 2024-2025</div>
          </div>
        )}
        
        {result === 'notFound' && (
          <div className="mt-12 p-10 bg-red-500/10 border border-red-500/20 animate-fade-up">
            <div className="text-red-500 font-black text-xs uppercase tracking-[0.4em] mb-4">Statutory Status: Not Found</div>
            <div className="text-white text-lg font-black uppercase tracking-widest">No Active Bond Record in GFA Database</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
