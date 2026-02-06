
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Complaints = () => {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const comp = t.complaints;

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center max-w-5xl mx-auto">
          <h1 className="mb-10 gold uppercase text-5xl md:text-8xl tracking-tighter leading-none">{comp.title}</h1>
        </header>
        <div className="bg-gfa-darkGray p-12 border border-white/10 shadow-3xl">
          <form className="space-y-12" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
            <input type="text" required className="w-full bg-gfa-black border border-white/10 p-6 text-[11px] font-bold uppercase tracking-widest text-white focus:border-red-600 outline-none transition-all" placeholder="Organization Name" />
            <button className="w-full py-7 bg-red-600 text-white font-black uppercase text-[11px] tracking-[0.2em] hover:bg-red-700 transition-all">
              {comp.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
