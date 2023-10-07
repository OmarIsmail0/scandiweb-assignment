import axios from "axios";
import { url } from "../constants/Url";

export const getProducts = async () => {
  return axios.get(url.baseUrl);
};

export const deleteProduct = async (data) => {
  return axios.delete(url.baseUrl, { data: data });
};

export const postProduct = async (data) => {
  return axios.post(url.baseUrl, data);
};
