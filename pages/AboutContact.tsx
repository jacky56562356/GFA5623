
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';

const AboutContact = () => {
  const { t } = useLocale();
  const about = t.about;

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mb-12 gold uppercase text-6xl md:text-8xl leading-tight tracking-tighter">{t.nav.about}</h1>
        <p className="text-xl md:text-2xl text-gfa-gray uppercase tracking-[0.3em] font-light leading-loose border-y border-white/10 py-12">
          {about.body}
        </p>
      </div>
    </div>
  );
};

export default AboutContact;
