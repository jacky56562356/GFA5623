const fs = require('fs');

let content = fs.readFileSync('pages/YouthPrograms.tsx', 'utf8');

// The new wrapper for showRegForm
const newWrapperStart = `<div className="font-sans pb-3">
      <SEO title="Youth Programs | Global Film Alliance" />

      {showRegForm ? (
        <div className="bg-[#F5F2EE] min-h-screen pt-12 pb-24">
          <div className="container-gfa max-w-3xl mx-auto px-4">
            <button 
              onClick={() => setShowRegForm(false)}
              className="mb-8 flex items-center gap-2 text-gfa-slate hover:text-black transition-colors font-bold uppercase tracking-widest text-sm"
            >
              <ArrowRight className="w-5 h-5 rotate-180"/> {isEn ? "Back to Programs" : "返回项目"}
            </button>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-2 text-center">
                {isEn ? "Program Registration" : "项目报名申请"}
              </h3>
              <p className="text-center text-gfa-slate mb-8">{isEn ? "Please fill out the detailed form below." : "请详细填写下方的报名表单。"}</p>
              
              <form onSubmit={handleRegistrationSubmit} className="space-y-6">`;

const oldWrapperStart = `<div className="font-sans pb-3">
      <SEO title="Youth Programs | Global Film Alliance" />

      {/* Banner */}`;

content = content.replace(oldWrapperStart, newWrapperStart.replace('              <form onSubmit={handleRegistrationSubmit} className="space-y-6">', '') + '\n              <form onSubmit={handleRegistrationSubmit} className="space-y-6">\n' + `
{/* form content will be moved here by replacing the modal */}
`);

// The modal we want to delete/replace
const modalStartRegex = /{\/\* Registration Modal \*\/}[\s\S]*?<form onSubmit={handleRegistrationSubmit} className="space-y-4">/;
const replacementFormStart = `
              <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Uploads" : "上传文件"}</h4>
                <p className="text-xs text-gfa-slate">{isEn ? "Please note: These files will need to be manually attached when your email client opens." : "注意：在您的邮件客户端打开后，请手动将这些文件作为附件添加到邮件中。"}</p>
                <div>
                  <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Resume (optional)" : "个人简历 (选填)"}</label>
                  <input type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-gfa-slate file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5F2EE] file:text-[#C9A84C] hover:file:bg-[#E5C973] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Images or Portfolio (Max 20MB)" : "照片或作品集 (最大20MB)"}</label>
                  <input type="file" multiple accept="image/*" className="w-full text-sm text-gfa-slate file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5F2EE] file:text-[#C9A84C] hover:file:bg-[#E5C973] transition-colors" />
                </div>
              </div>
`;

// It's easier just to rewrite the return statement.
// Wait, doing this via regex might break. Let's just rewrite the return entirely.
