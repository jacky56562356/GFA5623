const fs = require('fs');

let content = fs.readFileSync('pages/YouthPrograms.tsx', 'utf8');

// 1. Add hook import
content = content.replace(
    "import React from 'react';", 
    "import React, { useState } from 'react';"
);

// 2. Add state and handlers
const stateCode = `const YouthPrograms: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  const [showRegForm, setShowRegForm] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    program: 'Youth Film Summer Camp',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = isEn ? \`Registration: \${formData.childName} for \${formData.program}\` : \`报名申请: \${formData.childName} 报名 \${formData.program}\`;
    const body = \`Parent Name: \${formData.parentName}
Child Name: \${formData.childName}
Email: \${formData.email}
Phone: \${formData.phone}
Program: \${formData.program}

Additional Message:
\${formData.message}\`;

    window.location.href = \`mailto:jacky@gfafilm.org?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`;
    setShowRegForm(false);
  };`;

content = content.replace(
    "const YouthPrograms: React.FC = () => {\n  const { locale } = useLocale();\n  const isEn = locale === Locale.EN;",
    stateCode
);

// 3. Update the Register button (there might be multiple, let's find the specific one block)
content = content.replace(
    '<button className="bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">\n                   {isEn ? "Register My Child" : "为我的孩子报名"}\n                 </button>',
    '<button onClick={() => setShowRegForm(true)} className="bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">\n                   {isEn ? "Register My Child" : "为我的孩子报名"}\n                 </button>'
);

// 4. Update the "Join the Waitlist" button too just in case they want to use that for registration
content = content.replace(
    '<button className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg inline-flex items-center gap-2">\n              {isEn ? "Join the Waitlist" : "加入等候名单"} <ArrowRight className="w-4 h-4"/>\n            </button>',
    '<button onClick={() => setShowRegForm(true)} className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg inline-flex items-center gap-2">\n              {isEn ? "Join the Waitlist" : "加入等候名单"} <ArrowRight className="w-4 h-4"/>\n            </button>'
);

// 5. Add the modal before the final </div>
const modalCode = `
      {/* Registration Modal */}
      {showRegForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowRegForm(false)}
              className="absolute top-4 right-4 text-gfa-slate hover:text-black text-2xl font-light"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6 text-center">
              {isEn ? "Program Registration" : "项目报名申请"}
            </h3>
            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Parent's Name" : "家长姓名"} *</label>
                  <input required name="parentName" value={formData.parentName} onChange={handleInputChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Child's Name" : "孩子姓名"} *</label>
                  <input required name="childName" value={formData.childName} onChange={handleInputChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Phone Number" : "联系电话"} *</label>
                  <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Email Address" : "电子邮箱"} *</label>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Select Program" : "选择报名项目"} *</label>
                <select required name="program" value={formData.program} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                  <option value="Youth Film Summer Camp">{isEn ? "Youth Film Summer Camp" : "影视夏令营"}</option>
                  <option value="Dream Film Project">{isEn ? "Dream Film Project" : "电影制作项目"}</option>
                  <option value="Youth Short Drama Program">{isEn ? "Youth Short Drama Program" : "少儿微短剧拍摄"}</option>
                  <option value="On-Set Internship">{isEn ? "On-Set Internship" : "剧组实习"}</option>
                  <option value="GFA AI Content Creator">{isEn ? "GFA AI Content Creator" : "AI 内容创作者项目"}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Any Questions or Notes?" : "其他疑问或备注 (选填)"}</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A84C]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-sm py-4 rounded-xl transition-all shadow-md hover:shadow-lg mt-4">
                {isEn ? "Go to Email to Submit" : "通过邮件提交"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};`;

content = content.replace(
    /    <\/div>\s*  \);\s*};\s*export default YouthPrograms;/g,
    modalCode + "\nexport default YouthPrograms;"
);

// We need to match the specific end accurately. So let's do a reliable replacement for the end.
fs.writeFileSync('pages/YouthPrograms.tsx', content);

console.log("Updated YouthPrograms!");
