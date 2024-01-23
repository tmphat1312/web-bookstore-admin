import axiosClient from "../utils/axios";
import apiItemsFactory from "../utils/apiItemsFactory";

export async function countItems(name) {
  const url = name.includes("?") ? `${name}&limit=1` : `${name}?limit=1`;
  const res = await axiosClient(url);

  return Number(res.headers["x-total-count"]);
}

export async function countItemsByPath(path) {
  const { data } = await axiosClient(path);

  return data;
}

export const getSalesStatistics = apiItemsFactory(
  "/statistics/revenue-and-profit-stats"
).getItems;
