
import React from 'react';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

interface Props {
  type: 'privacy' | 'terms' | 'consent' | 'content';
}

const PolicyPage: React.FC<Props> = ({ type }) => {
  const { t } = useLocale();
  
  // Use optional chaining and provide defaults to avoid crashes if i18n data is missing from the dictionary
  const policyData = {
    privacy: t.policies?.privacy || { title: 'Privacy Policy', summary: '', sections: {} },
    terms: t.policies?.terms || { title: 'Terms of Service', summary: '', sections: {} },
    consent: t.policies?.parental || { title: 'Parental Consent', summary: '', sections: {} },
    content: t.policies?.content || { title: 'Content Guidelines', summary: '', sections: {} }
  };

  const currentPolicy = policyData[type];

  return (
    <div className="py-24 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gfa-inkBlack">{currentPolicy.title}</h1>
      <p className="text-gfa-slate font-light text-lg mb-12 leading-relaxed">
        {currentPolicy.summary}
      </p>

      <div className="space-y-12">
        {/* Fix: Added check for currentPolicy.sections and used String(value) to resolve the 'unknown' to 'ReactNode' assignment error */}
        {currentPolicy.sections && Object.entries(currentPolicy.sections).map(([key, value]) => (
          <div key={key} className="bg-white p-10 border border-gfa-border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold font-serif mb-6 text-gfa-inkBlack pb-4 border-b border-gfa-border">
              {key}: {String(value)}
            </h3>
            <div className="text-gfa-slate font-light leading-relaxed text-sm md:text-base">
              {/* Note: In a real app, you would have detailed body text for each section. 
                  Currently, the translation JSON provides headers/summaries. */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-10 border-t border-white/5 text-center">
        <p className="text-gfa-gray text-xs font-bold uppercase tracking-widest">
          Last Updated: May 2024 • Global Compliance Office
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
