
import React from 'react';
import { useLocale } from '../App';

interface Props {
  type: 'privacy' | 'terms' | 'consent' | 'content';
}

const PolicyPage: React.FC<Props> = ({ type }) => {
  const { t } = useLocale();
  
  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      content: `GFA Global Film Alliance ("we", "us", or "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard data.
      1. Information Collection: We collect professional credentials, contact details, and project data necessary for certification and support.
      2. Data Usage: Information is used to maintain our verified database, facilitate casting, and deliver member benefits.
      3. Minors: We implement strict guardian-controlled workflows for any data involving individuals under 18.
      4. Cookies: We use technical cookies to maintain sessions and language preferences.`
    },
    terms: {
      title: 'Terms of Service',
      content: `By accessing the GFA platform, you agree to these terms.
      1. Account Responsibility: You are responsible for the accuracy of your certification data.
      2. Prohibited Conduct: Fraudulent credentials or misuse of the casting network will result in immediate suspension.
      3. Intellectual Property: GFA seals and certificates are protected marks.
      4. Disclaimers: GFA provides verification tools but is not liable for outcomes of private production contracts.`
    },
    consent: {
      title: 'Parental Consent & Media Release',
      content: `Safety and protection for minors is a GFA core pillar.
      1. Mandatory Consent: No minor may be listed or certified without verified legal guardian consent.
      2. Media Rights: This release covers the usage of audition tapes and likeness for internal GFA verification and authorized casting directors.
      3. Withdrawal: Consent can be withdrawn at any time via written request, leading to profile deactivation.`
    },
    content: {
      title: 'Content Policy',
      content: `The GFA community is built on professionalism and respect.
      1. Prohibited Material: Content that is discriminatory, sexually explicit, or promotes unauthorized violence is strictly forbidden.
      2. Reporting: Users can report content for review by the GFA Compliance Team.
      3. Enforcement: Violations may result in public certificate revocation and permanent ban.`
    }
  };

  const { title, content } = contentMap[type];

  return (
    <div className="py-32 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-black mb-12 gold-gradient uppercase tracking-tight">{title}</h1>
      <div className="bg-gfa-darkGray p-8 md:p-16 border border-white/5 shadow-xl">
        <div className="text-gfa-gray leading-loose whitespace-pre-line text-sm md:text-base">
          {content}
          <br /><br />
          Last Updated: May 2024
          <br />
          Official Communication: legal@gfa-alliance.org
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
