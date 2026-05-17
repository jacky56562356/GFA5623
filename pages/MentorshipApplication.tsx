import React, { useState } from 'react';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import SEO from '../components/SEO';

export default function MentorshipApplication() {
  const { locale } = useLocale();
  const isEn = true;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    portfolioUrl: '',
    bio: '',
    goals: '',
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
        await addDoc(collection(db, 'mentorship_applications'), {
          ...formData,
          createdAt: serverTimestamp(),
        });
      }
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        portfolioUrl: '',
        bio: '',
        goals: '',
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
        title={"Mentorship Application | Global Film Alliance"}
        description={"Apply for the GFA mentorship program."}
      />
      
      <div className="container-gfa max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="mb-5 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gfa-inkBlack">
                {"Mentorship Application"}
              </h1>
              <p className="text-gfa-slate">
                {"Please fill out the form below to apply for our mentorship program."}
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
                <h3 className="font-bold text-lg mb-2">
                  {"Application Submitted Successfully!"}
                </h3>
                <p>
                  {"Thank you for applying. Our team will review your application and get back to you soon."}
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
                    <label htmlFor="role" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                      {"Primary Role"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition bg-white"
                    >
                      <option value="">{"Select a role..."}</option>
                      <option value="Director">{"Director"}</option>
                      <option value="Producer">{"Producer"}</option>
                      <option value="Cinematographer">{"Cinematographer"}</option>
                      <option value="Writer">{"Writer"}</option>
                      <option value="Editor">{"Editor"}</option>
                      <option value="Actor">{"Actor"}</option>
                      <option value="Other">{"Other"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="portfolioUrl" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                    {"Portfolio / Reel URL"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="portfolioUrl"
                    name="portfolioUrl"
                    required
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition"
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                    {"Short Bio"} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    required
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition resize-none"
                    placeholder={"Tell us a bit about your background and experience..."}
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-bold text-gfa-inkBlack mb-1">
                    {"What do you hope to achieve through this mentorship?"} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    required
                    value={formData.goals}
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
                    className="w-full bg-[#C9A84C] hover:bg-[#b09241] disabled:opacity-50 text-gfa-inkBlack px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg"
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
