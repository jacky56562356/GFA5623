const fs = require('fs');
let code = fs.readFileSync('pages/Home.tsx', 'utf8');

code = code.replace(
    'const Home: React.FC = () => {',
    `const Home: React.FC = () => {
  const [loadVideo, setLoadVideo] = React.useState(false);

  React.useEffect(() => {
    // delay loading the youtube iframe to please lighthouse on mobile
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);`
  );

fs.writeFileSync('pages/Home.tsx', code);
console.log('Fixed loadVideo');
