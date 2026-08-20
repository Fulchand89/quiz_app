import api from './api';
import { API_ROUTES } from '../constants/apiRoutes';

export const contestService = {
  getPublicContests: async () => {
    const response = await api.get(API_ROUTES.CONTESTS.GET_PUBLIC);
    return response.data;
  },
  getContests: async () => {
    const response = await api.get(API_ROUTES.CONTESTS.GET_ALL);
    return response.data;
  },
  createContest: async (data) => {
    const response = await api.post(API_ROUTES.CONTESTS.CREATE, data);
    return response.data;
  },
  updateContest: async (id, data) => {
    const response = await api.put(API_ROUTES.CONTESTS.UPDATE(id), data);
    return response.data;
  },
  deleteContest: async (id) => {
    const response = await api.delete(API_ROUTES.CONTESTS.DELETE(id));
    return response.data;
  },
};
