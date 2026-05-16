import React, { useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setAuthModalOpen, signInWithGoogle, signInWithEmail, signUpWithEmail, resetPassword } = useAuth();
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

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
          setError(isEn ? 'No user found with this email.' : '未找到与此邮箱关联的账号。');
        } else {
          setError(isEn ? 'Failed to send reset email. Please try again later.' : '发送重置邮件失败，请稍后再试。');
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
          setError(isEn ? 'Please accept the terms and conditions.' : '请同意服务条款。');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError(isEn ? 'Passwords do not match.' : '两次输入的密码不一致。');
          setLoading(false);
          return;
        }
        await signUpWithEmail(email, password, name, phone);
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
              {isResetPassword ? (isEn ? 'Reset Password' : '重置密码') : (isLogin ? (isEn ? 'Welcome Back' : '欢迎回来') : (isEn ? 'Create Account' : '创建账号'))}
            </h2>
            <p className="text-sm text-gfa-slate font-light">
              {isResetPassword
                ? (isEn ? 'Enter your email to receive a password reset link.' : '请输入您的邮箱，我们将发送重置密码链接给您。')
                : (isLogin 
                  ? (isEn ? 'Sign in to access your dashboard and applications.' : '登录以查看您的主页和申请进度。')
                  : (isEn ? 'Join GFA to apply for programs and support.' : '加入全球电影联盟，申请项目与扶持。'))}
            </p>
          </div>

          {isResetPassword && resetSent ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? 'Email Sent!' : '邮件已发送！'}</h3>
              <p className="text-sm text-gfa-slate font-light mb-6">
                {isEn ? 'Check your inbox for a link to reset your password.' : '请查收您的邮箱，点击链接重置密码。'}
              </p>
              <button
                onClick={() => {
                  setIsResetPassword(false);
                  setIsLogin(true);
                  setResetSent(false);
                }}
                className="w-full bg-gfa-inkBlack text-white py-3 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-gfa-gold transition-colors"
              >
                {isEn ? 'Return to Login' : '返回登录'}
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
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate mb-1">
                    {isEn ? 'Phone Number' : '电话号码'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#C9A84C]"
                    placeholder={isEn ? "Your Phone Number" : "您的电话号码"}
                  />
                </div>
              </>
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

            {!isResetPassword && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gfa-slate">
                    {isEn ? 'Password' : '密码'}
                  </label>
                  {isLogin && (
                    <button type="button" onClick={() => setIsResetPassword(true)} className="text-xs text-[#C9A84C] hover:underline">
                      {isEn ? 'Forgot?' : '忘记密码？'}
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
                  {isEn ? 'Confirm Password' : '确认密码'}
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
                : (isResetPassword ? (isEn ? 'Reset Password' : '重置密码') : (isLogin ? (isEn ? 'Sign In' : '登录') : (isEn ? 'Sign Up' : '注册')))}
            </button>
          </form>

          {!isResetPassword ? (
            <>
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
            </>
          ) : null}

          <div className="mt-4 text-center text-sm text-gfa-slate">
            {isResetPassword ? (
              <p>
                <button onClick={() => { setIsResetPassword(false); setIsLogin(true); }} className="text-[#C9A84C] font-bold hover:underline">
                  {isEn ? 'Back to Login' : '返回登录'}
                </button>
              </p>
            ) : isLogin ? (
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};
