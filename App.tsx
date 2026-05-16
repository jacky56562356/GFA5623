
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { LocaleProvider } from './LocaleContext';
import { AuthProvider } from './lib/AuthContext';
import Layout from './components/Layout';

// Pages
import About from './pages/About'
const Home = React.lazy(() => import('./pages/Home'));
const FilmmakerSupport = React.lazy(() => import('./pages/FilmmakerSupport'));
const YouthPrograms = React.lazy(() => import('./pages/YouthPrograms'));
const FamilyGuide = React.lazy(() => import('./pages/FamilyGuide'));
const Awards = React.lazy(() => import('./pages/Awards'));
const AwardSubmission = React.lazy(() => import('./pages/AwardSubmission'));
const ShortDrama = React.lazy(() => import('./pages/ShortDrama'));
const Competition = React.lazy(() => import('./pages/Competition'));
const GetInvolved = React.lazy(() => import('./pages/GetInvolved'));
const Donate = React.lazy(() => import('./pages/Donate'));
const Contact = React.lazy(() => import('./pages/Contact'));
const YouthProtection = React.lazy(() => import('./pages/YouthProtection'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Profile = React.lazy(() => import('./pages/Profile'));
const GearApplication = React.lazy(() => import('./pages/GearApplication'));
const GearDonation = React.lazy(() => import('./pages/GearDonation'));
const MentorshipApplication = React.lazy(() => import('./pages/MentorshipApplication'));
const Mentors = React.lazy(() => import('./pages/Mentors'));
const BecomeMentorApplication = React.lazy(() => import('./pages/BecomeMentorApplication'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

// Policy Pages
const PolicyPage = React.lazy(() => import('./pages/PolicyPage'));

function App() {
  return (
    <LocaleProvider>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gfa-diamond"></div></div>}>
              <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/filmmaker-support" element={<FilmmakerSupport />} />
            <Route path="/youth-programs" element={<YouthPrograms />} />
            <Route path="/family-guide" element={<FamilyGuide />} />
            <Route path="/golden-feather-awards" element={<Awards />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/award-submission" element={<AwardSubmission />} />
            <Route path="/short-drama" element={<ShortDrama />} />
            <Route path="/competition" element={<Competition />} />
                                    <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/youth-protection" element={<YouthProtection />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/gear-application" element={<GearApplication />} />
            <Route path="/gear-donation" element={<GearDonation />} />
            <Route path="/mentorship-application" element={<MentorshipApplication />} />
            <Route path="/become-mentor" element={<BecomeMentorApplication />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* Policy Routes */}
            <Route path="/policy/privacy" element={<PrivacyPolicy />} />
            <Route path="/policy/terms" element={<PolicyPage type="terms" />} />
            <Route path="/policy/consent" element={<PolicyPage type="consent" />} />
            <Route path="/policy/content" element={<PolicyPage type="content" />} />
          </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </LocaleProvider>
  );
}

export default App;
