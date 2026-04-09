import React from 'react';
import { useLocale } from '../LocaleContext';
import { motion } from 'motion/react';
import { Award, Star, Image as ImageIcon, Trophy } from 'lucide-react';

const Awards: React.FC = () => {
  const { t } = useLocale();
  const awardsData = t.awardsPage;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gfa-inkBlack text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-gfa relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="gold-badge mb-8 mx-auto"
          >
            Institutional Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-serif mb-8"
          >
            {awardsData.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gfa-gold font-light italic font-serif"
          >
            {awardsData.hero.subtitle}
          </motion.p>

          {/* Logos Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-16"
          >
            <div className="flex flex-col items-center group">
              <div className="w-48 md:w-56 mb-4">
                <img 
                  src="https://i.ibb.co/mrT1n0Fw/Chat-GPT-Image-2026-3-8-11-04-43.png" 
                  alt="Golden Feather Trophy Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <span className="text-gfa-gold text-sm uppercase tracking-[0.3em] font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                {awardsData.hero.trophyLabel}
              </span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-48 md:w-56 mb-4">
                <img 
                  src="https://i.ibb.co/8gHZ9bxG/Chat-GPT-Image-2026-3-8-11-02-27.png" 
                  alt="Golden Feather Festival Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <span className="text-gfa-gold text-sm uppercase tracking-[0.3em] font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                {awardsData.hero.festivalLabel}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container-gfa">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">
              {awardsData.intro.title}
            </h2>
            <p className="text-lg text-gfa-slate leading-relaxed font-light">
              {awardsData.intro.body}
            </p>
          </div>
        </div>
      </section>

      {/* History / Legacy Section */}
      <section className="py-24 bg-gfa-warmWhite border-y border-gfa-border">
        <div className="container-gfa">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gold-badge mb-6 mx-auto">Heritage</div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">
              {awardsData.history?.title}
            </h2>
            <p className="text-lg text-gfa-slate leading-relaxed font-light italic">
              "{awardsData.history?.body}"
            </p>
          </div>
        </div>
      </section>

      {/* Judging Criteria Section */}
      <section className="py-24 bg-white">
        <div className="container-gfa">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">{awardsData.judgingCriteria?.title}</h2>
            <p className="text-gfa-slate font-light max-w-2xl mx-auto">{awardsData.judgingCriteria?.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {awardsData.judgingCriteria?.items?.map((item: any, i: number) => (
              <div key={i} className="p-8 border border-gfa-border rounded-2xl hover:border-gfa-gold/50 transition-colors group">
                <div className="w-12 h-12 bg-gfa-gold/10 rounded-full flex items-center justify-center text-gfa-gold mb-6 group-hover:bg-gfa-gold group-hover:text-white transition-colors">
                  <span className="font-serif font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-3">{item.title}</h3>
                <p className="text-gfa-slate font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories List Section */}
      <section className="py-24 bg-gfa-inkBlack text-white">
        <div className="container-gfa">
          <div className="text-center mb-16">
            <div className="gold-badge mb-6 mx-auto">Disciplines</div>
            <h2 className="text-4xl font-bold font-serif mb-4">{awardsData.categoriesList?.title}</h2>
            <p className="text-white/70 font-light max-w-2xl mx-auto">{awardsData.categoriesList?.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.categoriesList?.items?.map((item: any, i: number) => (
              <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-gfa-gold/50 transition-colors">
                <h3 className="text-xl font-bold font-serif text-gfa-gold mb-3">{item.title}</h3>
                <p className="text-white/70 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Winners Section */}
      <section className="py-24 bg-gfa-warmWhite">
        <div className="container-gfa">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Trophy className="w-12 h-12 text-gfa-gold" />
            </div>
            <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">{awardsData.winners2025.title}</h2>
            <p className="text-gfa-slate font-light">{awardsData.winners2025.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awardsData.winners2025.categories.map((item: any, i: number) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gfa-border hover:shadow-xl transition-all text-center group"
              >
                <div className="w-12 h-12 bg-gfa-gold/10 rounded-full flex items-center justify-center text-gfa-gold mx-auto mb-6 group-hover:bg-gfa-gold group-hover:text-white transition-colors">
                  <Star className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-widest text-gfa-slate mb-2">{item.category}</div>
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-2">{item.title}</h3>
                <div className="text-gfa-gold font-medium">{item.winner}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container-gfa">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <ImageIcon className="w-12 h-12 text-gfa-gold" />
            </div>
            <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">{awardsData.gallery.title}</h2>
            <p className="text-gfa-slate font-light">{awardsData.gallery.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 aspect-video bg-gfa-warmWhite rounded-[40px] overflow-hidden group relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
                alt="GFA Ceremony" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-serif italic text-lg">The Grand Gala Evening</p>
              </div>
            </div>
            <div className="aspect-square bg-gfa-warmWhite rounded-[40px] overflow-hidden group relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1511733334857-e82f64b35821?q=80&w=1974&auto=format&fit=crop" 
                alt="Award Trophy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square bg-gfa-warmWhite rounded-[40px] overflow-hidden group relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" 
                alt="Red Carpet" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-2 aspect-video bg-gfa-warmWhite rounded-[40px] overflow-hidden group relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop" 
                alt="Cinema Hall" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gfa-inkBlack text-white text-center">
        <div className="container-gfa">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8">Ready to Submit Your Vision?</h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto">Submissions for the 2026 Golden Feather Awards open in September. Ensure your production meets GFA regulatory standards.</p>
          <button className="btn-gfa-gold px-12 py-4 text-lg">
            View Submission Guidelines
          </button>
        </div>
      </section>
    </div>
  );
};

export default Awards;
