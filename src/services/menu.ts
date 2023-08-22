import type { Services } from "../types";

import { api } from "./api";

const initialize = () =>
  api
    .fetchMenu()
    .then((menu) => (window.app.store.menu = menu ?? []))
    .catch((error) => console.log(error));

const getProductById = async (productId: number) => {
  if (!window.app.store.menu.length) await initialize();

  for (const category of window.app.store.menu) {
    for (const product of category.products) {
      if (product.id === productId) {
        return product;
      }
    }
  }

  return undefined;
};

export const menu: Services["Menu"] = {
  getProductById,
  initialize,
};
