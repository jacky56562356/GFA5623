import React, { useState } from 'react';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';
import SEO from '../components/SEO';
import { useAuth } from '../lib/AuthContext';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/errorHandlers';

const GearDonation: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    shippingMethod: 'mail',
    shippingAddress: '',
    overallRemarks: '',
    needsTaxDeduction: false
  });

  const [donatedItems, setDonatedItems] = useState([
    { id: Date.now().toString(), category: 'camera', brandModel: '', condition: 'good', quantity: 1 }
  ]);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const combinedFiles = [...selectedFiles, ...newFiles].slice(0, 10); // max 10
      setSelectedFiles(combinedFiles);

      const urls = combinedFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);

    const newUrls = [...previewUrls];
    URL.revokeObjectURL(newUrls[index]);
    newUrls.splice(index, 1);
    setPreviewUrls(newUrls);
  };

  const handleItemChange = (id: string, field: string, value: string | number) => {
    setDonatedItems(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addItem = () => {
    setDonatedItems(prev => [...prev, { id: Date.now().toString(), category: 'camera', brandModel: '', condition: 'good', quantity: 1 }]);
  };

  const removeItem = (id: string) => {
    if (donatedItems.length > 1) {
      setDonatedItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    setError(null);

    try {
      const uid = user ? user.uid : 'anonymous';
      // Fake image upload process
      const uploadedImageUrls = selectedFiles.map((_, i) => `https://gfa-storage.example.com/donations/${uid}/img_${i}.jpg`);

      const dataToSubmit: any = {
        userId: uid,
        donorName: formData.donorName,
        email: formData.email,
        phone: formData.phone,
        shippingMethod: formData.shippingMethod,
        shippingAddress: formData.shippingAddress,
        donatedItemsDetails: JSON.stringify(donatedItems),
        overallRemarks: formData.overallRemarks,
        needsTaxDeduction: formData.needsTaxDeduction,
        imageUrls: uploadedImageUrls,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, 'gear_donations'), dataToSubmit);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error(err);
      handleFirestoreError(err, OperationType.CREATE, 'gear_donations');
      setError(err.message || (isEn ? "Failed to submit donation. Please try again." : "提交失败，请重试。"));
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#F5F2EE] py-5">
        <div className="container-gfa max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gfa-border">
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-3">
              {isEn ? "Thank You!" : "感谢您的捐赠！"}
            </h1>
            <p className="text-lg text-gfa-slate font-light mb-4">
              {isEn 
                ? "Your donation form has been submitted for evaluation. We will contact you shortly." 
                : "您的捐赠表单已提交评估。我们会在评估完成后尽快与您取得联系。"}
            </p>
            <button
              onClick={() => window.location.href = '/filmmaker-support'}
              className="px-8 py-3 bg-[#C9A84C] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#b09241] transition-colors"
            >
              {isEn ? "Return to Support Page" : "返回支持主页"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans pb-6 bg-[#F5F2EE] min-h-screen">
      <SEO title="Gear Donation | Global Film Alliance" />

      {/* Header */}
      <section className="bg-gfa-inkBlack text-white py-6 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-serif mb-3">
          {isEn ? "Donate Gear for Employment Support" : "闲置设备捐赠与就业扶持计划"}
        </h1>
        <p className="text-xl font-light text-[#C9A84C] max-w-3xl mx-auto leading-relaxed">
          {isEn 
            ? "Your equipment can help emerging filmmakers break into the industry. Give your idle gear a second life and empower the next generation." 
            : "您的闲置设备将帮助缺乏资源的新兴电影人获得实操机会。赋予旧设备第二次生命，助力下一代影视人才进入行业。"}
        </p>
      </section>

      {/* Impact Section */}
      <section className="py-4 px-4">
        <div className="container-gfa max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gfa-border text-center">
              <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-[#C9A84C]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gfa-inkBlack mb-3">{isEn ? "Empower Filmmakers" : "赋能影视新人"}</h3>
              <p className="text-gfa-slate text-sm leading-relaxed font-light">
                {isEn ? "Donated gear directly supports GFA's hands-on training sets, giving marginalized creators access to professional tools." : "捐赠设备将直接用于GFA及合作基地的实操拍摄训练，为边缘弱势群体和学生提供接触专业工具的机会。"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gfa-border text-center">
              <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-[#C9A84C]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gfa-inkBlack mb-3">{isEn ? "Create Real Jobs" : "创造实际就业"}</h3>
              <p className="text-gfa-slate text-sm leading-relaxed font-light">
                {isEn ? "Trainees use your gear to build portfolios and qualify for union jobs or freelance work, driving direct employment." : "学员将使用这些设备完成作品集，积累实战经验，从而能够胜任工会项目或独立外包工作，直接促进就业。"}
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gfa-border text-center">
              <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-[#C9A84C]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gfa-inkBlack mb-3">{isEn ? "Tax Deductible" : "税务减免支持"}</h3>
              <p className="text-gfa-slate text-sm leading-relaxed font-light">
                {isEn ? "As a registered non-profit, GFA provides tax receipts for the fair market value of accepted equipment donations." : "GFA作为注册非营利组织，可对接收的设备进行公平市场价值评估，并开具相应的免税收据（Tax Receipt）。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-3 px-4 bg-white border-y border-gfa-border">
        <div className="container-gfa max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-gfa-inkBlack text-center mb-5">
            {isEn ? "Donation Process" : "捐赠流程"}
          </h2>
          <div className="relative border-l-2 border-[#C9A84C]/30 ml-4 md:ml-1/2 pl-6 md:pl-0 space-y-3">
            <div className="md:flex items-center justify-between w-full">
              <div className="md:w-5/12 text-left md:text-right pr-6">
                <h4 className="text-lg font-bold text-gfa-inkBlack">{isEn ? "1. Submit Intention" : "1. 提交捐赠意向"}</h4>
                <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "Fill out the form below with photos and condition details of your gear." : "填写下方表单，提供设备类型、照片及当前状况说明。"}</p>
              </div>
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 bg-[#C9A84C] rounded-full mt-1.5 md:mt-0"></div>
              <div className="md:w-5/12 pl-6 hidden md:block"></div>
            </div>
            
            <div className="md:flex items-center justify-between w-full">
              <div className="md:w-5/12 pr-6 hidden md:block"></div>
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 bg-[#C9A84C] rounded-full mt-1.5 md:mt-0"></div>
              <div className="md:w-5/12 pl-0 md:pl-6 text-left">
                <h4 className="text-lg font-bold text-gfa-inkBlack">{isEn ? "2. GFA Evaluation" : "2. GFA评估审核"}</h4>
                <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "We assess the equipment to ensure it fits our training or production programs." : "我们的技术团队将评估设备是否符合当前的教学实操或拍摄所需。"}</p>
              </div>
            </div>

            <div className="md:flex items-center justify-between w-full">
              <div className="md:w-5/12 text-left md:text-right pr-6">
                <h4 className="text-lg font-bold text-gfa-inkBlack">{isEn ? "3. Shipping / Drop-off" : "3. 邮寄或线下递送"}</h4>
                <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "Once approved, ship the gear to our HQ or drop it off locally." : "审核通过后，您可通过邮寄或送至指定的当地线下接收点。"}</p>
              </div>
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 bg-[#C9A84C] rounded-full mt-1.5 md:mt-0"></div>
              <div className="md:w-5/12 pl-6 hidden md:block"></div>
            </div>

            <div className="md:flex items-center justify-between w-full">
              <div className="md:w-5/12 pr-6 hidden md:block"></div>
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 bg-[#C9A84C] rounded-full mt-1.5 md:mt-0"></div>
              <div className="md:w-5/12 pl-0 md:pl-6 text-left">
                <h4 className="text-lg font-bold text-gfa-inkBlack">{isEn ? "4. Receipt & Acknowledgment" : "4. 签收与凭证发放"}</h4>
                <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "We inventory the gear and send your official tax receipt and acknowledgment." : "我们确认收货并清点无误后，将为您发放捐赠感谢信及免税收据。"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
              {isEn ? "Donation Form" : "设备捐赠表单"}
            </h2>
            <p className="text-gfa-slate font-light">
              {isEn ? "Please fill out the details of the equipment you wish to donate." : "请在下方详细填写您打算捐赠的设备信息。"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100">
                  {error}
                </div>
              )}

              {/* Personal Info */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gfa-border">
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-3 pb-4 border-b border-gfa-border flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-sm">1</span>
                  {isEn ? "Your Contact Information" : "个人联系方式"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Donor Name / Entity" : "捐赠人 / 机构名称"} *
                    </label>
                    <input
                      type="text"
                      name="donorName"
                      required
                      maxLength={100}
                      value={formData.donorName}
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
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Phone" : "联系电话"} *
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
                </div>
              </div>

              {/* Logistics */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gfa-border">
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-3 pb-4 border-b border-gfa-border flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-sm">2</span>
                  {isEn ? "Shipping Logistics" : "设备邮寄方式"}
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Shipping Method" : "递送方式"} *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="mail"
                          checked={formData.shippingMethod === 'mail'}
                          onChange={handleChange}
                          className="text-[#C9A84C] focus:ring-[#C9A84C]"
                        />
                        <span className="text-sm font-medium">{isEn ? "Mail / Courier" : "邮寄 / 快递"}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="dropoff"
                          checked={formData.shippingMethod === 'dropoff'}
                          onChange={handleChange}
                          className="text-[#C9A84C] focus:ring-[#C9A84C]"
                        />
                        <span className="text-sm font-medium">{isEn ? "In-person Drop-off" : "线下递送"}</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2">
                      {isEn ? "Sending From (Your Address)" : "发件地址 (寄出地址)"} *
                    </label>
                    <input
                      type="text"
                      name="shippingAddress"
                      required
                      maxLength={250}
                      value={formData.shippingAddress}
                      onChange={handleChange}
                      placeholder={isEn ? "Where will the gear be shipped from?" : "设备将从何处寄出？"}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C]"
                    />
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
                     <p className="text-sm text-blue-800 font-light">
                       {isEn ? "GFA Receiving Address (Provided upon assessment approval)" : "GFA官方收件地址将在设备评估通过后，通过邮件发送给您。"}
                     </p>
                  </div>
                </div>
              </div>

              {/* Equipment Details */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gfa-border">
                <div className="flex items-center justify-between border-b border-gfa-border pb-4 mb-3">
                  <h3 className="text-xl font-bold font-serif text-gfa-inkBlack flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-sm">3</span>
                    {isEn ? "Equipment Details" : "捐赠设备明细"}
                  </h3>
                  <button type="button" onClick={addItem} className="text-[#C9A84C] hover:text-[#b09241] font-bold text-sm tracking-widest uppercase flex items-center gap-1 transition-colors">
                    <span>+</span> {isEn ? "Add Item" : "添加设备"}
                  </button>
                </div>
                
                <div className="space-y-3">
                  {/* Equipment Table / List */}
                  <div className="overflow-x-auto border border-gfa-border rounded-xl">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#fcfaf5] text-gfa-slate font-bold uppercase text-xs border-b border-gfa-border">
                        <tr>
                          <th className="px-4 py-3">{isEn ? "Category" : "类别"} *</th>
                          <th className="px-4 py-3">{isEn ? "Brand / Model" : "品牌 / 型号"} *</th>
                          <th className="px-4 py-3">{isEn ? "Condition" : "设备状况"} *</th>
                          <th className="px-4 py-3 w-24 text-center">{isEn ? "Qty" : "数量"} *</th>
                          <th className="px-4 py-3 w-16 text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {donatedItems.map((item, index) => (
                          <tr key={item.id} className="border-b border-gfa-border last:border-0 hover:bg-gfa-warmWhite transition-colors">
                            <td className="px-4 py-3">
                              <select 
                                value={item.category} 
                                onChange={(e) => handleItemChange(item.id, 'category', e.target.value)}
                                className="w-full bg-white border border-gfa-border rounded-lg px-3 py-2 focus:outline-none focus:border-[#C9A84C]"
                              >
                                <option value="camera">{isEn ? "Camera" : "摄影机"}</option>
                                <option value="lens">{isEn ? "Lens" : "镜头"}</option>
                                <option value="lighting">{isEn ? "Lighting" : "灯光"}</option>
                                <option value="grip">{isEn ? "Grip & Support" : "脚架与移动"}</option>
                                <option value="audio">{isEn ? "Audio" : "录音设备"}</option>
                                <option value="accessory">{isEn ? "Accessory" : "配件"}</option>
                                <option value="other">{isEn ? "Other" : "其他"}</option>
                              </select>
                            </td>
                            <td className="px-4 py-3">
                              <input 
                                type="text"
                                required
                                value={item.brandModel}
                                onChange={(e) => handleItemChange(item.id, 'brandModel', e.target.value)}
                                placeholder={isEn ? "e.g. BMPCC 6K Pro" : "例如: BMPCC 6K Pro"}
                                className="w-full bg-white border border-gfa-border rounded-lg px-3 py-2 focus:outline-none focus:border-[#C9A84C]"
                              />
                            </td>
                            <td className="px-4 py-3">
                              <select 
                                value={item.condition} 
                                onChange={(e) => handleItemChange(item.id, 'condition', e.target.value)}
                                className="w-full bg-white border border-gfa-border rounded-lg px-3 py-2 focus:outline-none focus:border-[#C9A84C]"
                              >
                                <option value="like_new">{isEn ? "Like New" : "几乎全新"}</option>
                                <option value="good">{isEn ? "Good (Normal wear)" : "良好 (正常使用痕迹)"}</option>
                                <option value="fair">{isEn ? "Fair (Heavy wear)" : "一般 (较多使用痕迹)"}</option>
                                <option value="needs_repair">{isEn ? "Needs Repair" : "需要维修"}</option>
                              </select>
                            </td>
                            <td className="px-4 py-3">
                              <input 
                                type="number"
                                min="1"
                                required
                                value={item.quantity}
                                onChange={(e) => handleItemChange(item.id, 'quantity', parseInt(e.target.value) || 1)}
                                className="w-full bg-white border border-gfa-border rounded-lg px-3 py-2 focus:outline-none focus:border-[#C9A84C] text-center"
                              />
                            </td>
                            <td className="px-4 py-3 text-center">
                              <button 
                                type="button" 
                                onClick={() => removeItem(item.id)}
                                disabled={donatedItems.length === 1}
                                className="text-red-400 hover:text-red-600 disabled:opacity-30 transition-colors"
                              >
                                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2 mt-4">
                      {isEn ? "Overall Remarks (Optional)" : "总体备注说明 (选填)"}
                    </label>
                    <textarea
                      name="overallRemarks"
                      maxLength={1000}
                      rows={3}
                      value={formData.overallRemarks}
                      onChange={handleChange}
                      placeholder={isEn ? "Any additional context about the equipment History, missing parts, battery health, etc." : "关于设备的任何其他说明，如维修历史、缺失配件、电池健康度度等。"}
                      className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A84C] resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest text-gfa-slate uppercase mb-2 mt-4">
                      {isEn ? "Upload Photos (Max 10)" : "上传设备图片 (最多10张)"}
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gfa-slate file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#C9A84C]/10 file:text-[#C9A84C] hover:file:bg-[#C9A84C]/20"
                    />
                    <p className="text-xs text-gfa-slate mt-2">
                       {isEn ? "Supported formats: JPG, PNG. Help us evaluate the condition." : "支持 JPG, PNG 格式。清晰的图片有助于我们进行评估。"}
                    </p>
                    
                    {previewUrls.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
                        {previewUrls.map((url, i) => (
                          <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-gfa-border bg-gray-100">
                            <img src={url} alt={`Preview ${i}`} className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="absolute top-1 right-1 bg-black/50 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs hover:bg-black/70"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tax Deduction */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gfa-border">
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-3 pb-4 border-b border-gfa-border flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center text-sm">4</span>
                  {isEn ? "Tax Deduction Assessment" : "抵税评估需求"}
                </h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-4 rounded-xl border border-gfa-border hover:bg-gfa-warmWhite cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      name="needsTaxDeduction"
                      checked={formData.needsTaxDeduction}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#C9A84C] rounded border-gfa-border focus:ring-[#C9A84C]"
                    />
                    <div>
                      <p className="font-bold text-sm text-gfa-inkBlack mb-1">
                        {isEn ? "I would like GFA to assess this donation for tax-deduction purposes." : "我希望GFA评估此项捐助并提供免税收据。"}
                      </p>
                      <p className="text-xs font-light text-gfa-slate leading-relaxed">
                        {isEn 
                          ? "GFA is a registered non-profit organization. We will evaluate the fair market value of your equipment and issue a receipt if applicable." 
                          : "GFA是注册非营利组织。勾选此项，我们将在接收设备后，根据公平市场价值进行评估，并为您开具可用于抵税的捐赠证明。"}
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#C9A84C] text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#b09241] transition-colors shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (isEn ? "Submitting..." : "提交中...") : (isEn ? "Submit Donation Form" : "提交设备捐赠单")}
                </button>
              </div>
            </form>
        </div>
      </section>
    </div>
  );
};

export default GearDonation;
