const fs = require('fs');
let code = fs.readFileSync('pages/ShortDrama.tsx', 'utf8');

code = code.replace(/const itemsList = \[\];/, 'const itemsList: any[] = [];');
code = code.replace(/const catalogItem = allCatalogs\.find\(i => i\.id === id\);/, 'const catalogItem: any = allCatalogs.find((i: any) => i.id === id);');
code = code.replace(/catch \(e\)/, 'catch (e: any)');

fs.writeFileSync('pages/ShortDrama.tsx', code);

let serverCode = fs.readFileSync('server.ts', 'utf8');
serverCode = serverCode.replace("let stripeClient: Stripe | null = null;", "let stripeClient: any = null;");
serverCode = serverCode.replace("function getStripe(): Stripe {", "function getStripe(): any {");
fs.writeFileSync('server.ts', serverCode);
