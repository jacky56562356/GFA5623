import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';
import SEO from '../components/SEO';
import { useAuth } from '../lib/AuthContext';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/errorHandlers';

const availableGearList = [
  { id: 'cam_bmpc_6k', name: 'Blackmagic Pocket Cinema Camera 6K Pro', weight: '1.24 kg', remarksEn: 'Includes cage, 5" monitor, and 4x batteries', remarksZh: '包含兔笼、5寸监视器及4块电池' },
  { id: 'cam_ursa_mini', name: 'Blackmagic URSA Mini Pro 4.6K G2', weight: '2.31 kg', remarksEn: 'V-Mount plate, shoulder rig, requires heavy tripod', remarksZh: 'V口电池板、肩托套件，需配备重型脚架' },
  { id: 'cam_red_komodo', name: 'RED Komodo 6K', weight: '0.95 kg', remarksEn: 'Compact cine camera, RF to EF adapter included', remarksZh: '轻量首选，包含 RF 转 EF 转接环' },
  { id: 'lens_zeiss_cp3', name: 'Zeiss CP.3 Prime Lens Kit (21, 35, 50, 85mm)', weight: '4.5 kg (Total)', remarksEn: 'EF / PL Mount available, T2.1', remarksZh: '提供 EF 或 PL 卡口，T2.1光圈' },
  { id: 'lens_sigma_art', name: 'Sigma Art Cine Zoom Kit (18-35, 50-100)', weight: '3.0 kg (Total)', remarksEn: 'Super35 format, EF Mount, T2.0', remarksZh: 'Super35画幅，EF 卡口变焦组' },
  { id: 'grip_ronin2', name: 'DJI Ronin 2 Gimbal', weight: '5.5 kg', remarksEn: 'Max payload 13.6 kg', remarksZh: '最大承重13.6kg，推荐双人操作' },
  { id: 'grip_easyrig', name: 'Easyrig Vario 5', weight: '4.7 kg', remarksEn: 'Supports 5 - 17 kg payloads', remarksZh: '减重背心，支持 5-17 kg 承重' },
  { id: 'light_arri_s60', name: 'ARRI SkyPanel S60-C', weight: '12 kg', remarksEn: 'RGBW panel, requires Combo Stand', remarksZh: '重型灯具，需二人搬运及配套重型灯架' },
  { id: 'light_astera_titan', name: 'Astera Titan Tube Kit (8 tubes)', weight: '1.35 kg/tube', remarksEn: 'Wireless RGB tube lights with charging case', remarksZh: '全彩管灯8只装，连充电箱偏重' },
  { id: 'light_aputure_600d', name: 'Aputure LS 600d Pro', weight: '5.8 kg', remarksEn: 'High output daylight LED', remarksZh: '单头高亮白光，含柔光箱' },
  { id: 'audio_sennheiser', name: 'Sennheiser MKH 416 Shotgun Mic Kit', weight: '1.2 kg', remarksEn: 'Includes boom pole, shock mount, blimp', remarksZh: '含挑杆、防震架和防风罩' },
  { id: 'audio_zoom_f8', name: 'Zoom F8n Pro Field Recorder', weight: '1.0 kg', remarksEn: '8-channel/10-track audio recorder', remarksZh: '8通道/10轨专业录音机' }
];

