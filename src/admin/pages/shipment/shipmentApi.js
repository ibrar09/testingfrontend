import axios from "axios";
import { BACKEND_URL } from "../../../api/config";

const API_URL = `${BACKEND_URL}/api/shipments`;

export const getAllShipments = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createShipment = async (shipmentData) => {
  const { data } = await axios.post(API_URL, shipmentData);
  return data;
};

export const updateShipmentStatus = async (id, statusData) => {
  const { data } = await axios.put(`${API_URL}/${id}/status`, statusData);
  return data;
};
