import React, { useState } from 'react';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';
import SEO from '../components/SEO';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { 
  Clapperboard, CheckCircle, ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AwardSubmission() {
  const { locale } = useLocale();
  const isEn = true;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Applicant Info
    applicantName: '',
    applicantEmail: '',
    applicantPhone: '',
    applicantRole: '',
    applicantAge: '',
    
    // Film Info
    filmTitleOrig: '',
    filmTitleEn: '',
    category: '',
    runtime: '',
    completionDate: '',
    synopsis: '',
    copyrightOwnership: '',
    releasedPlatforms: '',
    creditsInfo: '',
    attendeeCount: '',
    
    // Links & Files
    screenerLink: '',
    screenerPassword: '',
    posterLink: '',
    posterFileName: '',
    posterFileBase64: '',
    
    // Terms
    agreesToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) { // 20MB limit
      alert("File size exceeds 20MB limit. Please upload a smaller file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData(prev => ({
        ...prev,
        posterFileBase64: event.target?.result as string,
        posterFileName: file.name
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreesToTerms) return;
    
    setIsSubmitting(true);
    try {
      if (db) {
        const { posterFileBase64, ...dbData } = formData;
        await addDoc(collection(db, 'award_submissions'), {
          ...dbData,
          createdAt: serverTimestamp(),
          status: 'pending'
        });
      }

      try {
        const { posterFileBase64, ...emailData } = formData;
        
        const details = `
Film: ${formData.filmTitleOrig} (${formData.filmTitleEn})
Applicant: ${formData.applicantName} (${formData.applicantEmail})
Phone: ${formData.applicantPhone}
Role: ${formData.applicantRole}
Category: ${formData.category}
Screener Link: ${formData.screenerLink}
Poster Name: ${formData.posterFileName}
Copyright: ${formData.copyrightOwnership}
Attendees: ${formData.attendeeCount}
        `.trim();

        await emailjs.send(
          'service_eqytzjp',
          'template_e3bza7v',
          {
            ...emailData,
            // Custom variable
            submission_details: details,
            // Default EmailJS template variables
            message: details,
            from_name: formData.applicantName,
            reply_to: formData.applicantEmail,
            to_name: 'Admin',
            email: formData.applicantEmail,
          },
          {
            publicKey: '-nL93F_Lv6Wgc1JSc'
          }
        );
      } catch (emailErr) {
        console.error("EmailJS error:", emailErr);
        // Continue to success screen even if email fails, because the firebase doc was created.
      }

      setSubmitSuccess(true);
    } catch (error: any) {
      console.error('Error submitting application:', error);
      alert(("An error occurred: ") + (error.message || "Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-[#F5F2EE] flex items-center justify-center font-sans">
        <SEO title={"Submission Successful | Global Film Alliance"} />
        <div className="bg-white p-12 rounded-[40px] shadow-sm max-w-2xl w-full text-center mx-4">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">
            {"Application Received!"}
          </h2>
          <p className="text-gfa-slate text-lg mb-4">
            {"Your film has been successfully submitted for the Golden Feather Awards. Our programming team will review your project and be in touch soon."}
          </p>
          <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-4 text-left text-sm text-gfa-slate space-y-2">
            <p><strong>{"Film Title:"}</strong> {formData.filmTitleOrig}</p>
            <p><strong>{"Applicant:"}</strong> {formData.applicantName}</p>
            <p><strong>{"Category:"}</strong> {formData.category}</p>
          </div>
          <Link to="/" className="inline-block bg-[#C9A84C] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gfa-inkBlack hover:text-white transition-colors">
            {"Return to Home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-[#F5F2EE] pb-3 pt-4">
      <SEO 
        title={"Awards Submission | Global Film Alliance"}
        description={"Submit your film to the Golden Feather Awards."}
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-3">
          <Link to="/golden-feather-awards" className="inline-flex items-center text-gfa-slate hover:text-gfa-inkBlack text-sm font-bold uppercase tracking-widest mb-3">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {"Back to Awards Page"}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4 flex items-center gap-4">
            <Clapperboard className="w-10 h-10 text-[#C9A84C]" />
            {"Official Submission Portal"}
          </h1>
          <p className="text-gfa-slate text-lg max-w-2xl">
            {"Golden Feather Awards 2026. Please prepare your screener link, synopsis, and crew details before starting the application."}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[40px] shadow-sm p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-3">
            
            {/* Section 1: Applicant Info */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-serif border-b pb-4 text-gfa-inkBlack">
                {"1. Primary Creator Information"}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Full Name"} (Director/Writer/Lead Actor) <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="applicantName" required value={formData.applicantName} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Age at time of completion"} <span className="text-red-500">*</span>
                  </label>
                  <input type="number" name="applicantAge" required placeholder={"Must be under 30 for Youth categories"} value={formData.applicantAge} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Email Address"} <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="applicantEmail" required value={formData.applicantEmail} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Phone Number"}
                  </label>
                  <input type="tel" name="applicantPhone" value={formData.applicantPhone} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {"Applicant Role on Project"} <span className="text-red-500">*</span>
                </label>
                <select name="applicantRole" required value={formData.applicantRole} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50 appearance-none">
                  <option value="">{"-- Select Role --"}</option>
                  <option value="Director">{"Director"}</option>
                  <option value="Producer">{"Producer"}</option>
                  <option value="Writer">{"Screenwriter"}</option>
                  <option value="Actor">{"Lead Actor/Actress"}</option>
                  <option value="Other">{"Other"}</option>
                </select>
              </div>
            </div>

            {/* Section 2: Film Details */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-serif border-b pb-4 text-gfa-inkBlack">
                {"2. Film Information"}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Original Film Title"} <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="filmTitleOrig" required value={formData.filmTitleOrig} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"English Title"}
                  </label>
                  <input type="text" name="filmTitleEn" value={formData.filmTitleEn} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Submission Category"} <span className="text-red-500">*</span>
                  </label>
                  <select name="category" required value={formData.category} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50 appearance-none">
                    <option value="">{"Select Category"}</option>
                    <option value="Feature">{"Feature Film (60+ mins)"}</option>
                    <option value="Short">{"Short Film (<40 mins)"}</option>
                    <option value="Documentary">{"Documentary"}</option>
                    <option value="Short Drama">{"Short Drama"}</option>
                    <option value="Student">{"Student Category"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Total Runtime (mins)"} <span className="text-red-500">*</span>
                  </label>
                  <input type="number" name="runtime" required value={formData.runtime} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Completion Date"} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder={"YYYY-MM"}
                    onFocus={(e) => (e.target.type = "month")}
                    onBlur={(e) => {if (!e.target.value) e.target.type = "text"}}
                    name="completionDate" 
                    required 
                    value={formData.completionDate} 
                    onChange={handleChange} 
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {"Logline / Synopsis"} ({"Max 2000 characters"}) <span className="text-red-500">*</span>
                </label>
                <textarea name="synopsis" required rows={6} maxLength={2000} value={formData.synopsis} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50 resize-none"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Copyright Ownership"} <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="copyrightOwnership" required placeholder={"E.g., Independent / Studio Name"} value={formData.copyrightOwnership} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {"Released Platforms (if any)"}
                  </label>
                  <input type="text" name="releasedPlatforms" placeholder={"E.g., YouTube, Bilibili, Netflix"} value={formData.releasedPlatforms} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {"Cast & Crew Credits"} <span className="text-red-500">*</span>
                </label>
                <textarea name="creditsInfo" required rows={4} placeholder={"List key cast and crew members..."} value={formData.creditsInfo} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50 resize-none"></textarea>
              </div>

              <div>
                 <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {"Estimated Number of Attendees (Gala)"} <span className="text-red-500">*</span>
                </label>
                <input type="number" name="attendeeCount" required min="1" placeholder={"How many people might attend if nominated"} value={formData.attendeeCount} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
              </div>
            </div>

            {/* Section 3: Screener Details & Submit */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-serif border-b pb-4 text-gfa-inkBlack">
                {"3. Screener Materials & Terms"}
              </h3>
              
              <div className="bg-[#e9f0f7] p-6 rounded-2xl border border-blue-100 mb-3">
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong className="block mb-2 text-base">{"Screener Requirements:"}</strong>
                  {"Please provide a reliable link (Vimeo, YouTube UNLISTED, or Google Drive) with permissions set to allow viewing by anyone with the link. Do NOT provide temporary links that expire."}
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {"Screener Link (Vimeo / Youtube / Drive)"} <span className="text-red-500">*</span>
                </label>
                <input type="url" name="screenerLink" required placeholder="https://" value={formData.screenerLink} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {"Screener Password (if applicable)"}
                </label>
                <input type="text" name="screenerPassword" value={formData.screenerPassword} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {"Poster / File Upload (Photo or PDF)"}
                </label>
                <div className="relative">
                  <input type="file" id="poster-upload" accept="image/*,application/pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-gray-50 flex items-center justify-between">
                     <span className="text-gfa-slate font-medium truncate pr-4">
                        {formData.posterFileName ? formData.posterFileName : ("No file chosen")}
                     </span>
                     <span className="bg-[#C9A84C] text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest whitespace-nowrap">
                        {"Choose File"}
                     </span>
                  </div>
                </div>
                {formData.posterFileName && <p className="text-sm font-medium text-green-600 mt-2">{"Selected file:"} {formData.posterFileName}</p>}
                <p className="text-xs text-gfa-slate mt-2">{"Max file size: 20MB"}</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {"Poster/Stills Link (Optional Drive Link)"}
                </label>
                <input type="url" name="posterLink" placeholder="https://" value={formData.posterLink} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                <p className="text-xs text-gfa-slate mt-2">{"If your files exceed 20MB, provide a folder link here."}</p>
              </div>

              <div className="pt-3 mt-4">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" name="agreesToTerms" required checked={formData.agreesToTerms} onChange={handleChange} className="mt-1 w-5 h-5 text-[#C9A84C] focus:ring-[#C9A84C] rounded border-gray-300" />
                  <span className="text-sm text-gfa-slate leading-relaxed">
                    {"I certify that I hold the copyrights to submit this film. I acknowledge that youth category directors must be under 30, and all non-English films contain burned-in English subtitles."}
                     <span className="text-red-500"> *</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Action */}
            <div className="text-center pt-4 border-t border-gray-100">
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreesToTerms}
                className={`w-full md:w-auto px-16 py-5 rounded-full font-bold uppercase tracking-widest text-base transition-all duration-300 shadow-md ${
                  isSubmitting || !formData.agreesToTerms 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#C9A84C] text-black hover:bg-gfa-inkBlack hover:text-white hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {isSubmitting 
                  ? ("Submitting...")
                  : ("Submit Application")
                }
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
