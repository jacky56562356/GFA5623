const fs = require('fs');

let content = fs.readFileSync('pages/YouthPrograms.tsx', 'utf8');

const stateStart = `  const [formData, setFormData] = useState({`;
const newStates = `  const [resumeFileName, setResumeFileName] = useState('');
  const [portfolioFileNames, setPortfolioFileNames] = useState<string[]>([]);
  const [formData, setFormData] = useState({`;
content = content.replace(stateStart, newStates);

const oldUploadsCode = `                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Uploads" : "上传文件"}</h4>
                  <p className="text-xs text-gfa-slate">{isEn ? "Please note: These files will need to be manually attached when your email client opens." : "注意：在您的邮件客户端打开后，请手动将这些文件作为附件添加到邮件中。"}</p>
                  <div>
                    <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Resume (optional)" : "个人简历 (选填)"}</label>
                    <input type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-gfa-slate file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-[#F5F2EE] file:text-[#C9A84C] hover:file:bg-[#E5C973] transition-colors cursor-pointer focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Images or Portfolio (Max 20MB)" : "照片或作品集 (最大20MB)"}</label>
                    <input type="file" multiple accept="image/*" className="w-full text-sm text-gfa-slate file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-[#F5F2EE] file:text-[#C9A84C] hover:file:bg-[#E5C973] transition-colors cursor-pointer focus:outline-none" />
                  </div>
                </div>`;

const newUploadsCode = `                <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                  <h4 className="font-bold text-[#C9A84C] text-sm uppercase tracking-widest">{isEn ? "Uploads" : "上传文件"}</h4>
                  <p className="text-xs text-gfa-slate">{isEn ? "Please note: These files will need to be manually attached when your email client opens." : "注意：在您的邮件客户端打开后，请手动将这些文件作为附件添加到邮件中。"}</p>
                  <div>
                    <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Resume (optional)" : "个人简历 (选填)"}</label>
                    <label className="flex items-center gap-3 w-full bg-[#F5F2EE] border border-gray-200 border-dashed rounded-lg p-3 cursor-pointer hover:bg-[#EAE4D8] transition-colors">
                      <span className="px-4 py-1.5 bg-white text-[#C9A84C] font-semibold text-sm rounded-full shadow-sm">{isEn ? "Choose File" : "选择文件"}</span>
                      <span className="text-sm text-gfa-slate truncate flex-1">{resumeFileName || (isEn ? "No file chosen" : "未选择任何文件")}</span>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFileName(e.target.files?.[0]?.name || '')} />
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gfa-slate mb-1">{isEn ? "Images or Portfolio (Max 20MB)" : "照片或作品集 (最大20MB)"}</label>
                    <label className="flex items-center gap-3 w-full bg-[#F5F2EE] border border-gray-200 border-dashed rounded-lg p-3 cursor-pointer hover:bg-[#EAE4D8] transition-colors">
                      <span className="px-4 py-1.5 bg-white text-[#C9A84C] font-semibold text-sm rounded-full shadow-sm">{isEn ? "Choose Files" : "选择文件"}</span>
                      <span className="text-sm text-gfa-slate truncate flex-1">
                        {portfolioFileNames.length > 0 
                          ? (isEn ? \`\${portfolioFileNames.length} file(s) chosen\` : \`已选择 \${portfolioFileNames.length} 个文件\`) 
                          : (isEn ? "No file chosen" : "未选择任何文件")}
                      </span>
                      <input type="file" multiple className="hidden" accept="image/*" onChange={(e) => setPortfolioFileNames(Array.from(e.target.files || []).map(f => f.name))} />
                    </label>
                  </div>
                </div>`;

content = content.replace(oldUploadsCode, newUploadsCode);

fs.writeFileSync('pages/YouthPrograms.tsx', content);
