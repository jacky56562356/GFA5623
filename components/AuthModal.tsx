import React, { useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setAuthModalOpen, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (isAuthModalOpen) {
      setIsLogin(true);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setName('');
      setAcceptedTerms(false);
      setError(null);
      setLoading(false);
    }
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmail(email, password);
      } else {
        if (!acceptedTerms) {
          setError(isEn ? 'Please accept the terms and conditions.' : '请同意服务条款。');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError(isEn ? 'Passwords do not match.' : '两次输入的密码不一致。');
          setLoading(false);
          return;
        }
        await signUpWithEmail(email, password, name);
      }
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError(isEn ? 'Email already in use.' : '该邮箱已被注册。');
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-login-credentials') {
         setError(isEn ? 'Invalid email or password.' : '邮箱或密码错误。');
      } else if (err.code === 'auth/weak-password') {
         setError(isEn ? 'Password should be at least 6 characters.' : '密码至少需要6个字符。');
      } else {
         setError(isEn ? 'An error occurred. Please configure Email/Password in Firebase Console.' : '发生错误，如果是刚配置，请确保Firebase中已开启Email/Password验证。');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(isEn ? 'Google sign in failed.' : 'Google登录失败。');
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
              {isLogin ? (isEn ? 'Welcome Back' : '欢迎回来') : (isEn ? 'Create Account' : '创建账号')}
            </h2>
            <p className="text-sm text-gfa-slate font-light">
              {isLogin 
                ? (isEn ? 'Sign in to access your dashboard and applications.' : '登录以查看您的主页和申请进度。')
                : (isEn ? 'Join GFA to apply for programs and support.' : '加入全球电影联盟，申请项目与扶持。')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                {error}
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                  {isEn ? 'Name' : '姓名'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C]"
                  placeholder={isEn ? "Your Full Name" : "您的全名"}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                {isEn ? 'Email' : '邮箱'}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C]"
                placeholder={isEn ? "your@email.com" : "您的邮箱地址"}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                {isEn ? 'Password' : '密码'}
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C]"
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                  {isEn ? 'Confirm Password' : '确认密码'}
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C]"
                  placeholder="••••••••"
                />
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start gap-2 mt-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#C9A84C] bg-white border-gfa-border rounded focus:ring-[#C9A84C]"
                />
                <label htmlFor="terms" className="text-xs text-gfa-slate leading-tight">
                  {isEn ? (
                    <>I agree to the <a href="/policy" className="text-[#C9A84C] hover:underline" target="_blank">Terms of Service</a> and <a href="/privacy" className="text-[#C9A84C] hover:underline" target="_blank">Privacy Policy</a>.</>
                  ) : (
                    <>我同意 <a href="/policy" className="text-[#C9A84C] hover:underline" target="_blank">服务条款</a> 和 <a href="/privacy" className="text-[#C9A84C] hover:underline" target="_blank">隐私政策</a>。</>
                  )}
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gfa-inkBlack text-white py-3 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-gfa-gold transition-colors mt-2 disabled:opacity-50"
            >
              {loading 
                ? (isEn ? 'Processing...' : '处理中...') 
                : (isLogin ? (isEn ? 'Sign In' : '登录') : (isEn ? 'Sign Up' : '注册'))}
            </button>
          </form>

          <div className="mt-3 flex items-center justify-between">
            <span className="w-1/5 border-b border-gfa-border"></span>
            <span className="text-xs text-gfa-slate uppercase tracking-widest">{isEn ? 'Or continue with' : '或其他方式登录'}</span>
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
            {isEn ? 'Google' : '谷歌账号'}
          </button>

          <div className="mt-4 text-center text-sm text-gfa-slate">
            {isLogin ? (
              <p>
                {isEn ? "Don't have an account? " : "还没有账号？"}
                <button onClick={() => setIsLogin(false)} className="text-[#C9A84C] font-bold hover:underline">
                  {isEn ? 'Sign Up' : '立即注册'}
                </button>
              </p>
            ) : (
              <p>
                {isEn ? "Already have an account? " : "已经有账号？"}
                <button onClick={() => setIsLogin(true)} className="text-[#C9A84C] font-bold hover:underline">
                  {isEn ? 'Sign In' : '立即登录'}
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
