const fs = require('fs');

let appCode = fs.readFileSync('App.tsx', 'utf8');

// replace imports with React.lazy
const imports = [
  'Home', 'About', 'FilmmakerSupport', 'YouthPrograms', 'FamilyGuide', 
  'Awards', 'AwardSubmission', 'ShortDrama', 'Competition', 'GetInvolved', 
  'Donate', 'Contact', 'YouthProtection', 'PrivacyPolicy', 'Profile', 
  'GearApplication', 'GearDonation', 'MentorshipApplication', 'Mentors', 
  'BecomeMentorApplication', 'AdminDashboard', 'PolicyPage'
];

imports.forEach(name => {
  const regex = new RegExp(`import ${name} from '\\.\\/pages\\/${name}';`, 'g');
  appCode = appCode.replace(regex, `const ${name} = React.lazy(() => import('./pages/${name}'));`);
});

// Update standard react-router imports
appCode = appCode.replace(
  "import { BrowserRouter, Routes, Route } from 'react-router-dom';",
  "import { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport { Suspense } from 'react';"
);

// Add Suspense around Routes
appCode = appCode.replace(
  "<Routes>",
  "<Suspense fallback={<div className=\"flex h-screen items-center justify-center\"><div className=\"animate-spin rounded-full h-12 w-12 border-b-2 border-gfa-diamond\"></div></div>}>\n              <Routes>"
);

appCode = appCode.replace(
  "</Routes>",
  "</Routes>\n            </Suspense>"
);

fs.writeFileSync('App.tsx', appCode);
console.log("App.tsx updated with React.lazy");
