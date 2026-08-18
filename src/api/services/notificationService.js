import API from "./api";
import { API_ROUTES } from "../constants/apiRoutes";

export const adminNotificationService = {
  /**
   * Get paginated notifications for logged in admin
   */
  async getNotifications(params = { page: 1, limit: 15 }) {
    const response = await API.get(API_ROUTES.NOTIFICATIONS.GET_ALL, { params });
    return response.data;
  },

  /**
   * Get unread notification count
   */
  async getUnreadCount() {
    const response = await API.get(API_ROUTES.NOTIFICATIONS.GET_UNREAD_COUNT);
    return response.data;
  },

  /**
   * Mark notification(s) as read
   */
  async markAsRead(notificationId = null) {
    const response = await API.patch(API_ROUTES.NOTIFICATIONS.MARK_READ, { notificationId });
    return response.data;
  },

  /**
   * Delete notification(s)
   */
  async deleteNotification(notificationId = null) {
    const response = await API.delete(API_ROUTES.NOTIFICATIONS.DELETE, {
      params: notificationId ? { notificationId } : {}
    });
    return response.data;
  }
};
