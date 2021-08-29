import { LOCALSTORAGE_KEY, LOCALE_STRING } from "./config";

export const initLocalStorage = () => {
  if (!loadFromLocalStorage())
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify([]));
};

export const saveToLocalStorage = (value) =>
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(value));

export const loadFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

export const getCurrentDateTime = () =>
  new Date().toLocaleString(LOCALE_STRING);
