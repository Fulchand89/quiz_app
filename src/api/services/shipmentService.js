import api from "./api";
import { API_ROUTES } from "../constants/apiRoutes";

class ShipmentService {
  async getAllShipments(params = {}) {
    const response = await api.get(API_ROUTES.SHIPMENTS.GET_ALL, { params });
    return response.data;
  }

  async getShipmentStats(params = {}) {
    const response = await api.get(API_ROUTES.SHIPMENTS.GET_STATS, { params });
    return response.data;
  }

  async getOrderProgress(params = {}) {
    const response = await api.get(API_ROUTES.SHIPMENTS.GET_PROGRESS, { params });
    return response.data;
  }

  async getOrderProgressStats(params = {}) {
    const response = await api.get(API_ROUTES.SHIPMENTS.GET_PROGRESS_STATS, { params });
    return response.data;
  }

  async getShipmentTrackingHistory(shipmentId) {
    const response = await api.get(API_ROUTES.SHIPMENTS.GET_TRACKING_HISTORY(shipmentId));
    return response.data;
  }

  async getShipmentById(id) {
    const response = await api.get(API_ROUTES.SHIPMENTS.GET_BY_ID(id));
    return response.data;
  }

  async getShipmentQuotations(id, params = {}) {
    const response = await api.get(API_ROUTES.SHIPMENTS.GET_QUOTATIONS(id), { params });
    return response.data;
  }

  async verifyPayment(receiptId, data = { action: 'approve' }) {
    const response = await api.post(API_ROUTES.PAYMENTS.VERIFY(receiptId), data);
    return response.data;
  }
}

export default new ShipmentService();
