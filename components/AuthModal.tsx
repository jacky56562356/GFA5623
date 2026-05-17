import React, { useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setAuthModalOpen, signInWithGoogle, signInWithEmail, signUpWithEmail, resetPassword } = useAuth();
  const { locale } = useLocale();
  const isEn = true;

  const [isLogin, setIsLogin] = useState(true);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  React.useEffect(() => {
    if (isAuthModalOpen) {
      setIsLogin(true);
      setIsResetPassword(false);
      setResetSent(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setName('');
      setPhone('');
      setAcceptedTerms(false);
      setError(null);
      setLoading(false);
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (isResetPassword) {
      try {
        await resetPassword(email);
        setResetSent(true);
      } catch (err: any) {
        if (err.code === 'auth/user-not-found') {
          setError('No user found with this email.');
        } else {
          setError('Failed to send reset email. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmail(email, password);
      } else {
        if (!acceptedTerms) {
          setError('Please accept the terms and conditions.');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError('Passwords do not match.');
          setLoading(false);
          return;
        }
        await signUpWithEmail(email, password, name, phone);
      }
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Email already in use.');
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-login-credentials') {
         setError('Invalid email or password.');
      } else if (err.code === 'auth/weak-password') {
         setError('Password should be at least 6 characters.');
      } else {
         setError('An error occurred. Please configure Email/Password in Firebase Console.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError('Google sign in failed.');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={() => setAuthModalOpen(false)}
    >
      <div 
        className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">
              {isResetPassword ? ('Reset Password') : (isLogin ? ('Welcome Back') : ('Create Account'))}
            </h2>
            <p className="text-sm text-gfa-slate font-light">
              {isResetPassword
                ? ('Enter your email to receive a password reset link.')
                : (isLogin 
                  ? ('Sign in to access your dashboard and applications.')
                  : ('Join GFA to apply for programs and support.'))}
            </p>
          </div>

          {isResetPassword && resetSent ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-2">{'Email Sent!'}</h3>
              <p className="text-sm text-gfa-slate font-light mb-6">
                {'Check your inbox for a link to reset your password.'}
              </p>
              <button
                onClick={() => {
                  setIsResetPassword(false);
                  setIsLogin(true);
                  setResetSent(false);
                }}
                className="w-full bg-gfa-inkBlack text-white py-3 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-gfa-gold transition-colors"
              >
                {'Return to Login'}
              </button>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    {error}
                  </div>
                )}

            {!isLogin && (
              <>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                    {'Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C]"
                    placeholder={"Your Full Name"}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                    {'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C]"
                    placeholder={"Your Phone Number"}
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                {'Email'}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C]"
                placeholder={"your@email.com"}
              />
            </div>

            {!isResetPassword && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate">
                    {'Password'}
                  </label>
                  {isLogin && (
                    <button type="button" onClick={() => setIsResetPassword(true)} className="text-xs text-[#C9A84C] hover:underline">
                      {'Forgot?'}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C] pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 015.458-5.922m1.116-1.116m-.07-2.316A10.05 10.05 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.05 10.05 0 01-4.088 5.617M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>
                    )}
                  </button>
                </div>
              </div>
            )}

            {!isLogin && !isResetPassword && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                  {'Confirm Password'}
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C] pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 015.458-5.922m1.116-1.116m-.07-2.316A10.05 10.05 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.05 10.05 0 01-4.088 5.617M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>
                    )}
                  </button>
                </div>
              </div>
            )}

            {!isLogin && !isResetPassword && (
              <div className="flex items-start gap-2 mt-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#C9A84C] bg-white border-gfa-border rounded focus:ring-[#C9A84C]"
                />
                <label htmlFor="terms" className="text-xs text-gfa-slate leading-tight">
                  <>
I agree to the <a href="/policy" className="text-[#C9A84C] hover:underline" target="_blank">Terms of Service</a> and <a href="/privacy" className="text-[#C9A84C] hover:underline" target="_blank">Privacy Policy</a>.
</>
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gfa-inkBlack text-white py-3 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-gfa-gold transition-colors mt-2 disabled:opacity-50"
            >
              {loading 
                ? ('Processing...') 
                : (isResetPassword ? ('Reset Password') : (isLogin ? ('Sign In') : ('Sign Up')))}
            </button>
          </form>

          {!isResetPassword ? (
            <>
              <div className="mt-3 flex items-center justify-between">
                <span className="w-1/5 border-b border-gfa-border"></span>
                <span className="text-xs text-gfa-slate uppercase tracking-widest">{'Or continue with'}</span>
                <span className="w-1/5 border-b border-gfa-border"></span>
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="w-full mt-3 bg-white border border-gfa-border text-gfa-inkBlack py-3 rounded-lg font-bold text-sm hover:bg-gfa-warmWhite transition-colors flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                {'Google'}
              </button>
            </>
          ) : null}

          <div className="mt-4 text-center text-sm text-gfa-slate">
            {isResetPassword ? (
              <p>
                <button onClick={() => { setIsResetPassword(false); setIsLogin(true); }} className="text-[#C9A84C] font-bold hover:underline">
                  {'Back to Login'}
                </button>
              </p>
            ) : isLogin ? (
              <p>
                {"Don't have an account? "}
                <button onClick={() => setIsLogin(false)} className="text-[#C9A84C] font-bold hover:underline">
                  {'Sign Up'}
                </button>
              </p>
            ) : (
              <p>
                {"Already have an account? "}
                <button onClick={() => setIsLogin(true)} className="text-[#C9A84C] font-bold hover:underline">
                  {'Sign In'}
                </button>
              </p>
            )}
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
