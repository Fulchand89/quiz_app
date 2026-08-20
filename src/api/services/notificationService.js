import { mockNotifications } from "../mockData";

export const adminNotificationService = {
  /**
   * Get paginated notifications for logged in admin
   */
  async getNotifications(params = { page: 1, limit: 15 }) {
    const page = params.page || 1;
    const limit = params.limit || 15;
    const startIdx = (page - 1) * limit;
    const endIdx = page * limit;

    const unreadCount = mockNotifications.filter(n => !n.isRead).length;
    const paginatedNotifs = mockNotifications.slice(startIdx, endIdx);

    return {
      success: true,
      message: "Notifications fetched successfully",
      data: {
        notifications: paginatedNotifs,
        unreadCount: unreadCount,
        pagination: {
          totalPages: Math.ceil(mockNotifications.length / limit),
          totalItems: mockNotifications.length,
          currentPage: page,
          limit: limit
        }
      }
    };
  },

  /**
   * Get unread notification count
   */
  async getUnreadCount() {
    const unreadCount = mockNotifications.filter(n => !n.isRead).length;
    return {
      success: true,
      data: {
        unreadCount
      }
    };
  },

  /**
   * Mark notification(s) as read
   */
  async markAsRead(notificationId = null) {
    if (notificationId) {
      const numericId = parseInt(notificationId, 10);
      const notif = mockNotifications.find(n => n.id === numericId);
      if (notif) {
        notif.isRead = true;
      }
    } else {
      mockNotifications.forEach(n => {
        n.isRead = true;
      });
    }

    return {
      success: true,
      message: "Notification(s) marked as read"
    };
  },

  /**
   * Delete notification(s)
   */
  async deleteNotification(notificationId = null) {
    if (notificationId) {
      const numericId = parseInt(notificationId, 10);
      const idx = mockNotifications.findIndex(n => n.id === numericId);
      if (idx !== -1) {
        mockNotifications.splice(idx, 1);
      }
    } else {
      mockNotifications.length = 0; // Clear all
    }

    return {
      success: true,
      message: "Notification(s) deleted successfully"
    };
  }
};
