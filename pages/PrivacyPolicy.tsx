import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';

const PrivacyPolicy: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-3">
      <SEO title="Privacy Policy | Global Film Alliance" />

      {/* Hero */}
      <section className="bg-gfa-inkBlack text-white pt-4 pb-4 border-b border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h1 className="text-3xl md:text-5xl font-bold font-serif mb-3 leading-tight">
             {isEn ? "Privacy Policy" : "隐私政策"}
           </h1>
           <p className="text-white/70 font-light text-sm max-w-2xl mx-auto uppercase tracking-widest">
             {isEn ? "Last Updated: March 2026" : "最后更新时间: 2026年3月"}
           </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-5 bg-white">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-slate max-w-none prose-h2:font-serif prose-h2:text-gfa-inkBlack prose-a:text-[#C9A84C]">
            {isEn ? (
              <>
                <h2>1. Introduction</h2>
                <p>{/* [中文内容待填入] */} Global Film Alliance, Inc. ("GFA," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (gfafilm.org) and register for our programs. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site. </p>

                <h2>2. Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul>
                  <li><strong>Personal Data:</strong>{/* [中文内容待填入] */} Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information when you register with the Site, sign up for programs, or make a donation. </li>
                  <li><strong>Derivative Data:</strong>{/* [中文内容待填入] */} Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. </li>
                  <li><strong>Financial Data:</strong>{/* [中文内容待填入] */} Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. </li>
                </ul>

                <h2>3. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you to:</p>
                <ul>
                  <li>{/* [中文内容待填入] */} Administer sweepstakes, promotions, and contests (e.g. Global Youth Talent Competition). </li>
                  <li>{/* [中文内容待填入] */} Process payments, donations, program registrations, and event ticketing. </li>
                  <li>{/* [中文内容待填入] */} Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you. </li>
                  <li>{/* [中文内容待填入] */} Monitor and analyze usage and trends to improve your experience with the Site. </li>
                  <li>{/* [中文内容待填入] */} Comply with Google Advertising policies to track interactions with ad campaigns and personalize your browsing experience. </li>
                </ul>

                <h2>4. Google Advertising and Cookies</h2>
                <p>{/* [中文内容待填入] */} We use Google Ads and other analytics services. Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. </p>
                <p>{/* [中文内容待填入] */} You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">{/* [中文内容待填入] */} Ads Settings </a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">{/* [中文内容待填入] */} www.aboutads.info </a>.
                </p>

                <h2>5. Disclosure of Your Information</h2>
                <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                <ul>
                  <li><strong>By Law or to Protect Rights:</strong>{/* [中文内容待填入] */} If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others. </li>
                  <li><strong>Third-Party Service Providers:</strong>{/* [中文内容待填入] */} We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. </li>
                </ul>

                <h2>6. Children's Privacy (COPPA Compliance)</h2>
                <p>{/* [中文内容待填入] */} We are deeply committed to protecting the privacy of children. Many of our programs involve minors. We do not knowingly solicit information from or market to children under the age of 13 without verifiable parental consent in accordance with the Children's Online Privacy Protection Act (COPPA). If you become aware of any data we have collected from children under age 13 without consent, please contact us. </p>

                <h2>7. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <p>{/* [中文内容待填入] */} Global Film Alliance, Inc. <br/>
                  17800 Castleton St, Suite 173<br/>
                  City of Industry, CA 91748<br/>{/* [中文内容待填入] */} Email: jacky@gfafilm.org <br/>
                  Phone: 626-677-8017
                </p>
              </>
            ) : (
              <>
                <h2>1. 引言</h2>
                <p>
                  Global Film Alliance, Inc.（“GFA”，“我们”）尊重您的隐私。本隐私政策解释了当您访问我们的网站（gfafilm.org）和注册我们的相关活动（如影视夏令营、才艺大赛等）时，我们如何收集、使用、披露和保护您的信息。在使用我们的服务之前，请仔细阅读本政策。
                </p>

                <h2>2. 我们收集的信息</h2>
                <p>我们可以通过多种方式收集关于您的信息，其中包括：</p>
                <ul>
                  <li><strong>个人数据：</strong> 当您进行活动报名、注册或捐款时提供的姓名、邮寄地址、电子邮件地址、电话号码及人口统计学等可识别身份的个人信息。</li>
                  <li><strong>衍生数据：</strong> 当您访问网站时我们服务器自动收集的信息，例如您的IP地址、浏览器类型、操作系统、访问时间以及您在访问本站前后查看的页面。</li>
                  <li><strong>财务数据：</strong> 若您在本站发起捐款或支付活动费用，我们将处理相关的付款方式（如信用卡信息）。作为合规组织，我们使用严密的第三方加密支付平台，并仅存储有限的必要付款历史记录。</li>
                </ul>

                <h2>3. 我们如何使用您的信息</h2>
                <p>具备准确的用户信息能让我们为您提供顺畅、高效的定制体验。我们可能出于以下目的使用您的信息：</p>
                <ul>
                  <li>管理才艺大赛、夏令营及各项招生活动。</li>
                  <li>处理在线捐款、项目注册及相关的付款流程。</li>
                  <li>为您发送与网站或本机构活动相关的电子报订阅、目标广告和推广信息。</li>
                  <li>对网站的使用和相关趋势进行数据监控与分析，以持续优化您的体验。</li>
                  <li>遵守Google等数字广告投放规则，追踪广告活动的效果并优化个性化体验。</li>
                </ul>

                <h2>4. Google 广告与 Cookie 使用（符合Google广告投放规则）</h2>
                <p>
                  我们使用包括Google Ads在内的分析服务与广告提供商。第三方供应商（包含Google）会使用Cookie功能，根据用户先前对我们网站或互联网上其他网站的访问记录来精准投放广告。
                </p>
                <p>
                  对于Google及其合作伙伴提供基于Cookie的个性化推荐广告，用户如果并不希望参与，可以通过访问 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google 广告设置 (Ads Settings)</a> 来将其关闭。或者，您可以前往 <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">{/* [中文内容待填入] */} www.aboutads.info </a> 进行相关第三方广告Cookie设置。
                </p>

                <h2>5. 信息安全与披露</h2>
                <p>在以下特定情况下，我们可能会分享关于您的信息：</p>
                <ul>
                  <li><strong>合规及法律回应：</strong> 若我们认为信息披露对于响应法律诉讼、调查我们政策潜在违法行为或是保障他人财产安全性是必要的。</li>
                  <li><strong>第三方服务提供商：</strong> 我们会把信息与为本非营利机构提供服务支持的核心第三方机构共享。包含不仅限于：支付处理通道、安全数据服务器托管服务商以及我们的合法营销协助方。</li>
                </ul>

                <h2>6. 保护未成年人与儿童隐私 (COPPA 合规)</h2>
                <p>
                  鉴于我们的核心服务对象包含大量青少年和孩童群体，我们将儿童隐私权置于首位。依照美国的《儿童在线隐私保护法》(COPPA)，在没有获得可证实的法定监护人书面同意的情况下，我们决不会明知或主动收集13岁以下儿童的个人信息，也不会在未经充分同意之下对其进行市场营销活动。如果您作为家长或法定监护人，发现我们可能无意中违规收录了您孩子的资料，请即刻与我们联系进行删除。
                </p>

                <h2>7. 联系我们</h2>
                <p>如果您对本隐私政策有任何问题或建议，欢迎联系我们：</p>
                <p>{/* [中文内容待填入] */} Global Film Alliance, Inc. <br/>
                  17800 Castleton St, Suite 173<br/>
                  City of Industry, CA 91748<br/>
                  电子邮件: jacky@gfafilm.org<br/>
                  电话: 626-677-8017
                </p>
              </>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
