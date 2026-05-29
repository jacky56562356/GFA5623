import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { 
  CreditCard, 
  Mail, 
  Handshake, 
  ShieldCheck, 
  FileText, 
  Check, 
  Lock,
  ChevronDown,
  Landmark
} from 'lucide-react';

const Donate: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  const [amount, setAmount] = useState<string>('250');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  const [donationInitiated, setDonationInitiated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDonateSubmit = async () => {
    const finalAmount = amount === 'custom' ? customAmount : amount;
    if (!finalAmount || isNaN(Number(finalAmount)) || Number(finalAmount) <= 0) {
      alert('Please select or enter a valid amount.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/create-donation-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: finalAmount,
          frequency,
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        if (result.error === "missing_stripe_key") {
          alert('Stripe Checkout Demo Mode: Success! (Add STRIPE_SECRET_KEY to environment variables to test real payments)');
          setDonationInitiated(true);
        } else {
          alert("Error: " + (result.message || "Failed to initialize payment."));
        }
      } else if (result.url) {
        window.location.href = result.url;
      }
    } catch (e) {
      console.error(e);
      alert("Network error, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const amounts = [
    {
      value: '25',
      enDesc: 'One day of camp for a youth filmmaker'
    },
    {
      value: '50',
      enDesc: 'One mentorship session for a film graduate'
    },
    {
      value: '100',
      enDesc: 'Equipment rental for one day of production'
    },
    {
      value: '250',
      enDesc: 'Full camp scholarship for a low-income youth'
    },
    {
      value: '500',
      enDesc: 'One month mentorship for an emerging director'
    },
    {
      value: '1000',
      enDesc: 'Name an annual scholarship in your honor'
    }
  ];

  return (
    <div className="font-sans">
      <div style={{ position: "absolute", left: "-9999px" }}>\n<h1>Donate to Global Film Alliance - Support Youth Film Education</h1>\n<p>Your donation to Global Film Alliance (GFA) supports youth film education, Hollywood professional training, and emerging filmmaker development. GFA is a U.S. 501(c)(3) nonprofit organization. All donations are tax-deductible.</p>\n<p>EIN: 33-4817276. Every dollar goes directly to supporting youth filmmakers, summer camp scholarships, equipment access, and film festival participation.</p>\n<p>Donation options: One-time donation or monthly recurring support. All major credit cards accepted. Donate securely at gfaalliance.org/donate.</p>\n<p>Contact: jacky@gfafilm.org, 626-677-8017. Global Film Alliance Inc., 17800 Castleton St, Suite 173, City of Industry, CA 91748.</p>\n</div>\n      <SEO title="Donate | Global Film Alliance" />

      {}
      <section className="bg-[#0D1B2A] text-white min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-3 md:pt-4 pb-5">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-[#C9A043]/10 border border-[#C9A043]/30 px-6 py-2 rounded-full mb-4">
            <span className="text-[#C9A043] font-bold text-xs uppercase tracking-widest">
              {"MAKE A DIFFERENCE"}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4">
             <>
 Your Gift Opens the Door <br/> for a Talented Filmmaker
</>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl font-light mb-3 max-w-2xl mx-auto leading-relaxed">
            {"Every dollar goes directly to helping film graduates break into the industry — and giving youth without resources a chance to discover their voice through film."}
          </p>
          
          <div className="flex flex-col gap-3 text-[#C9A043] justify-center items-center font-bold text-sm md:text-base tracking-wider">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5"/> {"100% Tax-Deductible"}
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5"/> EIN: 33-4817276 · 501(c)(3) Certified </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {}
      <section className="py-5 md:py-28 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0D1B2A] mb-3">
            {"Why Your Gift Matters"}
          </h2>
          
          <blockquote className="text-2xl md:text-3xl font-serif text-[#0D1B2A] leading-relaxed max-w-4xl mx-auto mb-4 italic">
            "{"Some filmmakers have the talent to change the industry — but without a camera, without a mentor who knows them, their stories are never told. Your donation is the force that changes that outcome."}"
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="bg-[#0D1B2A] rounded-2xl p-8 transform transition-transform hover:-translate-y-2">
               <div className="text-5xl font-bold font-serif text-[#C9A043] mb-4">17,000</div>
               <p className="text-white text-sm md:text-base font-light">
                 {"Film jobs lost in LA in 2 years"}
               </p>
            </div>
            <div className="bg-[#0D1B2A] rounded-2xl p-8 transform transition-transform hover:-translate-y-2">
               <div className="text-5xl font-bold font-serif text-[#C9A043] mb-4">3,300+</div>
               <p className="text-white text-sm md:text-base font-light">
                 {"CA film graduates entering market yearly"}
               </p>
            </div>
            <div className="bg-[#0D1B2A] rounded-2xl p-8 transform transition-transform hover:-translate-y-2">
               <div className="text-5xl font-bold font-serif text-[#C9A043] mb-4">12.5%</div>
               <p className="text-white text-sm md:text-base font-light">
                 {"Film industry unemployment rate"}
               </p>
            </div>
          </div>
          
          <p className="text-[#C9A043] font-bold text-xl uppercase tracking-widest mt-5">
            {"GFA is filling this gap"}
          </p>
        </div>
      </section>

      {}
      <section className="py-5 md:py-28 bg-[#F5F2EE]" id="donate-action">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="text-center mb-3">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0D1B2A] mb-4">
              {"Choose Your Gift Amount"}
            </h2>
            <p className="text-gray-500 text-lg">
              {"Every amount has a specific purpose"}
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-xl border border-gray-100">
            {}
            <div className="flex flex-col items-center mb-5">
              <div className="bg-gray-100 p-1 rounded-full inline-flex mb-4 relative">
                <button 
                  onClick={() => setFrequency('one-time')}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all z-10 ${frequency === 'one-time' ? 'bg-white text-[#0D1B2A] shadow-sm' : 'text-gray-500 hover:text-[#0D1B2A]'}`}
                >
                  {"One-Time"}
                </button>
                <button 
                  onClick={() => setFrequency('monthly')}
                  className={`px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all z-10 ${frequency === 'monthly' ? 'bg-[#0D1B2A] text-white shadow-sm' : 'text-gray-500 hover:text-[#0D1B2A]'}`}
                >
                  {"Monthly"}
                </button>
              </div>
              
              {frequency === 'monthly' && (
                <div className="text-center animate-fade-in">
                  <div className="inline-block bg-[#C9A043]/10 text-[#C9A043] font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-2 border border-[#C9A043]/20">
                    {"12x the Impact"}
                  </div>
                  <p className="text-gray-600 text-sm max-w-md">
                    {"Monthly giving allows GFA to provide consistent support, creating 12x the lasting impact."}
                  </p>
                </div>
              )}
            </div>

            {}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {amounts.map((item) => (
                <button
                  key={item.value}
                  onClick={() => { setAmount(item.value); setCustomAmount(''); }}
                  className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 ${
                    amount === item.value && customAmount === ''
                      ? 'bg-[#C9A043] border-[#C9A043] text-white shadow-lg transform -translate-y-1'
                      : 'bg-white border-gray-200 text-[#0D1B2A] hover:border-[#C9A043] hover:bg-[#C9A043]/5 hover:-translate-y-1'
                  }`}
                >
                  <div className="text-3xl font-bold font-serif mb-2">${item.value}</div>
                  <div className={`text-sm leading-relaxed ${amount === item.value && customAmount === '' ? 'text-white/90' : 'text-gray-500'}`}>
                    {item.enDesc}
                  </div>
                </button>
              ))}
            </div>

            {}
            <div className="mb-3">
              <label className="block text-sm font-bold text-[#0D1B2A] mb-2 pl-2">
                {"Other Amount"}
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder={"Enter your amount"}
                  value={customAmount}
                  onClick={() => setAmount('custom')}
                  onChange={(e) => {
                    setAmount('custom');
                    setCustomAmount(e.target.value);
                  }}
                  className="w-full pl-12 pr-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-xl font-bold text-[#0D1B2A] focus:outline-none focus:border-[#C9A043] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {}
            {donationInitiated ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold font-serif mb-2">Thank you for your generosity!</h3>
                <p className="text-sm mb-4">Our online payment gateway is currently undergoing an upgrade. Please send your tax-deductible donation via Check or Wire Transfer using the instructions below.</p>
                <a href="#ways-to-give" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('ways-to-give')?.scrollIntoView({ behavior: 'smooth' });
                }} className="inline-block bg-[#0D1B2A] text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider hover:bg-[#1a2d42] transition-colors">
                  View Payment Instructions
                </a>
              </div>
            ) : (
              <button 
                onClick={handleDonateSubmit}
                disabled={isSubmitting}
                className={`w-full bg-[#C9A043] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#b58f3c] hover:-translate-y-1 hover:shadow-xl'} text-white py-3 rounded-2xl font-bold text-lg md:text-xl transform transition-all shadow-lg flex flex-col items-center justify-center group`}
              >
                <span className="uppercase tracking-widest mb-1">
                  {isSubmitting ? 'Processing Stripe Gateway...' : `Donate Now · Secure Payment`}
                  {!isSubmitting && (amount !== 'custom' ? ` ($${amount})` : customAmount ? ` ($${customAmount})` : '')}
                </span>
              </button>
            )}
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3 text-xs text-gray-500 font-medium">
               <div className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#C9A043]"/> {"Secure & Encrypted"}</div>
               <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#C9A043]"/> {"You'll receive a tax receipt"}</div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-5 bg-white" id="ways-to-give">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0D1B2A] text-center mb-4">
            {"Ways to Give"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-100 rounded-3xl p-8 bg-gray-50">
               <div className="bg-[#0D1B2A] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-md">
                 <CreditCard className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">
                 {"Online"}
               </h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-4">
                 {"Accepts: Visa / Mastercard / American Express / Discover"}
               </p>
               <p className="text-gray-600 text-sm leading-relaxed mb-4"> PayPal / Venmo / Zelle </p>
               <p className="text-gray-600 text-sm leading-relaxed">
                 {"Secure encrypted payment, instant processing. Receipt within 24 hours."}
               </p>
            </div>

            <div className="border border-gray-100 rounded-3xl p-5 md:p-8 bg-gray-50 flex flex-col h-full">
               <div className="bg-[#0D1B2A] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-md shrink-0">
                 <Landmark className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-[#0D1B2A] mb-4 shrink-0">
                 {"Bank Transfer & Check"}
               </h3>
               <div className="text-gray-600 text-sm leading-relaxed flex-grow">
                 <p className="mb-2 font-bold">{"Bank Transfer:"}</p>
                 <div className="mb-4 bg-white px-3 py-2 border rounded-lg break-all">
                   <p className="font-semibold text-[#0D1B2A] mb-1">Bank of America</p>
                   <p>Account Name: Global Film Alliance Inc</p>
                   <p>Account: 325298651143</p>
                   <p>Routing: 026009593</p>
                 </div>
                 
                 <p className="mb-2 font-bold">{"Check Payable to:"}</p>
                 <p className="mb-4 bg-white px-3 py-2 border rounded-lg"> Global Film Alliance, Inc. </p>
                 
                 <p className="mb-2 font-bold">{"Mailing Address:"}</p>
                 <p className="mb-2 bg-white px-3 py-2 border rounded-lg whitespace-pre-wrap">
                   17800 Castleton St, Suite 173{"\n"}City of Industry, CA 91748
                 </p>
                 
                 <p className="italic text-xs mt-2">
                   {"Memo: Donation for [Program]"}
                 </p>
               </div>
            </div>

            <div className="border border-gray-100 rounded-3xl p-8 bg-gray-50">
               <div className="bg-[#0D1B2A] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-md">
                 <Handshake className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">
                 {"Corporate Matching"}
               </h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-3">
                 {"Many companies offer employee matching programs. Your donation could be doubled!"}
               </p>
               <div className="bg-white px-4 py-3 border rounded-xl mb-3">
                 <p className="text-xs text-gray-500 mb-1">{"Ask your HR:"}</p>
                 <p className="text-[#0D1B2A] font-medium text-sm italic">"Does our company match charitable donations?"</p>
               </div>
               <p className="text-gray-600 text-sm leading-relaxed">
                 {"For matching verification:"}<br/>
                 <a href="mailto:jacky@gfafilm.org" className="text-[#C9A043] font-bold hover:underline mt-1 inline-block"> jacky@gfafilm.org </a>
               </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-5 md:py-28 bg-[#0D1B2A] text-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              {"Corporate Partnership"}
            </h2>
            <p className="text-gray-400 text-lg">
              {"Connect your brand with the next generation of Hollywood talent."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            {}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:border-[#C9A043]/50 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-3"> Community Partner </div>
              <div className="text-4xl font-serif font-bold text-[#C9A043] mb-4 border-b border-white/10 pb-3">$1,000+</div>
              <ul className="space-y-4 mb-5 text-sm text-gray-300 font-light">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Website acknowledgment"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Social media shoutout (1x)"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Annual report listing"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Digital certificate"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Priority event invites"}</li>
              </ul>
              <button className="w-full border border-white hover:bg-white hover:text-[#0D1B2A] py-3 rounded-full font-bold text-sm tracking-wide transition-colors">
                {"Become Community Partner"}
              </button>
            </div>

            {}
            <div className="border-2 border-gray-400 rounded-3xl p-10 bg-white/10 transform md:scale-105 hover:border-gray-300 hover:-translate-y-2 transition-all duration-300 relative z-10 shadow-2xl">
              <div className="bg-gradient-to-r from-gray-300 to-gray-500 text-[#0D1B2A] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-3"> Silver Partner </div>
              <div className="text-5xl font-serif font-bold text-white mb-4 border-b border-white/20 pb-3">$5,000+</div>
              <ul className="space-y-4 mb-5 text-sm text-gray-200 font-light">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Logo on website"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Event brand integration"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Golden Feather Awards VIP seats (2)"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Social media shoutouts (3x)"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Annual report listing"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Digital certificate"}</li>
              </ul>
              <button className="w-full bg-gray-300 hover:bg-white text-[#0D1B2A] py-4 rounded-full font-bold text-sm tracking-wide transition-colors shadow-lg">
                {"Become Silver Partner"}
              </button>
            </div>

            {}
            <div className="border border-[#C9A043]/50 rounded-3xl p-8 bg-[#C9A043]/5 hover:border-[#C9A043] hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#C9A043] text-[#0D1B2A] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-3"> Gold Partner </div>
              <div className="text-4xl font-serif font-bold text-[#C9A043] mb-4 border-b border-[#C9A043]/20 pb-3">$10,000+</div>
              <ul className="space-y-4 mb-5 text-sm text-gray-300 font-light">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Premium logo placement"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"All events brand integration"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Golden Feather Awards VIP seats (4)"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Grand finale brand exposure"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Dedicated social feature"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Annual report cover acknowledgment"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Joint press release"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {"Exclusive content collabs"}</li>
              </ul>
              <button className="w-full bg-[#C9A043] hover:bg-[#b08e3d] text-[#0D1B2A] py-3 rounded-full font-bold text-sm tracking-wide transition-colors">
                {"Become Gold Partner"}
              </button>
            </div>
          </div>

          <div className="text-center text-gray-400 font-light text-sm bg-white/5 py-4 rounded-xl border border-white/10 max-w-2xl mx-auto">
             {"For custom partnership packages, please contact:"} <br className="md:hidden" />
             <a href="mailto:jacky@gfafilm.org" className="text-[#C9A043] font-bold mx-2"> jacky@gfafilm.org </a> | 
             <span className="text-white ml-2">626-677-8017</span>
          </div>
        </div>
      </section>

      {}
      <section className="py-5 bg-[#F5F2EE]">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-[#0D1B2A] mb-4">
              {"Tax Deductibility"}
            </h2>
            
            <div className="text-gray-600 font-light text-sm md:text-base max-w-2xl mx-auto space-y-3 mb-5 leading-relaxed">
              <p className="font-medium text-[#0D1B2A]">
                Global Film Alliance, Inc. is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent permitted by law. No goods or services were provided in exchange for this contribution. EIN: 33-4817276
              </p>
              
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-3">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-[#C9A043]" />
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">501(c)(3) Certified</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FileText className="w-8 h-8 text-[#C9A043]" />
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">EIN: 33-4817276</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-8 h-8 text-[#C9A043]" />
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider"> Receipt within 24 hours </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Lock className="w-8 h-8 text-[#C9A043]" />
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider"> Secure & Encrypted </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-5 md:py-28 bg-white overflow-hidden">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0D1B2A] mb-4">
              {"Thank You to Our Supporters"}
            </h2>
            <p className="text-gray-500 text-lg italic">
              {"Because of them, more doors are being opened."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="font-bold text-[#0D1B2A] text-lg mb-1"> Sarah M. </div>
                <div className="text-[#C9A043] font-bold mb-2">$500</div>
                <div className="text-xs text-gray-500 border-t pt-2 mt-2"> Monthly Donor </div>
             </div>
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="font-bold text-[#0D1B2A] text-lg mb-1"> The Chen Family </div>
                <div className="text-[#C9A043] font-bold mb-2">$1,000</div>
                <div className="text-xs text-gray-500 border-t pt-2 mt-2"> Gold Supporter </div>
             </div>
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="font-bold text-gray-400 text-lg mb-1 italic"> Anonymous </div>
                <div className="text-[#C9A043] font-bold mb-2">$250</div>
                <div className="text-xs text-gray-500 border-t pt-2 mt-2"> Youth Scholarship Fund </div>
             </div>
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="font-bold text-[#0D1B2A] text-lg mb-1"> David L. </div>
                <div className="text-[#C9A043] font-bold mb-2">$100</div>
                <div className="text-xs text-gray-500 border-t pt-2 mt-2"> Equipment Fund </div>
             </div>
          </div>

          <p className="text-center text-sm text-gray-400 font-light">
            {"Your information will remain completely confidential if you choose to donate anonymously. If you prefer, your name will be displayed here."}
          </p>
        </div>
      </section>

      {}
      <section className="py-3 bg-[#0D1B2A] text-center border-t border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <blockquote className="text-2xl md:text-4xl font-serif text-white leading-relaxed max-w-3xl mx-auto mb-3 italic">
            "{"A talented filmmaker shouldn't have to give up because they can't afford the gear."}"
          </blockquote>

          <button 
            onClick={() => {
              const el = document.getElementById('donate-action');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full md:w-auto px-12 py-5 bg-[#C9A043] hover:bg-[#b08e3d] text-white rounded-full font-bold uppercase tracking-widest text-sm md:text-base transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-lg mb-3"
          >
            {"Donate Now · Change Someone's Story"}
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-light text-gray-400 tracking-wider uppercase">
             <span>100% Tax-Deductible</span>
             <span className="hidden sm:inline">•</span>
             <span>EIN: 33-4817276</span>
             <span className="hidden sm:inline">•</span>
             <span> Secure Payment </span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Donate;

