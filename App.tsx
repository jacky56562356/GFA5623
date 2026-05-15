
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from './LocaleContext';
import { AuthProvider } from './lib/AuthContext';
import Layout from './components/Layout';

// Lazy load Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const FilmmakerSupport = lazy(() => import('./pages/FilmmakerSupport'));
const YouthPrograms = lazy(() => import('./pages/YouthPrograms'));
const FamilyGuide = lazy(() => import('./pages/FamilyGuide'));
const Awards = lazy(() => import('./pages/Awards'));
const AwardSubmission = lazy(() => import('./pages/AwardSubmission'));
const ShortDrama = lazy(() => import('./pages/ShortDrama'));
const Competition = lazy(() => import('./pages/Competition'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const Donate = lazy(() => import('./pages/Donate'));
const Contact = lazy(() => import('./pages/Contact'));
const YouthProtection = lazy(() => import('./pages/YouthProtection'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Profile = lazy(() => import('./pages/Profile'));
const GearApplication = lazy(() => import('./pages/GearApplication'));
const GearDonation = lazy(() => import('./pages/GearDonation'));
const MentorshipApplication = lazy(() => import('./pages/MentorshipApplication'));
const Mentors = lazy(() => import('./pages/Mentors'));
const BecomeMentorApplication = lazy(() => import('./pages/BecomeMentorApplication'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// Policy Pages
const PolicyPage = lazy(() => import('./pages/PolicyPage'));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-gfa-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <LocaleProvider>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/filmmaker-support" element={<FilmmakerSupport />} />
                <Route path="/youth-programs" element={<YouthPrograms />} />
                <Route path="/family-guide" element={<FamilyGuide />} />
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
