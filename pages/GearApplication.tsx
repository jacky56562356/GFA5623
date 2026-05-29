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
  { id: 'cam_bmpc_6k', name: 'Blackmagic Pocket Cinema Camera 6K Pro', weight: '1.24 kg', remarksEn: 'Includes cage, 5" monitor, and 4x batteries' },
  { id: 'cam_ursa_mini', name: 'Blackmagic URSA Mini Pro 4.6K G2', weight: '2.31 kg', remarksEn: 'V-Mount plate, shoulder rig, requires heavy tripod' },
  { id: 'cam_red_komodo', name: 'RED Komodo 6K', weight: '0.95 kg', remarksEn: 'Compact cine camera, RF to EF adapter included' },
  { id: 'lens_zeiss_cp3', name: 'Zeiss CP.3 Prime Lens Kit (21, 35, 50, 85mm)', weight: '4.5 kg (Total)', remarksEn: 'EF / PL Mount available, T2.1' },
  { id: 'lens_sigma_art', name: 'Sigma Art Cine Zoom Kit (18-35, 50-100)', weight: '3.0 kg (Total)', remarksEn: 'Super35 format, EF Mount, T2.0' },
  { id: 'grip_ronin2', name: 'DJI Ronin 2 Gimbal', weight: '5.5 kg', remarksEn: 'Max payload 13.6 kg' },
  { id: 'grip_easyrig', name: 'Easyrig Vario 5', weight: '4.7 kg', remarksEn: 'Supports 5 - 17 kg payloads' },
  { id: 'light_arri_s60', name: 'ARRI SkyPanel S60-C', weight: '12 kg', remarksEn: 'RGBW panel, requires Combo Stand' },
  { id: 'light_astera_titan', name: 'Astera Titan Tube Kit (8 tubes)', weight: '1.35 kg/tube', remarksEn: 'Wireless RGB tube lights with charging case' },
  { id: 'light_aputure_600d', name: 'Aputure LS 600d Pro', weight: '5.8 kg', remarksEn: 'High output daylight LED' },
  { id: 'audio_sennheiser', name: 'Sennheiser MKH 416 Shotgun Mic Kit', weight: '1.2 kg', remarksEn: 'Includes boom pole, shock mount, blimp' },
  { id: 'audio_zoom_f8', name: 'Zoom F8n Pro Field Recorder', weight: '1.0 kg', remarksEn: '8-channel/10-track audio recorder' }
];

