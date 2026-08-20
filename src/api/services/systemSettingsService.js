import { mockSettings } from "../mockData";

export const systemSettingsService = {
  /**
   * Fetch system settings (logo, platform name, notification alerts)
   */
  async getSettings() {
    // Return logo URL as a full frontend URL to bypass backend prefixing in getImageUrl
    const logoUrl = mockSettings.logoUrl.startsWith('http') 
      ? mockSettings.logoUrl 
      : `${window.location.origin}${mockSettings.logoUrl}`;

    return {
      success: true,
      message: "Settings fetched successfully",
      data: {
        ...mockSettings,
        logoUrl
      }
    };
  },

  /**
   * Update system settings (FormData for optional logo file + settings fields)
   */
  async updateSettings(formData) {
    if (formData instanceof FormData) {
      if (formData.has('platformName')) mockSettings.platformName = formData.get('platformName');
      if (formData.has('emailNotifications')) mockSettings.emailNotifications = formData.get('emailNotifications') === 'true';
      if (formData.has('realtimeSocketAlerts')) mockSettings.realtimeSocketAlerts = formData.get('realtimeSocketAlerts') === 'true';
      if (formData.has('newBookingAlerts')) mockSettings.newBookingAlerts = formData.get('newBookingAlerts') === 'true';
      if (formData.has('quotationAlerts')) mockSettings.quotationAlerts = formData.get('quotationAlerts') === 'true';
      if (formData.has('settlementAlerts')) mockSettings.settlementAlerts = formData.get('settlementAlerts') === 'true';
      if (formData.has('userRegistrationAlerts')) mockSettings.userRegistrationAlerts = formData.get('userRegistrationAlerts') === 'true';
      
      // If a file is uploaded for the logo, generate an object URL for preview
      const logoFile = formData.get('logo');
      if (logoFile && logoFile instanceof File && logoFile.size > 0) {
        mockSettings.logoUrl = URL.createObjectURL(logoFile);
      }
    } else if (formData && typeof formData === 'object') {
      Object.assign(mockSettings, formData);
    }

    const logoUrl = mockSettings.logoUrl.startsWith('http') 
      ? mockSettings.logoUrl 
      : `${window.location.origin}${mockSettings.logoUrl}`;

    return {
      success: true,
      message: "Settings updated successfully",
      data: {
        ...mockSettings,
        logoUrl
      }
    };
  },
};
