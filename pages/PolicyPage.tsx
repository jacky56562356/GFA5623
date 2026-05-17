
import React from 'react';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';

interface Props {
  type: 'privacy' | 'terms' | 'consent' | 'content';
}

const PolicyPage: React.FC<Props> = ({ type }) => {
  const { locale } = useLocale();
  const isEn = true;
  
  const getPolicyContent = () => {
    if (type === 'privacy') {
      return {
        title: "Privacy Policy",
        summary: "This Privacy Policy describes how Global Film Alliance (\"GFA\", \"we\", \"us\", or \"our\") collects, uses, and shares your personal information. It also explains your rights regarding your data and how to contact us.",
        sections: {
          "1. Information We Collect": "We may collect personal information such as your name, email address, phone number, and any other details you provide when you interact with our programs, subscribe to our newsletter, or use our website. We also automatically collect certain device and usage information, including IP addresses, cookies, and browsing activity.",
          "2. How We Use Your Information": "We use the collected information to operate and improve our website, deliver our services, communicate with you, process donations, and personalize your experience. We may also use your data for marketing and targeted advertising.",
          "3. Cookies and Targeted Advertising (Google Ads & Analytics)": "We use Google Analytics to analyze website traffic and Google Ads for advertising. Third-party vendors, including Google, use cookies to serve ads based on your past visits to our website (Remarketing). Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google Ads Settings (adssettings.google.com).",
          "4. Third-Party Links and Vendors": "Our site may feature advertisements served by third-party vendors. You can opt out of some third-party vendor's uses of cookies for personalized advertising by visiting www.aboutads.info or optout.networkadvertising.org. Our website may also contain links to other sites. We are not responsible for the privacy practices of those other sites.",
          "5. Your Rights": "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal data. To exercise these rights, please contact us at jacky@gfafilm.org.",
          "6. Changes to This Policy": "We may update this Privacy Policy from time to time. The updated version will be indicated by an updated \"Last Updated\" date and the updated version will be effective as soon as it is accessible."
        }
      };
    } else if (type === 'terms') {
      return {
        title: "Terms of Service",
        summary: "Welcome to Global Film Alliance. By accessing our website, you agree to comply with and be bound by the following terms and conditions.",
        sections: {
          "1. Acceptance of Terms": "By accessing or using our website, programs, or services, you agree to be legally bound by these Terms of Service. If you do not agree to these terms, please do not use our site.",
          "2. Use of Website": "You agree to use the site for lawful purposes only. You must not use the site in a way that infringes the rights of anyone else or restricts or inhibits anyone else's use and enjoyment of the website.",
          "3. Intellectual Property": "All content on this website, including texts, graphics, logos, images, and software, is the property of Global Film Alliance or its content suppliers and is protected by copyright and other intellectual property laws.",
          "4. Disclaimers and Limitations of Liability": "The website is provided on an \"as is\" and \"as available\" basis without any representations or warranties. Global Film Alliance will not be liable for any indirect, special, or consequential loss or damage arising out of or in connection with the use of the website.",
          "5. Links to Other Websites": "Our website may contain links to third-party web sites or services that are not owned or controlled by Global Film Alliance. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.",
          "6. Governing Law": "These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions."
        }
      };
    } else if (type === 'consent') {
      return {
        title: "Cookie Policy",
        summary: "This Cookie Policy explains how Global Film Alliance uses cookies and similar technologies to recognize you when you visit our website.",
        sections: {
          "1. What are cookies?": "Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.",
          "2. Why do we use cookies?": "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as \"essential\" or \"strictly necessary\" cookies. Other cookies, including those from Google Analytics and Google Ads, enable us to track and target the interests of our users to enhance the experience on our Website and to serve personalized advertising (Remarketing).",
          "3. How to manage cookies?": "You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. You can also opt-out of personalized advertising by visiting Google Ads Settings (adssettings.google.com) or www.aboutads.info. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted."
        }
      };
    }
    
    // Default fallback for content paths 
    return {
      title: "Policies",
      summary: "Global Film Alliance policies and guidelines.",
      sections: {
        "General": "Please visit specific policy pages for more details."
      }
    };
  };

  const currentPolicy = getPolicyContent();

  return (
    <div className="py-3 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-3 text-gfa-inkBlack">{currentPolicy.title}</h1>
      <p className="text-gfa-slate font-light text-lg mb-3 leading-relaxed">
        {currentPolicy.summary}
      </p>

      <div className="space-y-3">
        {Object.entries(currentPolicy.sections).map(([key, value]) => (
          <div key={key} className="bg-white p-10 border border-gfa-border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold font-serif mb-3 text-gfa-inkBlack pb-4 border-b border-gfa-border">
              {key}
            </h3>
            <div className="text-gfa-slate font-light leading-relaxed text-sm md:text-base">
              {String(value)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-5 border-t border-white/5 text-center">
        <p className="text-gfa-gray text-xs font-bold uppercase tracking-widest">
          {"Last Updated: May 2026 • Global Compliance Office"}
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
