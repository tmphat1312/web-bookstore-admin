import apiItemsFactory from "../utils/apiItemsFactory";

const factory = apiItemsFactory("books");

export const getBooks = factory.getItems;
export const getBook = factory.getItemById;
export const createEditBook = factory.createEditItem;
export const deleteBook = factory.deleteItem;
