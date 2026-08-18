import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Camera, 
  Save, 
  ShieldCheck, 
  CheckCircle2, 
  Loader2,
  Trash2,
  Lock,
  Eye,
  EyeOff,
  KeyRound
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { getImageUrl } from '../../utils/image';
import { toast } from 'react-hot-toast';
import authService from '../../api/services/authService';

const Profile = () => {
  const { user, updateProfile, removeProfilePic } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [profilePicFile, setProfilePicFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isDeletingPic, setIsDeletingPic] = useState(false);

  // Change Password State
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        mobile: user.mobile || user.phone || '',
      });
      if (!profilePicFile) {
        setPreviewUrl(user.profilePicUrl ? getImageUrl(user.profilePicUrl) : null);
      }
    }
  }, [user, profilePicFile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file (JPEG, PNG, WEBP)');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size must be less than 5MB');
        return;
      }
      setProfilePicFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemovePic = async () => {
    if (profilePicFile) {
      setProfilePicFile(null);
      setPreviewUrl(user?.profilePicUrl ? getImageUrl(user.profilePicUrl) : null);
      return;
    }

    if (user?.profilePicUrl) {
      try {
        setIsDeletingPic(true);
        await removeProfilePic();
        setPreviewUrl(null);
      } catch (err) {
        console.error('Failed to delete profile picture:', err);
      } finally {
        setIsDeletingPic(false);
      }
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('Name is required');
      return;
    }

    try {
      setIsUpdatingProfile(true);
      const data = new FormData();
      data.append('name', formData.name.trim());
      data.append('email', formData.email.trim());
      if (formData.mobile) data.append('mobile', formData.mobile.trim());
      if (profilePicFile) {
        data.append('profile_pic', profilePicFile);
      }

      await updateProfile(data);
      setProfilePicFile(null);
    } catch (err) {
      console.error('Failed to update profile:', err);
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!passwordData.currentPassword) {
      toast.error('Please enter your current password');
      return;
    }
    if (!passwordData.newPassword) {
      toast.error('Please enter your new password');
      return;
    }
    if (passwordData.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    try {
      setIsChangingPassword(true);
      const res = await authService.changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      toast.success(res.message || 'Password changed successfully!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to change password';
      toast.error(msg);
    } finally {
      setIsChangingPassword(false);
    }
  };

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || user?.name || 'Admin')}&background=fb7185&color=fff&font-size=0.4`;

  return (
    <div className="font-sans mx-auto space-y-6 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#fb7185] to-[#8C5223] rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-10">
          <ShieldCheck className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          
          {/* Avatar Upload Container */}
          <div className="relative group shrink-0">
            <img
              src={previewUrl || defaultAvatar}
              alt={formData.name || 'Admin'}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultAvatar;
              }}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white/80 shadow-lg bg-white"
            />
            
            {/* Upload Camera Badge */}
            <label className="absolute bottom-0 right-0 bg-white text-[#fb7185] p-2.5 rounded-full shadow-md cursor-pointer hover:bg-amber-50 hover:scale-105 transition-all" title="Upload new photo">
              <Camera className="w-4 h-4" />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="hidden" 
              />
            </label>

            {/* Remove Photo Button */}
            {(previewUrl || user?.profilePicUrl || profilePicFile) && (
              <button
                type="button"
                onClick={handleRemovePic}
                disabled={isDeletingPic}
                className="absolute top-0 right-0 bg-red-500 text-white p-1.5 rounded-full shadow-md hover:bg-red-600 transition-all cursor-pointer disabled:opacity-50"
                title="Remove photo"
              >
                {isDeletingPic ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold truncate">{user?.name || 'Administrator'}</h1>
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-xs capitalize border border-white/30">
                {user?.role || 'Super Admin'}
              </span>
            </div>
            <p className="text-white/80 text-sm font-medium mb-3">{user?.email}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-white/90">
              <span className="flex items-center gap-1.5 bg-black/10 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5" /> ID: <span className="font-mono font-bold">{user?.uuid || `ADM${user?.id || '01'}`}</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/10 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-300" /> Account Status: Active
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Profile Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/60 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#fb7185]" />
            <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
          </div>
          {profilePicFile && (
            <span className="text-xs font-bold text-[#fb7185] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              New profile photo selected
            </span>
          )}
        </div>

        <form onSubmit={handleProfileSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter full name"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#fb7185] focus:ring-1 focus:ring-[#fb7185] font-medium text-gray-800"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter email address"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#fb7185] focus:ring-1 focus:ring-[#fb7185] font-medium text-gray-800"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.mobile}
                  onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                  placeholder="Enter mobile number"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#fb7185] focus:ring-1 focus:ring-[#fb7185] font-medium text-gray-800"
                />
              </div>
            </div>

            {/* Role / Access Level */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                System Role
              </label>
              <div className="relative">
                <ShieldCheck className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={user?.role || 'Admin'}
                  disabled
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/70 font-semibold text-gray-600 capitalize cursor-not-allowed"
                />
              </div>
            </div>

          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button
              type="submit"
              disabled={isUpdatingProfile}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#fb7185] hover:bg-[#a56534] text-white font-bold rounded-xl text-sm transition-all shadow-sm cursor-pointer disabled:opacity-60"
            >
              {isUpdatingProfile ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving Changes...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Profile Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Standalone Change Password Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/60 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
          <KeyRound className="w-5 h-5 text-[#fb7185]" />
          <div>
            <h2 className="text-lg font-bold text-gray-900">Security & Password</h2>
            <p className="text-xs text-gray-500 font-medium">Update your account password safely</p>
          </div>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Current Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Current Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                  placeholder="Enter current password"
                  required
                  className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#fb7185] focus:ring-1 focus:ring-[#fb7185] font-medium text-gray-800"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                  placeholder="Min 6 characters"
                  required
                  minLength={6}
                  className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#fb7185] focus:ring-1 focus:ring-[#fb7185] font-medium text-gray-800"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Confirm New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  placeholder="Re-enter new password"
                  required
                  minLength={6}
                  className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#fb7185] focus:ring-1 focus:ring-[#fb7185] font-medium text-gray-800"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button
              type="submit"
              disabled={isChangingPassword}
              className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 hover:bg-black text-white font-bold rounded-xl text-sm transition-all shadow-sm cursor-pointer disabled:opacity-60"
            >
              {isChangingPassword ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Updating Password...
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4 text-[#fb7185]" />
                  Update Password
                </>
              )}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Profile;
