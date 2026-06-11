import React, { useEffect, useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { db } from '../lib/firebase.ts';
import { collection, getDocs } from 'firebase/firestore';

type TabType = 'awards' | 'mentorship' | 'gear_apps' | 'gear_donations' | 'camp_regs';

const AdminDashboard = () => {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<TabType>('awards');
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      setLoading(true);
      if (!db) {
        setLoading(false);
        return;
      }

      let collectionName = 'award_submissions';
      if (activeTab === 'mentorship') collectionName = 'mentorship_applications';
      if (activeTab === 'gear_apps') collectionName = 'gear_applications';
      if (activeTab === 'gear_donations') collectionName = 'gear_donations';
      if (activeTab === 'camp_regs') collectionName = 'youth_camp_registrations';

      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Sort by date descending
        docs.sort((a: any, b: any) => {
          const dateA = a.createdAt ? new Date(a.createdAt?.toDate ? a.createdAt.toDate() : a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt?.toDate ? b.createdAt.toDate() : b.createdAt).getTime() : 0;
          return dateB - dateA;
        });

        setSubmissions(docs);
      } catch (err) {
        console.error(`Failed to load ${collectionName}`, err);
        setSubmissions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [activeTab]);

  return (
    <div className="bg-[#F5F2EE] pt-32 pb-12 px-6 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 flex flex-col md:flex-row justify-between items-end gap-5 border-b border-gray-200 pb-5">
          <div>
            <span className="text-[#C9A84C] font-bold text-xs uppercase tracking-[0.2em] mb-2 block">{"Administrator"}</span>
            <h1 className="text-gfa-inkBlack text-4xl leading-tight font-serif font-bold">{"System Dashboard"}</h1>
          </div>
          <div className="flex gap-4">
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-xs font-bold text-[#C9A84C] px-6 py-2 uppercase tracking-widest rounded-full">
               {"Secure Access"}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
             <div className="bg-white border border-gray-100 p-6 space-y-2 rounded-3xl shadow-sm">
                <h4 className="text-xs font-bold tracking-widest uppercase text-gfa-slate mb-4 px-2">{"Collections"}</h4>
                <nav className="space-y-1">
                   <button 
                     onClick={() => setActiveTab('awards')}
                     className={`w-full text-left p-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                       activeTab === 'awards' ? 'bg-[#C9A84C] text-black shadow-sm' : 'text-gfa-slate hover:bg-gray-50'
                     }`}
                   >
                      {"Award Submissions"}
                   </button>
                   <button 
                     onClick={() => setActiveTab('mentorship')}
                     className={`w-full text-left p-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                       activeTab === 'mentorship' ? 'bg-[#C9A84C] text-black shadow-sm' : 'text-gfa-slate hover:bg-gray-50'
                     }`}
                   >
                      {"Mentorship Applications"}
                   </button>
                   <button 
                     onClick={() => setActiveTab('gear_apps')}
                     className={`w-full text-left p-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                       activeTab === 'gear_apps' ? 'bg-[#C9A84C] text-black shadow-sm' : 'text-gfa-slate hover:bg-gray-50'
                     }`}
                   >
                      {"Gear Applications"}
                   </button>
                   <button 
                     onClick={() => setActiveTab('gear_donations')}
                     className={`w-full text-left p-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                       activeTab === 'gear_donations' ? 'bg-[#C9A84C] text-black shadow-sm' : 'text-gfa-slate hover:bg-gray-50'
                     }`}
                   >
                      {"Gear Donations"}
                   </button>
                   <button 
                     onClick={() => setActiveTab('camp_regs')}
                     className={`w-full text-left p-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                       activeTab === 'camp_regs' ? 'bg-[#C9A84C] text-black shadow-sm' : 'text-gfa-slate hover:bg-gray-50'
                     }`}
                   >
                      {"Camp Registrations"}
                   </button>
                </nav>
             </div>
          </aside>

          <main className="lg:col-span-3 space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center">
                   <h5 className="text-xs font-bold uppercase tracking-widest text-gfa-slate mb-2">{"Total Loaded"}</h5>
                   <div className="text-4xl font-black text-gfa-inkBlack font-serif">{submissions.length}</div>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center">
                   <h5 className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{"Status Dashboard"}</h5>
                   <div className="text-sm font-semibold text-gfa-slate">{"Realtime Secure Verification"}</div>
                </div>
             </div>

             <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-6 border-b border-gray-100 pb-4">
                  {activeTab === 'awards' && "Recent Golden Feather Award Submissions"}
                  {activeTab === 'mentorship' && "Recent Mentorship Applications"}
                  {activeTab === 'gear_apps' && "Recent Filmmaking Gear Access Applications"}
                  {activeTab === 'gear_donations' && "Recent Filmmaking Gear Donations"}
                  {activeTab === 'camp_regs' && "Recent Youth Summer Camp Registrations"}
                </h3>
                
                {loading ? (
                  <div className="text-center py-12 text-gfa-slate">
                     <div className="w-8 h-8 border-4 border-gfa-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                     {"Loading secure collection data..."}
                  </div>
                ) : submissions.length === 0 ? (
                  <div className="text-center py-12 text-gfa-slate italic">
                     {"No submissions found in this collection."}
                  </div>
                ) : (
                  <div className="space-y-4">
                     {submissions.map((sub) => (
                       <div key={sub.id} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#C9A84C] transition-all group overflow-hidden">
                           
                           {/* Render Award Submissions */}
                           {activeTab === 'awards' && (
                             <>
                               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                                  <div>
                                     <h5 className="text-base font-bold text-gfa-inkBlack">{sub.filmTitleOrig || "Untitled Film"}</h5>
                                     <p className="text-xs text-gfa-slate mt-1">{sub.applicantName} • {sub.category}</p>
                                  </div>
                                  <div className="flex gap-2">
                                    {sub.posterLink && (
                                      <a href={sub.posterLink} target="_blank" rel="noreferrer" className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100 hover:bg-blue-100">
                                        {"Drive Link"}
                                      </a>
                                    )}
                                     <a href={sub.screenerLink} target="_blank" rel="noreferrer" className="text-xs bg-[#C9A84C]/10 text-black px-4 py-1.5 rounded-full border border-[#C9A84C]/20 hover:bg-[#C9A84C] transition-colors font-bold whitespace-nowrap">
                                        {"View Screener"}
                                     </a>
                                  </div>
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gfa-slate">
                                  <div><strong>Email:</strong> {sub.applicantEmail}</div>
                                  <div><strong>Phone:</strong> {sub.applicantPhone}</div>
                                  <div><strong>Runtime:</strong> {sub.runtime} mins</div>
                                  <div><strong>Attendees:</strong> {sub.attendeeCount || 0}</div>
                                  <div className="col-span-1 md:col-span-2 mt-2 bg-white p-3 rounded-xl border border-gray-100">
                                     <strong className="block mb-1">{"Synopsis:"}</strong>
                                     <p className="line-clamp-2">{sub.synopsis || "No synopsis provided."}</p>
                                  </div>
                               </div>
                             </>
                           )}

                           {/* Render Mentorship Applications */}
                           {activeTab === 'mentorship' && (
                             <>
                               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                                  <div>
                                     <h5 className="text-base font-bold text-gfa-inkBlack">{sub.name || "Anonymous applicant"}</h5>
                                     <p className="text-xs text-[#C9A84C] font-bold mt-1 uppercase tracking-wider">{sub.role || "Filmmaker"}</p>
                                  </div>
                                  {sub.portfolioUrl && (
                                    <a href={sub.portfolioUrl} target="_blank" rel="noreferrer" className="text-xs bg-[#C9A84C]/10 text-black px-4 py-1.5 rounded-full border border-[#C9A84C]/20 hover:bg-[#C9A84C] transition-colors font-bold">
                                      {"Portfolio Link"}
                                    </a>
                                  )}
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gfa-slate">
                                  <div><strong>Email:</strong> {sub.email}</div>
                                  <div><strong>Phone:</strong> {sub.phone || "N/A"}</div>
                                  <div className="col-span-1 md:col-span-2 mt-2 bg-white p-3 rounded-xl border border-gray-100">
                                     <strong className="block mb-1">{"Biography:"}</strong>
                                     <p className="mb-2">{sub.bio}</p>
                                     <strong className="block mb-1">{"Goals:"}</strong>
                                     <p>{sub.goals}</p>
                                  </div>
                               </div>
                             </>
                           )}

                           {/* Render Gear Applications */}
                           {activeTab === 'gear_apps' && (
                             <>
                               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                                  <div>
                                     <h5 className="text-base font-bold text-gfa-inkBlack">{sub.projectTitle || "Untitled Project"}</h5>
                                     <p className="text-xs text-[#C9A84C] font-bold mt-1 uppercase tracking-wider">{sub.projectType}</p>
                                  </div>
                                  <span className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full border border-yellow-100 font-bold uppercase tracking-wider">
                                     {sub.status || "pending"}
                                  </span>
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gfa-slate">
                                  <div><strong>Applicant:</strong> {sub.applicantName}</div>
                                  <div><strong>Email:</strong> {sub.email}</div>
                                  <div><strong>Phone:</strong> {sub.phone}</div>
                                  <div><strong>D.L.:</strong> {sub.driversLicense}</div>
                                  <div><strong>Budget:</strong> {sub.totalBudget || "N/A"}</div>
                                  <div><strong>Shoot Dates:</strong> {sub.estimatedShootDates || "N/A"}</div>
                                  <div className="col-span-1 md:col-span-2 mt-2 bg-white p-3 rounded-xl border border-gray-100">
                                     <strong className="block mb-1">{"Requested Gear:"}</strong>
                                     <pre className="whitespace-pre-wrap font-sans text-xs bg-gray-50 p-2 rounded border border-gray-100 max-h-40 overflow-y-auto">{sub.requestedGear}</pre>
                                  </div>
                               </div>
                             </>
                           )}

                           {/* Render Gear Donations */}
                           {activeTab === 'gear_donations' && (
                             <>
                               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                                  <div>
                                     <h5 className="text-base font-bold text-gfa-inkBlack">{sub.donorName || "Anonymous Donor"}</h5>
                                     <p className="text-xs text-gfa-slate mt-1">Shipping via: <span className="font-bold text-[#C9A84C] uppercase">{sub.shippingMethod}</span></p>
                                  </div>
                                  <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100 font-bold uppercase tracking-wider">
                                     {"Received"}
                                  </span>
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gfa-slate">
                                  <div><strong>Email:</strong> {sub.email}</div>
                                  <div><strong>Phone:</strong> {sub.phone}</div>
                                  <div><strong>Tax Deduction Requested:</strong> {sub.needsTaxDeduction ? "Yes" : "No"}</div>
                                  {sub.shippingAddress && <div><strong>Address:</strong> {sub.shippingAddress}</div>}
                                  <div className="col-span-1 md:col-span-2 mt-2 bg-white p-3 rounded-xl border border-gray-100">
                                     <strong className="block mb-1">{"Overall Remarks:"}</strong>
                                     <p>{sub.overallRemarks || "No remarks loaded."}</p>
                                  </div>
                               </div>
                             </>
                           )}

                           {/* Render Camp Registrations */}
                           {activeTab === 'camp_regs' && (
                             <>
                               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                                  <div>
                                     <h5 className="text-base font-bold text-gfa-inkBlack">{sub.childName || "Anonymous child"} (Age: {sub.childAge})</h5>
                                     <p className="text-xs text-[#C9A84C] font-bold mt-1 uppercase tracking-wider">{sub.program || "Summer Camp"}</p>
                                  </div>
                                  <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100 font-bold uppercase tracking-wider">
                                     {sub.status || "pending"}
                                  </span>
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gfa-slate font-sans">
                                  <div><strong>Parent:</strong> {sub.parentName}</div>
                                  <div><strong>Email:</strong> {sub.email}</div>
                                  <div><strong>Phone:</strong> {sub.phone}</div>
                                  <div><strong>T-Shirt Size:</strong> {sub.tshirtSize || "M"}</div>
                                  <div><strong>Experience:</strong> {sub.filmmakingExperience || "None"}</div>
                                  <div><strong>Emergency Contact:</strong> {sub.emergencyContact} ({sub.emergencyPhone})</div>
                                  {sub.dietary && <div className="col-span-1 md:col-span-2"><strong>Dietary/Allergies:</strong> {sub.dietary}</div>}
                                  {sub.medical && <div className="col-span-1 md:col-span-2"><strong>Medical Conditions:</strong> {sub.medical}</div>}
                                  {(sub.message || sub.notes) && (
                                    <div className="col-span-1 md:col-span-2 mt-2 bg-white p-3 rounded-xl border border-gray-100">
                                       <strong className="block mb-1">{"Parent Message / Notes:"}</strong>
                                       <p className="whitespace-pre-wrap">{sub.message || sub.notes}</p>
                                    </div>
                                  )}
                               </div>
                             </>
                           )}

                       </div>
                     ))}
                  </div>
                )}
             </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
