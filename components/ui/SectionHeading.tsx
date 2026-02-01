
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gfa-gray text-lg max-w-2xl mx-auto uppercase tracking-[0.2em] font-light text-sm">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-24 bg-gfa-gold ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
