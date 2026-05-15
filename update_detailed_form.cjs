const fs = require('fs');

let content = fs.readFileSync('pages/YouthPrograms.tsx', 'utf8');

const oldStateCode = `  const [formData, setFormData] = useState({
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

const newStateCode = `  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    program: 'Youth Film Summer Camp',
    emergencyContact: '',
    emergencyPhone: '',
    dietary: '',
    medical: '',
    filmmakingExperience: 'None',
    tshirtSize: 'M',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = isEn ? \`Registration: \${formData.childName} for \${formData.program}\` : \`报名申请: \${formData.childName} 报名 \${formData.program}\`;
    const body = \`Program: \${formData.program}

--- Participant Information ---
Child Name: \${formData.childName}
Child Age: \${formData.childAge}
T-Shirt Size: \${formData.tshirtSize}
Filmmaking Experience: \${formData.filmmakingExperience}

--- Parent/Guardian Information ---
Parent Name: \${formData.parentName}
Email: \${formData.email}
Phone: \${formData.phone}

--- Emergency Contact ---
Name: \${formData.emergencyContact}
Phone: \${formData.emergencyPhone}

--- Health & Safety ---
Dietary Restrictions: \${formData.dietary}
Medical Conditions: \${formData.medical}

--- Additional Notes ---
\${formData.message}\`;

    window.location.href = \`mailto:jacky@gfafilm.org?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`;
    setShowRegForm(false);
  };`;

content = content.replace(oldStateCode, newStateCode);

const oldModalCode = `            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
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
            </form>`;

const newModalCode = `            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              
              <div className="bg-gray-50 p-4 rounded-xl space-y-4 border border-gray-100">
                <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Participant Information" : "营员信息"}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Child's Name" : "孩子姓名"} *</label>
                    <input required name="childName" value={formData.childName} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Age" : "年龄"} *</label>
                    <input required name="childAge" value={formData.childAge} onChange={handleInputChange} type="number" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "T-Shirt Size" : "T恤尺寸"}</label>
                    <select name="tshirtSize" value={formData.tshirtSize} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Filmmaking Experience" : "影视制作经验"}</label>
                    <select name="filmmakingExperience" value={formData.filmmakingExperience} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                      <option value="None">{isEn ? "None" : "无经验"}</option>
                      <option value="Beginner">{isEn ? "Beginner" : "初学者"}</option>
                      <option value="Intermediate">{isEn ? "Intermediate" : "有一定经验"}</option>
                      <option value="Advanced">{isEn ? "Advanced" : "丰富经验"}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl space-y-4 border border-gray-100">
                <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Parent/Guardian Info" : "家长信息"}</h4>
                <div>
                  <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Parent/Guardian Name" : "家长/监护人姓名"} *</label>
                  <input required name="parentName" value={formData.parentName} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Phone Number" : "联系电话"} *</label>
                    <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Email Address" : "电子邮箱"} *</label>
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl space-y-4 border border-gray-100">
                <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Emergency & Health" : "紧急联系及健康信息"}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Emergency Contact Name" : "紧急联系人姓名"} *</label>
                    <input required name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Emergency Phone" : "紧急联系电话"} *</label>
                    <input required name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} type="tel" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Dietary Restrictions" : "饮食禁忌/过敏 (如无请填无)"}</label>
                    <input name="dietary" value={formData.dietary} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Medical Conditions" : "特殊医疗状况 (如无请填无)"}</label>
                    <input name="medical" value={formData.medical} onChange={handleInputChange} type="text" className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Select Program" : "选择报名项目"} *</label>
                <select required name="program" value={formData.program} onChange={handleInputChange} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]">
                  <option value="Youth Film Summer Camp">{isEn ? "Youth Film Summer Camp" : "影视夏令营"}</option>
                  <option value="Dream Film Project">{isEn ? "Dream Film Project" : "电影制作项目"}</option>
                  <option value="Youth Short Drama Program">{isEn ? "Youth Short Drama Program" : "少儿微短剧拍摄"}</option>
                  <option value="On-Set Internship">{isEn ? "On-Set Internship" : "剧组实习"}</option>
                  <option value="GFA AI Content Creator">{isEn ? "GFA AI Content Creator" : "AI 内容创作者项目"}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gfa-slate mb-1">{isEn ? "Any Questions or Notes?" : "其他疑问或备注 (选填)"}</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-[#C9A84C]"></textarea>
              </div>

              <div className="text-xs text-gfa-slate font-light mb-2">
                * {isEn ? "By submitting this form, you acknowledge that you will be redirected to your email client to send the registration details to GFA." : "提交此表单将带您前往您的电子邮件客户端，向GFA发送您的详细报名信息。"}
              </div>

              <button type="submit" className="w-full bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-sm py-4 rounded-xl transition-all shadow-md hover:shadow-lg mt-4">
                {isEn ? "Generate Request & Email Us" : "生成报名并邮件发送"}
              </button>
            </form>`;

content = content.replace(oldModalCode, newModalCode);

fs.writeFileSync('pages/YouthPrograms.tsx', content);
