const fs = require('fs');
const path = require('path');

const dirsToScan = ['./pages', './components', '.'];

function replaceSpacing(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const classesToHalve = {
        '32': '16',
        '24': '12',
        '20': '10',
        '16': '8',
        '12': '6',
        '10': '5',
        '8': '4',
        '6': '3'
    };

    const prefixes = ['py', 'my', 'pt', 'pb', 'mt', 'mb', 'gap', 'space-y', 'space-x'];

    let modified = false;
    
    // Replace with word boundaries to ensure we match full class names
    for (const prefix of prefixes) {
        for (const [oldVal, newVal] of Object.entries(classesToHalve)) {
            const regex = new RegExp(`(?<=[\\s"'\\\`:])${prefix}-${oldVal}(?=[\\s"'\\\`])`, 'g');
            if (regex.test(content)) {
                content = content.replace(regex, `${prefix}-${newVal}`);
                modified = true;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated spacing in ${filePath}`);
    }
}

function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory() && !itemPath.includes('node_modules')) {
            scanDir(itemPath);
        } else if (stat.isFile() && itemPath.endsWith('.tsx') && !itemPath.includes('node_modules')) {
            replaceSpacing(itemPath);
        }
    }
}

for (const dir of dirsToScan) {
    scanDir(dir);
}

