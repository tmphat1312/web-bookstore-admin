import apiItemsFactory from "../utils/apiItemsFactory";
import axiosClient from "../utils/axios";

const factory = apiItemsFactory("books");

export const getBooks = factory.getItems;
export const getBook = factory.getItemById;
export const createEditBook = factory.createEditItem;
export const deleteBook = factory.deleteItem;
export const getBookCategories = async function () {
  const { data } = await axiosClient.get("/categories");

  return data;
};
