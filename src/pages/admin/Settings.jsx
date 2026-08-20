import React, { useState, useEffect } from 'react';
import {
  Bell,
  Save,
  Globe,
  Upload,
  Trash2,
  Settings,
  CheckCircle,
  RotateCw,
  Shield,
  Zap,
  Users,
  Trophy,
  CreditCard,
  AlertCircle,
  ImageIcon,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { systemSettingsService } from '../../api/services/systemSettingsService';
import { getImageUrl } from '../../utils/image';

/* ── Toggle Switch Component ── */
function ToggleSwitch({ checked, onChange, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 focus:outline-none shrink-0 ${
        checked ? '' : 'bg-white/15'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={checked ? { background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' } : {}}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

/* ── Section Card ── */
function SectionCard({ icon: Icon, title, subtitle, children, badge }) {
  return (
    <div className="bg-[#0f1117] rounded-2xl border border-white/10 overflow-hidden">
      <div className="px-5 py-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between items-start gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#E94B4B]/15 flex items-center justify-center shrink-0">
            <Icon className="w-4.5 h-4.5 text-[#E94B4B]" style={{ width: '18px', height: '18px' }} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">{title}</h2>
            {subtitle && <p className="text-[11px] text-white/50 mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {badge && (
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#E94B4B]/15 text-[#E94B4B] border border-[#E94B4B]/20 shrink-0 self-start sm:self-auto">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/* ── Notification Row ── */
function NotifRow({ icon: Icon, title, desc, settingKey, settings, onToggle, color = 'text-[#E94B4B]' }) {
  const isOn = settings[settingKey] !== false;
  return (
    <div className="flex items-center justify-between gap-4 py-3.5 border-b border-white/6 last:border-0">
      <div className="flex items-center gap-3 min-w-0">
        <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ${color}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <h4 className="text-xs font-semibold text-white leading-snug">{title}</h4>
          <p className="text-[11px] text-white/45 mt-0.5 leading-relaxed break-words">{desc}</p>
        </div>
      </div>
      <ToggleSwitch checked={isOn} onChange={() => onToggle(settingKey)} />
    </div>
  );
}

/* ── Main Settings Page ── */
const SettingsPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [logoFile, setLogoFile] = useState(null);
  const [activeTab, setActiveTab] = useState('general');

  const [settings, setSettings] = useState({
    platformName: 'KnowChamp',
    logoUrl: '/logo_knowchamp.png',
    logoPreview: '/logo_knowchamp.png',
    emailNotifications: true,
    realtimeSocketAlerts: true,
    newBookingAlerts: true,
    quotationAlerts: true,
    settlementAlerts: true,
    userRegistrationAlerts: true,
  });

  const fetchBackendSettings = async () => {
    try {
      setLoading(true);
      const res = await systemSettingsService.getSettings();
      if (res?.data) {
        const fetched = res.data;
        const logoPath = fetched.logoUrl ? getImageUrl(fetched.logoUrl) : '/logo_knowchamp.png';
        setSettings(prev => ({
          ...prev,
          ...fetched,
          logoPreview: logoPath,
        }));
      }
    } catch (err) {
      console.error('Fetch settings error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBackendSettings();
  }, []);

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      const formData = new FormData();
      formData.append('platformName', settings.platformName || 'KnowChamp');
      formData.append('realtimeSocketAlerts', String(settings.realtimeSocketAlerts));
      formData.append('newBookingAlerts', String(settings.newBookingAlerts));
      formData.append('quotationAlerts', String(settings.quotationAlerts));
      formData.append('settlementAlerts', String(settings.settlementAlerts));
      formData.append('userRegistrationAlerts', String(settings.userRegistrationAlerts !== false));
      if (logoFile) {
        formData.append('logo', logoFile);
      }
      const res = await systemSettingsService.updateSettings(formData);
      if (res?.data) {
        const updated = res.data;
        const logoPath = updated.logoUrl ? getImageUrl(updated.logoUrl) : settings.logoPreview;
        setSettings(prev => ({ ...prev, ...updated, logoPreview: logoPath }));
      }
      toast.success('Platform settings saved successfully!');
      setLogoFile(null);
    } catch (err) {
      console.error('Save settings error:', err);
      toast.error('Failed to save settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const TABS = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  const activeNotifCount = [
    settings.realtimeSocketAlerts,
    settings.newBookingAlerts,
    settings.quotationAlerts,
    settings.settlementAlerts,
    settings.userRegistrationAlerts !== false,
  ].filter(Boolean).length;

  return (
    <div className="space-y-5 w-full">

      {/* ── Page Header ── */}
      <div className="bg-[#0f1117] rounded-2xl border border-white/10 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E94B4B]/15 flex items-center justify-center">
            <Settings className="w-5 h-5 text-[#E94B4B]" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-white">Platform Settings</h1>
            <p className="text-[11px] text-white/50 mt-0.5">
              Configure KnowChamp global preferences, branding & notification rules.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          {/* Status chips */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-green-400">System Active</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E94B4B]/10 border border-[#E94B4B]/20 rounded-lg">
            <Bell className="w-3 h-3 text-[#E94B4B]" />
            <span className="text-[11px] font-semibold text-[#E94B4B]">{activeNotifCount}/5 Alerts On</span>
          </div>
        </div>
      </div>

      {/* ── Tab Navigation ── */}
      <div className="flex items-center gap-1 bg-[#0f1117] border border-white/10 rounded-xl p-1 w-fit">
        {TABS.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'text-white shadow-sm'
                  : 'text-white/50 hover:text-white hover:bg-white/8'
              }`}
              style={isActive ? { background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' } : {}}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleSaveSettings} className="space-y-5">

        {/* ── General Tab ── */}
        {activeTab === 'general' && (
          <>
            {/* Branding */}
            <SectionCard
              icon={Globe}
              title="Brand & Identity"
              subtitle="Configure KnowChamp platform name and logo displayed across the app."
              badge="Branding"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {/* Platform Name */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-2">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    value={settings.platformName}
                    onChange={(e) => handleChange('platformName', e.target.value)}
                    placeholder="KnowChamp"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white placeholder-white/25 focus:outline-none focus:border-[#E94B4B] focus:ring-1 focus:ring-[#E94B4B]/30 transition-all"
                  />
                  <p className="text-[11px] text-white/35 mt-1.5">
                    Shown in sidebar, header, and email templates.
                  </p>
                </div>

                {/* Logo Upload */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-2">
                    Platform Logo
                  </label>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    {/* Preview */}
                    <div className="w-16 h-16 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 relative">
                      {imgLoading && (
                        <div className="absolute inset-0 bg-white/10 animate-pulse rounded-xl flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-white/20" />
                        </div>
                      )}
                      <img
                        src={settings.logoPreview || '/logo_knowchamp.png'}
                        alt="Logo Preview"
                        onLoad={() => setImgLoading(false)}
                        onError={(e) => {
                          setImgLoading(false);
                          e.target.onerror = null;
                          e.target.src = '/logo_knowchamp.png';
                        }}
                        className={`w-full h-full object-contain p-1 transition-all duration-300 ${
                          imgLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                    </div>

                    {/* Actions */}
                    <div className="flex-1 min-w-0 space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <label className="inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-[11px] font-bold rounded-lg transition-all cursor-pointer hover:opacity-90" style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}>
                          <Upload className="w-3 h-3" />
                          <span>Upload Logo</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                if (file.size > 2 * 1024 * 1024) {
                                  toast.error('Logo must be under 2MB');
                                  return;
                                }
                                const url = URL.createObjectURL(file);
                                setLogoFile(file);
                                handleChange('logoPreview', url);
                                setImgLoading(false);
                                toast.success('Logo selected — save to apply.');
                              }
                            }}
                            className="hidden"
                          />
                        </label>

                        {(logoFile || (settings.logoUrl && settings.logoUrl !== '/logo_knowchamp.png')) && (
                          <button
                            type="button"
                            onClick={async () => {
                              try {
                                setLogoFile(null);
                                const formData = new FormData();
                                formData.append('logoUrl', '/logo_knowchamp.png');
                                await systemSettingsService.updateSettings(formData);
                                setSettings(prev => ({
                                  ...prev,
                                  logoUrl: '/logo_knowchamp.png',
                                  logoPreview: '/logo_knowchamp.png',
                                }));
                                toast.success('Logo reset to default.');
                              } catch {
                                toast.error('Failed to remove logo.');
                              }
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 text-[11px] font-bold rounded-lg transition-all cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                      <p className="text-[10px] text-white/30">PNG, SVG, WEBP · Max 2MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* Platform Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Trophy, label: 'Quiz Contests', value: 'Active', color: 'text-amber-400', bg: 'bg-amber-400/10' },
                { icon: Users, label: 'User Base', value: 'Growing', color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { icon: CreditCard, label: 'Payments', value: 'Secured', color: 'text-green-400', bg: 'bg-green-400/10' },
                { icon: Shield, label: 'Data Safety', value: 'Encrypted', color: 'text-purple-400', bg: 'bg-purple-400/10' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#0f1117] rounded-xl border border-white/10 p-4 flex flex-col gap-2"
                >
                  <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-medium">{item.label}</p>
                    <p className={`text-xs font-bold ${item.color}`}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── Notifications Tab ── */}
        {activeTab === 'notifications' && (
          <>
            <SectionCard
              icon={Zap}
              title="Real-Time Alert Channels"
              subtitle="Control which events trigger live pop-up notifications in the admin header."
              badge={`${activeNotifCount} Active`}
            >
              <NotifRow
                icon={Bell}
                title="Real-Time Header Notifications"
                desc="Show new alerts immediately in the top header bell dropdown."
                settingKey="realtimeSocketAlerts"
                settings={settings}
                onToggle={handleToggle}
                color="text-[#E94B4B]"
              />
              <NotifRow
                icon={Trophy}
                title="New Contest Activity"
                desc="Trigger notification when a new contest is created or goes live."
                settingKey="newBookingAlerts"
                settings={settings}
                onToggle={handleToggle}
                color="text-amber-400"
              />
              <NotifRow
                icon={CreditCard}
                title="Transaction & Payment Alerts"
                desc="Notify on new payment, transaction processed, or entry fee collected."
                settingKey="quotationAlerts"
                settings={settings}
                onToggle={handleToggle}
                color="text-blue-400"
              />
              <NotifRow
                icon={CheckCircle}
                title="Withdrawal Settlement Alerts"
                desc="Notify when user withdrawal payout or settlement is processed."
                settingKey="settlementAlerts"
                settings={settings}
                onToggle={handleToggle}
                color="text-green-400"
              />
              <NotifRow
                icon={Users}
                title="User Registration & Onboarding"
                desc="Alert when a new user registers or submits onboarding details."
                settingKey="userRegistrationAlerts"
                settings={settings}
                onToggle={handleToggle}
                color="text-purple-400"
              />
            </SectionCard>

            {/* Alert summary */}
            <div className="bg-[#0f1117] rounded-xl border border-white/10 p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-white/30 shrink-0" />
              <p className="text-[11px] text-white/40 leading-relaxed">
                Notification changes take effect immediately after saving. Real-time alerts require an active WebSocket connection to the backend server.
              </p>
            </div>
          </>
        )}

        {/* ── Save Button ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <button
            type="button"
            onClick={fetchBackendSettings}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:bg-white/5 text-white/60 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
          >
            <RotateCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Reload Settings</span>
          </button>

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90"
            style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}
          >
            {saving ? (
              <>
                <RotateCw className="w-4 h-4 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Platform Settings</span>
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
};

export default SettingsPage;
