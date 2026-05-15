const fs = require('fs');
const path = require('path');

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Regex to find all empty or hash links
      // e.g. href="#" or to="" or to='#'
      content = content.replace(/<(a|Link)([^>]*?)(href|to)=["'](#|)["']([^>]*)>(.*?)<\/(a|Link)>/gs, (match, tag, before, attr, val, after, innerText, closeTag) => {
        let lText = innerText.toLowerCase();
        let target = '';

        if (lText.includes('learn more') || lText.includes('了解更多') || lText.includes('discover')) {
          target = '/about';
        } else if (lText.includes('register') || lText.includes('sign up') || lText.includes('apply') || lText.includes('报名') || lText.includes('申请') || lText.includes('submit')) {
          target = 'mailto:jacky@gfafilm.org';
          if (lText.includes('camp') || lText.includes('夏令营')) target = '/youth-programs';
        } else if (lText.includes('contact') || lText.includes('联系')) {
          target = '/contact';
        } else if (lText.includes('donate') || lText.includes('捐款') || lText.includes('support')) {
          target = '/donate';
        } else if (lText.includes('jacky@')) {
           target = 'mailto:jacky@gfafilm.org';
        }

        if (target) {
            modified = true;
            return `<${tag}${before}${attr}="${target}"${after}>${innerText}</${closeTag}>`;
        }

        modified = true;
        return `<${tag}${before}${attr}="mailto:jacky@gfafilm.org"${after}>${innerText}</${closeTag}>`;
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed links in:', fullPath);
      }
    }
  }
}

processDir('pages');
processDir('components');
processDir('src/components');
console.log('Link fixing complete.');
