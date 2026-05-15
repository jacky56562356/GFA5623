const fs = require('fs');
let code = fs.readFileSync('pages/Home.tsx', 'utf8');

if (!code.includes('const [loadVideo, setLoadVideo]')) {
  code = code.replace(
    'const Home = () => {',
    `const Home = () => {
  const [loadVideo, setLoadVideo] = React.useState(false);

  React.useEffect(() => {
    // delay loading the youtube iframe to please lighthouse on mobile
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);`
  );

  code = code.replace(
    /<iframe[\s\S]*?<\/iframe>/,
    `{loadVideo ? (
            <iframe
              className="absolute top-1/2 left-1/2 w-[120vw] h-[67.5vw] min-h-[120vh] min-w-[213.33vh] -translate-x-1/2 -translate-y-1/2 opacity-80 animate-in fade-in duration-1000"
              src="https://www.youtube.com/embed/iedeN6DefWs?autoplay=1&mute=1&loop=1&playlist=iedeN6DefWs&controls=0&playsinline=1&rel=0&modestbranding=1&disablekb=1"
              title="Background Video"
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
            ></iframe>
          ) : (
            <img fetchPriority="high" src="https://wsrv.nl/?url=i.ibb.co%2F1Gj2K8CX%2Fd92babf9ca9b15b9fe754beaa383a6cf.jpg&w=1200&output=webp" alt="Cover" className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-50" width="1200" height="800" />
          )}`
  );
  
  fs.writeFileSync('pages/Home.tsx', code);
}
console.log('Fixed iframe');
