
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from './LocaleContext';
import { AuthProvider } from './lib/AuthContext';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import FilmmakerSupport from './pages/FilmmakerSupport';
import YouthPrograms from './pages/YouthPrograms';
import FamilyGuide from './pages/FamilyGuide';
import Awards from './pages/Awards';
import AwardSubmission from './pages/AwardSubmission';
import ShortDrama from './pages/ShortDrama';
import Competition from './pages/Competition';
import Impact from './pages/Impact';
import News from './pages/News';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import YouthProtection from './pages/YouthProtection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Profile from './pages/Profile';
import GearApplication from './pages/GearApplication';
import GearDonation from './pages/GearDonation';
import MentorshipApplication from './pages/MentorshipApplication';
import Mentors from './pages/Mentors';
import BecomeMentorApplication from './pages/BecomeMentorApplication';
import AdminDashboard from './pages/AdminDashboard';

// Policy Pages
import PolicyPage from './pages/PolicyPage';

function App() {
  return (
    <LocaleProvider>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
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
            <Route path="/impact" element={<Impact />} />
            <Route path="/news" element={<News />} />
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
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </LocaleProvider>
  );
}

export default App;
