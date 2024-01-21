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
    async createEditItem(data = {}, id) {
      const { image, ...fields } = data;
      let postData = fields;
      let config = {};

      if (image) {
        const formData = new FormData();

        formData.append("image", image);
        Object.keys(fields).forEach((key) => {
          formData.append(key, fields[key]);
        });

        postData = formData;
        config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      }

      if (id) {
        const { data } = await axiosClient.patch(
          `${name}/${id}`,
          postData,
          config
        );

        return data;
      }

      const { data: res } = await axiosClient.post(
        name,
        Array.isArray(data) ? data : postData,
        config
      );

      return res;
    },
  };
}