const GearApplication: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;
  const { user, setAuthModalOpen } = useAuth();
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
       setAuthModalOpen(true);
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
      setError("Failed to submit application. Please check your inputs and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gfa-warmWhite py-4 flex justify-center items-center">
        <SEO title={"Application Submitted | GFA"} />
        <div className="container-gfa max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gfa-border p-12">
            <h1 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
              {"Application Submitted"}
            </h1>
            <p className="text-gfa-slate mb-4">
              {"Thank you for applying. Our team will review your application and get back to you shortly."}
            </p>
            <button 
              onClick={() => navigate('/filmmaker-support')}
              className="bg-gfa-inkBlack hover:bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
            >
              {"Return to Programs"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gfa-warmWhite py-4">
      <SEO title={"Pro Gear Access Application | GFA"} />

      <div className="container-gfa max-w-3xl mx-auto px-4">
        <div className="mb-3 text-center">
          <h1 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">
            {"Pro Gear Access Application"}
          </h1>
          <p className="text-gfa-slate">
            {"Please provide detailed information about your project to help us evaluate your request for equipment support."}
          </p>
        </div>

        {!user && (
          <div className="bg-[#fcfaf5] p-6 rounded-xl mb-3 border border-[#C9A84C]/30 text-center">
             <p className="text-gfa-inkBlack mb-4">
              {"You must sign in or create an account to submit an application."}
            </p>
            <button
               onClick={() => setAuthModalOpen(true)}
               className="bg-[#C9A84C] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#b09241]"
            >
              {"Sign In / Sign Up"}
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gfa-border p-8">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Applicant Identity */}
            <div>
              <h3 className="text-lg font-bold font-serif border-b border-gfa-border pb-2 mb-4">
                {"Applicant Information"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {"Full Name"} *
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
                    {"Email"} *
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
                      {"Phone Number"} *
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
                      {"Driver's License"} *
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
                      {"SSN / ID Number"} *
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
                      {"Current Address"} *
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
                      {"Home Address (Permanent)"} *
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
                      {"Graduated School"} *
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
                      {"Graduation Project Submission (URL)"} *
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
                      {"School Mentor Contact"} *
                    </label>
                    <input
                      type="text"
                      name="schoolMentorContact"
                      required
                      maxLength={100}
                      value={formData.schoolMentorContact}
                      onChange={handleChange}
                      placeholder={"Name & Email/Phone"}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                </div>
              </div>

            {/* Project Details */}
            <div>
              <h3 className="text-lg font-bold font-serif border-b border-gfa-border pb-2 mb-4">
                {"Project Information"}
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {"Project Title"} *
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
                    {"Project Type"} *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                  >
                    <option value="Short Film">{"Short Film"}</option>
                    <option value="Feature Film">{"Feature Film"}</option>
                    <option value="Documentary">{"Documentary"}</option>
                    <option value="Pilot">{"Pilot / Series"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {"Logline"} *
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
                    {"Shooting Plan"} *
                  </label>
                  <textarea
                    name="shootingPlan"
                    required
                    maxLength={2000}
                    rows={4}
                    value={formData.shootingPlan}
                    onChange={handleChange}
                    placeholder={"Describe your shooting plan."}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {"Total Budget"} *
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
                      {"Script URL (Google Drive / Dropbox link)"} *
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
                      {"If you are submitting a feature length script and shooting plan, please also email it to "} 
                      <a href="mailto:jacky@gfafilm.org" className="text-[#C9A84C] hover:underline font-bold"> jacky@gfafilm.org </a>
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {"Existing Crew Members"} *
                    </label>
                    <textarea
                      name="existingCrew"
                      required
                      maxLength={1000}
                      rows={2}
                      value={formData.existingCrew}
                      onChange={handleChange}
                      placeholder={"List roles you have already filled."}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {"Needed Crew Members"} *
                    </label>
                    <textarea
                      name="neededCrew"
                      required
                      maxLength={1000}
                      rows={2}
                      value={formData.neededCrew}
                      onChange={handleChange}
                      placeholder={"List roles you are looking to fill."}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {"Pitch Deck URL (Optional)"}
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
                    {"Future Direction / Festival Strategy"} *
                  </label>
                  <textarea
                    name="futureDirection"
                    required
                    maxLength={1000}
                    rows={3}
                    value={formData.futureDirection}
                    onChange={handleChange}
                    placeholder={"Where will this project go once completed?"}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Equipment Request */}
            <div>
              <h3 className="text-lg font-bold font-serif border-b border-gfa-border pb-2 mb-4">
                {"Equipment Details"}
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-4">
                    {"Select Requested Gear"}
                  </label>
                  <div className="overflow-x-auto mb-3">
                    <table className="w-full text-sm text-left border border-gfa-border rounded-lg bg-white">
                      <thead className="bg-[#fcfaf5] text-gfa-slate font-bold uppercase text-xs border-b border-gfa-border">
                        <tr>
                          <th className="px-4 py-3 text-center">{"Select"}</th>
                          <th className="px-4 py-3">{"Equipment"}</th>
                          <th className="px-4 py-3">{"Weight"}</th>
                          <th className="px-4 py-3">{"Remarks"}</th>
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
                            <td className="px-4 py-3 text-gfa-slate text-xs">{gear.remarksEn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                    {"Additional Gear Details"}
                  </label>
                  <textarea
                    name="requestedGear"
                    maxLength={1000}
                    rows={3}
                    value={formData.requestedGear}
                    onChange={handleChange}
                    placeholder={"Any other gear you need that is not listed above?"}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {"Shoot Start Date"} *
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
                      {"Shoot End Date"} *
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

            <div className="pt-3">
              <button
                type="submit"
                disabled={submitting || !user}
                className="w-full bg-[#C9A84C] hover:bg-[#a68636] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
              >
                {submitting 
                  ? ("Submitting...") 
                  : ("Submit Application")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GearApplication;
