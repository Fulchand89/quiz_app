import api from './api';
import { API_ROUTES } from '../constants/apiRoutes';

export const categoryService = {
  getPublicCategories: async () => {
    const response = await api.get(API_ROUTES.CATEGORIES.GET_PUBLIC);
    return response.data;
  },
  getCategories: async () => {
    const response = await api.get(API_ROUTES.CATEGORIES.GET_ALL);
    return response.data;
  },
  createCategory: async (data) => {
    const response = await api.post(API_ROUTES.CATEGORIES.CREATE, data);
    return response.data;
  },
  updateCategory: async (id, data) => {
    const response = await api.put(API_ROUTES.CATEGORIES.UPDATE(id), data);
    return response.data;
  },
  deleteCategory: async (id) => {
    const response = await api.delete(API_ROUTES.CATEGORIES.DELETE(id));
    return response.data;
  },
};
