import Cookies from "js-cookie";
import { mockUserProfile } from "../mockData";

class AuthService {
  async login(credentials) {
    // Generate dummy token
    const token = 'mock-admin-session-token-12345';
    Cookies.set("adminToken", token, { expires: 7 });
    Cookies.set("token", token, { expires: 7 });
    localStorage.setItem("adminToken", token);
    localStorage.setItem("token", token);

    mockUserProfile.email = credentials.email || mockUserProfile.email;
    mockUserProfile.name = credentials.email ? credentials.email.split('@')[0] : mockUserProfile.name;

    Cookies.set("user", JSON.stringify(mockUserProfile), { expires: 7 });
    localStorage.setItem("user", JSON.stringify(mockUserProfile));

    return {
      success: true,
      message: "Login successful",
      data: {
        user: mockUserProfile,
        token: token
      }
    };
  }

  async getProfile() {
    const token = Cookies.get('token') || localStorage.getItem('token') || Cookies.get('adminToken') || localStorage.getItem('adminToken');
    if (!token) {
      throw { response: { status: 401, data: { message: "Unauthorized" } } };
    }

    return {
      success: true,
      data: mockUserProfile
    };
  }

  async updateProfile(formData) {
    if (formData instanceof FormData) {
      if (formData.has('name')) mockUserProfile.name = formData.get('name');
      if (formData.has('email')) mockUserProfile.email = formData.get('email');
    } else if (formData && typeof formData === 'object') {
      if (formData.name) mockUserProfile.name = formData.name;
      if (formData.email) mockUserProfile.email = formData.email;
    }

    Cookies.set("user", JSON.stringify(mockUserProfile), { expires: 7 });
    localStorage.setItem("user", JSON.stringify(mockUserProfile));

    return {
      success: true,
      message: "Profile updated successfully",
      data: {
        user: mockUserProfile
      }
    };
  }

  async deleteProfilePic() {
    mockUserProfile.profilePicUrl = null;
    Cookies.set("user", JSON.stringify(mockUserProfile), { expires: 7 });
    localStorage.setItem("user", JSON.stringify(mockUserProfile));

    return {
      success: true,
      message: "Profile picture removed successfully",
      data: {
        user: mockUserProfile
      }
    };
  }

  async changePassword(passwords) {
    return {
      success: true,
      message: "Password changed successfully"
    };
  }

  async logout() {
    Cookies.remove("token");
    Cookies.remove("adminToken");
    Cookies.remove("user");
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("user");

    return {
      success: true,
      message: "Logout successful"
    };
  }
}

export default new AuthService();