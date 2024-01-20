import apiItemsFactory from "../utils/apiItemsFactory";

const factory = apiItemsFactory("users");

export const getUsers = factory.getItems;
export const createEditUser = factory.createEditItem;
export const deleteUser = factory.deleteItem;
