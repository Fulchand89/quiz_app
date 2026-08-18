import api from "./api";
import { API_ROUTES } from "../constants/apiRoutes";

class AuthService {
  async login(credentials) {
    const response = await api.post(API_ROUTES.AUTH.LOGIN, credentials);
    return response.data;
  }

  async getProfile() {
    const response = await api.get(API_ROUTES.AUTH.PROFILE);
    return response.data;
  }

  async updateProfile(formData) {
    const response = await api.put(API_ROUTES.AUTH.PROFILE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  async deleteProfilePic() {
    const response = await api.delete(`${API_ROUTES.AUTH.PROFILE}/profile-pic`);
    return response.data;
  }

  async changePassword(passwords) {
    const response = await api.put(`${API_ROUTES.AUTH.PROFILE}/change-password`, passwords);
    return response.data;
  }

  async logout() {
    const response = await api.post(API_ROUTES.AUTH.LOGOUT);
    return response.data;
  }
}

export default new AuthService();