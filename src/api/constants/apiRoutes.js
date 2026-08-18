export const API_ROUTES = {
  AUTH: {
    LOGIN: "auth/login/admin",
    REGISTER: "auth/register",
    PROFILE: "auth/me",
    LOGOUT: "auth/logout",
  },
  USER_MANAGEMENT: {
    CUSTOMERS: "admin/user-management/customers",
    DRIVERS: "admin/user-management/drivers",
    TOGGLE_STATUS: (id) => `admin/user-management/users/${id}/status`,
    UPDATE_VERIFICATION: (id) => `admin/user-management/users/${id}/verification`,
    UPDATE_USER: (id) => `admin/user-management/users/${id}`,
    CHANGE_PASSWORD: (id) => `admin/user-management/users/${id}/password`,
  },
  ACTIVITY_LOGS: {
    GET_LOGS: "admin/activity-logs",
    GET_STATS: "admin/activity-logs/stats",
  },
  SHIPMENTS: {
    GET_ALL: "admin/shipments",
    GET_STATS: "admin/shipments/stats",
    GET_PROGRESS: "admin/shipments/progress",
    GET_PROGRESS_STATS: "admin/shipments/progress-stats",
    GET_TRACKING_HISTORY: (id) => `admin/shipments/${id}/tracking-history`,
    GET_BY_ID: (id) => `admin/shipments/${id}`,
    GET_QUOTATIONS: (id) => `admin/shipments/${id}/quotations`,
  },
  QUOTATIONS: {
    GET_ALL: "admin/quotations",
    GET_STATS: "admin/quotations/stats",
    GET_BY_ID: (id) => `admin/quotations/${id}`,
  },
  PAYMENTS: {
    GET_ALL: "admin/payments",
    GET_STATS: "admin/payments/stats",
    VERIFY: (receiptId) => `admin/payments/${receiptId}/verify`,
  },
  TERMS_CONDITIONS: {
    GET_ALL: "admin/terms-conditions",
    PUBLISH: "admin/terms-conditions",
    TOGGLE_STATUS: (id) => `admin/terms-conditions/${id}/status`,
    RESTORE: (id) => `admin/terms-conditions/${id}/restore`,
  },
  PRIVACY_POLICIES: {
    GET_ALL: "admin/privacy-policies",
    PUBLISH: "admin/privacy-policies",
    TOGGLE_STATUS: (id) => `admin/privacy-policies/${id}/status`,
    RESTORE: (id) => `admin/privacy-policies/${id}/restore`,
  },
  SUPPORT_CONTACT: {
    GET: "admin/support-contacts",
    UPDATE: "admin/support-contacts",
  },
  REVIEWS: {
    GET_ALL: "admin/reviews",
    GET_STATS: "admin/reviews/stats",
    GET_DRIVER_SUMMARY: "admin/reviews/driver-summary",
  },
  REWARDS: {
    SEARCH_USERS: "admin/rewards/users/search",
    ALLOCATE: "admin/rewards/allocate",
    HISTORY: "admin/rewards/history",
    STATS: "admin/rewards/stats",
  },
  SETTLEMENTS: {
    GET_ALL: "admin/settlements",
    GET_STATS: "admin/settlements/stats",
    GET_BY_ID: (id) => `admin/settlements/${id}`,
    PROCESS: "admin/settlements/process",
    GET_DRIVER_TRANSACTIONS: (driverId) => `admin/settlements/driver/${driverId}/transactions`,
  },
  ANALYTICS: {
    GET_REPORTS: "admin/analytics/reports",
  },
  NOTIFICATIONS: {
    GET_ALL: "admin/notifications",
    GET_UNREAD_COUNT: "admin/notifications/unread-count",
    MARK_READ: "admin/notifications/read",
    DELETE: "admin/notifications",
  },
  SETTINGS: {
    GET: "admin/settings",
    UPDATE: "admin/settings",
  },
};