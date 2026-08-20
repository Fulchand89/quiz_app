import api from './api';
import { API_ROUTES } from '../constants/apiRoutes';

export const featureService = {
  getPublicFeatures: async (contestId) => {
    const url = contestId ? `${API_ROUTES.FEATURES.GET_PUBLIC}?contestId=${contestId}` : API_ROUTES.FEATURES.GET_PUBLIC;
    const response = await api.get(url);
    return response.data;
  },
  getFeatures: async (contestId) => {
    const url = contestId ? `${API_ROUTES.FEATURES.GET_ALL}?contestId=${contestId}` : API_ROUTES.FEATURES.GET_ALL;
    const response = await api.get(url);
    return response.data;
  },
  createFeature: async (data) => {
    const response = await api.post(API_ROUTES.FEATURES.CREATE, data);
    return response.data;
  },
  updateFeature: async (id, data) => {
    const response = await api.put(API_ROUTES.FEATURES.UPDATE(id), data);
    return response.data;
  },
  deleteFeature: async (id) => {
    const response = await api.delete(API_ROUTES.FEATURES.DELETE(id));
    return response.data;
  },
};
