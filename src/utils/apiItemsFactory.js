import axiosClient from "./axios";
import { buildUrlParams } from "./apiFeatures";
import { PAGE_SIZE } from "../constants/api";

export default function apiItemsFactory(name) {
  return {
    async getItems(options = {}) {
      options.limit ??= PAGE_SIZE;

      const url = buildUrlParams(name, options);
      const res = await axiosClient(url);
      const count = Number(res.headers["x-total-count"]);

      return { data: res.data, count };
    },
    async getItemById(id) {
      const { data } = await axiosClient(`${name}/${id}`);

      return data;
    },
    async deleteItem(id) {
      await axiosClient.delete(`${name}/${id}`);
    },
    async createEditItem({ data: body = {}, id }) {
      let requestConfig = {};
      let requestBody = body;

      if ("image" in body) {
        const formData = new FormData();

        Object.entries(body).forEach(([key, value]) => {
          formData.append(key, value);
        });

        requestBody = formData;
        requestConfig = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      }

      const axiosConfig = {
        url: id ? `${name}/${id}` : name,
        method: id ? "patch" : "post",
        data: requestBody,
        config: requestConfig,
      };

      const res = await axiosClient(axiosConfig);

      return res.data;
    },
  };
}
