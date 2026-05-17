import React, { useState } from 'react';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import SEO from '../components/SEO';

export default function BecomeMentorApplication() {
  const { locale } = useLocale();
  const isEn = true;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industryRole: '',
    company: '',
    linkedInOrImdb: '',
    bio: '',
    motivation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (db) {
        await addDoc(collection(db, 'mentor_applications'), {
          ...formData,
          createdAt: serverTimestamp(),
        });
      }
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        industryRole: '',
        company: '',
        linkedInOrImdb: '',
        bio: '',
        motivation: '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans pb-4 pt-3 bg-gray-50 min-h-screen">
      <SEO 
        title={"Apply to Become a Mentor | Global Film Alliance"}
        description={"Apply to join the GFA mentorship program as an industry mentor."}
      />
      
      <div className="container-gfa max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="mb-5 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gfa-inkBlack">
                {"Become a Mentor"}
              </h1>
              <p className="text-gfa-slate">
                {"Help raise the next generation of filmmakers. Fill out the application below to join our mentor network."}
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
                <h3 className="font-bold text-lg mb-2">
                  {"Application Submitted Successfully!"}
                </h3>
                <p>
                  {"Thank you for your willingness to give back. Our team will review your application and contact you soon."}
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-3 font-bold uppercase tracking-widest text-xs bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
                >
                  {"Submit Another Application"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                      {"Full Name"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                      {"Email Address"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                      {"Phone Number"}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="industryRole" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                      {"Industry Role"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="industryRole"
                      name="industryRole"
                      required
                      placeholder={"e.g. Director, Producer, Editor"}
                      value={formData.industryRole}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                    {"Company / Affiliation (optional)"} 
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="linkedInOrImdb" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                    {"LinkedIn / IMDb Link"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="linkedInOrImdb"
                    name="linkedInOrImdb"
                    required
                    value={formData.linkedInOrImdb}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition"
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                    {"Professional Biography"} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    required
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition resize-none"
                    placeholder={"Briefly outline your experience in the film industry..."}
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                    {"Why do you want to be a GFA Mentor?"} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows={4}
                    required
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="text-red-500 text-sm">
                    {"There was an error submitting your application. Please try again later."}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gfa-inkBlack hover:bg-gfa-nkBlack/90 disabled:opacity-50 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg"
                  >
                    {isSubmitting 
                      ? ("Submitting...") 
                      : ("Submit Application")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
