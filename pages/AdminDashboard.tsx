
import React, { useEffect, useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { db } from '../lib/firebase.ts';
import { collection, getDocs } from 'firebase/firestore';

const AdminDashboard = () => {
  const { t, locale } = useLocale();
  const adm = t.adminDashboard;
  const isEn = locale === 'en';
  
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!db) {
        setLoading(false);
        return;
      }
      try {
        const querySnapshot = await getDocs(collection(db, 'award_submissions'));
        const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Sort by createdAt descending
        docs.sort((a: any, b: any) => {
          const dateA = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : 0;
          const dateB = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : 0;
          return dateB - dateA;
        });
        setSubmissions(docs);
      } catch (err) {
        console.error("Failed to load submissions", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  return (
    <div className="bg-[#F5F2EE] pt-40 pb-20 px-6 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-end gap-5 border-b border-gray-200 pb-5">
          <div>
            <span className="text-[#C9A84C] font-bold text-xs uppercase tracking-[0.2em] mb-2 block">{isEn ? "Administrator" : "管理员后台"}</span>
            <h1 className="text-gfa-inkBlack text-4xl leading-tight font-serif font-bold">{isEn ? "System Dashboard" : "系统管理面板"}</h1>
          </div>
          <div className="flex gap-4">
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-xs font-bold text-[#C9A84C] px-6 py-2 uppercase tracking-widest rounded-full">
               {isEn ? "Secure Access" : "安全访问"}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1 space-y-4">
             <div className="bg-white border border-gray-100 p-6 space-y-4 rounded-3xl shadow-sm">
                <nav className="space-y-2">
                   <button className="w-full text-left p-4 bg-[#C9A84C] text-black text-xs font-bold uppercase tracking-widest rounded-2xl shadow-sm">
                      {isEn ? "Award Submissions" : "报名申请数据"}
                   </button>
                   <button className="w-full text-left p-4 text-gfa-slate text-xs font-bold uppercase tracking-widest hover:bg-gray-50 rounded-2xl transition-all">
                      {isEn ? "Mentorship" : "导师申请"}
                   </button>
                   <button className="w-full text-left p-4 text-gfa-slate text-xs font-bold uppercase tracking-widest hover:bg-gray-50 rounded-2xl transition-all">
                      {isEn ? "Settings" : "系统设置"}
                   </button>
                </nav>
             </div>
          </aside>

          <main className="lg:col-span-3 space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center">
                   <h5 className="text-xs font-bold uppercase tracking-widest text-gfa-slate mb-4">{isEn ? "Total Submissions" : "收到总申请数"}</h5>
                   <div className="text-5xl font-black text-gfa-inkBlack font-serif">{submissions.length}</div>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center">
                   <h5 className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">{isEn ? "Pending Review" : "待处理"}</h5>
                   <div className="text-5xl font-black text-[#C9A84C] font-serif">{submissions.filter(s => s.status === 'pending').length}</div>
                </div>
             </div>

             <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-6 border-b border-gray-100 pb-4">
                   {isEn ? "Recent Award Submissions" : "最近收到的金羽奖报名"}
                </h3>
                
                {loading ? (
                  <div className="text-center py-12 text-gfa-slate">
                     {isEn ? "Loading secure data..." : "正在加载安全数据..."}
                  </div>
                ) : submissions.length === 0 ? (
                  <div className="text-center py-12 text-gfa-slate">
                     {isEn ? "No submissions found." : "暂无报名数据。"}
                  </div>
                ) : (
                  <div className="space-y-4">
                     {submissions.map((sub) => (
                       <div key={sub.id} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#C9A84C] transition-all group overflow-hidden">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                             <div>
                                <h5 className="text-base font-bold text-gfa-inkBlack">{sub.filmTitleOrig || "Untitled"}</h5>
                                <p className="text-xs text-gfa-slate mt-1">{sub.applicantName} • {sub.category}</p>
                             </div>
                             <div className="flex gap-2">
                               {sub.posterLink && (
                                 <a href={sub.posterLink} target="_blank" rel="noreferrer" className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100 hover:bg-blue-100">
                                   {isEn ? "Drive Link" : "网盘海报"}
                                 </a>
                               )}
                                <a href={sub.screenerLink} target="_blank" rel="noreferrer" className="text-xs bg-[#C9A84C]/10 text-black px-4 py-1.5 rounded-full border border-[#C9A84C]/20 hover:bg-[#C9A84C] transition-colors font-bold whitespace-nowrap">
                                   {isEn ? "View Screener" : "查看放映影片"}
                                </a>
                             </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gfa-slate">
                             <div>
                                <strong>Email:</strong> {sub.applicantEmail}
                             </div>
                             <div>
                                <strong>Date:</strong> {sub.createdAt?.toDate ? sub.createdAt.toDate().toLocaleDateString() : 'N/A'}
                             </div>
                             <div>
                                <strong>Runtime:</strong> {sub.runtime} mins
                             </div>
                             <div>
                                <strong>Attendees:</strong> {sub.attendeeCount || 0}
                             </div>
                             <div className="col-span-1 md:col-span-2 mt-2 bg-white p-3 rounded-xl border border-gray-100">
                                <strong className="block mb-1">{isEn ? "Synopsis:" : "梗概:"}</strong>
                                <p className="line-clamp-2">{sub.synopsis}</p>
                             </div>
                          </div>
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
