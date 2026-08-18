import API from "./api";
import { API_ROUTES } from "../constants/apiRoutes";

let settingsPromise = null;

export const systemSettingsService = {
  /**
   * Fetch system settings (logo, platform name, notification alerts)
   */
  async getSettings() {
    if (!settingsPromise) {
      settingsPromise = API.get(API_ROUTES.SETTINGS.GET)
        .then(response => response.data)
        .catch(err => {
          settingsPromise = null; // reset cache on failure so future attempts can retry
          throw err;
        });
    }
    return settingsPromise;
  },

  /**
   * Update system settings (FormData for optional logo file + settings fields)
   */
  async updateSettings(formData) {
    const response = await API.put(API_ROUTES.SETTINGS.UPDATE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    settingsPromise = null; // clear cache so next load gets updated settings
    return response.data;
  },
};
