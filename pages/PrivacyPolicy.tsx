import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';

const PrivacyPolicy: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="font-sans pb-3">
      <SEO title="Privacy Policy | Global Film Alliance" />

      {/* Hero */}
      <section className="bg-gfa-inkBlack text-white pt-4 pb-4 border-b border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h1 className="text-3xl md:text-5xl font-bold font-serif mb-3 leading-tight">
             {"Privacy Policy"}
           </h1>
           <p className="text-white/70 font-light text-sm max-w-2xl mx-auto uppercase tracking-widest">
             {"Last Updated: March 2026"}
           </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-5 bg-white">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-slate max-w-none prose-h2:font-serif prose-h2:text-gfa-inkBlack prose-a:text-[#C9A84C]">
            <>
<h2>1. Introduction</h2>
                <p> Global Film Alliance, Inc. ("GFA," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (gfaalliance.org) and register for our programs. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site. </p>

                <h2>2. Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul>
                  <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, telephone number, and children's participation form information when you register with the Site, sign up for programs, or make a donation.</li>
                  <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. </li>
                  <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. </li>
                </ul>

                <h2>3. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you to:</p>
                <ul>
                  <li> Facilitate contact, program registration confirmation, and direct communication with parents regarding participant logistics. </li>
                  <li> Administer sweepstakes, promotions, and contests (e.g. Youth Talent Competition). </li>
                  <li> Process payments, donations, program registrations, and event ticketing. </li>
                  <li> Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you. </li>
                  <li> Monitor and analyze usage and trends to improve your experience with the Site. </li>
                  <li> Comply with Google Advertising policies to track interactions with ad campaigns and personalize your browsing experience. </li>
                </ul>

                <h2>4. Google Advertising and Cookies</h2>
                <p> We use Google Ads and other analytics services. Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. </p>
                <p> You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"> Ads Settings </a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer"> www.aboutads.info </a>.
                </p>

                <h2>5. Disclosure of Your Information</h2>
                <p><strong>We do not sell your personal data to third parties.</strong> We may share information we have collected about you in certain limited situations. Your information may be disclosed as follows:</p>
                <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                <ul>
                  <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others. </li>
                  <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. </li>
                </ul>

                <h2>6. Children's Privacy (COPPA Compliance)</h2>
                <p> We are deeply committed to protecting the privacy of children. Many of our programs involve minors. We do not knowingly solicit information from or market to children under the age of 13 without verifiable parental consent in accordance with the Children's Online Privacy Protection Act (COPPA). If you become aware of any data we have collected from children under age 13 without consent, please contact us. </p>

                <h2>7. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <p> Global Film Alliance, Inc. <br/>
                  17800 Castleton St, Suite 173<br/>
                  City of Industry, CA 91748<br/> Email: jacky@gfafilm.org <br/>
                  Phone: 626-677-8017
                </p>
</>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
