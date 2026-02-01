
import React from 'react';
import { useLocale } from '../App';

interface Props {
  type: 'privacy' | 'terms' | 'consent' | 'content';
}

const PolicyPage: React.FC<Props> = ({ type }) => {
  const { t } = useLocale();
  
  const policyData = {
    privacy: t.policies.privacy,
    terms: t.policies.terms,
    consent: t.policies.parental,
    content: t.policies.content
  };

  const currentPolicy = policyData[type];

  return (
    <div className="py-32 max-w-4xl mx-auto px-4">
      <h1 className="text-5xl font-black mb-6 gold-gradient uppercase tracking-tight">{currentPolicy.title}</h1>
      <p className="text-gfa-gray text-lg mb-12 uppercase tracking-widest leading-relaxed">
        {currentPolicy.summary}
      </p>

      <div className="space-y-12">
        {Object.entries(currentPolicy.sections).map(([key, value]) => (
          <div key={key} className="bg-gfa-darkGray p-10 border border-white/5 shadow-xl">
            <h3 className="text-xl font-black mb-6 text-gfa-gold uppercase tracking-widest border-b border-white/5 pb-4">
              {key.toUpperCase()}: {value}
            </h3>
            <div className="text-gfa-gray leading-loose text-sm md:text-base">
              {/* Note: In a real app, you would have detailed body text for each section. 
                  Currently, the translation JSON provides headers/summaries. */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-white/5 text-center">
        <p className="text-gfa-gray text-xs font-bold uppercase tracking-widest">
          Last Updated: May 2024 • Global Compliance Office
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