const GearApplication: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicantName: '',
    email: '',
    phone: '',
    driversLicense: '',
    ssn: '',
    currentAddress: '',
    homeAddress: '',
    graduatedSchool: '',
    graduationProjectUrl: '',
    schoolMentorContact: '',
    shootingPlan: '',
    totalBudget: '',
    existingCrew: '',
    neededCrew: '',
    projectTitle: '',
    projectType: 'Short Film',
    logline: '',
    scriptUrl: '',
    pitchDeckUrl: '',
    futureDirection: '',
    requestedGear: '',
    shootStartDate: '',
    shootEndDate: ''
  });

  const [selectedGear, setSelectedGear] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert(isEn ? "Please log in first." : "请先登录。");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const finalRequestedGear = `Selected Items:\n${selectedGear.map(id => {
        const g = availableGearList.find(x => x.id === id);
        return `- ${g?.name} (${g?.weight})`;
      }).join('\n')}\n\nAdditional Details:\n${formData.requestedGear}`;

      const dataToSubmit: any = {
        userId: user.uid,
        applicantName: formData.applicantName,
        email: formData.email,
        phone: formData.phone,
        driversLicense: formData.driversLicense,
        ssn: formData.ssn,
        currentAddress: formData.currentAddress,
        homeAddress: formData.homeAddress,
        graduatedSchool: formData.graduatedSchool,
        graduationProjectUrl: formData.graduationProjectUrl,
        schoolMentorContact: formData.schoolMentorContact,
        shootingPlan: formData.shootingPlan,
        totalBudget: formData.totalBudget,
        existingCrew: formData.existingCrew,
        neededCrew: formData.neededCrew,
        projectTitle: formData.projectTitle,
        projectType: formData.projectType,
        logline: formData.logline,
        scriptUrl: formData.scriptUrl,
        futureDirection: formData.futureDirection,
        requestedGear: finalRequestedGear,
        estimatedShootDates: `${formData.shootStartDate} to ${formData.shootEndDate}`,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      if (formData.pitchDeckUrl.trim() !== '') {
        dataToSubmit.pitchDeckUrl = formData.pitchDeckUrl;
      }

      await addDoc(collection(db, 'gear_applications'), dataToSubmit);
      setSuccess(true);
    } catch (err: any) {
      handleFirestoreError(err, OperationType.CREATE, 'gear_applications');
      setError(isEn ? "Failed to submit application. Please check your inputs and try again." : "提交申请失败，请检查输入并重试。");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gfa-warmWhite py-32 flex justify-center items-center">
        <SEO title={isEn ? "Application Submitted | GFA" : "申请已提交 | GFA"} />
        <div className="container-gfa max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gfa-border p-12">
            <h1 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
              {isEn ? "Application Submitted" : "申请已成功提交"}
            </h1>
            <p className="text-gfa-slate mb-8">
              {isEn 
                ? "Thank you for applying. Our team will review your application and get back to you shortly." 
                : "感谢您的申请。我们的团队将评估您的项目并尽快与您联系。"}
            </p>
            <button 
              onClick={() => navigate('/filmmaker-support')}
              className="bg-gfa-inkBlack hover:bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
            >
              {isEn ? "Return to Programs" : "返回扶持计划"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gfa-warmWhite py-32">
      <SEO title={isEn ? "Pro Gear Access Application | GFA" : "摄影设备申请 | GFA"} />

      <div className="container-gfa max-w-3xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">
            {isEn ? "Pro Gear Access Application" : "公益影视设备借用申请"}
          </h1>
          <p className="text-gfa-slate">
            {isEn 
              ? "Please provide detailed information about your project to help us evaluate your request for equipment support." 
              : "请提供有关您项目的详细信息，以帮助我们评估您的设备支持请求。"}
          </p>
        </div>

        {!user && (
          <div className="bg-red-50 text-red-800 p-4 rounded-xl mb-8 border border-red-100 text-center">
            {isEn ? "You must be logged in to submit an application." : "您必须先登录才能提交申请。"}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gfa-border p-8">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Applicant Identity */}
            <div>
              <h3 className="text-lg font-bold font-serif border-b border-gfa-border pb-2 mb-4">
                {isEn ? "Applicant Information" : "申请人信息"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {isEn ? "Full Name" : "姓名"} *
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    required
                    maxLength={100}
                    value={formData.applicantName}
                    onChange={handleChange}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {isEn ? "Email" : "电子邮件"} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Phone Number" : "联系电话"} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={20}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Driver's License" : "驾照号码"} *
                    </label>
                    <input
                      type="text"
                      name="driversLicense"
                      required
                      maxLength={50}
                      value={formData.driversLicense}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "SSN / ID Number" : "社保号 / 证件号"} *
                    </label>
                    <input
                      type="text"
                      name="ssn"
                      required
                      maxLength={20}
                      value={formData.ssn}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Current Address" : "当前住址"} *
                    </label>
                    <input
                      type="text"
                      name="currentAddress"
                      required
                      maxLength={250}
                      value={formData.currentAddress}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Home Address (Permanent)" : "家庭地址 (永久住址)"} *
                    </label>
                    <input
                      type="text"
                      name="homeAddress"
                      required
                      maxLength={250}
                      value={formData.homeAddress}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Graduated School" : "毕业学校"} *
                    </label>
                    <input
                      type="text"
                      name="graduatedSchool"
                      required
                      maxLength={100}
                      value={formData.graduatedSchool}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Graduation Project Submission (URL)" : "毕业作品提交 (链接)"} *
                    </label>
                    <input
                      type="url"
                      name="graduationProjectUrl"
                      required
                      maxLength={500}
                      value={formData.graduationProjectUrl}
                      onChange={handleChange}
                      placeholder="https://"
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "School Mentor Contact" : "可联络的学校导师"} *
                    </label>
                    <input
                      type="text"
                      name="schoolMentorContact"
                      required
                      maxLength={100}
                      value={formData.schoolMentorContact}
                      onChange={handleChange}
                      placeholder={isEn ? "Name & Email/Phone" : "导师姓名及联系方式"}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                </div>
              </div>

            {/* Project Details */}
            <div>
              <h3 className="text-lg font-bold font-serif border-b border-gfa-border pb-2 mb-4">
                {isEn ? "Project Information" : "项目信息"}
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {isEn ? "Project Title" : "项目名称"} *
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    required
                    maxLength={200}
                    value={formData.projectTitle}
                    onChange={handleChange}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {isEn ? "Project Type" : "项目类型"} *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                  >
                    <option value="Short Film">{isEn ? "Short Film" : "短片"}</option>
                    <option value="Feature Film">{isEn ? "Feature Film" : "长片"}</option>
                    <option value="Documentary">{isEn ? "Documentary" : "纪录片"}</option>
                    <option value="Pilot">{isEn ? "Pilot / Series" : "剧集/试播集"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {isEn ? "Logline" : "一句话故事大纲 (Logline)"} *
                  </label>
                  <textarea
                    name="logline"
                    required
                    maxLength={1000}
                    rows={3}
                    value={formData.logline}
                    onChange={handleChange}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {isEn ? "Shooting Plan" : "拍摄计划"} *
                  </label>
                  <textarea
                    name="shootingPlan"
                    required
                    maxLength={2000}
                    rows={4}
                    value={formData.shootingPlan}
                    onChange={handleChange}
                    placeholder={isEn ? "Describe your shooting plan." : "请简述您的拍摄计划。"}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Total Budget" : "总投资成本"} *
                    </label>
                    <input
                      type="text"
                      name="totalBudget"
                      required
                      maxLength={100}
                      value={formData.totalBudget}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Script URL (Google Drive / Dropbox link)" : "剧本链接 (请提供分享链接)"} *
                    </label>
                    <input
                      type="url"
                      name="scriptUrl"
                      required
                      maxLength={500}
                      value={formData.scriptUrl}
                      onChange={handleChange}
                      placeholder="https://"
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-gfa-slate font-light">
                      {isEn ? "If you are submitting a feature length script and shooting plan, please also email it to " : "如果有长篇剧本提交和拍摄计划，请提交邮箱："} 
                      <a href="mailto:jacky@gfafilm.org" className="text-[#C9A84C] hover:underline font-bold">jacky@gfafilm.org</a>
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Existing Crew Members" : "团队成员已有"} *
                    </label>
                    <textarea
                      name="existingCrew"
                      required
                      maxLength={1000}
                      rows={2}
                      value={formData.existingCrew}
                      onChange={handleChange}
                      placeholder={isEn ? "List roles you have already filled." : "列出已有团队成员及职位。"}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Needed Crew Members" : "你需要的团队成员列表"} *
                    </label>
                    <textarea
                      name="neededCrew"
                      required
                      maxLength={1000}
                      rows={2}
                      value={formData.neededCrew}
                      onChange={handleChange}
                      placeholder={isEn ? "List roles you are looking to fill." : "列出仍需招募的职位。"}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Pitch Deck URL (Optional)" : "概念提案册链接 (选填)"}
                    </label>
                    <input
                      type="url"
                      name="pitchDeckUrl"
                      maxLength={500}
                      value={formData.pitchDeckUrl}
                      onChange={handleChange}
                      placeholder="https://"
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {isEn ? "Future Direction / Festival Strategy" : "项目未来走向及电影节参赛规划"} *
                  </label>
                  <textarea
                    name="futureDirection"
                    required
                    maxLength={1000}
                    rows={3}
                    value={formData.futureDirection}
                    onChange={handleChange}
                    placeholder={isEn ? "Where will this project go once completed?" : "完成后的发行及电影节参赛计划是什么？"}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Equipment Request */}
            <div>
              <h3 className="text-lg font-bold font-serif border-b border-gfa-border pb-2 mb-4">
                {isEn ? "Equipment Details" : "设备需求与档期"}
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-4">
                    {isEn ? "Select Requested Gear" : "选择您需要的设备"}
                  </label>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm text-left border border-gfa-border rounded-lg bg-white">
                      <thead className="bg-[#fcfaf5] text-gfa-slate font-bold uppercase text-xs border-b border-gfa-border">
                        <tr>
                          <th className="px-4 py-3 text-center">{isEn ? "Select" : "选择"}</th>
                          <th className="px-4 py-3">{isEn ? "Equipment" : "设备名称"}</th>
                          <th className="px-4 py-3">{isEn ? "Weight" : "重量"}</th>
                          <th className="px-4 py-3">{isEn ? "Remarks" : "备注"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {availableGearList.map((gear) => (
                          <tr key={gear.id} className="border-b border-gfa-border last:border-0 hover:bg-gfa-warmWhite transition-colors">
                            <td className="px-4 py-3 text-center w-16">
                              <input 
                                type="checkbox" 
                                className="w-4 h-4 text-[#C9A84C] accent-[#C9A84C] rounded border-gfa-border focus:ring-[#C9A84C]"
                                checked={selectedGear.includes(gear.id)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedGear([...selectedGear, gear.id]);
                                  } else {
                                    setSelectedGear(selectedGear.filter(id => id !== gear.id));
                                  }
                                }}
                              />
                            </td>
                            <td className="px-4 py-3 font-medium text-gfa-inkBlack">{gear.name}</td>
                            <td className="px-4 py-3 text-gfa-slate whitespace-nowrap">{gear.weight}</td>
                            <td className="px-4 py-3 text-gfa-slate text-xs">{isEn ? gear.remarksEn : gear.remarksZh}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {isEn ? "Additional Gear Details" : "其他补充设备需求"}
                  </label>
                  <textarea
                    name="requestedGear"
                    maxLength={1000}
                    rows={3}
                    value={formData.requestedGear}
                    onChange={handleChange}
                    placeholder={isEn ? "Any other gear you need that is not listed above?" : "是否有上方未列出但您仍然需要的设备？"}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Shoot Start Date" : "计划开机日期"} *
                    </label>
                    <input
                      type="date"
                      name="shootStartDate"
                      required
                      value={formData.shootStartDate}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Shoot End Date" : "计划杀青日期"} *
                    </label>
                    <input
                      type="date"
                      name="shootEndDate"
                      required
                      value={formData.shootEndDate}
                      onChange={handleChange}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={submitting || !user}
                className="w-full bg-[#C9A84C] hover:bg-[#a68636] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
              >
                {submitting 
                  ? (isEn ? "Submitting..." : "提交中...") 
                  : (isEn ? "Submit Application" : "立即提交申请")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GearApplication;
