import axios from "axios";
import { API_BASE_URL } from "./config";

export const getProducts = async () => {
  const res = await axios.get(`${API_BASE_URL}/products`);
  return res.data;
};

export const createProduct = async (product) => {
  const res = await axios.post(`${API_BASE_URL}/products`, product);
  return res.data;
};
