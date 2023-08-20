import type { MenuItems, Products, Services } from "../types";
import { EVENTS } from "../constants";

const store: Services["Store"] = {
  menu: [],
  cart: [],
};

const set = (
  target: Services["Store"],
  property: keyof Services["Store"],
  value: MenuItems & Products
) => {
  target[property] = value;

  if (property === "menu") {
    window.dispatchEvent(new Event(EVENTS.appMenuChange));
  }

  if (property === "cart") {
    window.dispatchEvent(new Event(EVENTS.appCartChange));
  }

  return true;
};

const handler = {
  set,
};

export const storeProxy = new Proxy(store, handler);
