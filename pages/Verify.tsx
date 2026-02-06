
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Verify: React.FC = () => {
  const { t } = useLocale();
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
    <div className="py-16 max-w-6xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-black mb-6 gold gold-shimmer uppercase tracking-tighter font-montserrat">{t.verify.title}</h1>
        <p className="text-gfa-gray text-base mb-10 font-medium uppercase tracking-[0.1em] leading-relaxed opacity-70">
          {t.verify.body}
        </p>
        <form onSubmit={handleVerify} className="bg-gfa-darkGray p-10 border border-gfa-gold/20 shadow-2xl relative overflow-hidden rounded-lg">
          <input 
            type="text" 
            placeholder={t.verify.form.placeholder} 
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold font-mono uppercase text-[11px] tracking-widest rounded-md mb-4"
          />
          <button disabled={loading} className="btn-gold px-8 py-4 w-full">
            {loading ? t.common.loading : t.verify.form.button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
