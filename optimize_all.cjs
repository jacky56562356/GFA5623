const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let code = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;

      // Wrap Unsplash images
      const unsplashRegex = /src="https:\/\/images\.unsplash\.com\/([^"]+)"/g;
      code = code.replace(unsplashRegex, (match, p1) => {
        modified = true;
        // keep query params but add to wsrv
        // unsplash format: photo-xxxx?q=80&w=2670...
        // let's just rewrite to wsrv.nl
        // Wait, wsrv.nl takes url without protocol
        const fullUrl = encodeURIComponent(`images.unsplash.com/${p1}`);
        return `src="https://wsrv.nl/?url=${fullUrl}&w=1200&output=webp"`;
      });

      // Wrap imgbb (i.ibb.co)
      const ibbRegex = /src="https:\/\/i\.ibb\.co\/([^"]+)"/g;
      code = code.replace(ibbRegex, (match, p1) => {
        modified = true;
        const fullUrl = encodeURIComponent(`i.ibb.co/${p1}`);
        return `src="https://wsrv.nl/?url=${fullUrl}&w=1200&output=webp"`;
      });

      // Eager load first image (usually hero) to improve LCP
      let firstImgEagerSet = false;
      code = code.replace(/<img(.*?)loading="lazy"(.*?)>/g, (match, p1, p2) => {
         if (!firstImgEagerSet) {
             firstImgEagerSet = true;
             // Remove lazy loading and add fetchpriority
             let newImg = `<img${p1}${p2}>`.replace(/ +>/, '>'); // cleanup
             if (!newImg.includes('fetchpriority')) {
                 newImg = newImg.replace('<img ', '<img fetchpriority="high" ');
             }
             return newImg;
         }
         return match;
      });
      // also if first image didn't have lazy, still add fetchpriority
      if (!firstImgEagerSet) {
         code = code.replace(/<img (?!.*fetchpriority)(.*?)>/, (match) => {
              firstImgEagerSet = true;
              return match.replace('<img ', '<img fetchpriority="high" ');
         });
      }

      if (modified || firstImgEagerSet) {
        fs.writeFileSync(fullPath, code);
      }
    }
  }
}

processDir('pages');
processDir('components');
console.log('Optimized all images');
