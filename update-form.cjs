const fs = require('fs');
let code = fs.readFileSync('pages/ShortDrama.tsx', 'utf8');

const replacement = `<form 
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          
          setIsSubmitting(true);
          try {
             const itemsList = [];
             Object.entries(cart).forEach(([id, count]) => {
                if (count > 0) {
                   const allCatalogs = [...ITEM_CATALOG.submission, ...ITEM_CATALOG.student, ...ITEM_CATALOG.booths, ...ITEM_CATALOG.ads_web, ...ITEM_CATALOG.ads_onsite, ...ITEM_CATALOG.ads_book, ...ITEM_CATALOG.posters, ...ITEM_CATALOG.pitch, ...ITEM_CATALOG.packages];
                   const catalogItem = allCatalogs.find(i => i.id === id);
                   if (catalogItem) {
                      let finalPrice = catalogItem.price;
                      if (ITEM_CATALOG.submission.find(i=>i.id===id) || ITEM_CATALOG.student.find(i=>i.id===id)) {
                         const studentAdjustment = ITEM_CATALOG.student.find(i=>i.id===id) ? -100 : 0;
                         if (deadline === 'early') finalPrice = 199 + studentAdjustment;
                         if (deadline === 'regular') finalPrice = 299 + studentAdjustment;
                         if (deadline === 'late') finalPrice = 399 + studentAdjustment;
                      }
                      
                      itemsList.push({
                         name: isEn ? catalogItem.nameEn : catalogItem.nameZh,
                         qty: count,
                         price: finalPrice
                      });
                   }
                }
             });

             const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                   items: itemsList,
                   customerDetails: {
                      email: data['Email'] || '',
                      filmTitle: data['Film Title (En)'] || data['Film Title (Zh)'] || 'Short Drama Entry',
                      director: data['Director Name'] || '',
                      company: data['Company/Brand Name'] || '',
                   }
                })
             });
             
             const result = await response.json();
             if (result.url) {
                window.location.href = result.url;
             } else if (result.error === "missing_stripe_key") {
                alert(isEn ? 'Stripe Checkout Demo Mode: Success! (Add STRIPE_SECRET_KEY to test payments)' : '演示模式：提交成功！（注：尚未配置真实支付密钥，故跳过支付环节）');
                setCart({});
             } else {
                throw new Error(result.message || 'Error redirecting to checkout');
             }
          } catch (e) {
             console.error(e);
             alert(e.message || "Failed to go to checkout");
          } finally {
             setIsSubmitting(false);
          }
        }}
        className="container-gfa max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-6 relative" id="registration-form">`;

code = code.replace(/<form\s*onSubmit=\{\(e\) => \{[\s\S]*?id=\"registration-form\">/, replacement);

code = code.replace("const [cart, setCart] = useState<Record<string, number>>({});", "const [cart, setCart] = useState<Record<string, number>>({});\n  const [isSubmitting, setIsSubmitting] = useState(false);");

// Update button text and state
code = code.replace("{isEn ? 'Submit Registration' : '确认并提交报名'}", "{isSubmitting ? (isEn ? 'Processing...' : '处理中...') : (isEn ? 'Submit & Pay via Stripe' : '确认提交并去 Stripe 线上付款')}");
code = code.replace("disabled={currentTotal === 0}", "disabled={currentTotal === 0 || isSubmitting}");

fs.writeFileSync('pages/ShortDrama.tsx', code);
