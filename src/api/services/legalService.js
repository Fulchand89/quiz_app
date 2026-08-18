import api from "./api";
import { API_ROUTES } from "../constants/apiRoutes";

class LegalService {
  // Terms & Conditions APIs
  async getTermsConditions(type = "customer") {
    const response = await api.get(API_ROUTES.TERMS_CONDITIONS.GET_ALL, {
      params: { type },
    });
    return response.data;
  }

  async publishTermsConditions(data) {
    const response = await api.post(API_ROUTES.TERMS_CONDITIONS.PUBLISH, data);
    return response.data;
  }

  async toggleTermsStatus(id) {
    const response = await api.patch(API_ROUTES.TERMS_CONDITIONS.TOGGLE_STATUS(id));
    return response.data;
  }

  async restoreTermsVersion(id) {
    const response = await api.post(API_ROUTES.TERMS_CONDITIONS.RESTORE(id));
    return response.data;
  }

  // Privacy Policy APIs
  async getPrivacyPolicies(type = "customer") {
    const response = await api.get(API_ROUTES.PRIVACY_POLICIES.GET_ALL, {
      params: { type },
    });
    return response.data;
  }

  async publishPrivacyPolicy(data) {
    const response = await api.post(API_ROUTES.PRIVACY_POLICIES.PUBLISH, data);
    return response.data;
  }

  async togglePrivacyStatus(id) {
    const response = await api.patch(API_ROUTES.PRIVACY_POLICIES.TOGGLE_STATUS(id));
    return response.data;
  }

  async restorePrivacyVersion(id) {
    const response = await api.post(API_ROUTES.PRIVACY_POLICIES.RESTORE(id));
    return response.data;
  }
  // Support Contact APIs
  async getSupportContact() {
    const response = await api.get(API_ROUTES.SUPPORT_CONTACT.GET);
    return response.data;
  }

  async updateSupportContact(data) {
    const response = await api.put(API_ROUTES.SUPPORT_CONTACT.UPDATE, data);
    return response.data;
  }
}

export default new LegalService();
