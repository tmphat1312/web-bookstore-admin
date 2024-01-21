import apiItemsFactory from "../utils/apiItemsFactory";

const factory = apiItemsFactory("categories");

export const getCategories = factory.getItems;
export const createEditCategory = factory.createEditItem;
export const deleteCategory = factory.deleteItem;
