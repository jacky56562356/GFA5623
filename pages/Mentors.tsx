import React, { useState } from 'react';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

type Mentor = {
  id: number;
  name: string;
  roleEn: string;
  roleZh: string;
  image: string;
  bioEn: string;
  bioZh: string;
  expertiseEn?: string[];
  expertiseZh?: string[];
};

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Robert M.",
    roleEn: "Executive Producer",
    roleZh: "执行制片人",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
    bioEn: "Veteran producer with a track record of supporting breakthrough independent films and emerging talents.",
    bioZh: "资深制片人，在支持突破性独立电影和新兴电影人才方面拥有丰富经验。",
    expertiseEn: ["Film Production", "Project Financing", "Talent Development"],
    expertiseZh: ["电影制作", "项目融资", "人才培养"]
  },
  {
    id: 2,
    name: "Sarah W.",
    roleEn: "Indie Film Director",
    roleZh: "国际独立电影导演",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    bioEn: "Award-winning director with a passion for storytelling. Specializes in character-driven narratives.",
    bioZh: "屡获殊荣的导演，对故事讲述充满热情。专长于人物驱动的叙事电影。",
    expertiseEn: ["Directing", "Storytelling", "Character Development"],
    expertiseZh: ["导演", "故事叙述", "角色发展"]
  },
  {
    id: 3,
    name: "David C.",
    roleEn: "Cinematographer",
    roleZh: "资深摄影指导",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    bioEn: "Worked on numerous commercial and independent projects. Provides guidance on visual storytelling.",
    bioZh: "曾参与众多商业和独立电影项目。能够提供关于视觉叙事和摄影技术的专业指导。",
    expertiseEn: ["Cinematography", "Visual Storytelling", "Lighting"],
    expertiseZh: ["摄影指导", "视觉叙事", "灯光"]
  },
  {
    id: 4,
    name: "Emily T.",
    roleEn: "Screenwriter",
    roleZh: "专业编剧",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    bioEn: "Focuses on script development and narrative structure. Helps emerging writers find their voice.",
    bioZh: "专注剧本开发和叙事结构。帮助新兴编剧找到自己的声音，完善故事。",
    expertiseEn: ["Screenwriting", "Script Development", "Narrative Structure"],
    expertiseZh: ["编剧", "剧本开发", "叙事结构"]
  }
];

export default function Mentors() {
  const { locale } = useLocale();
  const isEn = true;
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  return (
    <div className="font-sans pb-4 pt-3 bg-gray-50 min-h-screen">
      <SEO 
        title={"Our Mentors | Global Film Alliance"} 
        description={"Meet the mentors supporting young filmmakers."}
      />
      
      <div className="container-gfa max-w-6xl mx-auto px-4">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-3 text-gfa-inkBlack">
            {"Meet Our Mentors"}
          </h1>
          <p className="text-xl text-gfa-slate max-w-3xl mx-auto font-light">
            {"Industry professionals dedicated to supporting and guiding the next generation of filmmakers."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {mentors.map(mentor => (
            <div key={mentor.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-200">
                <img fetchPriority="high"  src={mentor.image} alt={mentor.name} className="w-full h-full object-cover"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif mb-1">{mentor.name}</h3>
                <div className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest mb-4">
                  {mentor.roleEn}
                </div>
                <p className="text-gfa-slate text-sm leading-relaxed mb-4 line-clamp-3">
                  {mentor.bioEn}
                </p>
                <button 
                  onClick={() => setSelectedMentor(mentor)}
                  className="text-sm font-bold text-[#C9A84C] hover:text-[#b09241] uppercase tracking-wider flex items-center transition-colors"
                >
                  {"View Profile"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mentor Modal */}
        {selectedMentor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedMentor(null)}>
            <div 
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMentor(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 shrink-0">
                  <div className="aspect-square md:aspect-auto md:h-full bg-gray-200">
                    <img fetchPriority="high" src={selectedMentor.image} alt={selectedMentor.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold font-serif mb-1">{selectedMentor.name}</h3>
                  <div className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest mb-6">
                    {selectedMentor.roleEn}
                  </div>
                  
                  <div className="block mb-6">
                    <h4 className="font-bold text-sm tracking-widest uppercase mb-2 text-gray-900 border-b pb-2">
                       {"Biography"}
                    </h4>
                    <p className="text-gfa-slate text-base leading-relaxed">
                      {selectedMentor.bioEn}
                    </p>
                  </div>

                  {((selectedMentor.expertiseEn)?.length ?? 0) > 0 && (
                    <div className="block">
                      <h4 className="font-bold text-sm tracking-widest uppercase mb-3 text-gray-900 border-b pb-2">
                         {"Areas of Expertise"}
                      </h4>
                      <ul className="flex flex-wrap gap-2 text-sm">
                         {(selectedMentor.expertiseEn)?.map((skill, idx) => (
                            <li key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                               {skill}
                            </li>
                         ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gfa-inkBlack text-white rounded-3xl p-10 md:p-16 text-center mt-12">
          <h2 className="text-3xl font-bold font-serif mb-4">
            {"Ready to join the program?"}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-4 font-light">
            {"Apply now to connect with our mentors and get the guidance you need for your film career."}
          </p>
          <Link 
            to="/mentorship-application" 
            className="inline-block bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg"
          >
            {"Apply Now"}
          </Link>
        </div>
      </div>
    </div>
  );
}
