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
  const isEn = locale === Locale.EN;

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

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      alert(isEn ? "File size exceeds 2MB limit. Please upload a smaller file." : "文件大小不能超过2MB，请重新选择。");
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
        await emailjs.send(
          'service_eqytzjp',
          'template_e3bza7v',
          {
            ...formData,
            // A condensed string to easily read the key details on receipt
            submission_details: `
              Film: ${formData.filmTitleOrig} (${formData.filmTitleEn})
              Applicant: ${formData.applicantName} (${formData.applicantEmail})
              Role: ${formData.applicantRole}
              Category: ${formData.category}
              Screener Link: ${formData.screenerLink}
              Poster Name: ${formData.posterFileName}
            `
          },
          '-nL93F_Lv6Wgc1JSc'
        );
      } catch (emailErr) {
        console.error("EmailJS error:", emailErr);
        // Continue to success screen even if email fails, because the firebase doc was created.
      }

      setSubmitSuccess(true);
    } catch (error: any) {
      console.error('Error submitting application:', error);
      alert((isEn ? "An error occurred: " : "提交失败: ") + (error.message || "Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-[#F5F2EE] flex items-center justify-center font-sans">
        <SEO title={isEn ? "Submission Successful | Global Film Alliance" : "提交成功 | 环球青年电影联盟"} />
        <div className="bg-white p-12 rounded-[40px] shadow-sm max-w-2xl w-full text-center mx-4">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">
            {isEn ? "Application Received!" : "报名成功！"}
          </h2>
          <p className="text-gfa-slate text-lg mb-8">
            {isEn 
              ? "Your film has been successfully submitted for the Golden Feather Awards. Our programming team will review your project and be in touch soon." 
              : "您的电影已成功提交金羽奖。我们的选片委员会将对您的作品进行审核，并尽快与您联系。"}
          </p>
          <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-8 text-left text-sm text-gfa-slate space-y-2">
            <p><strong>{isEn ? "Film Title:" : "影片名称："}</strong> {formData.filmTitleOrig}</p>
            <p><strong>{isEn ? "Applicant:" : "申请人姓名："}</strong> {formData.applicantName}</p>
            <p><strong>{isEn ? "Category:" : "奖项单元："}</strong> {formData.category}</p>
          </div>
          <Link to="/" className="inline-block bg-[#C9A84C] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gfa-inkBlack hover:text-white transition-colors">
            {isEn ? "Return to Home" : "返回首页"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-[#F5F2EE] pb-24 pt-32">
      <SEO 
        title={isEn ? "Awards Submission | Global Film Alliance" : "金羽奖报名系统 | 环球青年电影联盟"}
        description={isEn ? "Submit your film to the Golden Feather Awards." : "递交您的电影作品参与金羽奖评选。"}
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Link to="/awards" className="inline-flex items-center text-gfa-slate hover:text-gfa-inkBlack text-sm font-bold uppercase tracking-widest mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isEn ? "Back to Awards Page" : "返回奖项主页"}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4 flex items-center gap-4">
            <Clapperboard className="w-10 h-10 text-[#C9A84C]" />
            {isEn ? "Official Submission Portal" : "金羽奖官方报名系统"}
          </h1>
          <p className="text-gfa-slate text-lg max-w-2xl">
            {isEn ? "Golden Feather Awards 2026. Please prepare your screener link, synopsis, and crew details before starting the application." : "2026年金羽奖电影颁奖礼。在开始报名之前，请预先准备好您的影片预览链接、故事梗概及主创团队信息。"}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[40px] shadow-sm p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Section 1: Applicant Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-serif border-b pb-4 text-gfa-inkBlack">
                {isEn ? "1. Primary Creator Information" : "一、 主创信息申报"}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Full Name" : "主创人员姓名"} (Director/Writer/Lead Actor) <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="applicantName" required value={formData.applicantName} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Age at time of completion" : "影片完成时主创年龄"} <span className="text-red-500">*</span>
                  </label>
                  <input type="number" name="applicantAge" required placeholder={isEn ? "Must be under 30 for Youth categories" : "青年单元需低于30岁"} value={formData.applicantAge} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Email Address" : "联系邮箱"} <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="applicantEmail" required value={formData.applicantEmail} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Phone Number" : "联系电话"}
                  </label>
                  <input type="tel" name="applicantPhone" value={formData.applicantPhone} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {isEn ? "Applicant Role on Project" : "报名人在本项目中的职务"} <span className="text-red-500">*</span>
                </label>
                <select name="applicantRole" required value={formData.applicantRole} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50 appearance-none">
                  <option value="">{isEn ? "-- Select Role --" : "-- 请选择 --"}</option>
                  <option value="Director">{isEn ? "Director" : "导演"}</option>
                  <option value="Producer">{isEn ? "Producer" : "制片人"}</option>
                  <option value="Writer">{isEn ? "Screenwriter" : "编剧"}</option>
                  <option value="Actor">{isEn ? "Lead Actor/Actress" : "主演"}</option>
                  <option value="Other">{isEn ? "Other" : "其他职位"}</option>
                </select>
              </div>
            </div>

            {/* Section 2: Film Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-serif border-b pb-4 text-gfa-inkBlack">
                {isEn ? "2. Film Information" : "二、 影片基本资料"}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Original Film Title" : "影片原名"} <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="filmTitleOrig" required value={formData.filmTitleOrig} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "English Title" : "英文译名"}
                  </label>
                  <input type="text" name="filmTitleEn" value={formData.filmTitleEn} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Submission Category" : "报名单元"} <span className="text-red-500">*</span>
                  </label>
                  <select name="category" required value={formData.category} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50 appearance-none">
                    <option value="">{isEn ? "Select Category" : "请选择"}</option>
                    <option value="Feature">{isEn ? "Feature Film (60+ mins)" : "长片单元 (>60分钟)"}</option>
                    <option value="Short">{isEn ? "Short Film (<40 mins)" : "短片单元 (<40分钟)"}</option>
                    <option value="Documentary">{isEn ? "Documentary" : "纪录片单元"}</option>
                    <option value="Student">{isEn ? "Student Category" : "学生作品单元"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Total Runtime (mins)" : "影片总时长（分钟）"} <span className="text-red-500">*</span>
                  </label>
                  <input type="number" name="runtime" required value={formData.runtime} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Completion Date" : "影片完成日期"} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder={isEn ? "YYYY-MM" : "YYYY-MM"}
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
                   {isEn ? "Logline / Synopsis" : "故事梗概"} ({isEn ? "Max 2000 characters" : "2000字以内"}) <span className="text-red-500">*</span>
                </label>
                <textarea name="synopsis" required rows={6} maxLength={2000} value={formData.synopsis} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50 resize-none"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Copyright Ownership" : "版权归属说明"} <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="copyrightOwnership" required placeholder={isEn ? "E.g., Independent / Studio Name" : "例如：独立版权 / 制片公司名称"} value={formData.copyrightOwnership} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                     {isEn ? "Released Platforms (if any)" : "已投放平台说明（如有）"}
                  </label>
                  <input type="text" name="releasedPlatforms" placeholder={isEn ? "E.g., YouTube, Bilibili, Netflix" : "如未发行请留空，或填写已上线平台"} value={formData.releasedPlatforms} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {isEn ? "Cast & Crew Credits" : "演职员名单"} <span className="text-red-500">*</span>
                </label>
                <textarea name="creditsInfo" required rows={4} placeholder={isEn ? "List key cast and crew members..." : "请列出核心主创及演职员名单..."} value={formData.creditsInfo} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50 resize-none"></textarea>
              </div>

              <div>
                 <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {isEn ? "Estimated Number of Attendees (Gala)" : "预计参会人数（颁奖礼）"} <span className="text-red-500">*</span>
                </label>
                <input type="number" name="attendeeCount" required min="1" placeholder={isEn ? "How many people might attend if nominated" : "如获提名，预计有多少团队成员将赴加州参会"} value={formData.attendeeCount} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
              </div>
            </div>

            {/* Section 3: Screener Details & Submit */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-serif border-b pb-4 text-gfa-inkBlack">
                {isEn ? "3. Screener Materials & Terms" : "三、 放映物料与声明"}
              </h3>
              
              <div className="bg-[#e9f0f7] p-6 rounded-2xl border border-blue-100 mb-6">
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong className="block mb-2 text-base">{isEn ? "Screener Requirements:" : "放映成片提交要求："}</strong>
                  {isEn 
                    ? "Please provide a reliable link (Vimeo, YouTube UNLISTED, or Google Drive) with permissions set to allow viewing by anyone with the link. Do NOT provide temporary links that expire."
                    : "请提供可靠的在线成片播放链接（如 Vimeo, YouTube隐私模式，Bilibili无密码模式，或百度网盘长期链接）。请勿提供会过期的临时下载链接。如果非英文对白，必须包含内嵌英文字幕。"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {isEn ? "Screener Link (Vimeo / Youtube / Drive)" : "在线预览成片链接"} <span className="text-red-500">*</span>
                </label>
                <input type="url" name="screenerLink" required placeholder="https://" value={formData.screenerLink} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {isEn ? "Screener Password (if applicable)" : "播放密码（如有）"}
                </label>
                <input type="text" name="screenerPassword" value={formData.screenerPassword} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {isEn ? "Poster / File Upload (Photo or PDF)" : "海报文件上传（照片或PDF）"}
                </label>
                <div className="relative">
                  <input type="file" id="poster-upload" accept="image/*,application/pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-gray-50 flex items-center justify-between">
                     <span className="text-gfa-slate font-medium truncate pr-4">
                        {formData.posterFileName ? formData.posterFileName : (isEn ? "No file chosen" : "未选择文件")}
                     </span>
                     <span className="bg-[#C9A84C] text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest whitespace-nowrap">
                        {isEn ? "Choose File" : "选择文件"}
                     </span>
                  </div>
                </div>
                {formData.posterFileName && <p className="text-sm font-medium text-green-600 mt-2">{isEn ? "Selected file:" : "已选择文件："} {formData.posterFileName}</p>}
                <p className="text-xs text-gfa-slate mt-2">{isEn ? "Max file size: 2MB" : "文件大小上限：2MB"}</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gfa-inkBlack mb-2">
                   {isEn ? "Poster/Stills Link (Optional Drive Link)" : "海报/剧照网盘链接（超大文件请提供链接）"}
                </label>
                <input type="url" name="posterLink" placeholder="https://" value={formData.posterLink} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-gray-50" />
                <p className="text-xs text-gfa-slate mt-2">{isEn ? "If your files exceed 2MB, provide a folder link here." : "如果海报/剧照超过2MB，请提供网盘链接。"}</p>
              </div>

              <div className="pt-6 mt-8">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input type="checkbox" name="agreesToTerms" required checked={formData.agreesToTerms} onChange={handleChange} className="mt-1 w-5 h-5 text-[#C9A84C] focus:ring-[#C9A84C] rounded border-gray-300" />
                  <span className="text-sm text-gfa-slate leading-relaxed">
                    {isEn 
                      ? "I certify that I hold the copyrights to submit this film. I acknowledge that youth category directors must be under 30, and all non-English films contain burned-in English subtitles." 
                      : "我声明我拥有完整的版权代理或授权，以通过此表单提交本影片参赛。我确认我已经阅读过参赛规则：青年组核心创作者低于30岁，非英语影片需自带内嵌英文字幕。"}
                     <span className="text-red-500"> *</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Action */}
            <div className="text-center pt-8 border-t border-gray-100">
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
                  ? (isEn ? "Submitting..." : "正在提交...")
                  : (isEn ? "Submit Application" : "确认提交报名")
                }
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
