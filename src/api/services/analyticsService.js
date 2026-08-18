import api from './api';
import { API_ROUTES } from '../constants/apiRoutes';

export const analyticsService = {
  /**
   * Fetch analytics & reports data for selected timeframe
   * @param {Object} params - { timeframe: '7d' | '30d' | '90d' | '1y' }
   */
  getAnalyticsReports: async (params = {}) => {
    const response = await api.get(API_ROUTES.ANALYTICS.GET_REPORTS, { params });
    return response.data;
  },
};
