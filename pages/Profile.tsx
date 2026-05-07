import React, { useEffect, useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { db } from '../lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/errorHandlers';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';
import SEO from '../components/SEO';

const Profile: React.FC = () => {
  const { user, loading: authLoading, setAuthModalOpen } = useAuth();
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<{ name: string; bio: string }>({ name: '', bio: '' });
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', bio: '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setProfile({ name: data.name || '', bio: data.bio || '' });
          setEditForm({ name: data.name || '', bio: data.bio || '' });
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.GET, `users/${user.uid}`);
        setError(isEn ? "Failed to load profile." : "加载个人资料失败。");
      } finally {
        setLoading(false);
      }
    }

    if (!authLoading) {
      fetchProfile();
    }
  }, [user, authLoading, isEn]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setSaving(true);
    setError(null);
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        name: editForm.name,
        bio: editForm.bio,
        updatedAt: new Date().toISOString()
      });
      setProfile(editForm);
      setEditing(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
      setError(isEn ? "Failed to save profile." : "保存个人资料失败。");
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen py-8 flex justify-center items-center">
        <p className="text-gfa-slate">{isEn ? "Loading..." : "加载中..."}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen py-8 flex flex-col justify-center items-center">
        <p className="text-gfa-slate mb-4">{isEn ? "Please log in to view your profile." : "请登录以查看您的个人资料。"}</p>
        <button
           onClick={() => setAuthModalOpen(true)}
           className="bg-[#C9A84C] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#b09241]"
        >
          {isEn ? "Sign In" : "登录"}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gfa-warmWhite py-8">
      <SEO title={isEn ? "User Profile | GFA" : "个人资料 | GFA"} />
      
      <div className="container-gfa max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-gfa-inkBlack mb-4">
          {isEn ? "My Profile" : "我的档案"}
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gfa-border p-8">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-3 text-sm">
              {error}
            </div>
          )}

          {!editing ? (
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-1">{isEn ? "Name" : "姓名"}</h3>
                <p className="text-lg text-gfa-inkBlack">{profile.name}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-1">{isEn ? "Bio" : "简介"}</h3>
                <p className="text-gfa-slate whitespace-pre-wrap">
                  {profile.bio || (isEn ? "No bio provided." : "暂无简介。")}
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setEditing(true)}
                  className="bg-gfa-inkBlack hover:bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
                >
                  {isEn ? "Edit Profile" : "编辑档案"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="block text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-2">
                  {isEn ? "Name" : "姓名"} *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 text-gfa-inkBlack focus:outline-none focus:border-[#C9A84C] transition-colors"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold tracking-widest text-[#C9A84C] uppercase mb-2">
                  {isEn ? "Bio" : "简介"}
                </label>
                <textarea
                  rows={4}
                  maxLength={500}
                  className="w-full bg-gfa-warmWhite border border-gfa-border rounded-lg px-4 py-3 text-gfa-inkBlack focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                />
                <p className="text-xs text-gfa-slate mt-2 text-right">{editForm.bio.length} / 500</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-gfa-inkBlack hover:bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-colors disabled:opacity-50"
                >
                  {saving ? (isEn ? "Saving..." : "保存中...") : (isEn ? "Save Changes" : "保存修改")}
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  disabled={saving}
                  className="border border-gfa-border hover:bg-gfa-warmWhite text-gfa-inkBlack px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-colors disabled:opacity-50"
                >
                  {isEn ? "Cancel" : "取消"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
