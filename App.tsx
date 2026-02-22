
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from './LocaleContext';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Certification from './pages/Certification';
import Safeguarding from './pages/Safeguarding';
import Registry from './pages/Registry';
import GraduateSupport from './pages/GraduateSupport';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Complaints from './pages/Complaints';
import Events from './pages/Events';
import Governance from './pages/Governance';
import MemberPortal from './pages/MemberPortal';
import Partners from './pages/Partners';
import PolicyPage from './pages/PolicyPage';
import Reporting from './pages/Reporting';
import Standards from './pages/Standards';
import Transparency from './pages/Transparency';
import Verify from './pages/Verify';
import YouthSafetyPolicy from './pages/YouthSafetyPolicy';

function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/safeguarding" element={<Safeguarding />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/career-access" element={<GraduateSupport />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/events" element={<Events />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/login" element={<MemberPortal />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/standards" element={<Standards />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/youth-safety-policy" element={<YouthSafetyPolicy />} />
            
            {/* Policy Routes */}
            <Route path="/policy/privacy" element={<PolicyPage type="privacy" />} />
            <Route path="/policy/terms" element={<PolicyPage type="terms" />} />
            <Route path="/policy/consent" element={<PolicyPage type="consent" />} />
            <Route path="/policy/content" element={<PolicyPage type="content" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default App;
