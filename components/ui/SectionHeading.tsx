import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tighter uppercase font-montserrat leading-tight gold">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gfa-gray text-[10px] md:text-xs max-w-3xl mx-auto uppercase tracking-[0.2em] font-bold opacity-50">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-0.5 w-16 bg-gfa-gold/60 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;