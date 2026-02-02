import React, { useState } from 'react';
import { useLocale } from '../App';

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
      if (clean === 'GFA-VALID') setResult('valid');
      else if (clean === 'GFA-EXPIRED') setResult('expired');
      else if (clean === 'GFA-SUSPENDED') setResult('suspended');
      else setResult('notFound');
    }, 1200);
  };

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-6 gold-gradient uppercase tracking-tighter">{t.verify.title}</h1>
        <p className="text-gfa-gray text-lg mb-12">{t.verify.body}</p>
        
        <form onSubmit={handleVerify} className="bg-gfa-darkGray p-10 border border-gfa-gold/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input 
              type="text" 
              placeholder={t.verify.form.placeholder} 
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="flex-grow bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold font-mono uppercase"
            />
            <button disabled={loading} className="bg-gfa-gold text-gfa-black px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white disabled:opacity-50">
              {loading ? t.common.loading : t.verify.form.button}
            </button>
          </div>
          
          <div className="text-[10px] text-gfa-gray uppercase tracking-widest">
            {t.verify.note}: GFA-VALID, GFA-EXPIRED, GFA-SUSPENDED
          </div>
        </form>

        {result && !loading && (
          <div className="mt-12 p-10 bg-gfa-black border-2 border-dashed border-gfa-gold/20 animate-fade-in">
            {result === 'valid' && (
              <div>
                <div className="text-green-500 font-black text-2xl uppercase mb-2">{t.verify.result.valid}</div>
                <p className="text-gfa-gray text-sm">Status: Active • Expiry: Dec 2025 • Registered: Alex Rivers</p>
              </div>
            )}
            {result === 'expired' && (
              <div>
                <div className="text-orange-500 font-black text-2xl uppercase mb-2">{t.verify.result.expired}</div>
                <p className="text-gfa-gray text-sm">Status: Inactive • Renew Required • Last Active: July 2023</p>
              </div>
            )}
            {result === 'suspended' && (
              <div>
                <div className="text-red-500 font-black text-2xl uppercase mb-2">{t.verify.result.suspended}</div>
                <p className="text-gfa-gray text-sm">Status: Blocked • Contact GFA Compliance Office.</p>
              </div>
            )}
            {result === 'notFound' && (
              <div>
                <div className="text-white font-black text-2xl uppercase mb-2">{t.verify.result.notFound}</div>
                <p className="text-gfa-gray text-sm">ID: {id} does not match any record. Please check the spelling.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;