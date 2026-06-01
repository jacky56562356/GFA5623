import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Mail } from 'lucide-react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const ContactThankYou: React.FC = () => {
  const { t } = useLocale();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17628558148/zZWHCP_AjrccEMTm-dVB',
        'value': 1.0,
        'currency': 'USD'
      });
    }
  }, []);

  return (
    <div className="bg-gfa-warmWhite min-h-[80vh] flex items-center justify-center relative overflow-hidden py-16 px-6" id="contact-thankyou-view">
      <SEO 
        title="Thank You | GFA" 
        description="Thank you for your message. We will get back to you shortly." 
      />
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gfa-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gfa-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-md w-full bg-white p-10 md:p-12 rounded-[40px] border border-gfa-border shadow-2xl text-center relative z-10" id="thankyou-card">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-green-500 mb-8 border border-green-100">
          <CheckCircle className="w-10 h-10" />
        </div>

        <h1 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
          {t.locale === 'zh' ? '提交成功' : 'Submission Successful'}
        </h1>
        
        <p className="text-lg text-gfa-slate font-serif italic mb-2">
          {t.locale === 'zh' ? '感谢您的提交，我们会尽快与您联系。' : 'Thank you for your submission, we will contact you as soon as possible.'}
        </p>
        
        <p className="text-sm text-gfa-slate opacity-75 mb-10">
          {t.locale === 'zh' ? '我们的团队将在两个工作日内回复。' : 'Our team will respond within two business days.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 h-14 px-6 bg-gfa-inkBlack text-white text-xs font-bold uppercase tracking-widest rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            id="back-home-btn"
          >
            <Home className="w-4 h-4" />
            {t.locale === 'zh' ? '返回首页' : 'Home'}
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center justify-center gap-2 h-14 px-6 bg-white border border-gfa-border text-gfa-slate text-xs font-bold uppercase tracking-widest rounded-2xl hover:border-gfa-gold hover:text-gfa-gold transition-all"
            id="back-contact-btn"
          >
            <Mail className="w-4 h-4" />
            {t.locale === 'zh' ? '再次联系' : 'Contact Us'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactThankYou;
